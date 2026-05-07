// ---------------------------------------------------------------------------
// Digital Abuse (DA) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Abuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDA = {
  aim: 'Pomoci žákům rozpoznat škodlivé online chování, pochopit, že hranice jsou důležité, a znát kroky, které mohou podniknout, aby získali pomoc a zůstali v bezpečí.',
  objectives: [
    'Definovat digitální zneužívání věku přiměřeným a podpůrným způsobem.',
    'Rozpoznat varovné signály a nezdravé online chování.',
    'Procvičit bezpečné kroky pro hledání pomoci a nahlašování.',
  ],
  outcomes: [
    'Identifikovat chování, které překračuje hranice nebo způsobuje újmu.',
    'Používat jednoduché bezpečnostní kroky, jako je blokování nebo nahlášení.',
    'Znát důvěryhodné dospělé a podpůrné kanály, na které se lze obrátit.',
  ],
  teachersGuide: {
    ariaLabel: 'Stáhnout výukového průvodce',
    download: 'Průvodce výukou digitálního zneužívání',
  },
  parts: [
    {
      title: 'Dezinformace',
      goal: 'Pomoci žákům pochopit, co jsou dezinformace, co lidi motivuje k jejich šíření a jak je rozpoznat.',
      bundle: {
        filename: 'Digital Abuse Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Hra',
            name: 'Detektivové pravdy',
            filename: 'Game - Truth Detectives',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co jsou dezinformace?',
          },
          {
            title: 'Plenum – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Co jsou dezinformace?',
        supportText:
          'Použijte toto video k představení dezinformací jako nepravdivého nebo nepřesného obsahu, který se může šířit online bez škodlivého úmyslu. Pozastavte a zeptejte se žáků, zda někdy sdíleli něco, co se později ukázalo jako nepravdivé.',
        downloads: {
          video: {
            filename: 'What is Misinformation',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What is Misinformation - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Disinformace',
      goal: 'Pomoci žákům pochopit, co jsou disinformace, motivace za nimi a jak je rozpoznat.',
      bundle: {
        filename: 'Digital Abuse Part 2 Package',
      },
      included: {
        materials: [],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co jsou disinformace?',
          },
          {
            title: 'Algoritmy',
          },
          {
            title: 'Plenum – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Co jsou disinformace?',
        supportText:
          'Použijte toto video, aby žáci dokázali rozlišit disinformace – záměrně klamný obsah – od dezinformací. Pozastavte a diskutujte o tom, jak úmysl mění způsob, jakým hodnotíme nepravdivé informace a reagujeme na ně.',
        downloads: {
          video: {
            filename: 'What is Disinformation',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What is Disinformation - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Kyberšikana',
      goal: 'Pomoci žákům pochopit, co je kyberšikana, motivace za ní a jak ji rozpoznat.',
      bundle: {
        filename: 'Digital Abuse Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Hra',
            name: 'Zahraj to!',
            filename: 'Game - Act it Out',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je kyberšikana?',
          },
          {
            title: 'Plenum – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Co je kyberšikana?',
        supportText:
          'Použijte toto video, aby žáci definovali kyberšikanu a pochopili, jak online chování může způsobit skutečnou emocionální újmu. Pozastavte a diskutujte o tom, proč je reakce přihlížejícího v těchto situacích důležitá.',
        downloads: {
          video: {
            filename: 'What is Cyber Bullying',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What is Cyber Bullying - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Nebezpečí od cizinců',
      goal: 'Pomoci žákům pochopit, co je nebezpečí od cizinců online, motivace za ním a jak ho rozpoznat.',
      bundle: {
        filename: 'Digital Abuse Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Hra',
            name: 'Skutečné nebo falešné?',
            filename: 'Game - Real or Fake',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Plenum – Shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      title: 'Influenceři',
      goal: 'Pomoci žákům pochopit, co jsou influenceři a co je motivuje.',
      bundle: {
        filename: 'Digital Abuse Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Scénáře',
            name: 'Příklady příspěvků influencerů, které jsou potenciálně škodlivé a které nejsou',
            filename: 'Scenarios - Examples of Influencers Posts That Are Potentially Harmful and Not Harmful',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Influenceři na sociálních sítích',
          },
          {
            title: 'Plenum – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Influenceři na sociálních sítích',
        supportText:
          'Použijte toto video k prozkoumání toho, jak influenceři formují názory a chování na sociálních sítích, a jaká odpovědnost s tímto dosahem přichází. Pozastavte a zeptejte se žáků, které influencery sledují a co je dělá důvěryhodné.',
        downloads: {
          video: {
            filename: 'Social Media Influencers',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Social Media Influencers - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Jak se vypořádat s chováním digitálních agresorů?',
      goal: 'Pomoci žákům vědět, co mohou udělat, aby se chránili před digitálním zneužíváním.',
      bundle: {
        filename: 'Digital Abuse Part 6 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Aktivita',
            name: 'Balíček návrhů od Bezpečnostního superhrdiny',
            filename: 'Activity - Safety Superhero Suggestion Pack',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Plenum – Shrnutí a neformální hodnocení',
          },
        ],
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
  ],
}

export const challengeDA = {
  title: 'Příběhy ze skutečného života',
  subtitle:
    'Rozhoduj se. Sleduj důsledky. Nauč se, jak zvládnout kyberšikanu, online tlak a digitální zneužívání.',
  howItWorks: 'Jak to funguje',
  instruction:
    'Projdi 10 scénářů digitálního zneužívání ze skutečného života. V každém klíčovém okamžiku si vyber, co dělat – a různé volby vedou k opravdu různým výsledkům. Získej až 3 hvězdičky za každý příběh tím, že najdeš nejbezpečnější cestu. Pokud dostaneš těžký konec, zkus příběh znovu a objev lepší cestu!',
  tip: 'Každý příběh se větví mnoha směry. Vždy existuje alespoň jedna cesta vedoucí k bezpečnému, pozitivnímu výsledku – ale musíš udělat správná rozhodnutí, abys ji našel!',
  tipLabel: 'Tip',
  yourBestScore: 'Tvé nejlepší skóre',
  bestResultDesc: 'Nejlepší výsledek z každého příběhu',
  storiesTitle: '📖 Příběhy',
  watchOutTitle: '🚩 Dávej pozor na',
  watchOutItems: [
    '🚩 Kohokoli, kdo žádá o soukromé fotografie',
    '🚩 Požadavky na heslo od partnera',
    '🚩 Cizince, kteří se ptají na tvou adresu nebo školu',
    '🚩 Tlak „Drž to v tajnosti"',
    '🚩 Zlomyslné příspěvky, screenshoty, falešné profily',
  ],
  welcomeDesc: 'Rozhoduj se pečlivě – různé cesty vedou k velmi odlišným výsledkům.',
  startStory: 'Začít příběh →',
  whatWeLearned: '💡 Co jsme se naučili:',
  tryDifferentPath: '↩ Zkus jinou cestu',
  nextStory: 'Další příběh →',
  seeFinalScore: '🎉 Zobrazit konečné skóre',
  allStoriesComplete: 'Všechny příběhy dokončeny!',
  finalScoreDesc: 'Takto si vedl ve všech 10 příbězích:',
  playAgain: 'Hrát znovu',
  rankChampion: '🏆 Šampion bezpečnosti',
  rankChampionMsg: 'Skvělé! Našel jsi nejbezpečnější cestu téměř v každé situaci.',
  rankDefender: '🛡️ Digitální obránce',
  rankDefenderMsg: 'Výborná práce! Zvládl jsi většinu situací moudře a bezpečně.',
  rankNavigator: '📚 Navigátor učení',
  rankNavigatorMsg: 'Dobrá snaha! Zopakuj některé příběhy, abys našel lepší cesty a získal více hvězdiček.',
  rankBeginning: '🌱 Začínám',
  rankBeginningMsg: 'Zkoušej různé cesty – každé opakování tě naučí něco nového!',
  stories: [
    {
      id: 1, title: 'Problém s memem', emoji: '😟', topic: 'Kyberšikana',
      nodes: [
        {
          id: 'start',
          text: 'Otevřeš telefon a uvidíš skupinový chat. Někdo jménem Jake zveřejnil zlý mem o tvé spolužačce Emmě, který si dělá legraci z jejího vzhledu. Už se mu líbilo 23 lidem. Co uděláš?',
          choices: ['👍 Lajkni mem, aby ses přizpůsobil ostatním', '📲 Přejeď dál a ignoruj to', '💬 Pošli Emmě soukromou podpůrnou zprávu']
        },
        {
          id: 'end_a',
          title: 'Součást problému',
          text: 'Lajknul jsi mem. Jake zveřejňuje další, ještě horší. Emma vidí tvé jméno v lajcích a je zničená. Učitel se to dozví a kontaktuje tvé rodiče.',
          lesson: 'Lajkování zlého obsahu je formou kyberšikany. Tvůj „lajk" není nikdy neviditelný – oběť vždy vidí, kdo ji podpořil.'
        },
        {
          id: 'mid_b',
          text: 'Přejedeš dál, ale příspěvky přibývají. Druhý den Emma sedí sama u oběda a vypadá velmi rozrušeně. Šikana se zhoršila.',
          choices: ['😶 Dál to ignoruj – není to tvůj problém', '🏫 Řekni učiteli, co se děje']
        },
        {
          id: 'end_b1',
          title: 'Tichý svědek',
          text: 'Uplyne několik týdnů. Emma chybí ve škole. Cítíš vinu, ale nic neřekneš. Šikana pokračuje bez výzvy.',
          lesson: 'Ignorování šikany ji nezastaví. Přihlížející mají skutečnou moc pomoci – mlčení je stále volba.'
        },
        {
          id: 'end_b2',
          title: 'Statečný oznamovatel',
          text: 'Učitel okamžitě jedná. Jake a jeho rodiče jsou přivoláni. Emma dostane podporu od školního poradce. Šikana přestane.',
          lesson: 'Říct důvěryhodné dospělé osobě je jedna z nejmocnějších věcí, které můžeš udělat. Není to práskání – je to ochrana někoho, kdo potřebuje pomoc.'
        },
        {
          id: 'mid_c',
          text: 'Emma odpovídá: „Moc díky… opravdu to bolelo. Nevěděla jsem, co dělat." Je vděčná, ale vystrašená. Příspěvky jsou stále nahoře.',
          choices: ['📢 Pomoz Emmě nahlásit každý příspěvek na platformě', '🤷 Řekni Emmě, aby to ignorovala, samo to přejde']
        },
        {
          id: 'end_c1',
          title: 'Digitální obránce',
          text: 'Ty a Emma nahlásíte každý příspěvek společně. Většina je odstraněna do dne. Navštívíte také školního poradce, který Emmu dále podpoří. Šikana přestane.',
          lesson: 'Oslovit PLUS podniknout kroky – nahlásit online a zapojit důvěryhodné dospělé – je zlatý standard reakce na kyberšikanu.'
        },
        {
          id: 'end_c2',
          title: 'Laskavost nestačí',
          text: 'Emma se snaží to ignorovat, ale příspěvky přibývají. Tvá laskavá zpráva pomohla, ale bez nahlášení nebo podpory dospělých šikana pokračuje.',
          lesson: 'Laskavost je skvělý začátek, ale to, co šikanu skutečně zastaví, je nahlášení a zapojení důvěryhodných dospělých.'
        },
      ],
    },
    {
      id: 2, title: 'Past screenshotů', emoji: '📸', topic: 'Soukromí a zrada',
      nodes: [
        {
          id: 'start',
          text: 'Poslal jsi soukromou zprávu své kamarádce Zoe o tom, že máš někoho rád. Zoe ji screenshotovala a bez tvého svolení sdílela ve velkém skupinovém chatu. Všichni komentují. Co uděláš?',
          choices: ['😡 Zveřejni rozzlobený veřejný příspěvek o tom, co Zoe udělala', '📱 Konfrontuj Zoe soukromě v DM', '📸 Ulož důkazy a řekni to důvěryhodné dospělé osobě']
        },
        {
          id: 'end_a',
          title: 'Oheň se oheňem',
          text: 'Veřejně zavoláš Zoe k zodpovědnosti. Zoe bojuje zpět. Desítky lidí se zapojí do dramatu. Teď je to plnohodnotná online válka a oba vypadáte špatně.',
          lesson: 'Veřejné odhalení online téměř vždy věci eskaluje. Zřídka přináší řešení, které hledáš.'
        },
        {
          id: 'mid_b',
          text: 'Pošleš Zoe DM: „Proč jsi to sdílela? Bylo to soukromé!" Zoe říká: „To byl jen vtip, zklidni se." Ale screenshot ještě nesmazala.',
          choices: ['😔 Přijmi její „omluvu" a tiše jdi dál', '🗣️ Pevně ji požádej, aby to smazala, a zapoj důvěryhodnou dospělou osobu']
        },
        {
          id: 'end_b1',
          title: 'Zameteno pod koberec',
          text: 'Zoe vlastně nechápe, proč to bylo špatné. Screenshot zůstává nahoře. Cítíš se ublíženě, ale nic se skutečně nevyřeší.',
          lesson: '„Byl to jen vtip" nikdy není omluva za sdílení soukromých zpráv. Přijmout špatné chování bez následků znamená, že se to může opakovat.'
        },
        {
          id: 'end_b2',
          title: 'Skutečné řešení',
          text: 'Pod tlakem a se zapojením dospělé osoby Zoe screenshot smaže a vede skutečný rozhovor o souhlasu a soukromí. Vaše přátelství se obnoví na zdravějších základech.',
          lesson: 'Klidná, ale pevná obhajoba soukromí – s podporou dospělé osoby – vede ke skutečné změně, nejen dočasnému klidu.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba pomůže nahlásit příspěvek na platformě a kontaktuje rodiče Zoe. Screenshot je odstraněn. Zoe se omluví.',
          choices: ['🤝 Přijmi její omluvu a pracuj na obnově přátelství', '🚫 Zablokuj Zoe – nechceš ji jako kamarádku']
        },
        {
          id: 'end_c1',
          title: 'Obnovená důvěra',
          text: 'S podporou dospělé osoby a upřímnou omluvou se situace správně vyřeší. Zoe chápe souhlas. Oba jdete dál.',
          lesson: 'Zdokumentování, nahlášení a prostor pro skutečnou omluvu proměňuje bolestnou zkušenost ve skutečný moment učení.'
        },
        {
          id: 'end_c2',
          title: 'Bezpečná vzdálenost',
          text: 'Screenshot je pryč a jsi chráněn. Blokování je platná hranice, když je důvěra narušena. Bezpečný výsledek správnými kroky.',
          lesson: 'Chránit sebe je vždy platné. Zapojení dospělé osoby k řešení situace byl přesně správný tah.'
        },
      ],
    },
    {
      id: 3, title: 'Herní vztek', emoji: '🎮', topic: 'Online herní obtěžování',
      nodes: [
        {
          id: 'start',
          text: 'Hraješ svou oblíbenou online hru a jiný hráč začne spamovat nenávistné zprávy – nadává ti a vyhrožuje. Ostatní v lobby to sledují. Co uděláš?',
          choices: ['💢 Odplať mu to vlastními urážkami', '🙉 Ignoruj zprávy a hraj dál', '🔇 Umlč ho, pořiď screenshot a nahlásit ho ve hře']
        },
        {
          id: 'end_a',
          title: 'Oba zabanováni',
          text: 'Hádáš se zpět. Oba jste nahlášeni. Systém označí tvůj účet. Oba dostanete ban – toxický hráč tě nahlásil jako první.',
          lesson: 'Reagovat nenávistí na nenávist tě také vystavuje riziku. Herní platformy často banují obě strany toxických výměn.'
        },
        {
          id: 'mid_b',
          text: 'Ignoruješ ho, ale eskaluje. Teď našel tvůj veřejný herní profil a zveřejňuje tam urážky, aby je viděli ostatní.',
          choices: ['🗑️ Smaž svůj profil, aby přestal', '📢 Nahlásit na platformě a říct to důvěryhodné dospělé osobě']
        },
        {
          id: 'end_b1',
          title: 'Útěk',
          text: 'Smazání profilu tohoto obtěžovatele prozatím zastaví. Ale přejde na další oběť. Žádné důsledky, žádná skutečná změna.',
          lesson: 'Chránit sebe je důležité, ale nahlášení zajistí, že obtěžovatel bude čelit důsledkům a nemůže to dělat ostatním.'
        },
        {
          id: 'end_b2',
          title: 'Hráč zabanován',
          text: 'Platforma prošetří a zabanuje účet obtěžovatele. Důvěryhodná dospělá osoba ti pomůže zkontrolovat nastavení soukromí a budeš se cítit podporován.',
          lesson: 'Nahlášení herního obtěžování funguje. Platformy berou tato hlášení vážně, zejména když jsou screenshoty uloženy jako důkaz.'
        },
        {
          id: 'mid_c',
          text: 'Umlčel jsi hráče a nahlásil ho se screenshoty. Hlášení je v přezkumu. Ale stále tě otřásá, co bylo řečeno.',
          choices: ['🗣️ Řekni důvěryhodné dospělé osobě, jak tě ta zkušenost ovlivnila', '😶 Nech si to pro sebe – už jsi to zvládl']
        },
        {
          id: 'end_c1',
          title: 'Nahlášení a podpora',
          text: 'Důvěryhodná dospělá osoba potvrdí tvé pocity a pomůže ti upravit nastavení soukromí. Platforma potvrdí, že hráč byl zabanován.',
          lesson: 'Nahlášení je důležité, ale stejně důležité je zpracování toho, jak tě online zneužívání zasáhlo. Důvěryhodné dospělé osoby mohou pomoci s obojím.'
        },
        {
          id: 'end_c2',
          title: 'Půl řešení',
          text: 'Hráč je zabanován, ale zážitek nesete sami. Cítíš se online bezpečněji, ale stále neklidně.',
          lesson: 'Technickou stránku jsi zvládl dokonale! Pamatuj: mluvit s někým o tom, jak se cítíš po online zneužití, je stejně důležité.'
        },
      ],
    },
    {
      id: 4, title: 'Falešný profil', emoji: '👤', topic: 'Vydávání se za jiného',
      nodes: [
        {
          id: 'start',
          text: 'Všimneš si falešného účtu na sociálních sítích používajícího fotky tvého kamaráda Sama. Zveřejňuje trapné věci a přidává Samovy spolužáky. Sam o tom ještě neví. Co uděláš?',
          choices: ['💬 Napiš falešnému účtu, ať přestane', '📞 Okamžitě řekni Samovi, aby věděl', '🚩 Nahlásit falešný účet A okamžitě říct Samovi']
        },
        {
          id: 'end_a',
          title: 'Nekrmte trolla',
          text: 'Falešný účet tě zablokuje a zrychlí zveřejňování. Teď začne cílit i na tebe. Přímé zapojení věci zhoršilo.',
          lesson: 'Kontaktování falešného nebo zneužívajícího účtu přímo věci téměř vždy zhorší. Nahlaste to raději platformě.'
        },
        {
          id: 'mid_b',
          text: 'Sam je v šoku a rozrušen. Chce napsat všem, aby vysvětlil, že je to falešné, ale neví, co jiného dělat. Účet je stále aktivní.',
          choices: ['📢 Pomoz Samovi nahlásit účet na platformě', '🗣️ Navrhni Samovi, aby lidem osobně řekl, že je to falešné']
        },
        {
          id: 'end_b1',
          title: 'Týmová práce vítězí',
          text: 'Ty a Sam nahlásíte účet společně. Platforma ho odstraní během několika hodin. Sam také řekne důvěryhodné dospělé osobě, která pomůže monitorovat budoucí pokusy.',
          lesson: 'Společné nahlášení falešných účtů je velmi účinné. Platformy berou vydávání se za jiného velmi vážně a jednají rychle.'
        },
        {
          id: 'end_b2',
          title: 'Pomalá reakce',
          text: 'Sam lidem osobně vysvětluje, ale falešný účet zůstává aktivní několik dní a způsobuje další trapas, než ho někdo jiný nakonec nahlásí.',
          lesson: 'Přímé nahlášení falešných účtů platformě je mnohem rychlejší a účinnější než snaha vysvětlit to každému individuálně.'
        },
        {
          id: 'mid_c',
          text: 'Platforma obdrží tvé hlášení a začne účet přezkoumávat. Sam je vděčný, že jsi jednal tak rychle.',
          choices: ['🏠 Řekni také důvěryhodné dospělé osobě, aby Sam cítil podporu', '⏳ Prostě počkej, až platforma zasáhne']
        },
        {
          id: 'end_c1',
          title: 'Plná ochrana',
          text: 'S podporou dospělé osoby a zásahem platformy je účet odstraněn. Sam se cítí skutečně chráněn. Škola je upozorněna, aby sledovala další pokusy.',
          lesson: 'Nahlášení platformě A zapojení důvěryhodné dospělé osoby poskytuje nejlepší možnou ochranu, když se někdo vydává za jinou osobu.'
        },
        {
          id: 'end_c2',
          title: 'Rychlá akce',
          text: 'Platforma odstraní účet. Sam je v úlevou. Skvělý výsledek díky rychlé a správné akci.',
          lesson: 'Okamžité nahlášení falešných účtů platformě je přesně správný tah. Rychlé nahlášení znamená rychlejší odstranění.'
        },
      ],
    },
    {
      id: 5, title: 'Vyloučen online', emoji: '😔', topic: 'Online vyloučení',
      nodes: [
        {
          id: 'start',
          text: 'Zjistíš, že tvá parta přátel vytvořila nový skupinový chat bez tebe. Plánují párty, na kterou jsi nebyl pozván, a ty vidíš, jak o tom veřejně píší. Cítíš se ublíženě a poníženě.',
          choices: ['📣 Zveřejni příspěvek o tom, jak tě bolí vyloučení', '💬 Pošli rozzlobenou zprávu celé skupině', '🤝 Napiš soukromě svému nejbližšímu příteli ve skupině']
        },
        {
          id: 'end_a',
          title: 'Veřejné zhroucení',
          text: 'Tvůj veřejný příspěvek přitáhne pozornost, ale hlavně trapas. Parta přátel se postaví do obrany. Drama se šíří po celé škole online.',
          lesson: 'Veřejné ventilování pocitů z vyloučení zřídka pomáhá a obvykle věci zhorší. Přímé soukromé rozhovory jsou mnohem účinnější.'
        },
        {
          id: 'end_b',
          title: 'Drama ve skupinovém chatu',
          text: 'Skupinový chat je nepříjemný. Někteří přátelé se cítí vinoví; jiní se naštvaní. Nic se skutečně nevyřeší a napětí přetrvává týdny.',
          lesson: 'Konfrontace celé skupiny najednou staví každého do obrany. Soukromé rozhovory jeden na jednoho fungují mnohem lépe.'
        },
        {
          id: 'mid_c',
          text: 'Tvá nejbližší kamarádka Mia přizná, že se cítila nucena tě vyloučit někým jiným ve skupině. Omluví se a říká, že chce pomoci věci napravit.',
          choices: ['🤝 Požádej Mii, aby za tebe promluvila ke skupině', '🏫 Řekni důvěryhodné dospělé osobě o záměrném vyloučení']
        },
        {
          id: 'end_c1',
          title: 'Skutečný spojenec',
          text: 'Mia promluví. Jsi znovu zahrnut a ten, kdo tě vylučoval, je konfrontován. Parta přátel se posílí díky upřímnosti.',
          lesson: 'Když je někdo ochoten pomoci, nech ho. Skuteční přátelé mluví za sebe navzájem – i když je to nepříjemné.'
        },
        {
          id: 'end_c2',
          title: 'Spojenec-dospělý',
          text: 'Důvěryhodná dospělá osoba pomůže zprostředkovat. Každý přemýšlí o tom, jak záměrné vyloučení bolí. Dynamika skupiny se mění k lepšímu.',
          lesson: 'Záměrné sociální vyloučení online je formou šikany. Důvěryhodná dospělá osoba může pomoci resetovat nezdravou dynamiku skupiny.'
        },
      ],
    },
    {
      id: 6, title: 'Soukromé fotografie', emoji: '📷', topic: 'Tlak na základě obrázků',
      nodes: [
        {
          id: 'start',
          text: 'Někdo, s kým chatuje online dva týdny, říká, že tě má opravdu rád, a žádá o soukromou fotografii. Slibuje, že nejdřív pošle svou, a říká, abys to před všemi tajil.',
          choices: ['📸 Pošli fotografii – zdají se skutečně milí', '😐 Řekni, že se s tím necítíš, ale pokračuj v chatování', '🚫 Odmítni, přestaň s nimi mluvit a okamžitě řekni důvěryhodné dospělé osobě']
        },
        {
          id: 'end_a',
          title: 'Past',
          text: 'Nikdy nic nepošlou zpět. Místo toho požadují více fotografií, nebo tvou sdílí se všemi. Jsi v pasti. Tomu se říká sextortion.',
          lesson: 'Posílání soukromých fotografií někomu, koho znáš pouze online, je extrémně nebezpečné. Sextortion – vydírání s obrázky – je trestný čin. Pokud se to stane, okamžitě řekni důvěryhodné dospělé osobě.'
        },
        {
          id: 'mid_b',
          text: '„Pokud mi nepošleš fotografii, očividně mi nevěříš." Říkají, že je se vším konec, pokud odmítneš. Cítíš se zmaten a pod tlakem.',
          choices: ['📸 Povolí a pošli fotografii, aby byl klid', '🚫 Zablokuj ho a okamžitě řekni důvěryhodné dospělé osobě']
        },
        {
          id: 'end_b1',
          title: 'Past (část 2)',
          text: 'Pošleš fotografii a vydírání začne okamžitě. Uvědomíš si, že tato osoba to plánovala od první zprávy.',
          lesson: 'Zdravé vztahy nikdy nezahrnují ultimáta. „Pošli fotografii, nebo je konec" je hlavní varovný signál predátora. Pokud se to kdy stane, řekni důvěryhodné dospělé osobě.'
        },
        {
          id: 'end_b2',
          title: 'Dobrý instinkt',
          text: 'Zablokuješ účet a řekneš to důvěryhodné dospělé osobě. Pomůže to nahlásit na platformě a vysvětlí, že se jedná o klasickou grooming taktiku používanou zločinci.',
          lesson: 'Odmítnutí tlaku a zapojení důvěryhodné dospělé osoby je vždy správné. Byl jsi manipulován – rozpoznání toho a jednání vyžaduje skutečnou odvahu.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba se podívá na konverzaci a je velmi znepokojená. Vysvětlí, že to vypadá jako grooming – někdo předstírající přátelskost, aby získal tvou důvěru. Chce to nahlásit.',
          choices: ['📋 Sdílej celou historii konverzace, aby bylo hlášení silnější', '😳 Vynech některé detaily, protože se stydíš']
        },
        {
          id: 'end_c1',
          title: 'Úplné přiznání',
          text: 'S úplnými důkazy dospělá osoba a platforma podniknou razantní kroky. Účet je odstraněn a nahlášen úřadům, které mohou řádně vyšetřovat.',
          lesson: 'Sdílení celého příběhu s důvěryhodnou dospělou osobou – i trapných části – jim dává nejlepší šanci tě chránit a zastavit zločince.'
        },
        {
          id: 'end_c2',
          title: 'Částečné hlášení',
          text: 'S omezenými detaily jsou přijata ochranná opatření. Jsi bezpečnější, ale celkový obraz by vyšetřování pomohl mnohem více.',
          lesson: 'Byl jsi statečný, že jsi promluvil. Sdílení všech detailů – i trapných – pomáhá dospělým tě plně chránit a zabránit tomu, aby se to stalo ostatním.'
        },
      ],
    },
    {
      id: 7, title: 'Nápomocný cizinec', emoji: '🕵️', topic: 'Online grooming',
      nodes: [
        {
          id: 'start',
          text: 'Někdo v herním chatu říká, že je mu 14 let, a posílá ti zprávy týden. Nyní se ptá, kam chodíš do školy, na tvou domácí adresu a v kolik hodin se vracíš domů sám každý den. Co uděláš?',
          choices: ['💬 Odpověz na otázky – zdají se jako normální dítě', '🤔 Dej vágní odpovědi a pokračuj v chatování', '🚫 Přestaň reagovat, zablokuj ho a okamžitě řekni důvěryhodné dospělé osobě']
        },
        {
          id: 'end_a',
          title: 'Příliš mnoho informací',
          text: 'Během příštího týdne znají tvou školu, rozvrh a adresu. Navrhnou osobní setkání. Uvědomíš si, že je něco velmi špatně.',
          lesson: 'Kdokoli se ptá online na tvou domácí adresu, název školy nebo denní rozvrh je vážný varovný signál – i když tvrdí, že je tvého věku.'
        },
        {
          id: 'mid_b',
          text: 'Daješ vágní odpovědi, ale tlačí stále silněji a teď žádají tvé telefonní číslo. Něco se zdá divné, ale nechceš vypadat nezdvořile.',
          choices: ['📱 Dej jim číslo – byli tak laskavi', '🚫 Zablokuj ho a řekni to důvěryhodné dospělé osobě']
        },
        {
          id: 'end_b1',
          title: 'Příliš propojeni',
          text: 'Použijí tvé číslo k nalezení tvých ostatních sociálních účtů a sledování tvé aktivity. Důvěryhodná dospělá osoba se to dozví a je velmi znepokojena.',
          lesson: 'Nikomu online nedlužíš své telefonní číslo ani osobní kontaktní údaje. Kdokoli, kdo je vymáhá, má špatné úmysly.'
        },
        {
          id: 'end_b2',
          title: 'Důvěryhodný instinkt',
          text: 'Důvěryhodná dospělá osoba potvrdí, že účet vypadá jako falešný profil dospělého. Pomohou ti ho nahlásit a společně zkontrolovat nastavení soukromí.',
          lesson: 'Jednat podle střevního pocitu a zapojit důvěryhodnou dospělou osobu je vždy správný krok, když se něco online zdá špatně.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba přezkoumá konverzaci a je velmi znepokojena. Vysvětlí, že se pravděpodobně jedná o grooming pokus – dospělý předstírající, že je dítě, aby získal tvou důvěru.',
          choices: ['📋 Poskytni celou konverzaci pro řádné hlášení', '🤐 Požádej, aby to bylo vyřízeno tiše bez zapojení úřadů']
        },
        {
          id: 'end_c1',
          title: 'Chráněn a silný',
          text: 'Účet je nahlášen platformě a policii. Dospělá osoba ti pomůže zpřísnit nastavení soukromí. Možná jsi ochránil sebe i ostatní děti.',
          lesson: 'Grooming je závažný trestný čin. Nahlášení s úplnými důkazy pomáhá úřadům zabránit tomu, aby se to stalo ostatním dětem.'
        },
        {
          id: 'end_c2',
          title: 'Bezpečnější, ale neúplné',
          text: 'Účet je zablokován, ale formálně nenahlášen. Jsi bezpečnější, ale tato osoba může jednoduše přejít na dalšího a zacílit na něj.',
          lesson: 'Grooming je příliš závažný, aby se dal řešit sám. Důvěra dospělé osobě při řádném podání hlášení chrání tebe i potenciální budoucí oběti.'
        },
      ],
    },
    {
      id: 8, title: 'Nenávist v komentářích', emoji: '💬', topic: 'Nenávistné projevy',
      nodes: [
        {
          id: 'start',
          text: 'Sleduješ živý herní stream a chat se plní rasistickými a nenávistnými komentáři zaměřenými na jednoho z hráčů. Komentáře přicházejí rychle. Napadený hráč vypadá viditelně rozrušeně.',
          choices: ['😂 Zasměj se na některých komentářích – je to jen internetový humor', '😶 Sleduj tiše bez zapojení', '🚩 Nahlásit nenávistné projevy a vyjadřovat se v chatu']
        },
        {
          id: 'end_a',
          title: 'Ne jen vtip',
          text: 'Zasmál ses. Hráč opustí stream v slzách. Screenshots tvého komentáře se objeví později. Cítíš stud a ostatní diváci tě nahlásí.',
          lesson: 'Rasistické urážky a cílené nenávistné projevy nikdy nejsou „jen internetový humor." Smát se s nimi tě dělá součástí způsobené újmy.'
        },
        {
          id: 'mid_b',
          text: 'Mlčíš. Napadený hráč se odpojí od streamu. Chat slaví, že ho prohnal. Cítíš se nesvůj z toho, co jsi právě viděl.',
          choices: ['💬 Zveřejni podpůrnou zprávu na obranu hráče', '❌ Zavři stream a zkus na to zapomenout']
        },
        {
          id: 'end_b1',
          title: 'Jeden hlas mění věci',
          text: 'Ostatní diváci uvidí tvou zprávu a začnou se také stavit. Nálada v chatu se mění. Více lidí nahlásí nejhorší přestupníky a některé účty jsou zabanují.',
          lesson: 'Jeden člověk, který se v nepřátelském chatu postaví za pravdu, může změnit celou dynamiku. Přihlížející mají skutečnou moc měnit náladu prostoru.'
        },
        {
          id: 'end_b2',
          title: 'Cena mlčení',
          text: 'Odejdeš, ale nenávist pokračuje. Napadený hráč možná nikdy nebude streamovat znovu. Tvé mlčení se zdálo bezpečnější, ale přispělo k problému.',
          lesson: 'Odejít chrání tvoji pohodu, ale nahlášení nenávistných projevů, než odejdeš, pomáhá zabránit jejich pokračování.'
        },
        {
          id: 'mid_c',
          text: 'Nahlásíš nejhorší komentáře a zveřejníš podpůrnou zprávu. Několik dalších diváků následuje tvůj příklad a také nahlásí. Hráč si toho všimne a cítí se méně sám.',
          choices: ['📣 Pohovor také s důvěryhodnou dospělou osobou nebo učitelem o tom, co jsi viděl', '✅ Udělal jsi dost – nech zbytek na platformě']
        },
        {
          id: 'end_c1',
          title: 'Vlnový efekt',
          text: 'Více hlášení je rychle zpracováno. Zvyšování povědomí o nenávistných projevech v herních prostorech u důvěryhodné dospělé osoby pomáhá vytvářet širší změnu.',
          lesson: 'Nahlášení nenávistných projevů A zvyšování povědomí u důvěryhodných dospělých dělá platformy bezpečnějšími pro všechny – nyní i v budoucnu.'
        },
        {
          id: 'end_c2',
          title: 'Dobrý občan',
          text: 'Hlášení jsou zpracována a některé účty jsou označeny. Hráč ti později poděkuje za to, že ses ozval v chatu.',
          lesson: 'Nahlášení nenávistných projevů A vyjadřování se v daném okamžiku je mocná kombinace. Výborně, žes podnikl kroky!'
        },
      ],
    },
    {
      id: 9, title: 'Příspěvek s obviněním', emoji: '📣', topic: 'Falešné fámy online',
      nodes: [
        {
          id: 'start',
          text: 'Někdo ze školy zveřejní na sociálních sítích o tobě zcela nepravdivé fámy. Rychle se to šíří – lidé to sdílejí a píšou zlé komentáře. Nevíš, kdo to zahájil, a jsi velmi rozrušen.',
          choices: ['😡 Zveřejni rozzlobenou odpověď, abys se veřejně bránil', '💬 Napiš každému, koho znáš, abys jim řekl pravdu', '📸 Vyfotograf vše a okamžitě řekni důvěryhodné dospělé osobě']
        },
        {
          id: 'mid_a',
          text: 'Tvá odpověď se stane virální. Lidé se o ní hádají. Původní pisatel ví, že tě zasáhl, a zveřejňuje ještě více, protože si reakce užívá.',
          choices: ['💢 Pokračuj v boji, abys vyčistil své jméno', '🗑️ Smaž svou odpověď a ucouvni']
        },
        {
          id: 'end_a1',
          title: 'Hraješ jejich hru',
          text: 'Hádka se špatně spiráluje. Učitelé se zapojí. Oba čelíte školním důsledkům – i když oni to zahájili.',
          lesson: 'Rozzlobená reakce na falešné fámy online živí drama a vystavuje tě také riziku důsledků. Nedávej jim reakci, kterou chtějí.'
        },
        {
          id: 'end_a2',
          title: 'Ustoupit',
          text: 'Smazání odpovědi bylo chytré. Drama se pomalu uklidní, ale původní příspěvek zůstává nahoře bez jakéhokoli skutečného důsledku pro osobu, která ho zveřejnila.',
          lesson: 'Smazání reaktivního příspěvku je chytrý tah. Doplň ho nahlášením původního obsahu a zapojením důvěryhodné dospělé osoby pro skutečné řešení.'
        },
        {
          id: 'end_b',
          title: 'Kontrola škod',
          text: 'Strávíš hodiny psaním lidem. Někteří ti věří; jiní ne. Je to vyčerpávající a příspěvek je stále nahoře, dosahující stále nové lidi.',
          lesson: 'Psaní každému individuálně je vyčerpávající a často neúčinné. Nahlášení příspěvku a zapojení důvěryhodné dospělé osoby je rychlejší a mocnější.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba ti pomůže nahlásit příspěvek pro obtěžování. Rychle je stažen. Společně přijdete na to, kdo ho s největší pravděpodobností zveřejnil.',
          choices: ['🤝 Souhlasit s zprostředkovaným rozhovorem s osobou, která to zveřejnila', '🚫 Zablokuj ho a jdi dál, když je příspěvek smazán']
        },
        {
          id: 'end_c1',
          title: 'Skutečné řešení',
          text: 'Zprostředkovaný rozhovor s podporou dospělé osoby odhalí, co stálo za fámou. Druhá osoba se omluví. Škola vytvoří nová pravidla, aby zabránila budoucím incidentům.',
          lesson: 'Dokumentování, nahlášení a – když je to bezpečné – řešení základní příčiny vede k nejlepším a nejtrvalejším výsledkům.'
        },
        {
          id: 'end_c2',
          title: 'Bezpečně a vyřešeno',
          text: 'Příspěvek je odstraněn a jsi chráněn. Blokování tě chrání do budoucna. Silný výsledek správnými kroky.',
          lesson: 'Rychlé odstranění škodlivého příspěvku pomocí dospělé osoby je skvělý výsledek. Blokování pro bezpečnost je chytrá hranice.'
        },
      ],
    },
    {
      id: 10, title: 'Tlak na heslo', emoji: '🔐', topic: 'Digitální zneužívání ve vztahu',
      nodes: [
        {
          id: 'start',
          text: 'Jsi ve vztahu dva měsíce. Tvůj partner říká: „Kdybys mě skutečně miloval a věřil mi, dal bys mi heslo, abych mohl kontrolovat tvé zprávy." Cítíš se nepříjemně. Co uděláš?',
          choices: ['🔑 Dej mu heslo – nemáš co skrývat', '🤥 Dej falešné heslo, aby přestala hádka', '🗣️ Klidně vysvětli, že zdravé vztahy nepotřebují sdílení hesel']
        },
        {
          id: 'end_a',
          title: 'Kontrola začíná',
          text: 'Partner čte všechny tvé zprávy a používá tvé účty k psaní tvým přátelům. Obviňuje tě z věcí na základě nesprávně pochopených konverzací. Kontrola se stupňuje.',
          lesson: 'Partner vyžadující hesla je formou digitálního zneužívání ve vztahu. Žádný zdravý vztah to nevyžaduje. Pokud se to stane tobě, pohovoř s důvěryhodnou dospělou osobou.'
        },
        {
          id: 'mid_b',
          text: 'Tvůj partner přijde na to, že heslo je falešné, a velmi se rozzlobí, obviňuje tě ze lhaní. Tlak se zdvojnásobí a požaduje skutečné heslo.',
          choices: ['🔑 Povolí a sdílej skutečné heslo', '🚪 Ukonči vztah a řekni důvěryhodné dospělé osobě o tlaku']
        },
        {
          id: 'end_b1',
          title: 'V pasti',
          text: 'Jakmile mají přístup, používají ho ke kontrole toho, s kým mluvíš. Tento vzorec kontrolního chování se stále více stupňuje.',
          lesson: 'Podvolit se digitální kontrole zřídka problém ukončí – obvykle způsobuje, že se kontrolní chování v průběhu času stupňuje.'
        },
        {
          id: 'end_b2',
          title: 'Osvobození',
          text: 'Opustit kontrolující vztah je těžké, ale správné. Důvěryhodná dospělá osoba potvrdí, že se jedná o digitální zneužívání, a pomůže ti pochopit, jak vypadají zdravé hranice ve vztahu.',
          lesson: 'Rozpoznání a opuštění kontrolního chování – i ve vztahu – vyžaduje skutečnou odvahu. Pro tvou bezpečnost je to vždy správné rozhodnutí.'
        },
        {
          id: 'mid_c',
          text: 'Tvůj partner reaguje špatně a říká, že ho očividně nemilujete. Držíš svůj postoj, ale stále tlačí a tlak se stupňuje.',
          choices: ['💪 Drž svou hranici a pohovoř s důvěryhodnou dospělou osobou o tlaku', '😔 Nakonec sdílej heslo, jen aby byl klid']
        },
        {
          id: 'end_c1',
          title: 'Zdravé hranice',
          text: 'Důvěryhodná dospělá osoba potvrdí, že vyžadování hesel je kontrola, ne láska. S jejich podporou uděláš jasné rozhodnutí o vztahu za svých vlastních podmínek.',
          lesson: 'Dobrý partner respektuje tvé soukromí. Vyžadování hesel je červená vlajka pro kontrolující vztah. Zasloužíš si vztah postavený na důvěře, ne dohledu.'
        },
        {
          id: 'end_c2',
          title: 'Dočasný klid',
          text: 'Krátkodobě se cítíš v úlevou, ale kontrolní chování pokračuje – teď to od tebe očekávají i nadále. Požadavek na větší přístup roste.',
          lesson: 'Podvoluji se tlaku na heslo nevyřeší problém kontroly. Stanovuje precedens. Kontrolní chování je třeba řešit, ne tolerovat.'
        },
      ],
    },
  ],
}
