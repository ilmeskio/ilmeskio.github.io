# consiglio.fyi

Personal site of Gabriele Consiglio, built with [Astro](https://astro.build) and served by GitHub Pages at <https://ilmeskio.github.io>. The custom domain (`consiglio.fyi`, via a `CNAME` file) is not wired up yet — see issue #1.

| Path | Page |
|---|---|
| `/` | CV (English) |
| `/it/` | CV (Italian) |
| `/claude-mcp/` | Home page of the `claude-mcp` Google OAuth app |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |

The CV content lives in `src/data/cv.ts`, with every text in both languages; both CV pages render from it.

## Develop

Node is pinned in `mise.toml`, pnpm in `package.json`.

```sh
pnpm install
pnpm dev        # dev server at http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # serve dist/
pnpm check      # type-check .astro and .ts files
```

## Publish

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages. The repository's Pages source must be set to **GitHub Actions**.

The Google Cloud OAuth consent screen links to `/claude-mcp/`, `/privacy/` and `/terms/`: once the app's release is complete, keep those URLs stable, and update the scope table in `src/pages/privacy/index.astro` whenever the app requests different scopes.
