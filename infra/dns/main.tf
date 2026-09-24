# DNS for consiglio.fyi on Cloudflare.
#
# Every record is DNS only (proxied = false): GitHub Pages issues the HTTPS
# certificate itself and cannot do so behind the Cloudflare proxy.
# ttl = 1 means "Auto".

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

locals {
  zone = "consiglio.fyi"

  # GitHub Pages apex addresses:
  # https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
  github_pages_a    = ["185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153"]
  github_pages_aaaa = ["2606:50c0:8000::153", "2606:50c0:8001::153", "2606:50c0:8002::153", "2606:50c0:8003::153"]
}

# ---------- GitHub Pages ----------

resource "cloudflare_dns_record" "pages_a" {
  for_each = toset(local.github_pages_a)

  zone_id = var.zone_id
  name    = local.zone
  type    = "A"
  content = each.value
  proxied = false
  ttl     = 1
}

resource "cloudflare_dns_record" "pages_aaaa" {
  for_each = toset(local.github_pages_aaaa)

  zone_id = var.zone_id
  name    = local.zone
  type    = "AAAA"
  content = each.value
  proxied = false
  ttl     = 1
}

resource "cloudflare_dns_record" "www" {
  zone_id = var.zone_id
  name    = "www.${local.zone}"
  type    = "CNAME"
  content = "ilmeskio.github.io"
  proxied = false
  ttl     = 1
}
