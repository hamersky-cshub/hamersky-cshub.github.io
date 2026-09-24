// ---------------------------------------------------------------------------
// Data Privacy (DP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Data Privacy module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDP = {
  aim: 'Å hjelpe elever med å gjenkjenne hva som teller som personopplysninger, forstå hvorfor personvern er viktig, og ta tryggere valg før de deler informasjon på nett.',
  objectives: [
    'Definere personopplysninger og identifisere hva som er sensitivt.',
    'Oppmuntre til gjennomtenkt deling og samtykkebaserte valg.',
    'Bygge bevissthet om personverninnstillinger og trygge standarder.',
  ],
  outcomes: [
    'Gjenkjenne vanlige typer personlig informasjon.',
    'Forklare hvordan data kan overføres og lagres på nett.',
    'Anvende enkle personvernregler før deling eller posting.',
  ],
  parts: [
    {
      goal: 'Hjelpe elever til å forstå hva personopplysninger er, identifisere ulike typer sensitiv informasjon og gjenkjenne hvorfor det er viktig å beskytte dem.',
      bundle: {
        filename: 'Personvern - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 4.1.2
            kind: 'Sorteringskort',
            name: 'Privat eller offentlig',
            filename: 'Sorteringskort - Privat eller offentlig',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.1.3
            kind: 'Arbeidsark',
            name: 'Refleksjon: Offentlige vs. private data',
            filename: 'Arbeidsark - Refleksjon Offentlige vs. private data',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er personopplysninger?',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.1
        title: 'Hva er private data?',
        supportText:
          'Bruk denne videoen til å introdusere konseptet med private data og starte en diskusjon om typer informasjon elever deler hver dag. Pause for å spørre elever hvilke detaljer de anser som private.',
        downloads: {
          video: {
            filename: 'Hva er private data',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er private data - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hvordan og hvorfor data deles på nett, viktigheten av samtykke og hvordan man tar gjennomtenkte beslutninger før man deler personlig informasjon.',
      bundle: {
        filename: 'Personvern - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 4.2.1
            kind: 'Bilde',
            name: 'Del på nett: Trygt vs. risikabelt',
            filename: 'Bilde - Del på nett Trygt vs. risikabelt',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.2.2
            kind: 'Scenariokort',
            name: 'Rollespill',
            filename: 'Scenariokort - Rollespill',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.2.3
            kind: 'Arbeidsark',
            name: 'Del eller ikke del',
            filename: 'Arbeidsark - Del eller ikke del',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hvordan deles data?',
          },
          {
            title: 'Samtykke og tillatelser',
          },
          {
            title: 'Plenum - Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Hjelpe elever til å oppdage hva et digitalt fotavtrykk er, forstå hvordan hverdagslige nettaktiviteter etterlater varige spor, og vurdere den langsiktige innvirkningen av nettadferd.',
      bundle: {
        filename: 'Personvern - pakke - del 3',
      },
      included: {
        materials: [
          {
            // ID: 4.3.2
            kind: 'Bilde',
            name: 'Tegneseriehistorie: En dag i Sams nettliv',
            filename: 'Bilde - Tegneseriehistorie En dag i Sams nettliv',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.3.3
            kind: 'Arbeidsark',
            name: 'Spor Sams fotavtrykk',
            filename: 'Arbeidsark - Spor Sams fotavtrykk',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.3.4
            kind: 'Skjema',
            name: 'Spillebrett: Verdien av personvern',
            filename: 'Skjema - Spillebrett Verdien av personvern',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.3.5
            kind: 'Spillsett',
            name: 'Kort: Verdien av personvern',
            filename: 'Spillsett - Kort Verdien av personvern',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er et digitalt fotavtrykk?',
          },
          {
            title: 'Kartlegge dine nettspor',
          },
          {
            title: 'Plenum - Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.3.1
        title: 'Hva er et digitalt fotavtrykk?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å visualisere datasporen de etterlater på nett. Oppmuntre til refleksjon over hvilke av deres nylige aktiviteter som kan ha skapt et fotavtrykk.',
        downloads: {
          video: {
            filename: 'Hva er et digitalt fotavtrykk',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er et digitalt fotavtrykk - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å lære praktiske strategier for å gjennomgå og administrere det digitale fotavtrykket sitt, inkludert hvordan man justerer personverninnstillinger og fjerner uønskede data.',
      bundle: {
        filename: 'Personvern - pakke - del 4',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Bilde',
            name: 'Et eksempel på grunnleggende innstillinger',
            filename: 'Bilde - Et eksempel på grunnleggende innstillinger',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.2
            kind: 'Arbeidsark',
            name: 'Fiks denne profilen!',
            filename: 'Arbeidsark - Fiks denne profilen',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.3
            kind: 'Arbeidsark',
            name: 'Personverntips for barn',
            filename: 'Arbeidsark - Personverntips for barn',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.4
            kind: 'Arbeidsark',
            name: 'Plakatmal',
            filename: 'Arbeidsark - Plakatmal',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.6
            kind: 'Arbeidsark',
            name: 'Gåte: Bruk av digitale spor «Medlemmer av Brain Fights-laget»',
            filename: 'Arbeidsark - Gåte Bruk av digitale spor Medlemmer av Brain Fights-laget',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Gjennomgå det digitale fotavtrykket ditt',
          },
          {
            title: 'Administrere personverninnstillinger',
          },
          {
            title: 'Plenum - Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.4.5
        title: 'Beskytte personopplysningene dine på nett',
        supportText:
          'Bruk denne videoen til å introdusere konseptet med personopplysninger og starte en diskusjon om typer informasjon elever deler hver dag.',
        downloads: {
          video: {
            filename: 'Beskytte personopplysningene dine på nett',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Beskytte personopplysningene dine på nett - Undertekster',
            ariaLabel: 'Last ned undertekster',
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
  title: 'Digitalt fotavtrykk-sortering',
  subtitle: 'Sorter hver aktivitet i riktig kategori. Lær hvilke av dine hverdagslige handlinger som etterlater spor på nett!',
  howItWorks: 'Slik fungerer det',
  instruction: 'Dra hvert aktivitetskort inn i sonen det hører til. På mobil, trykk på et kort for å velge det, deretter trykk på en slippsone.',
  tip: 'Tenk over om aktiviteten involverer internett, en app eller et nettsted. Hvis den gjør det, etterlater den sannsynligvis et digitalt fotavtrykk!',
  tipLabel: 'Tips',
  tryAgain: 'Prøv igjen',
  activitiesToSort: 'Aktiviteter å sortere',
  leavesFootprint: 'Etterlater et fotavtrykk',
  dragOnlineHere: 'Dra nettaktiviteter hit',
  noFootprint: 'Ingen fotavtrykk',
  dragOfflineHere: 'Dra frakoblede aktiviteter hit',
  correct: 'Riktig! 🎯',
  tryOtherZone: 'Ikke helt — prøv den andre sonen!',
  winTitle: 'Fantastisk! Du sorterte dem alle!',
  winMessage: 'Du vet nå hvilke aktiviteter som etterlater et digitalt fotavtrykk. Husk: hvert klikk, søk og innlegg skaper et spor på nett!',
  playAgain: 'Spill igjen',
  activities: [
    {
      text: 'Poste et bilde på Instagram',
      category: 'footprint',
      emoji: '📸',
      explanation: 'Bilder du deler på nett, forblir på servere og kan finnes av hvem som helst — til og med år senere!',
    },
    {
      text: 'Lese en papirbok hjemme',
      category: 'no-footprint',
      emoji: '📖',
      explanation: 'Ingen internettforbindelse betyr at det ikke opprettes noe digitalt spor.',
    },
    {
      text: 'Søke etter svar på Google',
      category: 'footprint',
      emoji: '🔍',
      explanation: 'Søkemotorer registrerer hva du leter etter og bruker det til å vise deg personaliserte resultater.',
    },
    {
      text: 'Spille fotball ute',
      category: 'no-footprint',
      emoji: '⚽',
      explanation: 'Utendørsaktiviteter uten telefon eller app etterlater ingen digital registrering.',
    },
    {
      text: 'Sende en melding på WhatsApp',
      category: 'footprint',
      emoji: '💬',
      explanation: 'Meldinger lagres på servere og oppretter en permanent registrering av samtalene dine.',
    },
    {
      text: 'Tegne et bilde med fargestifter',
      category: 'no-footprint',
      emoji: '🖍️',
      explanation: 'Tradisjonell kunst med fysiske materialer oppretter ingen nettdata.',
    },
    {
      text: 'Opprette en konto på en spillnettside',
      category: 'footprint',
      emoji: '🎮',
      explanation: 'Registrering lagrer navnet ditt, e-postadressen og hver handling du utfører på siden.',
    },
    {
      text: 'Sykle rundt i nabolaget',
      category: 'no-footprint',
      emoji: '🚲',
      explanation: 'Med mindre du bruker en sporingsapp, er sykling en rent frakoblet aktivitet.',
    },
    {
      text: 'Se videoer på YouTube',
      category: 'footprint',
      emoji: '▶️',
      explanation: 'YouTube sporer hver video du ser og bruker det til å anbefale mer innhold.',
    },
    {
      text: 'Skrive i dagboken din på papir',
      category: 'no-footprint',
      emoji: '📓',
      explanation: 'En papirdagbok har ingen internettforbindelse — tankene dine forblir virkelig private.',
    },
    {
      text: 'Like en venns TikTok-video',
      category: 'footprint',
      emoji: '❤️',
      explanation: 'Hvert like du gir, registreres og former din nettilstedeværelse og anbefalinger.',
    },
    {
      text: 'Spille et brettspill med familien',
      category: 'no-footprint',
      emoji: '🎲',
      explanation: 'Brettspill er frakoblet moro — ingen data opprettes eller lagres noe sted.',
    },
    {
      text: 'Fylle ut en nettquiz',
      category: 'footprint',
      emoji: '📝',
      explanation: 'Nettsteder samler hvert svar du skriver inn og kan dele det med andre.',
    },
    {
      text: 'Snakke med venner på skolen',
      category: 'no-footprint',
      emoji: '🗣️',
      explanation: 'Ansikt-til-ansikt samtaler etterlater ingen digitalt spor i det hele tatt.',
    },
    {
      text: 'Legge igjen en kommentar på en blogg',
      category: 'footprint',
      emoji: '💻',
      explanation: 'Kommentarer er offentlige, koblet til navnet ditt og forblir på nettstedet for alltid.',
    },
  ],
}
