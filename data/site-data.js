/**
 * Zentrale, geprüfte Inhalte für die Kunden-Vorschau von Daniela Mankel.
 *
 * Die Preview nutzt nur öffentlich auffindbare Kontaktdaten. Nicht bestätigte
 * Betreiberangaben, Teamprofile, Preise und Online-Buchung bleiben bewusst
 * offen und werden im Research-Ledger für die Freigabe dokumentiert.
 */
export const site = {
  mode: "customer-preview",
  previewLabel: "KUNDENVORSCHAU · INHALTE VOR PRODUKTIVEM LIVEGANG BESTÄTIGEN",
  brand: {
    name: "Daniela Mankel",
    subline: "FRISEUR · KREUZTAL",
    markAlt: "Abstraktes Haarlinien-Zeichen",
  },
  seo: {
    title: "Daniela Mankel | Friseursalon in Kreuztal",
    description:
      "Editoriale Website-Vorschau für Daniela Mankel, Friseursalon in Kreuztal-Littfeld.",
  },
  business: {
    name: "Daniela Mankel",
    category: "FRISEURSALON · KREUZTAL-LITTFELD",
    heroTitle: "DEIN LOOK.\nDEIN MOMENT.",
    heroText:
      "Persönliche Beratung, Schnitt und Styling – mit Raum für deinen Wunsch und einem Termin direkt im Salon.",
    introTitle: "HAAR, DAS\nZU DIR PASST.",
    introText:
      "Bei Daniela Mankel in Kreuztal-Littfeld steht der persönliche Termin im Mittelpunkt: ein klares Gespräch, ein gutes Gefühl und ein Look, der sich nach dir anfühlt.",
    roomTitle: "EIN RUHIGER\nORT FÜR VERÄNDERUNG.",
    roomText:
      "Der Salon in Kreuztal-Littfeld ist eine Adresse für Menschen, die ihren Look persönlich besprechen und ihren Termin direkt vereinbaren möchten.",
  },
  contact: {
    street: "Grubenstraße 5",
    postalCity: "57223 Kreuztal-Littfeld",
    phone: "02732 8797",
    phoneHref: "tel:+4927328797",
    email: "",
  },
  booking: {
    label: "Termin telefonisch anfragen",
    url: "tel:+4927328797",
    note:
      "Für einen Termin bitte telefonisch anfragen. So lassen sich Wunsch, Umfang und aktuelle Verfügbarkeit direkt mit dem Salon abstimmen.",
  },
  map: {
    routeUrl:
      "https://www.google.com/maps/place/Daniela+Mankel,+Grubenstra%C3%9Fe+5,+57223+Kreuztal-Littfeld/@51.0037996,7.9788268,15z/data=!4m6!3m5!1s0x47bc01e378673e0b:0x36dbaafbb062370b!8m2!3d51.0037996!4d7.9788268!16s%2Fg%2F1tghc7nj?g_ep=Eg1tbF8yMDI2MDgyNV8wIOC7DCoASAJQAg%3D%3D",
    embedUrl:
      "https://www.google.com/maps?q=Daniela+Mankel,+Grubenstra%C3%9Fe+5,+57223+Kreuztal-Littfeld&output=embed",
  },
  socials: [],
  services: [
    {
      number: "01",
      slug: "schnitt-form",
      name: "Schnitt & Form",
      short: "Eine Form, die zu Haarstruktur, Alltag und Wunsch passt.",
      detail:
        "Ob Auffrischung oder Veränderung: Beim Termin wird gemeinsam besprochen, welche Länge, Form und Pflege zu deinem Haar und deinem Alltag passen. Umfang und Preis werden direkt im Salon geklärt.",
    },
    {
      number: "02",
      slug: "farbe-straehnen",
      name: "Farbe & Strähnen",
      short: "Farbwünsche in Ruhe besprechen und passend einordnen.",
      detail:
        "Ein stimmiges Farbergebnis beginnt mit der Beratung. Beim persönlichen Gespräch lassen sich Ausgangslage, Wunsch und der passende Terminumfang verbindlich abstimmen.",
    },
    {
      number: "03",
      slug: "styling-finish",
      name: "Styling & Finish",
      short: "Ein gepflegtes Finish für Alltag, Anlass oder einfach dich.",
      detail:
        "Für einen besonderen Anlass oder einen frischen Abschluss: Besprich beim Telefonat, welches Styling du dir wünschst und welcher Termin dafür passend ist.",
    },
    {
      number: "04",
      slug: "pflege-haarteile",
      name: "Pflege & Haarteile",
      short: "Möglichkeiten für Pflege, Form und ergänzende Lösungen.",
      detail:
        "Öffentliche Branchenangaben nennen neben Friseurleistungen auch Haarteile. Welche Beratung und welcher Umfang aktuell angeboten werden, klärst du bitte direkt mit dem Salon.",
    },
  ],
  principles: [
    {
      label: "BERATUNG",
      text: "Vor einer Veränderung steht das Gespräch: Wünsche, Haar und Alltag werden gemeinsam betrachtet.",
      icon: "spark",
    },
    {
      label: "HANDWERK",
      text: "Ein guter Look darf unkompliziert wirken – und trotzdem sorgfältig auf dich abgestimmt sein.",
      icon: "scissors",
    },
    {
      label: "ZEIT FÜR DICH",
      text: "Vom ersten Kontakt bis zum Finish bleibt Raum für Fragen, Orientierung und dein gutes Gefühl.",
      icon: "clock",
    },
  ],
  process: [
    {
      number: "01",
      title: "DEIN WUNSCH",
      text: "Ruf an und beschreibe, was du dir für deinen nächsten Termin wünschst.",
    },
    {
      number: "02",
      title: "DEINE BERATUNG",
      text: "Gemeinsam wird geklärt, welcher Termin und welcher Umfang zu deinem Anliegen passen.",
    },
    {
      number: "03",
      title: "DEIN LOOK",
      text: "Du kommst im Salon an und nimmst einen Look mit, der sich nach dir anfühlt.",
    },
  ],
  team: [
    {
      initials: "DM",
      name: "Persönlich im Salon",
      role: "ANSPRECHPERSON BEIM TERMIN",
      text:
        "Einzelne Teamprofile sind öffentlich nicht ausgewiesen. Wer dich bei deinem Termin begleitet und welcher Terminweg passt, klärst du direkt über den Salon.",
      image: "/assets/images/daniela-styling.png",
      imageAlt: "Editoriales Motiv einer Haarstyling-Szene ohne erkennbares Gesicht",
    },
  ],
  hours: [
    { day: "Montag", time: "geschlossen" },
    { day: "Dienstag", time: "08:00–18:00" },
    { day: "Mittwoch", time: "08:00–18:00", flagged: true },
    { day: "Donnerstag", time: "08:00–18:00" },
    { day: "Freitag", time: "08:00–18:00" },
    { day: "Samstag", time: "08:00–13:00" },
    { day: "Sonntag", time: "geschlossen" },
  ],
  hoursSummary: "Dienstag–Freitag 08:00–18:00 · Samstag 08:00–13:00",
  hoursNote:
    "Die hier gezeigten Zeiten entsprechen den auffindbaren Verzeichniseinträgen. Mittwoch wird in einer weiteren Quelle abweichend geführt – bitte vor dem Besuch telefonisch bestätigen.",
  legal: {
    imprintNote:
      "Diese Seite ist als gestaltete Kunden-Vorschau angelegt. Die ladungsfähigen Betreiberangaben und rechtlichen Pflichtangaben werden vor dem produktiven Livegang ergänzt und geprüft.",
    privacyNote:
      "Diese Vorschau ist statisch aufgebaut und enthält kein Kontaktformular, keine Newsletter-Anmeldung und keine Analyse- oder Werbeskripte. Die finale Datenschutzerklärung wird vor dem produktiven Livegang geprüft und ergänzt.",
  },
};
