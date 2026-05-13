// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim: 'Padėti mokiniams suprasti, kas yra kenkėjiška programa, kaip vyksta užkrėtimai ir kokios įpročiai mažina nesaugių atsisiuntimų, failų ir diegimų riziką.',
  objectives: [
    'Pristatyti, kas yra kenkėjiška programa ir kodėl ji pavojinga.',
    'Nustatyti įprastus kenkėjiškų programų plitimo būdus.',
    'Ugdyti įpročius saugesniam atsisiuntimui ir atnaujinimams.',
  ],
  outcomes: [
    'Paaiškinti skirtumą tarp saugių ir nesaugių failų ar nuorodų.',
    'Atpažinti įtartinų atsisiuntimų įspėjamuosius ženklus.',
    'Naudotis patikimais šaltiniais ir prašyti pagalbos, kai neaišku.',
  ],
  parts: [
    {
      goal: 'Padėti mokiniams suprasti kenkėjiškos programos sąvoką.',
      bundle: {
        filename: 'Malware Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Paveikslėlis',
            name: 'Kenkėjiška + programa = kenkėjiška programa',
            filename: 'Image - Malicious + Software = Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.1.3
            kind: 'Darbalapas',
            name: 'Susiję su kenkėjiška programa ar ne?',
            filename: 'Worksheet - Related to Malware or Not',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kenkėjiškos programos apibrėžimas',
          },
          {
            title: 'Apibendrinimas: santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.2
        title: 'Kas yra kenkėjiška programa?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad pristatytumėte kenkėjišką programą kaip programinę įrangą, skirtą padaryti žalą, suteikdami mokiniams pagrindą prieš gilinantis į konkrečius tipus. Padarykite pauzę ir paklauskite, ką jie jau žino ar girdėjo apie kompiuterinius virusus.',
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
      goal: 'Pristatyti įprastus kenkėjiškų programų tipus.',
      bundle: {
        filename: 'Malware Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schema',
            name: 'Monetų rinkinys',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.3
            kind: 'Schema',
            name: 'Mazgų lentelė',
            filename: 'Sheet - Knot Ties Board',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.4
            kind: 'Lapas',
            name: 'Kenkėjiškų programų savybės',
            filename: 'Sheet - Malware Properties',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Mazgų rišimas kenkėjiškų programų tipams',
          },
          {
            title: 'Apibendrinimas: santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Kenkėjiškų programų tipų pristatymas',
        supportText:
          'Naudokite šį vaizdo įrašą, kad suteiktumėte mokiniams aiškią apžvalgą apie skirtingas kenkėjiškų programų kategorijas ir kas kiekvieną iš jų išskiria. Padarykite pauzę trumpai diskusijai, kuris tipas, jų manymu, kelia didžiausią riziką ir kodėl.',
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
      goal: 'Pateikti kenkėjiškų programų charakteristikų apžvalgą, kad būtų galima jas atpažinti ir aptikti.',
      bundle: {
        filename: 'Malware Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Darbalapas',
            name: 'Indikatorių sąrašas',
            filename: 'Worksheet - List of Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.2
            kind: 'Skaitymas',
            name: 'Kenkėjiškų programų atpažinimas',
            filename: 'Reading - Recognising Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.3
            kind: 'Plakatas',
            name: 'Septyni indikatoriai',
            filename: 'Poster - Seven Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.4
            kind: 'Lentelė',
            name: 'Situacija ir indikatoriai',
            filename: 'Table - Situation and Indicators',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kenkėjiškų programų tyrimas',
          },
          {
            title: 'Apibendrinimas: santrauka ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      goal: 'Padėti mokiniams suprasti apsaugos priemones nuo kenkėjiškų programų.',
      bundle: {
        filename: 'Malware Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situacija',
            name: 'Kenkėjiška programa ir duomenų vagystė?',
            filename: 'Situation - Malware and Data Theft',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.2
            kind: 'Plakatas',
            name: 'KĄ DARYTI ir KO NEDARYTI',
            filename: 'Poster - DOs and DON\'Ts',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.3
            kind: 'Darbalapas',
            name: 'Skydas nuo kenkėjiškų programų',
            filename: 'Worksheet - A Shield Against Malware',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Neatsargaus elgesio situacijos analizė',
          },
          {
            title: 'Pagrindinių apsaugos priemonių mokymasis',
          },
          {
            title: 'Apibendrinimas: santrauka ir neoficialus vertinimas',
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
  title: 'Kenkėjiškos programos detektyvas',
  subtitle: 'Esi kibernetinio saugumo analitikas. Tikrink failus savo virtualiame kompiuteryje, skenuok gautuosius, tvarkyk įtartinus iššokančius langus ir peržiūrėk programų leidimus 4 interaktyviuose lygiuose. Ar sugebėsi išlaikyti sistemą švarią?',
  howItWorks: 'Kaip tai veikia',
  instruction: 'Dirbk per 4 lygius savo virtualiame kompiuteryje. Kiekvienas lygis pateikia skirtingą kibernetinio saugumo scenarijų. Atidžiai išnagrinėk kiekvieną atvejį ir nuspręsk, ar jis saugus, ar grėsmė — tada mokykis iš paaiškinimo.',
  tip: 'Kenkėjiška programa dažnai maskuojasi kaip kažkas nekenksmingo. Ieškokite įtartinų failų plėtinių, neteisingai parašytų domenų, nereikalingų leidimų ir pažadų, kurie skamba per gerai, kad būtų tiesa.',
  tipLabel: 'Patarimas',
  welcomeTitle: 'Sveiki, kibernetinio saugumo analitike!',
  welcomeDescription: 'Jūsų kompiuteris gavo įtartinų failų, el. laiškų ir iššokančių langų. Dirbkite per 4 lygius, kad nustatytumėte grėsmes ir apsaugotumėte sistemą.',
  levels: [
    '💻 1 lygis — Failų skaitytuvas',
    '📧 2 lygis — El. pašto gautusis',
    '🌐 3 lygis — Naršyklės iššokantys langai',
    '🔒 4 lygis — Programų leidimai',
  ],
  bootButton: 'Paleisti kompiuterį →',
  scoreLabel: 'Taškai',
  correctLabel: 'Teisingai',
  threatsCaughtLabel: 'Aptiktos grėsmės',
  keepFile: '✓ Palikti failą',
  quarantine: '🗑️ Karantinas',
  safeKeep: '✓ Saugu / Palikti',
  threatRemove: '⚠️ Grėsmė / Pašalinti',
  nextButton: 'Toliau →',
  malwareTypesTitle: 'Kenkėjiškų programų tipai',
  malwareTypesSubtitle: 'Įprasti kenkėjiškų programų tipai, kurių reikia saugotis',
  malwareTypes: [
    '🦠 Virusas — prisijungia prie failų ir plinta',
    '🪱 Kirminas — pats atkartojasi per tinklus',
    '🐴 Trojos arklys — maskuojasi kaip naudinga programa',
    '🔐 Išpirkos reikalaujanti programa — užrakina failus, kol sumokėsi',
    '👁️ Šnipinėjimo programa — slapta stebi veiklą',
    '📢 Reklaminė programa — užverčia tave reklamomis',
  ],
  securityGuideTitle: 'Saugumo vadovas',
  securityGuideSubtitle: 'Raudonos vėliavėlės, kurių reikia saugotis',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs iš nežinomų šaltinių',
    '🚩 Neteisingai parašytos arba suklastotos siuntėjo domeno',
    '🚩 Netikros viruso perspėjimai naršyklėje',
    '🚩 Programos, prašančios nereikalingų leidimų',
    '🚩 Prizai, nemokamos pinigų ar skubios grėsmės',
    '🚩 Atgaliniai skaičiavimo laikrodžiai, keliantys paniką',
  ],
  goldenRule: 'Abejodamas nespausk. Kreipkis į IT palaikymą arba patikimą suaugusįjį.',
  levelCompleteTitle: 'Lygis baigtas!',
  levelCompleteSubtitle: 'Tęsk toliau!',
  levelResultLabel: 'Lygio rezultatas',
  correctDecisionsLabel: 'teisingi sprendimai',
  continueButton: 'Tęsti →',
  resultsTitle: 'Sistema apsaugota! 🛡️',
  resultsDescription: 'Jūsų kibernetinio saugumo ataskaita paruošta.',
  accuracyLabel: 'Tikslumas',
  threatsCaughtStat: 'Aptiktos grėsmės',
  threatsMissedStat: 'Praleistos grėsmės',
  analystRankLabel: 'Analitiko rangas',
  rankTrainee: '📘 Praktikantas',
  rankTraineeMsg: 'Mokykis toliau! Peržiūrėk saugumo vadovą dešinėje ir bandyk dar kartą — pagerės!',
  rankJunior: '🔍 Jaunesnysis analitikas',
  rankJuniorMsg: 'Geras darbas! Kuri tvirtus kenkėjiškų programų aptikimo įgūdžius. Praktika tobulina.',
  rankSenior: '🔐 Vyresnysis analitikas',
  rankSeniorMsg: 'Puikus darbas! Nustatei daugumą grėsmių. Toliau aštrina akį subtilioms raudonoms vėliavėlėms.',
  rankElite: '🛡️ Elitinis kibernetinio saugumo analitikas',
  rankEliteMsg: 'Puikus darbas! Aptikai beveik kiekvieną grėsmę. Tavo skaitmeninio saugumo instinktai puikūs.',
  playAgain: 'Žaisti dar kartą',
  levelMeta: [
    { title: '4 lygių 1 lygis — Failų skaitytuvas', app: '📁 Failų naršyklė', msg: '🔍 Nuskaitomas failas…' },
    { title: '4 lygių 2 lygis — El. pašto gautusis', app: '📧 Paštas', msg: '📧 Skaitomas el. laiškas…' },
    { title: '4 lygių 3 lygis — Naršyklės iššokantys langai', app: '🌐 Naršyklė', msg: '⚠️ Aptiktas iššokantis langas!' },
    { title: '4 lygių 4 lygis — Programų leidimai', app: '⚙️ Programų tvarkytuvė', msg: '⚙️ Peržiūrimi leidimai…' },
  ],
  files: [
    {
      icon: '💀', name: 'FreeMinecraft_Crack.exe', type: 'Vykdomasis failas (.exe)',
      source: 'Atsisiųsta iš: crack-games-free.ru', size: '14,2 MB', date: 'Šiandien, 15:41',
      description: 'Diegimo programa, teigianti, kad suteiks nemokamą Minecraft. Atsisiųsta iš neoficialios rusų svetainės.',
      isThreat: true,
      explanation: 'Nulaužtų žaidimų diegimo programos yra klasikinis būdas platinti Trojos arklius ir išpirkos reikalaujančias programas. .exe plėtinys, įtartinas domenas ir „nemokamas nulaužimas" yra dideli perspėjamieji ženklai.',
      tip: 'Visada atsisiųsk programinę įrangą tik iš oficialių, patikrintų svetainių.',
    },
    {
      icon: '📄', name: 'History_Essay_Draft.docx', type: 'Word dokumentas (.docx)',
      source: 'Sukurta vietoje šiame įrenginyje', size: '48 KB', date: 'Vakar, 19:15',
      description: 'Word dokumentas, kurį pats sukūrei istorijos pamokai.',
      isThreat: false,
      explanation: 'Mažas, vietoje sukurtas Word dokumentas yra saugus. Jis turi standartinį plėtinį, mažą failo dydį ir vietinę kilmę.',
      tip: 'Būk atsargus su .docx failais iš nepažįstamų žmonių — jie gali turėti kenkėjiškų makrokomandų. Tačiau paties sukurti failai yra saugūs.',
    },
    {
      icon: '⚡', name: 'speedup_your_pc.bat', type: 'Paketo scenarijus (.bat)',
      source: 'Gauta per Discord DM iš: xX_h4ck3r_Xx', size: '3,1 KB', date: 'Šiandien, 11:02',
      description: 'Paketo scenarijus, išsiųstas per Discord nežinomo vartotojo, teigiančio, kad pagreitins tavo kompiuterį.',
      isThreat: true,
      explanation: '.bat failai gali vykdyti bet kokią sistemos komandą — įskaitant kenkėjiškų programų diegimą, galinių durų atidarymą ar failų ištrynimą. Niekada nevykdyk scenarijų iš nepažįstamų žmonių.',
      tip: 'Niekada nevykdyk .bat ar .vbs scenarijų iš žmonių, kurių nepažįsti ir kurias visiškai pasitiki, net jei jie teigia, kad tai nekenksinga.',
    },
    {
      icon: '🎵', name: 'Summer_Playlist.mp3', type: 'Garso failas (.mp3)',
      source: 'Išsaugota iš „Spotify" darbalaukio programos', size: '8,7 MB', date: 'Prieš 3 dienas',
      description: 'Muzikos failas, išsaugotas per oficialią Spotify programą.',
      isThreat: false,
      explanation: 'Tai standartinis garso failas iš patikimo šaltinio. .mp3 failai nėra vykdomieji ir nekelia realios rizikos, kai jie gaunami iš teisėtų programų.',
      tip: 'Standartiniai medijos failai (.mp3, .jpg, .mp4) paprastai yra saugūs. Saugokis tik failų, kurie slepia savo plėtinį, pvz., „song.mp3.exe".',
    },
    {
      icon: '🔧', name: 'RegFix_Pro_Setup.exe', type: 'Vykdomasis failas (.exe)',
      source: 'Pristatyta per naršyklės iššokančią reklamą', size: '2,1 MB', date: 'Šiandien, 14:18',
      description: '„Registro taisymo įrankis", kurį pasiūlė iššokantis skelbimas, teigiąs, kad tavo kompiuteris yra pažeistas.',
      isThreat: true,
      explanation: 'Netikri „kompiuterio taisymo" įrankiai, pristatomi per iššokančius skelbimus, yra įprasta reklaminių ir šnipinėjimo programų skleidimo priemonė. Tikri sistemos įrankiai taip neskelbiami.',
      tip: 'Teisėta antivirusinė ar taisymo programinė įranga niekada neplatiname per atsitiktinius naršyklės iššokančius skelbimus.',
    },
    {
      icon: '📸', name: 'Birthday_Party_2024.jpg', type: 'Vaizdo failas (.jpg)',
      source: 'Gauta per WhatsApp iš: Močiutės', size: '2,9 MB', date: 'Praėjusią savaitę',
      description: 'Gimtadienio vakarėlio nuotrauka, kurią išsiuntė tavo močiutė.',
      isThreat: false,
      explanation: '.jpg nuotrauka iš žinomo šeimos nario yra saugi. Standartiniai vaizdai iš patikimų kontaktų nėra kenkėjiška programa.',
      tip: 'Saugokis vaizdo failų su dvigubais plėtiniais, pvz., „photo.jpg.exe" — jie slepia tikrąjį, pavojingą failo tipą.',
    },
    {
      icon: '💎', name: 'FREE_ROBUX_GENERATOR.vbs', type: 'VBScript scenarijus (.vbs)',
      source: 'Nuoroda iš YouTube komentaro', size: '1,8 KB', date: 'Šiandien, 09:55',
      description: 'Scenarijus iš YouTube komentaro, teigiančio, kad generuos neribotus Robux Roblox žaidimui.',
      isThreat: true,
      explanation: '„Nemokamų Robux" generatoriai neegzistuoja — jie yra 100 % sukčiavimas. .vbs scenarijai gali vykdyti galingas sistemos komandas. Tai yra klasikinis kenkėjiškų programų platinimo būdas.',
      tip: 'Nemokamų žaidimo valiutos generatoriai visada yra sukčiavimas. Jie egzistuoja tik tam, kad pavogtų paskyras, įdiegtų kenkėjišką programą arba abu dalykus.',
    },
    {
      icon: '📊', name: 'Science_Project_Data.xlsx', type: 'Excel skaičiuoklė (.xlsx)',
      source: 'Gauta el. paštu iš: johnson.s@westridge-school.edu', size: '156 KB', date: 'Vakar, 10:33',
      description: 'Excel failas su gamtos mokslų projekto duomenimis, atsiųstas patikrintos mokyklos mokytojos.',
      isThreat: false,
      explanation: 'Ši skaičiuoklė yra iš patikrintos mokyklos mokytojos, naudojančios oficialų mokyklos domeną. Failo tipas tinkamas, o failo dydis protingas.',
      tip: 'Office failai iš nežinomų siuntėjų gali turėti kenkėjiškų makrokomandų. Visada patikrink siuntėją prieš atidarydamas priedus.',
    },
  ],
  emails: [
    {
      fromName: 'IT saugumo komanda', fromAddr: 'security-alert@school-itsupport.xyz', avatarLetter: '🔐',
      subject: 'SKUBU: Jūsų mokyklos paskyra buvo nulaužta — iš karto nustatykite naują slaptažodį',
      body: `Mielas(-a) mokiny(-e),

Mūsų sistemos aptiko neteisėtą prieigą prie jūsų mokyklos paskyros iš nežinomos vietos.

Turite NEDELSIANT iš naujo nustatyti slaptažodį, paleisdami pridėtą įrankį. Jei nesiimsite veiksmų per 30 minučių, paskyra bus visam laikui užrakinta.

— IT saugumo skyrius`,
      attachment: 'PasswordReset_Tool.exe',
      isThreat: true,
      explanation: 'Keli perspėjamieji ženklai: įtartinas „.xyz" domenas (ne tikrasis jūsų mokyklos domenas), didelis skubumas ir .exe priedas. Tikri IT skyriai niekada nesiunčia slaptažodžio nustatymo įrankių kaip vykdomųjų failų — jie nurodo į tinkamą prisijungimo puslapį.',
      tip: 'Gavę saugumo perspėjimą, susisiekite su IT tiesiogiai telefono numeriu, kurį jau žinote — niekada nepasitikėkite kontaktine informacija iš paties įtartino el. laiško.',
    },
    {
      fromName: 'Ms. Johnson', fromAddr: 'johnson.s@westridge-school.edu', avatarLetter: 'J',
      subject: 'Mokslo mugė — projekto aprašymas pridėtas',
      body: `Sveiki, klase,

pridedamas oficialus projekto aprašymas artėjančiai mokslo mugei. Jame pateikiami reikalingi skyriai, formatavimo gairės ir pateikimo terminas.

Atneškite užbaigtą plakatą ir ataskaitą į 14 kabinetą iki penktadienio.

Jei turite klausimų, praneškite!

Ms. Johnson
Gamtos mokslų skyrius, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      isThreat: false,
      explanation: 'Tai teisėtas mokyklos el. laiškas. Siuntėjas naudoja patikrintą .edu mokyklos domeną, priedas yra standartinis Word dokumentas, atitinkantis el. laiško turinį, ir nereikalaujama jokios asmeninės informacijos.',
      tip: '.docx failas iš žinomos mokytojos oficialiame mokyklos domene yra saugus. Visada patikrink visą siuntėjo adresą prieš atidarydamas bet kokį priedą.',
    },
    {
      fromName: 'Lucas (žaidimų draugas)', fromAddr: 'lucas.gamer99@gmail.com', avatarLetter: 'L',
      subject: 'draugas paleisk tai, tai duoda tau begalines monetas žaidime!!',
      body: `ei!!

radau internete šį puikų scenarijų, kuris suteikia neribotų monetų Clash Royale. tiesiog paleisk .bat failą ir jis automatiškai pataisys žaidimą lol

mano brolis išbandė ir veikė. bet niekam nesakyk

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      isThreat: true,
      explanation: 'Net tikrų draugų žinutės gali platinti kenkėjišką programą — Luco paskyra gali būti pažeista arba jis gali nežinoti, kad failas pavojingas. .bat scenarijus, teigiąs, kad „nulaužia" žaidimą, yra klasikinis Trojos arklio platinimo būdas. Paleidus jį, užpuolikas gali gauti visišką kontrolę jūsų sistemoje.',
      tip: 'Niekada nevykdyk .bat ar .vbs scenarijų iš bet ko, įskaitant draugus. „Cheat" scenarijai interneto žaidimams beveik visada yra užmaskuota kenkėjiška programa.',
    },
    {
      fromName: 'Mokyklos biblioteka', fromAddr: 'library@westridge-school.edu', avatarLetter: '📚',
      subject: 'Vasaros skaitymo programa — jūsų skaitymo sąrašas',
      body: `Sveiki,

dėkojame, kad užsiregistravote į vasaros skaitymo programą! Pridedamas jūsų asmeninis skaitymo sąrašas pagal jūsų amžių ir interesus.

Bet kurią iš šių knygų galite pasiskolinti iš mokyklos bibliotekos arba užsisakyti per mokinių portalą.

Smagaus skaitymo!

Westridge School bibliotekos komanda`,
      attachment: 'Summer_Reading_List_2024.pdf',
      isThreat: false,
      explanation: 'Teisėtas mokyklos bibliotekos el. laiškas, naudojantis oficialų .edu domeną. .pdf priedas yra skaitymo sąrašas — visiškai tinkamas kontekstui. Nereikalaujama jokios asmeninės informacijos ir jokios nuorodos nėra įtartinos.',
      tip: 'PDF failai iš patikimų, žinomų siuntėjų paprastai yra saugūs. Būkite atsargesni su PDF iš nežinomų siuntėjų, nes jie kartais gali turėti įterptų scenarijų.',
    },
    {
      fromName: 'PRIZŲ PERSPĖJIMŲ CENTRAS', fromAddr: 'winner@free-prize-claim-2024.net', avatarLetter: '🏆',
      subject: 'BUVAI ATRINKTAS — PAREIK SAVO iPHONE 15 DABAR!!!',
      body: `SVEIKINAME!!!

Jūs buvote atsitiktinai atrinktas kaip mūsų laimingasis laimėtojas! Norėdami pareikalauti savo iPhone 15 Pro Max, užpildykite ir grąžinkite pridėtą reikalavimo formą su savo asmeniniais duomenimis ir 4,99 € siuntimo mokesčiu.

Atsakykite per 12 VALANDŲ arba jūsų prizas baigs galioti!

[PAREIKALAUTI SAVO PRIZO →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      isThreat: true,
      explanation: 'Klasikinis prizo sukčiavimas su .html priedu — atidarius jį, įkeliamas netikras tinklalapis, sukurtas pavogti jūsų asmeniniams duomenims ir mokėjimo informacijai. Perspėjamieji ženklai: prizas, į kurį niekada neregistravotės, didelis skubumas, įtartinas siuntėjo domenas ir per daug didžiųjų raidžių.',
      tip: '.html el. pašto priedai, atidarantys „formas", yra įprastas būdas sukurti įtikinamus netikrus prisijungimo ar mokėjimo puslapius vietoje jūsų įrenginyje, apeinant žiniatinklio filtrus.',
    },
  ],
  popups: [
    {
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SAUGUMO PERSPĖJIMAS',
      icon: '🚨',
      message: '⚠️ VIRUSAS APTIKTAS! Jūsų kompiuteris užkrėstas 47 virusais! Nedelsdami skambinkite 1-800-FIX-NOW arba jūsų sistema bus visam laikui pažeista!',
      subtext: '„Windows Defender" aptiko kritinių grėsmių. Veikite dabar!',
      primaryBtnText: '📞 Skambinti dabar ir taisyti',
      isThreat: true,
      explanation: 'Tai „baimę keliantis scenarijus" — netikras viruso perspėjimas, sukurtas priversti jus paskambinti sukčiavimo telefono numeriu arba įdiegti netikrą antivirusinę programą. Tikri saugumo įrankiai niekada nerodo perspėjimų naršyklės iššokančio lango viduje.',
      tip: 'Uždarykite įtartinus naršyklės iššokančius langus naudodami mygtuką X. Niekada neskambinkite telefono numeriais, rodomais naršyklės iššokančiuose languose — tai visada sukčiavimo karštosios linijos.',
    },
    {
      browserUrl: 'https://school-portal.edu',
      appName: 'Mokyklos portalas',
      icon: '🍪',
      message: 'Ši svetainė naudoja slapukus, kad prisimintų jūsų prisijungimą ir pagerintų jūsų patirtį.',
      subtext: 'Naudojame tik būtinus slapukus. Jokie asmeniniai duomenys nėra perduodami trečiosioms šalims.',
      primaryBtnText: '✓ Priimti slapukus',
      isThreat: false,
      explanation: 'Teisėtas slapukų sutikimo pranešimas iš jūsų mokyklos portalo. Jis skaidrus apie slapukų naudojimą ir nepateikia neįprastų prašymų. Būtinų slapukų priėmimas patikimoje svetainėje yra tinkamas.',
      tip: 'Slapukų sutikimo reklamjuostės patikimose, žinomose svetainėse yra reikalaujamos pagal įstatymą daugelyje šalių ir yra visiškai normalios.',
    },
    {
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Sveikiname!!!',
      icon: '🎉',
      message: 'JŪS ESATE 1 000 000-asis LANKYTOJAS! Jūs laimėjote NEMOKAMĄ PlayStation 5! Spustelėkite žemiau, kad nedelsdami pasiimtumėte prizą!',
      subtext: '⏱️ Pasiūlymas baigiasi po: 00:59 — pasiimkite, kol laikas nepasibaigė!',
      primaryBtnText: '🎮 Pasiimti NEMOKAMĄ PS5!',
      isThreat: true,
      explanation: 'Netikras prizo iššokantis langas — jokia svetainė neatsitiktinai apdovanoja lankytojų PlayStation 5. Paspaudus mygtuką, patenkama į sukčiavimo svetainę, prašančią asmeninės informacijos ar mokėjimo. Atgalinės atskaitos laikrodis yra spaudimo taktika.',
      tip: 'Atgalinės atskaitos laikrodžiai iššokančiuose languose egzistuoja tam, kad sustabdytų tave nuo mąstymo. Tikri prizai niekada neplatiname per atsitiktinius naršyklės iššokančius langus.',
    },
    {
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Leisti YouTube siųsti jums pranešimus apie naujus vaizdo įrašus iš kanalų, kuriais prenumeruojate?',
      subtext: 'Galite tai pakeisti vėliau naršyklės nustatymuose.',
      primaryBtnText: 'Leisti pranešimus',
      isThreat: false,
      explanation: 'Nors pati YouTube yra teisėta, naršyklės pranešimų blokavimas yra saugesnis ir tvarkesnis numatytasis pasirinkimas — net ir patikimose svetainėse. Suteikus leidimą, pranešimų teisės gali būti piktnaudžiaujamos arba tapti šlamštu.',
      tip: 'Gerai pagalvokite prieš leisdami naršyklės pranešimus. Daugumai svetainių šis leidimas nereikalingas tinkamam veikimui.',
    },
    {
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Atsisiuntimų tvarkytuvė',
      icon: '⬇️',
      message: 'Failas paruoštas: „Adobe_Photoshop_FULL_CRACK_2024.exe" (87 MB). Mūsų DI patvirtino šį failą kaip SAUGŲ.',
      subtext: 'Valdomos VirusSafe™ — nuskaitytas ir patvirtintas. Spustelėkite, kad nedelsdami atsisiųstumėte.',
      primaryBtnText: '✓ Atsisiųsti dabar',
      isThreat: true,
      explanation: 'Keli perspėjamieji ženklai: įtartinas „.cc" domenas, nulaužta (piratinė) programinė įranga, kuri beveik visada yra komplektuojama su kenkėjiška programa, ir netikras paties paskelbtas „SAUGUS" ženklelis. „VirusSafe™" etiketė yra išgalvota, siekiant jus manipuliuoti.',
      tip: 'Nulaužta ar piratinė programinė įranga beveik visada turi paslėptos kenkėjiškos programos. Atsisiųsk programinę įrangą tik iš oficialios leidėjo svetainės.',
    },
  ],
  permissions: [
    {
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Leidėjas: Nežinomas kūrėjas · ⭐ 2,1 · 500 atsisiuntimų',
      description: 'Paprasta žibintuvėlio programa.',
      permissions: [
        {
          icon: '📷',
          name: 'Kamera',
          reason: 'Įjungti blykstės LED',
          suspicious: false,
        },
        {
          icon: '📍',
          name: 'Tiksli vieta (GPS)',
          reason: 'Priežastis nenurodyta',
          suspicious: true,
        },
        {
          icon: '📞',
          name: 'Skaityti skambučių žurnalą',
          reason: 'Priežastis nenurodyta',
          suspicious: true,
        },
        {
          icon: '💾',
          name: 'Prieiga prie visų failų',
          reason: 'Priežastis nenurodyta',
          suspicious: true,
        },
      ],
      isThreat: true,
      explanation: 'Žibintuvėlio programai reikalinga tik prieiga prie kameros dėl LED. Vieta, skambučių žurnalai ir visų failų prieiga yra visiškai nereikalingi — tai yra šnipinėjimo programos, kuri tyliai renka jūsų duomenis, požymiai.',
      tip: 'Visada paklausk savęs: „Kodėl šiai programai reikia šio leidimo?" Žibintuvėlis neturi teisėtos priežasties prieigai prie jūsų GPS ar kontaktų.',
    },
    {
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Leidėjas: Creative Tools Ltd · ⭐ 4,7 · 2 mln.+ atsisiuntimų',
      description: 'Redaguoti ir tobulinti nuotraukas mokyklos projektams.',
      permissions: [
        {
          icon: '📷',
          name: 'Kamera',
          reason: 'Fotografuoti naujas nuotraukas redagavimui',
          suspicious: false,
        },
        {
          icon: '🖼️',
          name: 'Prieiga prie nuotraukų',
          reason: 'Atidaryti esamas nuotraukas',
          suspicious: false,
        },
        {
          icon: '💾',
          name: 'Išsaugoti atmintyje',
          reason: 'Išsaugoti redaguotas nuotraukas',
          suspicious: false,
        },
      ],
      isThreat: false,
      explanation: 'Visos trys teisės turi aiškias, logiškas priežastis, tiesiogiai susijusias su nuotraukų redagavimu. Prieiga prie kameros, nuotraukų bibliotekos ir failų išsaugojimas yra būtent tai, ko reikia nuotraukų redaktoriui — nieko daugiau.',
      tip: 'Kai kiekviena prašoma teisė turi aiškų tikslą, susijusį su pagrindine programos funkcija, tai yra sąžiningos, gerai sukurtos programinės įrangos ženklas.',
    },
    {
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Leidėjas: FastGame Studio · ⭐ 4,1 · 800 tūkst. atsisiuntimų',
      description: 'Greitas šoninių slinkčių platforminis žaidimas.',
      permissions: [
        {
          icon: '🔊',
          name: 'Leisti garsą',
          reason: 'Žaidimo garso efektams',
          suspicious: false,
        },
        {
          icon: '📳',
          name: 'Vibracija',
          reason: 'Haptiniu grįžtamajam ryšiui žaidžiant',
          suspicious: false,
        },
        {
          icon: '📍',
          name: 'Tiksli GPS vieta',
          reason: 'Priežastis nenurodyta',
          suspicious: true,
        },
        {
          icon: '📱',
          name: 'Skaityti įrenginio ID ir informaciją',
          reason: 'Priežastis nenurodyta',
          suspicious: true,
        },
      ],
      isThreat: true,
      explanation: 'Garsas ir vibracija yra įprasti žaidimui. Tačiau GPS ir įrenginio ID neturi teisėto naudojimo platforminiame žaidime — jie naudojami jums sekti ir identifikuoti reklamuotojų duomenų brokerių arba sukurti profilį.',
      tip: 'Net gerai įvertintos programos gali prašyti nereikalingų leidimų. Visada atsisakyk leidimų, kurie neturi aiškios sąsajos su programos tikslu.',
    },
    {
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Leidėjas: CsHub Education · ⭐ 4,9 · 50 tūkst. atsisiuntimų',
      description: 'Interaktyvus kibernetinio saugumo mokymasis mokiniams.',
      permissions: [
        {
          icon: '🌐',
          name: 'Interneto prieiga',
          reason: 'Pamokoms ir viktorinoms įkelti',
          suspicious: false,
        },
        {
          icon: '💾',
          name: 'Vietinė atmintis',
          reason: 'Jūsų pažangai išsaugoti neprisijungus',
          suspicious: false,
        },
      ],
      isThreat: false,
      explanation: 'Interneto prieiga ir vietinė atmintis yra aiškiai reikalingos mokymo programai, kuri įkelia internetinį turinį ir išsaugo jūsų pažangą. Prašoma tik tai, kas būtina — gera privatumo praktika.',
      tip: 'Programos, kurios prašo tik minimalių leidimų, reikalingų pagrindinei funkcijai, yra privatumą gerbiančio dizaino pavyzdžiai.',
    },
  ],
}
