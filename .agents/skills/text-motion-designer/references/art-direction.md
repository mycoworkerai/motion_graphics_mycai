# Art direction

Art direction creates one recognizable visual language for the whole video. It is not a list of effects to apply to every scene.

## Define before animating

- **Intent:** What should the viewer feel or understand?
- **Tone:** Precise, playful, confident, calm, urgent, editorial, cinematic, or another brief-appropriate quality.
- **Palette:** Start with the project tokens in `src/index.css`. Assign roles such as background, primary emphasis, supporting text, and contrast—not arbitrary colors per scene.
- **Typography:** Define headline, supporting, label, and numeric roles using existing font definitions.
- **Geometry:** Choose a consistent shape vocabulary, stroke character, corner treatment, and icon style.
- **Composition:** Establish grid, alignment, spacing, focal point, and safe margins.
- **Motion language:** Define direction, speed, easing character, and how elements enter, transform, and leave.

## Principles

- Use contrast to establish hierarchy.
- Keep backgrounds quiet when the message is the hero.
- Let color communicate grouping, emphasis, or state.
- Use gradients, glows, shadows, blur, and 3D only when they serve a specific concept.
- Keep scenes related through shared type, spacing, shapes, and motion behavior.
- Prefer a small number of intentional visual decisions over a pile of decorative treatments.

## Repository rules

Treat `src/index.css` as the global token source. Do not create a second global palette in scene styles or component files. Composition- or scene-specific styling belongs in `src/styles/` only when it cannot be expressed cleanly through the shared token system.

If a new token is genuinely needed, explain its role and update the existing token system deliberately rather than introducing an isolated competing value.
