// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAT = {
  aim: 'Suteikti pagrindinių žinių apie autentifikacijos ir tapatybės valdymo principus, skirtus asmeniniam skaitmeniniam turtui apsaugoti.',
  objectives: [
    'Pabrėžti saugaus tapatybės valdymo svarbą.',
    'Pristatyti autentifikacijos sąvoką ir jos skirtingus tipus.',
    'Ugdyti mokinių supratimą apie skaitmeninius išteklius ir prieigos kontrolės sąmoningumą.',
    'Ugdyti mokinių žinias ir įgūdžius kuriant saugius vartotojo vardus ir slaptažodžius pagal rekomendacijas ir gerąją praktiką.',
    'Ugdyti mokinių įgūdžius saugiai tvarkyti slaptažodžius.',
  ],
  outcomes: [
    'Galiu identifikuoti savo asmeninius skaitmeninius išteklius ir paaiškinti rizikas, su kuriomis jie susiduria tiek fizinėje, tiek skaitmeninėje aplinkoje.',
    'Galiu paaiškinti, kas yra autentifikacija, kodėl ji svarbi, ir išvardinti skirtingus autentifikacijos tipus.',
    'Galiu atskirti silpnus ir stiprius vartotojo vardus bei slaptažodžius.',
    'Galiu parodyti, kaip naudoti slaptažodžių tvarkyklę slaptažodžiams saugoti, ir pagrįsti savo pasirinkimus.',
  ],
  parts: [
    {
      goal: 'Padėti mokiniams kurti stiprius, įsimintinus slaptus žodžius ir suprasti, kodėl jų pakartotinis naudojimas yra rizikingas.',
      bundle: {
        filename: 'Autentifikavimas - paketas - 1 dalis',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Paveikslėlis',
            name: 'Internetinė tapatybė',
            filename: 'Paveikslėlis - Internetinė tapatybė',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.1.3
            kind: 'Paveikslėliai',
            name: 'Asmeninių skaitmeninių išteklių pavyzdžiai',
            filename: 'Paveikslėliai - Asmeninių skaitmeninių išteklių pavyzdžiai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.1.4
            kind: 'Darbalapas',
            name: 'Kas nutiktų, jei...?',
            filename: 'Darbalapas - Kas nutiktų, jei',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.1.5
            kind: 'Darbalapas',
            name: 'Mano skaitmeniniai ištekliai',
            filename: 'Darbalapas - Mano skaitmeniniai ištekliai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra skaitmeninė tapatybė?',
          },
          {
            title: 'Skaitmeninių išteklių supratimas',
          },
          {
            title: 'Plenarinis: Apibendrinimas ir neformali vertinimas',
          },
        ],
      },
      featuredVideo: {
        title: 'Kas yra skaitmeninė tapatybė?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams suprasti, jog jų skaitmeninę tapatybę sudaro informacija ir elgesys, kuriais jie dalinasi internete. Pristabdykite ir paklauskite, kurias savo skaitmeninės tapatybės dalis, jų manymu, jie gali kontroliuoti.',
        downloads: {
          video: {
            filename: 'Kas yra skaitmeninė tapatybė',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra skaitmeninė tapatybė - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal:
        'Padėti mokiniams suprasti, kas yra autentifikacija, kodėl ji svarbi ir kaip ji padeda apsaugoti jų skaitmeninę tapatybę ir skaitmeninius išteklius kontroliuojant, kam leidžiama prieiga.',
      bundle: {
        filename: 'Autentifikavimas - paketas - 2 dalis',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Paveikslėliai',
            name: 'Realaus pasaulio autentifikacijos pavyzdžiai',
            filename: 'Paveikslėliai - Realaus pasaulio autentifikacijos pavyzdžiai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.2.3
            kind: 'Paveikslėlis',
            name: 'Prisijungimas prie skaitmeninės sistemos',
            filename: 'Paveikslėlis - Prisijungimas prie skaitmeninės sistemos',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.2.4
            kind: 'Darbalapas',
            name: 'Autentifikacija kasdieniniame gyvenime',
            filename: 'Darbalapas - Autentifikacija kasdieniniame gyvenime',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Autentifikacija',
          },
          {
            title: 'Autentifikacijos tipų supratimas',
          },
          {
            title: 'Autentifikacijos taikymas skaitmeniniams ištekliams',
          },
          {
            title: 'Plenarinis: Apibendrinimas ir neformali vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'Kas yra autentifikacija?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad pristatytumėte autentifikaciją kaip kasdienį mechanizmą, saugantį mokinių skaitmeninius paskyras. Pristabdykite ir paklauskite, kaip jie šiuo metu patvirtina savo tapatybę dažniausiai naudojamose programėlėse.',
        downloads: {
          video: {
            filename: 'Kas yra autentifikacija',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra autentifikacija - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal:
        'Padėti mokiniams suprasti, kas yra autentifikacija, kodėl ji svarbi ir kaip ji padeda apsaugoti jų skaitmeninę tapatybę ir skaitmeninius išteklius kontroliuojant, kam leidžiama prieiga.',
      bundle: {
        filename: 'Autentifikavimas - paketas - 3 dalis',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Paveikslėlis',
            name: 'Silpnų slaptažodžių pavyzdžiai',
            filename: 'Paveikslėlis - Silpnų slaptažodžių pavyzdžiai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.3.3
            kind: 'Paveikslėlis',
            name: 'Stiprių slaptažodžių pavyzdžiai',
            filename: 'Paveikslėlis - Stiprių slaptažodžių pavyzdžiai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.3.4
            kind: 'Kortelės',
            name: 'Sukurkite stiprų slaptažodį',
            filename: 'Kortelės - Sukurkite stiprų slaptažodį',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.3.5
            kind: 'Paveikslėlis',
            name: 'Patikrinkite savo slaptažodį',
            filename: 'Paveikslėlis - Patikrinkite savo slaptažodį',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.3.6
            kind: 'Darbalapas',
            name: 'Mano stipraus slaptažodžio taisyklės',
            filename: 'Darbalapas - Mano stipraus slaptažodžio taisyklės',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Slaptažodžiai',
          },
          {
            title: 'Stiprūs ir silpni slaptažodžiai',
          },
          {
            title: 'Saugus stiprių slaptažodžių kūrimas',
          },
          {
            title: 'Plenarinis: Apibendrinimas ir neformali vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Stiprūs ir silpni slaptažodžiai',
        supportText:
          'Naudokite šį vaizdo įrašą, kad parodytumėte mokiniams skirtumą tarp slaptažodžių, kurie apsaugo paskyras, ir slaptažodžių, kurie kelia jiems riziką. Pakvieskite juos apmąstyti, ar jų pačių slaptažodžiai atitinka stiprumo kriterijus.',
        downloads: {
          video: {
            filename: 'Stiprūs ir silpni slaptažodžiai',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Stiprūs ir silpni slaptažodžiai - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal:
        'Padėti mokiniams suprasti, kas yra dviejų veiksnių autentifikacija ir kodėl daugelio slaptažodžių valdymas yra sudėtingas, pristatyti slaptažodžių tvarkyklės sąvoką ir paaiškinti, kaip slaptažodžių tvarkyklės padeda apsaugoti skaitmenines tapatybes ir skaitmeninius išteklius, kai naudojamos atsakingai su patikimo suaugusiojo pagalba.',
      bundle: {
        filename: 'Autentifikavimas - paketas - 4 dalis',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Paveikslėlis',
            name: 'Du skirtingi autentifikacijos tipai, naudojami kartu',
            filename: 'Paveikslėlis - Du skirtingi autentifikacijos tipai, naudojami kartu',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.4.2
            kind: 'Schema',
            name: 'Monetų rinkinys',
            filename: 'Schema - Monetų rinkinys',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.4.3
            kind: 'Schema',
            name: 'Grupių rinkinys',
            filename: 'Schema - Grupių rinkinys',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.4.4
            kind: 'Schema',
            name: 'PIN kortelės',
            filename: 'Schema - PIN kortelės',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.4.6
            kind: 'Paveikslėlis',
            name: 'Kaip naudoti slaptažodžių tvarkyklę',
            filename: 'Paveikslėlis - Kaip naudoti slaptažodžių tvarkyklę',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.4.7
            kind: 'Paveikslėlis',
            name: 'Slaptažodžių tvarkyklė',
            filename: 'Paveikslėlis - Slaptažodžių tvarkyklė',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.4.8
            kind: 'Paveikslėlis',
            name: 'Slaptažodžių išsaugojimo žingsniai',
            filename: 'Paveikslėlis - Slaptažodžių išsaugojimo žingsniai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.4.9
            kind: 'Darbalapas',
            name: 'Slaptažodžių problemos ir sprendimai',
            filename: 'Darbalapas - Slaptažodžių problemos ir sprendimai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Slaptažodžiai',
          },
          {
            title: 'Slaptažodžių tvarkyklės',
          },
          {
            title: 'Saugus slaptažodžių tvarkyklių taikymas',
          },
          {
            title: 'Plenarinis: Apibendrinimas ir neformali vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'Kas yra slaptažodžių tvarkyklė?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad pristatytumėte slaptažodžių tvarkykles kaip praktinį sprendimą kuriant ir saugant stiprius, unikalius kiekvienos paskyros slaptažodžius. Pristabdykite ir paklauskite mokinių, ar jie yra girdėję apie slaptažodžių tvarkykles ar jas naudoję.',
        downloads: {
          video: {
            filename: 'Kas yra slaptažodžių tvarkyklė',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra slaptažodžių tvarkyklė - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal:
        'Padėti mokiniams suprasti, kaip jų pasirinkimai ir elgesys veikia jų skaitmeninės tapatybės saugumą, ir kaip atsakingas elgesys padeda apsaugoti jų skaitmeninius išteklius, juos pačius ir kitus skaitmeninėse aplinkose.',
      bundle: {
        filename: 'Autentifikavimas - paketas - 5 dalis',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Paveikslėlis',
            name: 'Saugus ir nesaugus elgesys internete',
            filename: 'Paveikslėlis - Saugus ir nesaugus elgesys internete',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.5.3
            kind: 'Darbalapas',
            name: 'Skaitmeninės tapatybės ir autentifikacijos scenarijai',
            filename: 'Darbalapas - Skaitmeninės tapatybės ir autentifikacijos scenarijai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 3.5.4
            kind: 'Darbalapas',
            name: 'Kaip aš saugau savo skaitmeninę tapatybę',
            filename: 'Darbalapas - Kaip aš saugau savo skaitmeninę tapatybę',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Skaitmeninės tapatybės apsauga',
          },
          {
            title: 'Skaitmeninė tapatybė ir autentifikacija',
          },
          {
            title: 'Plenarinis: Apibendrinimas ir neformali vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Savo skaitmeninės tapatybės apsauga',
        supportText:
          'Naudokite šį vaizdo įrašą, kad apibendrintumėte strategijas, kurių mokiniai išmoko savo skaitmeninei tapatybei saugoti. Paskatinkite juos įvardinti vieną konkretų įprotį, kurį pakeis ar pradės po žiūrėjimo.',
        downloads: {
          video: {
            filename: 'Savo skaitmeninės tapatybės apsauga',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Savo skaitmeninės tapatybės apsauga - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
  ],
  otherModulesDivider: 'Tyrinėkite kitas temas',
  otherModulesTitle: 'Kiti moduliai',
  otherModulesSubtitle: 'Naršykite susijusius modulius ir tęskite mokymąsi.',
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
  title: 'Slaptažodžių laboratorija',
  subtitle:
    'Kurkite stipresnį slaptažodį raundas po raundo. Kiekvienas lygis prideda naują ingredientą į jūsų slaptažodžio receptą!',
  howItWorks: 'Kaip tai veikia',
  instruction:
    'Kiekvienas raundas pristato naują slaptažodžio reikalavimą. Įvykdykite visus dabartinio raundo kriterijus, kad galėtumėte tęsti – ir stebėkite, kaip jūsų slaptažodis tampa vis sunkiau įveikiamas!',
  tipLabel: 'Patarimas',
  tip: 'Patikrinkite šoninę juostą dešinėje, kad stebėtumėte raundo pažangą ir gautumėte slaptažodžio patarimų!',
  yourPassword: 'Jūsų slaptažodis',
  placeholder: 'Įveskite slaptažodį čia...',
  passwordInputAriaLabel: 'Slaptažodžio įvestis',
  showPassword: 'Rodyti slaptažodį',
  strengthAriaLabel: 'Slaptažodžio stiprumas',
  roundBadgeTemplate: 'Raundas {n} iš {total}',
  criteriaTitle: 'Slaptažodžio receptas — Raundas {n}:',
  criterionLength: 'Ilgis > 10 simbolių',
  criterionNumber: 'Yra skaičius (0-9)',
  criterionSymbol: 'Yra simbolis (! @ # $ % ^ & * ?)',
  criterionUppercase: 'Yra DIDŽIOJI raidė',
  criterionLowercase: 'Yra mažoji raidė',
  strengthWeak: 'Silpnas',
  strengthOkay: 'Artėjame',
  strengthStrong: 'Stiprus ✓',
  feedbackDefault: 'Pradėkite rašyti, kad pamatytumėte slaptažodžio stiprumą!',
  feedbackAllMet: '🎉 Visi reikalavimai įvykdyti! Spauskite Kitas raundas, kad tęstumėte.',
  almostThereTemplate: 'Beveik! Pabandykite {hint}.',
  hints: {
    length: 'padaryti ilgesnį (10+ simbolių)',
    number: 'pridėti skaičių (0-9)',
    symbol: 'pridėti simbolį, pvz. ! @ # $ %',
    upper: 'pridėti DIDŽIĄJĄ raidę',
    lower: 'pridėti mažąją raidę',
  },
  keepGoing: 'Tęskite!',
  nextRound: 'Kitas raundas →',
  finish: 'Baigti! 🏆',
  nextRoundAriaLabel: 'Pereiti į kitą raundą',
  tryAgain: 'Bandyti dar kartą',
  tryAgainAriaLabel: 'Išvalyti slaptažodį ir pradėti iš naujo',
  completionTitle: 'Slaptažodžių meistras!',
  completionText: 'Jūs baigėte visus 4 raundus ir išmokote kurti neįveikiamus slaptažodžius!',
  completionRounds: '4 / 4 raundai baigti',
  completionTips: 'Stiprūs slaptažodžiai saugo jūsų skaitmeninį gyvenimą. Naudokite šiuos įgūdžius visur, kur kuriate paskyrą!',
  startOver: 'Pradėti iš naujo',
  roundProgressTitle: 'Raundo pažanga',
  roundProgressDesc: 'Užbaikite visus 4 raundus, kad įvaldytumėte slaptažodžius',
  rounds: [
    {
      icon: '🎮',
      title: 'Sukurkite slaptažodį savo žaidimų paskyrai',
      description: 'Pradėkite nuo gero ilgio — bent 10 simbolių!',
      label: 'Raundas 1',
      desc: 'Tik ilgis'
    },
    {
      icon: '📧',
      title: 'Sukurkite slaptažodį savo el. paštui',
      description: 'Puiki pradžia! Dabar pridėkite skaičių, kad būtų sunkiau įveikti.',
      label: 'Raundas 2',
      desc: '+ Skaičius'
    },
    {
      icon: '📱',
      title: 'Sukurkite slaptažodį savo socialiniams tinklams',
      description: 'Gera pažanga! Dabar įdėkite simbolį, kad tikrai sumaišytumėte.',
      label: 'Raundas 3',
      desc: '+ Simbolis'
    },
    {
      icon: '📔',
      title: 'Sukurkite slaptažodį savo slaptam dienoraščiui',
      description: 'Paskutinis raundas! Pridėkite ir DIDŽIĄSIAS, ir mažąsias raides, kad užbaigtumėte visą receptą.',
      label: 'Raundas 4',
      desc: '+ Didžiosios ir mažosios'
    },
  ],
  dosTitle: '✅ Darykite',
  dos: [
    'Maišykite DIDŽIĄSIAS ir mažąsias raides',
    'Pridėkite skaičių viduryje',
    'Naudokite simbolius, pvz. ! @ # $ %',
    'Padarykite bent 12+ simbolių ilgio',
    'Naudokite atsitiktinius derinius',
  ],
  dontsTitle: '❌ Nedarykite',
  donts: [
    'Nenaudokite savo tikrojo vardo ar gimtadienio',
    'Nenaudokite „123456" ar paprastų šablonų',
    'Nekartokite to paties simbolio',
    'Nenaudokite įprastų žodyno žodžių',
    'Nenaudokite savo mokyklos ar augintinio vardo',
  ],
}
