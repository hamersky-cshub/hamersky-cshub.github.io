// ---------------------------------------------------------------------------
// Digital Citizenship (DC) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Citizenship module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDC = {
  aim: 'Poskytnout porozumění tomu, co je digitální občanství a jak dodržovat jeho základní principy.',
  objectives: [
    'Zdůraznit důležitost digitálního občanství.',
    'Představit koncept digitálního občanství a jeho principy práv, odpovědnosti a úcty v digitálním prostředí.',
    'Rozvíjet porozumění žáků tomu, jak uplatňovat tyto principy práv, odpovědnosti a úcty v digitálním prostředí – být v bezpečí, být chytrý a být společenský.',
  ],
  outcomes: [
    'Dokáži vysvětlit, co je digitální občanství a proč je důležité.',
    'Dokáži diskutovat o principech práv, odpovědnosti a úcty v digitálním prostředí, včetně toho, jak zůstat v bezpečí, jednat chytře a zapojovat se do sociálního života.',
  ],
  teachingGuide: {
    ariaLabel: 'Stáhnout výukového průvodce',
    download: 'Výukový průvodce digitálním občanstvím',
  },
  parts: [
    {
      goal: 'Pomoci žákům pochopit, co je digitální prostředí a jaké jsou jeho pozitivní aspekty.',
      bundle: {
        filename: 'Digital Citizenship Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.1.1
            kind: 'Scénářové karty',
            name: 'Fyzický a digitální svět',
            filename: 'Scenario Cards - Physical and Digital Worlds',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je digitální prostředí?',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.1.2
        title: 'Co je digitální prostředí?',
        supportText:
          'Použijte toto video k podnícení diskuse o online prostorech, které žáci již používají, od vzdělávacích platforem po hry a aplikace pro zasílání zpráv. Zastavte se pro rychlé zamyšlení nad tím, kde žáci tráví čas online.',
        downloads: {
          video: {
            filename: 'What Is a Digital Environment',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What Is a Digital Environment - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům pochopit, co je digitální občanství a proč je důležité.',
      bundle: {
        filename: 'Digital Citizenship Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.2.1
            kind: 'Obrázek',
            name: 'Zodpovědný občan',
            filename: 'Worksheet A - Rights Responsibilities and Respect',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 1.2.2a
            kind: 'Pracovní list A',
            name: 'Práva, odpovědnosti a úcta',
            filename: 'Worksheet B - Rights Responsibilities and Respect',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 1.2.2b
            kind: 'Pracovní list B',
            name: 'Práva, odpovědnosti a úcta',
            filename: 'Image - Feeling Safe',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Digitální občanství',
          },
          {
            title: 'Práva, úcta a odpovědnosti v digitálním prostředí',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal:
        'Pomoci žákům vědět, jak být v digitálním prostředí v bezpečí prostřednictvím kritického myšlení a zodpovědného jednání s nastavením soukromí.',
      bundle: {
        filename: 'Digital Citizenship Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.3.1
            kind: 'Obrázek',
            name: 'Pocit bezpečí',
            filename: 'Image - Feeling Unsafe',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 1.3.2
            kind: 'Obrázek',
            name: 'Pocit nebezpečí',
            filename: 'Image - Application Privacy Settings',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 1.3.4
            kind: 'Obrázek',
            name: 'Nastavení soukromí aplikace',
            filename: 'Image - Privacy Settings Strategy',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 1.3.5
            kind: 'Obrázek',
            name: 'Strategie nastavení soukromí',
            filename: 'Image - Digital Footprint',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Porozumění propojení fyzického a digitálního prostředí',
          },
          {
            title: 'Nastavení soukromí',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.3.3
        title: 'Co jsou nastavení soukromí?',
        supportText:
          'Použijte toto video k představení nastavení soukromí jako praktického nástroje, který mohou žáci ovládat v aplikacích a zařízeních, která již vlastní. Zastavte se a zeptejte se, jaká nastavení kontrolovali nebo změnili.',
        downloads: {
          video: {
            filename: 'What Are Privacy Settings',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What Are Privacy Settings - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům pochopit, jak jim moudrost a odolnost mohou pomoci být chytrými v digitálním prostředí.',
      bundle: {
        filename: 'Digital Citizenship Part 4 Package',
      },
      included: {
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Výzvy v digitálním prostředí',
          },
          {
            title: 'Porozumění tomu, jak rozvíjet odolnost',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.4.1
        title: 'Odolnost v digitálním prostředí',
        supportText:
          'Použijte toto video k prozkoumání toho, jak se žáci mohou vzpamatovat a přizpůsobit, když se něco online pokazí, od problémů s účtem po nevyžádaný kontakt. Zastavte se a zeptejte se, na koho se žáci obracejí o pomoc v takových situacích.',
        downloads: {
          video: {
            filename: 'Resilience in Digital Environments',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Resilience in Digital Environments - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoci žákům pochopit, jak jednat zodpovědně a projevovat úctu k sobě i ostatním při sociálním zapojení v digitálním prostředí.',
      bundle: {
        filename: 'Digital Citizenship Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.5.1
            kind: 'Obrázek',
            name: 'Digitální stopa',
            filename: 'Image - Digital Footprint',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 1.5.2
            kind: 'Scénářové karty',
            name: 'Co je vhodné a nevhodné sdílet',
            filename: 'Scenario Cards - Good and Bad to Post',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 1.5.3
            kind: 'Scénářové karty',
            name: 'Příspěvky na sociálních sítích',
            filename: 'Scenario Cards - Social Media Posts',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Zodpovědné jednání v digitálním prostředí',
          },
          {
            title: 'Budování pozitivní digitální stopy',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
    },
  ],
  relatedModuleCards: [
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
      moduleId: 'dp',
      brand: 'DP',
      href: '/learning-hub/data-privacy/content',
      imageSrc: '/images/learning-hub/04_data-privacy.png',
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

export const challengeDC = {
  title: 'Vhodný nebo NEVHODNÝ obsah ke sdílení?',
  subtitle: 'Přetáhněte každý příspěvek do správné kategorie. Naučte se, co je bezpečné sdílet online!',
  howItWorks: 'Jak to funguje',
  instruction: 'Přetáhněte každou kartu příspěvku do příslušné zóny. Na mobilu klepněte na kartu pro výběr, poté klepněte na zónu.',
  tip: 'Zamyslete se, zda by informace mohla identifikovat vás nebo vás ohrozit, kdyby ji viděl cizinec.',
  tipLabel: 'Tip',
  tryAgain: 'Zkusit znovu',
  correctCountLabel: 'Správně',
  postsToSort: 'Příspěvky k roztřídění',
  safeToShare: 'Bezpečné ke sdílení',
  dragSafeHere: 'Přetáhněte bezpečné příspěvky sem',
  doNotShare: 'NESDÍLEJTE',
  dragUnsafeHere: 'Přetáhněte nebezpečné příspěvky sem',
  safeZoneAriaLabel: 'Zóna bezpečná ke sdílení',
  unsafeZoneAriaLabel: 'Zóna NESDÍLEJTE',
  correct: 'Správně!',
  tryOtherZone: 'Ne tak docela — zkuste jinou zónu!',
  winTitle: 'Výborně! Roztřídili jste vše správně!',
  winMessage: 'Jste odborníkem na digitální občanství. Pamatujte na tyto lekce při zveřejňování příspěvků online!',
  playAgain: 'Hrát znovu',
  posts: [
    { text: 'Moje domácí adresa je Hlavní ulice 123',
      category: 'unsafe',
      emoji: '🏠',
      explanation: 'Vaše domácí adresa je soukromá — nikdy ji nesdílejte online! Cizinci ji mohou použít k nalezení místa, kde bydlíte.'
    },
    { text: 'Miluju hrát fotbal!',
      category: 'safe',
      emoji: '⚽',
      explanation: 'Sdílení koníčků je zcela v pořádku a skvělý způsob, jak se spojit s ostatními!'
    },
    { text: 'Moje heslo je Fluffy123',
      category: 'unsafe',
      emoji: '🔑',
      explanation: 'Nikdy nesdílejte hesla s nikým online — ani se svými nejlepšími přáteli!'
    },
    { text: 'Dostal jsem jedničku z testu z přírodovědy!',
      category: 'safe',
      emoji: '🎉',
      explanation: 'Slavit úspěchy je bezpečné sdílet — tak dál!'
    },
    { text: 'Moje telefonní číslo je 555-0123',
      category: 'unsafe',
      emoji: '📱',
      explanation: 'Telefonní čísla jsou osobní — uchovejte je soukromá, aby vás cizinci nemohli kontaktovat.'
    },
    { text: 'Jsem doma sám/sama do 18:00',
      category: 'unsafe',
      emoji: '🏡',
      explanation: 'Nikdy nikomu online neříkejte, že jste doma sami — ohrožuje to vaši bezpečnost!'
    },
    { text: 'Naše školní představení je příští pátek!',
      category: 'safe',
      emoji: '🎭',
      explanation: 'Školní akce je v pořádku sdílet s přáteli!'
    },
    { text: 'Podívejte se na můj nový obrázek!',
      category: 'safe',
      emoji: '🎨',
      explanation: 'Sdílení tvůrčí práce je skvělý způsob, jak se vyjádřit!'
    },
    { text: 'Číslo kreditní karty mé maminky je...',
      category: 'unsafe',
      emoji: '💳',
      explanation: 'Finanční informace, jako jsou čísla kreditních karet, musí vždy zůstat soukromé!'
    },
    { text: 'Můj oblíbený film je Toy Story!',
      category: 'safe',
      emoji: '🎬',
      explanation: 'Mluvit o filmech, které si užíváte, je zcela bezpečné a zábavné!'
    },
    { text: 'Moje celé jméno je Emily Rose Johnson',
      category: 'unsafe',
      emoji: '📛',
      explanation: 'Sdílení vašeho celého jména online může pomoci cizincům vás identifikovat a sledovat.'
    },
    { text: 'Právě jsem se naučil/a jezdit na kole!',
      category: 'safe',
      emoji: '🚲',
      explanation: 'Sdílení milníků a nových dovedností je skvělá věc ke sdílení!'
    },
    { text: 'Kombinace mé školní skříňky je 24-8-16',
      category: 'unsafe',
      emoji: '🔒',
      explanation: 'Kombinace skříněk jsou soukromé — někdo by se mohl vloupat do vaší skříňky!'
    },
    { text: 'Dostali jsme nové štěně jménem Max!',
      category: 'safe',
      emoji: '🐶',
      explanation: 'Sdílení informací o vašich mazlíčcích je bezpečné a zábavné pro každého!'
    },
    { text: 'Chodím domů sám/sama přes park ve 15:30',
      category: 'unsafe',
      emoji: '🚶',
      explanation: 'Sdílení vašeho denního režimu a trasy přesně říká cizincům, kde vás najít.'
    },
  ],
}
