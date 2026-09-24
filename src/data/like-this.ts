// "A CV like this": the page at /cv/like-this/ and /it/cv/like-this/, with the prompt
// a visitor gives to a coding agent to build a CV site on the model of this one.

import { t } from "./cv";

export const repo = "https://github.com/ilmeskio/ilmeskio.github.io";

export const likeThis = {
  /** Text of the footer link on the home and CV pages. */
  link: t("I want a CV like this", "Vorrei un CV così"),
  title: t("A CV like this", "Un CV come questo"),
  lede: t(
    "Give this prompt to a coding agent and it builds you a CV site like mine.",
    "Dai questo prompt a un agente di sviluppo e ti costruisce un sito CV come il mio.",
  ),
  how: t(
    "My CV is a small Astro site: the content lives in one data file, the page prints on a single A4 sheet, and GitHub Pages publishes it on every push. The prompt asks the agent to follow the same structure, to collect your existing CV, your LinkedIn profile and any other material you have, and to go back and forth with you on drafts until the content is right, before publishing anything.",
    "Il mio CV è un piccolo sito Astro: i contenuti stanno in un solo file di dati, la pagina si stampa su un foglio A4 e GitHub Pages la pubblica a ogni push. Il prompt chiede all'agente di seguire la stessa struttura, di raccogliere il CV che hai già, il tuo profilo LinkedIn e ogni altro materiale che hai, e di rivedere con te le bozze finché il contenuto è giusto, prima di pubblicare.",
  ),
  needs: t(
    "You need a coding agent that can run commands (Claude Code, Codex, Cursor or similar), Node and a GitHub account. Open an empty folder, start the agent and paste:",
    "Ti servono un agente di sviluppo che possa eseguire comandi (Claude Code, Codex, Cursor o simili), Node e un account GitHub. Apri una cartella vuota, avvia l'agente e incolla:",
  ),
  promptLabel: t("The prompt", "Il prompt"),
  copy: t("Copy prompt", "Copia il prompt"),
  copied: t("Copied", "Copiato"),
  source: t("The source of this site", "Il codice di questo sito"),
  prompt: t(
    `Build me a personal CV website on the model of ${repo} (the CV at https://consiglio.fyi/cv/). Read that repository first to understand its structure. Use it as a model, not as content: none of its text, photo or personal data goes into my site.

What I want:
- A static site built with Astro and TypeScript, managed with pnpm, with the Node version pinned.
- All the CV content in one typed data file (src/data/cv.ts), separate from the markup. Every text is a pair (or a set) in the site's languages, so the languages change together.
- One CV page per language, with a switch between them.
- Print styles that fit the CV on a single A4 page (check it by printing to PDF), and a "Print / PDF" button.
- Light and dark themes from colour tokens on :root, and a layout that reads well on a phone.
- Deploy to GitHub Pages with a GitHub Actions workflow on every push to main.

How to proceed, in rounds:
1. Setup. Before writing any code, ask me my name, which languages the site should have, whether I have a photo and a custom domain, and whether I also want the same CV in the Europass format.
2. Material. Ask me for everything that describes my work, one source at a time: my existing CV (a file or a link); my LinkedIn profile, exported as PDF (on the profile: More → Save to PDF), since LinkedIn pages usually cannot be read without a login; then anything else, such as a portfolio, GitHub profile, project pages, articles, talks, references or notes. For each source, tell me what you took from it and what is still unclear.
3. Draft. Fill the data file only with facts from that material. Do not invent roles, dates, figures or skills: where something is missing or two sources disagree, leave the field out and add it to a list of open questions.
4. Review. Run the type-check and the build, start the dev server and show me the CV together with the open questions. Take my corrections and any new material, update the data, and repeat from step 2 until I say the content is right. Then check the printed page count again.
5. Publish. Ask me before creating the GitHub repository and before the first push.`,
    `Costruiscimi un sito personale con il mio CV sul modello di ${repo} (il CV su https://consiglio.fyi/it/cv/). Leggi prima quel repository per capirne la struttura. Usalo come modello, non come contenuto: nel mio sito non va nessun suo testo, foto o dato personale.

Cosa voglio:
- Un sito statico fatto con Astro e TypeScript, gestito con pnpm, con la versione di Node fissata.
- Tutto il contenuto del CV in un solo file di dati tipizzato (src/data/cv.ts), separato dal markup. Ogni testo è una coppia (o un insieme) nelle lingue del sito, così le lingue cambiano insieme.
- Una pagina CV per lingua, con un selettore per passare dall'una all'altra.
- Regole di stampa che fanno stare il CV su un solo foglio A4 (verificalo stampando in PDF), e un pulsante "Stampa / PDF".
- Tema chiaro e scuro con i colori definiti come variabili su :root, e un layout che si legge bene dal telefono.
- Pubblicazione su GitHub Pages con un workflow di GitHub Actions a ogni push su main.

Come procedere, a giri:
1. Impostazione. Prima di scrivere codice, chiedimi il mio nome, in quali lingue dev'essere il sito, se ho una foto e un dominio mio, e se voglio anche lo stesso CV in formato Europass.
2. Materiale. Chiedimi tutto ciò che descrive il mio lavoro, una fonte alla volta: il CV che ho già (un file o un link); il mio profilo LinkedIn, esportato in PDF (dal profilo: Altro → Salva in PDF), perché le pagine di LinkedIn di solito non si leggono senza login; poi qualsiasi altra cosa, come portfolio, profilo GitHub, pagine di progetti, articoli, talk, referenze o appunti. Per ogni fonte, dimmi cosa ne hai preso e cosa resta poco chiaro.
3. Bozza. Riempi il file di dati solo con fatti presi da quel materiale. Non inventare ruoli, date, numeri o competenze: dove manca qualcosa o due fonti non concordano, lascia fuori il campo e aggiungilo a un elenco di domande aperte.
4. Revisione. Esegui il type-check e la build, avvia il server di sviluppo e mostrami il CV insieme alle domande aperte. Prendi le mie correzioni e il materiale nuovo, aggiorna i dati e riparti dal punto 2 finché non ti dico che il contenuto è giusto. Poi ricontrolla il numero di pagine in stampa.
5. Pubblicazione. Chiedimi conferma prima di creare il repository GitHub e prima del primo push.`,
  ),
};
