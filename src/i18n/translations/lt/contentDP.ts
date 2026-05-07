// ---------------------------------------------------------------------------
// Data Privacy (DP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Data Privacy module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDP = {
  aim: 'Padėti mokiniams atpažinti, kas laikoma asmens duomenimis, suprasti, kodėl privatumas yra svarbus, ir priimti saugesnius sprendimus prieš dalinantis informacija internete.',
  objectives: [
    'Apibrėžti asmens duomenis ir identifikuoti, kas yra jautru.',
    'Skatinti apgalvotą dalijimąsi ir sutikimu pagrįstus sprendimus.',
    'Ugdyti informuotumą apie privatumo nustatymus ir saugius numatytuosius parametrus.',
  ],
  outcomes: [
    'Atpažinti dažniausiai pasitaikančius asmeninės informacijos tipus.',
    'Paaiškinti, kaip duomenys gali keliauti ir būti saugomi internete.',
    'Taikyti paprastas privatumo taisykles prieš dalinantis ar skelbiant.',
  ],
  teachingGuide: {
    ariaLabel: 'Atsisiųsti mokymo vadovą',
    download: 'Duomenų privatumo mokymo vadovas',
  },
  parts: [
    {
      goal: 'Padėti mokiniams suprasti, kas yra asmens duomenys, identifikuoti įvairius jautrių duomenų tipus ir atpažinti, kodėl svarbu juos apsaugoti.',
      bundle: {
        filename: 'Data Privacy Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.1.3
            kind: 'Rūšiavimo kortelės',
            name: 'Vieši ar privatūs',
            filename: 'Sorting Cards - Public or Private',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 4.1.5
            kind: 'Darbalapas',
            name: 'Apmąstymai apie viešus ir privačius duomenis',
            filename: 'Worksheet - Reflection on Public vs Private Data',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra asmens duomenys?',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.2
        title: 'Kas yra privatūs duomenys?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad supažindintumėte su privačių duomenų konceptu ir išprovokuotumėte diskusiją apie informacijos tipus, kuriais mokiniai dalinasi kiekvieną dieną. Sustokite ir paklauskite mokinių, kokias detales jie laiko privačiomis.',
        downloads: {
          video: {
            filename: 'What Is Private Data',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'What Is Private Data - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams suprasti, kaip ir kodėl duomenys dalinami internete, sutikimo svarbą ir kaip priimti apgalvotus sprendimus prieš dalinantis asmenine informacija.',
      bundle: {
        filename: 'Data Privacy Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.2.2
            kind: 'Scenarijų kortelės',
            name: 'Vaidmenų žaidimas',
            filename: 'Scenario Cards - Roleplay',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 4.2.3
            kind: 'Paveikslėlis',
            name: 'Dalijimasis internete: Saugu vs. rizikinga',
            filename: 'Image - Sharing Online: Safe vs Risky',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 4.2.4
            kind: 'Darbalapas',
            name: 'Dalintis ar nedalintis?',
            filename: 'Worksheet - Share or Don\'t Share',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kaip dalinami duomenys?',
          },
          {
            title: 'Sutikimas ir leidimai',
          },
          {
            title: 'Plenarinis susirinkimas - Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
    },
    {
      goal: 'Padėti mokiniams sužinoti, kas yra skaitmeninis pėdsakas, suprasti, kaip kasdienė internetinė veikla palieka ilgalaikius pėdsakus, ir apmąstyti ilgalaikį jų elgesio internete poveikį.',
      bundle: {
        filename: 'Data Privacy Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.3.3
            kind: 'Komiksų istorija',
            name: 'Sam gyvenimo diena internete',
            filename: 'Comic Story - A Day in the Life of Sam Online',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 4.3.4
            kind: 'Darbalapas',
            name: 'Sek Sam pėdsaką',
            filename: 'Worksheet - Track Sam\'s Footprint',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra skaitmeninis pėdsakas?',
          },
          {
            title: 'Jūsų internetinių pėdsakų žemėlapis',
          },
          {
            title: 'Plenarinis susirinkimas - Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.3.1
        title: 'Kas yra skaitmeninis pėdsakas?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams įsivaizduoti duomenų pėdsaką, kurį palieka internete. Skatinkite apmąstymus apie tai, kurios iš pastarojo meto veiklų galėjo palikti pėdsaką.',
        downloads: {
          video: {
            filename: 'What Is a Digital Footprint',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'What Is a Digital Footprint - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams išmokti praktinių strategijų peržiūrėti ir valdyti savo skaitmeninį pėdsaką, įskaitant privatumo nustatymų koregavimą ir nepageidaujamų duomenų pašalinimą.',
      bundle: {
        filename: 'Data Privacy Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Kontrolinis sąrašas',
            name: 'Skaitmeninio pėdsako valymo kontrolinis sąrašas',
            filename: 'Checklist - Digital Footprint Cleanup Checklist',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 4.4.2
            kind: 'Darbalapas',
            name: 'Privatumo nustatymų vadovas',
            filename: 'Worksheet - Privacy Settings Guide',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Jūsų skaitmeninio pėdsako peržiūra',
          },
          {
            title: 'Privatumo nustatymų valdymas',
          },
          {
            title: 'Plenarinis susirinkimas - Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.4.4
        title: 'Jūsų asmens duomenų apsauga internete',
        supportText:
          'Naudokite šį vaizdo įrašą, kad supažindintumėte su asmeninių duomenų konceptu ir išprovokuotumėte diskusiją apie informacijos tipus, kuriais mokiniai dalinasi kiekvieną dieną.',
        downloads: {
          video: {
            filename: 'Protecting Your Personal Data Online',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Protecting Your Personal Data Online - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
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

export const challengeDP = {
  title: 'Skaitmeninio pėdsako rūšiuoklis',
  subtitle: 'Išrūšiuok kiekvieną veiklą į tinkamą kategoriją. Sužinok, kurie tavo kasdieniai veiksmai palieka pėdsakus internete!',
  howItWorks: 'Kaip tai veikia',
  instruction: 'Nutempk kiekvieną veiklos kortelę į zoną, kuriai ji priklauso. Mobiliajame įrenginyje palieski kortelę, kad ją pasirinktum, tada palieski nuleidimo zoną.',
  tip: 'Pagalvok, ar veikla apima internetą, programėlę ar svetainę. Jei taip, ji greičiausiai palieka skaitmeninį pėdsaką!',
  tipLabel: 'Patarimas',
  tryAgain: 'Bandyti dar kartą',
  activitiesToSort: 'Veiklos rūšiavimui',
  leavesFootprint: 'Palieka pėdsaką',
  dragOnlineHere: 'Vilkite interneto veiklas čia',
  noFootprint: 'Jokio pėdsako',
  dragOfflineHere: 'Vilkite neprisijungusios veiklas čia',
  correct: 'Teisingai! 🎯',
  tryOtherZone: 'Beveik — išbandyk kitą zoną!',
  winTitle: 'Puiku! Išrūšiavai visas!',
  winMessage: 'Dabar žinai, kurios veiklos palieka skaitmeninį pėdsaką. Atmink: kiekvienas paspaudimas, paieška ir įrašas sukuria pėdsaką internete!',
  playAgain: 'Žaisti dar kartą',
  activities: [
    {
      text: 'Nuotraukos paskelbimas Instagram',
      category: 'footprint',
      emoji: '📸',
      explanation: 'Nuotraukos, kurias dalinaties internete, lieka serveriuose ir gali jas rasti bet kas — net po daugelio metų!',
    },
    {
      text: 'Popierinės knygos skaitymas namuose',
      category: 'no-footprint',
      emoji: '📖',
      explanation: 'Jokio ryšio su internetu reiškia, jog nesukuriamas joks skaitmeninis pėdsakas.',
    },
    {
      text: 'Atsakymų paieška Google',
      category: 'footprint',
      emoji: '🔍',
      explanation: 'Paieškos sistemos įrašo, ko ieškote, ir naudoja tai, kad rodytų jums individualizuotus rezultatus.',
    },
    {
      text: 'Futbolo žaidimas lauke',
      category: 'no-footprint',
      emoji: '⚽',
      explanation: 'Lauko veikla be telefono ar programėlės nepalieka jokio skaitmeninio įrašo.',
    },
    {
      text: 'Žinutės siuntimas per WhatsApp',
      category: 'footprint',
      emoji: '💬',
      explanation: 'Žinutės saugomos serveriuose ir sukuria nuolatinį jūsų pokalbių įrašą.',
    },
    {
      text: 'Paveikslo piešimas spalvotais pieštukais',
      category: 'no-footprint',
      emoji: '🖍️',
      explanation: 'Tradicinis kūrybiškumas su fizinėmis medžiagomis nekuria jokių internetinių duomenų.',
    },
    {
      text: 'Paskyros kūrimas žaidimų svetainėje',
      category: 'footprint',
      emoji: '🎮',
      explanation: 'Registracija išsaugo jūsų vardą, el. paštą ir kiekvieną veiksmą, kurį atliekate svetainėje.',
    },
    {
      text: 'Važiavimas dviračiu po apylinkes',
      category: 'no-footprint',
      emoji: '🚲',
      explanation: 'Jei nenaudojate sekimo programėlės, važiavimas dviračiu yra visiškai neprisijungusi veikla.',
    },
    {
      text: 'Vaizdo įrašų žiūrėjimas YouTube',
      category: 'footprint',
      emoji: '▶️',
      explanation: 'YouTube seka kiekvieną jūsų žiūrimą vaizdo įrašą ir naudoja tai rekomenduodama daugiau turinio.',
    },
    {
      text: 'Rašymas popieriniame dienoraštyje',
      category: 'no-footprint',
      emoji: '📓',
      explanation: 'Popierinis dienoraštis neturi interneto ryšio — jūsų mintys lieka tikrai privačios.',
    },
    {
      text: 'Draugo TikTok vaizdo įrašo patikimas',
      category: 'footprint',
      emoji: '❤️',
      explanation: 'Kiekvienas jūsų patikamas yra įrašomas ir formuoja jūsų internetinį profilį bei rekomendacijas.',
    },
    {
      text: 'Stalo žaidimo žaidimas su šeima',
      category: 'no-footprint',
      emoji: '🎲',
      explanation: 'Stalo žaidimai yra neprisijungusi pramoga — jokie duomenys nėra kuriami ar saugomi.',
    },
    {
      text: 'Internetinio viktorinos pildymas',
      category: 'footprint',
      emoji: '📝',
      explanation: 'Svetainės renka kiekvieną jūsų įvestą atsakymą ir gali jais dalintis su kitais.',
    },
    {
      text: 'Pokalbis su draugais mokykloje',
      category: 'no-footprint',
      emoji: '🗣️',
      explanation: 'Asmeniniai pokalbiai nepalieka jokio skaitmeninio pėdsako.',
    },
    {
      text: 'Komentaro palikimas tinklaraštyje',
      category: 'footprint',
      emoji: '💻',
      explanation: 'Komentarai yra vieši, susieti su jūsų vardu ir lieka svetainėje amžinai.',
    },
  ],
}
