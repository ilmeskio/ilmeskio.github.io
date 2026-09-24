// CV content, one entry per fact, each text in both languages.
// Where each part comes from: docs/cv-sources.md.
// Optional fields (a client's period or summary) are left out until the facts are known.

export type Lang = "en" | "it";
export type Text = Record<Lang, string>;

export interface Role {
  title: Text;
  period: Text;
  place?: Text;
  highlights: Text[];
}

export interface Client {
  name: string;
  url?: string;
  role: Text;
  period?: Text;
  summary?: Text;
}

export interface Job {
  company: string;
  url?: string;
  about?: Text;
  roles: Role[];
  clients?: Client[];
}

const t = (en: string, it: string): Text => ({ en, it });

export const profile = {
  name: "Gabriele Consiglio",
  headline: t("Freelance product engineer", "Product engineer freelance"),
  location: t("Milan, Italy", "Milano"),
  summary: t(
    "I'm a product engineer: a former CTO and product manager who has been building web applications for more than ten years. I bring AI into teams as a shared tool: product, design and engineering work in the same flow, together with the agents the team coordinates. A shared language and clear practices let the team move fast without losing quality, with each person working where they are strongest and everyone aligned with the business goals. I'm gathering this way of working in Lunette, my open-source project.",
    "Sono un product engineer: ex CTO e product manager, costruisco applicazioni web da più di dieci anni. Porto l'AI nei team come strumento condiviso: prodotto, design e sviluppo lavorano nello stesso flusso, insieme agli agenti che il team coordina. Un linguaggio comune e pratiche chiare permettono al team di andare veloce senza perdere qualità, con ognuno dove rende meglio e tutti allineati agli obiettivi di business. Sto raccogliendo questo modo di lavorare in Lunette, il mio progetto open source.",
  ),
  email: "gabriele@consiglio.fyi",
  github: "ilmeskio",
  linkedin: "gabrieleconsiglio",
};

export const photo = {
  src: "/gabriele-consiglio.jpg",
  alt: t("Portrait of Gabriele Consiglio", "Ritratto di Gabriele Consiglio"),
};

/** The band under the hero: years of experience, then what I work with and how. */
export const years = { value: "10+", label: t("years shipping web software", "anni di software web in produzione") };

export const highlights: { label: Text; items: Text[] }[] = [
  {
    label: t("Favourite stack", "Stack preferito"),
    items: [t("TypeScript", "TypeScript"), t("Effect", "Effect")],
  },
  {
    label: t("Quality", "Qualità"),
    items: [
      t("CI on every change", "CI su ogni modifica"),
      t("Unit, e2e and visual tests", "Test unitari, e2e e visuali"),
      t("Product analytics", "Analisi di prodotto"),
    ],
  },
  {
    label: t("Method", "Metodo"),
    items: [
      t("Agentic development", "Sviluppo agentico"),
      t("Domain-Driven Design", "Domain-Driven Design"),
      t("Product discovery", "Product discovery"),
      t("Agile / Kanban", "Agile / Kanban"),
      t("Lean, mobile-first", "Lean, mobile-first"),
    ],
  },
];

export const experience: Job[] = [
  {
    company: "Freelance",
    roles: [
      {
        title: t("Software Developer & Consultant", "Sviluppatore software e consulente"),
        period: t("Jan 2025 – present", "gen 2025 – oggi"),
        place: t("Hybrid", "Ibrido"),
        highlights: [
          t(
            "Strategic consultation: deciding with the client what to build, so each project fits the business goals and the company's stage and reduces technology risk.",
            "Consulenza strategica: decido con il cliente cosa sviluppare, perché ogni progetto sia allineato agli obiettivi e alla fase dell'azienda e riduca il rischio tecnologico.",
          ),
          t(
            "Hands-on development from concept to deployment.",
            "Sviluppo in prima persona, dall'idea al rilascio.",
          ),
        ],
      },
    ],
    clients: [
      {
        name: "WAI",
        role: t("Product Engineer", "Product Engineer"),
        period: t("Mar 2026 – present", "mar 2026 – oggi"),
        summary: t(
          "Rewrite of an association's legacy PHP intranet as a TypeScript monorepo, on the Lunette starter and agentic workflow: encrypted personal data, member area, design system with visual tests, headless CMS.",
          "Riscrittura dell'intranet PHP di un'associazione in un monorepo TypeScript, sullo starter e sul flusso agentico di Lunette: dati personali cifrati, area soci, design system con test visuali, CMS headless.",
        ),
      },
      {
        name: "Discentis",
        role: t("Product Engineer", "Product Engineer"),
        period: t("Feb 2025 – present", "feb 2025 – oggi"),
        summary: t(
          "Sole engineer of an international community of teachers. From a first platform (OAuth accounts, self-hosted Moodle, GCP infrastructure as code) to a TypeScript monorepo with forum, resources, events and posts translated automatically into four languages. Built with the Lunette agentic workflow.",
          "Unico ingegnere di una community internazionale di insegnanti. Da una prima piattaforma (account OAuth, Moodle self-hosted, infrastruttura GCP as code) a un monorepo TypeScript con forum, risorse, eventi e post tradotti automaticamente in quattro lingue. Sviluppata con il flusso agentico di Lunette.",
        ),
      },
      {
        name: "Foorban",
        role: t("Product Engineer", "Product Engineer"),
        period: t("Dec 2025 – Jul 2026", "dic 2025 – lug 2026"),
        summary: t(
          "Vending and smart-locker operator. Built rule-based pricing and the fleet cockpit with automatic stock transfers (NestJS, React Admin), and introduced CI, database and e2e tests, and Claude Code agent workflows.",
          "Operatore di vending e smart locker. Ho costruito il listino prezzi a regole e il cockpit della flotta con i trasferimenti automatici di stock (NestJS, React Admin), e introdotto CI, test su database ed e2e e i flussi di lavoro con agenti Claude Code.",
        ),
      },
      {
        name: "Tomura",
        role: t("Product Engineer", "Product Engineer"),
        period: t("Jun 2026", "giu 2026"),
        summary: t(
          "Product and architecture analysis of an inherited conversational-BI prototype (Airbyte, DuckDB, dbt, WrenAI), run with Claude Code agents: vision, positioning, and ADRs for a provider-agnostic agent layer and a schema-mapping agent.",
          "Analisi di prodotto e architettura di un prototipo ereditato di BI conversazionale (Airbyte, DuckDB, dbt, WrenAI), condotta con agenti Claude Code: visione, posizionamento e ADR per un livello di agenti indipendente dal provider e un agente di mappatura degli schemi.",
        ),
      },
      {
        name: "E-One",
        role: t("Software Engineer", "Software Engineer"),
        period: t("Jan – Mar 2025", "gen – mar 2025"),
        summary: t(
          "New behaviour in a legacy CRM (PHP 5.6, Symfony 2.3) through targeted refactoring and tests, without breaking changes.",
          "Nuove funzionalità in un CRM legacy (PHP 5.6, Symfony 2.3) con refactoring mirato e test, senza introdurre regressioni.",
        ),
      },
    ],
  },
  {
    company: "UNGUESS",
    roles: [
      {
        title: t("Product Manager", "Product Manager"),
        period: t("Sep 2023 – Apr 2024", "set 2023 – apr 2024"),
        place: t("Milan · Hybrid", "Milano · Ibrido"),
        highlights: [
          t(
            "Defined the internal product strategy to raise margins, aligning KPIs and roadmap with the executive goals.",
            "Ho definito la strategia di prodotto interna per aumentare i margini, allineando KPI e roadmap agli obiettivi del management.",
          ),
        ],
      },
    ],
  },
  {
    company: "WeSchool",
    about: t(
      "Italian EdTech company with a free LMS for K-12 schools.",
      "EdTech italiana con un LMS gratuito per le scuole.",
    ),
    roles: [
      {
        title: t("Product Manager", "Product Manager"),
        period: t("Apr 2021 – Sep 2023", "apr 2021 – set 2023"),
        place: t("Milan · Hybrid", "Milano · Ibrido"),
        highlights: [
          t(
            "Created the product function and grew it into several cross-functional teams.",
            "Ho creato la funzione di prodotto e l'ho fatta crescere fino a più team cross-funzionali.",
          ),
          t(
            "Launched the B2B SaaS revenue stream through a complete redesign of the product's structure and visual hierarchy.",
            "Ho lanciato la linea di ricavi B2B SaaS con un redesign completo della struttura e della gerarchia visiva del prodotto.",
          ),
          t(
            "Launched the new mobile app, designed mobile-first with a lean approach.",
            "Ho lanciato la nuova app mobile, progettata mobile-first con un approccio lean.",
          ),
        ],
      },
      {
        title: t("CTO", "CTO"),
        period: t("Feb 2018 – Feb 2022", "feb 2018 – feb 2022"),
        place: t("Milan", "Milano"),
        highlights: [
          t(
            "Re-architected backend and frontend, halving infrastructure costs and scaling on AWS to over 1 million daily users during the COVID-19 emergency.",
            "Ho riprogettato backend e frontend, dimezzando i costi di infrastruttura e scalando su AWS oltre 1 milione di utenti al giorno durante l'emergenza COVID-19.",
          ),
          t(
            "Led the migration to PHP 7 and Symfony 4.4, and from a custom JavaScript client to a React single-page app with a design system.",
            "Ho guidato la migrazione a PHP 7 e Symfony 4.4, e da un client JavaScript custom a una single-page app React con un design system.",
          ),
          t(
            "Introduced CI pipelines, automated testing, Agile practice and a Kanban flow that kept the team focused through emergencies.",
            "Ho introdotto pipeline di CI, test automatici, pratiche Agile e un flusso Kanban che ha tenuto il team concentrato anche nelle emergenze.",
          ),
        ],
      },
      {
        title: t("Backend Developer", "Backend Developer"),
        period: t("Oct 2016 – Feb 2018", "ott 2016 – feb 2018"),
        place: t("Milan", "Milano"),
        highlights: [],
      },
    ],
  },
  {
    company: "TOP-IX Consortium",
    roles: [
      {
        title: t("Junior Software Developer", "Sviluppatore software junior"),
        period: t("Oct 2013 – Sep 2016", "ott 2013 – set 2016"),
        place: t("Turin", "Torino"),
        highlights: [],
      },
    ],
  },
];

export const projects: { name: string; url: string; period: Text; summary: Text }[] = [
  {
    name: "Lunette",
    url: "https://github.com/LunetteOrg/lunette",
    period: t("2026 – present", "2026 – oggi"),
    summary: t(
      "My open-source toolkit for building products with a team of AI agents, grown out of Discentis and WAI. The method: a five-persona review panel (architecture, backend, design system, QA, release) run as a round table; scripted sprints in which each story goes through TDD, adversarial review and fixes; retrospectives, collected from commit trailers, that turn lessons into new skills, hooks and ADRs. The code: a library for typed dependency wiring as a chain of layers (Effect-grade composition with plain functions), a TypeScript monorepo starter and the @lntt/create CLI.",
      "Il mio toolkit open source per costruire prodotti con un team di agenti AI, nato da Discentis e WAI. Il metodo: un panel di revisione con cinque persona (architettura, backend, design system, QA, rilascio) che lavora come una tavola rotonda; sprint scriptati in cui ogni storia passa per TDD, revisione avversariale e correzioni; retrospettive, raccolte dai trailer dei commit, che trasformano le lezioni in nuove skill, hook e ADR. Il codice: una libreria per comporre le dipendenze come catena di layer (la composizione di Effect con funzioni semplici), uno starter per monorepo TypeScript e la CLI @lntt/create.",
    ),
  },
];

export const community = [
  {
    name: "Product Personas",
    role: t("Co-founder", "Co-fondatore"),
    period: t("2021 – present", "2021 – oggi"),
    summary: t(
      "A product meetup where practitioners review industry trends, technical strategies and design choices.",
      "Un meetup di prodotto in cui professionisti discutono tendenze del settore, strategie tecniche e scelte di design.",
    ),
  },
];

export const skills: { group: Text; items: string[] }[] = [
  {
    group: t("Languages and frameworks", "Linguaggi e framework"),
    items: ["TypeScript", "Effect", "React", "React Router", "Remix", "Astro", "PHP", "Symfony", "SQL"],
  },
  {
    group: t("Data and infrastructure", "Dati e infrastruttura"),
    items: ["PostgreSQL", "Drizzle", "Docker", "Linux", "AWS", "Render"],
  },
  {
    group: t("Quality and delivery", "Qualità e rilascio"),
    items: ["GitHub Actions", "CircleCI", "Vitest", "Testcontainers", "Playwright", "Storybook", "Chromatic", "Biome"],
  },
  {
    group: t("Product and method", "Prodotto e metodo"),
    items: ["Claude Code agents", "Domain-Driven Design", "Product discovery", "Product analytics", "PostHog", "Roadmapping", "Agile / Kanban"],
  },
];

export const education = [
  {
    degree: t("MSc, Computer Engineering", "Laurea magistrale in Ingegneria Informatica"),
    school: "Politecnico di Torino",
    year: "2015",
  },
  {
    degree: t("BSc, Computer Engineering", "Laurea triennale in Ingegneria Informatica"),
    school: "Politecnico di Torino",
    year: "2012",
  },
];

export const languages: { name: Text; level: Text }[] = [
  { name: t("Italian", "Italiano"), level: t("native", "madrelingua") },
  { name: t("English", "Inglese"), level: t("C1", "C1") },
  { name: t("French", "Francese"), level: t("B1", "B1") },
];

export const labels = {
  experience: t("Experience", "Esperienza"),
  projects: t("Projects", "Progetti"),
  clients: t("Clients", "Clienti"),
  community: t("Community", "Community"),
  skills: t("Skills", "Competenze"),
  education: t("Education", "Formazione"),
  languages: t("Languages", "Lingue"),
  contact: t("Get in touch", "Contatti"),
  print: t("Print / PDF", "Stampa / PDF"),
};
