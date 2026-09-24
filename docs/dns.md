# DNS for consiglio.fyi

The zone `consiglio.fyi` is hosted on Cloudflare and described with OpenTofu in `infra/dns/`. The state lives in Scalr, workspace `consiglio-fyi-dns` of the environment `env-v0pe3dh26jlaehv0c` on `ilmeskio.scalr.io`.

## What the zone contains

| Record | Points to | Purpose |
|---|---|---|
| `consiglio.fyi` A ×4, AAAA ×4 | GitHub Pages addresses | The site |
| `www` CNAME | `ilmeskio.github.io` | The site, `www` variant |
| MX, SPF TXT | Fastmail | Email |

Every record is **DNS only**: GitHub Pages issues the HTTPS certificate itself and cannot do it behind the Cloudflare proxy.

The Fastmail records exist in the zone and are not yet in the code. The `existing_records` output of a plan lists them with their IDs, to bring them under management with `import` blocks.

## How a change is applied

1. Edit `infra/dns/*.tf` on a branch and open a pull request.
2. Scalr runs `tofu plan` and posts the result on the pull request.
3. After the merge to `main`, the apply is confirmed in Scalr.

For a plan from the terminal: `tofu login ilmeskio.scalr.io` once, then `tofu init` and `tofu plan` in `infra/dns/`. The plan runs on Scalr with the workspace variables.

## Workspace variables (in Scalr)

| Variable | Kind | Content |
|---|---|---|
| `cloudflare_api_token` | Terraform, sensitive | Token with Zone → DNS → Edit, limited to `consiglio.fyi` |
| `zone_id` | Terraform | Zone ID from the Cloudflare Overview page |

The provider lock file covers `linux_amd64` (Scalr) and `darwin_arm64`. After a provider upgrade, refresh it with `tofu providers lock -platform=linux_amd64 -platform=darwin_arm64`.
