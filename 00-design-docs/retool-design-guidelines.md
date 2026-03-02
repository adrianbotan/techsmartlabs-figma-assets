# Retool Design Foundation & Guidelines

This document captures the core design principles, typography, color palette, and component structures used on the Retool platform, providing a robust, premium foundation for your software service startup.

## 1. Global Design Tokens

### 1.1 Typography

Retool uses a functional, modern, and highly legible typography stack tailored for software and data-heavy interfaces.

- **Primary Font**: `Saans` (var(--font-saans)), extending to `sans-serif`. Used for main body text, navigation, and standard headings.
- **Secondary / Accent Font**: `Px Grotesk` (var(--font-px-grotesk)). Used for accent text, mono-style numbers, and specific stylistic headings.
- **System Fallback**: `ui-sans-serif, system-ui, sans-serif`. Used appropriately when the primary brand font may fail or when falling back to native styling.
- **Monospace Tooling**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`. Strictly used for code blocks and IDE-like elements.

### 1.2 Color Palette

Retool employs a sophisticated palette with high-contrast text ratios for legibility, using subtle off-whites for backgrounds to reduce eye strain, paired with distinct accent colors.

#### Backgrounds & Neutrals

- **Primary Background**: `#F7F8F4` (Warm, very light gray/off-white)
- **Secondary Background**: `#E9EBDF` (Slightly darker, used for subtle card outlines or alternate stripes)
- **Tertiary / Highlight**: `#CBCCC4` / `#B6B8AF` (Used for borders, dividers, disabled states)

#### Text & Foreground Elements

- **Primary Text**: `#151515` (Almost black charcoal, ensuring 100% legibility without the harshness of pure black).
- **Secondary Text**: `#3F403D` / `#2E2F2D` (Softer grays for sub-headers and descriptions).

#### Primary Accents (Blues & Greens)

Retool uses deep blues and structural greens to signify active states, links, and primary actions.

- **Dark Blue**: `#1B2E44` (Deep brand blue, often used for dark mode headers or massive bold Call-To-Actions).
- **Mid Blue**: `#2D4C71` / `#518DD2` (Used for vibrant accents, inline links, active navigation pills).
- **Dark Green**: `#0E352C` / `#185849` (Often paired with success states or unique marketing sections).

### 1.3 Layout & Spacing

- **Generous Whitespace**: The layout uses a lot of breathing room between sections (often 80px+ vertical spacing) to maintain a premium, high-tech feel.
- **Container Padding**: Internal cards and UI blocks have consistent padding (typically `24px` to `48px`), creating a clear hierarchy.

## 2. Component Structures

### 2.1 Buttons

- **Shape**: Primary CTAs are almost exclusively **pill-shaped** (fully rounded ends/`rounded-full`), providing a soft, approachable contrast to the technical content.
- **Interactions**: Buttons change states with subtle color shifts (darkening/lightening) and a slight scale-down on click to provide tactile feedback.

### 2.2 Forms and Inputs

- **Inputs**: Forms use clean, outlined or light-shaded input fields with distinct labels sitting above the field. Input fields have a smaller corner radius (`8px` or `rounded-md`).
- **Alignment**: Standard vertical stacking with clear, legible text.

### 2.3 Containers, Cards & Shadows

- **Rounding**: Most functional cards (like the database table or code editor) use **moderate rounding** (approximately `12px` to `16px` corner radius or `rounded-xl`).
- **Shadows**: Shadows are used sparingly and are very **soft and diffuse** (`shadow-sm` or `shadow-md` blur). They are primarily used to "lift" floating cards or modals over the background rather than creating sharp divisions.
- **Layering**: Depth is created through subtle background color shifts (darker grays vs. lighter slate) rather than heavy gradients.

## 3. Page Structure Patterns

- **Hero Section**: Features a dark theme with large, clean typography. Often paired with an interactive or animated component (e.g., an AI prompt interface) to draw immediate attention.
- **Feature Sections (`/database`)**: Showcases dense but readable data grids UI with status tags and search functionality. Uses a functional light-gray background.
- **Monitoring/Dashboards (`/agents`)**: Highlights unique data visualization components, token usage graphs, and cost tracking with vibrant accents on neutral backgrounds.

## 4. Visual Assets Reference

All captured imagery modeling Retool's functionality has been downloaded to `assets/` in this directory:

- [Hero Section Main](/Users/adrianbotan/Design/7 Site-uri/8-TechSmartLabs/design-foundation/assets/hero_section_1772380082881.png)
- [Primary CTA Button](/Users/adrianbotan/Design/7 Site-uri/8-TechSmartLabs/design-foundation/assets/primary_button_1772380084166.png)
- [Feature Card Focus](/Users/adrianbotan/Design/7 Site-uri/8-TechSmartLabs/design-foundation/assets/feature_card_1772380085171.png)
- [Data Table UI Example](/Users/adrianbotan/Design/7 Site-uri/8-TechSmartLabs/design-foundation/assets/data_table_ui_1772380094463.png)
- [Agents / Dashboard UI](/Users/adrianbotan/Design/7 Site-uri/8-TechSmartLabs/design-foundation/assets/agents_ui_1772380095818.png)
- [Standard Form UI](/Users/adrianbotan/Design/7 Site-uri/8-TechSmartLabs/design-foundation/assets/form_ui_1772380041449.png)
