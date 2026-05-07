// ---------------------------------------------------------------------------
// Digital Abuse (DA) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Abuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDA = {
  aim: 'Padėti mokiniams atpažinti žalingą elgesį internete, suprasti, kad ribos yra svarbios, ir žinoti, kokių veiksmų jie gali imtis, kad gautų paramą ir liktų saugūs.',
  objectives: [
    'Apibūdinti skaitmeninį smurtą tinkamais amžiui, palaikomais terminais.',
    'Atpažinti įspėjamuosius ženklus ir nesveikąjį elgesį internete.',
    'Praktikuoti saugų pagalbos ieškojimą ir pranešimo veiksmus.',
  ],
  outcomes: [
    'Identifikuoti elgesio būdus, kurie pažeidžia ribas arba sukelia žalą.',
    'Naudoti paprastus saugumo veiksmus, tokius kaip blokavimas arba pranešimas.',
    'Žinoti patikimus suaugusiuosius ir palaikymo kanalus, su kuriais galima susisiekti.',
  ],
  teachersGuide: {
    ariaLabel: 'Atsisiųsti mokymo vadovą',
    download: 'Skaitmeninio smurto mokymo vadovas',
  },
  parts: [
    {
      title: 'Dezinformacija',
      goal: 'Padėti mokiniams suprasti, kas yra dezinformacija, kas motyvuoja žmones tai daryti ir kaip ją atpažinti.',
      bundle: {
        filename: 'Digital Abuse Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Žaidimas',
            name: 'Tiesos detektyvai',
            filename: 'Game - Truth Detectives',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra dezinformacija?',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Kas yra dezinformacija?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad supažindintumėte su dezinformacija kaip klaidingais ar netiksliais turinio fragmentais, kurie gali plisti internete be žalingos intencijos. Sustokite ir paklauskite mokinių, ar jie kada nors pasidalino kuo nors, kas vėliau pasirodė esąs netiesa.',
        downloads: {
          video: {
            filename: 'What is Misinformation',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'What is Misinformation - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Klaidinformacija',
      goal: 'Padėti mokiniams suprasti, kas yra klaidinformacija, motyvacijas už jos ir kaip ją atpažinti.',
      bundle: {
        filename: 'Digital Abuse Part 2 Package',
      },
      included: {
        materials: [],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra klaidinformacija?',
          },
          {
            title: 'Algoritmai',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Kas yra klaidinformacija?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams atskirti klaidinformaciją — tyčia apgaulingą turinį — nuo dezinformacijos. Sustokite aptarti, kaip intencija keičia tai, kaip mes vertiname ir reaguojame į melagingą informaciją.',
        downloads: {
          video: {
            filename: 'What is Disinformation',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'What is Disinformation - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Kibernetinis patyčiavimasis',
      goal: 'Padėti mokiniams suprasti, kas yra kibernetinis patyčiavimasis, motyvacijas už jo ir kaip jį atpažinti.',
      bundle: {
        filename: 'Digital Abuse Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Žaidimas',
            name: 'Suvaidink tai!',
            filename: 'Game - Act it Out',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra kibernetinis patyčiavimasis?',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Kas yra kibernetinis patyčiavimasis?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams apibrėžti kibernetinį patyčiavimąsi ir suprasti, kaip elgesys internete gali sukelti tikrą emocinę žalą. Sustokite aptarti, kodėl stebėtojų reakcija šiose situacijose yra svarbi.',
        downloads: {
          video: {
            filename: 'What is Cyber Bullying',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'What is Cyber Bullying - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Nepažįstamųjų pavojus',
      goal: 'Padėti mokiniams suprasti, kas yra nepažįstamųjų pavojus, motyvacijas už jo ir kaip jį atpažinti.',
      bundle: {
        filename: 'Digital Abuse Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Žaidimas',
            name: 'Tikra ar netikra?',
            filename: 'Game - Real or Fake',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
    },
    {
      title: 'Influenceriai',
      goal: 'Padėti mokiniams suprasti, kas yra influenceriai ir kas juos motyvuoja.',
      bundle: {
        filename: 'Digital Abuse Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Scenarijai',
            name: 'Influencerių įrašų, kurie gali būti žalingi ir nežalingi, pavyzdžiai',
            filename: 'Scenarios - Examples of Influencers Posts That Are Potentially Harmful and Not Harmful',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Socialinių medijų influenceriai',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Socialinių medijų influenceriai',
        supportText:
          'Naudokite šį vaizdo įrašą, kad ištirtumėte, kaip influenceriai formuoja nuomones ir elgesį socialiniuose tinkluose, ir kokia atsakomybė kyla dėl šios pasiekiamumo galios. Sustokite ir paklauskite mokinių, kuriuos influencerius jie seka ir kas daro juos patikimais.',
        downloads: {
          video: {
            filename: 'Social Media Influencers',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Social Media Influencers - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Kaip galime susidoroti su skaitmeninių nusikaltėlių elgesiu?',
      goal: 'Padėti mokiniams žinoti, ką jie gali padaryti, kad apsisaugotų nuo skaitmeninio smurto.',
      bundle: {
        filename: 'Digital Abuse Part 6 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Veikla',
            name: 'Saugumo superherojaus pasiūlymų paketas',
            filename: 'Activity - Safety Superhero Suggestion Pack',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
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
  title: 'Tikros istorijos',
  subtitle:
    'Priimk sprendimus. Patirk pasekmes. Išmok, kaip susidoroti su kibernetiniu patyčiavimuisi, spaudimu internete ir skaitmeniniu smurtu.',
  howItWorks: 'Kaip tai veikia',
  instruction:
    'Peržiūrėk 10 tikrų skaitmeninio smurto scenarijų. Kiekvienu svarbiu momentu tu pasirinksi, ką daryti — ir skirtingi pasirinkimai lemia tikrai skirtingus rezultatus. Uždirbk iki 3 žvaigždžių už kiekvieną istoriją, radęs saugiausią kelią. Jei gauni sunkią pabaigą, bandyk istoriją iš naujo, kad atrastum geresnį kelią!',
  tip: 'Kiekviena istorija šakojasi keliomis kryptimis. Visada yra bent vienas kelias, vedantis į saugų, teigiamą rezultatą — bet turi priimti teisingus sprendimus jį rasti!',
  tipLabel: 'Patarimas',
  yourBestScore: 'Tavo geriausias rezultatas',
  bestResultDesc: 'Geriausias rezultatas iš kiekvienos istorijos',
  storiesTitle: '📖 Istorijos',
  watchOutTitle: '🚩 Atkreipk dėmesį',
  watchOutItems: [
    '🚩 Bet kas, prašantis privačių nuotraukų',
    '🚩 Slaptažodžio reikalavimai iš partnerių',
    '🚩 Nepažįstamieji, klausiami tavo adreso ar mokyklos',
    '🚩 Spaudimas „Laikyk tai paslaptyje"',
    '🚩 Negeri įrašai, ekrano kopijos, netikri profiliai',
  ],
  welcomeDesc: 'Priimk sprendimus atsargiai — skirtingi keliai veda į labai skirtingus rezultatus.',
  startStory: 'Pradėti istoriją →',
  whatWeLearned: '💡 Ką išmokome:',
  tryDifferentPath: '↩ Išbandyti kitą kelią',
  nextStory: 'Kita istorija →',
  seeFinalScore: '🎉 Žiūrėti galutinį rezultatą',
  allStoriesComplete: 'Visos istorijos baigtos!',
  finalScoreDesc: 'Štai kaip sekėsi visose 10 istorijų:',
  playAgain: 'Žaisti dar kartą',
  rankChampion: '🏆 Saugos čempionas',
  rankChampionMsg: 'Puiku! Beveik kiekvienoje situacijoje radai saugiausią kelią.',
  rankDefender: '🛡️ Skaitmeninis gynėjas',
  rankDefenderMsg: 'Puikus darbas! Didžiąją dalį situacijų suvaldei išmintingai ir saugiai.',
  rankNavigator: '📚 Mokymosi navigatorius',
  rankNavigatorMsg: 'Geros pastangos! Iš naujo žaisk kai kurias istorijas, kad rastum geresnius kelius ir uždirbk daugiau žvaigždžių.',
  rankBeginning: '🌱 Pradedantysis',
  rankBeginningMsg: 'Toliau bandyk skirtingus kelius — kiekvienas pakartojimas moko ką nors naujo!',
  stories: [
    {
      id: 1, title: 'Memo problema', emoji: '😟', topic: 'Kibernetinis patyčiavimasis',
      nodes: [
        {
          id: 'start',
          text: 'Atidarei telefoną ir matai grupinį pokalbį. Kažkas vardu Jake paskelbė negražų memą apie tavo klasioką Emma, šaipydamasis iš jos išvaizdos. 23 žmonės jau patiko. Ką darai?',
          choices: ['👍 Patikti memą, kad priklausytum grupei', '📲 Praslinkti pro šalį ir ignoruoti', '💬 Nusiųsti Emma privačią palaikomąją žinutę'],
        },
        {
          id: 'end_a',
          title: 'Problemos dalis',
          text: 'Patikote memą. Jake skelbia daugiau, dar negražesnių. Emma mato tavo vardą tarp mylinčių ir yra sudaužyta. Mokytojas sužino ir susisiekia su tavo tėvais.',
          lesson: 'Negražaus turinio patikimas yra kibernetinio patyčiavimosi forma. Tavo „patinka" niekada nematomas — tikslas visada mato, kas jį palaikė.',
        },
        {
          id: 'mid_b',
          text: 'Praslinksti pro šalį, bet įrašai tęsiasi. Kitą dieną Emma sėdi viena per pietus ir atrodo labai nusiminusi. Patyčiavimasis pablogėjo.',
          choices: ['😶 Toliau ignoruoti — ne tavo problema', '🏫 Pasakyti mokytojui, kas vyko'],
        },
        {
          id: 'end_b1',
          title: 'Tylus stebėtojas',
          text: 'Praeina savaitės. Emma praleidžia mokyklą. Jautiesi kaltas, bet nieko nesakai. Patyčiavimasis tęsiasi be pasipriešinimo.',
          lesson: 'Patyčiavimosi ignoravimas jo nesustabdo. Stebėtojai turi tikrą galią padėti — tylėjimas vis tiek yra pasirinkimas.',
        },
        {
          id: 'end_b2',
          title: 'Drąsus pranešėjas',
          text: 'Mokytojas veikia nedelsiant. Jake ir jo tėvai iškviečiami. Emma gauna paramą iš mokyklos konsultanto. Patyčiavimasis sustoja.',
          lesson: 'Pasakyti patikimam suaugusiajam yra vienas iš galingiausių dalykų, ką gali padaryti. Tai ne skundimas — tai apsaugoti ką nors, kam reikia pagalbos.',
        },
        {
          id: 'mid_c',
          text: 'Emma atsako: „Labai ačiū… tai tikrai skaudėjo. Nežinojau, ką daryti." Ji dėkinga, bet išsigandusi. Įrašai vis dar yra.',
          choices: ['📢 Padėti Emma pranešti kiekvieną įrašą platformai', '🤷 Pasakyti Emma tiesiog ignoruoti, praeis'],
        },
        {
          id: 'end_c1',
          title: 'Skaitmeninis gynėjas',
          text: 'Tu ir Emma kartu praneši kiekvieną įrašą. Dauguma pašalinami per dieną. Taip pat lankote mokyklos konsultantą, kuris toliau palaiko Emma. Patyčiavimasis sustoja.',
          lesson: 'Kreipimasis IR veikimas — pranešimas internete ir patikimų suaugusiųjų įtraukimas — yra geriausias atsakas į kibernetinį patyčiavimąsi.',
        },
        {
          id: 'end_c2',
          title: 'Malonus, bet nepakankamai',
          text: 'Emma bando ignoruoti, bet įrašai tęsiasi. Tavo maloni žinutė padėjo, bet be pranešimo ar suaugusiųjų palaikymo patyčiavimasis tęsiasi.',
          lesson: 'Malonumas yra puiki pradžia, tačiau patyčiavimosi pranešimas ir patikimų suaugusiųjų įtraukimas iš tikrųjų jį sustabdo.',
        },
      ],
    },
    {
      id: 2, title: 'Ekrano kopijos spąstai', emoji: '📸', topic: 'Privatumas ir išdavystė',
      nodes: [
        {
          id: 'start',
          text: 'Išsiuntei draugei Zoe privačią žinutę apie simpatiją. Zoe padarė ekrano kopiją ir be leidimo pasidalijo didelėje grupinėje pokalbyje. Visi komentuoja. Ką darai?',
          choices: ['😡 Paskelbti piktą viešą įrašą apie tai, ką Zoe padarė', '📱 Susisiekti su Zoe privačiai', '📸 Išsaugoti įrodymus ir pasakyti patikimam suaugusiajam'],
        },
        {
          id: 'end_a',
          title: 'Ugnis susitinka ugnį',
          text: 'Skelbi viešai, apkaltindamas Zoe. Zoe atsako. Dešimtys žmonių prisijungia prie dramos. Dabar tai visiškas interneto karas ir abu atrodote blogai.',
          lesson: 'Viešas apkaltinimas internete beveik visada eskaluoja situaciją. Jis retai atneša sprendimą, kurio tikiesi.',
        },
        {
          id: 'mid_b',
          text: 'Rašai Zoe: „Kodėl pasidalinai? Tai buvo privatu!" Zoe sako „Tai buvo tik pokštas, nusiramink." Bet ji neištrynė.',
          choices: ['😔 Priimti jos „atsiprašymą" ir tyliai tęsti', '🗣️ Tvirtai paprašyti ištrinti ir įtraukti patikimą suaugusįjį'],
        },
        {
          id: 'end_b1',
          title: 'Nušluota po kilimu',
          text: 'Zoe iš tikrųjų nesupranta, kodėl tai buvo neteisinga. Ekrano kopija lieka. Jautiesi įskaudintas, bet nieko iš tikrųjų neišspręsta.',
          lesson: '„Tik pokštas" niekada nėra pasiteisinimas dalinantis privačiomis žinutėmis. Priimant blogą elgesį be pasekmių reiškia, kad tai gali pasikartoti.',
        },
        {
          id: 'end_b2',
          title: 'Tikrasis sprendimas',
          text: 'Veikiama spaudimo ir su suaugusiųjų įtraukimu Zoe ją ištrina ir veda tikrą pokalbį apie sutikimą ir privatumą. Jūsų draugystė atsigauna sveikesniais pagrindais.',
          lesson: 'Ramus, bet tvirtas savo privatumo gynimas — su suaugusiųjų parama — veda prie tikro pokyčio, o ne tik laikinos ramybės.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis padeda pranešti platformai ir susisiekia su Zoe tėvais. Ekrano kopija pašalinama. Zoe atsiprašo.',
          choices: ['🤝 Priimti jos atsiprašymą ir stengtis atkurti draugystę', '🚫 Blokuoti Zoe — nebenori jos kaip draugės'],
        },
        {
          id: 'end_c1',
          title: 'Pasitikėjimas atkurtas',
          text: 'Su suaugusiųjų parama ir tikru atsiprašymu situacija tinkamai išsprendžiama. Zoe supranta sutikimą. Abi judite į priekį.',
          lesson: 'Dokumentavimas, pranešimas ir tikro atsiprašymo erdvės suteikimas paverčia skausmingą patirtį tikru mokymosi momentu.',
        },
        {
          id: 'end_c2',
          title: 'Saugi distancija',
          text: 'Ekrano kopija pašalinta ir esi apsaugotas. Blokavimas yra tinkama riba, kai pasitikėjimas sulaužytas. Saugus rezultatas teisingų veiksmų dėka.',
          lesson: 'Savęs apsaugojimas visada teisingas. Suaugusiųjų įtraukimas situacijai spręsti buvo tiksliai teisingas žingsnis.',
        },
      ],
    },
    {
      id: 3, title: 'Žaidimų įniršis', emoji: '🎮', topic: 'Priekabiavimas žaidžiant internete',
      nodes: [
        {
          id: 'start',
          text: 'Žaidi mėgstamiausią internetinį žaidimą ir kitas žaidėjas pradeda siuntinėti neapykantingas žinutes — vadina pravardėmis ir grasina. Kiti lobilyje stebi. Ką darai?',
          choices: ['💢 Atsakyti savo įžeidimais', '🙉 Ignoruoti žinutes ir toliau žaisti', '🔇 Nutildyti, padaryti ekrano kopiją ir pranešti apie žaidėją žaidime'],
        },
        {
          id: 'end_a',
          title: 'Abu užblokuoti',
          text: 'Ginčijiesi atgal. Abu pranešate vienas apie kitą. Sistema pažymi tavo paskyrą. Abu užblokuojami — toksiškas žaidėjas pranešė apie tave pirmas.',
          lesson: 'Neapykanta atsakant į neapykantą kelia riziką ir tau. Žaidimų platformos dažnai blokuoja abi toksinio keitimosi puses.',
        },
        {
          id: 'mid_b',
          text: 'Ignoruoji juos, bet jie eskaluoja. Dabar rado tavo viešą žaidimo profilį ir skelbia ten įžeidimus kitiems matyti.',
          choices: ['🗑️ Ištrinti profilį, kad sustabdytum juos', '📢 Pranešti platformai ir pasakyti patikimam suaugusiajam'],
        },
        {
          id: 'end_b1',
          title: 'Bėgimas',
          text: 'Profilio ištrynimas kol kas sustabdo šį priekabiavimą. Bet jis pereina prie kito taikinio. Jokių pasekmių, jokio tikro pokyčio.',
          lesson: 'Savęs apsaugojimas svarbus, bet pranešimas užtikrina, kad priekabiaujantiems kiltų pasekmės ir jie negalėtų toliau to daryti kitiems.',
        },
        {
          id: 'end_b2',
          title: 'Žaidėjas užblokuotas',
          text: 'Platforma tiria ir blokuoja priekabiautojo paskyrą. Patikimas suaugusysis padeda peržiūrėti privatumo nustatymus ir jautiesi palaikomas.',
          lesson: 'Pranešimas apie žaidimų priekabiavimą veikia. Platformos rimtai žiūri į šiuos pranešimus, ypač kai ekrano kopijos išsaugotos kaip įrodymai.',
        },
        {
          id: 'mid_c',
          text: 'Nutildei ir pranešei apie žaidėją su ekrano kopijomis. Pranešimas peržiūrimas. Bet vis dar esi sukrėstas to, kas buvo pasakyta.',
          choices: ['🗣️ Pasakyti patikimam suaugusiajam, kaip patirtis privertė tave jaustis', '😶 Pasilikti sau — jau susitvarkei'],
        },
        {
          id: 'end_c1',
          title: 'Pranešimas ir palaikymas',
          text: 'Patikimas suaugusysis patvirtina tavo jausmus ir padeda sureguliuoti privatumo nustatymus. Platforma patvirtina, kad žaidėjas buvo užblokuotas.',
          lesson: 'Pranešimas svarbus, bet taip pat svarbu apdoroti, kaip internetinis smurtas verčia tave jaustis. Patikimi suaugusieji gali padėti abiem.',
        },
        {
          id: 'end_c2',
          title: 'Pusinis sprendimas',
          text: 'Žaidėjas užblokuojamas, bet tu pats nešioji patirtį. Jautiesi saugesnis internete, bet vis dar nerimauji.',
          lesson: 'Puikiai susitvarkai su technine puse! Prisimink: kalbėjimasis su kuo nors apie tai, kaip internetinis smurtas verčia jaustis, yra lygiai taip pat svarbu.',
        },
      ],
    },
    {
      id: 4, title: 'Netikras profilis', emoji: '👤', topic: 'Apsimetimas kitu asmeniu',
      nodes: [
        {
          id: 'start',
          text: 'Pastebėjai netikrą socialinių medijų paskyrą, naudojančią draugo Sam nuotraukas. Ji skelbia gėdinančius dalykus ir prideda Sam klasiokus. Sam dar nežino. Ką darai?',
          choices: ['💬 Parašyti netikrai paskyrai ir liepti jai sustoti', '📞 Nedelsiant pasakyti Sam, kad jis žinotų', '🚩 Pranešti apie netikrą paskyrą IR nedelsiant pasakyti Sam'],
        },
        {
          id: 'end_a',
          title: 'Nekurstyk trolio',
          text: 'Netikra paskyra tave blokuoja ir pagreitina skelbimus. Dabar pradeda taikytis ir į tave. Tiesioginis įsikišimas padėtį pablogino.',
          lesson: 'Tiesioginis susisiekimas su netikra ar piktnaudžiaujančia paskyra beveik visada padaro dalykus blogiau. Vietoj to pranešk platformai.',
        },
        {
          id: 'mid_b',
          text: 'Sam šokiruotas ir nusiminęs. Sam nori parašyti visiems, kad paaiškintų, jog tai netikra, bet nežino, ką dar daryti. Paskyra vis dar veikia.',
          choices: ['📢 Padėti Sam pranešti apie paskyrą platformai', '🗣️ Pasiūlyti Sam tik asmeniškai paaiškinti, kad tai netikra'],
        },
        {
          id: 'end_b1',
          title: 'Komandinis darbas laimi',
          text: 'Tu ir Sam kartu pranešate apie paskyrą. Platforma ją pašalina per kelias valandas. Sam taip pat pasako patikimam suaugusiajam, kuris padeda stebėti būsimus bandymus.',
          lesson: 'Bendras netikrų paskyrų pranešimas yra labai efektyvus. Platformos labai rimtai žiūri į apsimetimą ir veikia greitai.',
        },
        {
          id: 'end_b2',
          title: 'Lėta reakcija',
          text: 'Sam asmeniškai paaiškina žmonėms, bet netikra paskyra lieka dienų dienas, sukeldama daugiau gėdos, kol galų gale kažkas kitas ją praneša.',
          lesson: 'Pranešimas apie netikras paskyras tiesiogiai platformai yra daug greitesnis ir efektyvesnis nei bandymas paaiškinti kiekvienam atskirai.',
        },
        {
          id: 'mid_c',
          text: 'Platforma gauna tavo pranešimą ir pradeda tikrinti paskyrą. Sam dėkingas, kad taip greitai veikei.',
          choices: ['🏠 Taip pat pasakyti patikimam suaugusiajam, kad Sam jaustųsi palaikomas', '⏳ Tiesiog laukti, kol platforma veiks'],
        },
        {
          id: 'end_c1',
          title: 'Visapusiška apsauga',
          text: 'Su suaugusiųjų parama ir platformos veiksmais paskyra pašalinama. Sam jaučiasi tikrai rūpinamasi. Mokykla įspėjama stebėti tolesnius bandymus.',
          lesson: 'Pranešimas platformai IR patikimo suaugusiojo įtraukimas suteikia geriausią įmanomą apsaugą, kai kažkas apsimeta kitu.',
        },
        {
          id: 'end_c2',
          title: 'Greiti veiksmai',
          text: 'Platforma pašalina paskyrą. Sam palengvėja. Puikus rezultatas greito, teisingo veikimo dėka.',
          lesson: 'Nedelsiant pranešti apie netikras paskyras platformai yra tiksliai teisingas žingsnis. Greitas pranešimas reiškia greitesnį pašalinimą.',
        },
      ],
    },
    {
      id: 5, title: 'Išstumtas internete', emoji: '😔', topic: 'Atskirtis internete',
      nodes: [
        {
          id: 'start',
          text: 'Sužinai, kad tavo draugų grupė sukūrė naują grupinį pokalbį be tavęs. Jie planuoja vakarėlį, į kurį nepakvietė tavęs, ir gali matyti, kaip jie viešai apie tai skelbia. Jautiesi įskaudintas ir pažemintas.',
          choices: ['📣 Viešai skelbti apie skausmą ir atskirtį', '💬 Siųsti piktą žinutę visai grupei', '🤝 Privačiai parašyti artimiausiam draugui grupėje'],
        },
        {
          id: 'end_a',
          title: 'Viešas protrūkis',
          text: 'Tavo viešas įrašas sulaukia dėmesio, daugiausia gėdos. Draugų grupė apsigina. Drama plinta po visą mokyklą internete.',
          lesson: 'Viešas skundimasis dėl atskirties retai padeda ir dažniausiai padaro dalykus blogiau. Tiesioginiai privatūs pokalbiai yra daug efektyvesni.',
        },
        {
          id: 'end_b',
          title: 'Grupinio pokalbio drama',
          text: 'Grupinis pokalbis tampa nejaukus. Kai kurie draugai jaučiasi kalti; kiti susierzina. Nieko iš tikrųjų neišsprendžiama ir įtampa išlieka savaitėmis.',
          lesson: 'Konfrontuoti visą grupę iš karto pastato visus į gynybinę poziciją. Asmeniniai pokalbiai akis į akį veikia daug geriau.',
        },
        {
          id: 'mid_c',
          text: 'Artimiausia draugė Mia prisipažįsta, kad jautėsi spaudžiama tave pašalinti kažkieno kito iš grupės. Ji atsiprašo ir sako, kad nori padėti ištaisyti situaciją.',
          choices: ['🤝 Paprašyti Mia kalbėti už tave grupėje', '🏫 Pasakyti patikimam suaugusiajam apie tyčinę atskirtį'],
        },
        {
          id: 'end_c1',
          title: 'Tikrasis sąjungininkas',
          text: 'Mia kalba. Tu vėl įtraukiamas ir asmuo, kuris tave šalino, prikalbinamas. Draugų grupė tampa stipresnė per sąžiningumą.',
          lesson: 'Kai kas nors nori padėti, leisk. Tikri draugai stoja vieni už kitus — net kai tai nepatogu.',
        },
        {
          id: 'end_c2',
          title: 'Suaugusiojo sąjungininkas',
          text: 'Patikimas suaugusysis padeda tarpininkauti. Visi apmąsto, kaip tyčinė atskirtis skaudo. Grupės dinamika keičiasi į gerąją pusę.',
          lesson: 'Tyčinė socialinė atskirtis internete yra patyčiavimosi forma. Patikimas suaugusysis gali padėti pakeisti nesveikąją grupės dinamiką.',
        },
      ],
    },
    {
      id: 6, title: 'Privačios nuotraukos', emoji: '📷', topic: 'Spaudimas dėl nuotraukų',
      nodes: [
        {
          id: 'start',
          text: 'Kažkas, su kuriuo dvi savaites bendrauji internete, sako, kad tikrai tau patinka, ir prašo privačios nuotraukos. Jis žada pirmiausia nusiųsti savo ir sako laikyti tai paslaptyje nuo visų.',
          choices: ['📸 Nusiųsti nuotrauką — jis atrodo tikrai malonus', '😐 Pasakyti, kad jautiesi nepatogiai, bet toliau su juo kalbėti', '🚫 Atsisakyti, nustoti su juo bendrauti ir nedelsiant pasakyti patikimam suaugusiajam'],
        },
        {
          id: 'end_a',
          title: 'Spąstai',
          text: 'Jis niekada nieko neatsiunčia atgal. Vietoj to reikalauja daugiau nuotraukų arba pasidalins tavo su visais. Esi įkliuvęs. Tai vadinama sekstorsionu.',
          lesson: 'Siųsti privačias nuotraukas kam nors, kurį pažįsti tik internete, yra labai pavojinga. Sekstoršonas — šantažas nuotraukomis — yra nusikaltimas. Jei tai atsitiktų, nedelsiant pasakyk patikimam suaugusiajam.',
        },
        {
          id: 'mid_b',
          text: '„Jei nesiųsi, akivaizdu, kad manimi nepasitiki." Jis sako, viskas baigta, jei atsisakysi. Jautiesi sutrikęs ir spaudžiamas.',
          choices: ['📸 Nusileisti ir nusiųsti nuotrauką, kad išsaugotum taiką', '🚫 Blokuoti jį ir nedelsiant pasakyti patikimam suaugusiajam'],
        },
        {
          id: 'end_b1',
          title: 'Spąstai (2 dalis)',
          text: 'Nusiųsti nuotrauką ir šantažas prasideda iš karto. Supranti, kad šis asmuo tai planavo nuo pirmosios žinutės.',
          lesson: 'Sveiki santykiai niekada neapima ultimatumų. „Nusiųsk nuotrauką arba viskas baigta" yra didelis įspėjamasis signalas apie plėšrūną. Pasakyk patikimam suaugusiajam, jei tai kada nors atsitiktų.',
        },
        {
          id: 'end_b2',
          title: 'Geri instinktai',
          text: 'Bloguoji paskyrą ir pasakai patikimam suaugusiajam. Jis padeda pranešti platformai ir paaiškina, kad tai klasikinė nusikaltėlių naudojama groominingo taktika.',
          lesson: 'Atsisakyti spaudimo ir įtraukti patikimą suaugusįjį visada teisinga. Buvai manipuliuojamas — tai atpažinti ir veikti reikia tikros drąsos.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis peržiūri pokalbį ir yra labai susirūpinęs. Jis paaiškina, kad tai atrodo kaip groomingąs — kažkas apsimetantis draugišku, siekiant laimėti tavo pasitikėjimą. Jis nori pranešti.',
          choices: ['📋 Pateikti visą pokalbio istoriją, kad pranešimas būtų stipresnis', '😳 Praleisti kai kurias detales, nes jautiesi sugėdintas'],
        },
        {
          id: 'end_c1',
          title: 'Visiškas atskleidimas',
          text: 'Turėdami visus įrodymus, suaugusysis ir platforma imasi ryžtingų veiksmų. Paskyra pašalinama ir perduodama valdžios institucijoms, kurios gali tinkamai tirti.',
          lesson: 'Pasakoti patikimam suaugusiajam visą istoriją — net gėdinančias dalis — suteikia jiems geriausias galimybes apsaugoti tave ir sustabdyti nusikaltėlį.',
        },
        {
          id: 'end_c2',
          title: 'Dalinis pranešimas',
          text: 'Imamasi kai kurių apsaugos priemonių su ribotomis detalėmis. Esi saugesnis, bet visa informacija būtų labai padėjusi tyrimui.',
          lesson: 'Buvai drąsus prabilus. Visų detalių dalijimasis — net gėdinančių — padeda suaugusiesiems visiškai apsaugoti tave ir neleisti tam atsitikti kitiems.',
        },
      ],
    },
    {
      id: 7, title: 'Naudingas nepažįstamasis', emoji: '🕵️', topic: 'Vaiko tvirkinimas internete',
      nodes: [
        {
          id: 'start',
          text: 'Kažkas žaidimo pokalbyje sako esąs 14 metų ir rašo tau savaitę. Dabar klausia, kur eini į mokyklą, tavo namų adreso ir kada kasdien grįžti namo vienas. Ką darai?',
          choices: ['💬 Atsakyti į klausimus — jis atrodo kaip normalus vaikas', '🤔 Duoti neaiškius atsakymus ir toliau kalbėtis', '🚫 Nustoti atsakyti, jį blokuoti ir nedelsiant pasakyti patikimam suaugusiajam'],
        },
        {
          id: 'end_a',
          title: 'Per daug informacijos',
          text: 'Per kitą savaitę jis žino tavo mokyklą, tvarkaraštį ir adresą. Jis siūlo susitikti asmeniškai. Supranti, kad kažkas labai negerai.',
          lesson: 'Bet kas, kas internete klausia tavo namų adreso, mokyklos pavadinimo ar kasdienio tvarkaraščio, yra rimtas pavojaus signalas — net jei tvirtina esantis tavo amžiaus.',
        },
        {
          id: 'mid_b',
          text: 'Duodi neaiškius atsakymus, bet jis spaudžia vis labiau ir dabar prašo tavo telefono numerio. Kažkas atrodo keistai, bet nenori būti nemandagus.',
          choices: ['📱 Duoti savo numerį — jis buvo toks malonus', '🚫 Jį blokuoti ir pasakyti patikimam suaugusiajam'],
        },
        {
          id: 'end_b1',
          title: 'Per daug susijęs',
          text: 'Jis naudoja tavo numerį, kad rastų kitas tavo socialines paskyras ir sektų tavo veiklą. Patikimas suaugusysis sužino ir yra labai sunerimęs.',
          lesson: 'Niekam nesiskolini telefono numerio ar asmeninių kontaktinių duomenų internete. Kas jų reikalauja, turi blogų ketinimų.',
        },
        {
          id: 'end_b2',
          title: 'Patikimas instinktas',
          text: 'Patikimas suaugusysis patvirtina, kad paskyra atrodo kaip suaugusiojo naudojamas netikras profilis. Jis padeda pranešti ir kartu peržiūrėti privatumo nustatymus.',
          lesson: 'Klausyti nuojautos ir įtraukti patikimą suaugusįjį visada yra teisingas sprendimas, kai kažkas internete atrodo keistai.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis peržiūri pokalbį ir yra labai susirūpinęs. Jis paaiškina, kad tai greičiausiai groomingo bandymas — suaugusysis apsimeta vaiku, siekdamas laimėti tavo pasitikėjimą.',
          choices: ['📋 Pateikti visą pokalbį tinkamam pranešimui', '🤐 Paprašyti tyliai sutvarkyti be valdžios institucijų'],
        },
        {
          id: 'end_c1',
          title: 'Apsaugotas ir stiprus',
          text: 'Paskyra pranešama platformai ir policijai. Patikimas suaugusysis padeda sustiprinti privatumo nustatymus. Galbūt apsaugojai save ir kitus vaikus.',
          lesson: 'Groomingąs yra rimtas nusikaltimas. Pranešimas su visais įrodymais padeda valdžios institucijoms neleisti tam atsitikti kitiems vaikams.',
        },
        {
          id: 'end_c2',
          title: 'Saugesnis, bet nebaigta',
          text: 'Paskyra blokuojama, bet oficialiai nepranešama. Esi saugesnis, bet asmuo gali tiesiog tęsti ir taikytis į kitą.',
          lesson: 'Groomingąs yra per rimtas, kad jį spręstum vienas. Pasitikėjimas suaugusiaisiais tinkamai sutvarkyti pranešimą apsaugo ir tave, ir galimas būsimas aukas.',
        },
      ],
    },
    {
      id: 8, title: 'Neapykanta komentaruose', emoji: '💬', topic: 'Neapykantos kalba',
      nodes: [
        {
          id: 'start',
          text: 'Žiūri tiesioginį žaidimų srautą ir pokalbis prisipildo rasistinių ir neapykantingų komentarų, nukreiptų prieš vieną iš žaidėjų. Komentarai ateina greitai. Taikomas žaidėjas atrodo akivaizdžiai nusiminęs.',
          choices: ['😂 Juoktis iš kai kurių komentarų — tai tik interneto humoras', '😶 Tyliai stebėti nesijungiant', '🚩 Pranešti apie neapykantos kalbą ir pasisakyti pokalbyje'],
        },
        {
          id: 'end_a',
          title: 'Ne tik pokštas',
          text: 'Juokeisi. Žaidėjas palieka srautą ašarodamas. Tavo komentaro ekrano kopijos iškyla vėliau. Jautiesi sugėdintas ir kiti žiūrovai apie tave praneša.',
          lesson: 'Rasiniai įžeidimai ir tikslinė neapykantos kalba niekada nėra „tik interneto humoras". Juokimasis kartu daro tave sukeliamos žalos dalimi.',
        },
        {
          id: 'mid_b',
          text: 'Lieki tylus. Taikomas žaidėjas atsijungia nuo srauto. Pokalbis švenčia jį išvijęs. Jautiesi nepatogiai dėl to, ką ką tik matei.',
          choices: ['💬 Paskelbti palaikomąją žinutę ginant žaidėją', '❌ Uždaryti srautą ir stengtis pamiršti'],
        },
        {
          id: 'end_b1',
          title: 'Vienas balsas keičia viską',
          text: 'Kiti žiūrovai mato tavo žinutę ir pradeda taip pat stoti. Pokalbio nuotaika keičiasi. Keli žmonės praneša apie blogiausius nusikaltėlius ir kai kurios paskyros užblokuojamos.',
          lesson: 'Kai vienas žmogus pasisako priešiškame pokalbyje, visa dinamika gali pasikeisti. Stebėtojai turi tikrą galią keisti erdvės nuotaiką.',
        },
        {
          id: 'end_b2',
          title: 'Tylos kaina',
          text: 'Išeini, bet neapykanta tęsiasi. Taikomas žaidėjas galbūt niekada daugiau nestreamins. Tavo tyla atrodė saugiau, bet prisidėjo prie problemos.',
          lesson: 'Išėjimas apsaugo tavo gerovę, bet pranešimas apie neapykantos kalbą prieš išeinant padeda neleisti jai tęstis.',
        },
        {
          id: 'mid_c',
          text: 'Praneši apie blogiausius komentarus ir paskelbti palaikomąją žinutę. Keli kiti žiūrovai seka tavo pavyzdžiu ir taip pat praneša. Žaidėjas pastebi ir jaučiasi mažiau vienas.',
          choices: ['📣 Taip pat pasikalbėti su patikimu suaugusiuoju ar mokytoju apie tai, ką matei', '✅ Padarei pakankamai — leisk likusiam platformai'],
        },
        {
          id: 'end_c1',
          title: 'Bangos efektas',
          text: 'Keli pranešimai greitai imami sprendžiami. Informuojant patikimą suaugusįjį apie neapykantos kalbą žaidimų erdvėse padeda kurti platesnį pokytį.',
          lesson: 'Pranešimas apie neapykantos kalbą IR informavimas patikimų suaugusiųjų daro platformas saugesnes visiems — dabar ir ateityje.',
        },
        {
          id: 'end_c2',
          title: 'Geras pilietis',
          text: 'Pranešimai imami sprendžiami ir kai kurios paskyros pažymimos. Žaidėjas vėliau dėkoja tau, kad pasisakei pokalbyje.',
          lesson: 'Pranešimas apie neapykantos kalbą IR pasisakymas tuo metu yra galinga kombinacija. Puikiai padaryta, kad ėmeisi veiksmų!',
        },
      ],
    },
    {
      id: 9, title: 'Apkaltinantis įrašas', emoji: '📣', topic: 'Melagingi gandai internete',
      nodes: [
        {
          id: 'start',
          text: 'Kažkas iš mokyklos socialiniuose tinkluose paskelbia visiškai melagingus gandus apie tave. Tai sparčiai plinta — žmonės dalinasi ir rašo negražius komentarus. Nežinai, kas tai pradėjo, ir esi labai nusiminęs.',
          choices: ['😡 Paskelbti piktą atsakymą, kad viešai apsigintum', '💬 Parašyti kiekvienam, kurį pažįsti, kad pasakytum tiesą', '📸 Išsaugoti viską ir nedelsiant pasakyti patikimam suaugusiajam'],
        },
        {
          id: 'mid_a',
          text: 'Tavo atsakymas tampa virusinis. Žmonės ginčijasi dėl jo. Pradinis autorius žino, kad jį paveikei, ir skelbia dar daugiau, mėgaudamasis reakcija.',
          choices: ['💢 Toliau kovoti, kad išvalytum savo vardą', '🗑️ Ištrinti savo atsakymą ir atsitraukti'],
        },
        {
          id: 'end_a1',
          title: 'Jų žaidimo žaidimas',
          text: 'Ginčas labai eskaluoja. Mokytojai įsitraukia. Jūs abu susiduriate su mokyklos pasekmėmis — nors jie tai pradėjo.',
          lesson: 'Piktas reagavimas į melagingus gandus internete maitina dramą ir kelia riziką ir tau. Neduok jiems reakcijos, kurios jie nori.',
        },
        {
          id: 'end_a2',
          title: 'Atsitraukimas',
          text: 'Atsakymo ištrynimas buvo protingas. Drama lėtai rimsta, bet pradinis įrašas lieka be tikrų pasekmių jį paskelbusiam asmeniui.',
          lesson: 'Reaktyvaus įrašo ištrynimas yra protingas žingsnis. Jį sujunk su pradinio turinio pranešimu ir patikimo suaugusiojo įtraukimu, kad gautum tikrą sprendimą.',
        },
        {
          id: 'end_b',
          title: 'Žalos kontrolė',
          text: 'Praleidi valandas rašydamas žmonėms. Kai kurie tiki; kiti ne. Tai išsekina ir įrašas vis dar internete, pasiekdamas naujus žmones.',
          lesson: 'Individualus rašymas kiekvienam yra varginantis ir dažnai neefektyvus. Pranešimas apie įrašą ir patikimo suaugusiojo įtraukimas yra greitesnis ir galingesnis.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis padeda pranešti apie įrašą dėl priekabiavimo. Jis greitai pašalinamas. Kartu išsiaiškinate, kas greičiausiai jį paskelbė.',
          choices: ['🤝 Sutikti su tarpininkautu pokalbiu su asmeniu, kuris jį paskelbė', '🚫 Jį blokuoti ir judėti toliau, kai įrašas pašalintas'],
        },
        {
          id: 'end_c1',
          title: 'Tikrasis sprendimas',
          text: 'Tarpininkaujamas pokalbis su suaugusiųjų parama atskleidžia, kas buvo už gando. Kitas asmuo atsiprašo. Mokykla sukuria naujas gaires, kad būtų išvengta būsimų incidentų.',
          lesson: 'Dokumentavimas, pranešimas ir — kai saugu — pagrindinės priežasties sprendimas veda prie geriausių ir ilgalaikių rezultatų.',
        },
        {
          id: 'end_c2',
          title: 'Saugus ir išspręstas',
          text: 'Įrašas pašalinamas ir esi apsaugotas. Blokavimas laikys tave saugų ateityje. Stiprus rezultatas teisingų veiksmų dėka.',
          lesson: 'Greitai pašalinti žalingą įrašą suaugusiųjų pagalba yra puikus rezultatas. Blokavimas saugumui yra protinga riba.',
        },
      ],
    },
    {
      id: 10, title: 'Slaptažodžio spaudimas', emoji: '🔐', topic: 'Skaitmeninis santykių smurtas',
      nodes: [
        {
          id: 'start',
          text: 'Esi du mėnesius santykiuose. Tavo partneris sako: „Jei tikrai mane mylėtum ir pasitikėtum manimi, duotum man savo slaptažodį, kad galėčiau patikrinti tavo žinutes." Jautiesi nepatogiai. Ką darai?',
          choices: ['🔑 Duoti slaptažodį — neturi ko slėpti', '🤥 Duoti netikrą slaptažodį, kad sustabdytum ginčą', '🗣️ Ramiai paaiškinti, kad sveikie santykiai nereikalauja slaptažodžių dalijimosi'],
        },
        {
          id: 'end_a',
          title: 'Kontrolė prasideda',
          text: 'Tavo partneris skaito visas tavo žinutes ir naudoja tavo paskyras rašyti tavo draugams. Jis kaltina tave dalykais, pagrįstais klaidingai suprastais pokalbiais. Kontrolė eskaluoja.',
          lesson: 'Partneris, reikalaujantis tavo slaptažodžių, yra skaitmeninio santykių smurto forma. Jokie sveiki santykiai to nereikalauja. Kalbėk su patikimu suaugusiuoju, jei tai atsitiktų tau.',
        },
        {
          id: 'mid_b',
          text: 'Tavo partneris supranta, kad slaptažodis yra netikras, ir labai supyksta, apkaltindamas tave melavimu. Spaudimas padvigubėja ir jis reikalauja tikrojo.',
          choices: ['🔑 Nusileisti ir pasidalinti tikruoju slaptažodžiu', '🚪 Baigti santykius ir pasakyti patikimam suaugusiajam apie spaudimą'],
        },
        {
          id: 'end_b1',
          title: 'Įstrigęs',
          text: 'Kai tik jis gauna prieigą, naudoja ją kontroliuoti, su kuo kalbi. Šis kontroliuojančio elgesio modelis eskaluoja vis labiau.',
          lesson: 'Nusileisti skaitmeninei kontrolei retai išsprendžia problemą — paprastai tai verčia kontroliuojantį elgesį eskaluoti.',
        },
        {
          id: 'end_b2',
          title: 'Išsivadavimas',
          text: 'Palikti kontroliuojančius santykius yra sunku, bet teisinga. Patikimas suaugusysis patvirtina, kad tai yra skaitmeninis smurtas, ir padeda suprasti, kaip atrodo sveikos santykių ribos.',
          lesson: 'Kontroliuojančio elgesio atpažinimas ir palikimas — net santykiuose — reikalauja tikros drąsos. Tai visada teisingas sprendimas tavo saugumui.',
        },
        {
          id: 'mid_c',
          text: 'Tavo partneris reaguoja blogai, sakydamas, akivaizdu, kad jo nemyli. Laikaisi savo pozicijos, bet jis toliau spaudžia ir spaudimas didėja.',
          choices: ['💪 Laikytis savo ribos ir pasakyti patikimam suaugusiajam apie spaudimą', '😔 Galiausiai pasidalinti slaptažodžiu, kad nuramintumy situaciją'],
        },
        {
          id: 'end_c1',
          title: 'Sveikos ribos',
          text: 'Patikimas suaugusysis patvirtina, kad slaptažodžių reikalavimas yra kontrolė, o ne meilė. Su jų parama priimi aiškų sprendimą dėl santykių savo sąlygomis.',
          lesson: 'Geras partneris gerbia tavo privatumą. Slaptažodžių reikalavimas yra raudonas vėliavėlis kontroliuojantiems santykiams. Nusipelnai santykių, pagrįstų pasitikėjimu, o ne stebėjimu.',
        },
        {
          id: 'end_c2',
          title: 'Laikina taika',
          text: 'Trumpam jautiesi palengvėjęs, bet kontroliuojantis elgesys tęsiasi — dabar jis to tikisi ateityje. Reikalavimas dėl daugiau prieigos auga.',
          lesson: 'Nusileisti slaptažodžio spaudimui neišsprendžia kontrolės problemos. Tai nustato precedentą. Kontroliuojantis elgesys turi būti sprendžiamas, o ne patenkinamas.',
        },
      ],
    },
  ],
}
