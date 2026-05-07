// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim: 'Suteikti apžvalgą apie užpuoliko perspektyvą, padedant besimokantiesiems atpažinti užpuolikų technikas ir suprasti kibernetinių atakų motyvus.',
  objectives: [
    'Ugdyti mokinių supratimą apie užpuolikų motyvacijas, įskaitant psichologinius, socialinius ir ekonominius veiksnius.',
    'Stiprinti mokinių įgūdžius atpažįstant įprastas užpuolikų technikas.',
  ],
  outcomes: [
    'Suprantu užpuolikų motyvus ir galiu pateikti pavyzdžių, susijusių su psichologiniais, socialiniais ir ekonominiais veiksniais.',
    'Galiu atpažinti užpuolikų technikas pateiktuose scenarijuose.',
  ],
  teachingGuide: {
    ariaLabel: 'Atsisiųsti mokymo vadovą',
    download: 'Užpuoliko perspektyvos mokymo vadovas',
  },
  parts: [
    {
      goal:
        'Padėti vaikams įgyti žinių apie patikimo asmens konceptą ir ugdyti įgūdžius identifikuoti patikimų asmenų ratą.',
      bundle: {
        filename: 'Attacker Perspective Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Darbalapas',
            name: 'Patikimi asmenys: žmonės aplink mane',
            filename: 'Worksheet - Trusteees People Around Me',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.1.2
            kind: 'Darbalapas',
            name: 'Pasitikėjimo ratai',
            filename: 'Worksheet - Circles of Trust',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Apibrėžti patikimų asmenų ratą',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      goal: 'Pristatyti užpuoliko konceptą ir motyvaciją iš užpuoliko perspektyvos.',
      bundle: {
        filename: 'Attacker Perspective Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Kortelės',
            name: 'Identifikuoti elgesį',
            filename: 'Cards - Identify the Behaviour',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.2.2
            kind: 'Kortelės',
            name: 'Atpažinti personažus',
            filename: 'Cards - Recognise the Characters',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.2.4
            kind: 'Paveikslėlis',
            name: 'Užpuolikų motyvacijos',
            filename: 'Image - Attacker Motivations',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.2.5
            kind: 'Darbalapas',
            name: 'Atakos analizė',
            filename: 'Worksheet - Attack Analysis',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Apibrėžti kibernetinio saugumo užpuoliką',
          },
          {
            title: 'Suprasti užpuoliko motyvaciją',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Kas slypi už kibernetinių atakų?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad mokiniai galėtų įsivaizduoti tikrus žmones ir motyvus už kibernetinių atakų, peržengdami vieno hakerio stereotipą. Sustokite ir paklauskite, kas, jų manymu, yra atsakingas ir kodėl.',
        downloads: {
          video: {
            filename: 'Who is Behind Cyber Attacks',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Who is Behind Cyber Attacks - Subtitles',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Pristatyti pagrindines technikas (taktikas), aktualias vaikams, kurias užpuolikai naudoja savo tikslams pasiekti.',
      bundle: {
        filename: 'Attacker Perspective Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Situacija',
            name: 'Smišingas ir apsimetinėjimas',
            filename: 'Situation - Smishing and Impersonation',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.3.2
            kind: 'Paveikslėlis',
            name: 'Įprastos priešininkų technikos',
            filename: 'Image - Common Adversary Techniques',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Suprasti elgesio modelius',
          },
          {
            title: 'Suprasti atakos kelius',
          },
          {
            title: 'Plenarinis posėdis – Apibendrinimas ir neoficialus vertinimas',
          },
        ],
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
      imageSrc: '/images/learning-hub/01_digital-citizenship.png',
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
    {
      moduleId: 'da',
      brand: 'DA',
      href: '/learning-hub/digital-abuse/content',
      imageSrc: '/images/learning-hub/07_digital-abuse.png',
    },
  ],
}

export const challengeAP = {
  title: 'Hakerio mintyse',
  subtitle:
    'Esate etinis hakeris, skenuojantis socialinių tinklų profilį. Spustelėkite viską, kas atrodo kaip saugumo spraga – bet saugokite savo gyvybes!',
  howItWorks: 'Kaip tai veikia',
  instruction:
    'Išnagrinėkite šį socialinių tinklų profilį tarsi hakeris, ieškantis silpnų vietų. Beveik viskas ekrane yra paspaudžiama – galvokite atidžiai, nes paspaudus tai, kas nėra tikra pažeidžiamoji vieta, prarandate gyvybę!',
  tipLabel: 'Patarimas',
  tip: 'Yra tiksliai 4 tikros pažeidžiamosios vietos, paslėptos tarp daugelio nekaltai atrodančių elementų. Ne viskas, ką galima spustelėti, yra saugumo spraga!',
  livesTitle: 'Gyvybės',
  livesDesc: '3 neteisingi paspaudimai – ir žaidimas baigtas',
  vulnerabilitiesFoundTitle: '🔍 Rastos pažeidžiamosios vietos',
  vulnerabilitiesEmpty: 'Dar nerasta…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Ką taikosi užpuolikai',
  attackerTargets: [
    '🚩 Silpni arba atskleisti slaptažodžiai',
    '🚩 HTTP vietoj HTTPS',
    '🚩 Vietos dalijimasis realiuoju laiku',
    '🚩 Visa gimimo data viešai matoma',
    '🚩 Atsakymai į saugumo klausimus atskleisti',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Aktyvus dabar',
    bioText: '16 · Gamer 🎮 · Manga Fan · Coffee ☕',
    aboutTitle: 'Apie mane',
    statsFriendsLabel: 'Draugai',
    statsFollowingLabel: 'Seku',
    bornText: 'Gimęs/gimusi 2008 m. birželio 14 d.',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Augintinio vardas: Whiskers',
    post1Time: '📍 Miesto centro prekybos centras · Ką tik',
    post1Body: 'Ką tik išgėriau kavą ☕ Ar kas nors šalia? Ateikite manęs rasti prie maisto kiosko! 😄',
    post1Badge: '🛍️ Centro mall — prisijungta',
    post2Time: 'Prieš 2 valandas',
    post2Body: 'Ką tik grįžau iš mokyklos! Valgome picą su šeima 🍕 Geriausias vakaras!',
    actionLike: 'Patinka',
    actionComment: 'Komentuoti',
    actionShare: 'Dalintis',
  },
  vulnFoundSuffix: '/ 4 pažeidžiamosios vietos rastos',
  tryAgain: 'Bandyti dar kartą',
  winTitle: 'Puikus darbas!',
  winMsg: 'Radote visas 4 pažeidžiamąsias vietas kaip tikras saugumo tyrėjas. Dabar žinote, kaip mąsto užpuolikai!',
  loseTitle: 'Žaidimas baigtas!',
  loseMsgTemplate:
    'Baigėsi gyvybės! Radote {found} iš {total} pažeidžiamųjų vietų. Praleistos dabar paryškintos raudonai.',
  attackerVoiceInitial: 'Įdomus profilis… leiskite man nuskaityti silpnas vietas.',
  attackerVoiceWin: '🏆 Įspūdinga! Radote visas {total} silpnas vietas. Mąstote kaip hakeris!',
  attackerVoiceLose: '💀 Per daug klaidų. Kitą kartą atidžiau išstudijuokite profilį.',
  attackerVoiceAlreadyTagged: 'Jau pažymėta: {label}.',
  attackerVoiceCorrect: '🔓 Rasta pažeidžiamoji vieta: {label}! {explain}',
  attackerVoiceWrong: 'Tai ne pažeidžiamoji vieta — {explain}',
  hotspots: [
    {
      id: 'http',
      label: 'Nešifruotas ryšys (HTTP)',
      explain: 'Ši svetainė naudoja HTTP vietoj HTTPS. Viskas, ką čia įvedate – įskaitant slaptažodžius – keliauja visiškai nešifruota ir gali būti perimta bet kurio asmens tame pačiame tinkle.'
    },
    { id: 'avatar',
      label: 'Profilio nuotrauka',
      explain: 'Profilio nuotraukos yra standartinė socialinių tinklų dalis. Savaime jos nėra saugumo rizika!'
    },
    {
      id: 'username',
      label: 'Rodomas vardas / naudotojo vardas',
      explain: 'Rodomas vardas ir @slapyvardis socialinėse platformose yra visiškai normalu. Tai ne pažeidžiamoji vieta.'
    },
    {
      id: 'online',
      label: 'Aktyvumo būsena',
      explain: 'Rodyti, kada esate prisijungę, yra įprasta funkcija. Tai nedidelis privatumo klausimas, bet ne kritinė saugumo pažeidžiamoji vieta.'
    },
    {
      id: 'bio',
      label: 'Bio / Pomėgiai',
      explain: 'Bendrų pomėgių, tokių kaip žaidimai ar anime, sąrašas yra normalus dalykas. Tai neatskleidžia jautrių paskyros duomenų.'
    },
    {
      id: 'followers',
      label: 'Sekėjų / draugų skaičius',
      explain: 'Draugų ir sekėjų skaičius yra įprasta socialinių tinklų funkcija. Tai ne saugumo pažeidžiamoji vieta!'
    },
    {
      id: 'birthday',
      label: 'Visa gimimo data atskleista',
      explain: "Atskleisti visą gimimo datą yra pavojinga! Užpuolikai naudoja gimtadienius slaptažodžiams atspėti (pvz., 'alex2008'), saugumo klausimams atsakyti ir paskyros atkūrimui apeiti."
    },
    {
      id: 'email',
      label: 'El. paštas profilyje',
      explain: 'Rodomas el. paštas gali pritraukti šlamšto, tačiau, palyginti su atsklestu slaptažodžiu ar saugumo atsakymu, tai yra gana mažas rūpestis.'
    },
    {
      id: 'petname',
      label: 'Augintinio vardas atskleistas',
      explain: 'Augintinio vardo atskleidimas gali būti naudojamas užpuoliko saugumo atsakymams atspėti arba įtikinamesnėms socialinės inžinerijos atakoms kurti.'
    },
    {
      id: 'location',
      label: 'Vietos transliavimas realiuoju laiku',
      explain: 'Šis įrašas atskleidžia tikslią Alekso vietą dabar! Visi – įskaitant nepažįstamuosius ir užpuolikus – gali matyti, kur Aleksas yra šią akimirką. Vietos dalijimasis realiuoju laiku yra rimta saugumo rizika.'
    },
    {
      id: 'post2',
      label: 'Bendras įrašas',
      explain: 'Įrašai apie kasdienius dalykus, tokius kaip picos valgymas, yra visiškai normalūs. Jie neatskleidžia jokios jautrios saugumo informacijos!'
    },
    {
      id: 'like1',
      label: 'Mygtukas „Patinka"',
      explain: 'Įrašų pažymėjimas „Patinka" yra visiškai normalus ir nekenksmingas socialinių tinklų veiksmas!'
    },
    {
      id: 'comment1',
      label: 'Komentaro mygtukas',
      explain: 'Galimybė komentuoti yra standartinė socialinių tinklų funkcija. Tai ne pažeidžiamoji vieta!'
    },
    {
      id: 'share1',
      label: 'Dalijimosi mygtukas',
      explain: 'Įrašų dalijimasis yra pagrindinė socialinių tinklų funkcija. Pats mygtukas nėra saugumo problema!'
    },
    {
      id: 'like2',
      label: 'Mygtukas „Patinka"',
      explain: 'Įrašų pažymėjimas „Patinka" yra visiškai normalus ir nekenksmingas!'
    },
    {
      id: 'comment2',
      label: 'Komentaro mygtukas',
      explain: 'Komentarai yra standartinė socialinių tinklų funkcija!'
    },
  ],
}
