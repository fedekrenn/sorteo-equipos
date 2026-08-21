# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

React + Vite webapp that randomly assigns football (FIFA-style) club or national teams to players, in three modes: 1vs1, 2vs2 (pairs), and random-teams (no players, just two random squads). Spanish-language UI; commit messages and code identifiers in English (see CONTRIBUTING.md).

## Commands

Package manager is **pnpm** (pinned via `packageManager` field, workspace is single-package).

```bash
pnpm dev       # start Vite dev server
pnpm build     # production build
pnpm preview   # preview production build
pnpm lint      # eslint . --report-unused-disable-directives --max-warnings 0
pnpm test      # vitest (watch mode)
pnpm cloud     # expose local dev server via cloudflared tunnel
```

Run a single test file: `pnpm vitest run src/tests/teams.test.js`
Run a single test by name: `pnpm vitest run -t "Should return an array"`

There is no separate typecheck script — this is a JS (not TS) project; `jsconfig.json` only configures path aliases for editor intellisense.

## Architecture

### Sorting logic is centrally isolated

All raffle/pairing logic lives in `src/services/getTeamData.js` and is pure/stateless — it reads `src/data/teams.json` (the static list of clubs and national teams) and exports three functions, each consumed by exactly one page:

- `getSimpleTeamData(players, includeCountries)` → used by `pages/Single.jsx` (1vs1). Throws if `players.length` exceeds the number of available countries when `includeCountries` is true — this is the one validation rule that lives in the service rather than the form.
- `getPairTeamData(players, includeCountries)` → used by `pages/Pair.jsx` (2vs2). Odd-length player lists leave the last pair with `squad: null` (rendered as "Jugador libre").
- `getTwoRandomTeams(includeCountries)` → used by `pages/RandomTeams.jsx`. No players involved, just two shuffled squads.

Teams in `teams.json` have a `type` of `"club"` or `"country"`; `includeCountries` toggles which subset is drawn from. Shuffling is Fisher-Yates (`randomSort`), and `Math.random` is not seeded — tests only assert shape/invariants, never exact output.

### Page ↔ shared-component split

Each mode page (`src/pages/Single.jsx`, `Pair.jsx`, `RandomTeams.jsx`) is a thin wrapper: it holds the `matches` result in state, renders `SortSection` for layout, `DataForm` for input, and maps results into `ResultCard`/`ResultsGrid`. `DataForm` is generic — it takes a `matchFunction` prop (one of the three service functions above) and does not know which mode it's in. This is the pattern to follow when adding a new mode: write a service function, then a thin page that wires it into `DataForm`.

`DataForm` also owns all client-side validation (empty names, min length 3, duplicate names) and UX side effects (confetti via `canvas-confetti`, toast via `sonner`, a 5s cooldown on re-submitting, scroll-to-results, focus management for the first invalid field).

### Routing and SEO

`react-router` (v8, note: package is `react-router`, not `react-router-dom`) defines routes in `App.jsx` with lazy-loaded pages. `RouteMeta.jsx` is a headless component that runs on every route change to imperatively set `document.title`, meta description/robots/OG/Twitter tags, and canonical URL from a `ROUTE_META` lookup table — update that table when adding or renaming a route. It also moves focus to `#main-content` on navigation for accessibility.

### UI components

`src/components/ui/*` are shadcn-generated primitives (style `radix-nova`, Tailwind v4, no RSC/TSX) — configured via `components.json`. These are excluded from linting (`eslint.config.js` ignores `src/components/ui/**` and `src/lib/utils.js`) and should be treated as vendored; prefer regenerating via the shadcn CLI over hand-editing. Feature-level components live directly under `src/components/`.

### Path aliases

`@`, `@components`, `@pages`, `@assets`, `@services` are defined in both `vite.config.js` and `jsconfig.json` — update both if adding a new alias.

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin (no separate tailwind.config file — config is CSS-based in `src/index.css`).
