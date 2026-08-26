# Daniela Mankel · Friseursalon in Kreuztal

Statische, mehrseitige Kunden-Vorschau auf Basis der Editorial-Friseursalon-Codebasis.

## Lokal starten

```bash
npm install
npm run dev
```

Danach `http://localhost:4173/` öffnen.

## Architektur

- Inhalte: `data/site-data.js`
- Rendering und Interaktionen: `assets/app.js`
- Editorial-/Bento-System: `assets/styles.css`
- Seiten: statische HTML-Dateien mit clean URLs über `vercel.json`
- Recherche und offene Freigaben: `SALON_RESEARCH_LEDGER.md` und `HANDOVER.md`
- UX-Protokoll: `DESIGN_DECISIONS.md` und `design-system/daniela-mankel-friseursalon/MASTER.md`

Die Vorschau ist noindex und noarchive. Sie enthält keine Formulare, Analytics oder erfundenen Betreiberangaben.
