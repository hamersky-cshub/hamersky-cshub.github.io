// ---------------------------------------------------------------------------
// Digital Citizenship (DC) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Citizenship module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDC = {
  aim: 'Å gi en forståelse av hva digitalt medborgerskap er og hvordan man følger kjerneprinsippene.',
  objectives: [
    'Å understreke viktigheten av digitalt medborgerskap.',
    'Å introdusere konseptet digitalt medborgerskap og dets prinsipper om rettigheter, ansvar og respekt i digitale miljøer.',
    'Å utvikle elevenes forståelse av hvordan man anvender disse prinsippene om rettigheter, ansvar og respekt i digitale miljøer – å være trygg, klok og sosial.',
  ],
  outcomes: [
    'Jeg kan forklare hva digitalt medborgerskap er og hvorfor det er viktig.',
    'Jeg kan diskutere prinsippene om rettigheter, ansvar og respekt i digitale miljøer, inkludert hvordan man holder seg trygg, opptrer klokt og engasjerer seg sosialt.',
  ],
  teachingGuide: {
    ariaLabel: 'Last ned lærerveiledning',
    download: 'Lærerveiledning for digitalt medborgerskap',
  },
  parts: [
    {
      goal: 'Hjelpe elever til å forstå hva et digitalt miljø er og positive aspekter ved dette.',
      bundle: {
        filename: 'Digital Citizenship Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.1.1
            kind: 'Scenariokort',
            name: 'Fysiske og digitale verdener',
            filename: 'Scenario Cards - Physical and Digital Worlds',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er et digitalt miljø?',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.1.2
        title: 'Hva er et digitalt miljø?',
        supportText:
          'Bruk denne videoen til å starte en diskusjon om nettrom elevene allerede bruker, fra læringsplattformer til spill og meldingsapper. Pause for raske refleksjoner om hvor elever tilbringer tid på nettet.',
        downloads: {
          video: {
            filename: 'What Is a Digital Environment',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'What Is a Digital Environment - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hva digitalt medborgerskap er og hvorfor det er viktig.',
      bundle: {
        filename: 'Digital Citizenship Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.2.1
            kind: 'Bilde',
            name: 'Ansvarlig borger',
            filename: 'Worksheet A - Rights Responsibilities and Respect',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.2.2a
            kind: 'Arbeidsark A',
            name: 'Rettigheter, ansvar og respekt',
            filename: 'Worksheet B - Rights Responsibilities and Respect',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.2.2b
            kind: 'Arbeidsark B',
            name: 'Rettigheter, ansvar og respekt',
            filename: 'Image - Feeling Safe',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Digitalt medborgerskap',
          },
          {
            title: 'Rettigheter, respekt og ansvar i digitale miljøer',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal:
        'Hjelpe elever til å vite hvordan de kan være trygge i digitale miljøer ved å tenke kritisk og handle ansvarlig med personverninnstillinger.',
      bundle: {
        filename: 'Digital Citizenship Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.3.1
            kind: 'Bilde',
            name: 'Følelse av trygghet',
            filename: 'Image - Feeling Unsafe',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.3.2
            kind: 'Bilde',
            name: 'Følelse av utrygghet',
            filename: 'Image - Application Privacy Settings',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.3.4
            kind: 'Bilde',
            name: 'Personverninnstillinger for apper',
            filename: 'Image - Privacy Settings Strategy',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.3.5
            kind: 'Bilde',
            name: 'Strategi for personverninnstillinger',
            filename: 'Image - Digital Footprint',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Forstå forbindelsene mellom det fysiske og digitale miljøet',
          },
          {
            title: 'Personverninnstillinger',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.3.3
        title: 'Hva er personverninnstillinger?',
        supportText:
          'Bruk denne videoen til å introdusere personverninnstillinger som et praktisk verktøy elevene kan kontrollere på appene og enhetene de allerede eier. Pause for å spørre hvilke innstillinger de har sjekket eller endret tidligere.',
        downloads: {
          video: {
            filename: 'What Are Privacy Settings',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'What Are Privacy Settings - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hvordan visdom og motstandskraft kan hjelpe dem å være kloke i digitale miljøer.',
      bundle: {
        filename: 'Digital Citizenship Part 4 Package',
      },
      included: {
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Utfordringer i digitale miljøer',
          },
          {
            title: 'Forstå hvordan man utvikler motstandskraft',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.4.1
        title: 'Motstandskraft i digitale miljøer',
        supportText:
          'Bruk denne videoen til å utforske hvordan elever kan komme seg og tilpasse seg når ting går galt på nettet, fra kontoproblemer til uønsket kontakt. Pause for å spørre hvem elever henvender seg til for hjelp i slike situasjoner.',
        downloads: {
          video: {
            filename: 'Resilience in Digital Environments',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Resilience in Digital Environments - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever til å forstå hvordan de handler ansvarlig, viser respekt for seg selv og andre når de engasjerer seg sosialt i digitale miljøer.',
      bundle: {
        filename: 'Digital Citizenship Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.5.1
            kind: 'Bilde',
            name: 'Digitalt fotavtrykk',
            filename: 'Image - Digital Footprint',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.5.2
            kind: 'Scenariokort',
            name: 'Godt og dårlig å dele',
            filename: 'Scenario Cards - Good and Bad to Post',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.5.3
            kind: 'Scenariokort',
            name: 'Innlegg på sosiale medier',
            filename: 'Scenario Cards - Social Media Posts',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Handle ansvarlig i digitale miljøer',
          },
          {
            title: 'Skape et positivt digitalt fotavtrykk',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
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
  title: 'GODT eller DÅRLIG innhold å dele?',
  subtitle: 'Dra hvert innlegg inn i riktig kategori. Lær hva som er trygt å dele på nettet!',
  howItWorks: 'Slik fungerer det',
  instruction: 'Dra hvert innleggskort inn i sonen det tilhører. På mobil, trykk på et kort for å velge det, deretter trykk på en slippsone.',
  tip: 'Tenk på om informasjonen kan identifisere deg eller sette deg i fare hvis en fremmed så den.',
  tipLabel: 'Tips',
  tryAgain: 'Prøv igjen',
  correctCountLabel: 'Riktig',
  postsToSort: 'Innlegg å sortere',
  safeToShare: 'Trygt å dele',
  dragSafeHere: 'Dra trygge innlegg hit',
  doNotShare: 'IKKE del',
  dragUnsafeHere: 'Dra utrygge innlegg hit',
  safeZoneAriaLabel: 'Slippsone for «Trygt å dele»',
  unsafeZoneAriaLabel: 'Slippsone for «IKKE del»',
  correct: 'Riktig!',
  tryOtherZone: 'Ikke helt – prøv den andre sonen!',
  winTitle: 'Perfekt! Du sorterte alle riktig!',
  winMessage: 'Du er en ekspert på digitalt medborgerskap. Husk disse leksjonene når du legger ut på nettet!',
  playAgain: 'Spill igjen',
  posts: [
    { text: 'Hjemmeadressen min er Hovedgaten 123',
      category: 'unsafe',
      emoji: '🏠',
      explanation: 'Hjemmeadressen din er privat – del den aldri på nettet! Fremmede kan bruke den til å finne ut hvor du bor.'
    },
    { text: 'Jeg elsker å spille fotball!',
      category: 'safe',
      emoji: '⚽',
      explanation: 'Å dele hobbyer er helt greit og en fin måte å knytte kontakt med andre!'
    },
    { text: 'Passordet mitt er Fluffy123',
      category: 'unsafe',
      emoji: '🔑',
      explanation: 'Del aldri passord med noen på nettet – ikke engang med bestevennen din!'
    },
    { text: 'Jeg fikk toppkarakter på naturfagsprøven!',
      category: 'safe',
      emoji: '🎉',
      explanation: 'Å feire prestasjoner er trygt å dele – bra jobba!'
    },
    { text: 'Telefonnummeret mitt er 555-0123',
      category: 'unsafe',
      emoji: '📱',
      explanation: 'Telefonnumre er personlige – hold dem private så fremmede ikke kan kontakte deg.'
    },
    { text: 'Jeg er alene hjemme til klokken 18',
      category: 'unsafe',
      emoji: '🏡',
      explanation: 'Fortell aldri noen på nettet at du er alene hjemme – det setter sikkerheten din i fare!'
    },
    { text: 'Skolestykket vårt er neste fredag!',
      category: 'safe',
      emoji: '🎭',
      explanation: 'Skolearrangementer er greit å dele med venner!'
    },
    { text: 'Se på den nye tegningen min!',
      category: 'safe',
      emoji: '🎨',
      explanation: 'Å dele kreativt arbeid er en fin måte å uttrykke deg på!'
    },
    { text: 'Mammaens kredittkortnummer er...',
      category: 'unsafe',
      emoji: '💳',
      explanation: 'Finansiell informasjon som kredittkortnumre må alltid forbli privat!'
    },
    { text: 'Favorittfilmen min er Toy Story!',
      category: 'safe',
      emoji: '🎬',
      explanation: 'Å snakke om filmer du liker er helt trygt og morsomt!'
    },
    { text: 'Hele navnet mitt er Emily Rose Johnson',
      category: 'unsafe',
      emoji: '📛',
      explanation: 'Å dele ditt fulle navn på nettet kan hjelpe fremmede med å identifisere og spore deg.'
    },
    { text: 'Jeg lærte nettopp å sykle!',
      category: 'safe',
      emoji: '🚲',
      explanation: 'Å dele milepæler og nye ferdigheter er en fin ting å legge ut!'
    },
    { text: 'Skapkoden min på skolen er 24-8-16',
      category: 'unsafe',
      emoji: '🔒',
      explanation: 'Skapkoder er private – noen kan bryte seg inn i skapet ditt!'
    },
    { text: 'Vi fikk en ny valp som heter Max!',
      category: 'safe',
      emoji: '🐶',
      explanation: 'Å dele om kjæledyrene dine er trygt og morsomt for alle!'
    },
    { text: 'Jeg går hjem alene gjennom parken klokken 15:30',
      category: 'unsafe',
      emoji: '🚶',
      explanation: 'Å dele din daglige rutine og rute forteller fremmede nøyaktig hvor de kan finne deg.'
    },
  ],
}
