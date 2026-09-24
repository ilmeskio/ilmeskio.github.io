// Home page content: short lists, one line per item, each text in both languages.
// The full detail behind each line lives in cv.ts and is shown on /cv/.

import { t, type Text } from "./cv";

export interface Item {
  name: string;
  /** Kept in the data but not shown. */
  hidden?: boolean;
  url?: string;
  note: Text;
  when?: Text;
}

export const home = {
  manifesto: t(
    "I get product, design, engineering and AI agents working together. Fast, without losing quality.",
    "Faccio lavorare insieme prodotto, design, sviluppo e agenti AI. Veloce, senza perdere qualità.",
  ),

  now: [
    {
      name: "WAI",
      note: t("Rewriting an association's intranet, with Lunette starter", "Riscrittura dell'intranet di un'associazione, con Lunette starter"),
      when: t("since 2026", "dal 2026"),
    },
    {
      name: "Discentis",
      note: t("CTO of an international community of teachers", "CTO di una community internazionale di insegnanti"),
      when: t("since 2025", "dal 2025"),
    },
    {
      name: "Lunette",
      url: "https://github.com/LunetteOrg",
      note: t(
        "A study of how development and configuration practices help the whole team work with AI",
        "Uno studio su come pratiche di sviluppo e configurazione aiutano tutto il team a lavorare con l'AI",
      ),
    },
  ] satisfies Item[],

  clients: [
    {
      name: "Foorban",
      note: t("Rule-based pricing and a fleet cockpit for smart lockers", "Listino a regole e cockpit per una flotta di smart locker"),
      when: t("2025–2026", "2025–2026"),
    },
    {
      name: "Tomura",
      hidden: true,
      note: t("Product and architecture for a conversational-BI prototype", "Prodotto e architettura per un prototipo di BI conversazionale"),
      when: t("2026", "2026"),
    },
    {
      name: "E-One",
      note: t("New features in a legacy CRM, without regressions", "Nuove funzionalità in un CRM legacy, senza regressioni"),
      when: t("2025", "2025"),
    },
  ] satisfies Item[],

  before: [
    {
      name: "WeSchool",
      note: t("CTO, then product manager · 1M daily users", "CTO, poi product manager · 1M utenti al giorno"),
      when: t("2016–2023", "2016–2023"),
    },
    {
      name: "UNGUESS",
      note: t("Product manager", "Product manager"),
      when: t("2023–2024", "2023–2024"),
    },
    {
      name: "TOP-IX",
      note: t("Software developer", "Sviluppatore software"),
      when: t("2013–2016", "2013–2016"),
    },
  ] satisfies Item[],

  labels: {
    now: t("Now", "Adesso"),
    clients: t("Clients", "Clienti"),
    before: t("Before", "Prima"),
    contact: t("Contact", "Contatti"),
    cv: t("Full CV", "CV completo"),
  },
};
