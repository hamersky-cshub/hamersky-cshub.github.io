// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim: 'Padėti mokiniams atpažinti manipuliavimo taktikas, sustoti prieš veiksmą ir pasirinkti saugesnius atsakymus, kai kažkas naudoja spaudimą, skubumą ar melagingą pasitikėjimą.',
  objectives: [
    'Paaiškinti, kaip manipuliavimas gali vykti internete ir asmeniškai.',
    'Identifikuoti dažniausias taktikas, tokias kaip skubumas, meilikavimas ar autoritetas.',
    'Praktikuoti saugius atsakymus ir pagalbos ieškojimo elgesį.',
  ],
  outcomes: [
    'Atpažinti spaudimo taktikas naudojamas žinutėse ar pokalbiuose.',
    'Naudoti sustojimo ir patikrinimo rutiną prieš veikiant.',
    'Žinoti, kada ir kaip pranešti apie įtartiną elgesį.',
  ],
  teachingGuide: {
    ariaLabel: 'Atsisiųsti mokymo vadovą',
    download: 'Socialinės inžinerijos mokymo vadovas',
  },
  parts: [
    {
      goal: 'Padėti mokiniams suprasti, kas yra socialinė inžinerija, pirmiausia atpažįstant, kaip žmonės gali būti veikiami ar manipuliuojami kasdienėse situacijose, o tada siejant šį supratimą su skaitmenine aplinka ir užpuolikų elgesiu.',
      bundle: {
        filename: 'Social Engineering Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.1.1
            kind: 'Paveikslėlis',
            name: 'Žmonių apgaudinėjimas vs. sistemų įsilaužimas',
            filename: 'Image - Tricking People vs Hacking Systems',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.1.2
            kind: 'Paveikslėlis',
            name: 'Socialinės inžinerijos žinučių pavyzdžiai',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.1.3
            kind: 'Situacijos įvertinimas',
            name: 'Ko nori užpuolikas?',
            filename: 'Situation Assessment - What Does an Attacker Want',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.1.4
            kind: 'Darbalapas',
            name: 'Socialinės inžinerijos supratimas',
            filename: 'Worksheet - Understanding Social Engineering',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas – Įtaka ir įtikinėjimas kasdieniniame gyvenime',
          },
          {
            title: 'Socialinės inžinerijos koncepto pristatymas',
          },
          {
            title: 'Ko nori užpuolikai?',
          },
          {
            title: 'Socialinė inžinerija internete ir ne',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        title: 'Kas yra socialinė inžinerija?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad pristatytumėte socialinę inžineriją kaip techniką, išnaudojančią žmonių pasitikėjimą, o ne technines sistemas. Sustokite ir paklauskite mokinių, ar jie prisimena situaciją, kai kažkas bandė juos apgauti internete.',
        downloads: {
          video: {
            filename: 'What Is Social Engineering',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'What Is Social Engineering - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams suprasti, kodėl užpuolikai naudoja socialinę inžineriją, tyrinėjant psichologinius ir emocinius svertus, dėl kurių žmonės tampa pažeidžiami, ir praktikuojant kritinį mąstymą, kai jaučiamas spaudimas.',
      bundle: {
        filename: 'Social Engineering Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Paveikslėlis',
            name: 'Žmogiškasis sprendimų priėmimas vs. kompiuterinis sprendimų priėmimas',
            filename: 'Image - Human Decision-making vs Computer Decision-making',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.2.2
            kind: 'Scenarijų kortelės',
            name: 'Emocinės manipuliacijos pavyzdžiai',
            filename: 'Scenario Cards - Emotional Manipulation Examples',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.2.3
            kind: 'Žaidimo kortelės',
            name: 'Užpuolikų taktikos',
            filename: 'Game Cards - Attacker Tactics',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.2.4
            kind: 'Darbalapas',
            name: 'Kodėl socialinė inžinerija veikia',
            filename: 'Worksheet - Why Social Engineering Works',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas – Žmonės vs. sistemos',
          },
          {
            title: 'Emocijos, kurias naudoja užpuolikai',
          },
          {
            title: 'Mąstyti kaip užpuolikas',
          },
          {
            title: 'Kasdieniai kontekstai, kuriuose veikia socialinė inžinerija',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
    },
    {
      goal: 'Padėti mokiniams atpažinti socialinės inžinerijos bandymus identifikuojant dažnus įspėjimo ženklus ir suprantant skirtingus kontekstus, kuriuose šie išpuoliai gali įvykti, tiek internete, tiek ne.',
      bundle: {
        filename: 'Social Engineering Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.3.1
            kind: 'Paveikslėlis',
            name: 'Socialinės inžinerijos žinučių pavyzdžiai',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.3.2
            kind: 'Scenarijų kortelės',
            name: 'Socialinės inžinerijos situacijos',
            filename: 'Scenario Cards - Social Engineering Situations',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.3.3
            kind: 'Darbalapas',
            name: 'Aptik socialinę inžineriją',
            filename: 'Worksheet - Spot the Social Engineering',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas – Kur gali vykti socialinė inžinerija?',
          },
          {
            title: 'Dažni įspėjimo ženklai',
          },
          {
            title: 'Socialinės inžinerijos tipai',
          },
          {
            title: 'Atpažinimo praktika',
          },
          {
            title: 'Plenarinis susirinkimas – Apibendrinimas ir neformalus vertinimas',
          },
        ],
      },
      featuredVideo: {
        title: 'Socialinės inžinerijos tipai',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams atpažinti skirtingas socialinės inžinerijos formas: nuo sukčiavimo el. laiškais iki apsimetimo kitu telefonu. Sustokite aptarti, kurį tipą manytų sunkiausiai pastebimą ir kodėl.',
        downloads: {
          video: {
            filename: 'Types of Social Engineering',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Types of Social Engineering - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams praktikuoti informacijos tikrinimą ir saugių atsakymų pasirinkimą bei įgalinti juos palaikyti kitus, kai susiduria su socialinės inžinerijos bandymais.',
      bundle: {
        filename: 'Social Engineering Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Scenarijų kortelės',
            name: 'Ką darytumei?',
            filename: 'Scenario Cards - What Would You Do',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.2
            kind: 'Kontrolinis sąrašas',
            name: 'Sustok, pagalvok, patikrink, paklausk',
            filename: 'Checklist - Stop, Think, Check, Ask',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.3
            kind: 'Darbalapas',
            name: 'Sustok, pagalvok, patikrink, paklausk',
            filename: 'Worksheet - Stop, Think, Check, Ask',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.4
            kind: 'Vaidmenų kortelės',
            name: 'Taikinys, pagalbininkas, stebėtojas',
            filename: 'Role Cards - Target, Helper, Bystander',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.5
            kind: 'Darbalapas',
            name: 'Savęs ir kitų apsauga',
            filename: 'Worksheet - Protecting Myself and Others',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas – Nuo atpažinimo iki reagavimo',
          },
          {
            title: 'Paprastas saugių sprendimų modelis',
          },
          {
            title: 'Saugių atsakymų praktika',
          },
          {
            title: 'Kitų apsauga',
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
  title: 'Sukčiavimo bylų rinkinys',
  subtitle: 'Tapk žinučių detektyvu! Ar sugebėsi atpažinti sukčiavimus ir žvejybos (phishing) gudrybes? Perskaityk kiekvieną žinutę ir nuspręsk: Pasitikėti ar Ignoruoti / Pranešti.',
  howItWorks: 'Kaip tai veikia',
  instruction: 'Perskaityk kiekvieną žinutės bylą ir nuspręsk, ar ji patikima ar turėtų būti ignoruojama/pranešama. Pagalvok apie skubumą, įtartinas nuorodas ir prašymus pateikti privačią informaciją.',
  tip: 'Jei neesi tikras/tikra dėl kokios nors žinutės, peržvelk Detektyvo pastabas su patarimais, kaip atpažinti sukčiavimus.',
  tipLabel: 'Patarimas',
  startTitle: 'Sveiki, detektyve!',
  startDescription: 'Ketini ištirti 14 įtartinų žinučių. Tavo užduotis – nuspręsti, ar kiekviena žinutė patikima ar turėtų būti ignoruojama/pranešama. Sėkmės!',
  startButton: 'Pradėti tyrimą',
  caseProgress: 'Tyrimo eiga',
  trustButton: '👍 Pasitikėti',
  ignoreButton: '⚠️ Ignoruoti / Pranešti',
  nextCase: 'Kita byla →',
  completedTitle: 'Tyrimas baigtas!',
  completedDescription: 'Štai kaip sekėsi:',
  casesIdentified: 'iš 14 bylų teisingai identifikuota',
  detectiveRankLabel: 'Detektyvo rangas',
  defaultRank: 'Pradedantysis detektyvas',
  defaultRankMessage: 'Toliau treniruokis, kad pakiltumei į aukštesnį lygį!',
  performanceSummary: 'Veiklos suvestinė',
  playAgain: 'Žaisti dar kartą',
  detectiveNotes: 'Detektyvo pastabos',
  detectiveTipsTitle: 'Patarimai, kaip išlikti saugiems internete',
  redFlags: [
    '🚩 Prašo slaptažodžių',
    '🚩 Netikri el. pašto adresai',
    '🚩 Per gerai, kad būtų tiesa – prizai',
    '🚩 Skubūs terminai ir grasinimai',
    '🚩 Įtartini atsisiuntimai',
    '🚩 Emocinė manipuliacija',
  ],
  proTip: 'Patarimas: Jei abejoji, prieš spausdamas(-a) nuorodas ar dalindamasis(-isi) informacija, paklausk patikimo suaugusiojo!',
  caseLabel: 'Byla',
  ofLabel: 'iš',
  fromLabel: 'Nuo',
  subjectLabel: 'Tema',
  messageLabel: 'Žinutė',
  rankRookie: '🥉 Pradedantysis detektyvas',
  rankRookieMsg: 'Tik pradedate savo tyrimą. Toliau treniruokitės, kad išmoktumėte atpažinti raudonas vėliavas!',
  rankJunior: '🥈 Jaunesnysis detektyvas',
  rankJuniorMsg: 'Geriau sekasi atpažinti įtartinas žinutes. Puiku!',
  rankSenior: '🥇 Vyresnysis detektyvas',
  rankSeniorMsg: 'Puikiai atpažįstate sukčiavimą ir apgaulę. Geras darbas!',
  rankMaster: '👑 Meistras detektyvas',
  rankMasterMsg: 'Esate sukčiavimo ekspertas(-ė)! Sugavote beveik visus triukus. Puiku!',
  correctLabel: 'Teisingai',
  incorrectLabel: 'Neteisingai',
  scenarios: [
    {
      id: 1,
      type: 'email',
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Laimėjote 1 000 $!',
      message: 'Sveikiname! Buvote atrinktas(-a) kaip mūsų laimingasis laimėtojas! Spauskite čia, kad gautumėte 1 000 $ prizą. Tiesiog įveskite savo tėvų banko duomenis.',
      correct: 'ignore-report',
      explanation: 'Tai klasikinis sukčiavimas! Tikri prizai nereikalauja banko duomenų. El. pašto adresas taip pat atrodo netikras.',
      tactic: 'Godumas ir skubumas',
    },
    {
      id: 2,
      type: 'chat',
      from: 'BestFriend_2024',
      message: 'Ei! Patikrink šią puikią svetainę, kurią radau: www.free-vbucks-4real.com — gali gauti neribotą kiekį V-Bucks!',
      correct: 'ignore-report',
      explanation: 'Net jei atrodo, kad tai iš draugo, jo paskyra galėjo būti nulaužta. Nemokamų V-Bucks svetainės visada yra sukčiavimas.',
      tactic: 'Pasitikėjimo išnaudojimas',
    },
    {
      id: 3,
      type: 'email',
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Namų darbų priminimas',
      message: 'Tik priminimas, kad jūsų gamtos mokslų projektas turi būti pateiktas kitą penktadienį. Išsamesnę informaciją rasite klasės portale.',
      correct: 'trust',
      explanation: 'Tai įprastas mokyklos el. laiškas. Jis ateina iš tikro mokyklos domeno, neprašo asmeninės informacijos ir neturi įtartinų nuorodų.',
      tactic: 'Joks — teisėtas',
    },
    {
      id: 4,
      type: 'chat',
      from: 'CoolGamer99',
      message: 'Aš esu žaidimų kūrėjas! Atsiųskite man savo prisijungimo duomenis ir nemokamai pridėsiu 1000 monetų prie jūsų paskyros!',
      correct: 'ignore-report',
      explanation: 'Tikri žaidimų kūrėjai niekada neprašo jūsų slaptažodžio. Šis asmuo bando pavogti jūsų paskyrą!',
      tactic: 'Apsimetimas autoritetu',
    },
    {
      id: 5,
      type: 'email',
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'SKUBU: Jūsų paskyra bus ištrinta!',
      message: 'Jūsų paskyra bus visam laikui ištrinta per 24 valandas, jei DABAR nepatvirtinsite savo slaptažodžio!',
      correct: 'ignore-report',
      explanation: 'Atkreipkite dėmesį į netikrą domeną \'g00gle\' (su nuliais). Tikros įmonės niekada negrasina ištrinti jūsų paskyrą el. paštu ar neprašo slaptažodžių.',
      tactic: 'Baimė ir skubumas',
    },
    {
      id: 6,
      type: 'chat',
      from: 'Mama 💕',
      message: 'Ei, mielas(-a), ar galėtum pakeliui namo užsukti pieno? Myliu tave!',
      correct: 'trust',
      explanation: 'Tai įprastas pranešimas iš šeimos nario. Nėra įtartinų nuorodų ar prašymų asmeninės informacijos.',
      tactic: 'Joks — teisėtas',
    },
    {
      id: 7,
      type: 'email',
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Padėkite stokojančioms vaikams!',
      message: 'Prašome paaukoti dabar! Vaikai kenčia! Atsiųskite savo tėvų kreditinės kortelės numerį, kad nedelsdami padėtumėte!',
      correct: 'ignore-report',
      explanation: 'Tikros labdaros organizacijos niekada neprašo kreditinių kortelių numerių el. paštu. Čia emocijos naudojamos apgauti.',
      tactic: 'Emocinė manipuliacija',
    },
    {
      id: 8,
      type: 'chat',
      from: 'Nežinomas naudotojas',
      message: 'Sveiki! Aš naujas(-a) jūsų mokykloje. Koks jūsų namų adresas, kad galėčiau atvykti ir pabendrauti?',
      correct: 'ignore-report',
      explanation: 'Niekada nesidalinkite savo adresu su nepažįstamaisiais internete, net jei jie teigia jus pažįstą. Tikras naujas mokinys klausimų užduotų mokykloje.',
      tactic: 'Socialinis pretekstas',
    },
    {
      id: 9,
      type: 'email',
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Bendrinamas dokumentas užrakintas',
      message: 'Kažkas bandė atidaryti jūsų failą. Patvirtinkite prisijungimą dabar, kad išlaikytumėte prieigą prie savo debesies dokumentų.',
      correct: 'ignore-report',
      explanation: 'Šis pranešimas sukelia paniką ir verčia prisijungti per įtartiną nuorodą. Vietoj to atidarykite tikrą programėlę tiesiogiai.',
      tactic: 'Baimė ir skubumas',
    },
    {
      id: 10,
      type: 'chat',
      from: 'Mokyklos biuras',
      message: 'Priminimas: rytoj mokykla baigia darbą anksčiau — 13:00 val. dėl darbuotojų mokymo. Žiūrėkite pranešimą tėvų portale.',
      correct: 'trust',
      explanation: 'Tai įprastas mokyklos atnaujinimas, kuris neprašo slaptažodžių, pinigų ar privačios paskyros informacijos.',
      tactic: 'Joks — teisėtas',
    },
    {
      id: 11,
      type: 'email',
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Kvito problema: patvirtinkite kortelę dabar',
      message: 'Jūsų paskutinis pirkimas nepavyko. Patvirtinkite visą kortelės numerį ir CVV per 10 minučių, kad išvengtumėte paskyros sustabdymo.',
      correct: 'ignore-report',
      explanation: 'Tikros programėlių parduotuvės niekada neprašo pilnų kortelių duomenų ir CVV el. paštu. Skubūs terminai yra įprastas sukčiavimo triukas.',
      tactic: 'Finansinė vagystė',
    },
    {
      id: 12,
      type: 'email',
      from: 'School Library <library@your-school.edu>',
      subject: 'Rytoj skaitytojų klubo susitikimas',
      message: 'Priminimas: Skaitytojų klubas susitinka rytoj per pietus 12 kambaryje. Jei galite, atneškite savo dabartinę knygą.',
      correct: 'trust',
      explanation: 'Tai įprastas mokyklos priminimas iš patikimo domeno, be prašymų dėl slaptažodžių ar privačių paskyros duomenų.',
      tactic: 'Joks — teisėtas',
    },
    {
      id: 13,
      type: 'chat',
      from: 'Coach Rivera',
      message: 'Šiandien treniruotė prasideda 15 minučių vėliau dėl oro sąlygų. Atsineškite gertuvę.',
      correct: 'trust',
      explanation: 'Tai įprastas tvarkaraščio atnaujinimas, kuris nereikalauja jautrios informacijos ar įtartinų veiksmų.',
      tactic: 'Joks — teisėtas',
    },
    {
      id: 14,
      type: 'email',
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Paskelbti nauji pažymiai',
      message: 'Nauji pažymiai dabar pasiekiami studentų portale. Atidarykite portalą iš įprastos mokyklos žymelės, kad juos peržiūrėtumėte.',
      correct: 'trust',
      explanation: 'Šis pranešimas nukreipia jus į įprastą mokyklos portalą ir žinutėje nereikalauja slaptažodžių, mokėjimų ar privačių duomenų.',
      tactic: 'Joks — teisėtas',
    },
  ],
}
