variable "cloudflare_api_token" {
  description = "Cloudflare API token with Zone → DNS → Edit on consiglio.fyi. Set as a sensitive Scalr workspace variable."
  type        = string
  sensitive   = true
}

variable "zone_id" {
  description = "Cloudflare zone ID of consiglio.fyi (Overview page of the zone)."
  type        = string
}
