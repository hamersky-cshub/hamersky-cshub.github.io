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
  teachingGuide: {
    ariaLabel: 'Stáhnout výukového průvodce',
    download: 'Průvodce výukou ochrany dat',
  },
  parts: [
    {
      goal: 'Pomoci žákům pochopit, co jsou osobní údaje, identifikovat různé typy citlivých informací a rozpoznat, proč jejich ochrana záleží.',
      bundle: {
        filename: 'Data Privacy Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.1.3
            kind: 'Třídící karty',
            name: 'Veřejné nebo soukromé',
            filename: 'Sorting Cards - Public or Private',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.1.5
            kind: 'Pracovní list',
            name: 'Reflexe o veřejných vs. soukromých datech',
            filename: 'Worksheet - Reflection on Public vs Private Data',
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
            title: 'Plénum – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.2
        title: 'Co jsou soukromá data?',
        supportText:
          'Použijte toto video k představení konceptu soukromých dat a zahájení diskuse o typech informací, které žáci každý den sdílejí. Pozastavte se a zeptejte se žáků, které detaily považují za soukromé.',
        downloads: {
          video: {
            filename: 'What Is Private Data',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What Is Private Data - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům pochopit, jak a proč se data sdílejí online, důležitost souhlasu a jak dělat promyšlená rozhodnutí před sdílením osobních informací.',
      bundle: {
        filename: 'Data Privacy Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.2.2
            kind: 'Karty scénářů',
            name: 'Roleplay',
            filename: 'Scenario Cards - Roleplay',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.2.3
            kind: 'Obrázek',
            name: 'Sdílení online: Bezpečné vs. rizikové',
            filename: 'Image - Sharing Online: Safe vs Risky',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.2.4
            kind: 'Pracovní list',
            name: 'Sdílet nebo nesdílet?',
            filename: 'Worksheet - Share or Don\'t Share',
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
        filename: 'Data Privacy Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.3.3
            kind: 'Komiks',
            name: 'Den ze života Sama online',
            filename: 'Comic Story - A Day in the Life of Sam Online',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.3.4
            kind: 'Pracovní list',
            name: 'Sleduj Samovu stopu',
            filename: 'Worksheet - Track Sam\'s Footprint',
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
            filename: 'What Is a Digital Footprint',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What Is a Digital Footprint - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům naučit se praktické strategie pro přezkoumání a správu jejich digitální stopy, včetně způsobu úpravy nastavení soukromí a odstranění nežádoucích dat.',
      bundle: {
        filename: 'Data Privacy Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Kontrolní seznam',
            name: 'Kontrolní seznam pro úklid digitální stopy',
            filename: 'Checklist - Digital Footprint Cleanup Checklist',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.2
            kind: 'Pracovní list',
            name: 'Průvodce nastavením soukromí',
            filename: 'Worksheet - Privacy Settings Guide',
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
        // ID: 4.4.4
        title: 'Ochrana vašich osobních dat online',
        supportText:
          'Použijte toto video k představení konceptu osobních dat a zahájení diskuse o typech informací, které žáci každý den sdílejí.',
        downloads: {
          video: {
            filename: 'Protecting Your Personal Data Online',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Protecting Your Personal Data Online - Subtitles',
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
      imageSrc: '/images/learning-hub/01_digital-citizenship.png',
    },
    {
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/images/learning-hub/02_attacker-perspective.png',
    },
    {
      moduleId: 'at',
      brand: 'AT',
      href: '/learning-hub/authentication/content',
      imageSrc: '/images/learning-hub/03_authentication.png',
    },
    {
      moduleId: 'se',
      brand: 'SE',
      href: '/learning-hub/social-engineering/content',
      imageSrc: '/images/learning-hub/05_social-engineering.png',
    },
    {
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/images/learning-hub/06_malware.png',
    },
    {
      moduleId: 'da',
      brand: 'DA',
      href: '/learning-hub/digital-abuse/content',
      imageSrc: '/images/learning-hub/07_digital-abuse.png',
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
