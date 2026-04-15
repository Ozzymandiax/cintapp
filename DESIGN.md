# Design System Document: The Neon Pulse

## 1. Overview & Creative North Star: "The Analog Future"
This design system is built to bridge the gap between 1984 and 2024. The Creative North Star, **"The Analog Future,"** rejects the sterile, flat nature of traditional SaaS layouts in favor of a tactile, high-chroma editorial experience. 

We achieve a "High-End" feel by avoiding the clichés of vaporwave (no pixel art or cheesy statues) and instead focusing on the *physics* of the era: the glow of a vacuum tube, the frosted texture of a cassette case, and the expansive depth of a midnight sky. The layout breaks the grid through **intentional asymmetry**—images should overlap container boundaries, and typography should vary in scale to create a rhythmic, musical flow across the page.

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in the "Midnight" (`#0d0d16`) background, using high-intensity neons as functional signifiers rather than just decoration.

*   **The "No-Line" Rule:** Standard 1px borders are strictly prohibited for sectioning. To separate a feature block from the hero, transition from `surface` to `surface-container-low`. Let the color shifts define the architecture.
*   **Surface Hierarchy & Nesting:** Treat the UI as a stack of semi-translucent materials. 
    *   *Base Layer:* `background` (#0d0d16)
    *   *Section Layer:* `surface-container-low` (#13131c)
    *   *Component Layer:* `surface-container-high` (#1f1f2a)
*   **The "Glass & Gradient" Rule:** Floating elements (like player controls or nav bars) must use glassmorphism. Apply `surface-container-highest` at 40% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** Apply a 3% opacity film grain overlay across the entire site to mimic analog tape hiss. Use a linear gradient from `primary` (#ff7eea) to `primary-container` (#ff5eeb) for CTAs to create a "pulsing" neon effect.

---

## 3. Typography: The Rhythmic Scale
We pair the technical, wide-set look of **Space Grotesk** with the humanist clarity of **Manrope**.

*   **Display (Space Grotesk):** These are your "Lead Singers." Use `display-lg` for hero statements. Tighten the letter-spacing by -2% to give it a modern, aggressive edge.
*   **Headlines (Space Grotesk):** Used for section titles. Use `headline-lg` in all-caps for a subtle "techno" aesthetic.
*   **Body (Manrope):** The "Backing Track." `body-lg` provides a clean, breathable contrast to the loud headlines. Maintain a generous line-height (1.6) to ensure the dark background doesn't fatigue the eyes.
*   **Labels (Manrope):** Use `label-md` with `secondary` (#00eefc) coloring for "Now Playing" or "New Release" tags.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-standard." We use light and transparency to create height.

*   **The Layering Principle:** To lift a card, move from `surface-container` to `surface-bright`. The eye perceives the lighter value as being closer to the light source.
*   **Ambient Glows:** Instead of black shadows, use "Neon Underglows." If a primary button is hovered, apply a shadow: `0px 10px 30px rgba(255, 126, 234, 0.3)`. This mimics the way a neon sign casts light on a dark street.
*   **The Ghost Border:** For input fields, use `outline-variant` (#484751) at 20% opacity. It should be a suggestion of a container, not a cage.
*   **Glassmorphism:** Use `surface-variant` at low opacity for elements that need to feel "lightweight," such as hovering music player widgets.

---

## 5. Components

### Buttons
*   **Primary:** High-gloss. Background: Gradient of `primary` to `primary-dim`. Text: `on_primary_fixed` (Black). Border-radius: `md` (0.375rem).
*   **Secondary:** The "Wireframe." Border: 1.5px of `secondary` (#00eefc). Text: `secondary`. No fill.
*   **Tertiary:** Text only in `on_surface_variant`, transitioning to `primary` on hover.

### Cards & Music Lists
*   **Forbid Dividers:** Never use a horizontal line to separate tracks in a list. Use `surface-container-low` for the odd rows and `surface` for even, or simply use 24px of vertical padding.
*   **Interactive Cards:** Cards should use `surface-container` with a `0.25rem` radius. On hover, the background should shift to `surface-container-highest` and the image should slightly scale (1.05x) to mimic a cassette being pushed into a deck.

### Inputs & Search
*   **Search Bar:** Should be styled as a "Glass" element. Semi-transparent `surface-container-highest` with a `secondary` (#00eefc) glow on focus.

### Custom Component: The "Tape Header"
*   For playlist headers, use a wide, horizontal container with a `secondary` accent line (2px) at the top, referencing the spine of a cassette tape.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. Let an album cover bleed off the right edge of the screen.
*   **Do** use "Neon Accents." A tiny 4px circle of `secondary` next to a "Live" status creates instant vibe.
*   **Do** prioritize high-contrast typography. If the headline isn't hitting hard, make it bigger.

### Don't
*   **Don't** use pure white (#FFFFFF). It kills the late-night atmosphere. Use `on_surface` (#f2effb) for all "white" text.
*   **Don't** use standard Material Design elevations. Avoid heavy, muddy black shadows.
*   **Don't** use sharp 90-degree corners for everything. Use the `md` (0.375rem) radius to keep the "SaaS" side of the aesthetic feeling premium and accessible.
*   **Don't** use more than one "Glow" effect per viewport. If everything glows, nothing is special.