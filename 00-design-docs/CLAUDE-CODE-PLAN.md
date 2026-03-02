# TechSmartLabs — Claude Code Execution Plan

> This file is the master instruction set for Claude Code running in Cursor.
> Read this ENTIRELY before starting any work.
> Then read: `outputs/RULES.md`, `outputs/PROJECT-CONTEXT.md`

---

## Project Overview

Build a complete React + Tailwind website for TechSmartLabs (Romanian social enterprise IT company) with a `/brand` sub-site that serves as a full brand asset management system. All website copy exists in Notion. All visual assets (SVGs, icons, patterns, design tokens) exist in the project folder. The aesthetic is based on Retool.com — already captured in design guidelines and tokens.

**Final deliverables:**
1. Production-ready React website (Home, Services, Impact, About, Resources, Contact)
2. `/brand` sub-site (16 pages: soul, voice, logo, colors, typography, photography, icons, patterns, components, social, stationery, documents, print, merchandise, digital, dashboard)
3. All Notion project pages updated with progress and content
4. `/brand` sub-site doubles as a slide-by-slide web presentation (each page = a presentation section, exportable as web slides)

---

## MCP Requirements (configure in Cursor before starting)

```json
{
  "notion": "For reading website copy and writing progress updates",
  "figma": "For reading wireframe structure from file R6rh5pSipbYay7ibIPK3YK"
}
```

If Notion MCP is not available: the copy content is summarized in this plan and can be hardcoded. If Figma MCP is not available: the wireframe structure is described in detail below.

---

## Architecture Decision Record

- **Framework:** React 18 + Vite 5 + Tailwind CSS 3
- **Routing:** React Router v6 (client-side)
- **No SSR, no Next.js** — static site, built with `vite build`
- **Dark/light mode:** Tailwind `dark:` classes + CSS custom properties + React context
- **Component pattern:** Functional components, no class components. Shared components in `src/components/`, page components in `src/pages/`
- **Icons:** SVG imports as React components (use `vite-plugin-svgr` or inline SVGs)
- **Fonts:** Chivo (headings), Noto Sans (body) — loaded via Google Fonts
- **The `/brand` section:** Separate layout (`BrandLayout`) with sidebar nav. Same Tailwind config. Own route group.
- **No external UI libraries** (no MUI, no Chakra). Build from design tokens.

---

## Sub-Agent Delegation Rules

Claude Code should use the Task tool to delegate work to sub-agents when:

1. **A page build is independent** — each website page can be built in parallel once shared components exist
2. **Content population is separable** — fetching Notion copy and populating components can be a separate agent
3. **The /brand section is self-contained** — it shares components but has its own pages
4. **Context is growing large** — if the conversation exceeds ~60% of context window, delegate remaining work to sub-agents with focused prompts

### Agent Hierarchy

```
MAIN AGENT (orchestrator)
├── Phase 1: Project Setup (main agent — small, sequential)
├── Phase 2: Design System (main agent — must complete before spawning)
│
├── Phase 3: Website Pages (SUB-AGENTS, parallel)
│   ├── Agent: Home page
│   ├── Agent: Services page
│   ├── Agent: Impact page
│   ├── Agent: About page
│   ├── Agent: Resources page (includes 10 blog articles)
│   └── Agent: Contact page
│
├── Phase 4: /brand Sub-Site (SUB-AGENTS, parallel)
│   ├── Agent: Brand layout + dashboard + soul + voice
│   ├── Agent: Logo + colors + typography pages
│   ├── Agent: Photography + icons + patterns pages
│   ├── Agent: Components + social templates pages
│   └── Agent: Stationery + documents + print + merchandise + digital pages
│
├── Phase 5: Content Population (SUB-AGENT)
│   └── Agent: Fetch all Notion copy, populate all pages
│
├── VALIDATION GATE 1
│
├── Phase 6: Brand Research & Content (SUB-AGENT)
│   └── Agent: Research brand guidelines best practices, fill /brand content
│
├── VALIDATION GATE 2
│
└── Phase 7: QA & Polish (main agent)
```

---

## Phase 1: Project Setup

**Agent:** Main (do NOT delegate)
**Estimated tokens:** Low
**Validation:** Project runs with `npm run dev`

### Steps:

1.1. Create Vite + React + TypeScript project:
```bash
cd outputs/
npm create vite@latest website -- --template react-ts
cd website
npm install
npm install -D tailwindcss @tailwindcss/vite postcss autoprefixer
npm install react-router-dom
npx tailwindcss init -p
```

1.2. Configure `tailwind.config.js` with design tokens from `../../design-foundation/design-tokens/`:
- Read `colors.json` → map to Tailwind color theme
- Read `typography.json` → map to fontFamily, fontSize
- Read `spacing.json` → map to spacing scale
- Add dark mode: `darkMode: 'class'`
- Key colors:
  - `surface-dark`: `#0E0E0E`
  - `surface-light`: `#F7F8F4`
  - `surface-light-alt`: `#E9EBDF`
  - `teal`: `#4D9987`
  - `primary-green`: `#27ae60`
  - `text-dark`: `#1F1F25`
  - `text-light`: `#f8f9fa`
  - `text-secondary`: `#7f8c8d`
- Key fonts:
  - `heading`: `'Chivo', sans-serif` (weights: 400, 700, 900)
  - `body`: `'Noto Sans', sans-serif` (weights: 400, 500, 600, 700, 800)

1.3. Set up project structure:
```
src/
├── components/          # Shared components
│   ├── layout/          # Header, Footer, Layout, BrandLayout
│   ├── ui/              # Button, Card, Icon, Tag, SectionContainer
│   └── theme/           # ThemeToggle, ThemeProvider
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Impact.tsx
│   ├── About.tsx
│   ├── Resources.tsx
│   ├── ResourceArticle.tsx
│   ├── Contact.tsx
│   └── brand/           # /brand sub-site pages
│       ├── BrandDashboard.tsx
│       ├── BrandSoul.tsx
│       ├── BrandVoice.tsx
│       ├── BrandLogo.tsx
│       ├── BrandColors.tsx
│       ├── BrandTypography.tsx
│       ├── BrandPhotography.tsx
│       ├── BrandIcons.tsx
│       ├── BrandPatterns.tsx
│       ├── BrandComponents.tsx
│       ├── BrandSocial.tsx
│       ├── BrandStationery.tsx
│       ├── BrandDocuments.tsx
│       ├── BrandPrint.tsx
│       ├── BrandMerchandise.tsx
│       └── BrandDigital.tsx
├── assets/
│   ├── icons/           # Symlink or copy from ../../icons/
│   ├── patterns/        # Symlink or copy from ../../design-foundation/assets/svg-decorative/
│   └── images/          # Placeholder, filled by image sourcing later
├── styles/
│   └── globals.css      # Tailwind directives + custom CSS vars
├── data/                # Static content data (extracted from Notion)
│   ├── home.ts
│   ├── services.ts
│   ├── impact.ts
│   ├── about.ts
│   ├── resources.ts
│   └── contact.ts
├── hooks/
│   └── useTheme.ts
├── App.tsx              # Router setup
└── main.tsx
```

1.4. Set up React Router in `App.tsx`:
```tsx
// Main site routes
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="services" element={<Services />} />
  <Route path="impact" element={<Impact />} />
  <Route path="about" element={<About />} />
  <Route path="resources" element={<Resources />} />
  <Route path="resources/:slug" element={<ResourceArticle />} />
  <Route path="contact" element={<Contact />} />
</Route>

// Brand sub-site routes (separate layout)
<Route path="/brand" element={<BrandLayout />}>
  <Route index element={<BrandDashboard />} />
  <Route path="soul" element={<BrandSoul />} />
  <Route path="voice" element={<BrandVoice />} />
  // ... all 16 brand pages
</Route>
```

1.5. Set up `globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Chivo:wght@400;700;900&family=Noto+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --color-surface: #F7F8F4;
  --color-surface-alt: #E9EBDF;
  --color-text: #151515;
  --color-text-secondary: #3F403D;
  --color-accent-teal: #4D9987;
  --color-accent-blue: #1B2E44;
  --color-accent-green: #27ae60;
  --color-border: #CBCCC4;
}

.dark {
  --color-surface: #0E0E0E;
  --color-surface-alt: #1a1a1a;
  --color-text: #f8f9fa;
  --color-text-secondary: #a0a0a0;
  --color-border: rgba(255, 255, 255, 0.08);
}
```

1.6. **VALIDATE:** Run `npm run dev`, confirm blank page loads with no errors, dark mode toggle works.

---

## Phase 2: Design System & Shared Components

**Agent:** Main (do NOT delegate — other agents depend on these)
**Estimated tokens:** Medium
**Validation:** Each component renders in isolation

### Components to build (in order):

2.1. **ThemeProvider + useTheme hook**
- React context for dark/light mode
- Persists to localStorage
- Adds/removes `dark` class on `<html>`

2.2. **Button** (`src/components/ui/Button.tsx`)
- Pill-shaped (rounded-full)
- Variants: primary (teal), secondary (outline), ghost
- Sizes: sm, md, lg
- Hover: subtle color shift + scale-down
- Props: variant, size, children, href?, onClick?

2.3. **Card** (`src/components/ui/Card.tsx`)
- Border radius: 12-16px (rounded-xl)
- Border: 1px rgba white 8% (dark) or light gray (light)
- Shadow: soft diffuse (shadow-sm)
- Hover: slight lift
- Props: children, className?, href?

2.4. **SectionContainer** (`src/components/ui/SectionContainer.tsx`)
- Max-width container with generous padding
- Background color prop (surface, surface-alt, dark, custom)
- Optional SVG pattern overlay at low opacity (3-6%)

2.5. **Icon** (`src/components/ui/Icon.tsx`)
- Wrapper for SVG icons from the icons folder
- Props: name (maps to SVG file), size, color (defaults to currentColor)
- Loads SVGs inline for color control

2.6. **Tag** (`src/components/ui/Tag.tsx`)
- Small pill labels for categories/status
- Variants: default, teal, blue, green, warm

2.7. **Header** (`src/components/layout/Header.tsx`)
- Sticky top navigation
- Logo (left), nav links (center), ThemeToggle + CTA button (right)
- Mobile: hamburger menu
- Transparent on hero, solid on scroll
- Nav items: Home, Services, Impact, About, Resources, Contact

2.8. **Footer** (`src/components/layout/Footer.tsx`)
- Multi-column layout: logo + description, quick links, services, contact info
- Bottom bar: copyright, social links
- Dark background section

2.9. **Layout** (`src/components/layout/Layout.tsx`)
- Wraps Header + Outlet + Footer
- Applies ThemeProvider

2.10. **BrandLayout** (`src/components/layout/BrandLayout.tsx`)
- Sidebar navigation (left) with all /brand section links
- Content area (right) with Outlet
- Header: "Brand Guidelines" title + back to main site link
- Collapsible sidebar on mobile

2.11. **VALIDATE:** Create a test page that renders every component. Verify visually against Retool screenshots in `design-foundation/assets/`. Check dark mode for all components.

---

## Phase 3: Website Pages (PARALLEL SUB-AGENTS)

**Agent:** Spawn one sub-agent per page
**Each agent reads:** The shared components (Phase 2 output), its corresponding Notion content, the Figma wireframe description below.

### IMPORTANT: Content Source

Each page's copy comes from Notion. If Notion MCP is available, fetch by page ID. If not, use the content summaries below.

### Page Wireframe Reference (from Figma node 239:449)

The wireframe follows this general pattern per page:
- Breadcrumb hero section (dark bg, page title, subtitle, optional background pattern)
- Content sections alternating surface/surface-alt backgrounds
- Card grids for features/services (3-column on desktop, 1-column mobile)
- CTA banner before footer
- Consistent 80px+ vertical spacing between sections

### Sub-Agent 3.1: Home Page

**Notion source:** `07b248426395404a81b35196a9c22c13`

Sections (in order):
1. **Hero** — Full-width dark section. Large headline "Digitalizare simplă, explicată clar" (or one of 3 options from Notion). Subtitle about accessible IT. CTA button "Programează o discuție". Radial glow SVG pattern behind. Decorative abstract image.
2. **Services Snapshot** — 4 cards: Platform Config & Onboarding, App Integration & Automation, IT Support & Maintenance, Custom Adjustments. Each with icon + short description.
3. **How It Works** — 3 steps: Discovery → Implementation & Setup → Support & Growth. Numbered with connecting visual.
4. **Impact Section** — Stats counters (years experience, clients, projects) + brief social impact statement.
5. **Trust Section** — EU funding badge, social enterprise certification, partner logos area.
6. **FAQ** — Accordion with 5-6 common questions.
7. **CTA Banner** — "Hai să vorbim" + Book a call button.

### Sub-Agent 3.2: Services Page

**Notion source:** `7f7d6e15ae3f40fe99f8e946fe842745`

Sections:
1. Hero breadcrumb (dark, "Servicii")
2. Services grid — 4 detailed service cards: Integrations, Automations, IT Support, Platform Setup. Each with: icon, title, description, "Good fit when..." list, "Common outcomes" list.
3. Two delivery modes section: Project-based vs. Recurring subscription.
4. CTA: "Let's find the right fit"

### Sub-Agent 3.3: Impact Page

**Notion source:** `57a0886e73484a0baa2247d348ab82d1`

Sections:
1. Hero breadcrumb ("Impact")
2. Impact intro — 90% profit reinvested statement
3. Programs grid: Digital Literacy Workshops, Mentorship, Equipment Access
4. Workshop format detail section
5. Three CTA paths: Partner / Sponsor / Refer someone

### Sub-Agent 3.4: About Page

**Notion source:** `3b594915067b463897630c0af3a64ea1`

Sections:
1. Hero breadcrumb ("Despre noi")
2. Mission statement
3. 4 Principles cards: Clear over complex, Practical delivery, Maintainable by default, Respect
4. Team section (placeholder for now)
5. Location: Alba Iulia, Romania

### Sub-Agent 3.5: Resources Page

**Notion source:** `3cd056bcf45342148b86c0b0c621d424`

Sections:
1. Hero breadcrumb ("Resurse")
2. Article grid — 10 article cards with thumbnails, titles, excerpts
3. Each card links to `/resources/:slug`

**ALSO build ResourceArticle.tsx** — template page for individual articles. Renders markdown-like content with headings, lists, code blocks.

The 10 articles (titles):
1. Automation Checklist
2. Tool Inventory
3. Workflow Mapping
4. Intake Forms
5. Permissions Guide
6. Naming Convention Guide
7. Handoff Template
8. Notification Hygiene
9. Weekly Maintenance
10. Digital Safety

### Sub-Agent 3.6: Contact Page

**Notion source:** `1a2d304a29f14b04a45eeb3655fb0a32`

Sections:
1. Hero breadcrumb ("Contact")
2. Two-column: Contact form (left) + Contact info (right)
3. Form fields: Name, Email, Company/Team, Current tools, What to improve, Additional notes
4. What happens next: Reply in 1-2 days, short call if fit, clear next step
5. Contact info: Address (Str. Arnsberg nr. 4, Alba Iulia), Email, Phone icons

### VALIDATION GATE 1

After all Phase 3 agents complete:
1. Run `npm run build` — must succeed with zero errors
2. Run `npm run dev` — navigate to every page, verify rendering
3. Check: dark mode works on every page
4. Check: responsive at 375px, 768px, 1440px
5. Check: all navigation links work
6. Check: no placeholder text remaining (except images)
7. If ANY check fails: fix before proceeding to Phase 4

---

## Phase 4: /brand Sub-Site (PARALLEL SUB-AGENTS)

**Spawn after Phase 3 validation passes.**

### Sub-Agent 4.1: Brand Core Pages (Dashboard + Soul + Voice)

**BrandDashboard.tsx:**
- Overview grid: brand name, tagline, color swatches preview, type preview, quick links to all sections

**BrandSoul.tsx:**
- Mission: "TechSmart Labs ajută IMM-urile non-tech să digitalizeze rapid procesele, prin soluții configurabile și suport clar, iar profitul susține programe concrete de educație și incluziune digitală."
- Vision: Digital inclusion through accessible IT
- Values: Clarity, Utility, Social Responsibility, Partnership
- Brand personality: Calm, competent, approachable, non-intimidating
- Positioning statement from Business Brief

**BrandVoice.tsx:**
- Tone attributes: Clear, calm, pragmatic, direct, empathetic
- Communication pillars: Simple over technical, Honest over impressive, Helpful over promotional
- Writing dos: Short sentences, active voice, explain jargon, use "you"
- Writing don'ts: No buzzwords, no passive aggressive, no excessive exclamation marks
- Tone matrix: How voice adapts across contexts (website vs email vs social vs support)

### Sub-Agent 4.2: Visual System Pages (Logo + Colors + Typography)

**BrandLogo.tsx:**
- Logo placeholder (logo not yet created — render a styled text logo "TechSmart Labs" as interim)
- Clearspace rules (shown with visual guides)
- Minimum size rules
- Usage on dark/light backgrounds
- Misuse examples (stretch, rotate, recolor wrongly)

**BrandColors.tsx:**
- Full palette with hex values, rendered as large swatches
- Primary: Teal #4D9987, Green #27ae60
- Backgrounds: Light #F7F8F4, Light alt #E9EBDF, Dark #0E0E0E
- Text: Primary #151515, Secondary #3F403D
- Accent families: Blue #1B2E44, Deep green #0E352C
- Usage rules per color
- Contrast ratio badges (WCAG AA/AAA)
- Dark mode vs light mode comparison

**BrandTypography.tsx:**
- Type scale specimens: 12px through 72px
- Chivo heading specimens (all weights)
- Noto Sans body specimens (all weights)
- Pairing examples
- Line height and letter spacing rules
- Usage hierarchy: H1-H6, body, caption, button, label

### Sub-Agent 4.3: Asset Library Pages (Photography + Icons + Patterns)

**BrandPhotography.tsx:**
- Style rules from brief-imagini.md: warm, soft light, no faces, abstract/distant
- Color temperature guide
- Composition rules (wide, medium, close-up with focal lengths)
- Do/don't grid with example images (placeholders until Chat 2 provides real ones)
- Camera settings reference

**BrandIcons.tsx:**
- Filterable grid of all icons from `icons/` folder
- Category filters: Empty States, Full Page, Icons, Onboarding, Other, Widgets
- Each icon shown at multiple sizes
- Color customization preview (shows icon in teal, white, dark)
- Download button per icon (or "copy SVG" code snippet)

**BrandPatterns.tsx:**
- Grid of all SVG patterns from `design-foundation/assets/svg-decorative/`
- Each shown on dark and light backgrounds
- Opacity slider to preview different overlay strengths
- Usage guidelines: when to use grid vs dots vs radial glow
- Code snippet for each (CSS background implementation)

### Sub-Agent 4.4: UI & Templates Pages (Components + Social)

**BrandComponents.tsx:**
- Live rendered examples of every shared component:
  - Button (all variants, all sizes, all states)
  - Card (all variants)
  - Tags (all variants)
  - Form inputs
  - Navigation states
  - Section containers with different backgrounds
- Code snippet next to each example

**BrandSocial.tsx:**
- Three template types rendered at actual dimensions:
  - Post template (1080×1080) — rendered in a container
  - Story template (1080×1920) — rendered in a phone-like frame
  - Carousel template (1080×1080 per slide, with slide navigation)
- Each template uses brand colors, typography, patterns
- Editable content areas (text inputs that update the preview live)
- Templates: quote card, service highlight, stat card, team culture, tech tip

### Sub-Agent 4.5: Print & Physical Pages (Stationery + Docs + Print + Merch + Digital)

**BrandStationery.tsx:**
- Business card (front + back, rendered at scale)
- Letterhead (A4 preview)
- Envelope (rendered)
- Email signature (HTML preview)
- All using brand colors, typography, logo placeholder

**BrandDocuments.tsx:**
- Proposal template (cover page + interior page previews)
- Report template (cover + TOC + body)
- Invoice template (header + line items)

**BrandPrint.tsx:**
- Brochure (tri-fold preview)
- Flyer (A5 single-page)
- Poster (vertical, event/announcement style)

**BrandMerchandise.tsx:**
- Mug mockup (rendered with CSS transforms)
- Notebook cover
- Folder
- T-shirt (front logo placement)

**BrandDigital.tsx:**
- Email newsletter template (rendered)
- Web banner sizes: 728×90, 300×250, 160×600
- Social profile images: LinkedIn, Facebook, Instagram (with safe areas)
- Social banner/cover images for each platform

### VALIDATION GATE 2

After all Phase 4 agents complete:
1. Navigate to every /brand page — all must render
2. Dark/light mode works across all /brand pages
3. Sidebar navigation works, all links resolve
4. Icon and pattern grids load correctly
5. Social templates render at correct dimensions
6. Component showcase shows all variants
7. `npm run build` still succeeds
8. If ANY fails: fix before proceeding

---

## Phase 5: Content Population

**Agent:** Single sub-agent (or main if context allows)

5.1. If Notion MCP available: fetch all 9 Notion pages, extract copy, populate `src/data/` files
5.2. If not: use the content already embedded in page components from Phase 3
5.3. Verify no lorem ipsum or placeholder text remains on main site pages
5.4. Populate the 10 resource articles with full content
5.5. Ensure all Romanian diacritics render correctly (ă, â, î, ș, ț)

---

## Phase 6: Brand Research & /brand Content Enhancement

**Agent:** Sub-agent with web search capability

6.1. Research: "comprehensive brand guidelines structure 2025", "best brand books examples", "IT services company brand identity"
6.2. Enhance /brand/soul and /brand/voice with industry best practices
6.3. Add any missing brand guideline sections identified in research
6.4. Ensure the /brand section is comprehensive enough to serve as a complete brand guideline (each page = a presentation section viewable as web slides)

---

## Phase 7: QA & Polish

**Agent:** Main agent

7.1. Full build test: `npm run build`
7.2. Lighthouse audit on key pages (performance, accessibility, SEO)
7.3. Verify all SVG icons render with correct colors
7.4. Verify dark/light mode on every page (main + brand)
7.5. Verify responsive on 375px, 768px, 1440px
7.6. Check for console errors/warnings
7.7. Verify all internal links work
7.8. Test navigation flow: home → services → contact, brand dashboard → all sections
7.9. Output: QA report as markdown file

---

## Context Management Rules

1. **If context exceeds 50%:** Stop spawning new inline work. Delegate remaining tasks to sub-agents.
2. **If a sub-agent returns an error:** Log the error, retry once with a more specific prompt. If second failure, flag for main agent review.
3. **If a file conflict is detected:** The LATER agent yields. Check git status, resolve, then continue.
4. **Sub-agents should be given FOCUSED prompts** — one page or one section at a time, not "build everything."
5. **Each sub-agent prompt must include:** The file paths it should read, the file paths it should write, and the design tokens/component imports it needs.
6. **Never have two agents writing to the same file simultaneously.**

---

## File References Quick Index

| What | Where |
|---|---|
| Design tokens (colors) | `design-foundation/design-tokens/colors.json` |
| Design tokens (typography) | `design-foundation/design-tokens/typography.json` |
| Design tokens (spacing) | `design-foundation/design-tokens/spacing.json` |
| Design tokens (motion) | `design-foundation/design-tokens/motion.json` |
| CSS variables (Retool) | `design-foundation/design-tokens/retool-color-vars.css` + `retool-type-vars.css` |
| Design guidelines | `design-foundation/retool-design-guidelines.md` |
| SVG icons (2000+) | `icons/illustrations_Icons_marketing/` (+ 5 other category folders) |
| SVG patterns | `design-foundation/assets/svg-decorative/` |
| Retool SVGs extracted | `design-foundation/assets/svg/` |
| Screenshot references | `design-foundation/assets/*.png` |
| Image brief | `brief-imagini.md` |
| React component ref | `design-foundation/RetoolComponents.tsx` |
| Working rules | `outputs/RULES.md` |
| Project context | `outputs/PROJECT-CONTEXT.md` |
| Design guide (visual) | `design-foundation/design-guide.html` (22MB, browse don't parse) |

---

## What This Plan Does NOT Cover (handled separately)

1. **Image sourcing from Freepik** — handled in a SEPARATE Cowork chat with Chrome browser. See Notion page "8-Image Sourcing Plan". Images will be downloaded to `src/assets/images/` organized by section. Use placeholder gradient boxes until images arrive.
2. **Brand presentation** — the /brand sub-site IS the presentation. Each page is a slide section. No PPTX. Never.
3. **Notion page creation for social calendar** — can be done here if MCP configured, otherwise Cowork
4. **Logo design** — not in scope, using text logo placeholder

---

## Success Criteria

The project is DONE when:
- [ ] `npm run build` produces error-free static output
- [ ] All 7 main pages render with real content (not placeholders)
- [ ] All 16 /brand pages render with appropriate content
- [ ] Dark/light mode works everywhere
- [ ] Responsive at mobile/tablet/desktop
- [ ] Icons display in brand colors (teal, not Retool blue)
- [ ] SVG patterns appear as subtle background overlays
- [ ] /brand sidebar navigation is functional
- [ ] Social templates render at correct pixel dimensions
- [ ] No console errors in dev mode
