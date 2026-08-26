import { site } from "/data/site-data.js";

const page = document.body.dataset.page || "home";
const titleBrand = site.business.name;

const navItems = [
  { key: "leistungen", label: "Leistungen", href: "/leistungen.html" },
  { key: "salon", label: "Salon", href: "/salon.html" },
  { key: "team", label: "Team", href: "/team.html" },
  { key: "oeffnungszeiten", label: "Öffnungszeiten", href: "/oeffnungszeiten.html" },
  { key: "termin-buchen", label: "Termin", href: "/termin-buchen.html" },
];

const pageTitles = {
  home: site.seo.title,
  leistungen: `Leistungen | ${titleBrand}`,
  salon: `Salon | ${titleBrand}`,
  team: `Team | ${titleBrand}`,
  oeffnungszeiten: `Öffnungszeiten | ${titleBrand}`,
  "ueber-uns": `Über uns | ${titleBrand}`,
  termin: `Termin | ${titleBrand}`,
  "termin-buchen": `Termin buchen | ${titleBrand}`,
  impressum: `Impressum | ${titleBrand}`,
  datenschutz: `Datenschutz | ${titleBrand}`,
  notfound: `Seite nicht gefunden | ${titleBrand}`,
};

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}

function lines(value) {
  return escapeHTML(value).replace(/\n/g, "<br>");
}

function icon(name, className = "") {
  const paths = {
    arrow:
      '<path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    external:
      '<path d="M14 5h5v5M19 5l-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13.5v4A1.5 1.5 0 0 1 16.5 19h-11A1.5 1.5 0 0 1 4 17.5v-11A1.5 1.5 0 0 1 5.5 5h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    menu:
      '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    close:
      '<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    phone:
      '<path d="M8.2 3.5 5.6 4.7c-1.2.6-1.7 2-1.2 3.2 2 4.8 5.9 8.7 10.7 10.7 1.2.5 2.6 0 3.2-1.2l1.2-2.6-4.1-2-1.3 1.9a13.3 13.3 0 0 1-4.8-4.8l1.9-1.3-2-4.1Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    pin:
      '<path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="9" r="2.3" stroke="currentColor" stroke-width="1.7"/>',
    clock:
      '<circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.4V12l3.1 1.9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    calendar:
      '<rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 3.8v3.4M16 3.8v3.4M4 10h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    spark:
      '<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m18.4 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" fill="currentColor"/>',
    scissors:
      '<circle cx="7.2" cy="17" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="7.2" cy="7" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="m9.2 8.4 10.1 7.1M9.2 15.6l10.1-7.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    check:
      '<path d="m5.5 12.3 4.1 4.1 8.9-9" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  };

  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}

function brand() {
  return `
    <a class="brand" href="/" aria-label="${escapeHTML(site.brand.name)} – Startseite">
      <img src="/assets/brand-mark.svg" width="32" height="32" alt="${escapeHTML(site.brand.markAlt)}">
      <span class="brand-copy"><strong>${escapeHTML(site.brand.name)}</strong><span>${escapeHTML(site.brand.subline)}</span></span>
    </a>`;
}

function navLinks() {
  return navItems
    .map(
      (item) =>
        `<a href="${item.href}"${page === item.key ? ' aria-current="page"' : ""}>${item.label}</a>`,
    )
    .join("");
}

function bookingHref() {
  return site.booking.url || "/termin-buchen.html";
}

function bookingLink(label, modifier = "button-accent") {
  return `<a class="button ${modifier}" href="${escapeHTML(bookingHref())}">${escapeHTML(label)} ${icon("arrow")}</a>`;
}

function internalLink(label, href, modifier = "button-dark") {
  return `<a class="button ${modifier}" href="${href}">${escapeHTML(label)} ${icon("arrow")}</a>`;
}

function header() {
  const homeClass = page === "home" ? " site-header--home" : "";
  return `
    <div class="preview-strip" role="note">${escapeHTML(site.previewLabel)}</div>
    <header class="site-header${homeClass}">
      <div class="shell header-inner">
        ${brand()}
        <nav class="desktop-nav" aria-label="Seitennavigation">
          ${navLinks()}
          <a class="button button-small button-accent" href="/termin-buchen.html">Termin buchen ${icon("arrow")}</a>
        </nav>
        <button class="menu-toggle" type="button" aria-label="Menü öffnen" aria-controls="mobile-menu" aria-expanded="false">${icon("menu")}</button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile Seitennavigation">
        <div class="mobile-menu-inner">
          ${navLinks()}
          <a class="button button-accent" href="/termin-buchen.html">Termin buchen ${icon("arrow")}</a>
        </div>
      </nav>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-lead">
          ${brand()}
          <p>Friseursalon in Kreuztal-Littfeld – ein persönlicher Ort für Beratung, Schnitt und Styling.</p>
        </div>
        <div>
          <p class="footer-label">Entdecken</p>
          <a href="/leistungen.html">Leistungen</a>
          <a href="/salon.html">Salon</a>
          <a href="/team.html">Team</a>
          <a href="/oeffnungszeiten.html">Öffnungszeiten</a>
          <a href="/ueber-uns.html">Über uns</a>
          <a href="/termin-buchen.html">Termin</a>
        </div>
        <div>
          <p class="footer-label">Rechtliches</p>
          <a href="/impressum.html">Impressum</a>
          <a href="/datenschutz.html">Datenschutz</a>
        </div>
        <div class="footer-contact">
          <p class="footer-label">Kontakt</p>
          <a href="${escapeHTML(site.contact.phoneHref)}">${escapeHTML(site.contact.phone)}</a>
          <span>${escapeHTML(site.contact.street)}<br>${escapeHTML(site.contact.postalCity)}</span>
        </div>
      </div>
      <div class="shell footer-bottom">
        <span>© <span data-year></span> ${escapeHTML(site.brand.name)}</span>
        <span>Vorschau · Termine telefonisch</span>
      </div>
    </footer>`;
}

function eyebrow(text, inverted = false) {
  return `<p class="eyebrow${inverted ? " eyebrow-light" : ""}"><span></span>${escapeHTML(text)}</p>`;
}

function imageFigure(src, alt, className = "", caption = "", loading = "lazy") {
  return `
    <figure class="${className}">
      <img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="${loading}" width="1536" height="1024">
      ${caption ? `<figcaption>${escapeHTML(caption)}</figcaption>` : ""}
    </figure>`;
}

function homeServiceCard(service) {
  return `
    <article class="service-card">
      <div class="service-number">${escapeHTML(service.number)}</div>
      <div>
        <h3>${escapeHTML(service.name)}</h3>
        <p>${escapeHTML(service.short)}</p>
      </div>
      <a class="text-link" href="/leistungen.html#service-${escapeHTML(service.slug)}">Details ansehen ${icon("arrow")}</a>
    </article>`;
}

function serviceDropdown(service) {
  return `
    <details class="service-dropdown" id="service-${escapeHTML(service.slug)}">
      <summary class="service-summary">
        <span class="service-number">${escapeHTML(service.number)}</span>
        <span class="service-summary-copy">
          <span class="service-title">${escapeHTML(service.name)}</span>
          <span class="service-summary-text">${escapeHTML(service.short)}</span>
          <em>Mehr erfahren</em>
        </span>
        <span class="service-toggle" aria-hidden="true">+</span>
      </summary>
      <div class="service-dropdown-body">
        <p>${escapeHTML(service.detail)}</p>
        <a class="text-link" href="/termin-buchen.html">Termin dazu anfragen ${icon("arrow")}</a>
      </div>
    </details>`;
}

function homePage() {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero-image" src="/assets/images/daniela-hero.png" alt="Editoriales Motiv mit weich fallendem, warmem Haar im Salon" width="1536" height="1024" fetchpriority="high">
      <div class="hero-image-shade" aria-hidden="true"></div>
      <div class="hero-strands" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <div class="shell hero-grid">
        <div class="hero-copy">
          ${eyebrow(site.business.category, true)}
          <h1 id="hero-title">${lines(site.business.heroTitle)}</h1>
          <p class="hero-text">${escapeHTML(site.business.heroText)}</p>
          <div class="hero-actions">
            ${bookingLink("Termin telefonisch anfragen", "button-accent")}
            <a class="button button-ghost" href="#leistungen">Leistungen entdecken ${icon("arrow")}</a>
          </div>
          <ul class="hero-list" aria-label="Was dich erwartet">
            <li>${icon("check")} Persönliche Beratung</li>
            <li>${icon("check")} Klarer Terminweg</li>
            <li>${icon("check")} In Kreuztal-Littfeld</li>
          </ul>
        </div>
        <aside class="hero-card" aria-label="Editoriales Haarmotiv">
          ${imageFigure("/assets/images/daniela-craft.png", "Schere, Kamm und Haar auf einer Salon-Arbeitsfläche", "hero-card-image", "Editoriales Motiv · kein Kundenfoto")}
          <div class="hero-card-copy">
            <div class="hero-card-icon">${icon("spark")}</div>
            <p class="card-label">PERSÖNLICH & KLAR</p>
            <h2>Ein Termin, der zu dir passt.</h2>
            <p>Wunsch, Umfang und Verfügbarkeit lassen sich direkt mit dem Salon besprechen.</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="section" id="leistungen" aria-labelledby="services-title">
      <div class="shell">
        <div class="section-heading split-heading">
          <div>
            ${eyebrow("LEISTUNGEN")}
            <h2 id="services-title">WAS DARF ES<br>FÜR DICH SEIN?</h2>
          </div>
          <p>Von Schnitt und Form bis zu Farbe, Styling und ergänzenden Lösungen: Im persönlichen Gespräch wird aus deinem Wunsch der passende Termin.</p>
        </div>
        <div class="service-grid">
          ${site.services.map(homeServiceCard).join("")}
        </div>
        <div class="section-action">${internalLink("Alle Leistungen ansehen", "/leistungen.html", "button-dark")}</div>
      </div>
    </section>

    <section class="section section-soft" aria-labelledby="intro-title">
      <div class="shell intro-grid">
        ${imageFigure("/assets/images/daniela-salon.png", "Ruhiger Salonraum mit Stylingstuhl, Spiegel und warmem Holz", "intro-visual", "Editoriales Motiv · Salonatmosphäre", "lazy")}
        <div class="intro-copy">
          ${eyebrow("ÜBER DEN SALON")}
          <h2 id="intro-title">${lines(site.business.introTitle)}</h2>
          <p>${escapeHTML(site.business.introText)}</p>
          <a class="text-link" href="/salon.html">Zum Salonbereich ${icon("arrow")}</a>
        </div>
      </div>
    </section>

    <section class="section section-dark" aria-labelledby="principles-title">
      <div class="shell">
        <div class="section-heading dark-heading">
          <div>
            ${eyebrow("WORAUF ES ANKOMMT", true)}
            <h2 id="principles-title">DEIN WUNSCH.<br>DEIN HANDWERK.</h2>
          </div>
          <p>Ein guter Besuch beginnt mit Zuhören und endet mit einem Look, der sich im Alltag gut anfühlt.</p>
        </div>
        <div class="principle-grid">
          ${site.principles
            .map(
              (principle) => `
                <article class="principle-card">
                  <div class="principle-icon">${icon(principle.icon)}</div>
                  <h3>${escapeHTML(principle.label)}</h3>
                  <p>${escapeHTML(principle.text)}</p>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="process-title">
      <div class="shell">
        <div class="section-heading process-heading">
          <div>
            ${eyebrow("DEIN TERMIN")}
            <h2 id="process-title">KLAR VOM<br>ERSTEN KONTAKT.</h2>
          </div>
          ${internalLink("Zum Terminbereich", "/termin-buchen.html", "button-dark")}
        </div>
        <ol class="process-grid">
          ${site.process
            .map(
              (item) => `
                <li>
                  <span>${escapeHTML(item.number)}</span>
                  <h3>${escapeHTML(item.title)}</h3>
                  <p>${escapeHTML(item.text)}</p>
                </li>`,
            )
            .join("")}
        </ol>
      </div>
    </section>

    <section class="section section-contact" aria-labelledby="contact-title">
      <div class="shell contact-panel">
        <div>
          ${eyebrow("KONTAKT & ANFAHRT", true)}
          <h2 id="contact-title">DEIN WEG ZU<br>${escapeHTML(site.business.name)}.</h2>
          <p>Du möchtest einen Termin anfragen oder den Weg planen? Telefonisch erreichst du den Salon direkt.</p>
          <div class="contact-actions">
            ${bookingLink("Termin anfragen", "button-light")}
            <a class="button button-outline-light" href="/termin-buchen.html#map-placeholder">${icon("pin")} Karte & Anfahrt</a>
          </div>
        </div>
        <div class="contact-details">
          <div>${icon("pin")}<span><strong>${escapeHTML(site.contact.street)}</strong><br>${escapeHTML(site.contact.postalCity)}</span></div>
          <div>${icon("phone")}<span><a href="${escapeHTML(site.contact.phoneHref)}"><strong>${escapeHTML(site.contact.phone)}</strong></a><br><small>Telefonischer Terminweg</small></span></div>
          <div>${icon("clock")}<span><strong>${escapeHTML(site.hoursSummary)}</strong><br><small>Bitte vor dem Besuch bestätigen</small></span></div>
        </div>
      </div>
    </section>`;
}

function pageHero(label, title, text) {
  return `
    <section class="page-hero" aria-labelledby="page-title">
      <div class="shell page-hero-inner">
        ${eyebrow(label, true)}
        <h1 id="page-title">${lines(title)}</h1>
        <p>${escapeHTML(text)}</p>
      </div>
    </section>`;
}

function servicesPage() {
  return `
    ${pageHero("LEISTUNGEN", "DEINE LEISTUNGEN.\nKLAR PRÄSENTIERT.", "Eine klare Übersicht für deinen nächsten Termin. Öffne die Bereiche, die dich interessieren, und kläre den genauen Umfang direkt mit dem Salon.")}
    <section class="section">
      <div class="shell service-page-layout">
        <aside class="sticky-note">
          <p class="card-label">ORIENTIERUNG</p>
          <p>Leistung, Umfang und Preis hängen vom individuellen Wunsch ab. Im Telefonat lässt sich der passende Termin direkt abstimmen.</p>
          <a href="/termin-buchen.html" class="text-link">Termin anfragen ${icon("arrow")}</a>
        </aside>
        <div class="service-stack">
          ${site.services.map(serviceDropdown).join("")}
        </div>
      </div>
    </section>
    <section class="section section-soft">
      <div class="shell callout-grid">
        <div>
          ${eyebrow("DEIN ABLAUF")}
          <h2>EIN GUTER LOOK<br>BEGINNT MIT ZUHÖREN.</h2>
        </div>
        <div><p>Beschreibe deinen Wunsch, kläre Fragen zu Haar, Farbe oder Styling und vereinbare den Termin, der zu deinem Anliegen passt.</p>${internalLink("Terminbereich ansehen", "/termin-buchen.html", "button-dark")}</div>
      </div>
    </section>`;
}

function salonPage() {
  return `
    ${pageHero("DER SALON", "EIN ORT FÜR\nDEINEN AUSDRUCK.", "Daniela Mankel in Kreuztal-Littfeld: ein persönlicher Ort für Beratung, Haar und einen Termin ohne Umwege.")}
    <section class="section">
      <div class="shell salon-story-grid">
        ${imageFigure("/assets/images/daniela-salon.png", "Heller, ruhiger Stylingplatz in einem kleinen Salon", "story-image", "Editoriales Motiv · Salonatmosphäre", "lazy")}
        <div>
          ${eyebrow("DEIN SALON")}
          <h2>${lines(site.business.roomTitle)}</h2>
          <p>${escapeHTML(site.business.roomText)}</p>
          <p class="muted-copy">Die Vorschau zeigt eine eigenständige redaktionelle Bildwelt. Eigene Salonfotos können nach der Kundenfreigabe eingesetzt werden.</p>
          <a class="text-link" href="/termin-buchen.html">Termin telefonisch anfragen ${icon("arrow")}</a>
        </div>
      </div>
    </section>
    <section class="section section-dark">
      <div class="shell">
        <div class="section-heading dark-heading"><div>${eyebrow("PERSÖNLICH IM SALON", true)}<h2>ANKOMMEN.<br>WOHLFÜHLEN.</h2></div><p>Ein Termin darf persönlich beginnen: mit Zeit für deinen Wunsch und einer klaren Absprache für den Besuch.</p></div>
        <div class="team-grid">${site.team.map(teamCard).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="shell quote-panel">
        <span class="quote-mark">“</span>
        <p>Ein guter Look darf leicht wirken – und sich trotzdem nach dir anfühlen.</p>
        <span class="quote-caption">${escapeHTML(site.brand.name)} · ${escapeHTML(site.contact.postalCity)}</span>
      </div>
    </section>`;
}

function teamCard(member) {
  return `
    <article class="team-card">
      <div class="team-portrait">
        <img src="${escapeHTML(member.image)}" alt="${escapeHTML(member.imageAlt)}" loading="lazy" width="1024" height="1536">
        <span>EDITORIALES MOTIV · KEIN TEAM-PORTRÄT</span>
      </div>
      <div class="team-copy"><h3>${escapeHTML(member.name)}</h3><p class="team-role">${escapeHTML(member.role)}</p><p>${escapeHTML(member.text)}</p></div>
    </article>`;
}

function hoursRows() {
  return site.hours
    .map(
      (entry) => `
        <div class="hours-row${entry.flagged ? " hours-row--flagged" : ""}">
          <span>${escapeHTML(entry.day)}</span>
          <strong>${escapeHTML(entry.time)}${entry.flagged ? '<small>Bitte bestätigen</small>' : ""}</strong>
        </div>`,
    )
    .join("");
}

function hoursPage() {
  return `
    ${pageHero("ÖFFNUNGSZEITEN", "ZEIT FÜR\nDEINEN LOOK.", "Die aktuell auffindbaren Verzeichniseinträge geben dir eine erste Orientierung. Bei widersprüchlichen Angaben gilt der direkte Anruf im Salon.")}
    <section class="section">
      <div class="shell hours-layout">
        <div>
          ${eyebrow("PLANUNG")}
          <h2>ANKOMMEN.<br>ABSCHALTEN.</h2>
          <p>Ein klarer Zeitplan hilft bei der Planung. Da öffentliche Angaben nicht vollständig konsistent sind, bestätigst du deinen Besuch bitte telefonisch.</p>
          <a class="text-link" href="${escapeHTML(site.contact.phoneHref)}">${escapeHTML(site.contact.phone)} anrufen ${icon("arrow")}</a>
        </div>
        <div>
          <div class="hours-card" aria-label="Öffnungszeiten laut öffentlichen Verzeichnissen">${hoursRows()}</div>
          <p class="hours-note">${escapeHTML(site.hoursNote)}</p>
        </div>
      </div>
    </section>
    <section class="section section-soft">
      <div class="shell callout-grid">
        <div>
          ${eyebrow("KONTAKT")}
          <h2>FRAGEN VOR<br>DEM BESUCH?</h2>
        </div>
        <div><p>Ruf direkt an, wenn du einen Termin abstimmen, einen Wunsch besprechen oder die aktuelle Öffnungszeit prüfen möchtest.</p>${bookingLink("Termin telefonisch anfragen", "button-dark")}</div>
      </div>
    </section>`;
}

function aboutPage() {
  return `
    ${pageHero("ÜBER UNS", "DEIN SALON.\nDEINE HALTUNG.", "Eine ruhige, persönliche Bildsprache für einen Salon, in dem dein Wunsch im Mittelpunkt des Termins steht.")}
    <section class="section section-soft">
      <div class="shell about-hero-grid">
        ${imageFigure("/assets/images/daniela-styling.png", "Hände formen und föhnen eine natürliche Haarstruktur", "story-image", "Editoriales Motiv · kein Team-Porträt", "lazy")}
        <div>
          ${eyebrow("DIE IDEE")}
          <h2>EIN RAUM FÜR<br>GUTE VERÄNDERUNG.</h2>
          <p>Ein Besuch bei Daniela Mankel darf mit einem klaren Wunsch beginnen und mit einem Look enden, der zu deinem Alltag passt. Beratung, Haar und ein direkter Terminweg gehören dabei zusammen.</p>
          <a class="text-link" href="/leistungen.html">Leistungen entdecken ${icon("arrow")}</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="shell principle-grid">
        ${site.principles.map((principle) => `
          <article class="principle-card">
            <div class="principle-icon">${icon(principle.icon)}</div>
            <h3>${escapeHTML(principle.label)}</h3>
            <p>${escapeHTML(principle.text)}</p>
          </article>`).join("")}
      </div>
    </section>`;
}

function bookingPage() {
  return `
    ${pageHero("TERMIN", "DEIN TERMIN.\nDEIN MOMENT.", "Für eine Anfrage erreichst du Daniela Mankel telefonisch. So lassen sich Wunsch, Umfang und aktuelle Verfügbarkeit direkt abstimmen.")}
    <section class="section">
      <div class="shell booking-grid">
        <div class="booking-lead">
          ${eyebrow("TERMIN VEREINBAREN")}
          <h2>WÄHLE DEINEN<br>PASSENDEN WEG.</h2>
          <p>${escapeHTML(site.booking.note)}</p>
          ${bookingLink("Jetzt telefonisch anfragen", "button-dark")}
        </div>
        <div class="booking-card">
          <p class="card-label">KONTAKT</p>
          <a class="booking-contact booking-contact-link" href="${escapeHTML(site.contact.phoneHref)}"><span>${icon("phone")}</span><div><strong>${escapeHTML(site.contact.phone)}</strong><small>Telefonischer Terminweg</small></div></a>
          <div class="booking-contact"><span>${icon("calendar")}</span><div><strong>Keine Online-Buchung verlinkt</strong><small>Termin bitte direkt anfragen</small></div></div>
          <div class="booking-contact"><span>${icon("pin")}</span><div><strong>${escapeHTML(site.contact.street)}</strong><small>${escapeHTML(site.contact.postalCity)}</small></div></div>
        </div>
      </div>
    </section>
    <section class="section section-soft">
      <div class="shell hours-layout">
        <div>${eyebrow("ÖFFNUNGSZEITEN")}<h2>ZEIT FÜR<br>DEINEN LOOK.</h2><p>Die öffentlich auffindbaren Zeiten dienen zur Orientierung. Bitte bestätige sie beim Telefonat, bevor du dich auf den Weg machst.</p><a class="text-link" href="/oeffnungszeiten.html">Alle Zeiten ansehen ${icon("arrow")}</a></div>
        <div><div class="hours-card">${hoursRows()}</div><p class="hours-note">${escapeHTML(site.hoursNote)}</p></div>
      </div>
    </section>
    <section class="section">
      <div class="shell map-placeholder" id="map-placeholder">
        <div><p class="card-label">ANFAHRT</p><h2>DEIN SALON<br>IN KREUZTAL.</h2><p>Die Karte wird erst geladen, wenn du aktiv zustimmst. So bleibt die externe Verbindung bis zu deinem Klick deaktiviert.</p></div>
        <button class="button button-dark" type="button" data-map-trigger>${icon("pin")} Karte bewusst laden</button>
      </div>
    </section>`;
}

function legalPage(type) {
  const isImprint = type === "impressum";
  const label = isImprint ? "IMPRESSUM" : "DATENSCHUTZ";
  const title = isImprint ? "ANGABEN ZUM\nSALON." : "DATENSCHUTZ\nMITGEDACHT.";
  const note = isImprint ? site.legal.imprintNote : site.legal.privacyNote;
  return `
    ${pageHero(label, title, note)}
    <section class="section legal-section">
      <div class="shell legal-grid">
        <aside class="legal-aside"><p class="card-label">VORSCHAUHINWEIS</p><p>${isImprint ? "Die Betreiberangaben werden vor dem produktiven Livegang ergänzt und rechtlich geprüft." : "Die Vorschau ist statisch angelegt. Externe Inhalte werden nur nach bewusster Aktion geladen."}</p></aside>
        <article class="legal-copy">
          <h2>${isImprint ? "ÖFFENTLICH BEKANNTE FAKTEN" : "TECHNIK DIESER VORSCHAU"}</h2>
          ${isImprint ? `
            <p>Der Friseursalon ist öffentlich unter <strong>${escapeHTML(site.business.name)}</strong> in ${escapeHTML(site.contact.postalCity)} auffindbar.</p>
            <div class="legal-facts">
              <div><span>Standort</span><strong>${escapeHTML(site.contact.street)}<br>${escapeHTML(site.contact.postalCity)}</strong></div>
              <div><span>Telefon</span><strong><a href="${escapeHTML(site.contact.phoneHref)}">${escapeHTML(site.contact.phone)}</a></strong></div>
            </div>
            <h3>Vor dem finalen Livegang ergänzen</h3>
            <ul>
              <li>Vollständige Betreiberangaben und verantwortliche Person</li>
              <li>Ladungsfähige Anschrift und gegebenenfalls Unternehmensform</li>
              <li>Geprüfte E-Mail-Adresse sowie weitere gesetzlich erforderliche Angaben</li>
            </ul>
            <p class="legal-warning">Diese Vorschau ist kein fertig freigegebenes Impressum und ersetzt keine rechtliche Prüfung.</p>` : `
            <p>${escapeHTML(site.legal.privacyNote)}</p>
            <h3>Statische Website</h3>
            <p>Diese Vorschau enthält kein Kontaktformular, keine Newsletter-Anmeldung und keine Analyse- oder Werbeskripte. Es werden keine Terminwünsche über diese Website übermittelt.</p>
            <h3>Externe Kartenansicht</h3>
            <p>Die Kartenansicht wird erst nach einem bewussten Klick geladen. Dabei kann der externe Kartendienst technische Verbindungsdaten verarbeiten. Die endgültigen Hinweise und Verweise werden vor dem produktiven Livegang geprüft.</p>
            <p><a class="text-link" href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Datenschutzhinweise von Google ${icon("external")}</a></p>
            <h3>Vor dem finalen Livegang ergänzen</h3>
            <ul>
              <li>Verantwortliche Person und vollständige Kontaktdaten</li>
              <li>Geprüfte Beschreibung aller tatsächlich eingesetzten Dienste</li>
              <li>Freigabe der finalen Datenschutzerklärung</li>
            </ul>
            <p class="legal-warning">Diese Vorschau ist kein fertig freigegebener Rechtstext und ersetzt keine rechtliche Prüfung.</p>`}
        </article>
      </div>
    </section>`;
}

function notFoundPage() {
  return `
    <section class="notfound">
      <div class="shell notfound-inner">
        ${eyebrow("404")}
        <h1>Diese Seite gibt es<br>hier nicht.</h1>
        <p>Die gewünschte Seite wurde nicht gefunden. Zurück zur Startseite von ${escapeHTML(site.brand.name)}.</p>
        <a href="/" class="button button-dark">Zur Startseite ${icon("arrow")}</a>
      </div>
    </section>`;
}

function teamPage() {
  return `
    ${pageHero("TEAM", "PERSÖNLICH.\nAUFMERKSAM.", "Öffentlich sind aktuell keine einzelnen Teamprofile ausgewiesen. Die Seite bleibt trotzdem als klarer, ehrlicher Einstieg in den persönlichen Termin nutzbar.")}
    <section class="section section-dark">
      <div class="shell">
        <div class="section-heading dark-heading">
          <div>${eyebrow("PERSÖNLICH IM SALON", true)}<h2>MENSCHEN MIT<br>FINGERSPITZENGEFÜHL.</h2></div>
          <p>Wer dich bei deinem Termin begleitet und welcher Terminweg passt, klärst du direkt über den Salon.</p>
        </div>
        <div class="team-grid">${site.team.map(teamCard).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="shell quote-panel">
        <span class="quote-mark">“</span>
        <p>Gute Beratung beginnt mit einem offenen Gespräch.</p>
        <span class="quote-caption">${escapeHTML(site.brand.name)} · ${escapeHTML(site.contact.postalCity)}</span>
      </div>
    </section>`;
}

function pageContent() {
  const pages = {
    home: homePage,
    leistungen: servicesPage,
    salon: salonPage,
    team: teamPage,
    oeffnungszeiten: hoursPage,
    "ueber-uns": aboutPage,
    termin: bookingPage,
    "termin-buchen": bookingPage,
    impressum: () => legalPage("impressum"),
    datenschutz: () => legalPage("datenschutz"),
    notfound: notFoundPage,
  };
  return (pages[page] || pages.notfound)();
}

function mount() {
  const root = document.getElementById("site-root");
  if (!root) return;
  root.innerHTML = `
    <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
    ${header()}
    <main id="main-content" tabindex="-1">${pageContent()}</main>
    ${footer()}
    <div class="toast" role="status" aria-live="polite" aria-atomic="true"></div>`;

  document.title = pageTitles[page] || pageTitles.notfound;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = site.seo.description;
  root.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const toggle = root.querySelector(".menu-toggle");
  const menu = root.querySelector(".mobile-menu");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.setAttribute("aria-label", expanded ? "Menü öffnen" : "Menü schließen");
    toggle.innerHTML = icon(expanded ? "menu" : "close");
    menu?.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  root.querySelectorAll("[data-map-trigger]").forEach((button) => {
    button.addEventListener("click", () => activateMap(button));
  });
}

function closeMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Menü öffnen");
  if (toggle) toggle.innerHTML = icon("menu");
  menu?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(window.previewToastTimer);
  window.previewToastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4800);
}

function activateMap(button) {
  const target = document.getElementById("map-placeholder");
  if (!target || !site.map.embedUrl) {
    showToast("Die Kartenansicht ist in dieser Vorschau nicht verfügbar.");
    return;
  }
  if (target.querySelector("iframe")) return;
  const iframe = document.createElement("iframe");
  iframe.src = site.map.embedUrl;
  iframe.title = `Karte zu ${site.business.name}`;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  const controls = document.createElement("div");
  controls.className = "map-after-load";
  controls.innerHTML = `<p>Karte geladen. Für die genaue Route kannst du Google Maps öffnen.</p><a class="button button-light" href="${escapeHTML(site.map.routeUrl)}" target="_blank" rel="noreferrer">Route in Google Maps ${icon("external")}</a>`;
  target.replaceChildren(iframe, controls);
  target.classList.add("is-loaded");
  button?.remove();
}

mount();
