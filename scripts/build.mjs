import { copyFile, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const output = path.join(root, ".site-build");
const excluded = new Set([".git", ".vercel", ".site-build", "node_modules", "design-system", "scripts", "test-results"]);
const excludedFiles = new Set([
  ".gitignore",
  ".vercelignore",
  "CUSTOMIZATION_CHECKLIST.md",
  "DESIGN_DECISIONS.md",
  "HANDOVER.md",
  "RESEARCH_LEDGER.md",
  "package-lock.json",
  "package.json",
  "PROJECT_README.md",
  "vercel.json",
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
async function copyDirectory(sourceDirectory) {
  const entries = await readdir(sourceDirectory, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && excluded.has(entry.name)) continue;
    const source = path.join(sourceDirectory, entry.name);
    const relative = path.relative(root, source);
    const destination = path.join(output, relative);
    if (entry.isDirectory()) {
      await mkdir(destination, { recursive: true });
      await copyDirectory(source);
    }
    if (entry.isFile() && !excludedFiles.has(entry.name) && !entry.name.endsWith(".md")) {
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(source, destination);
    }
  }
}

await copyDirectory(root);

console.log("Statischer Build erstellt: .site-build");
