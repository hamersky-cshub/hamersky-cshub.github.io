// ---------------------------------------------------------------------------
// Data Privacy (DP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Data Privacy module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDP = {
  aim: 'Pomoci žákům rozpoznat, co se počítá jako osobní údaje, pochopit, proč je soukromí důležité, a dělat bezpečnější rozhodnutí před sdílením informací online.',
  objectives: [
    'Definovat osobní údaje a identifikovat, co je citlivé.',
    'Podporovat promyšlené sdílení a rozhodnutí založená na souhlasu.',
    'Budovat povědomí o nastavení soukromí a bezpečných výchozích hodnotách.',
  ],
  outcomes: [
    'Rozpoznat běžné typy osobních informací.',
    'Vysvětlit, jak mohou data putovat a být ukládána online.',
    'Aplikovat jednoduchá pravidla soukromí před sdílením nebo zveřejňováním.',
  ],
  parts: [
    {
      goal: 'Pomoci žákům pochopit, co jsou osobní údaje, identifikovat různé typy citlivých informací a rozpoznat, proč jejich ochrana záleží.',
      bundle: {
        filename: 'Ochrana osobních údajů - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 4.1.2
            kind: 'Třídící karty',
            name: 'Soukromé, nebo veřejné',
            filename: 'Třídící karty - Soukromé, nebo veřejné',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.1.3
            kind: 'Pracovní list',
            name: 'Reflexe: Veřejná vs. soukromá data',
            filename: 'Pracovní list - Reflexe Veřejná vs. soukromá data',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co jsou osobní údaje?',
          },
          {
            title: 'Plénum: Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.1
        title: 'Co jsou soukromá data?',
        supportText:
          'Použijte toto video k představení konceptu soukromých dat a zahájení diskuse o typech informací, které žáci každý den sdílejí. Pozastavte se a zeptejte se žáků, které detaily považují za soukromé.',
        downloads: {
          video: {
            filename: 'Co jsou soukromá data',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co jsou soukromá data - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům pochopit, jak a proč se data sdílejí online, důležitost souhlasu a jak dělat promyšlená rozhodnutí před sdílením osobních informací.',
      bundle: {
        filename: 'Ochrana osobních údajů - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 4.2.1
            kind: 'Obrázek',
            name: 'Sdílení online: Bezpečné vs. rizikové',
            filename: 'Obrázek - Sdílení online Bezpečné vs. rizikové',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.2.2
            kind: 'Scénářové karty',
            name: 'Hraní rolí',
            filename: 'Scénářové karty - Hraní rolí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.2.3
            kind: 'Pracovní list',
            name: 'Sdílet, nebo nesdílet',
            filename: 'Pracovní list - Sdílet, nebo nesdílet',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Jak se sdílejí data?',
          },
          {
            title: 'Souhlas a oprávnění',
          },
          {
            title: 'Plénum - Shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoci žákům objevit, co je digitální stopa, pochopit, jak každodenní online aktivity zanechávají trvalé stopy, a uvažovat o dlouhodobém dopadu jejich online chování.',
      bundle: {
        filename: 'Ochrana osobních údajů - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 4.3.2
            kind: 'Obrázek',
            name: 'Komiks: Den ze života Sama online',
            filename: 'Obrázek - Komiks Den ze života Sama online',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.3.3
            kind: 'Pracovní list',
            name: 'Sleduj Samovu stopu',
            filename: 'Pracovní list - Sleduj Samovu stopu',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.3.4
            kind: 'Schéma',
            name: 'Hrací deska: Hodnota soukromí',
            filename: 'Schéma - Hrací deska Hodnota soukromí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.3.5
            kind: 'Herní sada',
            name: 'Karty: Hodnota soukromí',
            filename: 'Herní sada - Karty Hodnota soukromí',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je digitální stopa?',
          },
          {
            title: 'Mapování vašich online stop',
          },
          {
            title: 'Plénum - Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.3.1
        title: 'Co je digitální stopa?',
        supportText:
          'Použijte toto video, aby si žáci dokázali představit stopu dat, kterou zanechávají online. Podpořte reflexi o tom, které jejich nedávné aktivity mohly zanechat stopu.',
        downloads: {
          video: {
            filename: 'Co je digitální stopa',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je digitální stopa - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům naučit se praktické strategie pro přezkoumání a správu jejich digitální stopy, včetně způsobu úpravy nastavení soukromí a odstranění nežádoucích dat.',
      bundle: {
        filename: 'Ochrana osobních údajů - balíček - Část 4',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Obrázek',
            name: 'Příklad základního nastavení',
            filename: 'Obrázek - Příklad základního nastavení',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.2
            kind: 'Pracovní list',
            name: 'Oprav tento profil!',
            filename: 'Pracovní list - Oprav tento profil',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.3
            kind: 'Pracovní list',
            name: 'Tipy na ochranu soukromí pro děti',
            filename: 'Pracovní list - Tipy na ochranu soukromí pro děti',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.4
            kind: 'Pracovní list',
            name: 'Šablona plakátu',
            filename: 'Pracovní list - Šablona plakátu',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.6
            kind: 'Pracovní list',
            name: 'Hádanka: Využití digitálních stop „Členové týmu Brain Fights“',
            filename: 'Pracovní list - Hádanka Využití digitálních stop Členové týmu Brain Fights',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Přezkoumání vaší digitální stopy',
          },
          {
            title: 'Správa nastavení soukromí',
          },
          {
            title: 'Plénum - Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.4.5
        title: 'Ochrana vašich osobních dat online',
        supportText:
          'Použijte toto video k představení konceptu osobních dat a zahájení diskuse o typech informací, které žáci každý den sdílejí.',
        downloads: {
          video: {
            filename: 'Ochrana vašich osobních dat online',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Ochrana vašich osobních dat online - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
  ],
  relatedModuleCards: [
    {
      moduleId: 'dc',
      brand: 'DC',
      href: '/learning-hub/digital-citizenship/content',
      imageSrc: '/images/learning-hub/01_digital-citizenship.webp',
    },
    {
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/images/learning-hub/02_attacker-perspective.webp',
    },
    {
      moduleId: 'at',
      brand: 'AT',
      href: '/learning-hub/authentication/content',
      imageSrc: '/images/learning-hub/03_authentication.webp',
    },
    {
      moduleId: 'se',
      brand: 'SE',
      href: '/learning-hub/social-engineering/content',
      imageSrc: '/images/learning-hub/05_social-engineering.webp',
    },
    {
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/images/learning-hub/06_malware.webp',
    },
    {
      moduleId: 'da',
      brand: 'DA',
      href: '/learning-hub/digital-abuse/content',
      imageSrc: '/images/learning-hub/07_digital-abuse.webp',
    },
  ],
}

export const challengeDP = {
  title: 'Třídič digitální stopy',
  subtitle: 'Roztřiďte každou aktivitu do správné kategorie. Zjistěte, které vaše každodenní činnosti zanechávají stopy online!',
  howItWorks: 'Jak to funguje',
  instruction: 'Přetáhněte každou kartičku s aktivitou do zóny, kam patří. Na mobilu klepněte na kartičku pro výběr, poté klepněte na zónu pro vložení.',
  tip: 'Přemýšlejte, zda aktivita zahrnuje internet, aplikaci nebo webovou stránku. Pokud ano, pravděpodobně zanechává digitální stopu!',
  tipLabel: 'Tip',
  tryAgain: 'Zkusit znovu',
  activitiesToSort: 'Aktivity k roztřídění',
  leavesFootprint: 'Zanechává stopu',
  dragOnlineHere: 'Sem přetáhněte online aktivity',
  noFootprint: 'Žádná stopa',
  dragOfflineHere: 'Sem přetáhněte offline aktivity',
  correct: 'Správně! 🎯',
  tryOtherZone: 'Skoro — zkus druhou zónu!',
  winTitle: 'Úžasné! Roztřídil/a jsi je všechny!',
  winMessage: 'Nyní víš, které aktivity zanechávají digitální stopu. Pamatuj: každé kliknutí, vyhledávání a příspěvek vytváří stopu online!',
  playAgain: 'Hrát znovu',
  activities: [
    {
      text: 'Sdílení fotografie na Instagramu',
      category: 'footprint',
      emoji: '📸',
      explanation: 'Fotografie, které sdílíte online, zůstávají na serverech a může je najít kdokoli — i roky poté!',
    },
    {
      text: 'Čtení papírové knihy doma',
      category: 'no-footprint',
      emoji: '📖',
      explanation: 'Žádné připojení k internetu znamená, že nevzniká žádná digitální stopa.',
    },
    {
      text: 'Vyhledávání odpovědí na Googlu',
      category: 'footprint',
      emoji: '🔍',
      explanation: 'Vyhledávače zaznamenávají, co hledáte, a používají to k zobrazování personalizovaných výsledků.',
    },
    {
      text: 'Hraní fotbalu venku',
      category: 'no-footprint',
      emoji: '⚽',
      explanation: 'Venkovní aktivity bez telefonu nebo aplikace nezanechávají žádný digitální záznam.',
    },
    {
      text: 'Odesílání zprávy na WhatsApp',
      category: 'footprint',
      emoji: '💬',
      explanation: 'Zprávy jsou uloženy na serverech a vytváří trvalý záznam vašich konverzací.',
    },
    {
      text: 'Kreslení obrázku pastelkami',
      category: 'no-footprint',
      emoji: '🖍️',
      explanation: 'Tradiční tvorba s fyzickými materiály nevytváří žádná online data.',
    },
    {
      text: 'Vytvoření účtu na herní webové stránce',
      category: 'footprint',
      emoji: '🎮',
      explanation: 'Registrace ukládá vaše jméno, e-mail a každou akci, kterou na webu provedete.',
    },
    {
      text: 'Jízda na kole po okolí',
      category: 'no-footprint',
      emoji: '🚲',
      explanation: 'Pokud nepoužíváte sledovací aplikaci, jízda na kole je čistě offline aktivita.',
    },
    {
      text: 'Sledování videí na YouTube',
      category: 'footprint',
      emoji: '▶️',
      explanation: 'YouTube sleduje každé video, které sledujete, a používá to k doporučování dalšího obsahu.',
    },
    {
      text: 'Psaní do papírového deníku',
      category: 'no-footprint',
      emoji: '📓',
      explanation: 'Papírový deník nemá připojení k internetu — vaše myšlenky zůstávají skutečně soukromé.',
    },
    {
      text: 'Lajkování TikTok videa kamaráda',
      category: 'footprint',
      emoji: '❤️',
      explanation: 'Každý lajk, který dáte, je zaznamenán a formuje váš online profil a doporučení.',
    },
    {
      text: 'Hraní deskové hry s rodinou',
      category: 'no-footprint',
      emoji: '🎲',
      explanation: 'Deskové hry jsou offline zábavou — žádná data nejsou vytvářena ani nikde ukládána.',
    },
    {
      text: 'Vyplňování online kvízu',
      category: 'footprint',
      emoji: '📝',
      explanation: 'Webové stránky sbírají každou odpověď, kterou zadáte, a mohou ji sdílet s ostatními.',
    },
    {
      text: 'Povídání si s přáteli ve škole',
      category: 'no-footprint',
      emoji: '🗣️',
      explanation: 'Osobní rozhovory nezanechávají vůbec žádnou digitální stopu.',
    },
    {
      text: 'Zanechání komentáře na blogu',
      category: 'footprint',
      emoji: '💻',
      explanation: 'Komentáře jsou veřejné, spojené s vaším jménem a zůstávají na webové stránce navždy.',
    },
  ],
}
