# Project instructions

MakeMeArt frontend — React 19 + TypeScript + Vite, MUI/Emotion + SCSS, React Router 7, TanStack Query, Formik + Yup, react-i18next, Biome.

`AGENTS.md` is the Codex-side copy of these rules. `CLAUDE.md`, `.claude/agents/`, and `.claude/skills/` are the Claude Code side. Keep both in sync when the rules change.

## Architecture

- `ARCHITECTURE.md` (Deep Tree) is authoritative and managed — never edit it.
- Read `ARCHITECTURE.local.md` first when it exists; local rules override the managed file.
- Never silently violate a `MUST`, `FORBID`, or `SIGNAL` rule. Explain a `SIGNAL` deviation, ask the user, and record confirmed exceptions in `ARCHITECTURE.local.md`.

## Verification

- After implementing or changing functionality, run the app locally and inspect the console output. Use the Browser pane (`preview_start`, `vite` config from `.claude/launch.json`, port 3000) rather than a blocking foreground `npm start`.
- For frontend changes, also inspect the browser console at the relevant responsive sizes when browser tooling is available.
- Relevant checks: `npx tsc --noEmit -p tsconfig.json`, `npm run check` (Biome lint + format), `npm run build`.
- Do not report work as complete while new console errors caused by the change remain unresolved. If an unrelated pre-existing error blocks verification, report it explicitly.

## Local skills

- Project-local skills live in `.claude/skills/`. Read and follow a matching `SKILL.md` before using one.

## Frontend implementation

- When the user asks to implement, refactor, debug, optimize, or visually adjust frontend functionality, delegate the work to the `frontend-developer` agent.
- That agent performs the implementation itself and follows `.claude/skills/frontend-react-engineer/SKILL.md`, `ARCHITECTURE.local.md` when present, and `ARCHITECTURE.md`.

## Code review

- When the user asks for a code review, delegate it to the `reviewer` agent.
- Unless the user names another target, audit the entire project — all tracked source, configuration, scripts, dependencies, tests — plus the current branch diff against `main` for newly introduced risks.
- Review work is read-only. Do not modify files while reviewing unless the user separately asks for fixes.
- Report every actionable defect that still exists in the current working tree, including pre-existing issues and branch regressions. Exclude resolved, removed, historical, and no-longer-reachable issues even if Git history shows them.
- Prioritize by severity with exact `path:line` references, in Russian, formatted as: short assessment, `🔴 Блокирующее`, `🟡 Стоит поправить`, `⚪ Мелочи`, `Вопросы по стратегии` (omit empty sections).
- After the reviewer finishes, save its complete output to `CODE_REVIEW_REPORT.md`, including project scope, configuration audit, reviewed branch, base branch, merge-base commit, the exact reviewer prompt, findings, completed checks, and verification gaps.

## Review fixes

- When the user asks to fix issues from `CODE_REVIEW_REPORT.md`, delegate implementation to the `review-fixer` agent.
- The fixer revalidates every report item against current code before changing it; the report may be stale.
- Fix confirmed blockers and actionable defects. Product-policy, branch-history, dependency-strategy, and architecture-choice calls need explicit user direction.
- Preserve unrelated user changes and keep each edit traceable to a report item.
- Finish with a clean-state audit (full diff, `git diff --check`, `git status` for unmerged paths, conflict-marker search, lockfile consistency) and rerun every relevant validation command.
- Save the complete result to `REVIEW_FIX_REPORT.md`, mapping every report item to `fixed`, `not reproducible`, `skipped`, or `blocked`, with changed files and verification evidence.

## Communication

- Reports and summaries to the user are written in Russian.
