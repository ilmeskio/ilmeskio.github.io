#!/usr/bin/env bash
# Vendor the Astro source and the English Astro docs as squashed git subtrees,
# so agents can read the code and docs of the version the site runs on.
#
#   scripts/vendor-sync.sh            # version from node_modules/astro
#   scripts/vendor-sync.sh 7.4.0      # explicit version
#
# vendor/astro       withastro/astro  packages/astro/src   at tag astro@<version>
# vendor/astro-docs  withastro/docs   src/content/docs/en  at main (docs have no version tags)
#
# Each run fetches one commit per repo (depth 1), splits the wanted folder out of
# it, and adds it with `git subtree add` the first time, `git subtree merge` after.
set -euo pipefail

root="$(git rev-parse --show-toplevel)"
version="${1:-$(node -p "JSON.parse(require('fs').readFileSync('$root/node_modules/astro/package.json')).version")}"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

vendor() {
  local repo=$1 ref=$2 src=$3 dest=$4
  local clone="$tmp/${dest//\//_}"
  git -c advice.detachedHead=false clone -q --depth 1 --branch "$ref" --filter=blob:none --sparse "https://github.com/$repo.git" "$clone"
  git -C "$clone" sparse-checkout set "$src"
  local sha split
  sha=$(git -C "$clone" rev-parse --short HEAD)
  split=$(git -C "$clone" subtree split -q --prefix="$src")
  git -C "$root" fetch -q "$clone" "$split"
  local verb=add
  [ -d "$root/$dest" ] && verb=merge
  git -C "$root" subtree "$verb" -q --prefix="$dest" --squash \
    -m "Vendor $repo $src at $ref ($sha)" FETCH_HEAD
  echo "$dest <- $repo $src @ $ref ($sha)"
}

vendor withastro/astro "astro@$version" packages/astro/src vendor/astro
vendor withastro/docs main src/content/docs/en vendor/astro-docs
