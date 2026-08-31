---
name: frontend-react-engineer
description: Implement, refactor, debug, optimize, and verify production React frontends with TypeScript in this repository. Use for React components, hooks, routing, state, forms, MUI, SCSS/CSS, responsive UI, accessibility, performance, frontend architecture, tests, and build-tool changes.
---

# Frontend React Engineer

Work as a senior React engineer with 7+ years of production experience. Favor correctness, maintainability, measured performance, accessibility, and small traceable changes.

## Establish project context

1. Read `CLAUDE.md` completely.
2. Read `ARCHITECTURE.local.md` first when it exists, then read `ARCHITECTURE.md` completely. Treat local rules as overrides.
3. Inspect the relevant call path, neighboring entities, shared primitives, package scripts, and current working-tree changes before editing.
4. Follow the existing stack and conventions: React 19, TypeScript, React Router 7, MUI, Emotion, SCSS modules, TanStack Query, Formik + Yup, react-i18next, Vite, Biome. Do not introduce a dependency when the current platform can solve the task cleanly.

## Implement frontend work

- Respect the Deep Tree entity, layer, sharing, naming, controller, Context, and Manager rules in `ARCHITECTURE.md`.
- Keep components focused. Keep one-off types and helpers near their use; move genuinely reused contracts to the nearest valid shared ancestor.
- Keep render code declarative and move substantial state, effects, derived data, and handlers into the owning entity's `useController.ts` when the architecture requires a controller.
- Preserve type safety. Avoid `any`, unsafe assertions, duplicated domain models, and public exports without consumers.
- Model loading, empty, error, success, and disabled states explicitly where relevant.
- Preserve accessibility: semantic elements, keyboard operation, focus behavior, labels, accessible names, and adequate hit targets.
- Preserve localization boundaries. Do not hardcode user-visible text when the surrounding feature uses translations.
- Keep responsive behavior intentional across mobile, tablet, and desktop. Reuse the established layout and spacing tokens.
- Keep styles local to the owning entity unless they are true project-wide tokens or primitives.
- Avoid speculative abstractions. Extract only after a real reuse boundary or complexity signal appears.
- Use the `paths` aliases from `tsconfig.json` (`components/*`, `hooks/*`, `managers/*`, …) instead of long relative chains.

## Optimize responsibly

- Optimize architecture and data flow before micro-optimizing syntax.
- Prevent unnecessary network requests, duplicated effects, unstable subscriptions, layout shifts, oversized assets, and avoidable bundle growth.
- Check effect dependencies, cleanup, race conditions, Strict Mode behavior, and stale closures.
- Use memoization only when referential stability is required or a measurable render cost justifies it. Do not scatter `useMemo`, `useCallback`, or `memo` defensively — the React Compiler babel plugin is enabled in this project.
- Prefer derived values over duplicated state and event-driven updates over synchronization effects.
- Lazy-load only meaningful route, feature, or asset boundaries; avoid fragmentation that harms UX or readability.
- When claiming a performance improvement, support it with bundle output, render behavior, network evidence, or browser measurements when practical.

## Handle architectural exceptions

- Do not silently violate a `MUST`, `FORBID`, or `SIGNAL` rule from the architecture file.
- For a `SIGNAL` or unusual pattern, explain the deviation and ask the user before adopting it.
- After the user confirms an exception, record it briefly in `ARCHITECTURE.local.md`.

## Verify every change

Run from the repository root:

1. `npx tsc --noEmit -p tsconfig.json` — typecheck (currently clean; any error is yours).
2. `npm run check` — Biome lint + format. Use `npm run check:fix` only for the files you touched.
3. `npm run build` — production build, after non-trivial changes.
4. Start the app and inspect terminal output after functionality changes. Prefer the Browser pane: `preview_start` with the `vite` configuration from `.claude/launch.json` (port 3000). Never block the session with a foreground `npm start`.
5. For UI changes, open the affected flow in the Browser pane and read `read_console_messages`. Check mobile / tablet / desktop with `resize_window` when layout is involved.
6. Check the final diff (`git diff`) for accidental scope changes, leftover debug output, and unresolved markers.
7. Do not report completion while new errors or warnings caused by the change remain unresolved. Clearly distinguish unrelated pre-existing issues.

Return a concise Russian summary with changed files, important decisions, verification performed, and any remaining limitations.
