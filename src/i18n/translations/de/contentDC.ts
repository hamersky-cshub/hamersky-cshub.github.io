// ---------------------------------------------------------------------------
// Digital Citizenship (DC) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Citizenship module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDC = {
  aim: 'Ein Verständnis dafür zu vermitteln, was digitale Staatsbürgerschaft ist und wie man ihre Grundprinzipien befolgt.',
  objectives: [
    'Die Bedeutung der digitalen Staatsbürgerschaft zu betonen.',
    'Das Konzept der digitalen Staatsbürgerschaft und ihre Prinzipien von Rechten, Verantwortung und Respekt in digitalen Umgebungen einzuführen.',
    'Das Verständnis der Schülerinnen und Schüler dafür zu entwickeln, wie diese Prinzipien von Rechten, Verantwortung und Respekt in digitalen Umgebungen angewendet werden können — um sicher, klug und sozial zu sein.',
  ],
  outcomes: [
    'Ich kann erklären, was digitale Staatsbürgerschaft ist und warum sie wichtig ist.',
    'Ich kann die Prinzipien von Rechten, Verantwortung und Respekt in digitalen Umgebungen diskutieren, einschließlich wie man sicher bleibt, klug handelt und sich sozial engagiert.',
  ],
  parts: [
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was eine digitale Umgebung ist und welche positiven Aspekte diese hat.',
      bundle: {
        filename: 'Digital Citizenship Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.1.1
            kind: 'Szenariokarten',
            name: 'Physische und digitale Welten',
            filename: 'Scenario Cards - Physical and Digital Worlds',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Was ist eine digitale Umgebung?',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.1.2
        title: 'Was ist eine digitale Umgebung?',
        supportText:
          'Verwenden Sie dieses Video, um eine Diskussion über Online-Räume anzuregen, die Schülerinnen und Schüler bereits nutzen, von Lernplattformen bis hin zu Spielen und Messaging-Apps. Pausieren Sie für kurze Reflexionen darüber, wo Schülerinnen und Schüler Zeit online verbringen.',
        downloads: {
          video: {
            filename: 'What Is a Digital Environment',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What Is a Digital Environment - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was digitale Staatsbürgerschaft ist und warum sie wichtig ist.',
      bundle: {
        filename: 'Digital Citizenship Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.2.1
            kind: 'Bild',
            name: 'Verantwortungsbewusster Bürger',
            filename: 'Worksheet A - Rights Responsibilities and Respect',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 1.2.2a
            kind: 'Arbeitsblatt A',
            name: 'Rechte, Verantwortlichkeiten und Respekt',
            filename: 'Worksheet B - Rights Responsibilities and Respect',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 1.2.2b
            kind: 'Arbeitsblatt B',
            name: 'Rechte, Verantwortlichkeiten und Respekt',
            filename: 'Image - Feeling Safe',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Digitale Staatsbürgerschaft',
          },
          {
            title: 'Rechte, Respekt und Verantwortlichkeiten in digitalen Umgebungen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      goal:
        'Den Schülerinnen und Schülern helfen zu wissen, wie sie in digitalen Umgebungen sicher sein können, indem sie kritisch denken und verantwortungsvoll mit Datenschutzeinstellungen umgehen.',
      bundle: {
        filename: 'Digital Citizenship Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.3.1
            kind: 'Bild',
            name: 'Sicherheitsgefühl',
            filename: 'Image - Feeling Unsafe',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 1.3.2
            kind: 'Bild',
            name: 'Unsicherheitsgefühl',
            filename: 'Image - Application Privacy Settings',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 1.3.4
            kind: 'Bild',
            name: 'Datenschutzeinstellungen der Anwendung',
            filename: 'Image - Privacy Settings Strategy',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 1.3.5
            kind: 'Bild',
            name: 'Datenschutzeinstellungsstrategie',
            filename: 'Image - Digital Footprint',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Die Verbindungen zwischen der physischen und digitalen Umgebung verstehen',
          },
          {
            title: 'Datenschutzeinstellungen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.3.3
        title: 'Was sind Datenschutzeinstellungen?',
        supportText:
          'Verwenden Sie dieses Video, um Datenschutzeinstellungen als praktisches Werkzeug einzuführen, das Schülerinnen und Schüler bei den Apps und Geräten, die sie bereits besitzen, kontrollieren können. Pausieren Sie, um zu fragen, welche Einstellungen sie bereits überprüft oder geändert haben.',
        downloads: {
          video: {
            filename: 'What Are Privacy Settings',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What Are Privacy Settings - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, wie Weisheit und Resilienz ihnen helfen können, klug in digitalen Umgebungen zu agieren.',
      bundle: {
        filename: 'Digital Citizenship Part 4 Package',
      },
      included: {
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Herausforderungen in digitalen Umgebungen',
          },
          {
            title: 'Verstehen, wie man Resilienz entwickelt',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.4.1
        title: 'Resilienz in digitalen Umgebungen',
        supportText:
          'Verwenden Sie dieses Video, um zu erkunden, wie Schülerinnen und Schüler sich erholen und anpassen können, wenn online etwas schiefläuft, von Kontoproblemen bis hin zu unerwünschtem Kontakt. Pausieren Sie, um zu fragen, an wen sich Schülerinnen und Schüler in solchen Situationen um Hilfe wenden.',
        downloads: {
          video: {
            filename: 'Resilience in Digital Environments',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Resilience in Digital Environments - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal:
        'Den Schülerinnen und Schülern helfen zu verstehen, wie sie verantwortungsvoll handeln und Respekt für sich selbst und andere zeigen können, wenn sie sich sozial in digitalen Umgebungen engagieren.',
      bundle: {
        filename: 'Digital Citizenship Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.5.1
            kind: 'Bild',
            name: 'Digitaler Fußabdruck',
            filename: 'Image - Digital Footprint',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 1.5.2
            kind: 'Szenariokarten',
            name: 'Gut und schlecht zu Posten',
            filename: 'Scenario Cards - Good and Bad to Post',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 1.5.3
            kind: 'Szenariokarten',
            name: 'Social-Media-Beiträge',
            filename: 'Scenario Cards - Social Media Posts',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Verantwortungsvolles Handeln in digitalen Umgebungen',
          },
          {
            title: 'Einen positiven digitalen Fußabdruck gestalten',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
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
    {
      moduleId: 'da',
      brand: 'DA',
      href: '/learning-hub/digital-abuse/content',
      imageSrc: '/images/learning-hub/07_digital-abuse.png',
    },
  ],
}

export const challengeDC = {
  title: 'GUTER oder SCHLECHTER Inhalt zum Posten?',
  subtitle: 'Ziehen Sie jeden Beitrag in die richtige Kategorie. Lernen Sie, was sicher online zu teilen ist!',
  howItWorks: 'So funktioniert es',
  instruction: 'Ziehen Sie jede Beitragskarte in die zugehörige Zone. Auf dem Handy tippen Sie auf eine Karte, um sie auszuwählen, dann tippen Sie auf eine Ablagezone.',
  tip: 'Überlegen Sie, ob die Information Sie identifizieren oder in Gefahr bringen könnte, wenn ein Fremder sie sähe.',
  tipLabel: 'Tipp',
  tryAgain: 'Erneut versuchen',
  correctCountLabel: 'Richtig',
  postsToSort: 'Zu sortierende Beiträge',
  safeToShare: 'Sicher zu teilen',
  dragSafeHere: 'Sichere Beiträge hierher ziehen',
  doNotShare: 'NICHT teilen',
  dragUnsafeHere: 'Unsichere Beiträge hierher ziehen',
  safeZoneAriaLabel: 'Ablagezone „Sicher zu teilen"',
  unsafeZoneAriaLabel: 'Ablagezone „NICHT teilen"',
  correct: 'Richtig!',
  tryOtherZone: 'Nicht ganz — versuchen Sie die andere Zone!',
  winTitle: 'Perfekt! Sie haben alle richtig sortiert!',
  winMessage: 'Sie sind ein Experte für digitale Staatsbürgerschaft. Denken Sie beim Online-Posten an diese Lektionen!',
  playAgain: 'Nochmal spielen',
  posts: [
    { text: 'Meine Heimadresse ist Hauptstraße 123',
      category: 'unsafe',
      emoji: '🏠',
      explanation: 'Ihre Heimadresse ist privat — teilen Sie sie nie online! Fremde könnten sie nutzen, um herauszufinden, wo Sie wohnen.'
    },
    { text: 'Ich liebe es, Fußball zu spielen!',
      category: 'safe',
      emoji: '⚽',
      explanation: 'Hobbys zu teilen ist völlig in Ordnung und eine tolle Möglichkeit, mit anderen in Kontakt zu treten!'
    },
    { text: 'Mein Passwort ist Fluffy123',
      category: 'unsafe',
      emoji: '🔑',
      explanation: 'Teilen Sie Passwörter niemals mit jemandem online — nicht einmal mit Ihren besten Freunden!'
    },
    { text: 'Ich habe eine Eins in meinem Naturwissenschaftstest!',
      category: 'safe',
      emoji: '🎉',
      explanation: 'Erfolge zu feiern ist sicher zu teilen — weiter so!'
    },
    { text: 'Meine Telefonnummer ist 555-0123',
      category: 'unsafe',
      emoji: '📱',
      explanation: 'Telefonnummern sind persönlich — halten Sie sie privat, damit Fremde Sie nicht kontaktieren können.'
    },
    { text: 'Ich bin bis 18 Uhr allein zu Hause',
      category: 'unsafe',
      emoji: '🏡',
      explanation: 'Sagen Sie niemals jemandem online, dass Sie allein zu Hause sind — das gefährdet Ihre Sicherheit!'
    },
    { text: 'Unser Schulstück ist nächsten Freitag!',
      category: 'safe',
      emoji: '🎭',
      explanation: 'Schulveranstaltungen können mit Freunden geteilt werden!'
    },
    { text: 'Schau dir meine neue Zeichnung an!',
      category: 'safe',
      emoji: '🎨',
      explanation: 'Kreative Arbeiten zu teilen ist eine tolle Möglichkeit, sich auszudrücken!'
    },
    { text: 'Die Kreditkartennummer meiner Mutter ist...',
      category: 'unsafe',
      emoji: '💳',
      explanation: 'Finanzinformationen wie Kreditkartennummern müssen immer privat bleiben!'
    },
    { text: 'Mein Lieblingsfilm ist Toy Story!',
      category: 'safe',
      emoji: '🎬',
      explanation: 'Über Filme zu reden, die man mag, ist völlig sicher und macht Spaß!'
    },
    { text: 'Mein vollständiger Name ist Emily Rose Johnson',
      category: 'unsafe',
      emoji: '📛',
      explanation: 'Ihren vollständigen echten Namen online zu teilen kann Fremden helfen, Sie zu identifizieren und zu verfolgen.'
    },
    { text: 'Ich habe gerade gelernt, Fahrrad zu fahren!',
      category: 'safe',
      emoji: '🚲',
      explanation: 'Meilensteine und neue Fähigkeiten zu teilen ist eine tolle Sache zum Posten!'
    },
    { text: 'Meine Schulspindkombination ist 24-8-16',
      category: 'unsafe',
      emoji: '🔒',
      explanation: 'Spindkombinationen sind privat — jemand könnte in Ihren Spind einbrechen!'
    },
    { text: 'Wir haben einen neuen Welpen namens Max bekommen!',
      category: 'safe',
      emoji: '🐶',
      explanation: 'Über Haustiere zu berichten ist für alle sicher und macht Spaß!'
    },
    { text: 'Ich gehe um 15:30 Uhr allein durch den Park nach Hause',
      category: 'unsafe',
      emoji: '🚶',
      explanation: 'Ihre tägliche Routine und Route zu teilen sagt Fremden genau, wo sie Sie finden können.'
    },
  ],
}
