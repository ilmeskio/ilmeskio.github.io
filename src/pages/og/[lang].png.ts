// Open Graph image (1200×630) for link previews, one per language, generated at
// build time from the same data as the home: portrait, name, manifesto, domain, email.
import type { APIRoute, GetStaticPaths } from "astro";
import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { profile, type Lang } from "../../data/cv";
import { home } from "../../data/home";

export const getStaticPaths = (() => [{ params: { lang: "en" } }, { params: { lang: "it" } }]) satisfies GetStaticPaths;

const font = (pkg: string, file: string) => readFile(`node_modules/@fontsource/${pkg}/files/${file}`);

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

const ink = "#16181d";
const muted = "#6b7079";
const accent = "#2f4fbf";

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const [garamond, garamondMedium, garamondItalic, mono, photo] = await Promise.all([
    font("eb-garamond", "eb-garamond-latin-400-normal.woff"),
    font("eb-garamond", "eb-garamond-latin-500-normal.woff"),
    font("eb-garamond", "eb-garamond-latin-400-italic.woff"),
    font("ibm-plex-mono", "ibm-plex-mono-latin-400-normal.woff"),
    readFile("public/gabriele-consiglio.jpg"),
  ]);

  const tree = h(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 84px",
      background: "#ffffff",
      borderTop: `12px solid ${accent}`,
      fontFamily: "EB Garamond",
      color: ink,
    },
    [
      h("div", { display: "flex", alignItems: "center", gap: "28px" }, [
        h("img", { width: "112px", height: "112px", borderRadius: "56px", objectFit: "cover" }, undefined, {
          src: `data:image/jpeg;base64,${photo.toString("base64")}`,
          width: 112,
          height: 112,
        }),
        h("div", { display: "flex", flexDirection: "column" }, [
          h("div", { fontSize: "44px", fontWeight: 500 }, profile.name),
          h("div", { fontSize: "30px", fontStyle: "italic", color: muted }, `${profile.headline[lang]} · ${profile.location[lang]}`),
        ]),
      ]),
      h("div", { display: "flex", fontSize: "62px", lineHeight: 1.18, letterSpacing: "-0.01em", maxWidth: "1000px" }, home.manifesto[lang]),
      h("div", { display: "flex", gap: "40px", fontFamily: "IBM Plex Mono", fontSize: "26px", letterSpacing: "0.04em" }, [
        h("div", { color: accent }, "consiglio.fyi"),
        h("div", { color: muted }, profile.email),
      ]),
    ],
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "EB Garamond", data: garamond, weight: 400, style: "normal" },
      { name: "EB Garamond", data: garamondMedium, weight: 500, style: "normal" },
      { name: "EB Garamond", data: garamondItalic, weight: 400, style: "italic" },
      { name: "IBM Plex Mono", data: mono, weight: 400, style: "normal" },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();

  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
