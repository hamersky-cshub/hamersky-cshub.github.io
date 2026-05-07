// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim: 'Poskytnout přehled pohledu útočníka tím, že pomůžeme studentům rozpoznat techniky útočníků a pochopit motivy za kybernetickými útoky.',
  objectives: [
    'Rozvíjet porozumění studentů motivacím útočníků, včetně psychologických, sociálních a ekonomických faktorů.',
    'Budovat dovednosti studentů v rozpoznávání běžných technik útočníků.',
  ],
  outcomes: [
    'Rozumím motivům útočníků a dokážu uvést příklady psychologických, sociálních a ekonomických faktorů.',
    'Dokážu rozpoznat techniky útočníků v daných scénářích.',
  ],
  teachingGuide: {
    ariaLabel: 'Stáhnout výukového průvodce',
    download: 'Výukový průvodce pohledem útočníka',
  },
  parts: [
    {
      goal:
        'Pomoci dětem získat znalosti o konceptu důvěryhodné osoby a rozvíjet dovednosti v identifikaci kruhu důvěryhodných osob.',
      bundle: {
        filename: 'Attacker Perspective Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Pracovní list',
            name: 'Důvěryhodní lidé: Lidé kolem mě',
            filename: 'Worksheet - Trusteees People Around Me',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.1.2
            kind: 'Pracovní list',
            name: 'Kruhy důvěry',
            filename: 'Worksheet - Circles of Trust',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Definovat kruh důvěryhodných osob',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Představit koncept útočníka a motivaci z pohledu útočníka.',
      bundle: {
        filename: 'Attacker Perspective Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Karty',
            name: 'Identifikovat chování',
            filename: 'Cards - Identify the Behaviour',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.2.2
            kind: 'Karty',
            name: 'Rozpoznat postavy',
            filename: 'Cards - Recognise the Characters',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.2.4
            kind: 'Obrázek',
            name: 'Motivace útočníků',
            filename: 'Image - Attacker Motivations',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.2.5
            kind: 'Pracovní list',
            name: 'Analýza útoku',
            filename: 'Worksheet - Attack Analysis',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Definovat útočníka v kybernetické bezpečnosti',
          },
          {
            title: 'Pochopit motivaci útočníka',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Kdo stojí za kybernetickými útoky?',
        supportText:
          'Použijte toto video, aby si studenti dokázali představit skutečné lidi a motivy za kybernetickými útoky, přesahující stereotyp osamělého hackera. Zastavte se a zeptejte se, kdo si myslí, že je zodpovědný a proč.',
        downloads: {
          video: {
            filename: 'Who is Behind Cyber Attacks',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Who is Behind Cyber Attacks - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Představit základní techniky (taktiky) relevantní pro děti, které útočníci používají k dosažení svých cílů.',
      bundle: {
        filename: 'Attacker Perspective Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Situace',
            name: 'Smishing a vydávání se za jinou osobu',
            filename: 'Situation - Smishing and Impersonation',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.2
            kind: 'Obrázek',
            name: 'Běžné techniky protivníků',
            filename: 'Image - Common Adversary Techniques',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Porozumět vzorcům chování',
          },
          {
            title: 'Porozumět cestám útoku',
          },
          {
            title: 'Plenární zasedání – Shrnutí a neformální hodnocení',
          },
        ],
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

export const challengeAP = {
  title: 'V mysli hackera',
  subtitle:
    'Jste etický hacker, který skenuje profil na sociálních sítích. Klikněte na vše, co vypadá jako bezpečnostní slabina – ale hlídejte si životy!',
  howItWorks: 'Jak to funguje',
  instruction:
    'Prozkoumejte tento profil na sociálních sítích, jako byste byli hacker hledající slabá místa. Téměř vše na obrazovce je klikatelné – přemýšlejte pečlivě, protože kliknutí na něco, co není skutečnou zranitelností, vás stojí život!',
  tipLabel: 'Tip',
  tip: 'Jsou zde přesně 4 skutečné zranitelnosti skryté mezi mnoha nevinně vypadajícími prvky. Ne vše, na co lze kliknout, je bezpečnostní slabina!',
  livesTitle: 'Životy',
  livesDesc: '3 špatné kliknutí a konec hry',
  vulnerabilitiesFoundTitle: '🔍 Nalezené zranitelnosti',
  vulnerabilitiesEmpty: 'Zatím žádné nenalezeny…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Co útočníci cílí',
  attackerTargets: [
    '🚩 Slabá nebo odhalená hesla',
    '🚩 HTTP místo HTTPS',
    '🚩 Sdílení polohy v reálném čase',
    '🚩 Celé datum narození veřejně viditelné',
    '🚩 Odpovědi na bezpečnostní otázky odhaleny',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Aktivní nyní',
    bioText: '16 · Gamer 🎮 · Manga Fan · Coffee ☕',
    aboutTitle: 'O mně',
    statsFriendsLabel: 'Přátelé',
    statsFollowingLabel: 'Sledování',
    bornText: 'Narozen/a 14. června 2008',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Jméno mazlíčka: Whiskers',
    post1Time: '📍 Nákupní centrum v centru · Právě teď',
    post1Body: 'Právě jsem si dal/a kávu ☕ Je někdo poblíž? Přijďte mě najít u stánků s jídlem! 😄',
    post1Badge: '🛍️ Centrum Mall — přihlášeno',
    post2Time: 'Před 2 hodinami',
    post2Body: 'Právě jsem se vrátil/a ze školy! Dáváme si pizzu s rodinou 🍕 Nejlepší večer vůbec!',
    actionLike: 'To se mi líbí',
    actionComment: 'Komentář',
    actionShare: 'Sdílet',
  },
  vulnFoundSuffix: '/ 4 zranitelností nalezeno',
  tryAgain: 'Zkusit znovu',
  winTitle: 'Výborně!',
  winMsg: 'Odhalili jste všechny 4 zranitelnosti jako skutečný bezpečnostní výzkumník. Teď víte, jak útočníci přemýšlejí!',
  loseTitle: 'Konec hry!',
  loseMsgTemplate:
    'Došly vám životy! Našli jste {found} ze {total} zranitelností. Ty zmeškané jsou nyní zvýrazněny červeně.',
  attackerVoiceInitial: 'Zajímavý profil… nechte mě prohledat slabiny.',
  attackerVoiceWin: '🏆 Působivé! Našli jste všechny {total} slabiny. Přemýšlíte jako hacker!',
  attackerVoiceLose: '💀 Příliš mnoho chyb. Příště si profil prohlédněte pečlivěji.',
  attackerVoiceAlreadyTagged: 'Již označeno: {label}.',
  attackerVoiceCorrect: '🔓 Nalezena zranitelnost: {label}! {explain}',
  attackerVoiceWrong: 'Není to zranitelnost — {explain}',
  hotspots: [
    {
      id: 'http',
      label: 'Nešifrované připojení (HTTP)',
      explain: 'Tato stránka používá HTTP místo HTTPS. Vše, co zde zadáte — včetně hesel — cestuje zcela nešifrovaně a může být zachyceno kýmkoli ve stejné síti.'
    },
    { id: 'avatar',
      label: 'Profilový obrázek',
      explain: 'Profilové fotografie jsou standardní součástí sociálních médií. Samy o sobě nejsou bezpečnostním rizikem!'
    },
    {
      id: 'username',
      label: 'Zobrazované jméno / uživatelské jméno',
      explain: 'Zobrazení jména a @přezdívky je na sociálních platformách zcela normální. Není to zranitelnost.'
    },
    {
      id: 'online',
      label: 'Stav aktivity',
      explain: 'Zobrazení, kdy jste online, je běžná funkce. Je to menší otázka soukromí, ale ne kritická bezpečnostní zranitelnost.'
    },
    {
      id: 'bio',
      label: 'Bio / Zájmy',
      explain: 'Uvádění obecných koníčků, jako je hraní nebo anime, je v pořádku. Neodhaluje to citlivá data účtu.'
    },
    {
      id: 'followers',
      label: 'Počet sledujících / přátel',
      explain: 'Počty přátel a sledujících jsou normální funkcí sociálních médií. Není to bezpečnostní zranitelnost!'
    },
    {
      id: 'birthday',
      label: 'Celé datum narození odhaleno',
      explain: "Odhalení celého data narození je nebezpečné! Útočníci používají narozeniny k hádání hesel (např. 'alex2008'), odpovídání na bezpečnostní otázky a obcházení obnovy účtu."
    },
    {
      id: 'email',
      label: 'E-mail v profilu',
      explain: 'Zobrazení e-mailu může přilákat spam, ale ve srovnání s odhaleným heslem nebo bezpečnostní odpovědí je to relativně menší problém.'
    },
    {
      id: 'petname',
      label: 'Jméno mazlíčka odhaleno',
      explain: 'Odhalení jména mazlíčka mohou útočníci použít k hádání bezpečnostních odpovědí nebo k vytváření přesvědčivějších útoků sociálního inženýrství.'
    },
    {
      id: 'location',
      label: 'Vysílání polohy v reálném čase',
      explain: 'Tento příspěvek odhaluje přesnou polohu Alexe právě teď! Kdokoli — včetně cizinců a útočníků — může vidět, kde se Alex v tuto chvíli nachází. Sdílení polohy v reálném čase je vážné bezpečnostní riziko.'
    },
    {
      id: 'post2',
      label: 'Obecný příspěvek',
      explain: 'Příspěvky o každodenních aktivitách, jako je pojídání pizzy, jsou zcela v pořádku. Neodhalují žádné citlivé bezpečnostní informace!'
    },
    {
      id: 'like1',
      label: 'Tlačítko To se mi líbí',
      explain: 'Označování příspěvků jako oblíbených je zcela normální a neškodná interakce na sociálních médiích!'
    },
    {
      id: 'comment1',
      label: 'Tlačítko Komentář',
      explain: 'Možnost komentovat je standardní funkcí sociálních médií. Není to zranitelnost!'
    },
    {
      id: 'share1',
      label: 'Tlačítko Sdílet',
      explain: 'Sdílení příspěvků je základní funkcí sociálních médií. Samotné tlačítko není bezpečnostním problémem!'
    },
    {
      id: 'like2',
      label: 'Tlačítko To se mi líbí',
      explain: 'Označování příspěvků jako oblíbených je zcela normální a neškodné!'
    },
    {
      id: 'comment2',
      label: 'Tlačítko Komentář',
      explain: 'Komentáře jsou standardní funkcí sociálních médií!'
    },
  ],
}
