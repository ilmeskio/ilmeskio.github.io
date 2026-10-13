// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://consiglio.fyi",
  trailingSlash: "always",
  // The app pages lived at the root before they moved under /claude-mcp/.
  redirects: {
    "/privacy/": "/claude-mcp/privacy/",
    "/terms/": "/claude-mcp/terms/",
  },
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
