# TechSmartLabs — Creative Brief & Execution Plan

## The Problem

The website looks like a basic Tailwind template because:
1. **Wrong typography** — Chivo at weight 700-900 (heavy/black) when Retool uses weight 300 (light). Everything feels chunky and dull.
2. **Zero real photos** — All ImagePlaceholder gray boxes. We have 6 hero photos, 6 about photos, 4 case studies, 5 blog images sitting unused.
3. **Zero icons used** — 6 feature icons, 5 service icons, 8 value icons, 3 contact icons — all unused. Services show as plain text.
4. **Zero decorative SVGs** — 188 decorative patterns, 20 cover patterns — none used. Site feels bare and sterile.
5. **No scroll animations** — fadeInUp defined but never applied. Site feels static.
6. **Dark mode broken** — Toggle exists but only header responds. Body/sections stay light.
7. **Service cards have gaps** — Should be edge-to-edge like Retool's grid sections.
8. **No visual richness** — No floating elements, no pattern overlays, no image framing, no depth.

## Creative Direction

**Retool's secret**: Light font weights (300), generous whitespace, real product imagery, subtle decorative patterns at low opacity, scroll animations, custom easing. It's sophisticated through restraint and precision, not through weight and loudness.

**Our approach**: Each page gets its own visual identity through a unique hero SVG pattern, real photography, colored icons matching the accent palette, and subtle scroll-triggered animations. Dark mode inverts everything properly.

---

## PHASE 1: Typography Revolution (globals.css, all pages)

### Task 1: Switch font from Chivo to Inter
**Why**: Inter is the closest free alternative to Saans. It has proper optical sizing, looks clean at light weights, and has the geometric precision Retool uses.
**File**: `src/styles/globals.css`
- Change Google Fonts import: `Inter:wght@300;400;500;600;700` (NOT 800/900)
- Change `--font-heading` to `'Inter', sans-serif`
- Change `--font-body` to `'Inter', sans-serif` (same font, different weights — like Retool)
- Default body weight: 400 (not heavy)
- Heading weight: 600 (semibold, NOT 700/900)

### Task 2: Fix heading weights across ALL pages
**Files**: Every .tsx page and component
- H1 hero: `font-semibold` (600) NOT `font-black` (900)
- H2 section: `font-semibold` (600) NOT `font-bold` (700)
- H3 card: `font-medium` (500)
- Body: `font-normal` (400)
- Small/labels: `font-medium` (500)
- Letter-spacing on headings: `tracking-[-0.02em]` (tight)
- Letter-spacing on body: `tracking-[0.01em]` (slightly open for readability)

### Task 3: Fix heading sizes for proper hierarchy
- Hero H1: `text-4xl md:text-5xl lg:text-6xl` (slightly smaller than current 7xl)
- Section H2: `text-3xl md:text-4xl`
- Card H3: `text-lg md:text-xl`
- Overline labels: `text-xs uppercase tracking-widest font-medium`

---

## PHASE 2: Real Photos Replace All Placeholders

### Task 4: Home.tsx — Replace ImagePlaceholder with hero photo
- Feature Intro section: Use `heroes/03.jpg` (modern office corridor) — represents clarity/innovation
- Import as: `import heroImg from '../assets/images/heroes/03.jpg'`
- Replace `<ImagePlaceholder>` with `<img>` in a styled container with SVG pattern overlay

### Task 5: Services.tsx — Replace 4 service ImagePlaceholders
- Service 1 (Integrare): `about/03.webp` (tech workspace)
- Service 2 (Automatizare): `about/04.webp` (industrial open office)
- Service 3 (Suport IT): `about/02.webp` (two professionals at table)
- Service 4 (Configurare): `about/01.webp` (office with greenery)
- Each image gets a decorative SVG overlay/frame element (see Phase 5)

### Task 6: Impact.tsx — Replace ImagePlaceholder
- Workshop section: `heroes/02.jpg` (team at high-rise window — collaboration)

### Task 7: About.tsx — Replace ImagePlaceholders
- Mission section: `heroes/05.jpg` (window city view — perspective/planning)
- Team section: Keep circular placeholders but add `avatar.png` for the available one
- Location section: `about/05.webp` (minimalist window view)

### Task 8: Resources.tsx — Replace blog card images
- Article 1: `blog/01.webp`
- Article 2: `blog/02.webp`
- Article 3: `blog/03.webp`
- Article 4: `blog/04.webp`
- Article 5: `blog/05.webp`
- Update `src/data/articles.ts` to include image paths

### Task 9: ResourceArticle.tsx — Use blog image as featured image
- Each article gets its corresponding blog image from articles data

---

## PHASE 3: Icons for Everything

### Task 10: Home.tsx services — Add service icons
Map the service icons to each service card:
- Configurare & Onboarding: `feature/04.svg` (laptop with checkmark)
- Integrare & Automatizare: `feature/06.svg` (integration/connection)
- Suport IT & Mentenanță: `service/04.svg` (monitor with checkmark)
- Ajustări Personalizate: `feature/01.svg` (code/development)
- Display as 40px colored icons using CSS filter to match accent palette

### Task 11: Services.tsx — Add feature icons to service sections
- Integrare: `feature/06.svg` — 48px, colored green (#4D9987)
- Automatizare: `feature/03.svg` — 48px, colored blue (#518DD2)
- Suport IT: `service/04.svg` — 48px, colored orange (#E8765E)
- Configurare: `feature/04.svg` — 48px, colored purple (#9874D2)

### Task 12: About.tsx principles — Add value icons
- Transparență: `about/icons/01.svg` (growth) — blue
- Simplitate: `about/icons/03.svg` (star) — green
- Autonomie: `about/icons/04.svg` (hexagonal) — orange
- Respect: `about/icons/06.svg` (collaboration) — purple

### Task 13: Contact.tsx — Use SVG icon files
- Replace inline SVGs with imported icon files from `contact/icon/`
- Address: `01.svg`, Email: `02.svg`, Phone: `03.svg`

### Task 14: Impact.tsx programs — Add program icons
- Educație: `feature/05.svg` — green
- Mentorat: `about/icons/02.svg` — blue
- Echipamente: `about/icons/07.svg` — orange

### Task 15: Create icon coloring utility
**File**: `src/styles/globals.css`
CSS filter classes to recolor SVG icons:
```css
.icon-blue { filter: brightness(0) saturate(100%) invert(52%) sepia(52%) saturate(456%) hue-rotate(179deg); }
.icon-green { filter: brightness(0) saturate(100%) invert(55%) sepia(16%) saturate(965%) hue-rotate(118deg); }
.icon-orange { filter: brightness(0) saturate(100%) invert(56%) sepia(65%) saturate(478%) hue-rotate(331deg); }
.icon-purple { filter: brightness(0) saturate(100%) invert(49%) sepia(40%) saturate(611%) hue-rotate(222deg); }
```

---

## PHASE 4: Unique SVG Hero Patterns Per Page

### Task 16: Copy 6 cover SVGs to website assets
Copy from `design-foundation/assets/svg-covers/` to `outputs/website/src/assets/patterns/`:
- `cover-terminal-matrix-blue.svg` (Home)
- `cover-schematic-hex-dark.svg` (Services)
- `cover-mesh-gravity-well.svg` (Impact)
- `cover-ellipses-blue-dark.svg` (About)
- `cover-soft-shapes-dark.svg` (Contact)
- `cover-noise-grid.svg` (Resources)

### Task 17: Update HeroBreadcrumb to accept pattern prop
**File**: `src/components/ui/HeroBreadcrumb.tsx`
- Add `pattern?: string` prop
- Render as absolute background `<img>` or `<div>` with backgroundImage at 8% opacity
- Each page passes its unique pattern

### Task 18: Home hero — Apply `cover-terminal-matrix-blue.svg`
- Replace or layer on top of `retool-lines-tight`
- Code matrix feel — tech-forward, digital

### Task 19: Apply unique patterns to each page hero
- Services: hex schematic — technical, architectural
- Impact: gravity well — community focus
- About: ellipses — depth, perspective
- Contact: soft shapes — approachable
- Resources: noise grid — data/knowledge

---

## PHASE 5: Decorative SVG Elements (Floating & Framing)

### Task 20: Copy ~10 decorative SVGs to website assets
Copy from `design-foundation/assets/svg-decorative/` to `outputs/website/src/assets/decorative/`:
- `circuit-board.svg`, `concentric-circles.svg`, `data-flow-graph.svg`
- `abstract-bauhaus.svg`, `abstract-signal-waves.svg`
- `geometric-hex-tessellation.svg`, `mesh-organic-tendrils.svg`
- `data-spiral-bloom.svg`, `abstract-energy-burst.svg`, `binary-tree.svg`

### Task 21: Create DecorativePattern component
**File**: `src/components/ui/DecorativePattern.tsx` (NEW)
- Props: `src`, `position` (top-left/top-right/bottom-left/bottom-right), `size` (sm 120px/md 240px/lg 360px), `opacity` (default 0.05)
- Renders absolutely-positioned decorative SVG

### Task 22: Apply decorative patterns to sections
- Home services: `circuit-board.svg` top-right, 5% opacity
- Home impact: `concentric-circles.svg` bottom-left, 6% opacity
- Services split sections: matching pattern behind each image
- Impact 90% section: `concentric-circles.svg` behind the number
- About mission: `abstract-bauhaus.svg` behind the photo

### Task 23: Image frame pattern
When displaying photos, add a decorative SVG element offset behind the image:
- SVG pattern sits 16px offset (top-right or bottom-left)
- Photo has `relative z-10`, pattern has `absolute z-0`
- Creates layered depth like Retool's product screenshot presentations

---

## PHASE 6: Scroll Animations

### Task 24: Create useScrollAnimation hook
**File**: `src/hooks/useScrollAnimation.ts` (NEW)
- IntersectionObserver-based
- Returns ref + isVisible
- Threshold: 0.1

### Task 25: Create AnimateOnScroll wrapper
**File**: `src/components/ui/AnimateOnScroll.tsx` (NEW)
- Initially: `opacity-0 translate-y-6`
- When visible: transition to `opacity-1 translate-y-0`
- Accepts `delay` prop for staggered animations

### Task 26: Apply to Home.tsx
- Each section wraps in AnimateOnScroll
- Card grids use staggered delays (0, 100, 200, 300ms)
- Stats counter counts up from 0 when visible

### Task 27: Apply to all other pages
- Consistent across Services, Impact, About, Contact, Resources

---

## PHASE 7: Grid & Spacing Fixes

### Task 28: Service cards — edge-to-edge (Home.tsx)
- `gap-0` on grid
- Cards get `border-r border-b border-[#E9EBDF1F]` for separation
- Creates Retool's tight grid aesthetic

### Task 29: Section transitions — seamless dark-to-dark
- Remove borders between consecutive dark sections
- Only add borders at dark↔light transitions

### Task 30: Stats grid — edge-to-edge
- `gap-0` with borders between stat boxes

---

## PHASE 8: Dark Mode Fix

### Task 31: Verify ThemeProvider applies dark class to `<html>`
- Check `useTheme.ts` and `App.tsx`
- Tailwind 4 requires class on `<html>` not `<body>`

### Task 32: Audit all hardcoded colors without dark: equivalents
- Every `text-[#151515]` needs `dark:text-[#E9EBDF]`
- Every `bg-[#F7F8F4]` needs `dark:bg-[#151515]`
- Every `bg-[#E9EBDF]` needs `dark:bg-[#242424]`
- Every `border-[#E9EBDF]` needs `dark:border-[#E9EBDF1F]`
- Every `border-[#CBCCC4]` needs `dark:border-[#E9EBDF1F]`

### Task 33: Test toggle on every page

---

## PHASE 9: Logo & Branding

### Task 34: Replace text logo with SVG logo files
- Header: `logo/01.svg` (dark mode: `logo/02.svg`)
- Footer: `logo/02.svg` (always light version on dark bg)
- Size: 32px height in header, 40px in footer

---

## PHASE 10: Dynamic Interactions

### Task 35: Service card hover effects
- Background shift on hover
- Icon scale `group-hover:scale-110`
- Arrow link animates right

### Task 36: Stats count-up animation
- IntersectionObserver triggers
- Numbers animate from 0 to target over 2s

### Task 37: Image hover zoom (Resources)
- Already implemented — verify with real images

---

## PHASE 11: Visual Polish

### Task 38: Image containers with SVG pattern frames
- Photos in styled containers
- Decorative SVG peeks from behind (offset 16px)
- Creates depth

### Task 39: Consistent overline label styling
- All section labels: `text-xs uppercase tracking-[0.2em] font-medium text-[#94958E]`

### Task 40: Link arrow hover animation
- `→` moves right on hover: `group-hover:translate-x-1`

---

## PHASE 12: Build & QA

### Task 41: Build check — zero errors

### Task 42: Visual QA checklist
- [ ] Real photos everywhere (no gray boxes)
- [ ] Icons visible and colored per accent palette
- [ ] Unique SVG pattern per page hero
- [ ] Decorative elements visible but subtle
- [ ] Scroll animations working
- [ ] Typography light and sophisticated
- [ ] Service cards edge-to-edge
- [ ] Dark mode works on ALL sections
- [ ] SVG logo in header and footer
- [ ] Responsive: mobile stacks cleanly

---

## Execution Strategy

| Phase | Tasks | Priority | Parallelizable? |
|-------|-------|----------|-----------------|
| 1. Typography | 1-3 | HIGHEST | Foundation — do first |
| 2. Photos | 4-9 | HIGH | Yes — parallel with Phase 3 |
| 3. Icons | 10-15 | HIGH | Yes — parallel with Phase 2 |
| 4. Hero patterns | 16-19 | HIGH | After Phase 1 |
| 5. Decorative SVGs | 20-23 | MEDIUM | After Phase 4 |
| 6. Scroll animations | 24-27 | MEDIUM | Independent |
| 7. Grid/spacing | 28-30 | MEDIUM | Independent |
| 8. Dark mode | 31-33 | HIGH | After all visual changes |
| 9. Logo | 34 | LOW | Independent |
| 10. Dynamic | 35-37 | LOW | After Phase 6 |
| 11. Polish | 38-40 | LOW | Last |
| 12. QA | 41-42 | FINAL | After everything |
