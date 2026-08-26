import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const required = ["PROJECT_README.md", "DESIGN_DECISIONS.md", "HANDOVER.md", "SALON_RESEARCH_LEDGER.md"];

for (const file of required) {
  await access(path.join(root, file), constants.F_OK);
}

const config = await readFile(path.join(root, "data/site-data.js"), "utf8");
if (!config.includes('mode: "customer-preview"')) {
  throw new Error("Handover-Check erwartet den Kunden-Vorschau-Modus.");
}
if (config.includes("[OFFEN]") || config.includes("[SALONNAME]")) {
  throw new Error("Handover-Check findet unaufgelöste Template-Platzhalter in den Kundendaten.");
}

console.log("Handover-Check bestanden: Research-Ledger, Design-Protokoll und Kunden-Vorschau vorhanden.");
