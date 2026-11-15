# Agent instructions

## Project purpose
Build polished, text-led motion graphics with Remotion. Prefer typography, vector shapes, gradients, and Lucide icons over generated footage or external media dependencies.

## Before changing code
- Read `README.md` and the relevant architecture/workflow docs.
- Read `src/index.css` before choosing colors, typography, radii, or shadows.
- Preserve existing design tokens. Do not rewrite the design system unless explicitly asked.
- Use the Text Motion Designer skill for creative decisions and the Remotion documentation/skill for implementation details.

## Implementation rules
- Use deterministic Remotion APIs; animation must be driven by frame/time, not CSS transitions or browser timers.
- Keep scenes, reusable motion components, and composition registration separate.
- Prefer small reusable components with explicit props.
- Use Lucide React for interface-style vector icons where appropriate.
- Keep TypeScript types explicit and avoid unnecessary dependencies.
- Do not add stock/generated images or video unless the brief explicitly requires them.

## Quality gate
Check composition dimensions, frame rate, duration, timing, text legibility, safe margins, contrast, and transitions. Run `npm run lint` and `npm run build` when possible. Never claim checks passed unless they were actually run.
