terraform {
  required_version = ">= 1.12"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.25"
    }
  }

  # State lives in Scalr (workspace consiglio-fyi). Runs are VCS-driven:
  # plan on every pull request touching infra/dns, apply after merge to main.
  # A local `tofu plan` also runs on Scalr, after `tofu login ilmeskio.scalr.io`.
  backend "remote" {
    hostname     = "ilmeskio.scalr.io"
    organization = "env-v0pe3dh26jlaehv0c"

    workspaces {
      name = "consiglio-fyi"
    }
  }
}
