# consiglio.fyi

Personal site of Gabriele Consiglio, built with [Astro](https://astro.build) and served by GitHub Pages at <https://consiglio.fyi>. The domain's DNS is described in `infra/dns/` (see `docs/dns.md`).

| Path | Page |
|---|---|
| `/`, `/it/` | Home: manifesto and short lists (now, projects, clients, before, contact) |
| `/cv/`, `/it/cv/` | Full CV; prints on one A4 page |
| `/cv/europass/`, `/it/cv/europass/` | The same CV in the Europass layout |
| `/claude-mcp/` | Home page of the `claude-mcp` Google OAuth app |
| `/claude-mcp/privacy/` | Its privacy policy |
| `/claude-mcp/terms/` | Its terms of service |

The `claude-mcp` pages are not linked from the personal pages, and they do not link back to them.

Content lives in `src/data/home.ts` (home) and `src/data/cv.ts` (CV), with every text in both languages.

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

The Google Cloud OAuth consent screen links to `/claude-mcp/`, `/claude-mcp/privacy/` and `/claude-mcp/terms/`: once the app's release is complete, keep those URLs stable, and update the scope table in `src/pages/claude-mcp/privacy/index.astro` whenever the app requests different scopes.
