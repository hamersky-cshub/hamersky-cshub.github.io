// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim: 'Einen Überblick über die Angreiferperspektive zu geben, indem Lernenden geholfen wird, Angreifertechniken zu erkennen und die Motive hinter Cyberangriffen zu verstehen.',
  objectives: [
    'Das Verständnis der Schülerinnen und Schüler für Angreifermotivationen zu entwickeln, einschließlich psychologischer, sozialer und wirtschaftlicher Faktoren.',
    'Die Fähigkeiten der Schülerinnen und Schüler im Erkennen gängiger Angreifertechniken aufzubauen.',
  ],
  outcomes: [
    'Ich verstehe die Motive von Angreifern und kann Beispiele zu psychologischen, sozialen und wirtschaftlichen Faktoren nennen.',
    'Ich kann Angreifertechniken in gegebenen Szenarien erkennen.',
  ],
  parts: [
    {
      goal:
        'Kindern Wissen über das Konzept einer Vertrauensperson vermitteln und Fähigkeiten zur Identifizierung des Kreises der Vertrauenspersonen entwickeln.',
      bundle: {
        filename: 'Attacker Perspective Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Arbeitsblatt',
            name: 'Vertrauenspersonen: Menschen um mich herum',
            filename: 'Worksheet - Trusteees People Around Me',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.1.2
            kind: 'Arbeitsblatt',
            name: 'Vertrauenskreise',
            filename: 'Worksheet - Circles of Trust',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Den Kreis der Vertrauenspersonen definieren',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      goal: 'Das Konzept eines Angreifers und die Motivation aus der Angreiferperspektive einführen.',
      bundle: {
        filename: 'Attacker Perspective Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Karten',
            name: 'Das Verhalten identifizieren',
            filename: 'Cards - Identify the Behaviour',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.2.2
            kind: 'Karten',
            name: 'Die Charaktere erkennen',
            filename: 'Cards - Recognise the Characters',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.2.4
            kind: 'Bild',
            name: 'Angreifermotivationen',
            filename: 'Image - Attacker Motivations',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.2.5
            kind: 'Arbeitsblatt',
            name: 'Angriffsanalyse',
            filename: 'Worksheet - Attack Analysis',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Einen Cybersicherheitsangreifer definieren',
          },
          {
            title: 'Die Motivation des Angreifers verstehen',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Wer steckt hinter Cyberangriffen?',
        supportText:
          'Verwenden Sie dieses Video, damit Schülerinnen und Schüler sich die echten Menschen und Motive hinter Cyberangriffen vorstellen können, über das Stereotyp des einsamen Hackers hinaus. Pausieren Sie, um zu fragen, wer ihrer Meinung nach verantwortlich ist und warum.',
        downloads: {
          video: {
            filename: 'Who is Behind Cyber Attacks',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Who is Behind Cyber Attacks - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Die grundlegenden Techniken (Taktiken) einführen, die für Kinder relevant sind und die Angreifer zur Erreichung ihrer Ziele einsetzen.',
      bundle: {
        filename: 'Attacker Perspective Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Situation',
            name: 'Smishing und Identitätsdiebstahl',
            filename: 'Situation - Smishing and Impersonation',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.3.2
            kind: 'Bild',
            name: 'Häufige Angreifertechniken',
            filename: 'Image - Common Adversary Techniques',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Verhaltensmuster verstehen',
          },
          {
            title: 'Angriffspfade verstehen',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
  ],
  otherModulesDivider: 'Weitere Themen erkunden',
  otherModulesTitle: 'Weitere Module',
  otherModulesSubtitle: 'Verwandte Module durchsuchen und weiterlernen.',
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
  title: 'Im Kopf des Hackers',
  subtitle:
    'Sie sind ein ethischer Hacker, der ein Social-Media-Profil scannt. Klicken Sie auf alles, das wie eine Sicherheitslücke aussieht – aber achten Sie auf Ihre Leben!',
  howItWorks: 'So funktioniert es',
  instruction:
    'Untersuchen Sie dieses Social-Media-Profil, als wären Sie ein Hacker, der nach Schwachstellen sucht. Fast alles auf dem Bildschirm ist anklickbar – denken Sie sorgfältig nach, denn ein Klick auf etwas, das keine echte Schwachstelle ist, kostet Sie ein Leben!',
  tipLabel: 'Tipp',
  tip: 'Es gibt genau 4 echte Schwachstellen, die unter vielen harmlos aussehenden Elementen versteckt sind. Nicht jedes anklickbare Element ist eine Sicherheitslücke!',
  livesTitle: 'Leben',
  livesDesc: '3 falsche Klicks und das Spiel ist vorbei',
  vulnerabilitiesFoundTitle: '🔍 Gefundene Schwachstellen',
  vulnerabilitiesEmpty: 'Noch keine gefunden…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Was Angreifer anvisieren',
  attackerTargets: [
    '🚩 Schwache oder offengelegte Passwörter',
    '🚩 HTTP statt HTTPS',
    '🚩 Echtzeit-Standortfreigabe',
    '🚩 Vollständiges Geburtsdatum öffentlich sichtbar',
    '🚩 Antworten auf Sicherheitsfragen offengelegt',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Jetzt aktiv',
    bioText: '16 · Gamer 🎮 · Manga Fan',
    aboutTitle: 'Über mich',
    statsFriendsLabel: 'Freunde',
    statsFollowingLabel: 'Folge ich',
    bornText: 'Geboren am 14. Juni 2008',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Name des Haustieres: Whiskers',
    post1Time: '📍 Einkaufszentrum Innenstadt · Gerade eben',
    post1Body: 'Habe mir gerade einen Kaffee geholt ☕ Ist jemand in der Nähe? Findet mich am Foodcourt! 😄',
    post1Badge: '🛍️ Innenstadt-Mall — eingecheckt',
    post2Time: 'Vor 2 Stunden',
    post2Body: 'Gerade von der Schule zurück! Pizza mit der Familie 🍕 Bester Abend aller Zeiten!',
    actionLike: 'Gefällt mir',
    actionComment: 'Kommentieren',
    actionShare: 'Teilen',
  },
  vulnFoundSuffix: '/ 4 Schwachstellen gefunden',
  tryAgain: 'Erneut versuchen',
  winTitle: 'Ausgezeichnete Arbeit!',
  winMsg: 'Sie haben alle 4 Schwachstellen wie ein echter Sicherheitsforscher entdeckt. Jetzt wissen Sie, wie Angreifer denken!',
  loseTitle: 'Spiel vorbei!',
  loseMsgTemplate:
    'Ihnen sind die Leben ausgegangen! Sie haben {found} von {total} Schwachstellen gefunden. Die verpassten sind jetzt rot hervorgehoben.',
  attackerVoiceInitial: 'Interessantes Profil… lass mich nach Schwachstellen scannen.',
  attackerVoiceWin: '🏆 Beeindruckend! Sie haben alle {total} Schwachstellen gefunden. Sie denken wie ein Hacker!',
  attackerVoiceLose: '💀 Zu viele Fehler. Studieren Sie das Profil beim nächsten Mal sorgfältiger.',
  attackerVoiceAlreadyTagged: 'Bereits markiert: {label}.',
  attackerVoiceCorrect: '🔓 Schwachstelle gefunden: {label}! {explain}',
  attackerVoiceWrong: 'Keine Schwachstelle — {explain}',
  hotspots: [
    {
      id: 'http',
      label: 'Unverschlüsselte Verbindung (HTTP)',
      explain: 'Diese Website verwendet HTTP statt HTTPS. Alles, was Sie hier eingeben — einschließlich Passwörter — wird völlig unverschlüsselt übertragen und kann von jedem im selben Netzwerk abgefangen werden.'
    },
    { id: 'avatar',
      label: 'Profilbild',
      explain: 'Profilfotos sind ein Standardteil sozialer Medien. Sie sind an sich kein Sicherheitsrisiko!'
    },
    {
      id: 'username',
      label: 'Anzeigename / Benutzername',
      explain: 'Ihren Namen und @Handle anzuzeigen ist auf sozialen Plattformen völlig normal. Keine Schwachstelle.'
    },
    {
      id: 'online',
      label: 'Aktivitätsstatus',
      explain: 'Anzuzeigen, wann Sie online sind, ist eine gängige Funktion. Es ist eine geringfügige Datenschutzüberlegung, aber keine kritische Sicherheitslücke.'
    },
    {
      id: 'bio',
      label: 'Bio / Interessen',
      explain: 'Allgemeine Hobbys wie Gaming oder Anime aufzulisten ist in Ordnung. Dies legt keine sensiblen Kontodaten offen.'
    },
    {
      id: 'followers',
      label: 'Follower- / Freundeanzahl',
      explain: 'Freunde- und Followerzahlen sind eine normale Social-Media-Funktion. Keine Sicherheitslücke!'
    },
    {
      id: 'birthday',
      label: 'Vollständiges Geburtsdatum offengelegt',
      explain: "Das Offenlegen Ihres vollständigen Geburtsdatums ist gefährlich! Angreifer nutzen Geburtstage, um Passwörter zu erraten (z. B. 'alex2008'), Sicherheitsfragen zu beantworten und die Kontowiederherstellung zu umgehen."
    },
    {
      id: 'email',
      label: 'E-Mail im Profil',
      explain: 'Eine E-Mail anzuzeigen kann Spam anziehen, aber im Vergleich zu einem offengelegten Passwort oder einer Sicherheitsantwort ist es ein relativ geringes Problem.'
    },
    {
      id: 'petname',
      label: 'Haustiername offengelegt',
      explain: 'Das Offenlegen des Namens Ihres Haustieres kann von Angreifern genutzt werden, um Sicherheitsantworten zu erraten oder überzeugendere Social-Engineering-Angriffe zu erstellen.'
    },
    {
      id: 'location',
      label: 'Echtzeit-Standortübertragung',
      explain: 'Dieser Beitrag enthüllt Alexs genauen Standort jetzt! Jeder — einschließlich Fremde und Angreifer — kann sehen, wo Alex sich in diesem Moment befindet. Echtzeit-Standortfreigabe ist ein ernstes Sicherheitsrisiko.'
    },
    {
      id: 'post2',
      label: 'Allgemeiner Beitrag',
      explain: 'Über alltägliche Aktivitäten wie Pizza essen zu posten ist völlig in Ordnung. Es legt keine sensiblen Sicherheitsinformationen offen!'
    },
    {
      id: 'like1',
      label: 'Gefällt-mir-Schaltfläche',
      explain: 'Beiträge zu liken ist eine völlig normale und harmlose Social-Media-Interaktion!'
    },
    {
      id: 'comment1',
      label: 'Kommentar-Schaltfläche',
      explain: 'Kommentieren zu können ist eine Standard-Social-Media-Funktion. Keine Schwachstelle!'
    },
    {
      id: 'share1',
      label: 'Teilen-Schaltfläche',
      explain: 'Beiträge zu teilen ist eine grundlegende Social-Media-Funktion. Die Schaltfläche selbst ist kein Sicherheitsproblem!'
    },
    {
      id: 'like2',
      label: 'Gefällt-mir-Schaltfläche',
      explain: 'Beiträge zu liken ist völlig normal und harmlos!'
    },
    {
      id: 'comment2',
      label: 'Kommentar-Schaltfläche',
      explain: 'Kommentare sind eine Standard-Social-Media-Funktion!'
    },
  ],
}
