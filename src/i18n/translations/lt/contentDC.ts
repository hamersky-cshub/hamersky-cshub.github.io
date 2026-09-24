// ---------------------------------------------------------------------------
// Digital Citizenship (DC) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Citizenship module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDC = {
  aim: 'Suteikti supratimą apie tai, kas yra skaitmeninis pilietiškumas ir kaip laikytis jo pagrindinių principų.',
  objectives: [
    'Pabrėžti skaitmeninio pilietiškumo svarbą.',
    'Pristatyti skaitmeninio pilietiškumo koncepciją ir jos teisių, atsakomybės ir pagarbos principus skaitmeninėje aplinkoje.',
    'Ugdyti mokinių supratimą, kaip taikyti šiuos teisių, atsakomybės ir pagarbos principus skaitmeninėje aplinkoje – būti saugiems, protingiems ir socialiai aktyviems.',
  ],
  outcomes: [
    'Galiu paaiškinti, kas yra skaitmeninis pilietiškumas ir kodėl jis svarbus.',
    'Galiu aptarti teisių, atsakomybės ir pagarbos principus skaitmeninėje aplinkoje, įskaitant tai, kaip išlikti saugiems, elgtis protingai ir socialiai įsitraukti.',
  ],
  parts: [
    {
      goal: 'Padėti mokiniams suprasti, kas yra skaitmeninė aplinka ir kokie yra jos teigiami aspektai.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 1 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.1.1
            kind: 'Scenarijų kortelės',
            name: 'Fizinis ir skaitmeninis pasauliai',
            filename: 'Scenarijų kortelės - Fizinis ir skaitmeninis pasauliai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra skaitmeninė aplinka?',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.1.2
        title: 'Kas yra skaitmeninė aplinka ir skaitmeninės sistemos?',
        supportText:
          'Naudokite šį vaizdo įrašą diskusijai apie internetines erdves, kurias mokiniai jau naudoja – nuo mokymosi platformų iki žaidimų ir žinučių programėlių. Sustokite trumpam apmąstymui apie tai, kur mokiniai leidžia laiką internete.',
        downloads: {
          video: {
            filename: 'Kas yra skaitmeninė aplinka ir skaitmeninės sistemos',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra skaitmeninė aplinka ir skaitmeninės sistemos - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams suprasti, kas yra skaitmeninis pilietiškumas ir kodėl jis svarbus.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 2 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.2.1
            kind: 'Paveikslėlis',
            name: 'Atsakingas pilietis',
            filename: 'Paveikslėlis - Atsakingas pilietis',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.2.2
            kind: 'Darbalapas',
            name: 'Teisės, atsakomybės ir pagarba',
            filename: 'Darbalapas - Teisės, atsakomybės ir pagarba',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Skaitmeninis pilietiškumas',
          },
          {
            title: 'Teisės, pagarba ir atsakomybės skaitmeninėje aplinkoje',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      goal:
        'Padėti mokiniams žinoti, kaip būti saugiems skaitmeninėje aplinkoje, kritiškai mąstant ir atsakingai naudojant privatumo nustatymus.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 3 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.3.1
            kind: 'Paveikslėlis',
            name: 'Saugumo jausmas',
            filename: 'Paveikslėlis - Saugumo jausmas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.3.2
            kind: 'Paveikslėlis',
            name: 'Nesaugumo jausmas',
            filename: 'Paveikslėlis - Nesaugumo jausmas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.3.4
            kind: 'Paveikslėlis',
            name: 'Privatumo nustatymų strategija',
            filename: 'Paveikslėlis - Privatumo nustatymų strategija',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.3.5
            kind: 'Paveikslėlis',
            name: 'Programėlių privatumo nustatymai',
            filename: 'Paveikslėlis - Programėlių privatumo nustatymai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Ryšių tarp fizinės ir skaitmeninės aplinkos supratimas',
          },
          {
            title: 'Privatumo nustatymai',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.3.3
        title: 'Kas yra privatumo nustatymai?',
        supportText:
          'Naudokite šį vaizdo įrašą pristatydami privatumo nustatymus kaip praktinį įrankį, kurį mokiniai gali valdyti programėlėse ir įrenginiuose, kuriuos jau turi. Sustokite ir paklauskite, kokius nustatymus jie jau patikrino ar pakeitė.',
        downloads: {
          video: {
            filename: 'Kas yra privatumo nustatymai',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra privatumo nustatymai - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams suprasti, kaip išmintingumas ir atsparumas gali padėti jiems būti protingiems skaitmeninėje aplinkoje.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 4 dalis',
      },
      included: {
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Iššūkiai skaitmeninėje aplinkoje',
          },
          {
            title: 'Supratimas, kaip ugdyti atsparumą',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.4.1
        title: 'Atsparumas skaitmeninėje aplinkoje',
        supportText:
          'Naudokite šį vaizdo įrašą tyrinėdami, kaip mokiniai gali atsigauti ir prisitaikyti, kai internete kažkas klostosi ne taip – nuo paskyros problemų iki nepageidaujamų kontaktų. Sustokite ir paklauskite, į ką mokiniai kreipiasi pagalbos tokiose situacijose.',
        downloads: {
          video: {
            filename: 'Atsparumas skaitmeninėje aplinkoje',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Atsparumas skaitmeninėje aplinkoje - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal:
        'Padėti mokiniams suprasti, kaip elgtis atsakingai, rodant pagarbą sau ir kitiems, socialiai įsitraukiant skaitmeninėje aplinkoje.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 5 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.5.1
            kind: 'Paveikslėlis',
            name: 'Skaitmeninis pėdsakas',
            filename: 'Paveikslėlis - Skaitmeninis pėdsakas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.5.2
            kind: 'Scenarijų kortelės',
            name: 'Ką tinkama ir netinkama skelbti',
            filename: 'Scenarijų kortelės - Ką tinkama ir netinkama skelbti',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.5.3
            kind: 'Scenarijų kortelės',
            name: 'Socialinių tinklų įrašai',
            filename: 'Scenarijų kortelės - Socialinių tinklų įrašai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Atsakingas elgesys skaitmeninėje aplinkoje',
          },
          {
            title: 'Teigiamo skaitmeninio pėdsako kūrimas',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
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
      imageSrc: '/images/learning-hub/02_attacker-perspective.webp',
    },
    {
      moduleId: 'at',
      brand: 'AT',
      href: '/learning-hub/authentication/content',
      imageSrc: '/images/learning-hub/03_authentication.webp',
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

export const challengeDC = {
  title: 'TINKAMAS ar NETINKAMAS turinys skelbti?',
  subtitle: 'Vilkite kiekvieną įrašą į tinkamą kategoriją. Sužinokite, ką saugu dalytis internete!',
  howItWorks: 'Kaip tai veikia',
  instruction: 'Vilkite kiekvieną įrašo kortelę į jai priklausančią zoną. Mobiliajame – bakstelėkite kortelę pasirinkimui, tada bakstelėkite zoną.',
  tip: 'Pagalvokite, ar informacija galėtų jus identifikuoti arba kelti pavojų, jei ją pamatytų nepažįstamasis.',
  tipLabel: 'Patarimas',
  tryAgain: 'Bandyti dar kartą',
  correctCountLabel: 'Teisingai',
  postsToSort: 'Įrašai rūšiavimui',
  safeToShare: 'Saugu dalytis',
  dragSafeHere: 'Vilkite saugius įrašus čia',
  doNotShare: 'NESIDALYKITE',
  dragUnsafeHere: 'Vilkite nesaugius įrašus čia',
  safeZoneAriaLabel: 'Zona „Saugu dalytis"',
  unsafeZoneAriaLabel: 'Zona „NESIDALYKITE"',
  correct: 'Teisingai!',
  tryOtherZone: 'Ne visai – pabandykite kitą zoną!',
  winTitle: 'Puiku! Viską išrūšiavote teisingai!',
  winMessage: 'Jūs esate skaitmeninio pilietiškumo ekspertas. Prisiminkite šias pamokas skelbdami internete!',
  playAgain: 'Žaisti dar kartą',
  posts: [
    { text: 'Mano namų adresas yra Gatvės g. 123',
      category: 'unsafe',
      emoji: '🏠',
      explanation: 'Jūsų namų adresas yra privatus – niekada jo nesidalykite internete! Nepažįstamieji gali jį panaudoti sužinoti, kur gyvenate.'
    },
    { text: 'Aš mėgstu žaisti futbolą!',
      category: 'safe',
      emoji: '⚽',
      explanation: 'Dalytis pomėgiais yra visiškai gerai ir puikus būdas užmegzti ryšį su kitais!'
    },
    { text: 'Mano slaptažodis yra Fluffy123',
      category: 'unsafe',
      emoji: '🔑',
      explanation: 'Niekada nesidalykite slaptažodžiais su niekuo internete – net su geriausiais draugais!'
    },
    { text: 'Gavau penketą iš gamtos mokslų testo!',
      category: 'safe',
      emoji: '🎉',
      explanation: 'Švęsti pasiekimus saugu dalytis – šauniai pasidaryta!'
    },
    { text: 'Mano telefono numeris yra 555-0123',
      category: 'unsafe',
      emoji: '📱',
      explanation: 'Telefono numeriai yra asmeniniai – laikykite juos privačius, kad nepažįstamieji negalėtų su jumis susisiekti.'
    },
    { text: 'Esu vienas/viena namuose iki 18:00',
      category: 'unsafe',
      emoji: '🏡',
      explanation: 'Niekada nesakykite niekam internete, kad esate namuose vieni – tai kelia pavojų jūsų saugumui!'
    },
    { text: 'Mūsų mokyklos spektaklis bus kitą penktadienį!',
      category: 'safe',
      emoji: '🎭',
      explanation: 'Mokyklos renginiais galima dalytis su draugais!'
    },
    { text: 'Pažiūrėkite į mano naują piešinį!',
      category: 'safe',
      emoji: '🎨',
      explanation: 'Dalytis kūrybiniais darbais yra puikus būdas išreikšti save!'
    },
    { text: 'Mamos kreditinės kortelės numeris yra...',
      category: 'unsafe',
      emoji: '💳',
      explanation: 'Finansinė informacija, pvz., kreditinių kortelių numeriai, visada turi likti privati!'
    },
    { text: 'Mano mėgstamiausias filmas yra Žaislų istorija!',
      category: 'safe',
      emoji: '🎬',
      explanation: 'Kalbėti apie filmus, kuriuos mėgstate, yra visiškai saugu ir smagu!'
    },
    { text: 'Mano pilnas vardas yra Emily Rose Johnson',
      category: 'unsafe',
      emoji: '📛',
      explanation: 'Dalydamiesi visu savo vardu internete galite padėti nepažįstamiesiems jus identifikuoti ir sekti.'
    },
    { text: 'Ką tik išmokau važiuoti dviračiu!',
      category: 'safe',
      emoji: '🚲',
      explanation: 'Dalytis etapiniais pasiekimais ir naujais įgūdžiais yra puiku skelbti!'
    },
    { text: 'Mano mokyklos spintelės kodas yra 24-8-16',
      category: 'unsafe',
      emoji: '🔒',
      explanation: 'Spintelių kodai yra privatūs – kas nors gali įsilaužti į jūsų spintelę!'
    },
    { text: 'Gavome naują šuniuką vardu Max!',
      category: 'safe',
      emoji: '🐶',
      explanation: 'Dalytis informacija apie savo augintinį yra saugu ir smagu visiems!'
    },
    { text: 'Grįžtu namo vienas/viena per parką 15:30',
      category: 'unsafe',
      emoji: '🚶',
      explanation: 'Dalijimasis savo kasdieniu grafiku ir maršrutu tiksliai pasako nepažįstamiesiems, kur jus rasti.'
    },
  ],
}
