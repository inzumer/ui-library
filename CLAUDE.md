# CLAUDE.md

Guidance for Claude Code (and any other AI coding agent) working in this repository.

## Project

`@inzumer/ui-library` monorepo (pnpm workspaces + Turborepo): `packages/ui` (component library), `packages/tokens` (design tokens/theming), plus shared `eslint-config`/`prettier-config`/`tsconfig` packages. See [README.md](./README.md) and [docs/guide](./docs/guide) for conventions on components, hooks, utils, and imports.

Key commands: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm test:coverage` (90% gate), `pnpm build`, `pnpm build-storybook`.

## Commit messages & PR titles

This repo strictly follows [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) for every commit message and pull request title generated or suggested here.

Format: `<type>[optional scope]: <description>`

Allowed types:

| Type       | Use for                                  |
| ---------- | ----------------------------------------- |
| `feat`     | New functionality (semver minor)          |
| `fix`      | Bug fix (semver patch)                    |
| `chore`    | Maintenance, dependencies, routine tasks  |
| `refactor` | Code change with no functional impact     |
| `docs`     | Documentation only                        |
| `test`     | Adding or fixing tests                    |
| `style`    | Formatting/whitespace, no logic change    |
| `perf`     | Performance improvements                  |
| `ci`       | CI configuration                          |
| `build`    | Build system / tooling                    |

Breaking changes: append `!` before the colon (e.g. `feat(api)!: ...`) and/or add a `BREAKING CHANGE:` footer explaining the break.

Scope is optional but encouraged when a change is package- or area-specific, e.g. `feat(ui): ...`, `fix(tokens): ...`, `docs(storybook): ...`.
