// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim: 'Pomoci žákům pochopit, co je malware, jak dochází k infekcím a jaké návyky snižují riziko nebezpečných stahování, souborů a instalací.',
  objectives: [
    'Představit, co je malware a proč je nebezpečný.',
    'Identifikovat běžné způsoby šíření malwaru.',
    'Budovat návyky pro bezpečnější stahování a aktualizace.',
  ],
  outcomes: [
    'Vysvětlit rozdíl mezi bezpečnými a nebezpečnými soubory nebo odkazy.',
    'Rozpoznat varovné signály podezřelých stahování.',
    'Používat důvěryhodné zdroje a žádat o pomoc, pokud si nejsi jistý/á.',
  ],
  parts: [
    {
      goal: 'Pomoci žákům pochopit koncept malwaru.',
      bundle: {
        filename: 'Malware - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Obrázek',
            name: 'Škodlivý + software = malware',
            filename: 'Image - Malicious + Software = Malware',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.1.3
            kind: 'Pracovní list',
            name: 'Souvisí s malwarem nebo ne?',
            filename: 'Worksheet - Related to Malware or Not',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Definice malwaru',
          },
          {
            title: 'Plénum: Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.2
        title: 'Co je malware?',
        supportText:
          'Použijte toto video k představení malwaru jako softwaru navrženého k způsobení škody, čímž dáte žákům základ, než prozkoumají konkrétní typy podrobněji. Pozastavte se a zeptejte se, co již znají nebo slyšeli o počítačových virech.',
        downloads: {
          video: {
            filename: 'What is Malware',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'What is Malware - Subtitles',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Představit běžné typy malwaru.',
      bundle: {
        filename: 'Malware - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schéma',
            name: 'Sada mincí',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.2.3
            kind: 'Schéma',
            name: 'Tabule uzlových vazeb',
            filename: 'Sheet - Knot Ties Board',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.2.4
            kind: 'List',
            name: 'Vlastnosti malwaru',
            filename: 'Sheet - Malware Properties',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Svažte uzly pro typy malwaru',
          },
          {
            title: 'Plénum: Shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Představení typů malwaru',
        supportText:
          'Použijte toto video, aby žáci získali jasný přehled o různých kategoriích malwaru a o tom, co každý z nich odlišuje. Pozastavte se pro krátkou diskusi o tom, který typ podle nich představuje největší riziko a proč.',
        downloads: {
          video: {
            filename: 'Introducing Malware Types',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Introducing Malware Types - Subtitles',
            ariaLabel: 'Stáhnout titulky' },
        },
      },
    },
    {
      goal: 'Poskytnout přehled charakteristik malwaru pro jeho rozpoznání a detekci.',
      bundle: {
        filename: 'Malware - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Pracovní list',
            name: 'Seznam indikátorů',
            filename: 'Worksheet - List of Indicators',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.3.2
            kind: 'Čtení',
            name: 'Rozpoznávání malwaru',
            filename: 'Reading - Recognising Malware',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.3.3
            kind: 'Plakát',
            name: 'Sedm indikátorů',
            filename: 'Poster - Seven Indicators',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.3.4
            kind: 'Tabulka',
            name: 'Situace a indikátory',
            filename: 'Table - Situation and Indicators',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Vyšetřování malwaru',
          },
          {
            title: 'Plénum: Shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoci žákům pochopit ochranná opatření proti malwaru.',
      bundle: {
        filename: 'Malware - balíček - Část 4',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situace',
            name: 'Malware a krádež dat?',
            filename: 'Situation - Malware and Data Theft',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.2
            kind: 'Plakát',
            name: 'Co dělat a co ne',
            filename: 'Poster - DOs and DON\'Ts',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.3
            kind: 'Pracovní list',
            name: 'Štít proti malwaru',
            filename: 'Worksheet - A Shield Against Malware',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Analýza situace neopatrného chování',
          },
          {
            title: 'Výuka základních ochranných opatření',
          },
          {
            title: 'Plénum: Shrnutí a neformální hodnocení',
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
  title: 'Detektiv malwaru',
  subtitle: 'Jsi analytik kybernetické bezpečnosti. Prohledej soubory na svém virtuálním počítači, zkontroluj doručenou poštu, vyřeš podezřelá vyskakovací okna a přezkoumej oprávnění aplikací ve 4 interaktivních úrovních. Dokážeš udržet systém čistý?',
  howItWorks: 'Jak to funguje',
  instruction: 'Projdi 4 úrovně na svém virtuálním počítači. Každá úroveň představuje jiný scénář kybernetické bezpečnosti. Pečlivě prověř každý případ a rozhodni, zda je bezpečný nebo představuje hrozbu — pak se pouč z vysvětlení.',
  tip: 'Malware se často maskuje jako něco neškodného. Hledej podezřelé přípony souborů, špatně napsané domény, zbytečná oprávnění a sliby, které jsou příliš dobré, aby byly pravdivé.',
  tipLabel: 'Tip',
  welcomeTitle: 'Vítej, kybernetický analytiku!',
  welcomeDescription: 'Tvůj počítač obdržel podezřelé soubory, e-maily a vyskakovací okna. Projdi 4 úrovně, abys identifikoval/a hrozby a ochránil/a systém.',
  levels: [
    '💻 Úroveň 1 — Skener souborů',
    '📧 Úroveň 2 — E-mailová schránka',
    '🌐 Úroveň 3 — Vyskakovací okna prohlížeče',
    '🔒 Úroveň 4 — Oprávnění aplikací',
  ],
  bootButton: 'Spustit počítač →',
  scoreLabel: 'Skóre',
  correctLabel: 'Správně',
  threatsCaughtLabel: 'Zachycené hrozby',
  keepFile: '✓ Ponechat soubor',
  quarantine: '🗑️ Karanténa',
  safeKeep: '✓ Bezpečné / Ponechat',
  threatRemove: '⚠️ Hrozba / Odstranit',
  nextButton: 'Další →',
  malwareTypesTitle: 'Typy malwaru',
  malwareTypesSubtitle: 'Běžné typy malwaru, na které si dát pozor',
  malwareTypes: [
    '🦠 Virus — připojuje se k souborům a šíří se',
    '🪱 Červ — sám se replikuje přes sítě',
    '🐴 Trojan — maskovaný jako užitečný software',
    '🔐 Ransomware — zamkne soubory, dokud nezaplatíš',
    '👁️ Spyware — tajně sleduje aktivitu',
    '📢 Adware — zahlcuje tě reklamami',
  ],
  securityGuideTitle: 'Bezpečnostní průvodce',
  securityGuideSubtitle: 'Červené vlajky, na které si dát pozor',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs z neznámých zdrojů',
    '🚩 Špatně napsané nebo falešné domény odesílatele',
    '🚩 Falešná upozornění na viry v prohlížeči',
    '🚩 Aplikace požadující zbytečná oprávnění',
    '🚩 Výhry, volné peníze nebo urgentní hrozby',
    '🚩 Odpočítávací časovače vytvářející paniku',
  ],
  goldenRule: 'Pokud si nejsi jistý/á, neklikej. Místo toho kontaktuj IT podporu nebo důvěryhodného dospělého.',
  levelCompleteTitle: 'Úroveň dokončena!',
  levelCompleteSubtitle: 'Pokračuj dál!',
  levelResultLabel: 'Výsledek úrovně',
  correctDecisionsLabel: 'správných rozhodnutí',
  continueButton: 'Pokračovat →',
  resultsTitle: 'Systém zabezpečen! 🛡️',
  resultsDescription: 'Tvá zpráva o kybernetické bezpečnosti je připravena.',
  accuracyLabel: 'Přesnost',
  threatsCaughtStat: 'Zachycené hrozby',
  threatsMissedStat: 'Zmeškané hrozby',
  analystRankLabel: 'Hodnost analytika',
  rankTrainee: '📘 Praktikant',
  rankTraineeMsg: 'Pořád se uč! Přezkoumej Bezpečnostní průvodce vpravo a zkus to znovu — zlepšíš se!',
  rankJunior: '🔍 Juniorský analytik',
  rankJuniorMsg: 'Dobrá snaha! Budování solidních dovedností v detekci malwaru. Praxe dělá mistra.',
  rankSenior: '🔐 Seniorský analytik',
  rankSeniorMsg: 'Skvělá práce! Identifikoval/a jsi většinu hrozeb. Stále ostři svůj pohled na jemné varovné signály.',
  rankElite: '🛡️ Elitní kybernetický analytik',
  rankEliteMsg: 'Výjimečná práce! Zachytil/a jsi téměř každou hrozbu. Tvé instinkty pro digitální bezpečnost jsou výborné.',
  playAgain: 'Hrát znovu',
  levelMeta: [
    { title: 'Úroveň 1 ze 4 — Skener souborů', app: '📁 Průzkumník souborů', msg: '🔍 Skenuji soubor…' },
    { title: 'Úroveň 2 ze 4 — E-mailová schránka', app: '📧 Pošta', msg: '📧 Čtu e-mail…' },
    { title: 'Úroveň 3 ze 4 — Vyskakovací okna prohlížeče', app: '🌐 Prohlížeč', msg: '⚠️ Detekováno vyskakovací okno!' },
    { title: 'Úroveň 4 ze 4 — Oprávnění aplikací', app: '⚙️ Správce aplikací', msg: '⚙️ Kontroluji oprávnění…' },
  ],
  files: [
    {
      icon: '💀', name: 'FreeMinecraft_Crack.exe', type: 'Spustitelný soubor (.exe)',
      source: 'Staženo z: crack-games-free.ru', size: '14.2 MB', date: 'Dnes, 15:41',
      description: 'Instalátor, který tvrdí, že ti dá zdarma Minecraft. Staženo z neoficiálního ruského webu.',
      isThreat: true,
      explanation: 'Cracknuté instalátory her jsou klasickým způsobem distribuce trojanů a ransomwaru. Přípona .exe, podezřelá doména a premisa „bezplatného cracku" jsou závažné varovné signály.',
      tip: 'Software vždy stahuj pouze z oficiálních, ověřených webových stránek.',
    },
    {
      icon: '📄', name: 'History_Essay_Draft.docx', type: 'Dokument Word (.docx)',
      source: 'Vytvořeno lokálně na tomto zařízení', size: '48 KB', date: 'Včera, 19:15',
      description: 'Dokument Word, který jsi sám/sama vytvořil/a pro hodinu dějepisu.',
      isThreat: false,
      explanation: 'Malý dokument Word vytvořený lokálně je bezpečný. Má standardní příponu, malou velikost souboru a lokální původ.',
      tip: 'Buď opatrný/á s .docx soubory přijatými od cizích lidí — mohou obsahovat škodlivá makra. Ale vlastnoručně vytvořené soubory jsou v pořádku.',
    },
    {
      icon: '⚡', name: 'speedup_your_pc.bat', type: 'Dávkový skript (.bat)',
      source: 'Přijato přes Discord DM od: xX_h4ck3r_Xx', size: '3.1 KB', date: 'Dnes, 11:02',
      description: 'Dávkový skript zaslaný přes Discord neznámým uživatelem, který tvrdí, že zrychlí tvůj počítač.',
      isThreat: true,
      explanation: 'Soubory .bat mohou spustit libovolný systémový příkaz — včetně instalace malwaru, otevírání zadních vrátek nebo mazání souborů. Nikdy nespouštěj skripty od cizích lidí.',
      tip: 'Nikdy nespouštěj skripty .bat nebo .vbs od lidí, které neznáš a plně jim nedůvěřuješ, i když tvrdí, že jsou neškodné.',
    },
    {
      icon: '🎵', name: 'Summer_Playlist.mp3', type: 'Zvukový soubor (.mp3)',
      source: 'Uloženo z desktopové aplikace Spotify', size: '8.7 MB', date: 'Před 3 dny',
      description: 'Hudební soubor uložený prostřednictvím oficiální aplikace Spotify.',
      isThreat: false,
      explanation: 'Toto je standardní zvukový soubor z důvěryhodného zdroje. Soubory .mp3 nejsou spustitelné a nepředstavují žádné reálné riziko, pokud pocházejí z legitimních aplikací.',
      tip: 'Standardní mediální soubory (.mp3, .jpg, .mp4) jsou obecně bezpečné. Dávej pozor pouze na soubory, které maskují svou příponu, např. „song.mp3.exe".',
    },
    {
      icon: '🔧', name: 'RegFix_Pro_Setup.exe', type: 'Spustitelný soubor (.exe)',
      source: 'Dodáno vyskakovací reklamou prohlížeče', size: '2.1 MB', date: 'Dnes, 14:18',
      description: 'Nástroj pro opravu registru, který byl nabídnut vyskakovací reklamou tvrdící, že je tvůj počítač poškozený.',
      isThreat: true,
      explanation: 'Falešné nástroje pro opravu počítače dodávané prostřednictvím vyskakovacích reklam jsou běžným prostředkem pro adware a spyware. Skutečné systémové nástroje se tímto způsobem neinzerují.',
      tip: 'Legitimní antivirový nebo opravný software se nikdy nedistribuuje prostřednictvím náhodných vyskakovacích reklam prohlížeče.',
    },
    {
      icon: '📸', name: 'Birthday_Party_2024.jpg', type: 'Obrázkový soubor (.jpg)',
      source: 'Přijato přes WhatsApp od: Babičky', size: '2.9 MB', date: 'Minulý týden',
      description: 'Fotka z tvé narozeninové párty zaslaná babičkou.',
      isThreat: false,
      explanation: 'Fotka .jpg od známého rodinného příslušníka je bezpečná. Standardní obrázky od důvěryhodných kontaktů nejsou malware.',
      tip: 'Dávej pozor na obrázkové soubory s dvojitými příponami jako „photo.jpg.exe" — ty skrývají skutečný, nebezpečný typ souboru.',
    },
    {
      icon: '💎', name: 'FREE_ROBUX_GENERATOR.vbs', type: 'Skript VBScript (.vbs)',
      source: 'Odkaz z komentáře na YouTube', size: '1.8 KB', date: 'Dnes, 9:55',
      description: 'Skript z komentáře na YouTube, který tvrdí, že vygeneruje neomezené Robuxy pro Roblox.',
      isThreat: true,
      explanation: 'Generátory „bezplatných Robuxů" neexistují — jsou to 100% podvody. Skripty .vbs mohou spouštět mocné systémové příkazy. Toto je klasická technika distribuce malwaru.',
      tip: 'Generátory herní měny zdarma jsou vždy podvody. Existují pouze proto, aby ukradly účty, nainstalovaly malware nebo obojí.',
    },
    {
      icon: '📊', name: 'Science_Project_Data.xlsx', type: 'Tabulka Excel (.xlsx)',
      source: 'E-mail od: johnson.s@westridge-school.edu', size: '156 KB', date: 'Včera, 10:33',
      description: 'Soubor Excel s daty vědeckého projektu zaslaný ověřeným školním učitelem.',
      isThreat: false,
      explanation: 'Tato tabulka pochází od ověřeného školního učitele používajícího oficiální školní doménu. Typ souboru je vhodný a velikost souboru je přiměřená.',
      tip: 'Kancelářské soubory od neznámých odesílatelů mohou obsahovat škodlivá makra. Před otevřením příloh vždy ověř odesílatele.',
    },
  ],
  emails: [
    {
      fromName: 'Tým IT bezpečnosti', fromAddr: 'security-alert@school-itsupport.xyz', avatarLetter: '🔐',
      subject: 'NALÉHAVÉ: Váš školní účet byl hacknut — resetujte heslo OKAMŽITĚ',
      body: `Milý studente,

Naše systémy detekovaly neoprávněný přístup k vašemu školnímu účtu z neznámého místa.

Musíte okamžitě resetovat heslo spuštěním přiloženého nástroje. Pokud nezakročíte do 30 minut, dojde k trvalému uzamčení účtu.

— IT bezpečnostní oddělení`,
      attachment: 'PasswordReset_Tool.exe',
      isThreat: true,
      explanation: 'Několik varovných signálů: podezřelá doména „.xyz" (nikoli skutečná doména vaší školy), extrémní naléhavost a příloha .exe. Skutečná IT oddělení nikdy neposílají nástroje pro reset hesla jako spustitelné soubory — odkazují na správnou přihlašovací stránku.',
      tip: 'Pokud dostanete bezpečnostní upozornění, kontaktujte IT přímo pomocí telefonního čísla, které již znáte — nikdy nedůvěřujte kontaktním informacím z podezřelého e-mailu samotného.',
    },
    {
      fromName: 'Ms. Johnson', fromAddr: 'johnson.s@westridge-school.edu', avatarLetter: 'J',
      subject: 'Vědecký veletrh — přiložen projektový brief',
      body: `Ahoj třído,

v příloze najdete oficiální projektový brief pro nadcházející vědecký veletrh. Zahrnuje požadované sekce, pokyny pro formátování a termín odevzdání.

Přineste dokončený plakát a zprávu do místnosti 14 do pátku.

V případě dotazů se ozvěte!

Ms. Johnson
Přírodovědné oddělení, škola Westridge`,
      attachment: 'Science_Fair_Project_Brief.docx',
      isThreat: false,
      explanation: 'Toto je legitimní školní e-mail. Odesílatel používá ověřenou školní doménu .edu, příloha je standardní dokument Word relevantní k účelu e-mailu a nejsou vyžadovány žádné osobní informace ani urgentní hrozby.',
      tip: 'Soubor .docx od známého učitele na oficiální školní doméně je bezpečný. Vždy ověřte celou adresu odesílatele před otevřením jakékoli přílohy.',
    },
    {
      fromName: 'Lucas (herní kamarád)', fromAddr: 'lucas.gamer99@gmail.com', avatarLetter: 'L',
      subject: 'kámo spusť tohle, dá ti to nekonečné mince ve hře!!',
      body: `hej!!

našel jsem tenhle skvělý skript online, který ti dá neomezené mince v Clash Royale. prostě spusť soubor .bat a automaticky opatchuje hru lol

můj brácha to zkusil a fungovalo to. ale nikomu to neříkej

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      isThreat: true,
      explanation: 'I zprávy od skutečných přátel mohou šířit malware — Lucasův účet může být kompromitován nebo nemusí vědět, že soubor je nebezpečný. Skript .bat, který tvrdí, že „hackuje" hru, je klasická metoda doručení trojana. Jeho spuštění může dát útočníkovi plnou kontrolu nad tvým systémem.',
      tip: 'Nikdy nespouštěj skripty .bat nebo .vbs od nikoho, včetně přátel. „Cheat" skripty pro online hry jsou téměř vždy malware v přestrojení.',
    },
    {
      fromName: 'Školní knihovna', fromAddr: 'library@westridge-school.edu', avatarLetter: '📚',
      subject: 'Letní čtenářský program — tvůj seznam četby',
      body: `Ahoj,

děkujeme za registraci do našeho Letního čtenářského programu! V příloze najdeš svůj personalizovaný seznam četby podle věkové skupiny a zájmů.

Libovolný z těchto titulů si můžeš půjčit ve školní knihovně nebo je vyžádat prostřednictvím studentského portálu.

Příjemné čtení!

Tým školní knihovny Westridge`,
      attachment: 'Summer_Reading_List_2024.pdf',
      isThreat: false,
      explanation: 'Legitimní e-mail od školní knihovny používající oficiální doménu .edu. Příloha .pdf je seznam četby — zcela vhodný pro kontext. Nejsou vyžadovány žádné osobní informace a žádné odkazy nejsou podezřelé.',
      tip: 'Soubory PDF od důvěryhodných, známých odesílatelů jsou obecně bezpečné. Buďte opatrnější s PDF soubory od neznámých odesílatelů, protože mohou někdy obsahovat vložené skripty.',
    },
    {
      fromName: 'CENTRUM UPOZORNĚNÍ NA VÝHRU', fromAddr: 'winner@free-prize-claim-2024.net', avatarLetter: '🏆',
      subject: 'BYLI JSTE VYBRÁNI — NÁROKUJTE SI iPHONE 15 TEĎ!!!',
      body: `GRATULUJEME!!!

Byli jste náhodně vybráni jako náš šťastný výherce! Chcete-li si nárokovat iPhone 15 Pro Max, vyplňte a vraťte přiložený formulář žádosti s vašimi osobními údaji a poplatkem za dopravu 4,99 $.

Odpovězte do 12 HODIN, jinak výhra propadne!

[NÁROKOVAT VÝHRU →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      isThreat: true,
      explanation: 'Klasický podvod o výhře s přílohou .html — jeho otevřením se načte falešná webová stránka navržená k odcizení vašich osobních údajů a platebních informací. Varovné signály: výhra, do které jste se nepřihlásili, extrémní naléhavost, podezřelá doména odesílatele a nadměrná velká písmena.',
      tip: 'E-mailové přílohy .html, které otevírají „formuláře", jsou běžným způsobem, jak vytvořit přesvědčivé falešné přihlašovací nebo platební stránky lokálně na vašem zařízení, čímž obcházejí webové filtry.',
    },
  ],
  popups: [
    {
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'BEZPEČNOSTNÍ UPOZORNĚNÍ',
      icon: '🚨',
      message: '⚠️ DETEKOVÁN VIRUS! Váš počítač je infikován 47 viry! Okamžitě zavolejte na 1-800-FIX-NOW, jinak bude váš systém trvale poškozen!',
      subtext: 'Windows Defender detekoval kritické hrozby. Jednejte nyní!',
      primaryBtnText: '📞 Zavolat a opravit',
      isThreat: true,
      explanation: 'Toto je „scareware" — falešné upozornění na virus navržené k přimění k zavolání na podvodné telefonní číslo nebo instalaci falešného antivirového softwaru. Skutečné bezpečnostní nástroje nikdy nezobrazují upozornění ve vyskakovacích oknech webového prohlížeče.',
      tip: 'Podezřelá vyskakovací okna prohlížeče zavírej pomocí tlačítka X. Nikdy nevolej na telefonní čísla zobrazená ve vyskakovacích oknech prohlížeče — to jsou vždy podvodné linky.',
    },
    {
      browserUrl: 'https://school-portal.edu',
      appName: 'Školní portál',
      icon: '🍪',
      message: 'Tento web používá cookies k zapamatování vašeho přihlášení a zlepšení vašeho zážitku.',
      subtext: 'Používáme pouze nezbytné cookies. Žádné osobní údaje nejsou sdíleny s třetími stranami.',
      primaryBtnText: '✓ Přijmout cookies',
      isThreat: false,
      explanation: 'Legitimní oznámení o souhlasu s cookies ze školního portálu. Je transparentní ohledně používání cookies a nevyžaduje nic neobvyklého. Přijmutí nezbytných cookies na důvěryhodném webu je v pořádku.',
      tip: 'Bannery se souhlasem s cookies na důvěryhodných, známých webech jsou v mnoha zemích vyžadovány zákonem a jsou zcela normální.',
    },
    {
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Gratulujeme!!!',
      icon: '🎉',
      message: 'JSTE 1 000 000. NÁVŠTĚVNÍK! Vyhráli jste BEZPLATNOU PlayStation 5! Klikněte níže a okamžitě si nárokujte výhru!',
      subtext: '⏱️ Nabídka vyprší za: 00:59 — Nárokujte si ji dříve, než čas vyprší!',
      primaryBtnText: '🎮 Nárokovat BEZPLATNOU PS5!',
      isThreat: true,
      explanation: 'Falešné vyskakovací okno s výhrou — žádný web náhodně neuděluje návštěvníkům PlayStation 5. Kliknutí na tlačítko vede na podvodný web, který žádá o osobní informace nebo platbu. Odpočítávání je taktika nátlaku.',
      tip: 'Odpočítávání ve vyskakovacích oknech existuje proto, aby tě zastavilo v přemýšlení. Skutečné výhry se nikdy nedistribuují prostřednictvím náhodných vyskakovacích oken prohlížeče.',
    },
    {
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Povolit YouTube zasílat upozornění na nová videa z kanálů, které odebíráš?',
      subtext: 'Toto lze změnit později v nastavení prohlížeče.',
      primaryBtnText: 'Povolit oznámení',
      isThreat: false,
      explanation: 'Ačkoli YouTube samotný je legitimní, blokování oznámení prohlížeče je bezpečnější a čistší výchozí nastavení — i u důvěryhodných webů. Jakmile jsou udělena, oprávnění k oznámením mohou být zneužita nebo se stát spamem.',
      tip: 'Pečlivě zvažuj, než povolíš oznámení prohlížeče. Většina webů nepotřebuje toto oprávnění k řádnému fungování.',
    },
    {
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Správce stahování',
      icon: '⬇️',
      message: 'Soubor připraven: „Adobe_Photoshop_FULL_CRACK_2024.exe" (87 MB). Naše AI ověřila tento soubor jako BEZPEČNÝ.',
      subtext: 'Napájeno VirusSafe™ — prohledáno a schváleno. Kliknutím stáhni okamžitě.',
      primaryBtnText: '✓ Stáhnout nyní',
      isThreat: true,
      explanation: 'Několik varovných signálů: podezřelá doména „.cc", cracknutý (pirátský) software, který je téměř vždy v balíčku s malwarem, a falešný vlastnoručně prohlášený odznak „BEZPEČNÉ". Označení „VirusSafe™" je vymyšleno, aby tě zmanipulovalo.',
      tip: 'Cracknutý nebo pirátský software téměř vždy obsahuje skrytý malware. Software stahuj pouze z oficiálního webu vydavatele.',
    },
  ],
  permissions: [
    {
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Vydavatel: Neznámý vývojář · ⭐ 2,1 · 500 stažení',
      description: 'Jednoduchá aplikace svítilny.',
      permissions: [
        {
          icon: '📷',
          name: 'Fotoaparát',
          reason: 'Pro aktivaci blesku LED',
          suspicious: false
        },
        {
          icon: '📍',
          name: 'Přesná poloha (GPS)',
          reason: 'Bez udaného důvodu',
          suspicious: true
        },
        {
          icon: '📞',
          name: 'Čtení protokolu hovorů',
          reason: 'Bez udaného důvodu',
          suspicious: true
        },
        {
          icon: '💾',
          name: 'Přístup ke všem souborům',
          reason: 'Bez udaného důvodu',
          suspicious: true
        },
      ],
      isThreat: true,
      explanation: 'Aplikace svítilny potřebuje pouze přístup k fotoaparátu pro LED. Poloha, protokoly hovorů a úplný přístup k souborům jsou zcela zbytečné — to jsou znaky spywaru, který tiše shromažďuje tvá data.',
      tip: 'Vždy si polož otázku: „Proč tato aplikace potřebuje toto oprávnění?" Svítilna nemá žádné legitimní využití pro tvůj GPS nebo kontakty.',
    },
    {
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Vydavatel: Creative Tools Ltd · ⭐ 4,7 · 2M+ stažení',
      description: 'Úprava a vylepšení fotografií pro školní projekty.',
      permissions: [
        {
          icon: '📷',
          name: 'Fotoaparát',
          reason: 'Pro pořizování nových fotografií k úpravě',
          suspicious: false
        },
        {
          icon: '🖼️',
          name: 'Přístup k fotografiím',
          reason: 'Pro otevření stávajících fotografií',
          suspicious: false
        },
        {
          icon: '💾',
          name: 'Uložit do úložiště',
          reason: 'Pro uložení upravených fotografií',
          suspicious: false
        },
      ],
      isThreat: false,
      explanation: 'Všechna tři oprávnění mají jasné, logické důvody přímo související s úpravou fotografií. Přístup k fotoaparátu, přístup ke knihovně fotografií a ukládání souborů jsou přesně to, co editor fotografií potřebuje — nic víc.',
      tip: 'Když každé požadované oprávnění má jasný účel spojený s hlavní funkcí aplikace, je to znak poctivého, dobře navrženého softwaru.',
    },
    {
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Vydavatel: FastGame Studio · ⭐ 4,1 · 800 tisíc stažení',
      description: 'Rychlá plošinová hra s bočním pohledem.',
      permissions: [
        {
          icon: '🔊',
          name: 'Přehrávání zvuku',
          reason: 'Pro zvukové efekty ve hře',
          suspicious: false
        },
        {
          icon: '📳',
          name: 'Vibrace',
          reason: 'Pro haptickou zpětnou vazbu při hraní',
          suspicious: false
        },
        {
          icon: '📍',
          name: 'Přesná poloha GPS',
          reason: 'Bez udaného důvodu',
          suspicious: true
        },
        {
          icon: '📱',
          name: 'Čtení ID zařízení a informací',
          reason: 'Bez udaného důvodu',
          suspicious: true
        },
      ],
      isThreat: true,
      explanation: 'Zvuk a vibrace jsou normální pro hru. Ale GPS a ID zařízení nemají žádné legitimní využití v plošinovce — používají se k sledování a identifikaci tebe pro reklamní datové makléře nebo k vytvoření profilu.',
      tip: 'I aplikace s dobrým hodnocením mohou požadovat zbytečná oprávnění. Vždy odmítni oprávnění, která nemají jasnou vazbu na účel aplikace.',
    },
    {
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Vydavatel: CsHub Education · ⭐ 4,9 · 50 tisíc stažení',
      description: 'Interaktivní výuka kybernetické bezpečnosti pro studenty.',
      permissions: [
        {
          icon: '🌐',
          name: 'Přístup k internetu',
          reason: 'Pro načítání lekcí a kvízů',
          suspicious: false
        },
        {
          icon: '💾',
          name: 'Místní úložiště',
          reason: 'Pro uložení pokroku offline',
          suspicious: false
        },
      ],
      isThreat: false,
      explanation: 'Přístup k internetu a místní úložiště jsou pro vzdělávací aplikaci, která načítá online obsah a ukládá tvůj pokrok, jasně nezbytné. Je požadováno pouze to, co je nutné — dobrá praxe ochrany soukromí.',
      tip: 'Aplikace, které požadují pouze minimální oprávnění potřebná pro jejich základní funkci, jsou příklady designu respektujícího soukromí.',
    },
  ],
}
