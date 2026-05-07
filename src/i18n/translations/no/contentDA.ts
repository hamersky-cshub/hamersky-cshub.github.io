// ---------------------------------------------------------------------------
// Digital Abuse (DA) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Abuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDA = {
  aim: 'Å hjelpe elever med å gjenkjenne skadelig nettadferd, forstå at grenser er viktige, og vite hvilke steg de kan ta for å få støtte og holde seg trygge.',
  objectives: [
    'Definere digitalt overgrep i aldersvennlige, støttende termer.',
    'Gjenkjenne advarseltegn og usunne nettadferdsmønstre.',
    'Øve på trygge måter å søke hjelp og rapportere på.',
  ],
  outcomes: [
    'Identifisere atferd som krysser grenser eller forårsaker skade.',
    'Bruke enkle sikkerhetstiltak som blokkering eller rapportering.',
    'Kjenne til betrodde voksne og støttekanaler å oppsøke.',
  ],
  teachersGuide: {
    ariaLabel: 'Last ned lærerveiledning',
    download: 'Lærerveiledning for digitalt misbruk',
  },
  parts: [
    {
      title: 'Feilinformasjon',
      goal: 'Hjelpe elever til å forstå hva feilinformasjon er, hva som motiverer folk til å spre det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital Abuse Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Spill',
            name: 'Sannhetsdetektivene',
            filename: 'Game - Truth Detectives',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er feilinformasjon?',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Hva er feilinformasjon?',
        supportText:
          'Bruk denne videoen til å introdusere feilinformasjon som falskt eller unøyaktig innhold som kan spre seg på nettet uten skadelig hensikt. Pause for å spørre elever om de noen gang har delt noe som senere viste seg å ikke stemme.',
        downloads: {
          video: {
            filename: 'What is Misinformation',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'What is Misinformation - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Desinformasjon',
      goal: 'Hjelpe elever til å forstå hva desinformasjon er, motivasjonene bak det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital Abuse Part 2 Package',
      },
      included: {
        materials: [],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er desinformasjon?',
          },
          {
            title: 'Algoritmer',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Hva er desinformasjon?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å skille desinformasjon — bevisst villedende innhold — fra feilinformasjon. Pause for å diskutere hvordan hensikten endrer måten vi vurderer og reagerer på falsk informasjon.',
        downloads: {
          video: {
            filename: 'What is Disinformation',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'What is Disinformation - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Nettmobbing',
      goal: 'Hjelpe elever til å forstå hva nettmobbing er, motivasjonene bak det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital Abuse Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Spill',
            name: 'Spill det ut!',
            filename: 'Game - Act it Out',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er nettmobbing?',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Hva er nettmobbing?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å definere nettmobbing og forstå hvordan nettadferd kan forårsake reell emosjonell skade. Pause for å diskutere hvorfor tilskueres respons er viktig i disse situasjonene.',
        downloads: {
          video: {
            filename: 'What is Cyber Bullying',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'What is Cyber Bullying - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Fremmedes fare',
      goal: 'Hjelpe elever til å forstå hva fremmedes fare er, motivasjonene bak det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital Abuse Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Spill',
            name: 'Ekte eller falsk?',
            filename: 'Game - Real or Fake',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      title: 'Influencere',
      goal: 'Hjelpe elever til å forstå hva influencere er og hva som motiverer dem.',
      bundle: {
        filename: 'Digital Abuse Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Scenarier',
            name: 'Eksempler på influencer-innlegg som er potensielt skadelige og ikke skadelige',
            filename: 'Scenarios - Examples of Influencers Posts That Are Potentially Harmful and Not Harmful',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Influencere på sosiale medier',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Influencere på sosiale medier',
        supportText:
          'Bruk denne videoen til å utforske hvordan influencere former meninger og atferd på sosiale medier, og ansvaret som følger med den rekkevidden. Pause for å spørre elever hvilke influencere de følger og hva som gjør dem troverdige.',
        downloads: {
          video: {
            filename: 'Social Media Influencers',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Social Media Influencers - Subtitles',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Hvordan kan vi håndtere atferden til digitale overgripere?',
      goal: 'Hjelpe elever til å vite hva de kan gjøre for å beskytte seg mot digitalt misbruk.',
      bundle: {
        filename: 'Digital Abuse Part 6 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Aktivitet',
            name: 'Sikkerhets-superhelt forslagspakke',
            filename: 'Activity - Safety Superhero Suggestion Pack',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
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
  title: 'Ekte historier',
  subtitle:
    'Ta valg. Se konsekvenser. Lær hvordan du håndterer nettmobbing, nettpress og digitalt misbruk.',
  howItWorks: 'Slik fungerer det',
  instruction:
    'Gå gjennom 10 virkelige scenarier om digitalt misbruk. I hvert nøkkeløyeblikk velger du hva du gjør — og ulike valg fører til genuint forskjellige utfall. Tjen opptil 3 stjerner per historie ved å finne den tryggeste veien. Hvis du får en vanskelig slutt, prøv historien igjen for å oppdage en bedre rute!',
  tip: 'Hver historie forgrener seg i flere retninger. Det er alltid minst én vei som fører til et trygt, positivt utfall — men du må ta de riktige valgene for å finne den!',
  tipLabel: 'Tips',
  yourBestScore: 'Din beste poengsum',
  bestResultDesc: 'Beste resultat fra hver historie',
  storiesTitle: '📖 Historier',
  watchOutTitle: '🚩 Pass opp for',
  watchOutItems: [
    '🚩 Noen som ber om private bilder',
    '🚩 Passordkrav fra partnere',
    '🚩 Fremmede som spør om adressen din eller skolen din',
    '🚩 «Hold dette hemmelig»-press',
    '🚩 Slemme innlegg, skjermbilder, falske profiler',
  ],
  welcomeDesc: 'Ta valgene dine nøye — forskjellige veier fører til svært forskjellige utfall.',
  startStory: 'Start historie →',
  whatWeLearned: '💡 Det vi lærte:',
  tryDifferentPath: '↩ Prøv en annen vei',
  nextStory: 'Neste historie →',
  seeFinalScore: '🎉 Se sluttpoengsum',
  allStoriesComplete: 'Alle historier fullført!',
  finalScoreDesc: 'Slik gikk det i alle 10 historiene:',
  playAgain: 'Spill igjen',
  rankChampion: '🏆 Sikkerhets-mester',
  rankChampionMsg: 'Enestående! Du fant den tryggeste veien i nesten alle situasjoner.',
  rankDefender: '🛡️ Digital forsvarer',
  rankDefenderMsg: 'Flott arbeid! Du håndterte de fleste situasjoner klokt og trygt.',
  rankNavigator: '📚 Læringsnavigator',
  rankNavigatorMsg: 'Bra innsats! Spill noen historier på nytt for å finne bedre veier og tjene flere stjerner.',
  rankBeginning: '🌱 Kommer i gang',
  rankBeginningMsg: 'Fortsett å prøve forskjellige veier — hvert nytt spill lærer deg noe nytt!',
  stories: [
    {
      id: 1, title: 'Meme-problemet', emoji: '😟', topic: 'Nettmobbing',
      nodes: [
        {
          id: 'start',
          text: 'Du åpner telefonen og ser en gruppechat. Noen som heter Jake har postet et stygt meme om klassekameraten Emma din, som gjør narr av utseendet hennes. 23 personer har allerede likt det. Hva gjør du?',
          choices: ['👍 Like memet for å passe inn med alle', '📲 Scrolle forbi og ignorere det', '💬 Sende Emma en privat støttemelding'],
        },
        {
          id: 'end_a',
          title: 'En del av problemet',
          text: 'Du likte memet. Jake poster mer, enda slemme. Emma ser navnet ditt i likesene og er knust. En lærer finner ut av det og kontakter foreldrene dine.',
          lesson: 'Å like slemt innhold er en form for nettmobbing. Ditt «liker» er aldri usynlig — målet ser alltid hvem som støttet det.',
        },
        {
          id: 'mid_b',
          text: 'Du scroller forbi, men innleggene fortsetter å komme. Neste dag sitter Emma alene til lunsj og ser veldig lei seg ut. Mobbingen har blitt verre.',
          choices: ['😶 Fortsette å ignorere — ikke ditt problem', '🏫 Fortelle en lærer hva som har skjedd'],
        },
        {
          id: 'end_b1',
          title: 'Det tause vitnet',
          text: 'Uker går. Emma er borte fra skolen. Du føler deg skyldig, men sier ingenting. Mobbingen fortsetter uutfordret.',
          lesson: 'Å ignorere mobbing får det ikke til å stoppe. Tilskuere har reell makt til å hjelpe — å være stille er fortsatt et valg.',
        },
        {
          id: 'end_b2',
          title: 'Den modige melder',
          text: 'Læreren handler umiddelbart. Jake og foreldrene hans blir innkalt. Emma får støtte fra skolerådgiveren. Mobbingen stopper.',
          lesson: 'Å fortelle en betrodd voksen er en av de mest kraftfulle tingene du kan gjøre. Det er ikke sladring — det er å beskytte noen som trenger hjelp.',
        },
        {
          id: 'mid_c',
          text: 'Emma svarer: «Tusen takk… det såret virkelig. Jeg visste ikke hva jeg skulle gjøre.» Hun er takknemlig, men redd. Innleggene er fortsatt oppe.',
          choices: ['📢 Hjelpe Emma med å rapportere hvert innlegg til plattformen', '🤷 Fortelle Emma å bare ignorere det, det vil gå over'],
        },
        {
          id: 'end_c1',
          title: 'Den digitale forsvareren',
          text: 'Du og Emma rapporterer hvert innlegg sammen. De fleste fjernes i løpet av en dag. Dere oppsøker også skolerådgiveren, som støtter Emma videre. Mobbingen stopper.',
          lesson: 'Å ta kontakt OG handle — rapportere på nett og involvere betrodde voksne — er gullstandarden for respons på nettmobbing.',
        },
        {
          id: 'end_c2',
          title: 'Snill, men ikke nok',
          text: 'Emma prøver å ignorere det, men innleggene fortsetter. Din snille melding hjalp, men uten rapportering eller voksenstøtte fortsetter mobbingen.',
          lesson: 'Vennlighet er en flott start, men å rapportere mobbing og involvere betrodde voksne er det som faktisk stopper det.',
        },
      ],
    },
    {
      id: 2, title: 'Skjermbilde-fellen', emoji: '📸', topic: 'Personvern og svik',
      nodes: [
        {
          id: 'start',
          text: 'Du sendte en privat melding til venninnen Zoe om at du er forelsket i noen. Zoe tok et skjermbilde og delte det i en stor gruppechat uten å spørre deg. Alle kommenterer. Hva gjør du?',
          choices: ['😡 Poste en sint offentlig uthenging av hva Zoe gjorde', '📱 Konfrontere Zoe privat i en DM', '📸 Lagre bevisene og fortelle en betrodd voksen'],
        },
        {
          id: 'end_a',
          title: 'Ild møter ild',
          text: 'Du poster offentlig og henger ut Zoe. Zoe slår tilbake. Dusinvis av mennesker blander seg inn i dramaet. Nå er det en fullstendig nettkrig og dere begge ser dårlige ut.',
          lesson: 'Offentlig uthenging på nett eskalerer nesten alltid. Det gir sjelden den løsningen du håper på.',
        },
        {
          id: 'mid_b',
          text: 'Du DM-er Zoe: «Hvorfor delte du det? Det var privat!» Zoe sier «Det var bare en spøk, slapp av.» Men hun har ikke slettet det.',
          choices: ['😔 Godta «unnskyldningen» hennes og gå videre stille', '🗣️ Be bestemt om at hun sletter det og involver en betrodd voksen'],
        },
        {
          id: 'end_b1',
          title: 'Feid under teppet',
          text: 'Zoe forstår egentlig ikke hvorfor det var galt. Skjermbildet er fortsatt oppe. Du føler deg såret, men ingenting er virkelig løst.',
          lesson: '«Bare en spøk» er aldri en unnskyldning for å dele private meldinger. Å akseptere dårlig oppførsel uten konsekvenser betyr at det kan skje igjen.',
        },
        {
          id: 'end_b2',
          title: 'Ekte løsning',
          text: 'Under press og med vokseninvolvering sletter Zoe det og har en ekte samtale om samtykke og personvern. Vennskapet ditt gjenopprettes på sunnere vilkår.',
          lesson: 'Å stå opp for personvernet ditt rolig, men bestemt — med voksenstøtte — fører til ekte endring, ikke bare midlertidig ro.',
        },
        {
          id: 'mid_c',
          text: 'En betrodd voksen hjelper med å rapportere det til plattformen og kontakter Zoes foreldre. Skjermbildet fjernes. Zoe unnskylder seg.',
          choices: ['🤝 Godta unnskyldningen hennes og jobbe for å gjenoppbygge vennskapet', '🚫 Blokkere Zoe — du vil ikke ha henne som venn lenger'],
        },
        {
          id: 'end_c1',
          title: 'Tillit gjenoppbygget',
          text: 'Med voksenstøtte og en ekte unnskyldning løser situasjonen seg skikkelig. Zoe forstår samtykke. Dere begge går videre.',
          lesson: 'Å dokumentere, rapportere og gi rom for en ekte unnskyldning gjør en smertefull opplevelse om til et genuint læringsøyeblikk.',
        },
        {
          id: 'end_c2',
          title: 'Trygg avstand',
          text: 'Skjermbildet er borte og du er beskyttet. Blokkering er en gyldig grense når tillit er brutt. Et trygt utfall gjennom riktige handlinger.',
          lesson: 'Å beskytte deg selv er alltid gyldig. Å involvere voksne for å håndtere situasjonen var akkurat det riktige grepet.',
        },
      ],
    },
    {
      id: 3, title: 'Gaming-raseri', emoji: '🎮', topic: 'Trakassering i nettspill',
      nodes: [
        {
          id: 'start',
          text: 'Du spiller favoritt-nettspillet ditt og en annen spiller begynner å spamme hatefulle meldinger — kaller deg navn og fremsetter trusler. Andre i lobbyen ser på. Hva gjør du?',
          choices: ['💢 Slå tilbake med egne fornærmelser', '🙉 Ignorere meldingene og fortsette å spille', '🔇 Mute, ta skjermbilde og rapportere spilleren i spillet'],
        },
        {
          id: 'end_a',
          title: 'Begge utestengt',
          text: 'Du krangler tilbake. Dere begge rapporteres. Systemet markerer kontoen din. Dere begge utestenges — den toksiske spilleren rapporterte deg først.',
          lesson: 'Å svare på hat med hat setter deg i fare også. Spillplattformer utestenger ofte begge sider av toksiske utvekslinger.',
        },
        {
          id: 'mid_b',
          text: 'Du ignorerer dem, men de eskalerer. Nå har de funnet den offentlige spillprofilen din og poster overgrep der for andre å se.',
          choices: ['🗑️ Slette profilen din for å få dem til å stoppe', '📢 Rapportere til plattformen og fortelle en betrodd voksen'],
        },
        {
          id: 'end_b1',
          title: 'Å løpe unna',
          text: 'Å slette profilen din stopper denne trakassereren foreløpig. Men de går videre til neste mål. Ingen konsekvens, ingen reell endring.',
          lesson: 'Å beskytte deg selv er viktig, men rapportering sikrer at trakassereren får konsekvenser og ikke kan fortsette å gjøre det mot andre.',
        },
        {
          id: 'end_b2',
          title: 'Spiller utestengt',
          text: 'Plattformen undersøker og utestenger trakassererens konto. En betrodd voksen hjelper deg med å gjennomgå personverninnstillingene og du føler deg støttet.',
          lesson: 'Å rapportere spilltrakassering fungerer. Plattformer tar disse rapportene alvorlig, særlig når skjermbilder er lagret som bevis.',
        },
        {
          id: 'mid_c',
          text: 'Du har muted og rapportert spilleren med skjermbilder. Rapporten er under gjennomgang. Men du er fortsatt rystet av det som ble sagt.',
          choices: ['🗣️ Fortelle en betrodd voksen hvordan opplevelsen gjorde deg følte', '😶 Holde det for deg selv — du har allerede håndtert det'],
        },
        {
          id: 'end_c1',
          title: 'Rapporter og støtte',
          text: 'En betrodd voksen bekrefter følelsene dine og hjelper deg med å justere personverninnstillingene. Plattformen bekrefter at spilleren ble utestengt.',
          lesson: 'Rapportering er viktig, men det er like viktig å bearbeide hvordan nettovergrep får deg til å føle deg. Betrodde voksne kan hjelpe med begge deler.',
        },
        {
          id: 'end_c2',
          title: 'Halv løsning',
          text: 'Spilleren utestenges, men du bærer opplevelsen alene. Du føler deg tryggere på nett, men er fortsatt urolig.',
          lesson: 'Du håndterte den tekniske siden perfekt! Husk: å snakke med noen om hvordan nettovergrep føles er like viktig.',
        },
      ],
    },
    {
      id: 4, title: 'Falskt profil', emoji: '👤', topic: 'Identitetsforfalskning',
      nodes: [
        {
          id: 'start',
          text: 'Du oppdager en falsk sosiale medier-konto som bruker bildene til vennen Sam. Den poster pinlige ting og legger til klassekameratene til Sam. Sam vet det ikke ennå. Hva gjør du?',
          choices: ['💬 Melde den falske kontoen og si at de skal stoppe', '📞 Fortelle Sam umiddelbart så de vet', '🚩 Rapportere den falske kontoen OG fortelle Sam med en gang'],
        },
        {
          id: 'end_a',
          title: 'Ikke mat trollet',
          text: 'Den falske kontoen blokkerer deg og øker postingen. Nå begynner den å målrette deg også. Å engasjere seg direkte gjorde ting verre.',
          lesson: 'Å kontakte en falsk eller misbrukende konto direkte gjør nesten alltid ting verre. Rapporter til plattformen i stedet.',
        },
        {
          id: 'mid_b',
          text: 'Sam er sjokkert og opprørt. Sam vil melde til alle for å forklare at det er falskt, men er ikke sikker på hva annet de skal gjøre. Kontoen er fortsatt aktiv.',
          choices: ['📢 Hjelpe Sam med å rapportere kontoen til plattformen', '🗣️ Foreslå at Sam bare forteller folk personlig at det er falskt'],
        },
        {
          id: 'end_b1',
          title: 'Teamarbeid vinner',
          text: 'Du og Sam rapporterer kontoen sammen. Plattformen fjerner den i løpet av timer. Sam forteller også en betrodd voksen som hjelper med å overvåke fremtidige forsøk.',
          lesson: 'Å rapportere falske kontoer sammen er svært effektivt. Plattformer tar etterligning svært alvorlig og handler raskt.',
        },
        {
          id: 'end_b2',
          title: 'Langsom respons',
          text: 'Sam forklarer til folk personlig, men den falske kontoen er oppe i dager og forårsaker mer pinlighet før noen andre til slutt rapporterer den.',
          lesson: 'Å rapportere falske kontoer direkte til plattformen er mye raskere og mer effektivt enn å prøve å forklare til alle enkeltvis.',
        },
        {
          id: 'mid_c',
          text: 'Plattformen mottar rapporten din og begynner å gjennomgå kontoen. Sam er takknemlig for at du handlet så raskt.',
          choices: ['🏠 Også fortelle en betrodd voksen for å hjelpe Sam til å føle seg støttet', '⏳ Bare vente på at plattformen skal handle'],
        },
        {
          id: 'end_c1',
          title: 'Full beskyttelse',
          text: 'Med voksenstøtte og plattformens handling fjernes kontoen. Sam føler seg genuint ivaretatt. Skolen varsles om å passe på fremtidige forsøk.',
          lesson: 'Å rapportere til plattformen OG involvere en betrodd voksen gir best mulig beskyttelse når noen etterligner en annen person.',
        },
        {
          id: 'end_c2',
          title: 'Rask handling',
          text: 'Plattformen fjerner kontoen. Sam er lettet. Et flott utfall gjennom rask, riktig handling.',
          lesson: 'Å rapportere falske kontoer umiddelbart til plattformen er akkurat riktig grep. Rask rapportering betyr raskere fjerning.',
        },
      ],
    },
    {
      id: 5, title: 'Utestengt på nett', emoji: '😔', topic: 'Digital utestengning',
      nodes: [
        {
          id: 'start',
          text: 'Du oppdager at vennegjengen din opprettet en ny gruppechat uten deg. De planlegger en fest du ikke ble invitert til, og du kan se at de poster om det offentlig. Du føler deg såret og ydmyket.',
          choices: ['📣 Poste offentlig om å bli såret og holdt utenfor', '💬 Sende en sint melding til hele gruppen', '🤝 Melde til din nærmeste venn i gruppen privat'],
        },
        {
          id: 'end_a',
          title: 'Offentlig sammenbrudd',
          text: 'Det offentlige innlegget ditt tiltrekker seg oppmerksomhet, men mest pinlighet. Vennegjengen blir defensiv. Dramaet sprer seg over hele skolen på nett.',
          lesson: 'Å lufte offentlig om å bli holdt utenfor hjelper sjelden og gjør vanligvis ting verre. Direkte private samtaler er mye mer effektive.',
        },
        {
          id: 'end_b',
          title: 'Gruppechat-drama',
          text: 'Gruppechatten blir ubehagelig. Noen venner føler seg skyldige; andre blir irriterte. Ingenting løses virkelig og spenningene varer i uker.',
          lesson: 'Å konfrontere en hel gruppe på en gang setter alle på defensiven. En-til-en private samtaler fungerer mye bedre.',
        },
        {
          id: 'mid_c',
          text: 'Din nærmeste venn Mia innrømmer at hun følte seg presset til å holde deg utenfor av noen andre i gruppen. Hun unnskylder seg og sier hun vil hjelpe med å rette opp tingene.',
          choices: ['🤝 Be Mia tale din sak til gruppen', '🏫 Fortelle en betrodd voksen om den bevisste utestengingen'],
        },
        {
          id: 'end_c1',
          title: 'Ekte alliert',
          text: 'Mia taler. Du blir inkludert igjen og personen som holdt deg utenfor blir konfrontert. Vennegjengen blir sterkere gjennom ærlighet.',
          lesson: 'Når noen er villige til å hjelpe, la dem. Ekte venner taler for hverandre — selv når det er ubehagelig.',
        },
        {
          id: 'end_c2',
          title: 'Voksen alliert',
          text: 'Den betrodde voksne hjelper til med megling. Alle reflekterer over hvordan bevisst utestenging skader. Gruppedynamikken skifter til det bedre.',
          lesson: 'Bevisst sosial utestengning på nett er en form for mobbing. En betrodd voksen kan hjelpe med å tilbakestille usunne gruppedynamikker.',
        },
      ],
    },
    {
      id: 6, title: 'Private bilder', emoji: '📷', topic: 'Bildebasert press',
      nodes: [
        {
          id: 'start',
          text: 'Noen du har chattet med på nett i to uker sier de virkelig liker deg og ber om et privat bilde. De lover å sende ett først og sier du skal holde det hemmelig for alle.',
          choices: ['📸 Sende et bilde — de virker genuint snille', '😐 Si at du ikke er komfortabel, men fortsette å snakke med dem', '🚫 Nekte, slutte å snakke med dem og fortelle en betrodd voksen nå'],
        },
        {
          id: 'end_a',
          title: 'Fellen',
          text: 'De sender aldri noe tilbake. I stedet krever de flere bilder, eller de deler dine med alle. Du er fanget. Dette kalles sextortion.',
          lesson: 'Å sende private bilder til noen du bare kjenner på nett er ekstremt farlig. Sextortion — utpressing med bilder — er en forbrytelse. Hvis dette skjer, fortell en betrodd voksen umiddelbart.',
        },
        {
          id: 'mid_b',
          text: '«Hvis du ikke sender ett, stoler du åpenbart ikke på meg.» De sier hele greia er over hvis du nekter. Du føler deg forvirret og presset.',
          choices: ['📸 Gi etter og sende et bilde for å bevare freden', '🚫 Blokkere dem og fortelle en betrodd voksen umiddelbart'],
        },
        {
          id: 'end_b1',
          title: 'Fellen (del 2)',
          text: 'Du sender bildet og utpressingen starter umiddelbart. Du innser at denne personen planla dette fra den aller første meldingen.',
          lesson: 'Sunne relasjoner involverer aldri ultimatumer. «Send et bilde, eller vi er ferdige» er et stort advarselstegn på en rovdyr. Fortell en betrodd voksen hvis dette noen gang skjer.',
        },
        {
          id: 'end_b2',
          title: 'Gode instinkter',
          text: 'Du blokkerer kontoen og forteller en betrodd voksen. De hjelper med å rapportere det til plattformen og forklarer at dette er en klassisk groomingtaktikk brukt av kriminelle.',
          lesson: 'Å avslå press og involvere en betrodd voksen er alltid riktig. Du ble manipulert — å gjenkjenne det og handle krever ekte mot.',
        },
        {
          id: 'mid_c',
          text: 'En betrodd voksen ser på samtalen og er svært bekymret. De forklarer at dette ser ut som grooming — noen som later som de er vennlige for å vinne tilliten din. De vil rapportere det.',
          choices: ['📋 Dele hele samtalehistorikken for å styrke rapporten', '😳 Utelate noen detaljer fordi du føler deg flau'],
        },
        {
          id: 'end_c1',
          title: 'Full avsløring',
          text: 'Med fullt bevis iverksetter den voksne og plattformen sterke tiltak. Kontoen fjernes og rapporteres til myndighetene som kan etterforske skikkelig.',
          lesson: 'Å dele hele historien med en betrodd voksen — selv pinlige deler — gir dem best sjanse til å beskytte deg og stoppe den kriminelle.',
        },
        {
          id: 'end_c2',
          title: 'Delvis rapport',
          text: 'Noen beskyttende tiltak iverksettes med begrensede detaljer. Du er tryggere, men det fulle bildet ville ha hjulpet etterforskningen mye mer.',
          lesson: 'Du var modig som sa fra. Å dele alle detaljer — selv pinlige — hjelper voksne med å fullt ut beskytte deg og hindre at det skjer andre.',
        },
      ],
    },
    {
      id: 7, title: 'Den hjelpfulle fremmede', emoji: '🕵️', topic: 'Online grooming',
      nodes: [
        {
          id: 'start',
          text: 'Noen i en spillchat sier de er 14 og har sendt deg meldinger i en uke. De spør nå hvor du går på skole, hjemmeadressen din og når du kommer hjem alene hver dag. Hva gjør du?',
          choices: ['💬 Svare på spørsmålene — de virker som et normalt barn', '🤔 Gi vage svar og fortsette å chatte', '🚫 Slutte å svare, blokkere dem og fortelle en betrodd voksen nå'],
        },
        {
          id: 'end_a',
          title: 'For mye informasjon',
          text: 'I løpet av neste uke kjenner de skolen din, timeplanen din og adressen din. De foreslår å møtes personlig. Du innser at noe er veldig galt.',
          lesson: 'Noen som spør om hjemmeadressen din, skolenavnet ditt eller daglige timeplan på nett er et alvorlig faresignal — selv om de hevder å være på din alder.',
        },
        {
          id: 'mid_b',
          text: 'Du gir vage svar, men de presser hardere og ber nå om telefonnummeret ditt. Noe føles rart, men du vil ikke virke uhøflig.',
          choices: ['📱 Gi nummeret ditt — de har vært så snille', '🚫 Blokkere dem og fortelle en betrodd voksen'],
        },
        {
          id: 'end_b1',
          title: 'For mye tilknyttet',
          text: 'De bruker nummeret ditt til å finne andre sosiale kontoer dine og spore aktiviteten din. En betrodd voksen finner ut av det og er svært alarmert.',
          lesson: 'Du skylder ingen telefonnummeret ditt eller personlige kontaktdetaljer på nett. Alle som presser på etter dem har dårlige hensikter.',
        },
        {
          id: 'end_b2',
          title: 'Betrodd instinkt',
          text: 'En betrodd voksen bekrefter at kontoen ser ut som en falsk profil brukt av en voksen. De hjelper deg med å rapportere det og gjennomgå personverninnstillingene dine sammen.',
          lesson: 'Å handle på en magefølelse og involvere en betrodd voksen er alltid riktig grep når noe føles rart på nett.',
        },
        {
          id: 'mid_c',
          text: 'En betrodd voksen gjennomgår samtalen og er svært bekymret. De forklarer at dette sannsynligvis er et groomingforsøk — en voksen som later som å være et barn for å vinne tilliten din.',
          choices: ['📋 Gi den fulle samtalen for en skikkelig rapport', '🤐 Be om å håndtere det stille uten å involvere myndighetene'],
        },
        {
          id: 'end_c1',
          title: 'Beskyttet og sterk',
          text: 'Kontoen rapporteres til plattformen og politiet. Den betrodde voksne hjelper deg med å stramme opp personverninnstillingene. Du kan ha beskyttet deg selv og andre barn.',
          lesson: 'Grooming er en alvorlig forbrytelse. Å rapportere med fullt bevis hjelper myndighetene med å stoppe det fra å skje med andre barn.',
        },
        {
          id: 'end_c2',
          title: 'Tryggere, men ufullstendig',
          text: 'Kontoen blokkeres, men rapporteres ikke formelt. Du er tryggere, men personen kan rett og slett gå videre og målrette seg noen andre.',
          lesson: 'Grooming er for alvorlig til å håndtere alene. Å stole på voksne til å håndtere rapporten skikkelig beskytter både deg og potensielle fremtidige ofre.',
        },
      ],
    },
    {
      id: 8, title: 'Hat i kommentarfeltet', emoji: '💬', topic: 'Hatytringer',
      nodes: [
        {
          id: 'start',
          text: 'Du ser på en live gaming-strøm og chatten fylles med rasistiske og hatefulle kommentarer rettet mot en av spillerne. Kommentarene kommer raskt. Den targeterte spilleren ser tydelig opprørt ut.',
          choices: ['😂 Le av noen kommentarer — det er bare internetthumor', '😶 Se stille på uten å bli med', '🚩 Rapportere hatytringene og si fra i chatten'],
        },
        {
          id: 'end_a',
          title: 'Ikke bare en spøk',
          text: 'Du lo. Spilleren forlater strømmen i tårer. Skjermbilder av kommentaren din dukker opp senere. Du føler deg skamfull og blir rapportert av andre seere.',
          lesson: 'Rasistiske slengord og målrettede hatytringer er aldri «bare internetthumor». Å le med gjør deg til en del av skaden som påføres.',
        },
        {
          id: 'mid_b',
          text: 'Du er stille. Den targeterte spilleren kobler fra strømmen. Chatten feirer at de jaget ham bort. Du er urolig over det du nettopp så.',
          choices: ['💬 Poste en støttemelding som forsvarer spilleren', '❌ Lukke strømmen og prøve å glemme det'],
        },
        {
          id: 'end_b1',
          title: 'En stemme endrer alt',
          text: 'Andre seere ser meldingen din og begynner også å si fra. Stemningen i chatten skifter. Flere personer rapporterer de verste lovbryterne og noen kontoer utestenges.',
          lesson: 'Én person som sier fra i en fiendtlig chat kan endre hele dynamikken. Tilskuere har reell makt til å endre stemningen i et rom.',
        },
        {
          id: 'end_b2',
          title: 'Stillhetens pris',
          text: 'Du går bort, men hatet fortsetter. Den targeterte spilleren streamer kanskje aldri igjen. Stillheten din føltes tryggere, men bidro til problemet.',
          lesson: 'Å gå bort beskytter din egen velferd, men å rapportere hatytringer før du går hjelper med å forhindre at det fortsetter.',
        },
        {
          id: 'mid_c',
          text: 'Du rapporterer de verste kommentarene og poster en støttemelding. Flere andre seere følger eksemplet ditt og rapporterer også. Spilleren legger merke til det og føler seg mindre alene.',
          choices: ['📣 Også snakke med en betrodd voksen eller lærer om det du så', '✅ Du har gjort nok — la resten opp til plattformen'],
        },
        {
          id: 'end_c1',
          title: 'Ringvirkning',
          text: 'Flere rapporter behandles raskt. Å øke bevisstheten om hatytringer i gamingmiljøer hos en betrodd voksen hjelper med å skape bredere endring.',
          lesson: 'Å rapportere hatytringer OG øke bevisstheten hos betrodde voksne gjør plattformer tryggere for alle — nå og i fremtiden.',
        },
        {
          id: 'end_c2',
          title: 'God borger',
          text: 'Rapporter behandles og noen kontoer flagges. Spilleren takker deg senere for at du sa fra i chatten.',
          lesson: 'Å rapportere hatytringer OG si fra i øyeblikket er en kraftfull kombinasjon. Godt gjort for å handle!',
        },
      ],
    },
    {
      id: 9, title: 'Hengeut-innlegget', emoji: '📣', topic: 'Falske rykter på nett',
      nodes: [
        {
          id: 'start',
          text: 'Noen fra skolen poster helt falske rykter om deg på sosiale medier. Det sprer seg raskt — folk deler det og skriver slemme kommentarer. Du vet ikke hvem som startet det og er veldig opprørt.',
          choices: ['😡 Poste et sint svar for å forsvare deg offentlig', '💬 Melde til alle du kjenner for å fortelle dem sannheten', '📸 Ta skjermbilde av alt og fortelle en betrodd voksen med en gang'],
        },
        {
          id: 'mid_a',
          text: 'Svaret ditt blir viralt. Folk krangler om det. Den opprinnelige posteren vet at de traff deg og poster enda mer, og nyter reaksjonen.',
          choices: ['💢 Fortsette å sloss for å rydde opp i ryktet', '🗑️ Slette svaret ditt og trekke deg unna'],
        },
        {
          id: 'end_a1',
          title: 'Å spille spillet deres',
          text: 'Krangelen eskalerer ille. Lærere involveres. Dere begge møter skolekonsekvenser — selv om de startet det.',
          lesson: 'Å reagere sint på falske rykter på nett mater dramaet og setter deg i fare for konsekvenser også. Gi dem ikke reaksjonen de vil ha.',
        },
        {
          id: 'end_a2',
          title: 'Trekke seg unna',
          text: 'Å slette svaret ditt var smart. Dramaet dør sakte ned, men det opprinnelige innlegget er fortsatt oppe uten noen reell konsekvens for personen som postet det.',
          lesson: 'Å slette et reaktivt innlegg er et smart grep. Par det med å rapportere det opprinnelige innholdet og involvere en betrodd voksen for en reell løsning.',
        },
        {
          id: 'end_b',
          title: 'Skadekontroll',
          text: 'Du bruker timer på å melde til folk. Noen tror deg; andre gjør det ikke. Det er utmattende og innlegget er fortsatt oppe og når nye folk hele tiden.',
          lesson: 'Å melde til alle enkeltvis er drenerende og ofte ineffektivt. Å rapportere innlegget og involvere en betrodd voksen er raskere og mer kraftfullt.',
        },
        {
          id: 'mid_c',
          text: 'Den betrodde voksne hjelper deg med å rapportere innlegget for trakassering. Det tas ned raskt. Sammen finner dere ut hvem som mest sannsynlig postet det.',
          choices: ['🤝 Gå med på en megling med personen som postet det', '🚫 Blokkere dem og gå videre nå som innlegget er nede'],
        },
        {
          id: 'end_c1',
          title: 'Ekte løsning',
          text: 'En megling med voksenstøtte avdekker hva som lå bak ryktet. Den andre personen unnskylder seg. Skolen lager nye retningslinjer for å forhindre fremtidige hendelser.',
          lesson: 'Å dokumentere, rapportere og — når det er trygt — ta tak i rotårsaken fører til de beste og mest varige utfallene.',
        },
        {
          id: 'end_c2',
          title: 'Trygt og løst',
          text: 'Innlegget fjernes og du er beskyttet. Blokkering holder deg trygg fremover. Et sterkt utfall gjennom riktige handlinger.',
          lesson: 'Å få et skadelig innlegg fjernet raskt gjennom voksenhjelp er et flott utfall. Blokkering for å holde seg trygg er en smart grense.',
        },
      ],
    },
    {
      id: 10, title: 'Passordpress', emoji: '🔐', topic: 'Digitalt overgrep i forholdet',
      nodes: [
        {
          id: 'start',
          text: 'Du har vært i et forhold i to måneder. Partneren din sier: «Hvis du virkelig elsket meg og stolte på meg, ville du gi meg passordet ditt slik at jeg kan sjekke meldingene dine.» Du føler deg ukomfortabel. Hva gjør du?',
          choices: ['🔑 Gi dem passordet ditt — du har ingenting å skjule', '🤥 Gi et falskt passord for å stoppe krangelen', '🗣️ Forklare rolig at sunne forhold ikke trenger passorddeling'],
        },
        {
          id: 'end_a',
          title: 'Kontrollen begynner',
          text: 'Partneren din leser alle meldingene dine og bruker kontoene dine til å melde til vennene dine. De anklager deg for ting basert på misforståtte samtaler. Kontrollen eskalerer.',
          lesson: 'En partner som krever passordene dine er en form for digitalt overgrep i et forhold. Ingen sunne forhold krever dette. Snakk med en betrodd voksen hvis dette skjer deg.',
        },
        {
          id: 'mid_b',
          text: 'Partneren din finner ut at passordet er falskt og blir veldig sint, og anklager deg for å lyve. Presset dobler seg og de krever det ekte.',
          choices: ['🔑 Gi etter og dele det ekte passordet', '🚪 Avslutte forholdet og fortelle en betrodd voksen om presset'],
        },
        {
          id: 'end_b1',
          title: 'Fanget',
          text: 'Når de får tilgang, bruker de det til å kontrollere hvem du snakker med. Dette mønsteret av kontrollerende atferd eskalerer videre og videre.',
          lesson: 'Å gi etter for digital kontroll løser sjelden problemet — det får vanligvis den kontrollerende atferden til å eskalere over tid.',
        },
        {
          id: 'end_b2',
          title: 'Å frigjøre seg',
          text: 'Å forlate et kontrollerende forhold er vanskelig, men riktig. En betrodd voksen bekrefter at dette er digitalt overgrep og hjelper deg med å forstå hvordan sunne relasjongrenser ser ut.',
          lesson: 'Å gjenkjenne og forlate kontrollerende atferd — selv i et forhold — krever ekte mot. Det er alltid riktig valg for sikkerheten din.',
        },
        {
          id: 'mid_c',
          text: 'Partneren din reagerer dårlig og sier du åpenbart ikke elsker dem. Du holder fast ved standpunktet ditt, men de fortsetter å presse og presset bygger seg opp.',
          choices: ['💪 Holde grensen din og fortelle en betrodd voksen om presset', '😔 Til slutt dele passordet for å roe ting ned'],
        },
        {
          id: 'end_c1',
          title: 'Sunne grenser',
          text: 'En betrodd voksen bekrefter at å kreve passord er kontroll, ikke kjærlighet. Med deres støtte tar du en klar beslutning om forholdet på egne premisser.',
          lesson: 'En god partner respekterer personvernet ditt. Å kreve passord er et rødt flagg for et kontrollerende forhold. Du fortjener et forhold bygget på tillit, ikke overvåkning.',
        },
        {
          id: 'end_c2',
          title: 'Midlertidig fred',
          text: 'Du føler deg lettet på kort sikt, men den kontrollerende atferden fortsetter — nå forventer de dette fremover. Kravet om mer tilgang vokser.',
          lesson: 'Å gi etter for passordpress løser ikke kontrollproblemet. Det setter en presedens. Kontrollerende atferd må adresseres, ikke imøtekommes.',
        },
      ],
    },
  ],
}
