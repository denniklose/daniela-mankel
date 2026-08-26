import { access, readdir, readFile, stat } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirectories = new Set([".git", ".vercel", ".site-build", "node_modules", "design-system", "scripts"]);
const requiredFiles = [
  "index.html",
  "startseite.html",
  "leistungen.html",
  "salon.html",
  "team.html",
  "oeffnungszeiten.html",
  "ueber-uns.html",
  "termin.html",
  "termin-buchen.html",
  "impressum.html",
  "datenschutz.html",
  "404.html",
  "assets/app.js",
  "assets/styles.css",
  "assets/brand-mark.svg",
  "assets/favicon.svg",
  "assets/images/daniela-hero.png",
  "assets/images/daniela-craft.png",
  "assets/images/daniela-salon.png",
  "assets/images/daniela-styling.png",
  "data/site-data.js",
  "robots.txt",
  "sitemap.xml",
  "vercel.json",
  "PROJECT_README.md",
  "DESIGN_DECISIONS.md",
  "HANDOVER.md",
  "SALON_RESEARCH_LEDGER.md",
];
const htmlPages = requiredFiles.filter((file) => file.endsWith(".html"));
const textExtensions = new Set([".html", ".js", ".json", ".css", ".md", ".txt", ".svg", ".xml"]);
const failures = [];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

async function exists(file) {
  try {
    await access(path.join(root, file), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(fullPath)));
    if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

for (const file of requiredFiles) {
  expect(await exists(file), `Pflichtdatei fehlt: ${file}`);
}

const sourceFiles = await listFiles(root);
const textFiles = sourceFiles.filter((file) => textExtensions.has(path.extname(file).toLowerCase()));
const textSources = new Map(await Promise.all(textFiles.map(async (file) => [file, await readFile(file, "utf8")])));

for (const page of htmlPages) {
  const content = textSources.get(path.join(root, page)) || "";
  expect(content.includes('meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex"'), `${page}: Preview-Robots-Meta fehlt`);
  expect(content.includes('id="site-root"'), `${page}: Site-Root fehlt`);
  expect(content.includes('type="module" src="/assets/app.js"'), `${page}: App-Modul fehlt`);
  expect(/data-page="[a-z-]+"/.test(content), `${page}: Seitenkennung fehlt`);
}

const app = textSources.get(path.join(root, "assets/app.js")) || "";
const config = textSources.get(path.join(root, "data/site-data.js")) || "";
const styles = textSources.get(path.join(root, "assets/styles.css")) || "";
const vercelConfig = textSources.get(path.join(root, "vercel.json")) || "";
const robots = textSources.get(path.join(root, "robots.txt")) || "";

expect(config.includes('mode: "customer-preview"'), "Kunden-Vorschau-Modus fehlt");
expect(config.includes('name: "Daniela Mankel"'), "Salonname fehlt in der zentralen Konfiguration");
expect(config.includes('phoneHref: "tel:+4927328797"'), "Bestätigter Telefon-Terminweg fehlt");
expect(config.includes("routeUrl:"), "Maps-Route fehlt");
expect(config.includes("embedUrl:"), "Maps-Embed-Ziel fehlt");
expect(app.includes("<details class=\"service-dropdown\""), "Leistungsdropdowns fehlen");
expect(app.includes("data-map-trigger"), "Map-Consent-Trigger fehlt");
expect(app.includes("target.replaceChildren(iframe, controls)"), "Map wird nicht erst nach Zustimmung eingebettet");
expect(styles.toLowerCase().includes("#d9b47a"), "Champagner-Akzent #D9B47A fehlt");
expect(styles.includes("prefers-reduced-motion"), "Reduced-Motion-Regel fehlt");
expect(styles.includes("min-height: 44px"), "Touch-Ziel-Regel fehlt");
expect(robots.includes("Disallow: /"), "robots.txt sperrt Indexierung nicht");
expect(vercelConfig.includes("X-Robots-Tag"), "Vercel X-Robots-Tag fehlt");
expect(vercelConfig.includes("noindex, nofollow, noarchive"), "Vercel noindex-Wert fehlt");

const forbiddenMarkers = [
  "workhub",
  "coworking",
  "uupm.cc",
  "janssen",
  "rohstoff",
  "friseursalon website-vorlage",
  "demo-vorlage",
  "bildplatzhalter",
  "[salonname]",
  "[musterstraße",
  "[telefonnummer]",
  "lorem ipsum",
];
for (const [file, content] of textSources) {
  const relative = path.relative(root, file);
  const normalized = content.toLowerCase();
  for (const marker of forbiddenMarkers) {
    expect(!normalized.includes(marker), `${relative}: alter Marker gefunden: ${marker}`);
  }
  expect(!/<form\b|\b(?:fetch|XMLHttpRequest)\s*\(/i.test(content), `${relative}: Formular- oder Datenübermittlungslogik gefunden`);
}

for (const image of [
  "assets/images/daniela-hero.png",
  "assets/images/daniela-craft.png",
  "assets/images/daniela-salon.png",
  "assets/images/daniela-styling.png",
]) {
  const imageStats = await stat(path.join(root, image));
  expect(imageStats.size > 100_000, `${image}: Bilddatei ist nicht plausibel vorhanden`);
}

if (await exists(".site-build")) {
  const outputFiles = await listFiles(path.join(root, ".site-build"));
  for (const file of outputFiles) {
    const relative = path.relative(root, file);
    expect(!relative.endsWith(".md"), `${relative}: interne Markdown-Datei im öffentlichen Build`);
    if (textExtensions.has(path.extname(file).toLowerCase())) {
      const content = (await readFile(file, "utf8")).toLowerCase();
      for (const marker of forbiddenMarkers) {
        expect(!content.includes(marker), `${relative}: alter Marker im öffentlichen Build: ${marker}`);
      }
    }
  }
}

if (failures.length) {
  console.error("Customer-Check fehlgeschlagen:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Customer-Check bestanden: ${htmlPages.length} Routen, Preview-Schutz, Medien und No-Placeholder-Gate geprüft.`);
}
