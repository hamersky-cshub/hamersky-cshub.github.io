// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim: 'Pomoci žákům rozpoznat manipulativní taktiky, zastavit se před jednáním a volit bezpečnější reakce, když někdo používá nátlak, naléhavost nebo falešnou důvěru.',
  objectives: [
    'Vysvětlit, jak může k manipulaci docházet online i osobně.',
    'Identifikovat běžné taktiky, jako je naléhavost, lichotky nebo autorita.',
    'Procvičovat bezpečné reakce a chování při hledání pomoci.',
  ],
  outcomes: [
    'Rozpoznat taktiky nátlaku používané ve zprávách nebo chatech.',
    'Používat rutinu zastavení a kontroly před jednáním.',
    'Vědět, kdy a jak nahlásit podezřelé chování.',
  ],
  teachingGuide: {
    ariaLabel: 'Stáhnout výukového průvodce',
    download: 'Průvodce výukou sociálního inženýrství',
  },
  parts: [
    {
      goal: 'Pomoci žákům pochopit, co je sociální inženýrství, a to nejprve rozpoznáním toho, jak mohou být lidé ovlivněni nebo manipulováni v každodenních situacích, a poté propojením tohoto porozumění s digitálním prostředím a chováním útočníků.',
      bundle: {
        filename: 'Social Engineering Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.1.1
            kind: 'Obrázek',
            name: 'Klamání lidí vs. hackování systémů',
            filename: 'Image - Tricking People vs Hacking Systems',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.1.2
            kind: 'Obrázek',
            name: 'Příklady zpráv sociálního inženýrství',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.1.3
            kind: 'Hodnocení situace',
            name: 'Co útočník chce?',
            filename: 'Situation Assessment - What Does an Attacker Want',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.1.4
            kind: 'Pracovní list',
            name: 'Pochopení sociálního inženýrství',
            filename: 'Worksheet - Understanding Social Engineering',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod – Vliv a přesvědčování v každodenním životě',
          },
          {
            title: 'Představení konceptu sociálního inženýrství',
          },
          {
            title: 'Co útočníci chtějí?',
          },
          {
            title: 'Sociální inženýrství online a offline',
          },
          {
            title: 'Plénum – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        title: 'Co je sociální inženýrství?',
        supportText:
          'Použijte toto video k představení sociálního inženýrství jako techniky, která využívá lidskou důvěru, nikoli technické systémy. Pozastavte se a zeptejte se žáků, zda si vzpomenou na situaci, kdy se je někdo pokusil oklamat online.',
        downloads: {
          video: {
            filename: 'What Is Social Engineering',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What Is Social Engineering - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům pochopit, proč útočníci používají sociální inženýrství, prozkoumáním psychologických a emocionálních pák, které lidi zranitelňují, a procvičením kritického myšlení, když cítí nátlak.',
      bundle: {
        filename: 'Social Engineering Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Obrázek',
            name: 'Lidské rozhodování vs. počítačové rozhodování',
            filename: 'Image - Human Decision-making vs Computer Decision-making',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.2.2
            kind: 'Karty scénářů',
            name: 'Příklady emocionální manipulace',
            filename: 'Scenario Cards - Emotional Manipulation Examples',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.2.3
            kind: 'Herní karty',
            name: 'Taktiky útočníků',
            filename: 'Game Cards - Attacker Tactics',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.2.4
            kind: 'Pracovní list',
            name: 'Proč sociální inženýrství funguje',
            filename: 'Worksheet - Why Social Engineering Works',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod – Lidé vs. systémy',
          },
          {
            title: 'Emoce, které útočníci využívají',
          },
          {
            title: 'Myslet jako útočník',
          },
          {
            title: 'Každodenní kontexty, kde sociální inženýrství funguje',
          },
          {
            title: 'Plénum – Shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoci žákům rozpoznat pokusy o sociální inženýrství identifikací běžných varovných signálů a pochopením různých kontextů, ve kterých k těmto útokům může docházet, jak online, tak offline.',
      bundle: {
        filename: 'Social Engineering Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.3.1
            kind: 'Obrázek',
            name: 'Příklady zpráv sociálního inženýrství',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.3.2
            kind: 'Karty scénářů',
            name: 'Situace sociálního inženýrství',
            filename: 'Scenario Cards - Social Engineering Situations',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.3.3
            kind: 'Pracovní list',
            name: 'Odhal sociální inženýrství',
            filename: 'Worksheet - Spot the Social Engineering',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod – Kde může dojít k sociálnímu inženýrství?',
          },
          {
            title: 'Běžné varovné signály',
          },
          {
            title: 'Typy sociálního inženýrství',
          },
          {
            title: 'Procvičování rozpoznávání',
          },
          {
            title: 'Plénum – Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        title: 'Typy sociálního inženýrství',
        supportText:
          'Použijte toto video, aby žáci rozpoznali různé formy sociálního inženýrství, od phishingových e-mailů po telefonní vydávání se za jiného. Pozastavte se a diskutujte, který typ by bylo nejtěžší odhalit a proč.',
        downloads: {
          video: {
            filename: 'Types of Social Engineering',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Types of Social Engineering - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoci žákům procvičit ověřování informací a volbu bezpečných reakcí a posílit je v podpoře ostatních, když se setkají s pokusy o sociální inženýrství.',
      bundle: {
        filename: 'Social Engineering Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Karty scénářů',
            name: 'Co bys udělal/a?',
            filename: 'Scenario Cards - What Would You Do',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.2
            kind: 'Kontrolní seznam',
            name: 'Zastav se, přemýšlej, zkontroluj, zeptej se',
            filename: 'Checklist - Stop, Think, Check, Ask',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.3
            kind: 'Pracovní list',
            name: 'Zastav se, přemýšlej, zkontroluj, zeptej se',
            filename: 'Worksheet - Stop, Think, Check, Ask',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.4
            kind: 'Karty rolí',
            name: 'Cíl, pomocník, přihlížející',
            filename: 'Role Cards - Target, Helper, Bystander',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.5
            kind: 'Pracovní list',
            name: 'Ochrana sebe a ostatních',
            filename: 'Worksheet - Protecting Myself and Others',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod – Od rozpoznání k reakci',
          },
          {
            title: 'Jednoduchý model pro bezpečná rozhodnutí',
          },
          {
            title: 'Procvičování bezpečných reakcí',
          },
          {
            title: 'Ochrana ostatních',
          },
          {
            title: 'Plénum – Shrnutí a neformální hodnocení',
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
  title: 'Phishingové spisy',
  subtitle: 'Staň se detektivem zpráv! Poznáš podvody a phishingové triky? Přečti každou zprávu a rozhodni: Důvěřovat nebo Ignorovat / Nahlásit.',
  howItWorks: 'Jak to funguje',
  instruction: 'Přečti každý spis zprávy a rozhodni, zda je důvěryhodná nebo by měla být ignorována/nahlášena. Přemýšlej o naléhavosti, podezřelých odkazech a žádostech o soukromé informace.',
  tip: 'Pokud si nejsi jistý/á ohledně nějaké zprávy, podívej se na Zápisky detektiva s tipy, jak identifikovat podvody.',
  tipLabel: 'Tip',
  startTitle: 'Vítej, detektive!',
  startDescription: 'Chystáš se vyšetřit 14 podezřelých zpráv. Tvým úkolem je rozhodnout, zda je každá zpráva důvěryhodná nebo by měla být ignorována/nahlášena. Hodně štěstí!',
  startButton: 'Zahájit vyšetřování',
  caseProgress: 'Průběh vyšetřování',
  trustButton: '👍 Důvěřovat',
  ignoreButton: '⚠️ Ignorovat / Nahlásit',
  nextCase: 'Další případ →',
  completedTitle: 'Vyšetřování dokončeno!',
  completedDescription: 'Tady je, jak ti to šlo:',
  casesIdentified: 'ze 14 případů správně identifikováno',
  detectiveRankLabel: 'Hodnost detektiva',
  defaultRank: 'Začínající detektiv',
  defaultRankMessage: 'Cvič dál, aby ses zlepšil/a!',
  performanceSummary: 'Přehled výkonu',
  playAgain: 'Hrát znovu',
  detectiveNotes: 'Zápisky detektiva',
  detectiveTipsTitle: 'Tipy, jak zůstat v bezpečí online',
  redFlags: [
    '🚩 Žádá o hesla',
    '🚩 Falešné e-mailové adresy',
    '🚩 Výhry, které jsou příliš dobré, aby byly pravdivé',
    '🚩 Naléhavé termíny a hrozby',
    '🚩 Podezřelé stahování',
    '🚩 Emocionální manipulace',
  ],
  proTip: 'Pro tip: Pokud si nejsi jistý/á, zeptej se důvěryhodného dospělého, než klikneš na odkaz nebo sdílíš informace!',
  caseLabel: 'Případ',
  ofLabel: 'z',
  fromLabel: 'Od',
  subjectLabel: 'Předmět',
  messageLabel: 'Zpráva',
  rankRookie: '🥉 Začínající detektiv',
  rankRookieMsg: 'Teprve začínáš své vyšetřování. Cvič dál, aby ses naučil/a rozpoznávat varovné signály!',
  rankJunior: '🥈 Juniorský detektiv',
  rankJuniorMsg: 'Stáváš se lepším/lepší v rozpoznávání podezřelých zpráv. Dobře!',
  rankSenior: '🥇 Seniorský detektiv',
  rankSeniorMsg: 'Jsi skvělý/á v identifikaci phishingu a podvodů. Pěkná práce!',
  rankMaster: '👑 Mistrovský detektiv',
  rankMasterMsg: 'Jsi expert/ka na phishing! Chytil/a jsi téměř všechny triky. Výjimečné!',
  correctLabel: 'Správně',
  incorrectLabel: 'Nesprávně',
  scenarios: [
    {
      id: 1,
      type: 'email',
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Vyhráli jste 1 000 $!',
      message: 'Gratulujeme! Byli jste vybráni jako náš šťastný výherce! Klikněte zde a nárokujte si svou odměnu 1 000 $. Stačí zadat bankovní údaje vašich rodičů.',
      correct: 'ignore-report',
      explanation: 'To je klasický podvod! Skutečné výhry nepožadují bankovní údaje. E-mailová adresa také vypadá falešně.',
      tactic: 'Chamtivost a naléhavost',
    },
    {
      id: 2,
      type: 'chat',
      from: 'BestFriend_2024',
      message: 'Hej! Podívej se na tuto skvělou stránku, kterou jsem našel: www.free-vbucks-4real.com — můžeš získat neomezené V-Bucks!',
      correct: 'ignore-report',
      explanation: 'I když to vypadá, že je to od přítele, jeho účet mohl být napaden. Stránky s bezplatnými V-Bucks jsou vždy podvody.',
      tactic: 'Využití důvěry',
    },
    {
      id: 3,
      type: 'email',
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Připomínka domácího úkolu',
      message: 'Jen připomínka, že váš přírodovědný projekt je splatný příští pátek. Podrobnosti naleznete v třídním portálu.',
      correct: 'trust',
      explanation: 'Toto je normální školní e-mail. Pochází z reálné školní domény, nepožaduje osobní informace a neobsahuje žádné podezřelé odkazy.',
      tactic: 'Žádný — legitimní',
    },
    {
      id: 4,
      type: 'chat',
      from: 'CoolGamer99',
      message: 'Jsem herní vývojář! Pošlete mi své přihlašovací údaje a přidám na váš účet 1 000 mincí zdarma!',
      correct: 'ignore-report',
      explanation: 'Skuteční herní vývojáři nikdy nepožadují vaše heslo. Tato osoba se pokouší ukrást váš účet!',
      tactic: 'Vydávání se za autoritu',
    },
    {
      id: 5,
      type: 'email',
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'NALÉHAVÉ: Váš účet bude smazán!',
      message: 'Váš účet bude trvale smazán do 24 hodin, pokud okamžitě neověříte své heslo!',
      correct: 'ignore-report',
      explanation: 'Všimněte si falešné domény \'g00gle\' (s nulami). Skutečné společnosti nikdy nevyhrožují smazáním účtu e-mailem ani nepožadují hesla.',
      tactic: 'Strach a naléhavost',
    },
    {
      id: 6,
      type: 'chat',
      from: 'Máma 💕',
      message: 'Ahoj miláčku, můžeš po cestě domů zastavit pro mléko? Miluji tě!',
      correct: 'trust',
      explanation: 'Toto je normální zpráva od rodinného příslušníka. Žádné podezřelé odkazy ani žádosti o osobní informace.',
      tactic: 'Žádný — legitimní',
    },
    {
      id: 7,
      type: 'email',
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Pomozte dětem v nouzi!',
      message: 'Prosím, přispějte teď! Děti trpí! Zašlete číslo kreditní karty svých rodičů, abyste okamžitě pomohli!',
      correct: 'ignore-report',
      explanation: 'Skutečné charity nikdy nepožadují čísla kreditních karet e-mailem. Toto využívá emoce k podvádění.',
      tactic: 'Emocionální manipulace',
    },
    {
      id: 8,
      type: 'chat',
      from: 'Neznámý uživatel',
      message: 'Ahoj! Jsem nový/á ve vaší škole. Jaká je vaše domácí adresa, abych mohl/a přijít na návštěvu?',
      correct: 'ignore-report',
      explanation: 'Nikdy nesdílejte svou adresu s cizími lidmi online, i když tvrdí, že vás znají. Skutečný nový žák by se zeptal ve škole.',
      tactic: 'Sociální záminky',
    },
    {
      id: 9,
      type: 'email',
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Sdílený dokument je uzamčen',
      message: 'Někdo se pokusil otevřít váš soubor. Ověřte své přihlášení nyní, abyste si zachovali přístup k vašim cloudovým dokumentům.',
      correct: 'ignore-report',
      explanation: 'Tato zpráva vytváří paniku a nutí vás přihlásit se přes podezřelý odkaz. Místo toho otevřete skutečnou aplikaci přímo.',
      tactic: 'Strach a naléhavost',
    },
    {
      id: 10,
      type: 'chat',
      from: 'Školní kancelář',
      message: 'Připomínka: zítra škola zavírá dříve ve 13:00 kvůli školení personálu. Viz oznámení v rodičovském portálu.',
      correct: 'trust',
      explanation: 'Toto je normální školní aktualizace a nepožaduje hesla, peníze ani soukromé informace o účtu.',
      tactic: 'Žádný — legitimní',
    },
    {
      id: 11,
      type: 'email',
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Problém s účtenkou: potvrďte kartu nyní',
      message: 'Váš poslední nákup selhal. Potvrďte celé číslo karty a CVV do 10 minut, abyste předešli pozastavení účtu.',
      correct: 'ignore-report',
      explanation: 'Skutečné obchody s aplikacemi nikdy nepožadují úplné údaje o kartě a CVV e-mailem. Naléhavé termíny jsou běžným trikem podvodníků.',
      tactic: 'Finanční krádež',
    },
    {
      id: 12,
      type: 'email',
      from: 'School Library <library@your-school.edu>',
      subject: 'Zítra schůze čtenářského kroužku',
      message: 'Připomínka: Čtenářský kroužek se zítra setkává v poledne v místnosti 12. Přineste svou aktuální knihu, pokud můžete.',
      correct: 'trust',
      explanation: 'Toto je normální školní připomínka z důvěryhodné domény bez požadavku na hesla nebo soukromé údaje účtu.',
      tactic: 'Žádný — legitimní',
    },
    {
      id: 13,
      type: 'chat',
      from: 'Coach Rivera',
      message: 'Dnes trénink začíná o 15 minut později kvůli počasí. Přineste si láhev na vodu.',
      correct: 'trust',
      explanation: 'Toto je rutinní aktualizace rozvrhu a nepožaduje citlivé informace ani podezřelé akce.',
      tactic: 'Žádný — legitimní',
    },
    {
      id: 14,
      type: 'email',
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Nové známky zveřejněny',
      message: 'Nové známky jsou nyní dostupné v studentském portálu. Otevřete portál pomocí záložky vaší školy, abyste si je prohlédli.',
      correct: 'trust',
      explanation: 'Tato zpráva vás nasměruje na váš běžný školní portál a nepožaduje hesla, platby ani soukromé údaje ve zprávě.',
      tactic: 'Žádný — legitimní',
    },
  ],
}
