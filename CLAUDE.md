# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static personal site (CV + pages for the `claude-mcp` Google OAuth app), built with Astro 7 and served by GitHub Pages as a user site at <https://ilmeskio.github.io>. `README.md` has the page map and the commands (`pnpm dev`, `pnpm build`, `pnpm check`). There are no tests: `pnpm check` (type-check) and `pnpm build` are the verification. Node comes from `mise.toml`; run commands through mise (`mise exec -- pnpm …`) if the shell's `node` is not the pinned one.

`astro check` does not support TypeScript 7, which is why `typescript` is pinned to 6.

The astro npm package ships only compiled `dist/` and type declarations — no docs and no readable source. For Astro's own documentation or source, go to `withastro/docs` and `withastro/astro` at the tag matching the installed version (`node_modules/astro/package.json`).

## How the pages fit together

- `src/layouts/Base.astro` is the shell of every page: `<head>` (Google Fonts Newsreader + IBM Plex Mono, favicon, canonical URL), the `.wrap > .topbar / main / .footer` skeleton, and two named slots, `nav` (top bar) and `footer`.
- Two page families, each with its own layout on top of `Base`:
  - CV — `CvPage.astro`, used by `src/pages/index.astro` (EN) and `src/pages/it/index.astro` (IT). It renders `src/components/Cv.astro`, which reads everything from `src/data/cv.ts`. Every text there is a `{ en, it }` pair, so both languages change together; a value in `[brackets]` is a placeholder still to fill, and a client card whose summary is a placeholder renders with a dashed border.
  - App pages — `AppPage.astro`, used by `claude-mcp/`, `privacy/`, `terms/`. It owns the App/Privacy/Terms nav (`aria-current` on the current page), the footer links and the closing Contact section; the page supplies only its body.
- `src/styles/global.css` is the only stylesheet, imported by `Base`. Colors are custom properties on `:root`, redefined under `prefers-color-scheme: dark`; use the tokens rather than literal colors. It includes print rules: the CV has a "Print / PDF" button.
- `astro.config.mjs` sets `site` (used for canonical and `hreflang` URLs) and `trailingSlash: "always"`. When the custom domain `consiglio.fyi` goes live (issue #1), change `site` and add `public/CNAME`.

## Content sources

The CV wording follows Gabriele's LinkedIn profile (clearer and shorter); figures such as "1M+ daily users" and "−50% infrastructure costs" come from the "Gabriele Consiglio - Curriculum 2025" Google Doc. Do not invent roles, dates or results: missing facts stay as `[bracketed]` placeholders.

## Constraints

- The Google Cloud OAuth consent screen will link to `/claude-mcp/`, `/privacy/` and `/terms/`. The paths can still change; once the app's release on the consent screen is complete they must stay stable. When the app's requested scopes change, update the scope table in `src/pages/privacy/index.astro` (and its effective date).
- Deploy runs from `.github/workflows/deploy.yml` on push to `main`; the repository's Pages source must be "GitHub Actions".
