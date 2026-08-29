# Agent instructions

## Verification

- After implementing or changing functionality, always run the application locally and inspect the console output.
- For frontend changes, also inspect the browser console when browser tooling is available.
- Run the relevant typecheck, lint, tests, and build checks when applicable.
- Do not report the work as complete while new console errors caused by the change remain unresolved. If an unrelated pre-existing error blocks verification, report it explicitly.

## Local skills

- Project-local skills are available in `.codex/skills/`.
- Read and follow a matching `SKILL.md` before using a local skill.

## Frontend implementation

- When the user asks to implement, refactor, debug, optimize, or visually adjust frontend functionality, delegate the work to the project-scoped `frontend_developer` agent.
- The `frontend_developer` agent must perform the implementation itself and follow `.codex/skills/frontend-react-engineer/SKILL.md`, `ARCHITECTURE.local.md` when present, and `ARCHITECTURE.md`.

## Code review

- When the user asks for a code review, delegate the review to the project-scoped `reviewer` agent.
- Unless the user specifies another target, audit the entire project: all tracked source files, configuration, scripts, dependencies, and tests. Also inspect the current branch diff against `main` to identify newly introduced risks.
- Keep review work read-only. Do not modify files while reviewing unless the user separately asks for fixes.
- Review the complete project and report every actionable defect, including pre-existing issues and branch regressions, not only the first finding.
- Report only defects that still exist in the current working project. Exclude resolved, removed, historical, diff-only, and no-longer-reachable issues even if they appear in Git history.
- Check type safety, duplicated implementations, redundant branches, unreachable code, and unnecessary logic.
- Check security, performance, API contracts, test coverage, architecture boundaries, dependencies, accessibility, localization, build configuration, backward compatibility, and unrelated scope changes.
- Always inspect `package.json`, the active lockfile, TypeScript/Vite/Biome/ESLint configuration, Git and Husky hooks, environment examples, Docker files, CI workflows, aliases, and every other tracked project configuration. Verify that scripts, dependencies, package-manager metadata, and tool settings agree with each other.
- For React and MUI changes, inspect hook dependencies, unnecessary renders, state and effect usage, theme overrides, component contracts, and accessible interaction.
- Prioritize findings by severity and include exact file and line references.
- Before reporting a finding, confirm it against the current file contents and a current reachable call path, active configuration, or intentionally exported foundational API that future features are expected to use.
- Require the reviewer to return its complete report in Russian.
- Format the user-facing review as: short branch/project assessment, `🔴 Блокирующее`, `🟡 Стоит поправить`, `⚪ Мелочи`, and `Вопросы по стратегии`. Omit empty sections.
- For new repositories and scaffolds, assess whether the foundation is ready for feature work: client-side secrets, lint strictness, form primitives, provider wiring, formatting enforcement, documentation/code alignment, dependency maturity, package metadata, README quality, and branch topology.
- After the reviewer finishes, save its complete output to `CODE_REVIEW_REPORT.md`. Include the project scope, configuration audit, reviewed branch, base branch, merge-base commit, exact reviewer prompt, findings, completed checks, and verification gaps.

## Review fixes

- When the user asks to fix issues from `CODE_REVIEW_REPORT.md`, delegate implementation to the project-scoped `review_fixer` agent.
- The fixer must reread the current code and validate every report item before changing it; the report may be stale.
- Fix confirmed blockers and actionable defects. Do not make product-policy, branch-history, dependency-strategy, or architecture-choice decisions without explicit user direction.
- Preserve unrelated user changes and keep each edit traceable to a report item.
- After implementation, run the relevant typecheck, lint, format check, tests, build, application, and browser-console checks when available.
- After all fixes, perform a final clean-state audit: inspect the complete diff, run `git diff --check`, check `git status` for unmerged paths, search changed files for conflict markers, verify dependency and lockfile consistency, and rerun every relevant validation command.
- Do not report the fix task as complete while current errors, warnings, merge conflicts, conflict markers, broken scripts, dependency mismatches, terminal errors, or browser-console issues caused by the changes remain unresolved.
- Save the complete implementation result to `REVIEW_FIX_REPORT.md`, mapping every item from `CODE_REVIEW_REPORT.md` to `fixed`, `not reproducible`, `skipped`, or `blocked`, with changed files and verification evidence.
