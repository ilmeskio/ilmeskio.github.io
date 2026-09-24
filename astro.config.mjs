// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://consiglio.fyi",
  trailingSlash: "always",
  integrations: [
    sitemap({
      // The claude-mcp pages stay reachable by URL but out of the personal site's index.
      filter: (page) => !page.includes("/claude-mcp/"),
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", it: "it" },
      },
    }),
  ],
});
