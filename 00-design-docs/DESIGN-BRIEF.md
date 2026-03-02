# TechSmartLabs — Complete Design Brief for Website Rebuild

> Use this document in Figma, Framer, Webflow, or any design tool to build the website.
> All referenced assets are in this "website retry 2" folder.

---

## 1. WHAT IS TECHSMARTLABS

**TechSmartLabs** is a Romanian social enterprise IT company (CAEN 6290), EU-funded through the POEO program. Based in **Alba Iulia, Romania**.

**What they do:** Help non-tech SMEs digitalize through 4 services:
1. App Integration & Automation
2. Platform Configuration & Onboarding
3. IT Support & Maintenance
4. Custom Adjustments

**Social impact:** 90% of profit is reinvested into digital literacy workshops, mentorship programs, and equipment access for underserved communities.

**Brand personality:** Calm, competent, approachable, non-intimidating. Speaks clearly, never over-promises. Treats clients as partners.

---

## 2. VISUAL DIRECTION — FOLLOW RETOOL.COM

The website aesthetic is based on **Retool.com** (retool.com). Reference screenshots are in `02-retool-reference/`.

### What to copy from Retool:
- **Dark hero sections** with large, clean typography
- **Pill-shaped CTA buttons** (fully rounded, not square)
- **Generous whitespace** (80px+ between sections)
- **Soft, diffuse shadows** (never sharp)
- **Cards with moderate rounding** (12-16px radius)
- **Grid pattern overlays** at very low opacity (3-6%) as background texture
- **Radial glows** behind hero sections (subtle teal/blue glow)
- **Light mode uses warm cream (#F7F8F4)**, not cold white
- **Feature sections** with clean data UI mockups
- **Premium, high-tech feel** with warm, human touch

### What NOT to copy:
- Don't copy Retool's content or product UI literally
- Don't use their exact fonts (use Chivo + Noto Sans instead)
- Don't make it look like a SaaS dashboard — it's a services company

---

## 3. COLOR PALETTE

### Primary Colors
| Role | Hex | Usage |
|------|-----|-------|
| **Primary Green** | `#27ae60` | Main CTA buttons, active states, links |
| **Teal Accent** | `#4D9987` | Secondary accent, icon backgrounds, decorative elements |
| **Dark Blue** | `#1B2E44` | Dark section backgrounds, deep headers |

### Backgrounds
| Role | Hex | Usage |
|------|-----|-------|
| **Light BG** | `#F7F8F4` | Main light background (warm off-white, NOT pure white) |
| **Light Alt BG** | `#E9EBDF` | Alternate section backgrounds, card subtle fills |
| **Dark BG** | `#0E0E0E` | Hero sections, dark mode (NOT pure black) |
| **Dark Alt BG** | `#1a1a1a` | Dark mode cards, secondary dark surfaces |
| **Footer BG** | `rgb(240, 242, 245)` | Footer area |

### Text Colors
| Role | Hex | Usage |
|------|-----|-------|
| **Primary Text** | `#151515` / `#1F1F25` | Main body text (almost black, softer than pure black) |
| **Secondary Text** | `#3F403D` / `#7f8c8d` | Subtitles, descriptions, secondary info |
| **Light Text** | `#ffffff` / `#f8f9fa` | Text on dark backgrounds |

### Accent Colors
| Role | Hex | Usage |
|------|-----|-------|
| **Deep Green** | `#0E352C` / `#185849` | Success states, unique marketing sections |
| **Mid Blue** | `#2D4C71` / `#518DD2` | Inline links, active nav states |
| **Border Light** | `#CBCCC4` | Borders, dividers in light mode |
| **Border Dark** | `rgba(255,255,255,0.08)` | Borders in dark mode |

### IMPORTANT Color Rules
- **NEVER use pure white (#FFFFFF) as background** — use #F7F8F4
- **NEVER use pure black (#000000) as background** — use #0E0E0E
- Backgrounds alternate between `#F7F8F4` and `#E9EBDF` for visual rhythm
- Green (#27ae60) is the PRIMARY action color (all main buttons)
- Teal (#4D9987) is the SECONDARY accent (icons, decorative)

---

## 4. TYPOGRAPHY

### Font Families
| Usage | Font | Weights | Source |
|-------|------|---------|--------|
| **Headings (H1-H3)** | Chivo | 400, 700, 900 | Google Fonts |
| **Body text** | Noto Sans | 400, 500, 600, 700, 800 | Google Fonts |
| **Code blocks** (if any) | JetBrains Mono | 400, 700 | Google Fonts |

### Type Scale (desktop)
| Element | Size | Weight | Font |
|---------|------|--------|------|
| H1 (Hero) | 56-72px | 900 | Chivo |
| H2 (Section) | 36-48px | 700 | Chivo |
| H3 (Card) | 24-28px | 700 | Chivo |
| Body Large | 18-20px | 400 | Noto Sans |
| Body | 16px | 400 | Noto Sans |
| Body Small | 14px | 400 | Noto Sans |
| Button | 16px | 600 | Noto Sans |
| Caption | 12px | 500 | Noto Sans |

### Typography Rules
- Letter spacing: -0.02em for headings, normal for body
- Line height: 1.2 for headings, 1.6 for body
- Max width for text blocks: 65ch (for readability)
- Headings: always Chivo, never Noto Sans
- Body: always Noto Sans, never Chivo

---

## 5. COMPONENT SPECIFICATIONS

### Buttons
- **Shape:** Pill (fully rounded / border-radius: 9999px)
- **Primary:** Green (#27ae60) background, white text
- **Secondary:** Transparent with border, green text
- **Ghost:** No border, green text, subtle hover background
- **Hover:** Slight darkening + subtle scale-down (0.98)
- **Sizes:** sm (32px h), md (40px h), lg (48px h)
- **Padding:** 16px-24px horizontal

### Cards
- **Border radius:** 12-16px
- **Border:** 1px solid #CBCCC4 (light) or rgba(255,255,255,0.08) (dark)
- **Shadow:** Very soft and diffuse (0 2px 8px rgba(0,0,0,0.06))
- **Hover:** Slight lift (translateY(-2px)) + slightly stronger shadow
- **Padding:** 24-48px internal
- **Background:** White or #F7F8F4 (light), #1a1a1a (dark)

### Navigation
- **Sticky** at top of page
- **Layout:** Logo (left) — Nav links (center) — CTA button (right)
- **Transparent** over hero, solid background on scroll
- **Nav items:** Home, Servicii, Impact, Despre noi, Resurse, Contact
- **Mobile:** Hamburger menu

### Sections
- **Vertical spacing:** 80-120px between sections
- **Container max-width:** 1200px centered
- **Container padding:** 24-48px
- **Alternate backgrounds:** #F7F8F4 → #E9EBDF → #F7F8F4 for visual rhythm
- **Optional:** SVG grid pattern overlay at 3-6% opacity

### Footer
- **Multi-column:** Logo + description | Quick links | Services | Contact
- **Bottom bar:** Copyright + social links
- **Dark background** (#1F1F25 or #0E0E0E)

---

## 6. WEBSITE PAGES & SECTIONS

### Page 1: HOME (Acasa)
1. **Hero** — Dark background (#0E0E0E), large Chivo heading: "Digitalizare simpla, explicata clar". Subtitle about accessible IT. Green CTA "Programeaza o discutie". Radial glow effect behind. Optional abstract/geometric decorative image.
2. **Services Snapshot** — 4 cards in a grid: Platform Config, App Integration, IT Support, Custom Adjustments. Each with teal icon + short description.
3. **How It Works** — 3 numbered steps: Discovery -> Implementation -> Support & Growth. Visual connector between steps.
4. **Impact** — Stats counters (years experience, clients, projects) + brief social impact statement about 90% profit reinvested.
5. **Trust** — EU funding badge, social enterprise certification, partner logos area.
6. **FAQ** — Accordion with 5-6 questions.
7. **CTA Banner** — "Hai sa vorbim" + call-to-action button.

### Page 2: SERVICES (Servicii)
1. **Hero breadcrumb** — Dark, "Servicii"
2. **Services grid** — 4 detailed cards: Integrations, Automations, IT Support, Platform Setup. Each with icon, title, description, "Good fit when..." list, "Common outcomes" list.
3. **Delivery modes** — Project-based vs. Recurring subscription comparison.
4. **CTA** — "Let's find the right fit"

### Page 3: IMPACT
1. **Hero breadcrumb** — "Impact"
2. **Impact intro** — 90% profit reinvested statement
3. **Programs grid** — Digital Literacy Workshops, Mentorship, Equipment Access
4. **Workshop format** — Detail section
5. **Three CTA paths** — Partner / Sponsor / Refer someone

### Page 4: ABOUT (Despre noi)
1. **Hero breadcrumb** — "Despre noi"
2. **Mission statement**
3. **4 Principles cards** — Clear over complex, Practical delivery, Maintainable by default, Respect
4. **Team section** (placeholder)
5. **Location** — Alba Iulia, Romania

### Page 5: RESOURCES (Resurse)
1. **Hero breadcrumb** — "Resurse"
2. **Article grid** — 10 article cards with thumbnails: Automation Checklist, Tool Inventory, Workflow Mapping, Intake Forms, Permissions Guide, Naming Convention Guide, Handoff Template, Notification Hygiene, Weekly Maintenance, Digital Safety
3. Each links to individual article page

### Page 6: CONTACT
1. **Hero breadcrumb** — "Contact"
2. **Two-column:** Form (left) + Contact info (right)
3. **Form fields:** Name, Email, Company/Team, Current tools, What to improve, Notes
4. **What happens next:** Reply in 1-2 days, short call, clear next step
5. **Address:** Str. Arnsberg nr. 4, Alba Iulia, Romania

---

## 7. PHOTOGRAPHY RULES

Detailed rules are in `09-guidelines/brief-imagini.md`. Key points:

### Style
- Modern software studio, small teams, friendly collaboration
- Open bright offices, big windows, blurred city backdrop
- White or light wood desks, green plants, glass meeting rooms
- Warm, empathetic atmosphere

### CRITICAL Rules
- **NO visible faces** — only backs, blurred profiles, hands, or silhouettes
- **NO logos or brand names** visible on screens, clothes, or objects
- **NO readable text** on screens — only abstract/blurred UI elements
- Consistent furniture and props across images (same universe)
- Warm color temperature matching the teal/navy palette
- Soft natural light, no harsh shadows

### Camera Settings
| Type | Focal | Usage |
|------|-------|-------|
| Wide | 24-35mm | Office overviews, meeting rooms |
| Medium | 35-50mm | Desk corners, small groups |
| Close-up | 50-85mm | Hands on keyboard, screen details |

### Downloaded Stock Photos
Available in `07-stock-photos/` organized by section (about, case, blog, others, banner). 20+ photos already downloaded and converted to WebP.

---

## 8. ICONOGRAPHY

### Available Icons
- **309 SVG icons** in `03-icons-svg/icons-marketing/` — outlined style, professional
- Categories: tech, business, cloud, security, data, networking, UI elements
- These come in both SVG and PNG (1x and 2x)

### Icon Usage Rules
- Color them with the brand teal (#4D9987) or primary green (#27ae60)
- Use outline/stroke style, not filled
- Consistent stroke width (1.5px on 24x24 viewBox)
- On dark backgrounds: white or teal
- On light backgrounds: dark (#151515) or teal

### SVG Patterns & Decorative
- **980 SVG patterns** in `04-patterns-svg/` — grid patterns, geometric shapes, decorative elements
- Use as subtle background overlays at 3-6% opacity
- Types: fine grids, dot grids, diagonal lines, concentric circles, radial glows

---

## 9. DESIGN TOKENS (machine-readable)

Complete design token files in `05-design-tokens/`:
- `colors.json` — Full color palette with semantic naming
- `typography.json` — Font families, sizes, weights, line heights
- `spacing.json` — Spacing scale (4px base)
- `motion.json` — Animation/transition tokens
- `retool-color-vars.css` — CSS custom properties for colors
- `retool-type-vars.css` — CSS custom properties for typography

---

## 10. BRAND IMAGES (AI-generated)

27 AI-generated brand images in `06-generated-brand-images/`. These were created for brand collateral, social media templates, and brand guideline pages. Use as decorative elements or in the /brand sub-site.

---

## 11. WHAT WENT WRONG IN THE FIRST ATTEMPT (AVOID THESE)

1. **Ugly visual output** — The code-first approach produced generic-looking pages that didn't match the Retool aesthetic. The design lacked the premium feel.
2. **Too much code, too little design** — Agents focused on code structure rather than visual quality.
3. **Colors not applied properly** — The warm teal/green palette wasn't consistently used.
4. **No visual validation** — Pages were built without checking if they actually looked good.
5. **Generic components** — Buttons, cards, and sections looked like default Bootstrap, not like Retool.

### How to fix in retry:
- **Design first, code second** — Get the visual right in Figma/design tool before touching code
- **Use the reference screenshots** in `01-reference-screenshots/` and `02-retool-reference/` as direct visual targets
- **Check every section** against Retool's website for premium quality
- **The warm color palette** must be visible everywhere — no cold whites, no generic blues
- **Generous whitespace** is non-negotiable — 80px+ between sections

---

## 12. FIGMA PROJECT REFERENCE

- **Figma file key:** `R6rh5pSipbYay7ibIPK3YK`
- **Key wireframe node:** `239:449`
- Contains website wireframes and content structure

---

## 13. NOTION CONTENT PAGES (all website copy lives here)

| Page | Notion ID |
|------|-----------|
| Home | `07b248426395404a81b35196a9c22c13` |
| Services | `7f7d6e15ae3f40fe99f8e946fe842745` |
| Impact | `57a0886e73484a0baa2247d348ab82d1` |
| About | `3b594915067b463897630c0af3a64ea1` |
| Resources | `3cd056bcf45342148b86c0b0c621d424` |
| Contact | `1a2d304a29f14b04a45eeb3655fb0a32` |
| Brand Voice Guide | `316c478ae1a581f7900afe74df17629d` |
| Brand Guidelines Slides | `316c478ae1a581ecb9c2c69212385512` |
| Social Media Calendar | `316c478ae1a581af8604d9e5192c2a19` |
| Brand Asset Checklist | `316c478ae1a5815a90fbdea3cdc9e6b1` |
| Mockup Strategy | `316c478ae1a5812eba45f00d99705c72` |
| Brand Section Content Map | `316c478ae1a5816b9146c8c2df4c88ca` |
| Image Sourcing Plan | `316c478ae1a58143b299cbc623ceab2a` |
| Master Plan | `316c478ae1a581ef876fc8cec6ee0649` |
| Parent (8-TechSmartLabs) | `30ac478ae1a58086ac9fd7e165b92f4b` |

---

## 14. BRAND VOICE (for any copy/text decisions)

- **Tone:** Calm, clear, pragmatic, direct, empathetic
- **Language:** Romanian (website copy), with diacritics (a, a, i, s, t)
- **Writing rules:**
  - Short sentences, active voice
  - Explain jargon when it appears
  - Use "you" / "tu" (informal but respectful)
  - No buzzwords, no passive-aggressive tone
  - No excessive exclamation marks or emoji
  - Simple over technical, honest over impressive, helpful over promotional

---

## 15. FOLDER STRUCTURE

```
website retry 2/
  01-reference-screenshots/    # Retool UI component screenshots (buttons, cards, hero, forms)
  02-retool-reference/         # Full Retool page screenshots (homepage, agents, customers, pricing)
  03-icons-svg/                # 309 SVG icons organized by category
  04-patterns-svg/             # 980 SVG patterns and decorative elements
  05-design-tokens/            # JSON + CSS design tokens (colors, typography, spacing, motion)
  06-generated-brand-images/   # 27 AI-generated brand images
  07-stock-photos/             # 63 stock photos (WebP) organized by section
  08-page-screenshots/         # Screenshots of the FAILED first website attempt (what to avoid)
  09-guidelines/               # All text guidelines and documentation
  DESIGN-BRIEF.md              # THIS FILE
```

---

## 16. QUICK START CHECKLIST

1. Read this brief entirely
2. Look at `02-retool-reference/` screenshots — this is your visual target
3. Look at `08-page-screenshots/` — this is what to AVOID (the ugly first attempt)
4. Set up your color palette from Section 3
5. Set up typography from Section 4
6. Design the Home page hero first — if that looks great, the rest will follow
7. Use icons from `03-icons-svg/` colored in teal (#4D9987)
8. Use photos from `07-stock-photos/` for real imagery
9. Follow the page structure in Section 6
10. Validate against Retool.com for premium quality at every step
