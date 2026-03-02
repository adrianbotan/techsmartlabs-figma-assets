# Figma Make — Instrucțiuni de utilizare

> Ghid pas cu pas pentru conectarea repo-ului de assets și generarea site-ului TechSmartLabs.

---

## 1. Repo-ul GitHub cu assets

**URL:** https://github.com/adrianbotan/techsmartlabs-figma-assets

**Structura repo-ului:**

```
techsmartlabs-figma-assets/
├── MASTER-PLAN.md          ← Planul complet pentru Figma Make
├── README.md
├── guidelines/
│   ├── DESIGN-BRIEF.md     ← Brief-ul de design detaliat
│   └── brief-imagini.md    ← Specificații fotografice
├── icons/                  ← 35 SVG icons (servicii, features, UI)
├── patterns/               ← 8 SVG patterns (hero backgrounds)
└── photos/                 ← 14 stock photos (JPG + WebP)
```

**Raw URL pattern pentru assets:**
```
https://raw.githubusercontent.com/adrianbotan/techsmartlabs-figma-assets/main/{path}
```

Exemplu:
- `https://raw.githubusercontent.com/adrianbotan/techsmartlabs-figma-assets/main/icons/click.svg`
- `https://raw.githubusercontent.com/adrianbotan/techsmartlabs-figma-assets/main/patterns/hero-home.svg`

---

## 2. Conectare Figma Make la GitHub

### Prima dată (o singură dată):

1. Deschide un fișier **Figma Make** (sau creează unul nou)
2. Click pe **Make settings** (colțul din dreapta sus)
3. Click pe **GitHub**
4. Urmează pașii de autorizare: selectează **"All repositories"** sau **"Only select repositories"** (nu contează, Figma Make nu accesează altele)
5. Click **Install & Authorize**

### Push cod în GitHub:

1. Din Figma Make, click **Make settings** → **GitHub**
2. Prima dată: selectează **Create Repository** (sau folosește repo-ul existent)
3. Ulterior: **GitHub → Push to...** pentru a trimite codul în repo

> **Important:** Push-ul din Figma Make este **one-way** (Figma → GitHub). Dacă editezi codul pe GitHub, modificările vor fi suprascrise la următorul push.

---

## 3. Cum să folosești MASTER-PLAN.md cu Figma Make

### Varianta A — Copy-paste direct în prompt

1. Deschide `MASTER-PLAN.md` din repo: https://github.com/adrianbotan/techsmartlabs-figma-assets/blob/main/MASTER-PLAN.md
2. Copiază conținutul relevant (secțiunea pentru pagina la care lucrezi)
3. Paste-uiește în promptul Figma Make ca instrucțiuni

### Varianta B — Referință la repo

Dacă Figma Make îți cere un GitHub repo pentru context, folosește:
```
https://github.com/adrianbotan/techsmartlabs-figma-assets
```

### Varianta C — Pagină cu pagină

Lucrează prin fiecare pagină în ordinea din master plan:

1. **Home** (/) — Hero + 7 secțiuni
2. **Servicii** (/servicii) — Hero + 4 secțiuni
3. **Impact** (/impact) — Hero + 4 secțiuni
4. **Despre noi** (/despre-noi) — Hero + 4 secțiuni
5. **Resurse** (/resurse) — Hero + 2 secțiuni
6. **Contact** (/contact) — Hero + 2 secțiuni

---

## 4. Prompt template pentru Figma Make

Copiază și adaptează acest prompt pentru fiecare pagină:

```
Creez site-ul TechSmartLabs — o întreprindere socială de digitalizare din Alba Iulia.

CONTEXT:
- Repo cu assets: https://github.com/adrianbotan/techsmartlabs-figma-assets
- Paleta: #27ae60 (primary green), #0E0E0E (dark hero), #F7F8F4 (warm cream), #4D9987 (teal accent), #518DD2 (blue accent)
- Fonturi: Chivo (headings, bold/black), Noto Sans (body, regular/medium)
- Stil: Retool-quality, dark heroes, radial gradient glows, pill-shaped buttons
- SVG patterns la 3-6% opacity pe hero sections

REGULI ABSOLUT:
- Text 100% în română cu diacritice corecte (ă, â, î, ș, ț)
- FĂRĂ linkuri social media
- FĂRĂ prețuri sau pachete
- FĂRĂ numere mari specifice (nu "90%", nu "100+ proiecte", nu "30+ clienți")
- FĂRĂ testimoniale sau logo-uri de clienți (suntem startup, nu avem clienți încă)
- FĂRĂ poze de echipă
- Copyright: © 2025 TechSmartLabs SRL-D · Întreprindere socială certificată · Alba Iulia, România

PAGINA CURENTĂ: [NUMELE PAGINII]
[paste secțiunea relevantă din MASTER-PLAN.md]
```

---

## 5. Assets disponibile per secțiune

### Icons (folosește-le în service cards, feature lists, value cards):
| Icon | Folosire sugerată |
|------|-------------------|
| `click.svg` | Accesibilitate, UX |
| `blueprint.svg` | Planificare, consultanță |
| `settings.svg` | Configurare, servicii gestionate |
| `security.svg` | Securitate, GDPR |
| `cloud.svg` | Cloud, migrare |
| `chart.svg` | Analytics, raportare |
| `automation.svg` | Automatizări |
| `compliance.svg` | Transparență, conformitate |
| `innovation.svg` | Inovație |
| `continuity.svg` | Parteneriat, continuitate |
| `clock.svg` | Timp, program |
| `onboarding.svg` | Onboarding, start |
| `support.svg` | Suport, asistență |
| `certification.svg` | Certificări |
| `analytics.svg` | Date, metrici |

### Patterns (overlay pe hero sections, 3-6% opacity):
| Pattern | Pagina |
|---------|--------|
| `hero-home.svg` | Homepage |
| `hero-services.svg` | Servicii |
| `hero-impact.svg` | Impact |
| `hero-about.svg` | Despre noi |
| `hero-resources.svg` | Resurse |
| `hero-contact.svg` | Contact |
| `circuit-board.svg` | Secțiuni dark intermediare |
| `dot-grid-large.svg` | Secțiuni light cu textura subtilă |

### Photos (folosiți minimal, preferă icons + patterns):
| Fișier | Folosire |
|--------|----------|
| `01.webp` | About section |
| `02.webp` | Story section |
| `03.webp` – `05.webp` | Case studies / galerie |
| `board.webp` | Vision section overlay |

---

## 6. Checklist final

După ce ai generat toate paginile, verifică:

- [ ] Tot textul e în română cu diacritice corecte
- [ ] Niciun link de social media (Facebook, Instagram, LinkedIn, Twitter)
- [ ] Niciun preț, pachet sau ofertă
- [ ] Niciun număr mare specific (90%, 100+, 30+, etc.)
- [ ] Niciun testimonial sau logo de client
- [ ] Nicio poză de echipă cu fețe vizibile
- [ ] Copyright-ul este exact: `© 2025 TechSmartLabs SRL-D · Întreprindere socială certificată · Alba Iulia, România`
- [ ] Butoanele CTA sunt pill-shaped cu #27ae60
- [ ] Hero sections sunt dark (#0E0E0E) cu radial gradient glow
- [ ] SVG patterns sunt la 3-6% opacity

---

## 7. Limitări Figma Make + GitHub

- **Push one-way:** Figma Make doar trimite cod SPRE GitHub, nu citește din GitHub
- **Un repo per fișier Make:** Fiecare fișier Figma Make creează propriul repo
- **Doar branch-ul main:** Nu poți alege alt branch
- **Repo creat de Figma:** Figma Make poate push doar în repo-uri pe care le-a creat el

Dacă ai nevoie să imporți assets din repo-ul nostru în Figma Make, folosește **raw URLs** (vezi secțiunea 1) pentru a referenția fișierele direct în prompturi.

---

*Document generat automat — Martie 2026*
