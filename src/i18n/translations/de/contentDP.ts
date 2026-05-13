// ---------------------------------------------------------------------------
// Data Privacy (DP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Data Privacy module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDP = {
  aim: 'Den Lernenden helfen zu erkennen, was als personenbezogene Daten gilt, zu verstehen, warum Datenschutz wichtig ist, und vor dem Teilen von Informationen online sicherere Entscheidungen zu treffen.',
  objectives: [
    'Personenbezogene Daten definieren und identifizieren, was sensibel ist.',
    'Überlegtes Teilen und zustimmungsbasierte Entscheidungen fördern.',
    'Bewusstsein für Datenschutzeinstellungen und sichere Standardwerte aufbauen.',
  ],
  outcomes: [
    'Gängige Arten personenbezogener Informationen erkennen.',
    'Erklären, wie Daten online übertragen und gespeichert werden können.',
    'Einfache Datenschutzregeln anwenden, bevor man teilt oder postet.',
  ],
  parts: [
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was personenbezogene Daten sind, verschiedene Arten sensibler Informationen zu identifizieren und zu erkennen, warum deren Schutz wichtig ist.',
      bundle: {
        filename: 'Data Privacy Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.1.3
            kind: 'Sortierkarten',
            name: 'Öffentlich oder privat',
            filename: 'Sorting Cards - Public or Private',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 4.1.5
            kind: 'Arbeitsblatt',
            name: 'Reflexion über öffentliche vs. private Daten',
            filename: 'Worksheet - Reflection on Public vs Private Data',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Was sind personenbezogene Daten?',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.2
        title: 'Was sind private Daten?',
        supportText:
          'Verwenden Sie dieses Video, um das Konzept privater Daten einzuführen und eine Diskussion über die Arten von Informationen anzuregen, die Schülerinnen und Schüler täglich teilen. Halten Sie inne und fragen Sie die Schülerinnen und Schüler, welche Details sie als privat betrachten.',
        downloads: {
          video: {
            filename: 'What Is Private Data',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What Is Private Data - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, wie und warum Daten online geteilt werden, die Bedeutung von Zustimmung und wie man überlegte Entscheidungen vor dem Teilen persönlicher Informationen trifft.',
      bundle: {
        filename: 'Data Privacy Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.2.2
            kind: 'Szenarienkarten',
            name: 'Rollenspiel',
            filename: 'Scenario Cards - Roleplay',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 4.2.3
            kind: 'Bild',
            name: 'Online teilen: Sicher vs. riskant',
            filename: 'Image - Sharing Online: Safe vs Risky',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 4.2.4
            kind: 'Arbeitsblatt',
            name: 'Teilen oder nicht teilen?',
            filename: 'Worksheet - Share or Don\'t Share',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Wie werden Daten geteilt?',
          },
          {
            title: 'Zustimmung und Berechtigungen',
          },
          {
            title: 'Plenarsitzung - Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen zu entdecken, was ein digitaler Fußabdruck ist, zu verstehen, wie alltägliche Online-Aktivitäten dauerhafte Spuren hinterlassen, und den langfristigen Einfluss ihres Online-Verhaltens zu bedenken.',
      bundle: {
        filename: 'Data Privacy Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.3.3
            kind: 'Comicgeschichte',
            name: 'Ein Tag im Online-Leben von Sam',
            filename: 'Comic Story - A Day in the Life of Sam Online',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 4.3.4
            kind: 'Arbeitsblatt',
            name: 'Sams Fußabdruck verfolgen',
            filename: 'Worksheet - Track Sam\'s Footprint',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Was ist ein digitaler Fußabdruck?',
          },
          {
            title: 'Ihre Online-Spuren kartieren',
          },
          {
            title: 'Plenarsitzung - Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.3.1
        title: 'Was ist ein digitaler Fußabdruck?',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schülern zu helfen, sich die Datenspur vorzustellen, die sie online hinterlassen. Fördern Sie die Reflexion darüber, welche ihrer jüngsten Aktivitäten einen Fußabdruck hinterlassen haben könnten.',
        downloads: {
          video: {
            filename: 'What Is a Digital Footprint',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What Is a Digital Footprint - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen, praktische Strategien zur Überprüfung und Verwaltung ihres digitalen Fußabdrucks zu erlernen, einschließlich der Anpassung von Datenschutzeinstellungen und der Entfernung unerwünschter Daten.',
      bundle: {
        filename: 'Data Privacy Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Checkliste',
            name: 'Checkliste zur Bereinigung des digitalen Fußabdrucks',
            filename: 'Checklist - Digital Footprint Cleanup Checklist',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 4.4.2
            kind: 'Arbeitsblatt',
            name: 'Leitfaden für Datenschutzeinstellungen',
            filename: 'Worksheet - Privacy Settings Guide',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Ihren digitalen Fußabdruck überprüfen',
          },
          {
            title: 'Datenschutzeinstellungen verwalten',
          },
          {
            title: 'Plenarsitzung - Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.4.4
        title: 'Ihre persönlichen Daten online schützen',
        supportText:
          'Verwenden Sie dieses Video, um das Konzept persönlicher Daten einzuführen und eine Diskussion über die Arten von Informationen anzuregen, die Schülerinnen und Schüler täglich teilen.',
        downloads: {
          video: {
            filename: 'Protecting Your Personal Data Online',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Protecting Your Personal Data Online - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
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
  title: 'Digitaler Fußabdruck-Sortierer',
  subtitle: 'Sortiere jede Aktivität in die richtige Kategorie. Lerne, welche deiner alltäglichen Handlungen online Spuren hinterlassen!',
  howItWorks: 'So funktioniert es',
  instruction: 'Ziehe jede Aktivitätskarte in die Zone, in die sie gehört. Auf dem Handy tippst du eine Karte an, um sie auszuwählen, dann tippst du eine Ablagezone an.',
  tip: 'Überlege, ob die Aktivität das Internet, eine App oder eine Website beinhaltet. Wenn ja, hinterlässt sie wahrscheinlich einen digitalen Fußabdruck!',
  tipLabel: 'Tipp',
  tryAgain: 'Erneut versuchen',
  activitiesToSort: 'Zu sortierende Aktivitäten',
  leavesFootprint: 'Hinterlässt einen Fußabdruck',
  dragOnlineHere: 'Online-Aktivitäten hierher ziehen',
  noFootprint: 'Kein Fußabdruck',
  dragOfflineHere: 'Offline-Aktivitäten hierher ziehen',
  correct: 'Richtig! 🎯',
  tryOtherZone: 'Nicht ganz — probiere die andere Zone!',
  winTitle: 'Toll! Du hast sie alle sortiert!',
  winMessage: 'Du weißt jetzt, welche Aktivitäten einen digitalen Fußabdruck hinterlassen. Denk daran: Jeder Klick, jede Suche und jeder Beitrag hinterlässt online eine Spur!',
  playAgain: 'Nochmal spielen',
  activities: [
    {
      text: 'Ein Foto auf Instagram posten',
      category: 'footprint',
      emoji: '📸',
      explanation: 'Fotos, die du online teilst, bleiben auf Servern und können von jedem gefunden werden — sogar Jahre später!',
    },
    {
      text: 'Ein Papierbuch zu Hause lesen',
      category: 'no-footprint',
      emoji: '📖',
      explanation: 'Keine Internetverbindung bedeutet, dass keine digitale Spur erstellt wird.',
    },
    {
      text: 'Antworten auf Google suchen',
      category: 'footprint',
      emoji: '🔍',
      explanation: 'Suchmaschinen zeichnen auf, was du suchst, und verwenden es, um dir personalisierte Ergebnisse zu zeigen.',
    },
    {
      text: 'Draußen Fußball spielen',
      category: 'no-footprint',
      emoji: '⚽',
      explanation: 'Outdoor-Aktivitäten ohne Telefon oder App hinterlassen keinen digitalen Nachweis.',
    },
    {
      text: 'Eine Nachricht auf WhatsApp senden',
      category: 'footprint',
      emoji: '💬',
      explanation: 'Nachrichten werden auf Servern gespeichert und erstellen eine dauerhafte Aufzeichnung deiner Gespräche.',
    },
    {
      text: 'Ein Bild mit Buntstiften malen',
      category: 'no-footprint',
      emoji: '🖍️',
      explanation: 'Traditionelle Kunst mit physischen Materialien erstellt keine Online-Daten.',
    },
    {
      text: 'Ein Konto auf einer Spiele-Website erstellen',
      category: 'footprint',
      emoji: '🎮',
      explanation: 'Durch die Registrierung werden dein Name, deine E-Mail-Adresse und jede Aktion gespeichert, die du auf der Website ausführst.',
    },
    {
      text: 'Mit dem Fahrrad durch die Nachbarschaft fahren',
      category: 'no-footprint',
      emoji: '🚲',
      explanation: 'Solange du keine Tracking-App verwendest, ist Radfahren eine rein offline Aktivität.',
    },
    {
      text: 'Videos auf YouTube schauen',
      category: 'footprint',
      emoji: '▶️',
      explanation: 'YouTube verfolgt jedes Video, das du schaust, und nutzt es, um mehr Inhalte zu empfehlen.',
    },
    {
      text: 'In deinem Papiertagebuch schreiben',
      category: 'no-footprint',
      emoji: '📓',
      explanation: 'Ein Papiertagebuch hat keine Internetverbindung — deine Gedanken bleiben wirklich privat.',
    },
    {
      text: 'Das TikTok-Video eines Freundes liken',
      category: 'footprint',
      emoji: '❤️',
      explanation: 'Jedes Like, das du gibst, wird aufgezeichnet und gestaltet dein Online-Profil und deine Empfehlungen.',
    },
    {
      text: 'Ein Brettspiel mit der Familie spielen',
      category: 'no-footprint',
      emoji: '🎲',
      explanation: 'Brettspiele sind Offline-Spaß — es werden nirgendwo Daten erstellt oder gespeichert.',
    },
    {
      text: 'Ein Online-Quiz ausfüllen',
      category: 'footprint',
      emoji: '📝',
      explanation: 'Websites sammeln jede Antwort, die du eingibst, und können sie mit anderen teilen.',
    },
    {
      text: 'Mit Freunden in der Schule reden',
      category: 'no-footprint',
      emoji: '🗣️',
      explanation: 'Persönliche Gespräche hinterlassen überhaupt keine digitale Spur.',
    },
    {
      text: 'Einen Kommentar in einem Blog hinterlassen',
      category: 'footprint',
      emoji: '💻',
      explanation: 'Kommentare sind öffentlich, mit deinem Namen verknüpft und bleiben für immer auf der Website.',
    },
  ],
}
