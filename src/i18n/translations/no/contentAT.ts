// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAT = {
  aim: 'Å gi grunnleggende kunnskap om autentisering og prinsipper for identitetsstyring for å beskytte personlige digitale eiendeler.',
  objectives: [
    'Å understreke viktigheten av sikker identitetsstyring.',
    'Å introdusere konseptet autentisering og dens ulike typer.',
    'Å utvikle elevenes forståelse av digitale eiendeler og bevissthet om tilgangskontroll.',
    'Å utvikle elevenes kunnskap og ferdigheter for å opprette sikre brukernavn og passord i tråd med anbefalinger og god praksis.',
    'Å bygge elevenes ferdigheter for sikker håndtering av passord.',
  ],
  outcomes: [
    'Jeg kan identifisere mine personlige digitale eiendeler og forklare risikoene de møter i både fysiske og digitale miljøer.',
    'Jeg kan forklare hva autentisering er, hvorfor det er viktig, og liste opp ulike typer autentisering.',
    'Jeg kan skille mellom svake og sterke brukernavn og passord.',
    'Jeg kan demonstrere hvordan jeg bruker en passordbehandler til å lagre passord og begrunne valgene mine.',
  ],
  parts: [
    {
      goal: 'Hjelpe elever med å opprette sterke, minneverdige hemmeligheter og forstå hvorfor gjenbruk er risikabelt.',
      bundle: {
        filename: 'Autentisering - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Bilde',
            name: 'Nettidentitet',
            filename: 'Bilde - Nettidentitet',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.1.3
            kind: 'Bilder',
            name: 'Eksempler på personlige digitale eiendeler',
            filename: 'Bilder - Eksempler på personlige digitale eiendeler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.1.4
            kind: 'Arbeidsark',
            name: 'Hva ville skje hvis...?',
            filename: 'Arbeidsark - Hva ville skje hvis',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.1.5
            kind: 'Arbeidsark',
            name: 'Mine digitale eiendeler',
            filename: 'Arbeidsark - Mine digitale eiendeler',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er digital identitet?',
          },
          {
            title: 'Forstå digitale eiendeler',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        title: 'Hva er digital identitet?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å forstå at deres digitale identitet består av informasjonen og atferden de deler på nett. Pause for å spørre hvilke deler av deres digitale identitet de tror de kan kontrollere.',
        downloads: {
          video: {
            filename: 'Hva er digital identitet',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er digital identitet - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hva autentisering er, hvorfor det er viktig, og hvordan det bidrar til å beskytte deres digitale identitet og digitale eiendeler ved å kontrollere hvem som får tilgang.',
      bundle: {
        filename: 'Autentisering - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Bilder',
            name: 'Eksempler på autentisering fra den virkelige verden',
            filename: 'Bilder - Eksempler på autentisering fra den virkelige verden',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.2.3
            kind: 'Bilde',
            name: 'Logge inn på et digitalt system',
            filename: 'Bilde - Logge inn på et digitalt system',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.2.4
            kind: 'Arbeidsark',
            name: 'Autentisering i hverdagen',
            filename: 'Arbeidsark - Autentisering i hverdagen',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Autentisering',
          },
          {
            title: 'Forstå typer autentisering',
          },
          {
            title: 'Anvende autentisering på digitale eiendeler',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'Hva er autentisering?',
        supportText:
          'Bruk denne videoen til å introdusere autentisering som den daglige mekanismen som beskytter elevenes digitale kontoer. Pause for å spørre hvordan de for øyeblikket bekrefter identiteten sin i appene de bruker mest.',
        downloads: {
          video: {
            filename: 'Hva er autentisering',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er autentisering - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hva autentisering er, hvorfor det er viktig, og hvordan det bidrar til å beskytte deres digitale identitet og digitale eiendeler ved å kontrollere hvem som får tilgang.',
      bundle: {
        filename: 'Autentisering - pakke - del 3',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Bilde',
            name: 'Eksempler på svake passord',
            filename: 'Bilde - Eksempler på svake passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.3
            kind: 'Bilde',
            name: 'Eksempler på sterke passord',
            filename: 'Bilde - Eksempler på sterke passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.4
            kind: 'Kort',
            name: 'Lag et sterkt passord',
            filename: 'Kort - Lag et sterkt passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.5
            kind: 'Bilde',
            name: 'Sjekk passordet ditt',
            filename: 'Bilde - Sjekk passordet ditt',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.6
            kind: 'Arbeidsark',
            name: 'Mine regler for sterke passord',
            filename: 'Arbeidsark - Mine regler for sterke passord',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Passord',
          },
          {
            title: 'Sterke vs. svake passord',
          },
          {
            title: 'Lage sterke passord på en trygg måte',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Sterke og svake passord',
        supportText:
          'Bruk denne videoen til å vise elever forskjellen mellom passord som beskytter kontoer og passord som setter dem i fare. Inviter dem til å reflektere over om deres egne passord oppfyller kriteriene for styrke.',
        downloads: {
          video: {
            filename: 'Sterke og svake passord',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Sterke og svake passord - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hva tofaktorautentisering er og hvorfor det er vanskelig å håndtere mange passord, introdusere konseptet passordbehandler, og forklare hvordan passordbehandlere bidrar til å beskytte digitale identiteter og digitale eiendeler når de brukes ansvarlig med støtte fra en betrodd voksen.',
      bundle: {
        filename: 'Autentisering - pakke - del 4',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Bilde',
            name: 'To ulike typer autentisering brukt sammen',
            filename: 'Bilde - To ulike typer autentisering brukt sammen',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.2
            kind: 'Skjema',
            name: 'Sett med mynter',
            filename: 'Skjema - Sett med mynter',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.3
            kind: 'Skjema',
            name: 'Sett med grupper',
            filename: 'Skjema - Sett med grupper',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.4
            kind: 'Skjema',
            name: 'PIN-kort',
            filename: 'Skjema - PIN-kort',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.6
            kind: 'Bilde',
            name: 'Slik bruker du en passordbehandler',
            filename: 'Bilde - Slik bruker du en passordbehandler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.7
            kind: 'Bilde',
            name: 'Passordbehandler',
            filename: 'Bilde - Passordbehandler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.8
            kind: 'Bilde',
            name: 'Trinn for lagring av passord',
            filename: 'Bilde - Trinn for lagring av passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.9
            kind: 'Arbeidsark',
            name: 'Passordproblemer og løsninger',
            filename: 'Arbeidsark - Passordproblemer og løsninger',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Passord',
          },
          {
            title: 'Passordbehandlere',
          },
          {
            title: 'Bruke passordbehandlere på en trygg måte',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'Hva er en passordbehandler?',
        supportText:
          'Bruk denne videoen til å introdusere passordbehandlere som en praktisk løsning for å opprette og lagre sterke, unike passord for hver konto. Pause for å spørre elever om de har hørt om eller brukt en passordbehandler før.',
        downloads: {
          video: {
            filename: 'Hva er en passordbehandler',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er en passordbehandler - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hvordan deres valg og atferd påvirker sikkerheten til deres digitale identitet, og hvordan ansvarlig atferd bidrar til å beskytte deres digitale eiendeler, dem selv og andre i digitale miljøer.',
      bundle: {
        filename: 'Autentisering - pakke - del 5',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Bilde',
            name: 'Trygg og utrygg nettadferd',
            filename: 'Bilde - Trygg og utrygg nettadferd',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.5.3
            kind: 'Arbeidsark',
            name: 'Scenarioer for digital identitet og autentisering',
            filename: 'Arbeidsark - Scenarioer for digital identitet og autentisering',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.5.4
            kind: 'Arbeidsark',
            name: 'Slik beskytter jeg min digitale identitet',
            filename: 'Arbeidsark - Slik beskytter jeg min digitale identitet',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Beskytte digital identitet',
          },
          {
            title: 'Digital identitet og autentisering',
          },
          {
            title: 'Plenum: Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Beskytte din digitale identitet',
        supportText:
          'Bruk denne videoen til å samle strategiene elevene har lært for å holde sin digitale identitet trygg. Oppmuntre dem til å identifisere én spesifikk vane de vil endre eller starte etter å ha sett den.',
        downloads: {
          video: {
            filename: 'Beskytte din digitale identitet',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Beskytte din digitale identitet - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
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
      imageSrc: '/images/learning-hub/01_digital-citizenship.webp',
    },
    {
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/images/learning-hub/02_attacker-perspective.webp',
    },
    {
      moduleId: 'dp',
      brand: 'DP',
      href: '/learning-hub/data-privacy/content',
      imageSrc: '/images/learning-hub/04_data-privacy.webp',
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

export const challengeAT = {
  title: 'Passordlab',
  subtitle:
    'Bygg et sterkere passord én runde om gangen. Hvert nivå legger til en ny ingrediens i passordoppskriften din!',
  howItWorks: 'Slik fungerer det',
  instruction:
    'Hver runde introduserer et nytt passordkrav. Oppfyll alle kriteriene for gjeldende runde for å komme videre — og se passordet ditt bli vanskeligere og vanskeligere å knekke!',
  tipLabel: 'Tips',
  tip: 'Sjekk sidefeltet til høyre for å spore rundefremgangen din og få passordtips!',
  yourPassword: 'Ditt passord',
  placeholder: 'Skriv passordet ditt her...',
  passwordInputAriaLabel: 'Passordinndata',
  showPassword: 'Vis passord',
  strengthAriaLabel: 'Passordstyrke',
  roundBadgeTemplate: 'Runde {n} av {total}',
  criteriaTitle: 'Passordoppskrift — Runde {n}:',
  criterionLength: 'Lengde > 10 tegn',
  criterionNumber: 'Inneholder et tall (0-9)',
  criterionSymbol: 'Inneholder et symbol (! @ # $ % ^ & * ?)',
  criterionUppercase: 'Inneholder en STOR bokstav',
  criterionLowercase: 'Inneholder en liten bokstav',
  strengthWeak: 'Svakt',
  strengthOkay: 'På vei',
  strengthStrong: 'Sterkt ✓',
  feedbackDefault: 'Begynn å skrive for å se passordstyrken din!',
  feedbackAllMet: '🎉 Alle krav oppfylt! Trykk Neste runde for å fortsette.',
  almostThereTemplate: 'Nesten der! Prøv å {hint}.',
  hints: {
    length: 'gjøre det lengre (10+ tegn)',
    number: 'legge til et tall (0-9)',
    symbol: 'legge til et symbol som ! @ # $ %',
    upper: 'legge til en STOR bokstav',
    lower: 'legge til en liten bokstav',
  },
  keepGoing: 'Fortsett!',
  nextRound: 'Neste runde →',
  finish: 'Fullfør! 🏆',
  nextRoundAriaLabel: 'Gå til neste runde',
  tryAgain: 'Prøv igjen',
  tryAgainAriaLabel: 'Tøm passordet og start på nytt',
  completionTitle: 'Passordmester!',
  completionText: 'Du har fullført alle 4 rundene og lært hvordan du lager uknuselige passord!',
  completionRounds: '4 / 4 runder fullført',
  completionTips: 'Sterke passord beskytter ditt digitale liv. Bruk disse ferdighetene overalt der du oppretter en konto!',
  startOver: 'Start på nytt',
  roundProgressTitle: 'Rundefremgang',
  roundProgressDesc: 'Fullfør alle 4 rundene for å mestre passord',
  rounds: [
    {
      icon: '🎮',
      title: 'Lag et passord for spillkontoen din',
      description: 'Bare start med en god lengde — minst 10 tegn!',
      label: 'Runde 1',
      desc: 'Kun lengde'
    },
    {
      icon: '📧',
      title: 'Lag et passord for e-posten din',
      description: 'Bra start! Nå legger du til et tall for å gjøre det vanskeligere å knekke.',
      label: 'Runde 2',
      desc: '+ Tall'
    },
    {
      icon: '📱',
      title: 'Lag et passord for sosiale medier',
      description: 'Bra fremgang! Nå legger du til et symbol for å virkelig blande det opp.',
      label: 'Runde 3',
      desc: '+ Symbol'
    },
    {
      icon: '📔',
      title: 'Lag et passord for den hemmelige dagboken din',
      description: 'Siste runde! Legg til både STORE og små bokstaver for å fullføre hele oppskriften.',
      label: 'Runde 4',
      desc: '+ Store og små'
    },
  ],
  dosTitle: '✅ Gjør dette',
  dos: [
    'Bland STORE og små bokstaver',
    'Legg til tall i midten',
    'Bruk symboler som ! @ # $ %',
    'Gjør det 12+ tegn langt',
    'Bruk tilfeldige kombinasjoner',
  ],
  dontsTitle: '❌ Unngå dette',
  donts: [
    'Bruk ikke ditt virkelige navn eller fødselsdato',
    'Bruk ikke «123456» eller enkle mønstre',
    'Ikke gjenta samme tegn',
    'Bruk ikke vanlige ordbokord',
    'Bruk ikke skolens eller kjæledyrets navn',
  ],
}
