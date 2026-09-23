# AGENTS.md

Guidance for coding agents working in this repository.

## What this is

Static personal site (CV + pages for the `claude-mcp` Google OAuth app), built with Astro 7 and served by GitHub Pages as a user site at <https://ilmeskio.github.io>. `README.md` has the page map and the commands (`pnpm dev`, `pnpm build`, `pnpm check`). There are no tests: `pnpm check` (type-check) and `pnpm build` are the verification. Node comes from `mise.toml`; run commands through mise (`mise exec -- pnpm …`) if the shell's `node` is not the pinned one.

`astro check` does not support TypeScript 7, which is why `typescript` is pinned to 6.

For Astro, read the vendored copies, not the web and not `node_modules/astro` (which holds only compiled `dist/` and type declarations):

- `vendor/astro/` — `packages/astro/src` of `withastro/astro` at the tag of the installed version.
- `vendor/astro-docs/` — the English docs (`src/content/docs/en` of `withastro/docs`).

Both are squashed git subtrees, excluded from `tsconfig.json`; never edit them by hand. After upgrading `astro`, run `scripts/vendor-sync.sh` (needs a clean working tree) to bring both to the installed version.

## How the pages fit together

- `src/layouts/Base.astro` is the shell of every page: `<head>` (Google Fonts Newsreader + IBM Plex Mono, favicon, canonical URL), the `.wrap > .topbar / main / .footer` skeleton, and two named slots, `nav` (top bar) and `footer`.
- Two page families, each with its own layout on top of `Base`:
  - CV — `CvPage.astro`, used by `src/pages/index.astro` (EN) and `src/pages/it/index.astro` (IT). It renders `src/components/Cv.astro`, which reads everything from `src/data/cv.ts`. Every text there is a `{ en, it }` pair, so both languages change together. A freelance client needs only a name and a role; period and summary render when present.
  - App pages — `AppPage.astro`, used by `claude-mcp/`, `claude-mcp/privacy/`, `claude-mcp/terms/`. It owns the App/Privacy/Terms nav (`aria-current` on the current page), the footer links and the closing Contact section; the page supplies only its body. The CV and the app pages do not link to each other.
- `src/styles/global.css` is the only stylesheet, imported by `Base`. Colors are custom properties on `:root`, redefined under `prefers-color-scheme: dark`; use the tokens rather than literal colors. It includes print rules: the CV has a "Print / PDF" button.
- `astro.config.mjs` sets `site` (used for canonical and `hreflang` URLs) and `trailingSlash: "always"`. When the custom domain `consiglio.fyi` goes live (issue #1), change `site` and add `public/CNAME`.

## Constraints

- The Google Cloud OAuth consent screen will link to `/claude-mcp/`, `/claude-mcp/privacy/` and `/claude-mcp/terms/`. The paths can still change; once the app's release on the consent screen is complete they must stay stable. When the app's requested scopes change, update the scope table in `src/pages/claude-mcp/privacy/index.astro` (and its effective date).
- Deploy runs from `.github/workflows/deploy.yml` on push to `main`; the repository's Pages source must be "GitHub Actions".
