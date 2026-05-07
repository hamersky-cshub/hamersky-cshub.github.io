// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAT = {
  aim: 'Poskytnout základní znalosti principů autentizace a správy identit pro ochranu osobních digitálních aktiv.',
  objectives: [
    'Zdůraznit důležitost bezpečné správy identit.',
    'Představit koncept autentizace a její různé typy.',
    'Rozvíjet porozumění studentů digitálním aktivům a povědomí o řízení přístupu.',
    'Rozvíjet znalosti a dovednosti studentů pro vytváření bezpečných uživatelských jmen a hesel podle doporučení a osvědčených postupů.',
    'Budovat dovednosti studentů pro bezpečnou správu hesel.',
  ],
  outcomes: [
    'Dokáži identifikovat svá osobní digitální aktiva a vysvětlit rizika, kterým čelí v fyzickém i digitálním prostředí.',
    'Dokáži vysvětlit, co je autentizace, proč je důležitá, a vyjmenovat různé typy autentizace.',
    'Dokáži rozlišit mezi slabými a silnými uživatelskými jmény a hesly.',
    'Dokáži předvést, jak používat správce hesel k ukládání hesel, a zdůvodnit, proč jsem tyto volby učinil/a.',
  ],
  teachingGuide: {
    ariaLabel: 'Stáhnout výukového průvodce',
    download: 'Výukový průvodce autentizací',
  },
  parts: [
    {
      goal: 'Pomoci studentům vytvořit silná, zapamatovatelná tajemství a pochopit, proč je opakované použití riskantní.',
      bundle: {
        filename: 'Authentication Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Obrázek',
            name: 'Online identita',
            filename: 'Image - Online Identity',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.1.2
            kind: 'Obrázky',
            name: 'Příklady osobních digitálních aktiv',
            filename: 'Images - Examples of Personal Digital Assets',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.1.4
            kind: 'Pracovní list',
            name: 'Co by se stalo, kdyby...?',
            filename: 'Worksheet - What Would Happen if',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.1.5
            kind: 'Pracovní list',
            name: 'Moje digitální aktiva',
            filename: 'Worksheet - My Digital Assets',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je digitální identita?',
          },
          {
            title: 'Porozumění digitálním aktivům',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        title: 'Co je digitální identita?',
        supportText:
          'Použijte toto video, aby studenti pochopili, že jejich digitální identita se skládá z informací a chování, které sdílejí online. Zastavte se a zeptejte se, které části digitální identity si myslí, že mohou ovládat.',
        downloads: {
          video: {
            filename: 'What is Digital Identity',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What is Digital Identity - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoci studentům pochopit, co je autentizace, proč je důležitá a jak pomáhá chránit jejich digitální identitu a digitální aktiva tím, že kontroluje, kdo má povolený přístup.',
      bundle: {
        filename: 'Authentication Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Obrázky',
            name: 'Příklady autentizace z reálného světa',
            filename: 'Images - Real-world Authentication Examples',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.2.3
            kind: 'Obrázek',
            name: 'Přihlášení do digitálního systému',
            filename: 'Image - Logging Into a Digital System',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.2.4
            kind: 'Pracovní list',
            name: 'Autentizace v každodenním životě',
            filename: 'Worksheet - Authentication in Everday Life',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Autentizace',
          },
          {
            title: 'Porozumění typům autentizace',
          },
          {
            title: 'Aplikace autentizace na digitální aktiva',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'Co je autentizace a proč je důležitá?',
        supportText:
          'Použijte toto video k představení autentizace jako každodenního mechanismu, který chrání digitální účty studentů. Zastavte se a zeptejte se, jak aktuálně prokazují svou identitu v aplikacích, které nejčastěji používají.',
        downloads: {
          video: {
            filename: 'What is Authentication and Why is It Important',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What is Authentication and Why is It Important - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoci studentům pochopit, co je autentizace, proč je důležitá a jak pomáhá chránit jejich digitální identitu a digitální aktiva tím, že kontroluje, kdo má povolený přístup.',
      bundle: {
        filename: 'Authentication Part 3 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Obrázek',
            name: 'Příklady slabých hesel',
            filename: 'Image - Examples of Strong Passwords',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.3
            kind: 'Obrázek',
            name: 'Příklady silných hesel',
            filename: 'Image - Check your Password',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.4
            kind: 'Karty',
            name: 'Vytvořit silné heslo',
            filename: 'Cards - Create a Strong Password',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.5
            kind: 'Obrázek',
            name: 'Zkontrolujte své heslo',
            filename: 'Image - Two Different Types of Authentication Used Together',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.6
            kind: 'Pracovní list',
            name: 'Moje pravidla pro silná hesla',
            filename: 'Worksheet - My Strong Password Rules',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Hesla',
          },
          {
            title: 'Silná vs. slabá hesla',
          },
          {
            title: 'Bezpečné vytváření silných hesel',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Silná a slabá hesla',
        supportText:
          'Použijte toto video, abyste studentům ukázali rozdíl mezi hesly, která chrání účty, a hesly, která je vystavují riziku. Vyzvěte je, aby zamysleli nad tím, zda jejich vlastní hesla splňují kritéria silných hesel.',
        downloads: {
          video: {
            filename: 'Strong and Weak Passwords',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Strong and Weak Passwords - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoci studentům pochopit, co je dvoufaktorová autentizace a proč je správa mnoha hesel obtížná, představit koncept správce hesel a vysvětlit, jak správci hesel pomáhají chránit digitální identity a digitální aktiva při zodpovědném používání s podporou důvěryhodného dospělého.',
      bundle: {
        filename: 'Authentication Part 4 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Schéma',
            name: 'Sada skupin',
            filename: 'Schema - Set of Groups',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.2
            kind: 'Schéma',
            name: 'Sada mincí',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.3
            kind: 'Schéma',
            name: 'Sada skupin',
            filename: 'Schema - Set of Groups',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.4
            kind: 'Schéma',
            name: 'PIN karty',
            filename: 'Schema - PIN Cards',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.6
            kind: 'Obrázky',
            name: 'Jak používat správce hesel',
            filename: 'Images - How to Use a Password Manager',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.7
            kind: 'Obrázek',
            name: 'Trezor správce hesel',
            filename: 'Image - Password Manager Vault',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.8
            kind: 'Obrázek',
            name: 'Správce hesel jako digitální klíčenka',
            filename: 'Image - Password Manager as a Digital Keyring',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.9
            kind: 'Obrázek',
            name: 'Kroky ukládání hesel',
            filename: 'Image - Steps of Saving Passwords',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.10
            kind: 'Pracovní list',
            name: 'Problémy s hesly a řešení',
            filename: 'Worksheet - Password Problems and Solutions',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Hesla',
          },
          {
            title: 'Správci hesel',
          },
          {
            title: 'Bezpečné používání správců hesel',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'Co je správce hesel?',
        supportText:
          'Použijte toto video k představení správců hesel jako praktického řešení pro vytváření a ukládání silných, jedinečných hesel pro každý účet. Zastavte se a zeptejte se studentů, zda o správci hesel slyšeli nebo jej již používali.',
        downloads: {
          video: {
            filename: 'What Is a Password Manager',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What Is a Password Manager - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoci studentům pochopit, jak jejich volby a chování ovlivňují bezpečnost jejich digitální identity a jak zodpovědné jednání pomáhá chránit jejich digitální aktiva, je samotné a ostatní v digitálním prostředí.',
      bundle: {
        filename: 'Authentication Part 5 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Obrázek',
            name: 'Bezpečné a nebezpečné online chování',
            filename: 'Image - Safe and Unsafe Online Behaviours',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.5.3
            kind: 'Pracovní list',
            name: 'Scénáře digitální identity a autentizace',
            filename: 'Worksheet - Digital Identity and Authentication Scenarios',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.5.4
            kind: 'Pracovní list',
            name: 'Jak chráním svou digitální identitu',
            filename: 'Worksheet - How I Protect My Digital Identity',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Ochrana digitální identity',
          },
          {
            title: 'Digitální identita a autentizace',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Ochrana vaší digitální identity',
        supportText:
          'Použijte toto video ke spojení strategií, které se studenti naučili pro zachování bezpečnosti své digitální identity. Povzbuďte je, aby identifikovali jeden konkrétní zvyk, který změní nebo zavedou po shlédnutí.',
        downloads: {
          video: {
            filename: 'Protecting Your Digital Identity',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Protecting Your Digital Identity - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
  ],
  otherModulesDivider: 'Prozkoumejte další témata',
  otherModulesTitle: 'Další moduly',
  otherModulesSubtitle: 'Procházejte příbuzné moduly a pokračujte v učení.',
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

export const challengeAT = {
  title: 'Laboratoř hesel',
  subtitle:
    'Budujte silnější heslo jedno kolo za druhým. Každá úroveň přidává novou ingredienci do vašeho receptu na heslo!',
  howItWorks: 'Jak to funguje',
  instruction:
    'Každé kolo zavádí nový požadavek na heslo. Splňte všechna kritéria aktuálního kola, abyste postoupili – a sledujte, jak vaše heslo je stále těžší prolomit!',
  tipLabel: 'Tip',
  tip: 'Zkontrolujte pravý postranní panel, abyste sledovali pokrok v kolech a získali tipy na hesla!',
  yourPassword: 'Vaše heslo',
  placeholder: 'Zadejte heslo zde...',
  passwordInputAriaLabel: 'Zadání hesla',
  showPassword: 'Zobrazit heslo',
  strengthAriaLabel: 'Síla hesla',
  roundBadgeTemplate: 'Kolo {n} z {total}',
  criteriaTitle: 'Recept na heslo — Kolo {n}:',
  criterionLength: 'Délka > 10 znaků',
  criterionNumber: 'Obsahuje číslo (0-9)',
  criterionSymbol: 'Obsahuje symbol (! @ # $ % ^ & * ?)',
  criterionUppercase: 'Obsahuje VELKÉ písmeno',
  criterionLowercase: 'Obsahuje malé písmeno',
  strengthWeak: 'Slabé',
  strengthOkay: 'Skoro tam',
  strengthStrong: 'Silné ✓',
  feedbackDefault: 'Začněte psát a zjistěte sílu svého hesla!',
  feedbackAllMet: '🎉 Všechny požadavky splněny! Klikněte na Další kolo pro pokračování.',
  almostThereTemplate: 'Skoro tam! Zkuste {hint}.',
  hints: {
    length: 'prodloužit (10+ znaků)',
    number: 'přidat číslo (0-9)',
    symbol: 'přidat symbol jako ! @ # $ %',
    upper: 'přidat VELKÉ písmeno',
    lower: 'přidat malé písmeno',
  },
  keepGoing: 'Pokračujte!',
  nextRound: 'Další kolo →',
  finish: 'Dokončit! 🏆',
  nextRoundAriaLabel: 'Přejít na další kolo',
  tryAgain: 'Zkusit znovu',
  tryAgainAriaLabel: 'Vymazat heslo a začít znovu',
  completionTitle: 'Mistr hesel!',
  completionText: 'Dokončili jste všechna 4 kola a naučili se vytvářet neprolomitelná hesla!',
  completionRounds: '4 / 4 kola dokončena',
  completionTips: 'Silná hesla chrání váš digitální život. Používejte tyto dovednosti všude, kde si vytváříte účet!',
  startOver: 'Začít znovu',
  roundProgressTitle: 'Pokrok v kolech',
  roundProgressDesc: 'Dokončete všechna 4 kola, abyste ovládli hesla',
  rounds: [
    {
      icon: '🎮',
      title: 'Vytvořte heslo pro herní účet',
      description: 'Začněte s dobrou délkou – alespoň 10 znaků!',
      label: 'Kolo 1',
      desc: 'Pouze délka'
    },
    {
      icon: '📧',
      title: 'Vytvořte heslo pro e-mail',
      description: 'Skvělý začátek! Nyní přidejte číslo, aby bylo těžší jej prolomit.',
      label: 'Kolo 2',
      desc: '+ Číslo'
    },
    {
      icon: '📱',
      title: 'Vytvořte heslo pro sociální sítě',
      description: 'Dobrý pokrok! Nyní přidejte symbol, abyste to pořádně zamíchali.',
      label: 'Kolo 3',
      desc: '+ Symbol'
    },
    {
      icon: '📔',
      title: 'Vytvořte heslo pro tajný deník',
      description: 'Závěrečné kolo! Přidejte VELKÁ i malá písmena a dokončete celý recept.',
      label: 'Kolo 4',
      desc: '+ Velká a malá písmena'
    },
  ],
  dosTitle: '✅ Dělat',
  dos: [
    'Kombinujte VELKÁ a malá písmena',
    'Přidejte čísla uprostřed',
    'Používejte symboly jako ! @ # $ %',
    'Délka 12+ znaků',
    'Používejte náhodné kombinace',
  ],
  dontsTitle: '❌ Nedělat',
  donts: [
    'Používejte své skutečné jméno nebo datum narození',
    'Používejte „123456" nebo jednoduché vzory',
    'Opakujte stejný znak',
    'Používejte běžná slovníková slova',
    'Používejte název školy nebo jméno mazlíčka',
  ],
}
