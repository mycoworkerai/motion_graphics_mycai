# Architecture

## Responsibility boundaries

- **Text Motion Designer skill:** brief interpretation, narrative, script, storyboard, art direction, motion intent, and creative review.
- **Remotion application:** deterministic frame-based rendering, React scene composition, reusable animation primitives, and output generation.
- **Design system:** global visual tokens in `src/index.css`.

## Source layout

- `src/Root.tsx`: Remotion root entry point.
- `src/compositions/`: composition registration and exports.
- `src/scenes/`: narrative scenes assembled into compositions.
- `src/components/motion/`: reusable animation primitives and visual behaviors.
- `src/lib/`: shared non-visual helpers.
- `src/styles/`: scene-specific styles when global tokens are insufficient.

## Composition lifecycle

A finished video is assembled from scenes, registered as a Remotion `Composition`, and rendered by the Remotion CLI. Keep composition metadata (id, dimensions, fps, duration) explicit and aligned with the storyboard.

## Design system

`src/index.css` is the source of truth for color, typography, radius, and shared styling tokens. Components should consume these tokens instead of hardcoding a parallel palette. Do not modify the token file casually.
