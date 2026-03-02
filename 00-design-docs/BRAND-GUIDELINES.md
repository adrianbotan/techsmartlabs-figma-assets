# TechSmartLabs — Brand Guidelines

> Consolidated reference for all visual and brand decisions. Use alongside design tokens in `06-design-tokens/`.

---

## 1. Brand Identity

**TechSmartLabs** is a Romanian social enterprise IT company (CAEN 6290), EU-funded through POEO. Based in Alba Iulia, Romania.

**Mission:** Help non-tech SMEs digitalize through practical, maintainable solutions.

**Brand personality:** Calm, competent, approachable, non-intimidating. Speaks clearly, never over-promises. Treats clients as partners.

**Tone of voice:** Short sentences, active voice, Romanian with diacritics (ă, â, î, ș, ț). Simple over technical, honest over impressive, helpful over promotional. No buzzwords, no excessive exclamation marks or emoji.

---

## 2. Color Palette

### Primary Colors

| Role | Hex | Usage |
|------|-----|-------|
| **Primary Green** | `#27ae60` | Main CTA buttons, active states, links |
| **Teal Accent** | `#4D9987` | Secondary accent, icon backgrounds, decorative elements |
| **Dark Blue** | `#1B2E44` | Dark section backgrounds, deep headers |

### Backgrounds

| Role | Hex | Usage |
|------|-----|-------|
| **Light BG** | `#F7F8F4` | Main light background (warm off-white) |
| **Light Alt BG** | `#E9EBDF` | Alternate section backgrounds, card fills |
| **Dark BG** | `#0E0E0E` | Hero sections, dark mode |
| **Dark Alt BG** | `#1a1a1a` | Dark mode cards, secondary dark surfaces |
| **Footer BG** | `#1F1F25` | Footer area |

### Text Colors

| Role | Hex | Usage |
|------|-----|-------|
| **Primary Text** | `#151515` | Main body text (almost black) |
| **Secondary Text** | `#3F403D` | Subtitles, descriptions |
| **Muted Text** | `#94958E` | Overline labels, captions |
| **Light Text** | `#ffffff` | Text on dark backgrounds |

### Accent Colors

| Role | Hex | Usage |
|------|-----|-------|
| **Deep Green** | `#0E352C` | Success states, dark accent |
| **Mid Green** | `#185849` | Depth accent |
| **Mid Blue** | `#518DD2` | Inline links, active nav |
| **Lightest Green** | `#C4D7D3` | Pale backgrounds, subtle fills |

### Borders

| Context | Value |
|---------|-------|
| Light mode | `#CBCCC4` |
| Dark mode | `rgba(255,255,255,0.08)` / `#E9EBDF1F` |

### Critical Rules

- **NEVER** use pure white `#FFFFFF` as background — use `#F7F8F4`
- **NEVER** use pure black `#000000` as background — use `#0E0E0E`
- Backgrounds alternate `#F7F8F4` / `#E9EBDF` for visual rhythm
- Green `#27ae60` = PRIMARY action color (all main buttons)
- Teal `#4D9987` = SECONDARY accent (icons, decorative)

---

## 3. Typography

### Font Families

| Usage | Font | Weights | Source |
|-------|------|---------|--------|
| Headings (H1-H3) | **Chivo** | 400, 700, 900 | Google Fonts |
| Body text | **Noto Sans** | 400, 500, 600, 700 | Google Fonts |
| Code blocks | JetBrains Mono | 400, 700 | Google Fonts |

### Type Scale (desktop)

| Element | Size | Weight | Font | Spacing |
|---------|------|--------|------|---------|
| H1 Hero | 56-72px | 900 | Chivo | -0.02em |
| H2 Section | 36-48px | 700 | Chivo | -0.02em |
| H3 Card | 24-28px | 700 | Chivo | -0.02em |
| Body Large | 18-20px | 400 | Noto Sans | normal |
| Body | 16px | 400 | Noto Sans | normal |
| Body Small | 14px | 400 | Noto Sans | normal |
| Button | 16px | 600 | Noto Sans | normal |
| Overline | 12px | 500 | Noto Sans | 0.2em, uppercase |

### Rules

- Line height: 1.2 headings, 1.6 body
- Max text block width: 65ch
- Headings = always Chivo, Body = always Noto Sans

---

## 4. Component Specifications

### Buttons

- **Shape:** Pill (border-radius: 9999px)
- **Primary:** `#27ae60` background, white text
- **Secondary:** Transparent + border, green text
- **Ghost:** No border, green text, subtle hover bg
- **Hover:** Slight darkening + scale(0.98)
- **Sizes:** sm 32px, md 40px, lg 48px height
- **Padding:** 16-24px horizontal

### Cards

- **Border radius:** 12-16px
- **Border:** 1px `#CBCCC4` (light) / `rgba(255,255,255,0.08)` (dark)
- **Shadow:** 0 2px 8px rgba(0,0,0,0.06) — soft, diffuse
- **Hover:** translateY(-2px) + stronger shadow
- **Padding:** 24-48px
- **Background:** `#F7F8F4` (light) / `#1a1a1a` (dark)

### Navigation

- Sticky at top
- Logo (left) — Nav links (center) — CTA (right)
- Transparent over hero, solid on scroll
- Items: Home, Servicii, Impact, Despre noi, Resurse, Contact

### Sections

- Vertical spacing: 80-120px between sections
- Container max-width: 1200px centered
- Container padding: 24-48px
- Alternate backgrounds for visual rhythm
- Optional SVG pattern overlay at 3-6% opacity

---

## 5. Icon & SVG Usage

### Icon Style

- 309 marketing SVG icons in `02-icons-marketing/`
- Outline/stroke style (1.5px stroke on 24x24 viewBox)
- Recolored to brand palette (see mapping below)

### SVG Color Mapping

All icons and illustrations were recolored from the original blue+lime palette:

| Original | Brand Color | Role |
|----------|-------------|------|
| `#98B9EA` (light blue) | `#4D9987` (teal) | Primary icon accent |
| `#436DB5` (medium blue) | `#0E352C` (deep green) | Dark accent |
| `#DEEAFF` (very light blue) | `#E9EBDF` (warm off-white) | Light fills |
| `#C4D36C` (lime) | `#27ae60` (primary green) | Main brand color |
| `#A7B23B` (darker lime) | `#185849` (darkened green) | Depth accent |
| `#DFEAB0` (pale yellow-green) | `#C4D7D3` (lightest green) | Pale fills |

Script: `00-design-docs/recolor-svgs.py`

### Icon Color on Backgrounds

- Dark backgrounds: white or teal `#4D9987`
- Light backgrounds: dark `#151515` or teal `#4D9987`

### Decorative Patterns

- 188 decorative SVGs in `04-svg-patterns/decorative/`
- 19 cover SVGs in `04-svg-patterns/covers/`
- Use as background overlays at **3-6% opacity**

---

## 6. Photography Rules

### Style

- Modern software studio aesthetic
- Small teams, friendly collaboration
- Open bright offices, big windows, blurred city backdrop
- Warm, empathetic atmosphere

### Critical Rules

- **NO visible faces** — only backs, blurred profiles, hands, silhouettes
- **NO logos or brand names** on screens, clothes, or objects
- **NO readable text** on screens — only abstract/blurred UI
- Consistent warm color temperature matching teal/navy palette
- Soft natural light, no harsh shadows

### Available Photos

All in `01-stock-photos/`, organized by section:
- `heroes/` — 6 hero images (wide shots)
- `about/` — 7 about section images + 1 avatar
- `blog/` — 6 blog article thumbnails
- `case/` — 4 case study images
- `brand/` — 4 brand collateral images
- `service/` — 3 service section images
- `others/` — 3 general purpose images
- `banner/` — 1 banner asset

All converted to WebP format for efficiency.

---

## 7. Visual Direction — Retool.com Reference

The website aesthetic follows Retool.com. Reference screenshots in `07-reference-screenshots/`.

### What to replicate:

- Dark hero sections with large, clean typography
- Pill-shaped CTA buttons (fully rounded)
- Generous whitespace (80px+ between sections)
- Soft, diffuse shadows (never sharp)
- Cards with 12-16px radius
- Grid pattern overlays at 3-6% opacity
- Radial glows behind hero sections
- Warm cream `#F7F8F4` backgrounds (not cold white)
- Premium, high-tech feel with warm human touch

### What NOT to replicate:

- Don't copy Retool's content or product UI literally
- Don't use their exact fonts (Saans/Px Grotesk)
- Don't make it look like a SaaS dashboard — it's a services company

---

## 8. Dark Mode

### Color Inversions

| Light | Dark |
|-------|------|
| `#F7F8F4` (bg) | `#0E0E0E` |
| `#E9EBDF` (alt bg) | `#1a1a1a` |
| `#151515` (text) | `#E9EBDF` |
| `#CBCCC4` (border) | `rgba(255,255,255,0.08)` |

### Rules

- Dark class applied to `<html>` element (Tailwind 4 requirement)
- Every hardcoded color needs a `dark:` equivalent
- Green `#27ae60` and Teal `#4D9987` remain consistent across modes

---

## 9. Folder Structure (Figma Make Cluster)

```
figma-make-cluster/
  00-design-docs/          Brand guidelines, briefs, reference docs, scripts
  01-stock-photos/         ~50 WebP photos organized by section
  02-icons-marketing/      309 SVG icons (brand-colored)
  03-illustrations/        237 SVG illustrations across 5 categories
  04-svg-patterns/         207 SVGs (19 covers + 188 decorative)
  05-brand-images/         27 AI-generated brand images
  06-design-tokens/        JSON + CSS design tokens
  07-reference-screenshots/ Retool section refs, full pages, failures to avoid
```

---

## 10. Website Pages

| Page | Romanian | Key sections |
|------|----------|-------------|
| Home | Acasă | Hero, Services grid, How it works, Impact stats, Trust, FAQ, CTA |
| Services | Servicii | Hero, 4 service cards, Delivery modes, CTA |
| Impact | Impact | Hero, 90% statement, Programs grid, Workshop format, 3 CTA paths |
| About | Despre noi | Hero, Mission, 4 Principles, Team, Location |
| Resources | Resurse | Hero, Article grid (10 articles) |
| Contact | Contact | Hero, Form + Contact info, What happens next |

---

## 11. Social Enterprise Identity

- 90% of profit reinvested into digital literacy, mentorship, equipment access
- EU-funded (POEO program)
- Social enterprise certification
- This must be visible on the website — it's a key differentiator
