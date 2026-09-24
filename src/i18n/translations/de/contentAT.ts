// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAT = {
  aim: 'Grundlegende Kenntnisse der Authentifizierungs- und Identitätsverwaltungsprinzipien zum Schutz persönlicher digitaler Assets zu vermitteln.',
  objectives: [
    'Die Bedeutung sicherer Identitätsverwaltung zu betonen.',
    'Das Konzept der Authentifizierung und ihre verschiedenen Typen einzuführen.',
    'Das Verständnis der Schülerinnen und Schüler für digitale Assets und das Bewusstsein für Zugangskontrolle zu entwickeln.',
    'Die Kenntnisse und Fähigkeiten der Schülerinnen und Schüler zur Erstellung sicherer Benutzernamen und Passwörter gemäß Empfehlungen und bewährten Praktiken zu entwickeln.',
    'Die Fähigkeiten der Schülerinnen und Schüler zur sicheren Verwaltung von Passwörtern aufzubauen.',
  ],
  outcomes: [
    'Ich kann meine persönlichen digitalen Assets identifizieren und die Risiken erklären, denen sie in physischen und digitalen Umgebungen ausgesetzt sind.',
    'Ich kann erklären, was Authentifizierung ist, warum sie wichtig ist, und verschiedene Arten der Authentifizierung auflisten.',
    'Ich kann zwischen schwachen und starken Benutzernamen und Passwörtern unterscheiden.',
    'Ich kann demonstrieren, wie ich einen Passwort-Manager zur Speicherung von Passwörtern nutze, und begründen, warum ich diese Entscheidungen getroffen habe.',
  ],
  parts: [
    {
      goal: 'Schülerinnen und Schülern helfen, starke, einprägsame Geheimnisse zu erstellen und zu verstehen, warum Wiederverwendung riskant ist.',
      bundle: {
        filename: 'Authentifizierung - Paket - Teil 1',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Bild',
            name: 'Online-Identität',
            filename: 'Bild - Online-Identität',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.1.3
            kind: 'Bilder',
            name: 'Beispiele persönlicher digitaler Assets',
            filename: 'Bilder - Beispiele persönlicher digitaler Assets',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.1.4
            kind: 'Arbeitsblatt',
            name: 'Was würde passieren, wenn...?',
            filename: 'Arbeitsblatt - Was würde passieren, wenn',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.1.5
            kind: 'Arbeitsblatt',
            name: 'Meine digitalen Assets',
            filename: 'Arbeitsblatt - Meine digitalen Assets',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Was ist digitale Identität?',
          },
          {
            title: 'Digitale Assets verstehen',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        title: 'Was ist digitale Identität?',
        supportText:
          'Verwenden Sie dieses Video, damit Schülerinnen und Schüler verstehen, dass ihre digitale Identität aus den Informationen und Verhaltensweisen besteht, die sie online teilen. Pausieren Sie, um zu fragen, welche Teile ihrer digitalen Identität sie ihrer Meinung nach kontrollieren können.',
        downloads: {
          video: {
            filename: 'Was ist digitale Identität',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist digitale Identität - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal:
        'Schülerinnen und Schülern helfen zu verstehen, was Authentifizierung ist, warum sie wichtig ist und wie sie hilft, ihre digitale Identität und digitale Assets zu schützen, indem kontrolliert wird, wem Zugang gewährt wird.',
      bundle: {
        filename: 'Authentifizierung - Paket - Teil 2',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Bilder',
            name: 'Authentifizierungsbeispiele aus dem realen Leben',
            filename: 'Bilder - Authentifizierungsbeispiele aus dem realen Leben',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.2.3
            kind: 'Bild',
            name: 'Anmeldung bei einem digitalen System',
            filename: 'Bild - Anmeldung bei einem digitalen System',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.2.4
            kind: 'Arbeitsblatt',
            name: 'Authentifizierung im Alltag',
            filename: 'Arbeitsblatt - Authentifizierung im Alltag',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Authentifizierung',
          },
          {
            title: 'Arten der Authentifizierung verstehen',
          },
          {
            title: 'Authentifizierung auf digitale Assets anwenden',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'Was ist Authentifizierung?',
        supportText:
          'Verwenden Sie dieses Video, um Authentifizierung als den alltäglichen Mechanismus einzuführen, der die digitalen Konten der Schülerinnen und Schüler schützt. Pausieren Sie, um zu fragen, wie sie ihre Identität aktuell in den Apps nachweisen, die sie am häufigsten nutzen.',
        downloads: {
          video: {
            filename: 'Was ist Authentifizierung',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist Authentifizierung - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal:
        'Schülerinnen und Schülern helfen zu verstehen, was Authentifizierung ist, warum sie wichtig ist und wie sie hilft, ihre digitale Identität und digitale Assets zu schützen, indem kontrolliert wird, wem Zugang gewährt wird.',
      bundle: {
        filename: 'Authentifizierung - Paket - Teil 3',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Bild',
            name: 'Beispiele schwacher Passwörter',
            filename: 'Bild - Beispiele schwacher Passwörter',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.3.3
            kind: 'Bild',
            name: 'Beispiele starker Passwörter',
            filename: 'Bild - Beispiele starker Passwörter',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.3.4
            kind: 'Karten',
            name: 'Ein starkes Passwort erstellen',
            filename: 'Karten - Ein starkes Passwort erstellen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.3.5
            kind: 'Bild',
            name: 'Ihr Passwort überprüfen',
            filename: 'Bild - Ihr Passwort überprüfen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.3.6
            kind: 'Arbeitsblatt',
            name: 'Meine Regeln für starke Passwörter',
            filename: 'Arbeitsblatt - Meine Regeln für starke Passwörter',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Passwörter',
          },
          {
            title: 'Starke vs. schwache Passwörter',
          },
          {
            title: 'Starke Passwörter sicher erstellen',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Starke und schwache Passwörter',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schülern den Unterschied zwischen Passwörtern zu zeigen, die Konten schützen, und solchen, die sie gefährden. Laden Sie sie ein zu überlegen, ob ihre eigenen Passwörter die Kriterien für Stärke erfüllen.',
        downloads: {
          video: {
            filename: 'Starke und schwache Passwörter',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Starke und schwache Passwörter - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal:
        'Schülerinnen und Schülern helfen zu verstehen, was Zwei-Faktor-Authentifizierung ist und warum die Verwaltung vieler Passwörter schwierig ist, das Konzept eines Passwort-Managers einzuführen und zu erklären, wie Passwort-Manager dabei helfen, digitale Identitäten und Assets zu schützen, wenn sie verantwortungsvoll mit Unterstützung eines vertrauenswürdigen Erwachsenen verwendet werden.',
      bundle: {
        filename: 'Authentifizierung - Paket - Teil 4',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Bild',
            name: 'Zwei verschiedene Authentifizierungsarten zusammen verwendet',
            filename: 'Bild - Zwei verschiedene Authentifizierungsarten zusammen verwendet',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.4.2
            kind: 'Schema',
            name: 'Münzsatz',
            filename: 'Schema - Münzsatz',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.4.3
            kind: 'Schema',
            name: 'Gruppensatz',
            filename: 'Schema - Gruppensatz',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.4.4
            kind: 'Schema',
            name: 'PIN-Karten',
            filename: 'Schema - PIN-Karten',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.4.6
            kind: 'Bild',
            name: 'So verwenden Sie einen Passwort-Manager',
            filename: 'Bild - So verwenden Sie einen Passwort-Manager',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.4.7
            kind: 'Bild',
            name: 'Passwort-Manager',
            filename: 'Bild - Passwort-Manager',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.4.8
            kind: 'Bild',
            name: 'Schritte zum Speichern von Passwörtern',
            filename: 'Bild - Schritte zum Speichern von Passwörtern',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.4.9
            kind: 'Arbeitsblatt',
            name: 'Passwortprobleme und Lösungen',
            filename: 'Arbeitsblatt - Passwortprobleme und Lösungen',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Passwörter',
          },
          {
            title: 'Passwort-Manager',
          },
          {
            title: 'Passwort-Manager sicher anwenden',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'Was ist ein Passwort-Manager?',
        supportText:
          'Verwenden Sie dieses Video, um Passwort-Manager als praktische Lösung zum Erstellen und Speichern starker, einzigartiger Passwörter für jedes Konto einzuführen. Pausieren Sie, um Schülerinnen und Schüler zu fragen, ob sie davon gehört oder einen bereits benutzt haben.',
        downloads: {
          video: {
            filename: 'Was ist ein Passwort-Manager',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist ein Passwort-Manager - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal:
        'Schülerinnen und Schülern helfen zu verstehen, wie ihre Entscheidungen und ihr Verhalten die Sicherheit ihrer digitalen Identität beeinflussen und wie verantwortungsvolles Handeln dabei hilft, ihre digitalen Assets, sich selbst und andere in digitalen Umgebungen zu schützen.',
      bundle: {
        filename: 'Authentifizierung - Paket - Teil 5',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Bild',
            name: 'Sicheres und unsicheres Online-Verhalten',
            filename: 'Bild - Sicheres und unsicheres Online-Verhalten',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.5.3
            kind: 'Arbeitsblatt',
            name: 'Szenarien zu digitaler Identität und Authentifizierung',
            filename: 'Arbeitsblatt - Szenarien zu digitaler Identität und Authentifizierung',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 3.5.4
            kind: 'Arbeitsblatt',
            name: 'Wie ich meine digitale Identität schütze',
            filename: 'Arbeitsblatt - Wie ich meine digitale Identität schütze',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Schutz der digitalen Identität',
          },
          {
            title: 'Digitale Identität und Authentifizierung',
          },
          {
            title: 'Plenarsitzung: Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Schutz Ihrer digitalen Identität',
        supportText:
          'Verwenden Sie dieses Video, um die Strategien zusammenzuführen, die die Schülerinnen und Schüler zum Schutz ihrer digitalen Identität gelernt haben. Ermutigen Sie sie, eine konkrete Gewohnheit zu identifizieren, die sie nach dem Ansehen ändern oder beginnen werden.',
        downloads: {
          video: {
            filename: 'Schutz Ihrer digitalen Identität',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Schutz Ihrer digitalen Identität - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
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
      imageSrc: '/images/learning-hub/01_digital-citizenship.webp',
    },
    {
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/images/learning-hub/02_attacker-perspective.webp',
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

export const challengeAT = {
  title: 'Passwort-Labor',
  subtitle:
    'Bauen Sie ein stärkeres Passwort Runde für Runde auf. Jede Stufe fügt eine neue Zutat zu Ihrem Passwort-Rezept hinzu!',
  howItWorks: 'So funktioniert es',
  instruction:
    'Jede Runde führt eine neue Passwortanforderung ein. Erfüllen Sie alle Kriterien der aktuellen Runde, um voranzukommen – und beobachten Sie, wie Ihr Passwort immer schwerer zu knacken wird!',
  tipLabel: 'Tipp',
  tip: 'Überprüfen Sie die rechte Seitenleiste, um Ihren Rundenfortschritt zu verfolgen und Passwort-Tipps zu erhalten!',
  yourPassword: 'Ihr Passwort',
  placeholder: 'Passwort hier eingeben...',
  passwordInputAriaLabel: 'Passworteingabe',
  showPassword: 'Passwort anzeigen',
  strengthAriaLabel: 'Passwortstärke',
  roundBadgeTemplate: 'Runde {n} von {total}',
  criteriaTitle: 'Passwort-Rezept — Runde {n}:',
  criterionLength: 'Länge > 10 Zeichen',
  criterionNumber: 'Enthält eine Zahl (0-9)',
  criterionSymbol: 'Enthält ein Symbol (! @ # $ % ^ & * ?)',
  criterionUppercase: 'Enthält einen GROSSBUCHSTABEN',
  criterionLowercase: 'Enthält einen Kleinbuchstaben',
  strengthWeak: 'Schwach',
  strengthOkay: 'Auf dem Weg',
  strengthStrong: 'Stark ✓',
  feedbackDefault: 'Beginnen Sie zu tippen, um die Stärke Ihres Passworts zu sehen!',
  feedbackAllMet: '🎉 Alle Anforderungen erfüllt! Klicken Sie auf Nächste Runde, um fortzufahren.',
  almostThereTemplate: 'Fast geschafft! Versuchen Sie, {hint}.',
  hints: {
    length: 'es länger zu machen (10+ Zeichen)',
    number: 'eine Zahl hinzuzufügen (0-9)',
    symbol: 'ein Symbol wie ! @ # $ % hinzuzufügen',
    upper: 'einen GROSSBUCHSTABEN hinzuzufügen',
    lower: 'einen Kleinbuchstaben hinzuzufügen',
  },
  keepGoing: 'Weiter so!',
  nextRound: 'Nächste Runde →',
  finish: 'Fertig! 🏆',
  nextRoundAriaLabel: 'Zur nächsten Runde gehen',
  tryAgain: 'Erneut versuchen',
  tryAgainAriaLabel: 'Passwort löschen und neu beginnen',
  completionTitle: 'Passwort-Meister!',
  completionText: 'Sie haben alle 4 Runden abgeschlossen und gelernt, unknackbare Passwörter zu erstellen!',
  completionRounds: '4 / 4 Runden abgeschlossen',
  completionTips: 'Starke Passwörter schützen Ihr digitales Leben. Nutzen Sie diese Fähigkeiten überall, wo Sie ein Konto erstellen!',
  startOver: 'Von vorne beginnen',
  roundProgressTitle: 'Rundenfortschritt',
  roundProgressDesc: 'Schließen Sie alle 4 Runden ab, um Passwörter zu meistern',
  rounds: [
    {
      icon: '🎮',
      title: 'Erstellen Sie ein Passwort für Ihr Spielkonto',
      description: 'Beginnen Sie mit einer guten Länge – mindestens 10 Zeichen!',
      label: 'Runde 1',
      desc: 'Nur Länge'
    },
    {
      icon: '📧',
      title: 'Erstellen Sie ein Passwort für Ihre E-Mail',
      description: 'Super Start! Fügen Sie nun eine Zahl hinzu, um es schwerer zu knacken.',
      label: 'Runde 2',
      desc: '+ Zahl'
    },
    {
      icon: '📱',
      title: 'Erstellen Sie ein Passwort für Ihre sozialen Medien',
      description: 'Guter Fortschritt! Fügen Sie nun ein Symbol hinzu, um es richtig durchzumischen.',
      label: 'Runde 3',
      desc: '+ Symbol'
    },
    {
      icon: '📔',
      title: 'Erstellen Sie ein Passwort für Ihr geheimes Tagebuch',
      description: 'Letzte Runde! Fügen Sie GROSS- und Kleinbuchstaben hinzu, um das vollständige Rezept abzuschließen.',
      label: 'Runde 4',
      desc: '+ Groß- und Kleinbuchstaben'
    },
  ],
  dosTitle: '✅ Das sollten Sie tun',
  dos: [
    'GROSS- und Kleinbuchstaben mischen',
    'Zahlen in der Mitte hinzufügen',
    'Symbole wie ! @ # $ % verwenden',
    'Mindestens 12 Zeichen lang machen',
    'Zufällige Kombinationen verwenden',
  ],
  dontsTitle: '❌ Das sollten Sie nicht tun',
  donts: [
    'Ihren echten Namen oder Geburtstag verwenden',
    '"123456" oder einfache Muster verwenden',
    'Dasselbe Zeichen wiederholen',
    'Gängige Wörterbuchbegriffe verwenden',
    'Ihren Schul- oder Haustiernamen verwenden',
  ],
}
