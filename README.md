# Mycai Motion Graphics

A production foundation for creating text-led motion graphics with Remotion.

This repository is the **execution environment and visual foundation**: reusable motion components, scenes, design tokens, composition registration, and rendering workflows. Creative direction lives in the **Text Motion Designer** skill, which guides an AI agent from brief to storyboard, art direction, animation decisions, and review.

The goal is deliberate, editable motion graphics built primarily from typography, shapes, color, and vector icons — not a dependency on generated footage or expensive external media services.

## Stack

- Remotion 4
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui patterns
- Lucide React
- Design tokens in `src/index.css`

## Getting started

```bash
npm install
npm run dev
```

Render a registered composition:

```bash
npx remotion render <composition-id> out/video.mp4
```

Run checks:

```bash
npm run lint
npm run build
```

## Repository structure

```text
.agents/skills/text-motion-designer/  Creative direction skill and references
.claude/skills/                       Claude skill entry point
docs/                                 Architecture and agent workflow
src/
  compositions/                       Composition registration
  components/motion/                  Reusable motion primitives
  scenes/                             Video scenes
  lib/                                Shared utilities
  styles/                             Composition-specific styling
  index.css                           Global design tokens
  Root.tsx                            Remotion root
```

## Creative workflow

1. Interpret the brief and identify audience, message, and intended feeling.
2. Build a concise narrative and storyboard.
3. Define visual direction, typography, palette, composition, and motion language.
4. Implement scenes with reusable Remotion components.
5. Preview, review pacing and legibility, then refine.
6. Register the final composition and render.

See [docs/architecture.md](docs/architecture.md), [docs/agent-workflow.md](docs/agent-workflow.md), and the [Text Motion Designer skill](.agents/skills/text-motion-designer/SKILL.md).

## Design system

The current design tokens live in `src/index.css`. Treat them as the source of truth. Extend the system deliberately; do not replace or normalize the existing palette as part of unrelated motion work.

## Principles

- Typography and vector shapes are first-class visual assets.
- Prefer native Remotion animation and deterministic rendering.
- Build reusable primitives before one-off effects.
- Keep scenes modular and compositions explicit.
- Avoid visual noise, gratuitous effects, and generic "AI-looking" decoration.
- Keep creative intent separate from implementation details.

## License

UNLICENSED. All rights reserved.
