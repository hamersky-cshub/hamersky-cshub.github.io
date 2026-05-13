// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim: 'Å gi en oversikt over angriperperspektivet ved å hjelpe elever å gjenkjenne angriperteknikker og forstå motivene bak cyberangrep.',
  objectives: [
    'Å utvikle elevenes forståelse av angripermotivasjoner, inkludert psykologiske, sosiale og økonomiske faktorer.',
    'Å bygge elevenes ferdigheter i å gjenkjenne vanlige angriperteknikker.',
  ],
  outcomes: [
    'Jeg forstår angriperes motiver og kan gi eksempler knyttet til psykologiske, sosiale og økonomiske faktorer.',
    'Jeg kan gjenkjenne angriperteknikker i gitte scenarioer.',
  ],
  parts: [
    {
      goal:
        'Hjelpe barn til å tilegne seg kunnskap om konseptet med en betrodd person og utvikle ferdigheter i å identifisere kretsen av betrodde personer.',
      bundle: {
        filename: 'Attacker Perspective Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Arbeidsark',
            name: 'Betrodde personer: mennesker rundt meg',
            filename: 'Worksheet - Trusteees People Around Me',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.1.2
            kind: 'Arbeidsark',
            name: 'Tillitssirkler',
            filename: 'Worksheet - Circles of Trust',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Definer kretsen av betrodde personer',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Introdusere konseptet med en angriper og motivasjon fra angriperperspektivet.',
      bundle: {
        filename: 'Attacker Perspective Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Kort',
            name: 'Identifiser atferden',
            filename: 'Cards - Identify the Behaviour',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.2.2
            kind: 'Kort',
            name: 'Gjenkjenn karakterene',
            filename: 'Cards - Recognise the Characters',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.2.4
            kind: 'Bilde',
            name: 'Angripermotivasjoner',
            filename: 'Image - Attacker Motivations',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.2.5
            kind: 'Arbeidsark',
            name: 'Angrepsanalyse',
            filename: 'Worksheet - Attack Analysis',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Definer en cybersikkerhetsangriper',
          },
          {
            title: 'Forstå angriperens motivasjon',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Hvem står bak cyberangrep?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å se for seg de virkelige menneskene og motivene bak cyberangrep, utover stereotypen med den ensomme hackeren. Pause for å spørre hvem de forestiller seg er ansvarlig og hvorfor.',
        downloads: {
          video: {
            filename: 'Who is Behind Cyber Attacks',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Who is Behind Cyber Attacks - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Introdusere de grunnleggende teknikkene (taktikkene) som er relevante for barn og som angripere bruker for å nå sine mål.',
      bundle: {
        filename: 'Attacker Perspective Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Situasjon',
            name: 'Smishing og identitetstyveri',
            filename: 'Situation - Smishing and Impersonation',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.3.2
            kind: 'Bilde',
            name: 'Vanlige angripeteknikker',
            filename: 'Image - Common Adversary Techniques',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Forstå atferdsmønstre',
          },
          {
            title: 'Forstå angrepsveier',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
    },
  ],
  otherModulesDivider: 'Utforsk andre emner',
  otherModulesTitle: 'Andre moduler',
  otherModulesSubtitle: 'Bla gjennom relaterte moduler og fortsett å lære.',
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
  title: 'I hackerens sinn',
  subtitle:
    'Du er en etisk hacker som skanner en sosial medieprofil. Klikk på alt som ser ut som en sikkerhetsfeil – men pass på livene dine!',
  howItWorks: 'Slik fungerer det',
  instruction:
    'Undersøk denne sosiale medieprofilen som om du var en hacker på jakt etter svake punkter. Nesten alt på skjermen kan klikkes – tenk nøye, for å klikke på noe som ikke er en ekte sårbarhet koster deg et liv!',
  tipLabel: 'Tips',
  tip: 'Det er nøyaktig 4 ekte sårbarheter skjult blant mange uskyldige elementer. Ikke alt som kan klikkes er en sikkerhetsfeil!',
  livesTitle: 'Liv',
  livesDesc: '3 feil klikk og spillet er over',
  vulnerabilitiesFoundTitle: '🔍 Oppdagede sårbarheter',
  vulnerabilitiesEmpty: 'Ingen funnet ennå…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Hva angripere er ute etter',
  attackerTargets: [
    '🚩 Svake eller eksponerte passord',
    '🚩 HTTP i stedet for HTTPS',
    '🚩 Sanntidsdeling av posisjon',
    '🚩 Full fødselsdato synlig offentlig',
    '🚩 Svar på sikkerhetsspørsmål eksponert',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Aktiv nå',
    bioText: '16 · Gamer 🎮 · Manga Fan',
    aboutTitle: 'Om meg',
    statsFriendsLabel: 'Venner',
    statsFollowingLabel: 'Følger',
    bornText: 'Født 14. juni 2008',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Kjæledyrnavn: Whiskers',
    post1Time: '📍 Sentrum kjøpesenter · Akkurat nå',
    post1Body: 'Tok meg nettopp en kaffe ☕ Er noen i nærheten? Finn meg ved foodcourtene! 😄',
    post1Badge: '🛍️ Sentrum mall — sjekket inn',
    post2Time: 'For 2 timer siden',
    post2Body: 'Kom akkurat hjem fra skolen! Spiser pizza med familien 🍕 Beste kveld noensinne!',
    actionLike: 'Liker',
    actionComment: 'Kommenter',
    actionShare: 'Del',
  },
  vulnFoundSuffix: '/ 4 sårbarheter funnet',
  tryAgain: 'Prøv igjen',
  winTitle: 'Utmerket jobbet!',
  winMsg: 'Du oppdaget alle 4 sårbarhetene som en ekte sikkerhetsanalytiker. Nå vet du hvordan angripere tenker!',
  loseTitle: 'Spillet er over!',
  loseMsgTemplate:
    'Du gikk tom for liv! Du fant {found} av {total} sårbarheter. De du gikk glipp av er nå uthevet i rødt.',
  attackerVoiceInitial: 'Interessant profil… la meg skanne etter svakheter.',
  attackerVoiceWin: '🏆 Imponerende! Du fant alle {total} svakheter. Du tenker som en hacker!',
  attackerVoiceLose: '💀 For mange feil. Studer profilen mer nøye neste gang.',
  attackerVoiceAlreadyTagged: 'Allerede merket: {label}.',
  attackerVoiceCorrect: '🔓 Sårbarhet funnet: {label}! {explain}',
  attackerVoiceWrong: 'Ikke en sårbarhet — {explain}',
  hotspots: [
    {
      id: 'http',
      label: 'Ukryptert tilkobling (HTTP)',
      explain: 'Denne siden bruker HTTP i stedet for HTTPS. Alt du skriver her – inkludert passord – reiser fullstendig ukryptert og kan fanges opp av hvem som helst på samme nettverk.'
    },
    { id: 'avatar',
      label: 'Profilbilde',
      explain: 'Profilbilder er en standarddel av sosiale medier. De er ikke en sikkerhetsrisiko i seg selv!'
    },
    {
      id: 'username',
      label: 'Visningsnavn / brukernavn',
      explain: 'Å vise navn og @handle er helt normalt på sosiale plattformer. Ikke en sårbarhet.'
    },
    {
      id: 'online',
      label: 'Aktivitetsstatus',
      explain: 'Å vise når du er online er en vanlig funksjon. Det er et lite personvernhensyn, men ikke en kritisk sikkerhetssårbarhet.'
    },
    {
      id: 'bio',
      label: 'Bio / Interesser',
      explain: 'Å liste opp generelle hobbyer som gaming eller anime er greit. Det eksponerer ikke sensitiv kontoinformasjon.'
    },
    {
      id: 'followers',
      label: 'Antall følgere / venner',
      explain: 'Antall venner og følgere er en normal sosial mediefunksjon. Ikke en sikkerhetssårbarhet!'
    },
    {
      id: 'birthday',
      label: 'Full fødselsdato eksponert',
      explain: "Å eksponere full fødselsdato er farlig! Angripere bruker fødselsdager til å gjette passord (f.eks. 'alex2008'), svare på sikkerhetsspørsmål og omgå kontogjenoppretting."
    },
    {
      id: 'email',
      label: 'E-post i profilen',
      explain: 'Å vise en e-post kan tiltrekke spam, men sammenlignet med et eksponert passord eller sikkerhetsvar er det et relativt lite problem.'
    },
    {
      id: 'petname',
      label: 'Kjæledyrnavn eksponert',
      explain: 'Å eksponere kjæledyrets navn kan brukes av angripere til å gjette sikkerhetssvar eller lage mer overbevisende sosiale ingeniørangrep.'
    },
    {
      id: 'location',
      label: 'Sanntidsposisjon kringkastet',
      explain: 'Dette innlegget avslører Alexs nøyaktige posisjon akkurat nå! Alle – inkludert fremmede og angripere – kan se hvor Alex er i dette øyeblikket. Sanntidsdeling av posisjon er en alvorlig sikkerhetsrisiko.'
    },
    {
      id: 'post2',
      label: 'Generelt innlegg',
      explain: 'Å legge ut om hverdagslige aktiviteter som å spise pizza er helt greit. Det eksponerer ingen sensitiv sikkerhetsinformasjon!'
    },
    {
      id: 'like1',
      label: 'Liker-knapp',
      explain: 'Å like innlegg er en helt normal og ufarlig sosial medieinteraksjon!'
    },
    {
      id: 'comment1',
      label: 'Kommenter-knapp',
      explain: 'Muligheten til å kommentere er en standard sosial mediefunksjon. Ikke en sårbarhet!'
    },
    {
      id: 'share1',
      label: 'Del-knapp',
      explain: 'Å dele innlegg er en grunnleggende sosial mediefunksjon. Selve knappen er ikke et sikkerhetsproblem!'
    },
    {
      id: 'like2',
      label: 'Liker-knapp',
      explain: 'Å like innlegg er helt normalt og ufarlig!'
    },
    {
      id: 'comment2',
      label: 'Kommenter-knapp',
      explain: 'Kommentarer er en standard sosial mediefunksjon!'
    },
  ],
}
