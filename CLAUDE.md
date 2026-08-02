# CLAUDE.md

Guidance for Claude Code (and any other AI coding agent) working in this repository.

## Project

`@inzumer/ui-library` monorepo (pnpm workspaces + Turborepo): `packages/ui` (component library), `packages/tokens` (design tokens/theming), plus shared `eslint-config`/`prettier-config`/`tsconfig` packages. See [README.md](./README.md) and [docs](./docs) for conventions on components, hooks, utils, and imports.

Key commands: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm test:coverage` (90% gate), `pnpm build`, `pnpm build-storybook`.

## Commit messages & PR titles

This repo strictly follows [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) for every commit message and pull request title generated or suggested here.

Format: `<type>[optional scope]: <description>`

Allowed types:

| Type       | Use for                                  |
| ---------- | ---------------------------------------- |
| `feat`     | New functionality (semver minor)         |
| `fix`      | Bug fix (semver patch)                   |
| `chore`    | Maintenance, dependencies, routine tasks |
| `refactor` | Code change with no functional impact    |
| `docs`     | Documentation only                       |
| `test`     | Adding or fixing tests                   |
| `style`    | Formatting/whitespace, no logic change   |
| `perf`     | Performance improvements                 |
| `ci`       | CI configuration                         |
| `build`    | Build system / tooling                   |

Breaking changes: append `!` before the colon (e.g. `feat(api)!: ...`) and/or add a `BREAKING CHANGE:` footer explaining the break.

Scope is optional but encouraged when a change is package- or area-specific, e.g. `feat(ui): ...`, `fix(tokens): ...`, `docs(storybook): ...`.

## Releases

Versioning and publishing go through [Changesets](https://github.com/changesets/changesets). Any change to a published package (`@inzumer/ui-library`, `@inzumer/tokens`, or the shared tooling packages) should come with a changeset: run `pnpm changeset` and describe the change.

`.github/workflows/release.yml` runs on every push to `main`:

- If there are unreleased changesets, it opens/updates a "Version Packages" PR that bumps versions and updates CHANGELOGs (`changeset version`).
- When that PR is merged (no changesets left pending), the same workflow publishes the bumped packages to npm (`changeset publish`).

Publishing requires an `NPM_TOKEN` repo secret (an npm automation token) with publish rights for the `@inzumer` scope.
