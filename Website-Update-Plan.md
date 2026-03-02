# TechSmartLabs — Figma Make Master Plan

> **Purpose:** Step-by-step instructions for Figma Make AI to upgrade the existing wireframe into a polished, production-ready website design. Keep the current page structure and subpages intact. Perform a **content lift** (better copy, split dense sections, add breathing room) and a **visual facelift** (Retool-quality aesthetic, pattern overlays, icon treatments, premium spacing).

---

## GOLDEN RULES (read before every page)

1. **All text is in Romanian** with proper diacritics: ă, â, î, ș, ț.
2. **No social media links** anywhere on the site — no Facebook, Instagram, LinkedIn, Twitter/X icons or URLs.
3. **No prices, no pricing page, no pricing tiers.** This is a social enterprise that offers free consultations — never mention cost.
4. **No large specific numbers** like "90% of profit" or "100+ projects" or "30+ clients." The company is a startup with no clients yet. Use **qualitative language** instead (e.g., "profitul se reinvestește în comunitate" instead of "90% din profit").
5. **No fake testimonials, no client logos, no case studies.** The company has no clients yet. Do not invent social proof.
6. **No team member photos or bios.** Do not create a "Meet the team" section.
7. **Minimal stock photos.** Prefer SVG patterns, icons, and decorative elements over photography. If a photo is truly needed, use only images from `07-stock-photos/` — never show faces.
8. **Keep the existing wireframe structure** — same pages, same navigation, same subpage hierarchy. Do not add or remove pages.
9. **Copyright line:** `© 2025 TechSmartLabs SRL-D · Întreprindere socială certificată · Alba Iulia, România`
10. **The site should feel real** — like a live company website — but all content should be achievable by a startup on day one. No promises of past performance.

---

## VISUAL DIRECTION

### Reference: Retool.com
Study the screenshots in `02-retool-reference/` closely. Copy these patterns:

| Pattern | How to apply |
|---------|-------------|
| **Dark hero sections** | Every page opens with a dark (#0E0E0E) hero. Large Chivo heading. Subtle radial glow behind. |
| **Pill-shaped buttons** | All CTA buttons are fully rounded (border-radius: 9999px). Green (#27ae60) fill for primary. |
| **Generous whitespace** | 80–120px vertical padding between sections. Never crowd content. |
| **Warm cream backgrounds** | Light sections use #F7F8F4, never pure white. Alternate with #E9EBDF for rhythm. |
| **Cards with soft borders** | 12–16px border-radius. 1px border #CBCCC4. Very soft shadow. Lift on hover. |
| **SVG pattern overlays** | Subtle geometric patterns from `04-patterns-svg/` at 3–6% opacity as section backgrounds. |
| **Radial glows** | Soft, large, diffuse teal (#4D9987) or green (#27ae60) blurs behind hero text. |
| **Grid pattern texture** | Fine dot-grid or line-grid from `04-patterns-svg/` layered on dark sections. |
| **Section labels** | Small uppercase tracking-widest labels above each section heading (e.g., "SERVICII", "IMPACT"). Teal color. |
| **Colored icon boxes** | Icons sit inside rounded-xl boxes with tinted backgrounds matching their accent color at 5–10% opacity. |

### What NOT to do:
- Do not make it look like a SaaS dashboard — TechSmartLabs is a services company.
- Do not use cold whites, electric blues, or generic Bootstrap styling.
- Do not use photos where SVG illustrations/patterns would work better.

---

## COLOR PALETTE

| Token | Hex | Use |
|-------|-----|-----|
| Primary CTA | `#27ae60` | All primary buttons, active states, links |
| Teal accent | `#4D9987` | Section labels, icon tints, decorative accents |
| Dark BG | `#0E0E0E` | Hero sections, dark bands (not pure black) |
| Dark Alt | `#1a1a1a` | Cards on dark backgrounds |
| Light BG | `#F7F8F4` | Main background (warm off-white) |
| Light Alt BG | `#E9EBDF` | Alternate sections for visual rhythm |
| Deep green | `#0E352C` | Special accent sections (e.g., stats bar on Impact page) |
| Dark blue | `#1B2E44` | Deep header tones, accent variety |
| Mid blue | `#518DD2` | Inline links, secondary accents |
| Text primary | `#151515` | Main body text |
| Text secondary | `#3F403D` | Subtitles, descriptions |
| Text muted | `#6B6C68` | Captions, helper text |
| Border light | `#CBCCC4` | Card borders, dividers |
| Border dark | `rgba(255,255,255,0.08)` | Borders on dark backgrounds |

**Rules:**
- Never use pure white (#FFFFFF) as a background — use #F7F8F4.
- Never use pure black (#000000) — use #0E0E0E.
- Green (#27ae60) is exclusively for CTAs and active states.
- Teal (#4D9987) is for decorative/secondary elements only.

---

## TYPOGRAPHY

| Element | Font | Size (desktop) | Weight |
|---------|------|----------------|--------|
| H1 (hero) | Chivo | 56–72px | 900 (Black) |
| H2 (section) | Chivo | 36–48px | 700 (Bold) |
| H3 (card) | Chivo | 24–28px | 700 |
| Body large | Noto Sans | 18–20px | 400 |
| Body | Noto Sans | 16px | 400 |
| Body small | Noto Sans | 14px | 400 |
| Button | Noto Sans | 16px | 600 |
| Section label | Chivo | 11–12px | 700, uppercase, tracking 0.2em |
| Caption | Noto Sans | 12px | 500 |

**Rules:**
- Headings: always Chivo, letter-spacing: -0.02em, line-height: 1.05–1.2.
- Body: always Noto Sans, line-height: 1.6.
- Max text block width: ~65ch for readability.
- Hero subtitle uses reduced opacity (50–60% white on dark, muted color on light).

---

## COMPONENT SPECS

### Buttons
- Shape: pill (border-radius: 9999px)
- Primary: `#27ae60` background, white text, hover darkens to `#219a52`
- Outline: transparent + 2px border, text inherits section color
- Ghost: no border, teal text, subtle bg on hover
- White (on dark): white background, dark text
- All: active:scale(0.98), transition 200ms

### Cards
- border-radius: 16px
- border: 1px solid #CBCCC4 (light) or rgba(255,255,255,0.08) (dark)
- shadow: 0 2px 8px rgba(0,0,0,0.06)
- hover: translateY(-2px) + shadow 0 8px 30px rgba(0,0,0,0.08)
- padding: 32–48px internal
- background: #F7F8F4 or white on light; #1a1a1a on dark

### Header / Navigation
- Sticky top, max-width 1200px centered
- Layout: Logo (left) — Nav links (center) — CTA button (right)
- Transparent + white text over dark heroes → solid #F7F8F4 + dark text on scroll
- Nav items: **Acasă · Servicii · Impact · Despre noi · Resurse · Contact**
- Green "TS" logo mark (rounded square) + "TechSmart Labs" wordmark
- Mobile: hamburger menu

### Footer
- Dark background (#0E0E0E)
- 4-column grid: Brand + tagline | Pagini (nav links) | Servicii (service links) | Contact (email, phone, address)
- Bottom bar: copyright line (see Golden Rule #9)
- **No social media icons or links**

### Sections
- Vertical padding: 80–120px (py-28 to py-36 in Tailwind scale)
- Max container: 1200px centered, 24–48px side padding
- Alternate backgrounds: #F7F8F4 → #E9EBDF → #F7F8F4
- Optional: SVG pattern overlay at 3–6% opacity on any section

---

## AVAILABLE ASSETS

### SVG Icons (`03-icons-svg/icons-marketing/`)
1,236 files (SVG, PNG 1x, PNG 2x, EPS). Use the `_svg.svg` variants. Key icons to use:

| Purpose | Suggested icon file |
|---------|-------------------|
| Configuration / Onboarding | `1-Click_Operation_(1)_svg.svg` or `AI-Powered_Automation_svg.svg` |
| Integration / Automation | `API_Integration_svg.svg` or relevant automation icon |
| IT Support | `Support_Portal_svg.svg` or similar |
| Custom Adjustments | `Custom_Configuration_svg.svg` or similar |
| Security | `Cyber_Security_*_svg.svg` |
| Cloud | `Cloud_*_svg.svg` |
| Blueprint / Plan | `Blueprint_*_svg.svg` |
| Chart / Analytics | `Analytics_*_svg.svg` |

**Icon styling:** Tint with brand teal (#4D9987) or green (#27ae60). Outline style, not filled. Place inside colored-tint rounded boxes (bg at 5–10% of the icon's color).

### SVG Patterns (`04-patterns-svg/`)
189 decorative SVG patterns. Use as low-opacity background textures. Recommended:

| Pattern | Where to use |
|---------|-------------|
| `concentric-circles.svg` | Home hero radial bg |
| `dot-grid-*.svg` | General section backgrounds |
| `diagonal-grid-*.svg` | Services section |
| `circuit-board.svg` | Tech-themed sections |
| `hexagonal-mesh.svg` | Impact page |
| `network-graph-*.svg` | About page |
| `data-flow-graph.svg` | Process/workflow sections |

**Always at 3–6% opacity.** Never higher — they should be barely visible, adding texture without distraction.

### Stock Photos (`07-stock-photos/`)
Use sparingly. Available by section: `about/` (10), `blog/` (6), `case/` (4), `feature/` (6), `heroes/` (6), `service/` (8), `others/` (4). Rules: no visible faces, no logos, no readable text on screens.

---

## PAGE-BY-PAGE TASK LIST

---

### PAGE 1: ACASĂ (Home)

**Keep structure. Upgrade content and visuals.**

#### Section 1 — Hero (Dark)
- Background: `#0E0E0E`
- Radial glow: teal (#4D9987), centered, large, 15–20% opacity
- SVG pattern overlay: `concentric-circles.svg` or `dot-grid` at 4% opacity
- Small tag pill at top: "Întreprindere socială — co-finanțată UE" with green dot
- H1: **"Digitalizare simplă, explicată clar"** (Chivo Black, 64–72px)
  - Second line at 50% white opacity
- Subtitle: "Ajutăm echipele non-tech să digitalizeze rapid procesele, prin soluții configurabile și suport clar." (18–20px, white/50)
  - ⚠️ **Remove "prețuri transparente"** — no price references
- Two buttons: Green primary "Programează o discuție" + Outline "Descoperă serviciile →"
- Trust badges at bottom: "Finanțare UE", "Întreprindere Socială", "Alba Iulia" as small pills
  - ⚠️ **Remove "POEO" badge** — keep it simple
- **No large floating stat card** — remove the "90%" element

#### Section 2 — What You Get (Light #F7F8F4)
- Two-column layout: text left, one subtle stock photo right (from `07-stock-photos/feature/`)
- Section label: "CE PRIMEȘTI" (teal, uppercase)
- H2: "Tehnologie accesibilă pentru echipe non-tech"
- Body text about configuring and automating — keep short, 2–3 sentences max
- Two buttons: Green "Hai să discutăm" + Outline "Cum funcționează →"
- ⚠️ **Remove the floating "90% profit reinvestit" card** — violates the no-large-numbers rule

#### Section 3 — Services Grid (White #F7F8F4 or #E9EBDF)
- Section label: "SERVICII"
- H2: "Ce putem face pentru tine"
- Subtitle: one line about practical digitalization solutions
- **2×2 card grid** with the 4 core services:
  1. Configurare & Onboarding
  2. Integrare & Automatizare
  3. Suport IT & Mentenanță
  4. Ajustări Personalizate
- Each card: icon in colored box + tag + title + 1-sentence description + "Află mai multe →" link
- Bottom: outline button "Vezi toate serviciile" → links to /servicii

#### Section 4 — How It Works (Light #F7F8F4)
- Section label: "CUM FUNCȚIONEAZĂ"
- H2: "Trei pași simpli"
- **3-column cards** with watermark step numbers (01, 02, 03):
  1. Descoperire — "Înțelegem cum lucrezi acum și ce vrei să îmbunătățești."
  2. Implementare — "Configurăm, integrăm și testăm. Tu nu trebuie să fii tehnic."
  3. Suport continuu — "Rămânem alături cu mentenanță și optimizare."
- Each card has an icon in a tinted box

#### Section 5 — Impact Statement (Dark #0E0E0E)
- Radial glow: teal or green
- SVG pattern overlay at 4%
- Two-column: text left, visual right
- Section label: "IMPACT SOCIAL"
- H2: "Fiecare proiect contribuie la comunitate"
  - ⚠️ **Remove "90% din profit se reinvestește"** — replace with qualitative statement
- Body: "Ca întreprindere socială certificată, profitul nostru se întoarce în programe de digitalizare pentru comunități."
- Button: "Descoperă programele" (white variant)
- Right side: **Replace the stat counter grid** with 2–3 simple descriptive cards (no numbers):
  - "Profit reinvestit social" (icon + short text)
  - "Comunități sprijinite" (icon + short text)
  - "Transparență completă" (icon + short text)
  - ⚠️ **No specific numbers** — no "5+", "30+", "100+"

#### Section 6 — Who We Serve (Light)
- Two-column: photo left (from `07-stock-photos/about/`), list right
- Section label: "CUI NE ADRESĂM"
- H2: "Construim pentru echipe ca ale tale"
- Three audience segments with icon + title + one-line description:
  1. IMM-uri și startup-uri
  2. ONG-uri și organizații sociale
  3. Echipe fără departament IT

#### Section 7 — FAQ (Light #F7F8F4)
- 5/3 split layout: heading + CTA left, accordion right
- Section label: "FAQ"
- H2: "Ai întrebări? Avem răspunsuri."
- 5 accordion items — keep the existing questions but **edit answers to not promise specific numbers or past results**
- Button: "Contactează-ne" (green)

#### Section 8 — Final CTA (Dark #0E0E0E)
- Radial glow, pattern overlay
- H2: "Hai să vorbim"
- Subtitle: "Programează un apel gratuit și discutăm despre nevoile tale de digitalizare."
  - ⚠️ **Remove "de 30 minute"** — keep duration vague
- Two buttons: Green "Programează o discuție" + Outline "Descoperă serviciile →"

---

### PAGE 2: SERVICII (Services)

#### Section 1 — Hero (Dark)
- Blue radial glow (#518DD2)
- Section label: "SERVICII"
- H1: "Soluții complete de digitalizare"
- Subtitle about covering the full digital cycle
- Green CTA button

#### Section 2 — Service Cards (Light)
- **3×2 grid** of 6 service cards:
  1. Configurare & Onboarding
  2. Integrare & Automatizare
  3. Suport IT & Mentenanță
  4. Ajustări Personalizate
  5. Cloud & Infrastructură
  6. Securitate & Conformitate
- Each card: colored icon box, title, description, tag pills for sub-services
- ⚠️ All descriptions should be forward-looking ("Vom configura…", "Oferim…"), not past-tense

#### Section 3 — Process Steps (Light alt #E9EBDF)
- Section label: "PROCES"
- H2: "Cum lucrăm"
- **4-column** step cards with watermark numbers: Audit → Plan → Implementare → Suport
- Short description per step

#### Section 4 — Why Us (Light #F7F8F4)
- Two-column: photo left, text right
- Section label: "DE CE NOI"
- H2: "Partenerul tău tech de lungă durată"
- Two paragraphs about long-term partnership and social mission
- ⚠️ **Remove "prioritatea noastră nu e profitul maxim"** — rephrase to focus on quality and impact positively
- Green CTA button

#### Section 5 — CTA (Dark)
- H2: "Ai nevoie de digitalizare?"
- Subtitle + green CTA

---

### PAGE 3: IMPACT

#### Section 1 — Hero (Dark)
- Green radial glow (#27ae60)
- Section label: "IMPACT SOCIAL"
- H1: "Tehnologie cu scop social"
- Subtitle about social enterprise and reinvesting profit
  - ⚠️ **Remove "90% din profitul nostru"** — use "profitul nostru se reinvestește" without a percentage
- Green CTA

#### Section 2 — Values Bar (Deep green #0E352C)
- **Replace stats bar with value statements** — no numbers
- 4-column grid of qualitative values:
  1. "Profit reinvestit" (not a percentage, just the concept)
  2. "Comunitate prioritară"
  3. "Acces echitabil la tech"
  4. "Transparență totală"
- Each: icon + label. No numbers.

#### Section 3 — Programs Grid (Light)
- Section label: "PROGRAME"
- H2: "Unde se duce profitul nostru"
- Subtitle: "Fiecare proiect contribuie la aceste inițiative."
- **2×2 card grid**: Digitalizare comunitară, Training digital, Mentorat antreprenorial, Resurse open-source
- Each card: green tag, icon, title, description
- ⚠️ **Remove "gratuit sau subvenționat"** from descriptions — say "acces facilitat" instead

#### Section 4 — Social Enterprise Explainer (Light)
- Two-column: text left, one photo right
- Section label: "CE ÎNSEAMNĂ"
- H2: "O întreprindere socială este diferită"
- Explain the model without specific percentages
- Badge pills: "Certificare POEO", "Co-finanțare UE", "Misiune socială", "Transparență"
  - ⚠️ **Remove "90% profit social" badge**

#### Section 5 — CTA Three Paths (Dark)
- H2: "Vrei să contribui?"
- 3 cards: Devino partener / Devino sponsor / Recomandă pe cineva
- Each: title + 1 sentence + green CTA button

---

### PAGE 4: DESPRE NOI (About)

#### Section 1 — Hero (Dark)
- Teal radial glow
- Section label: "DESPRE NOI"
- H1: "Oameni de tech, cu misiune socială"
- Subtitle about the team in Alba Iulia
- Green CTA

#### Section 2 — Our Story (Light)
- Two-column: text left, photo right
- Section label: "POVESTEA NOASTRĂ"
- H2: "Născuți din nevoia reală a comunității"
- Story paragraphs — keep qualitative, no specific stats
- ⚠️ **Remove inline stat cards** ("90%", "UE", "POEO" as big numbers). Replace with a simple line: "Co-finanțați de Uniunea Europeană prin programul POEO."

#### Section 3 — Values Grid (Light alt)
- Section label: "VALORI"
- H2: "Ce ne ghidează"
- **2×2 cards**: Accesibilitate, Transparență, Impact social, Parteneriat pe termen lung
- Each with icon in colored box + title + description
- ⚠️ **In "Impact social" card, remove "90% din profit"** — say "Profitul revine în comunitate"

#### Section 4 — Timeline (Light)
- Section label: "PARCURS"
- H2: "De unde venim, unde mergem"
- **4 timeline cards** with watermark years
- ⚠️ **Edit to be future-oriented, not claims of past achievement:**
  - 2024: "Înființare ca întreprindere socială în cadrul POEO"
  - 2024: "Lansarea primelor servicii de digitalizare"
  - 2025: "Extinderea portofoliului și a comunității"
  - 2026: "Planuri de creștere și parteneriate noi"

#### Section 5 — Location CTA (Dark)
- H2: "Alba Iulia, România"
- Subtitle: "Str. Arnsberg nr. 4 — lucrăm și remote cu echipe din toată România."
- Green CTA

---

### PAGE 5: RESURSE (Resources)

#### Section 1 — Hero (Dark)
- Blue radial glow
- Section label: "RESURSE"
- H1: "Învață, aplică, crește"
- Subtitle about practical guides and templates
- Green CTA "Abonează-te la newsletter"

#### Section 2 — Resource Cards (Light)
- **3×2 grid** of resource cards:
  1. Ghid: Cum să alegi platformele potrivite
  2. Template: Plan de digitalizare
  3. Checklist: Securitate pentru IMM-uri
  4. Ghid: Automatizări cu Make & Zapier
  5. Articol: Cloud vs. On-Premise
  6. Ghid: GDPR pentru IMM-uri
- Each card: icon + colored tag pill + title + short description
- Cards are static — no links needed (these resources will be created later)

#### Section 3 — Newsletter CTA (Light, inside dark rounded card)
- Dark (#0E0E0E) rounded-3xl card with radial glow inside
- H2: "Rămâi la curent"
- Subtitle about getting resources in inbox
- Email input + green "Abonează-te" button

---

### PAGE 6: CONTACT

#### Section 1 — Hero (Dark)
- Green radial glow
- Section label: "CONTACT"
- H1: "Hai să discutăm"
- Subtitle: "Programează un apel gratuit sau trimite-ne un mesaj. Răspundem rapid."
  - ⚠️ **Remove "de 30 minute"** and **"în maxim 24 de ore"** — keep it vague

#### Section 2 — Form + Info (Light)
- **3/5 column split:**
  - **Left (3 cols):** Contact form in white card
    - Fields: Nume complet, Email, Organizație, Ce instrumente folosiți acum?, Mesaj
    - Green "Trimite mesajul" button
  - **Right (2 cols):** Three stacked cards:
    1. Contact info card: Email, Telefon, Adresă, Program
    2. Schedule card (dark green #0E352C): "Programează un apel" — "Preferăm o discuție directă? Alege un slot convenabil." + white button "Alege un slot"
       - ⚠️ **Remove "de 30 minute, gratuit, fără obligații"** — keep it simple
    3. "Ce urmează?" card with 3 numbered green steps:
       - "Răspundem în câteva zile lucrătoare"
       - "Programăm un scurt apel introductiv"
       - "Îți trimitem un plan clar cu pași următori"
       - ⚠️ **Remove "maxim 1-2 zile"** — don't over-promise response time

---

## SVG PATTERN USAGE MAP

| Page | Hero pattern | Section patterns |
|------|-------------|-----------------|
| Home | `concentric-circles.svg` | `dot-grid-large.svg` on impact dark section |
| Servicii | `diagonal-grid-chevron.svg` | None needed |
| Impact | `hexagonal-mesh.svg` | `network-graph.svg` on CTA |
| Despre noi | `data-flow-graph.svg` | None needed |
| Resurse | `circuit-board.svg` | `dot-grid.svg` on newsletter card |
| Contact | `concentric-squares.svg` | None needed |

All at **3–6% opacity only.** Barely perceptible — adding subtle texture, not visual noise.

---

## ICON ASSIGNMENT MAP

| Component | Icon purpose | Tint color |
|-----------|-------------|-----------|
| Configurare & Onboarding | Setup/click icon | `#4D9987` |
| Integrare & Automatizare | API/connection icon | `#518DD2` |
| Suport IT & Mentenanță | Support/headset icon | `#27ae60` |
| Ajustări Personalizate | Settings/gear icon | `#2D4C71` |
| Cloud & Infrastructură | Cloud icon | `#4D9987` |
| Securitate & Conformitate | Shield/lock icon | `#518DD2` |
| Process step: Descoperire | Search/magnifier icon | `#4D9987` |
| Process step: Implementare | Wrench/tools icon | `#27ae60` |
| Process step: Suport | Growth chart icon | `#518DD2` |
| FAQ / Contact email | Envelope icon | neutral |
| FAQ / Contact phone | Phone icon | neutral |
| FAQ / Contact location | Pin/map icon | neutral |

Icon box styling: `w-14 h-14 rounded-xl` with `bg-[color]/5 border border-[color]/20`.

---

## CONTENT EDITING CHECKLIST

Before finalizing each page, verify:

- [ ] No specific numbers appear (no "90%", "100+", "30+", "5+", "50+")
- [ ] No mentions of past clients, past projects, or testimonials
- [ ] No team member names, photos, or bios
- [ ] No social media links or icons anywhere
- [ ] No prices, fees, or cost references
- [ ] No "30 minute" or specific time promises
- [ ] Copyright reads: `© 2025 TechSmartLabs SRL-D · Întreprindere socială certificată · Alba Iulia, România`
- [ ] All text is in Romanian with proper diacritics (ă, â, î, ș, ț)
- [ ] All section padding is 80px+ vertical
- [ ] Primary CTA buttons are green (#27ae60), not black
- [ ] Dark hero backgrounds are #0E0E0E, not pure black
- [ ] Light backgrounds are #F7F8F4, not pure white
- [ ] Font: Chivo for headings, Noto Sans for body — never mixed
- [ ] No orphaned pages or dead links

---

## EXECUTION ORDER

1. **Global setup:** Configure color palette, typography, button styles, card styles, header, footer
2. **Home page:** Build hero → sections in order → verify spacing and content rules
3. **Servicii page:** Hero → service grid → process → why us → CTA
4. **Impact page:** Hero → values bar → programs → explainer → CTA
5. **Despre noi page:** Hero → story → values → timeline → location CTA
6. **Resurse page:** Hero → resource grid → newsletter CTA
7. **Contact page:** Hero → form + info panel
8. **Final pass:** Run content checklist on every page. Verify all golden rules are respected.

---

*This document is the single source of truth for the Figma Make upgrade. Follow it step-by-step. Do not improvise beyond what is specified here.*
