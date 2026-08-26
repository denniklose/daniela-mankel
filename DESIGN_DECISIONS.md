# Design- und UX-Protokoll

## Verbindliche Leitplanken

- Codebasis: ausschließlich die geklonte Editorial-Friseursalon-Vorlage.
- Dark-Editorial-/Bento-Richtung, Helvetica-orientierte UI-Schrift, geschwungene Serif-Akzentüberschriften und Champagner `#D9B47A` bleiben erhalten.
- Die öffentliche Vorschau trägt `noindex`, `nofollow` und `noarchive` in HTML, `robots.txt` und Vercel-Headern.
- Google Maps wird erst nach bewusstem Klick geladen.

## UI-Pro-Max-Gate

Ausgeführt am 26.08.2026 im Kundenprojekt:

```text
python3 /Users/tim/.codex/skills/ui-ux-pro-max/scripts/search.py "Daniela Mankel Friseursalon Beauty Service Dark Editorial Bento" --design-system --persist -p "Daniela Mankel Friseursalon" --variance 6 --motion 3 --density 4 -f markdown
python3 /Users/tim/.codex/skills/ui-ux-pro-max/scripts/search.py "salon website accessibility responsive navigation animation touch targets" --domain ux -n 10
```

Das erzeugte Protokoll liegt in `design-system/daniela-mankel-friseursalon/MASTER.md`. Die dort vorgeschlagene Pink-/Lavendel-Palette wurde zugunsten der ausdrücklich vorgegebenen Champagner-/Espresso-Palette nicht übernommen. Die Accessibility- und Responsive-Regeln wurden übernommen.

## Umgesetzte UX-Regeln

- 44px-Mindestgröße für Buttons, Menü und Textaktionen; mindestens 8px Abstand zwischen primären Aktionen.
- Sichtbare `:focus-visible`-Zustände, Skip-Link, semantische Überschriften, sinnvolle Bild-Alternativtexte und ARIA-Labels.
- Native `<details>`-Dropdowns für Leistungen; keine hover-only Informationen.
- Reduzierte Bewegung über `prefers-reduced-motion`; Hover verändert keine Layoutbreite.
- Mobile-first Layout ohne horizontales Scrollen; geprüft auf 390px, 768px und Desktop.
- Externe Karte erst nach Zustimmung; kein Formular und keine Datenübermittlung aus der Vorschau.

## Medien

Die Bildwelt ist KI-generiert und eigenständig: `daniela-hero.png`, `daniela-craft.png`, `daniela-salon.png` und `daniela-styling.png`. Sie stehen für redaktionelle Atmosphäre und werden nicht als echte Kunden-, Salon- oder Teamaufnahmen ausgegeben.
