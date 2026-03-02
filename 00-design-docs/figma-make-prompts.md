# Figma Make Prompt Templates
## TechSmartLabs — Retool Aesthetic DNA

Copy-paste these prompts into Figma Make's "Ask for changes" input. Each includes exact values from the design tokens.

---

## 1. Hero Section

```
Create a hero section with dark background #0E0E0E. Add a subtle grid overlay: thin lines at rgba(255,255,255,0.03) every 24px, plus thicker lines at rgba(255,255,255,0.06) every 120px. Add a teal radial glow from the top center using rgba(77,153,135,0.12) fading to transparent at 60%.

Center a large heading in DM Sans Light (weight 300) at 72px with letter-spacing -0.04em, line-height 1.05, color #E9EBDF. Below it, body text in Inter Regular at 18px, color rgba(233,235,223,0.6).

Add a small status pill above the heading: rounded-full (9999px radius), background rgba(14,53,44,0.6), border 1px rgba(77,153,135,0.2), with a 6px pulsing teal dot (#4D9987) and 12px Inter Medium text in #C4D7D3.

Include a primary CTA button: background #4D9987, white text, 14px Inter Medium, padding 10px 20px, border-radius 8px.

Fade the bottom edge to #0E0E0E with a gradient overlay.
```

---

## 2. Feature Card Grid (3 columns)

```
Create 3 feature cards in a row with 20px gap. Each card:
- Background: #1A1A1A
- Border: 1px rgba(255,255,255,0.08)
- Border-radius: 14px
- Padding: 24px

Each card contains:
1. Icon container: 40px square, border-radius 14px, background rgba(77,153,135,0.1), border 1px rgba(77,153,135,0.2). Inside: 20px outlined stroke icon at 1.5px weight in #4D9987.
2. Heading: Inter SemiBold (600) at 16px, color #E9EBDF, letter-spacing -0.01em
3. Description: Inter Regular at 14px, color rgba(233,235,223,0.6), line-height 1.5

On hover: border becomes rgba(255,255,255,0.12), add shadow 0px 8px 24px rgba(0,0,0,0.25).

Optional: add a 4px gradient stripe at the top of each card, from #4D9987 to #518DD2.
```

---

## 3. Status Pills & Tags

```
Create a row of status pill badges:
- Shape: rounded-full (9999px radius)
- Structure: 6px colored dot + 12px Inter Medium label
- Padding: 4px 12px

Variants:
- Active: dot #4D9987, text #C4D7D3, bg rgba(14,53,44,0.6), border rgba(77,153,135,0.2)
- In Progress: dot #518DD2, text #A3C4E0, bg rgba(42,90,138,0.3), border rgba(81,141,210,0.2)
- Pending: dot #C8A96E, text #C8A96E, bg rgba(200,169,110,0.1), border rgba(200,169,110,0.2)
- Error: dot #C72844, text #C72844, bg rgba(101,23,34,0.3), border rgba(199,40,68,0.2)

Also create:
- Category tag: rounded-full, bg #242424, 12px Inter Medium, color rgba(233,235,223,0.6)
- Version badge: rounded 8px, bg #242424, 12px JetBrains Mono, color rgba(233,235,223,0.4)
```

---

## 4. Illustration Style

```
Create an illustration in the Retool visual style:
- Isometric perspective with layered geometric shapes
- Use translucent fills at 20-60% opacity
- Borders slightly brighter than fills, same hue
- Background: gradient from #0E352C to #242424
- Overlay a fine grid at rgba(255,255,255,0.03) every 24px

Primary palette: teal #4D9987 and blue #518DD2 for tech elements.
Warm accents: brown #433E38 and gold #C8A96E for organic elements.

Style: geometric precision with handcrafted, cozy feel. Never use fully opaque accent fills. Darkest value is #0E0E0E, not pure black.
```

---

## 5. Navigation Bar

```
Create a sticky navigation bar:
- Height: 56px
- Background: rgba(14,14,14,0.9) with backdrop-blur 12px
- Border-bottom: 1px rgba(255,255,255,0.08)

Left side:
- Logo mark: 20px square, border-radius 4px, background #4D9987
- Brand name: Inter Medium 14px, color #E9EBDF
- Nav links: Inter Regular 14px, color rgba(233,235,223,0.6), active link at full #E9EBDF

Right side:
- "Sign in" text link: Inter Regular 14px, rgba(233,235,223,0.6)
- Primary CTA button: bg #4D9987, white text, 14px Inter Medium, padding 6px 16px, radius 8px
```

---

## 6. Light Mode Section

```
Create a light-mode section with:
- Background: #FAF9F5 (warm cream)
- Text primary: #141414
- Text secondary: rgba(21,21,21,0.6)

Cards:
- Background: #FFFFFF
- Border: 1px rgba(0,0,0,0.08)
- Shadow: 0 1px 2px rgba(0,0,0,0.05)
- Border-radius: 14px
- Padding: 24px

Icon containers: bg rgba(196,215,211,0.4), border-radius 14px, icon stroke #185849.
Accent color: teal #4D9987 for links and highlights.
Tags on light: bg rgba(0,0,0,0.04), text rgba(21,21,21,0.6).

Same typography rules: DM Sans Light for display, Inter Regular for body. Same radii scale.
```

---

## 7. Footer

```
Create a 4-column footer on dark background #0E0E0E:
- Border-top: 1px rgba(255,255,255,0.08)
- Padding: 64px 24px

Column headers: Inter SemiBold 12px, uppercase, letter-spacing 0.08em, color rgba(233,235,223,0.4)
Link items: Inter Regular 14px, color rgba(233,235,223,0.6), vertical spacing 8px

Bottom row: border-top 1px rgba(255,255,255,0.08), padding-top 24px
- Left: copyright text in 12px rgba(233,235,223,0.4)
- Right: social icons in 32px square containers, border-radius 8px, bg #1A1A1A, border rgba(255,255,255,0.08)

Columns: Product, Solutions, Resources, Company
```

---

## 8. Connected Section Flow

```
Create a vertical page flow with sections connected by thin lines:
- Each section has its own background color alternating between #0E0E0E and #151515
- Between sections: a 1px vertical line in rgba(255,255,255,0.12) transitioning to transparent, height 64px, centered horizontally

Section 1 (Hero): #0E0E0E + grid overlay + teal radial glow, rounded-top 20px
Section 2 (Features): #151515, no rounded corners, contains 3-column card grid
Section 3 (CTA): rgba(14,53,44,0.4) background, border 1px rgba(77,153,135,0.1), rounded-bottom 20px

This creates a visually connected page where sections flow into each other rather than appearing as disconnected blocks.
```
