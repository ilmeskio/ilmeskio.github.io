# Email for consiglio.fyi, hosted by Fastmail.
# These records existed before this stack; the import blocks bring them under
# management unchanged (IDs from the Cloudflare zone).

locals {
  fastmail_mx = {
    in1 = { host = "in1-smtp.messagingengine.com", priority = 10 }
    in2 = { host = "in2-smtp.messagingengine.com", priority = 20 }
  }
  fastmail_dkim = ["fm1", "fm2", "fm3"]

  # Comment set by Cloudflare's Fastmail setup, kept so the import is a no-op.
  fastmail_comment = "fastmail configuration"
}

resource "cloudflare_dns_record" "mx" {
  for_each = local.fastmail_mx

  zone_id  = var.zone_id
  name     = local.zone
  type     = "MX"
  content  = each.value.host
  priority = each.value.priority
  ttl      = 1
  comment  = local.fastmail_comment
}

resource "cloudflare_dns_record" "spf" {
  zone_id = var.zone_id
  name    = local.zone
  type    = "TXT"
  content = "\"v=spf1 include:spf.messagingengine.com ?all\""
  ttl     = 1
  comment = local.fastmail_comment
}

resource "cloudflare_dns_record" "dkim" {
  for_each = toset(local.fastmail_dkim)

  zone_id = var.zone_id
  name    = "${each.value}._domainkey.${local.zone}"
  type    = "CNAME"
  content = "${each.value}.${local.zone}.dkim.fmhosted.com"
  proxied = false
  ttl     = 1
  comment = local.fastmail_comment
}

import {
  to = cloudflare_dns_record.mx["in1"]
  id = "${var.zone_id}/121fbc0a347474379204262517e12341"
}

import {
  to = cloudflare_dns_record.mx["in2"]
  id = "${var.zone_id}/c0e30bc37f70ae9c4c44447dc7589bf3"
}

import {
  to = cloudflare_dns_record.spf
  id = "${var.zone_id}/e779efebf7c3f045d34d6a21d4b21035"
}

import {
  to = cloudflare_dns_record.dkim["fm1"]
  id = "${var.zone_id}/8dc43d587051a8b00346c209c5d0aeb6"
}

import {
  to = cloudflare_dns_record.dkim["fm2"]
  id = "${var.zone_id}/5bd81447f0a066ed48b2b062d7611473"
}

import {
  to = cloudflare_dns_record.dkim["fm3"]
  id = "${var.zone_id}/abb4fc184b9008ef8b52b68a60ad5640"
}
