// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim: 'Å hjelpe elever med å gjenkjenne manipulasjonstaktikker, stanse opp før de handler, og velge tryggere svar når noen bruker press, hastverk eller falsk tillit.',
  objectives: [
    'Forklare hvordan manipulasjon kan skje online og ansikt til ansikt.',
    'Identifisere vanlige taktikker som hastverk, smiger eller autoritet.',
    'Øve på trygge svar og hjelpsøkende atferd.',
  ],
  outcomes: [
    'Gjenkjenne pressetaktikker brukt i meldinger eller chatter.',
    'Bruke en stopp-og-sjekk-rutine før man handler.',
    'Vite når og hvordan man melder fra om mistenkelig atferd.',
  ],
  teachingGuide: {
    ariaLabel: 'Last ned lærerveiledning',
    download: 'Lærerveiledning for sosial manipulasjon',
  },
  parts: [
    {
      goal: 'Hjelpe elever til å forstå hva sosial manipulasjon er ved først å kjenne igjen hvordan mennesker kan bli påvirket eller manipulert i hverdagssituasjoner, og deretter koble denne forståelsen til digitale miljøer og angripernes atferd.',
      bundle: {
        filename: 'Social Engineering Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.1.1
            kind: 'Bilde',
            name: 'Lure mennesker vs. hacke systemer',
            filename: 'Image - Tricking People vs Hacking Systems',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.2
            kind: 'Bilde',
            name: 'Eksempler på meldinger med sosial manipulasjon',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.3
            kind: 'Situasjonsvurdering',
            name: 'Hva vil en angriper ha?',
            filename: 'Situation Assessment - What Does an Attacker Want',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.4
            kind: 'Arbeidsark',
            name: 'Forstå sosial manipulasjon',
            filename: 'Worksheet - Understanding Social Engineering',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon – Påvirkning og overtalelse i hverdagen',
          },
          {
            title: 'Introduksjon til konseptet sosial manipulasjon',
          },
          {
            title: 'Hva vil angripere ha?',
          },
          {
            title: 'Sosial manipulasjon online og offline',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        title: 'Hva er sosial manipulasjon?',
        supportText:
          'Bruk denne videoen til å introdusere sosial manipulasjon som en teknikk som utnytter menneskelig tillit fremfor tekniske systemer. Pause for å spørre elever om de kan huske en situasjon der noen prøvde å lure dem på nett.',
        downloads: {
          video: {
            filename: 'What Is Social Engineering',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'What Is Social Engineering - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hvorfor angripere bruker sosial manipulasjon ved å utforske de psykologiske og emosjonelle mekanismene som gjør mennesker sårbare, og øve på å tenke kritisk når de føler press.',
      bundle: {
        filename: 'Social Engineering Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Bilde',
            name: 'Menneskelig beslutningstaking vs. datamaskinbeslutningstaking',
            filename: 'Image - Human Decision-making vs Computer Decision-making',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.2.2
            kind: 'Scenariokort',
            name: 'Eksempler på emosjonell manipulasjon',
            filename: 'Scenario Cards - Emotional Manipulation Examples',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.2.3
            kind: 'Spillkort',
            name: 'Angripernes taktikker',
            filename: 'Game Cards - Attacker Tactics',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.2.4
            kind: 'Arbeidsark',
            name: 'Hvorfor sosial manipulasjon virker',
            filename: 'Worksheet - Why Social Engineering Works',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon – Mennesker vs. systemer',
          },
          {
            title: 'Følelser angripere bruker',
          },
          {
            title: 'Tenke som en angriper',
          },
          {
            title: 'Hverdagskontekster der sosial manipulasjon virker',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Hjelpe elever til å gjenkjenne forsøk på sosial manipulasjon ved å identifisere vanlige advarselstegn og forstå de ulike kontekstene der disse angrepene kan forekomme, både online og offline.',
      bundle: {
        filename: 'Social Engineering Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.3.1
            kind: 'Bilde',
            name: 'Eksempler på meldinger med sosial manipulasjon',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.3.2
            kind: 'Scenariokort',
            name: 'Situasjoner med sosial manipulasjon',
            filename: 'Scenario Cards - Social Engineering Situations',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.3.3
            kind: 'Arbeidsark',
            name: 'Finn sosial manipulasjon',
            filename: 'Worksheet - Spot the Social Engineering',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon – Hvor kan sosial manipulasjon skje?',
          },
          {
            title: 'Vanlige advarselstegn',
          },
          {
            title: 'Typer sosial manipulasjon',
          },
          {
            title: 'Øve på gjenkjenning',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        title: 'Typer sosial manipulasjon',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å gjenkjenne de ulike formene sosial manipulasjon kan ta, fra phishing-e-poster til telefonimitasjon. Pause for å diskutere hvilken type de tror ville være vanskeligst å oppdage og hvorfor.',
        downloads: {
          video: {
            filename: 'Types of Social Engineering',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Types of Social Engineering - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å øve på å verifisere informasjon og velge trygge svar, og gi dem verktøy til å støtte andre når de møter forsøk på sosial manipulasjon.',
      bundle: {
        filename: 'Social Engineering Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Scenariokort',
            name: 'Hva ville du gjort?',
            filename: 'Scenario Cards - What Would You Do',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.2
            kind: 'Sjekkliste',
            name: 'Stopp, tenk, sjekk, spør',
            filename: 'Checklist - Stop, Think, Check, Ask',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.3
            kind: 'Arbeidsark',
            name: 'Stopp, tenk, sjekk, spør',
            filename: 'Worksheet - Stop, Think, Check, Ask',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.4
            kind: 'Rollekort',
            name: 'Mål, hjelper, tilskuer',
            filename: 'Role Cards - Target, Helper, Bystander',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.5
            kind: 'Arbeidsark',
            name: 'Beskytte meg selv og andre',
            filename: 'Worksheet - Protecting Myself and Others',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon – Fra gjenkjenning til respons',
          },
          {
            title: 'En enkel modell for trygge beslutninger',
          },
          {
            title: 'Øve på trygge svar',
          },
          {
            title: 'Beskytte andre',
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

export const challengeSE = {
  title: 'Phishing-saksmapper',
  subtitle: 'Bli en meldingsdetektiv! Kan du avsløre svindelene og phishing-triksene? Les hver melding og bestem: Stol på den eller Ignorer / Rapporter.',
  howItWorks: 'Slik fungerer det',
  instruction: 'Les hver meldings-saksmappe og bestem om den er pålitelig eller bør ignoreres/rapporteres. Tenk på hastverk, mistenkelige lenker og forespørsler om privat informasjon.',
  tip: 'Hvis du er usikker på en melding, sjekk Detektivnotatene med tips om hvordan du identifiserer svindel.',
  tipLabel: 'Tips',
  startTitle: 'Velkommen, detektiv!',
  startDescription: 'Du skal snart undersøke 14 mistenkelige meldinger. Din oppgave er å bestemme om hver melding er pålitelig eller bør ignoreres/rapporteres. Lykke til!',
  startButton: 'Start etterforskning',
  caseProgress: 'Saksfremgang',
  trustButton: '👍 Stol på',
  ignoreButton: '⚠️ Ignorer / Rapporter',
  nextCase: 'Neste sak →',
  completedTitle: 'Etterforskning fullført!',
  completedDescription: 'Her er resultatet ditt:',
  casesIdentified: 'av 14 saker korrekt identifisert',
  detectiveRankLabel: 'Detektivrang',
  defaultRank: 'Nybegynnerdetektiv',
  defaultRankMessage: 'Fortsett å øve for å rykke opp!',
  performanceSummary: 'Ytelsesoppsummering',
  playAgain: 'Spill igjen',
  detectiveNotes: 'Detektivnotater',
  detectiveTipsTitle: 'Tips for å holde deg trygg online',
  redFlags: [
    '🚩 Ber om passord',
    '🚩 Falske e-postadresser',
    '🚩 Gevinster som er for gode til å være sanne',
    '🚩 Pressende frister og trusler',
    '🚩 Mistenkelige nedlastinger',
    '🚩 Emosjonell manipulasjon',
  ],
  proTip: 'Protips: Når du er i tvil, spør en betrodd voksen før du klikker på lenker eller deler informasjon!',
  caseLabel: 'Sak',
  ofLabel: 'av',
  fromLabel: 'Fra',
  subjectLabel: 'Emne',
  messageLabel: 'Melding',
  rankRookie: '🥉 Nybegynnerdetektiv',
  rankRookieMsg: 'Du er i gang med etterforskningen. Fortsett å øve for å lære deg å se røde flagg!',
  rankJunior: '🥈 Juniordetektiv',
  rankJuniorMsg: 'Du blir flinkere til å oppdage mistenkelige meldinger. Bra jobbet!',
  rankSenior: '🥇 Seniordetektiv',
  rankSeniorMsg: 'Du er flink til å identifisere phishing og svindel. Godt arbeid!',
  rankMaster: '👑 Mesterdetektiv',
  rankMasterMsg: 'Du er en phishing-ekspert! Du fanget nesten alle triksene. Enestående!',
  correctLabel: 'Riktig',
  incorrectLabel: 'Feil',
  scenarios: [
    {
      id: 1,
      type: 'email',
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Du vant 1 000 $!',
      message: 'Gratulerer! Du er valgt ut som vår heldige vinner! Klikk her for å hente din premie på 1 000 $. Bare oppgi foreldrenes bankdetaljer.',
      correct: 'ignore-report',
      explanation: 'Dette er en klassisk svindel! Ekte premier ber aldri om bankdetaljer. E-postadressen ser også falsk ut.',
      tactic: 'Grådighet og hastverk',
    },
    {
      id: 2,
      type: 'chat',
      from: 'BestFriend_2024',
      message: 'Hei! Sjekk ut denne kule nettsiden jeg fant: www.free-vbucks-4real.com — du kan få ubegrenset med V-Bucks!',
      correct: 'ignore-report',
      explanation: 'Selv om det ser ut til å komme fra en venn, kan kontoen deres ha blitt hacket. Nettsteder med gratis V-Bucks er alltid svindel.',
      tactic: 'Utnyttelse av tillit',
    },
    {
      id: 3,
      type: 'email',
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Påminnelse om lekser',
      message: 'Bare en påminnelse om at naturfagsprosjektet ditt har innleveringsfrist neste fredag. Sjekk klasseportalen for detaljer.',
      correct: 'trust',
      explanation: 'Dette er en vanlig skole-e-post. Den kommer fra et ekte skoledomene, ber ikke om personlig informasjon og har ingen mistenkelige lenker.',
      tactic: 'Ingen — Legitim',
    },
    {
      id: 4,
      type: 'chat',
      from: 'CoolGamer99',
      message: 'Jeg er spillutvikler! Send meg innloggingen din og jeg legger til 1000 mynter på kontoen din gratis!',
      correct: 'ignore-report',
      explanation: 'Ekte spillutviklere ber aldri om passordet ditt. Denne personen prøver å stjele kontoen din!',
      tactic: 'Autoritetsimitasjon',
    },
    {
      id: 5,
      type: 'email',
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'HASTVERK: Kontoen din slettes!',
      message: 'Kontoen din vil bli permanent slettet om 24 timer med mindre du verifiserer passordet ditt NÅ!',
      correct: 'ignore-report',
      explanation: 'Legg merke til det falske domenet \'g00gle\' (med nuller). Ekte selskaper truer aldri med å slette kontoen din via e-post eller ber om passord.',
      tactic: 'Frykt og hastverk',
    },
    {
      id: 6,
      type: 'chat',
      from: 'Mamma 💕',
      message: 'Hei søtnos, kan du kjøpe melk på vei hjem? Glad i deg!',
      correct: 'trust',
      explanation: 'Dette er en vanlig melding fra et familiemedlem. Ingen mistenkelige lenker eller forespørsler om personlig informasjon.',
      tactic: 'Ingen — Legitim',
    },
    {
      id: 7,
      type: 'email',
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Hjelp barn i nød!',
      message: 'Vennligst doner nå! Barn lider! Send foreldrenes kredittkortnummer for å hjelpe umiddelbart!',
      correct: 'ignore-report',
      explanation: 'Ekte veldedighetsorganisasjoner ber aldri om kredittkortnumre via e-post. Dette bruker følelser til å lure deg.',
      tactic: 'Emosjonell manipulasjon',
    },
    {
      id: 8,
      type: 'chat',
      from: 'Ukjent bruker',
      message: 'Hei! Jeg er ny på skolen din. Hva er hjemmeadressen din så jeg kan komme og henge?',
      correct: 'ignore-report',
      explanation: 'Del aldri adressen din med fremmede online, selv om de hevder å kjenne deg. En ekte ny elev ville spurt på skolen.',
      tactic: 'Sosialt påskudd',
    },
    {
      id: 9,
      type: 'email',
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Delt dokument låst',
      message: 'Noen prøvde å åpne filen din. Bekreft innloggingen din nå for å beholde tilgang til skydokumentene dine.',
      correct: 'ignore-report',
      explanation: 'Denne meldingen skaper panikk og presser deg til å logge inn via en mistenkelig lenke. Åpne den ekte appen direkte i stedet.',
      tactic: 'Frykt og hastverk',
    },
    {
      id: 10,
      type: 'chat',
      from: 'Skolens kontor',
      message: 'Påminnelse: skolen stenger tidlig kl. 13 i morgen for personalopplæring. Se varselet i foreldreportalen.',
      correct: 'trust',
      explanation: 'Dette er en vanlig skoleoppdatering og ber ikke om passord, penger eller private kontoinformasjon.',
      tactic: 'Ingen — Legitim',
    },
    {
      id: 11,
      type: 'email',
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Kvitteringsproblem: bekreft kortet nå',
      message: 'Det siste kjøpet ditt mislyktes. Bekreft fullt kortnummer og CVV innen 10 minutter for å unngå kontosuspensjon.',
      correct: 'ignore-report',
      explanation: 'Ekte appbutikker ber aldri om fullstendige kortdetaljer og CVV via e-post. Pressende frister er et vanlig svindeltriks.',
      tactic: 'Finansielt tyveri',
    },
    {
      id: 12,
      type: 'email',
      from: 'School Library <library@your-school.edu>',
      subject: 'Leseklubbmøte i morgen',
      message: 'Påminnelse: Leseclub møtes i morgen til lunsj i Rom 12. Ta med boken din om du kan.',
      correct: 'trust',
      explanation: 'Dette er en vanlig skolepåminnelse fra et pålitelig domene, uten forespørsler om passord eller private kontoopplysninger.',
      tactic: 'Ingen — Legitim',
    },
    {
      id: 13,
      type: 'chat',
      from: 'Coach Rivera',
      message: 'Trening starter 15 minutter senere i dag på grunn av vær. Ta med vannflasken.',
      correct: 'trust',
      explanation: 'Dette er en rutineendring i timeplanen og ber ikke om sensitiv informasjon eller mistenkelige handlinger.',
      tactic: 'Ingen — Legitim',
    },
    {
      id: 14,
      type: 'email',
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Nye karakterer lagt ut',
      message: 'Nye karakterer er nå tilgjengelige i elevportalen. Åpne portalen fra det vanlige skolebokmerket ditt for å se dem.',
      correct: 'trust',
      explanation: 'Denne meldingen leder deg til din vanlige skoleportal og ber ikke om passord, betalinger eller private data i meldingen.',
      tactic: 'Ingen — Legitim',
    },
  ],
}
