# consiglio.fyi

Personal site of Gabriele Consiglio, served by GitHub Pages at <https://ilmeskio.github.io>. The custom domain (`consiglio.fyi`, via a `CNAME` file) is not wired up yet — see issue #1.

| Path | Page |
|---|---|
| `/` | CV (English) |
| `/it/` | CV (Italian) |
| `/claude-mcp/` | Home page of the `claude-mcp` Google OAuth app |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |

Plain HTML and one stylesheet (`assets/style.css`); no build step. Pushing to `main` publishes the site.

The Google Cloud OAuth consent screen links to `/claude-mcp/`, `/privacy/` and `/terms/`: keep those URLs stable, and update the scope table in `privacy/index.html` whenever the app requests different scopes.

Preview locally:

```sh
python3 -m http.server 8080
```
