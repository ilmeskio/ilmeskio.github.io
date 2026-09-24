# Records already in the zone (Fastmail MX and SPF, among others). Read-only:
# the first plan prints their IDs so they can be brought under management with
# `import` blocks, without being recreated.
data "cloudflare_dns_records" "existing" {
  zone_id = var.zone_id
}

output "existing_records" {
  value = [
    for r in data.cloudflare_dns_records.existing.result :
    { id = r.id, type = r.type, name = r.name, content = r.content }
  ]
}
