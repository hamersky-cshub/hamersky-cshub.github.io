// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim: 'Å hjelpe elever med å forstå hva skadevare er, hvordan infeksjoner skjer, og hvilke vaner som reduserer risikoen for usikre nedlastinger, filer og installasjoner.',
  objectives: [
    'Introdusere hva skadevare er og hvorfor det er farlig.',
    'Identifisere vanlige måter skadevare spres på.',
    'Bygge vaner for tryggere nedlastinger og oppdateringer.',
  ],
  outcomes: [
    'Forklare forskjellen mellom trygge og utrygge filer eller lenker.',
    'Gjenkjenne advarselsignaler ved mistenkelige nedlastinger.',
    'Bruke pålitelige kilder og be om hjelp når man er usikker.',
  ],
  teachingGuide: {
    ariaLabel: 'Download Teaching Guide',
    download: 'Lærerveiledning for skadevare',
  },
  parts: [
    {
      goal: 'Hjelpe elever med å forstå konseptet skadevare.',
      bundle: {
        filename: 'Malware Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Bilde',
            name: 'Ondsinnet + programvare = skadevare',
            filename: 'Image - Malicious + Software = Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.1.3
            kind: 'Arbeidsark',
            name: 'Relatert til skadevare eller ikke?',
            filename: 'Worksheet - Related to Malware or Not',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Definere skadevare',
          },
          {
            title: 'Avslutning – oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.2
        title: 'Hva er skadevare?',
        supportText:
          'Bruk denne videoen til å introdusere skadevare som programvare designet for å forårsake skade, og gi elevene et grunnlag før de utforsker spesifikke typer mer i dybden. Ta pause og spør hva de allerede vet eller har hørt om datavirus.',
        downloads: {
          video: {
            filename: 'What is Malware',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Malware - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Introdusere vanlige typer skadevare.',
      bundle: {
        filename: 'Malware Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Skjema',
            name: 'Myntsett',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.3
            kind: 'Skjema',
            name: 'Knute-koblingstavle',
            filename: 'Sheet - Knot Ties Board',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.4
            kind: 'Ark',
            name: 'Egenskaper ved skadevare',
            filename: 'Sheet - Malware Properties',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Knytte knutene for typer skadevare',
          },
          {
            title: 'Avslutning – oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Introduksjon til typer skadevare',
        supportText:
          'Bruk denne videoen til å gi elevene en tydelig oversikt over de ulike kategoriene av skadevare og hva som gjør hver enkelt unik. Ta pause for en kort diskusjon om hvilken type de mener utgjør størst risiko og hvorfor.',
        downloads: {
          video: {
            filename: 'Introducing Malware Types',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Introducing Malware Types - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Gi en oversikt over kjennetegnene på skadevare for å gjenkjenne og oppdage den.',
      bundle: {
        filename: 'Malware Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Arbeidsark',
            name: 'Liste over indikatorer',
            filename: 'Worksheet - List of Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.2
            kind: 'Lesestoff',
            name: 'Gjenkjenne skadevare',
            filename: 'Reading - Recognising Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.3
            kind: 'Plakat',
            name: 'Syv indikatorer',
            filename: 'Poster - Seven Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.4
            kind: 'Tabell',
            name: 'Situasjon og indikatorer',
            filename: 'Table - Situation and Indicators',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Undersøke skadevare',
          },
          {
            title: 'Avslutning – oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Hjelpe elever med å forstå beskyttelsestiltak mot skadevare.',
      bundle: {
        filename: 'Malware Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situasjon',
            name: 'Skadevare og datatyveri?',
            filename: 'Situation - Malware and Data Theft',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.2
            kind: 'Plakat',
            name: 'HVA MAN BØR og IKKE BØR gjøre',
            filename: 'Poster - DOs and DON\'Ts',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.3
            kind: 'Arbeidsark',
            name: 'Et skjold mot skadevare',
            filename: 'Worksheet - A Shield Against Malware',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Analysere situasjonen med uforsiktig atferd',
          },
          {
            title: 'Lære grunnleggende beskyttelsestiltak',
          },
          {
            title: 'Avslutning – oppsummering og uformell vurdering',
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
      moduleId: 'da',
      brand: 'DA',
      href: '/learning-hub/digital-abuse/content',
      imageSrc: '/images/learning-hub/07_digital-abuse.png',
    },
  ],
}

export const challengeMW = {
  title: 'Skadevare-detektiv',
  subtitle: 'Du er en cybersikkerhetsanalytiker. Undersøk filer på din virtuelle datamaskin, skann innboksen din, håndter mistenkelige sprettoppvinduer og gjennomgå apptillatelser på tvers av 4 interaktive nivåer. Klarer du å holde systemet rent?',
  howItWorks: 'Slik fungerer det',
  instruction: 'Jobb deg gjennom 4 nivåer på din virtuelle datamaskin. Hvert nivå presenterer et annet cybersikkerhetsscenario. Undersøk hvert tilfelle nøye og bestem om det er trygt eller en trussel — og lær av forklaringen.',
  tip: 'Skadevare forkleder seg ofte som noe ufarlig. Se etter mistenkelige filendelser, feilstavede domener, unødvendige tillatelser og løfter som høres for gode ut til å være sanne.',
  tipLabel: 'Tips',
  welcomeTitle: 'Velkommen, cyberanalytiker!',
  welcomeDescription: 'Datamaskinen din har mottatt mistenkelige filer, e-poster og sprettoppvinduer. Jobb gjennom 4 nivåer for å identifisere trusler og beskytte systemet.',
  levels: [
    '💻 Nivå 1 — Filskanner',
    '📧 Nivå 2 — E-postinnboks',
    '🌐 Nivå 3 — Nettlesersprettoppvinduer',
    '🔒 Nivå 4 — Apptillatelser',
  ],
  bootButton: 'Start datamaskinen →',
  scoreLabel: 'Poeng',
  correctLabel: 'Riktig',
  threatsCaughtLabel: 'Trusler oppdaget',
  keepFile: '✓ Behold fil',
  quarantine: '🗑️ Karantene',
  safeKeep: '✓ Trygg / Behold',
  threatRemove: '⚠️ Trussel / Fjern',
  nextButton: 'Neste →',
  malwareTypesTitle: 'Typer skadevare',
  malwareTypesSubtitle: 'Vanlige typer skadevare du bør passe deg for',
  malwareTypes: [
    '🦠 Virus — fester seg til filer og sprer seg',
    '🪱 Orm — replikerer seg selv på tvers av nettverk',
    '🐴 Trojaner — forkledd som nyttig programvare',
    '🔐 Løsepengevirus — låser filer til du betaler',
    '👁️ Spionvare — overvåker aktivitet i hemmelighet',
    '📢 Reklamevare — oversvømmer deg med annonser',
  ],
  securityGuideTitle: 'Sikkerhetsveiledning',
  securityGuideSubtitle: 'Røde flagg du bør se etter',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs fra ukjente kilder',
    '🚩 Feilstavede eller falske avsenderdomener',
    '🚩 Falske virusvarsler i nettleseren',
    '🚩 Apper som ber om unødvendige tillatelser',
    '🚩 Premier, gratis penger eller pressende trusler',
    '🚩 Nedtellingstimere som skaper panikk',
  ],
  goldenRule: 'Når du er i tvil, ikke klikk. Kontakt IT-støtte eller en pålitelig voksen i stedet.',
  levelCompleteTitle: 'Nivå fullført!',
  levelCompleteSubtitle: 'Fortsett!',
  levelResultLabel: 'Nivåresultat',
  correctDecisionsLabel: 'riktige avgjørelser',
  continueButton: 'Fortsett →',
  resultsTitle: 'Systemet er sikret! 🛡️',
  resultsDescription: 'Cybersikkerhetsrapporten din er klar.',
  accuracyLabel: 'Nøyaktighet',
  threatsCaughtStat: 'Trusler oppdaget',
  threatsMissedStat: 'Trusler oversett',
  analystRankLabel: 'Analytikerrang',
  rankTrainee: '📘 Trainee',
  rankTraineeMsg: 'Fortsett å lære! Se gjennom sikkerhetsveiledningen til høyre og prøv igjen — du vil bli bedre!',
  rankJunior: '🔍 Junioranalytiker',
  rankJuniorMsg: 'Bra innsats! Du bygger solide ferdigheter i å oppdage skadevare. Øvelse gjør mester.',
  rankSenior: '🔐 Senioranalytiker',
  rankSeniorMsg: 'Godt jobbet! Du identifiserte de fleste truslene. Fortsett å skjerpe blikket for subtile røde flagg.',
  rankElite: '🛡️ Elite cyberanalytiker',
  rankEliteMsg: 'Fremragende arbeid! Du fanget nesten alle truslene. Din digitale sikkerhetsinstinkt er utmerket.',
  playAgain: 'Spill igjen',
  levelMeta: [
    { title: 'Nivå 1 av 4 — Filskanner', app: '📁 Filutforsker', msg: '🔍 Skanner fil…' },
    { title: 'Nivå 2 av 4 — E-postinnboks', app: '📧 E-post', msg: '📧 Leser e-post…' },
    { title: 'Nivå 3 av 4 — Nettlesersprettoppvinduer', app: '🌐 Nettleser', msg: '⚠️ Sprettoppvindu oppdaget!' },
    { title: 'Nivå 4 av 4 — Apptillatelser', app: '⚙️ Appbehandler', msg: '⚙️ Gjennomgår tillatelser…' },
  ],
  files: [
    {
      icon: '💀', name: 'FreeMinecraft_Crack.exe', type: 'Kjørbar fil (.exe)',
      source: 'Lastet ned fra: crack-games-free.ru', size: '14,2 MB', date: 'I dag, 15:41',
      description: 'Et installasjonsprogram som hevder å gi deg gratis Minecraft. Lastet ned fra et uoffisielt russisk nettsted.',
      isThreat: true,
      explanation: 'Crackede spillinstallatorer er en klassisk måte å distribuere trojanske hester og løsepengevirus på. .exe-endelsen, det mistenkelige domenet og "gratis crack"-premisset er store røde flagg.',
      tip: 'Last alltid ned programvare kun fra offisielle, verifiserte nettsteder.',
    },
    {
      icon: '📄', name: 'History_Essay_Draft.docx', type: 'Word-dokument (.docx)',
      source: 'Opprettet lokalt på denne enheten', size: '48 KB', date: 'I går, 19:15',
      description: 'Et Word-dokument du selv opprettet til historiefaget.',
      isThreat: false,
      explanation: 'Et lite Word-dokument du opprettet lokalt er trygt. Det har en standardendelse, liten filstørrelse og lokal opprinnelse.',
      tip: 'Vær forsiktig med .docx-filer mottatt fra fremmede — de kan inneholde ondsinnede makroer. Men selvopprettede filer er trygge.',
    },
    {
      icon: '⚡', name: 'speedup_your_pc.bat', type: 'Batchskript (.bat)',
      source: 'Mottatt via Discord DM fra: xX_h4ck3r_Xx', size: '3,1 KB', date: 'I dag, 11:02',
      description: 'Et batchskript sendt via Discord av en ukjent bruker, som hevder å gjøre PC-en din raskere.',
      isThreat: true,
      explanation: '.bat-filer kan kjøre enhver systemkommando — inkludert installasjon av skadevare, åpning av bakdører eller sletting av filer. Kjør aldri skript fra fremmede.',
      tip: 'Kjør aldri .bat- eller .vbs-skript fra personer du ikke kjenner og stoler fullt ut på, selv om de hevder det er ufarlig.',
    },
    {
      icon: '🎵', name: 'Summer_Playlist.mp3', type: 'Lydfil (.mp3)',
      source: 'Lagret fra Spotify-skrivebordsappen', size: '8,7 MB', date: 'For 3 dager siden',
      description: 'En musikkfil lagret gjennom den offisielle Spotify-appen.',
      isThreat: false,
      explanation: 'Dette er en standard lydfil fra en pålitelig kilde. .mp3-filer er ikke kjørbare og utgjør ingen reell risiko når de kommer fra legitime apper.',
      tip: 'Standard mediefiler (.mp3, .jpg, .mp4) er generelt trygge. Pass bare på filer som skjuler endelsen sin, f.eks. "song.mp3.exe".',
    },
    {
      icon: '🔧', name: 'RegFix_Pro_Setup.exe', type: 'Kjørbar fil (.exe)',
      source: 'Levert via nettlesersprettoppvinduannonse', size: '2,1 MB', date: 'I dag, 14:18',
      description: 'Et "registerreparasjonsverktøy" som ble tilbudt av en sprettoppannonse som hevdet at PC-en din er skadet.',
      isThreat: true,
      explanation: 'Falske "PC-reparasjons"-verktøy levert via sprettoppannonser er et vanlig middel for reklamevare og spionvare. Ekte systemverktøy annonseres ikke på denne måten.',
      tip: 'Legitim antivirus- eller reparasjonsprogramvare distribueres aldri gjennom tilfeldige nettlesersprettoppannonser.',
    },
    {
      icon: '📸', name: 'Birthday_Party_2024.jpg', type: 'Bildefil (.jpg)',
      source: 'Mottatt via WhatsApp fra: Bestemor', size: '2,9 MB', date: 'Forrige uke',
      description: 'Et bilde fra bursdagsfesten din sendt av bestemoren din.',
      isThreat: false,
      explanation: 'Et .jpg-bilde fra et kjent familiemedlem er trygt. Standard bilder fra pålitelige kontakter er ikke skadevare.',
      tip: 'Pass på bildefiler med doble endelser som "photo.jpg.exe" — disse skjuler den ekte, farlige filtypen.',
    },
    {
      icon: '💎', name: 'FREE_ROBUX_GENERATOR.vbs', type: 'VBScript (.vbs)',
      source: 'Lenke fra en YouTube-kommentar', size: '1,8 KB', date: 'I dag, 09:55',
      description: 'Et skript fra en YouTube-kommentar som hevder å generere ubegrenset Robux for Roblox.',
      isThreat: true,
      explanation: '"Gratis Robux"-generatorer eksisterer ikke — de er 100 % svindel. .vbs-skript kan kjøre kraftige systemkommandoer. Dette er en klassisk metode for distribusjon av skadevare.',
      tip: 'Generatorer for gratis spillvaluta er alltid svindel. De eksisterer kun for å stjele kontoer, installere skadevare eller begge deler.',
    },
    {
      icon: '📊', name: 'Science_Project_Data.xlsx', type: 'Excel-regneark (.xlsx)',
      source: 'Sendt på e-post fra: johnson.s@westridge-school.edu', size: '156 KB', date: 'I går, 10:33',
      description: 'En Excel-fil med naturfagsprosjektdata sendt av din verifiserte skolelærer.',
      isThreat: false,
      explanation: 'Dette regnearket er fra en verifisert skolelærer som bruker et offisielt skoledomene. Filtypen er passende og filstørrelsen er rimelig.',
      tip: 'Office-filer fra ukjente avsendere kan inneholde ondsinnede makroer. Verifiser alltid avsenderen før du åpner vedlegg.',
    },
  ],
  emails: [
    {
      fromName: 'IT-sikkerhetsteam', fromAddr: 'security-alert@school-itsupport.xyz', avatarLetter: '🔐',
      subject: 'HASTER: Skolekontoen din er blitt hacket — tilbakestill passordet NÅ',
      body: `Kjære elev,

Systemene våre oppdaget uautorisert tilgang til skolekontoen din fra en ukjent plassering.

Du må tilbakestille passordet UMIDDELBART ved å kjøre det vedlagte verktøyet. Hvis du ikke handler innen 30 minutter, vil kontoen bli permanent låst.

— IT-sikkerhetsavdelingen`,
      attachment: 'PasswordReset_Tool.exe',
      isThreat: true,
      explanation: 'Flere røde flagg: et mistenkelig ".xyz"-domene (ikke skolens ekte domene), ekstrem hastverk og et .exe-vedlegg. Ekte IT-avdelinger sender aldri verktøy for tilbakestilling av passord som kjørbare filer — de lenker til en ordentlig påloggingsside.',
      tip: 'Hvis du får et sikkerhetsvarsel, kontakt IT direkte via et telefonnummer du allerede kjenner — stol aldri på kontaktinfo fra den mistenkelige e-posten selv.',
    },
    {
      fromName: 'Ms. Johnson', fromAddr: 'johnson.s@westridge-school.edu', avatarLetter: 'J',
      subject: 'Vitenskapsmesse — prosjektbeskrivelse vedlagt',
      body: `Hei klasse,

vedlagt finner dere den offisielle prosjektbeskrivelsen for den kommende vitenskapsmessen. Den dekker de nødvendige seksjonene, formateringsretningslinjer og innleveringsfristen.

Ta med det ferdige plakatet og rapporten til Rom 14 innen fredag.

Gi meg beskjed hvis dere har spørsmål!

Ms. Johnson
Naturfagsavdelingen, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      isThreat: false,
      explanation: 'Dette er en legitim skole-e-post. Avsenderen bruker et verifisert .edu-skoledomene, vedlegget er et standard Word-dokument relevant for e-postens formål, og det bes ikke om personlig informasjon.',
      tip: 'En .docx-fil fra en kjent lærer på et offisielt skoledomene er trygg. Verifiser alltid avsenderens fulle adresse før du åpner vedlegg.',
    },
    {
      fromName: 'Lucas (spillkompis)', fromAddr: 'lucas.gamer99@gmail.com', avatarLetter: 'L',
      subject: 'kompis kjør dette det gir deg uendelig med mynter i spillet!!',
      body: `hei!!

fant dette syke skriptet på nett som gir deg ubegrensede mynter i Clash Royale. bare kjør .bat-filen og den patcher spillet automatisk lol

broren min prøvde det og det fungerte. ikke si det til noen

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      isThreat: true,
      explanation: 'Selv meldinger fra ekte venner kan spre skadevare — Lucas sin konto kan være kompromittert, eller han vet kanskje ikke at filen er farlig. Et .bat-skript som hevder å "hacke" et spill er en klassisk leveringsmetode for trojanske hester. Å kjøre det kan gi en angriper full kontroll over systemet ditt.',
      tip: 'Kjør aldri .bat- eller .vbs-skript fra noen, inkludert venner. "Cheat"-skript for nettspill er nesten alltid skadevare i forkledning.',
    },
    {
      fromName: 'Skolebiblioteket', fromAddr: 'library@westridge-school.edu', avatarLetter: '📚',
      subject: 'Sommerleseprogram — leselisten din',
      body: `Hei,

takk for at du meldte deg på sommerleseprogrammet vårt! Vedlagt er din personlige leseliste basert på aldersgruppe og interesser.

Du kan låne hvilken som helst av disse titlene fra skolebiblioteket eller bestille dem via elevportalen.

God lesing!

Westridge School bibliotekteam`,
      attachment: 'Summer_Reading_List_2024.pdf',
      isThreat: false,
      explanation: 'En legitim e-post fra skolebiblioteket med det offisielle .edu-domenet. .pdf-vedlegget er en leseliste — helt passende for sammenhengen. Det bes ikke om personlig informasjon og ingen lenker er mistenkelige.',
      tip: 'PDF-filer fra pålitelige, kjente avsendere er generelt trygge. Vær mer forsiktig med PDF-er fra ukjente avsendere, da de av og til kan inneholde innebygde skript.',
    },
    {
      fromName: 'PREMIEVARSLINGSSENTER', fromAddr: 'winner@free-prize-claim-2024.net', avatarLetter: '🏆',
      subject: 'DU ER VALGT — KREV DIN iPhone 15 NÅ!!!',
      body: `GRATULERER!!!

Du er tilfeldig valgt som vår heldige vinner! For å kreve din iPhone 15 Pro Max, fyll ut og returner det vedlagte skjemaet med dine personlige opplysninger og et fraktgebyr på 4,99 USD.

Svar innen 12 TIMER ellers utløper premien din!

[KREV MIN PREMIE →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      isThreat: true,
      explanation: 'En klassisk premiesvindel med et .html-vedlegg — å åpne det laster en falsk nettside designet for å stjele personlig informasjon og betalingsdetaljer. Røde flagg: premie du aldri deltok i, ekstrem hastverk, mistenkelig avsenderdomene og overdreven bruk av store bokstaver.',
      tip: '.html-e-postvedlegg som åpner "skjemaer" er en vanlig måte å lage overbevisende falske innloggings- eller betalingssider lokalt på enheten din, som omgår nettfiltre.',
    },
  ],
  popups: [
    {
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SIKKERHETSVARSEL',
      icon: '🚨',
      message: '⚠️ VIRUS OPPDAGET! Datamaskinen din er infisert med 47 virus! Ring 1-800-FIX-NOW umiddelbart ellers vil systemet ditt bli permanent skadet!',
      subtext: 'Windows Defender har oppdaget kritiske trusler. Handle nå!',
      primaryBtnText: '📞 Ring nå og fiks',
      isThreat: true,
      explanation: 'Dette er "skremmevare" — et falskt virusvarsel designet for å lure deg til å ringe et svindeltelefonnummer eller installere falsk antivirusprogramvare. Ekte sikkerhetsverktøy viser aldri varsler inne i et nettlesersprettoppvindu.',
      tip: 'Lukk mistenkelige nettlesersprettoppvinduer med X-knappen. Ring aldri telefonnumre vist i nettlesersprettoppvinduer — det er alltid svindeltelefoner.',
    },
    {
      browserUrl: 'https://school-portal.edu',
      appName: 'Skoleportalen',
      icon: '🍪',
      message: 'Dette nettstedet bruker informasjonskapsler for å huske innloggingen din og forbedre opplevelsen din.',
      subtext: 'Vi bruker kun nødvendige informasjonskapsler. Ingen personlige data deles med tredjeparter.',
      primaryBtnText: '✓ Godta informasjonskapsler',
      isThreat: false,
      explanation: 'Et legitimt samtykkebanner for informasjonskapsler fra skoleportalen din. Det er transparent om bruk av informasjonskapsler og stiller ingen uvanlige forespørsler. Det er greit å godta nødvendige informasjonskapsler på et pålitelig nettsted.',
      tip: 'Samtykkebanner for informasjonskapsler på pålitelige, kjente nettsteder er påkrevd ved lov i mange land og er helt normalt.',
    },
    {
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Gratulerer!!!',
      icon: '🎉',
      message: 'DU ER DEN 1 000 000. BESØKENDE! Du har vunnet en GRATIS PlayStation 5! Klikk nedenfor for å kreve premien din umiddelbart!',
      subtext: '⏱️ Tilbudet utløper om: 00:59 — krev det før tiden renner ut!',
      primaryBtnText: '🎮 Krev GRATIS PS5!',
      isThreat: true,
      explanation: 'Et falskt premie-sprettoppvindu — ingen nettside deler tilfeldig ut en PlayStation 5. Å klikke på knappen fører til et svindelnettsted som ber om personlig informasjon eller betaling. Nedtellingstimeren er en pressetaktikk.',
      tip: 'Nedtellingstimere i sprettoppvinduer finnes for å stoppe deg fra å tenke. Ekte premier distribueres aldri gjennom tilfeldige nettlesersprettoppvinduer.',
    },
    {
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Vil du tillate YouTube å sende deg varsler om nye videoer fra kanaler du abonnerer på?',
      subtext: 'Du kan endre dette senere i nettleserinnstillingene.',
      primaryBtnText: 'Tillat varsler',
      isThreat: false,
      explanation: 'Selv om YouTube i seg selv er legitimt, er blokkering av nettlesservarsler det tryggere og ryddigere standardvalget — selv fra pålitelige nettsteder. Når tillatelsen er gitt, kan varslingstillatelser misbrukes eller bli spam.',
      tip: 'Tenk nøye gjennom før du tillater nettleservarsler. De fleste nettsteder trenger ikke denne tillatelsen for å fungere ordentlig.',
    },
    {
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Nedlastingsbehandler',
      icon: '⬇️',
      message: 'Fil klar: "Adobe_Photoshop_FULL_CRACK_2024.exe" (87 MB). Vår KI verifiserte denne filen som TRYGG.',
      subtext: 'Drevet av VirusSafe™ — skannet og godkjent. Klikk for å laste ned umiddelbart.',
      primaryBtnText: '✓ Last ned nå',
      isThreat: true,
      explanation: 'Flere røde flagg: mistenkelig ".cc"-domene, cracket (piratkopieret) programvare som nesten alltid er pakket med skadevare, og et falskt selvdeklarert "TRYGG"-merke. "VirusSafe™"-etiketten er oppfunnet for å manipulere deg.',
      tip: 'Cracket eller piratkopieret programvare inneholder nesten alltid skjult skadevare. Last kun ned programvare fra den offisielle utgiverens nettsted.',
    },
  ],
  permissions: [
    {
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Utgiver: Ukjent utvikler · ⭐ 2,1 · 500 nedlastinger',
      description: 'En enkel lommelykteapp.',
      permissions: [
        {
          icon: '📷',
          name: 'Kamera',
          reason: 'For å aktivere blits-LED',
          suspicious: false,
        },
        {
          icon: '📍',
          name: 'Nøyaktig plassering (GPS)',
          reason: 'Ingen grunn oppgitt',
          suspicious: true,
        },
        {
          icon: '📞',
          name: 'Lese anropslogg',
          reason: 'Ingen grunn oppgitt',
          suspicious: true,
        },
        {
          icon: '💾',
          name: 'Tilgang til alle filer',
          reason: 'Ingen grunn oppgitt',
          suspicious: true,
        },
      ],
      isThreat: true,
      explanation: 'En lommelykteapp trenger kun kameratilgang for LED-en. Plassering, anropslogger og full filtilgang er helt unødvendig — dette er kjennetegn på spionvare som stille samler inn dataene dine.',
      tip: 'Spør deg alltid: "Hvorfor trenger denne appen denne tillatelsen?" En lommelykt har ingen legitim bruk for GPS-en eller kontaktene dine.',
    },
    {
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Utgiver: Creative Tools Ltd · ⭐ 4,7 · 2M+ nedlastinger',
      description: 'Rediger og forbedre bilder til skoleprosjekter.',
      permissions: [
        {
          icon: '📷',
          name: 'Kamera',
          reason: 'For å ta nye bilder til redigering',
          suspicious: false,
        },
        {
          icon: '🖼️',
          name: 'Tilgang til bilder',
          reason: 'For å åpne eksisterende bilder',
          suspicious: false,
        },
        {
          icon: '💾',
          name: 'Lagre til lagring',
          reason: 'For å lagre redigerte bilder',
          suspicious: false,
        },
      ],
      isThreat: false,
      explanation: 'Alle tre tillatelsene har klare, logiske grunner direkte knyttet til bilderedigering. Kameratilgang, tilgang til bildebibliotek og lagring av filer er nøyaktig det en bilderedigerer trenger — ikke noe mer.',
      tip: 'Når hver tillatelse som bes om har et klart formål knyttet til appens hovedfunksjon, er det et tegn på ærlig, godt designet programvare.',
    },
    {
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Utgiver: FastGame Studio · ⭐ 4,1 · 800K nedlastinger',
      description: 'Et fartsfylt side-scrolling plattformspill.',
      permissions: [
        {
          icon: '🔊',
          name: 'Spill av lyd',
          reason: 'For lydeffekter i spillet',
          suspicious: false,
        },
        {
          icon: '📳',
          name: 'Vibrasjon',
          reason: 'For haptisk tilbakemelding under spilling',
          suspicious: false,
        },
        {
          icon: '📍',
          name: 'Nøyaktig GPS-plassering',
          reason: 'Ingen grunn oppgitt',
          suspicious: true,
        },
        {
          icon: '📱',
          name: 'Les enhets-ID og info',
          reason: 'Ingen grunn oppgitt',
          suspicious: true,
        },
      ],
      isThreat: true,
      explanation: 'Lyd og vibrasjon er normalt for et spill. Men GPS og enhets-ID har ingen legitim bruk i et plattformspill — disse brukes til å spore og identifisere deg for reklamedatameglere eller for å bygge en profil.',
      tip: 'Selv apper med gode vurderinger kan be om unødvendige tillatelser. Avslå alltid tillatelser som ikke har en klar kobling til appens formål.',
    },
    {
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Utgiver: CsHub Education · ⭐ 4,9 · 50K nedlastinger',
      description: 'Interaktiv cybersikkerhetslæring for elever.',
      permissions: [
        {
          icon: '🌐',
          name: 'Internettilgang',
          reason: 'For å laste inn leksjoner og quizer',
          suspicious: false,
        },
        {
          icon: '💾',
          name: 'Lokal lagring',
          reason: 'For å lagre fremgangen din uten nett',
          suspicious: false,
        },
      ],
      isThreat: false,
      explanation: 'Internettilgang og lokal lagring er begge tydelig nødvendig for en læringsapp som laster inn nettinnhold og lagrer fremgangen din. Kun det som trengs er forespurt — god personvernpraksis.',
      tip: 'Apper som kun ber om de minimale tillatelsene som trengs for kjerneoppgaven, er eksempler på personvernvennlig design.',
    },
  ],
}
