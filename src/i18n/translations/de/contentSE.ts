// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim: 'Den Lernenden helfen, Manipulationstaktiken zu erkennen, vor dem Handeln innezuhalten und sicherere Reaktionen zu wählen, wenn jemand Druck, Dringlichkeit oder falsches Vertrauen einsetzt.',
  objectives: [
    'Erklären, wie Manipulation online und persönlich vorkommen kann.',
    'Häufige Taktiken wie Dringlichkeit, Schmeichelei oder Autorität identifizieren.',
    'Sichere Reaktionen und hilfesuchendes Verhalten üben.',
  ],
  outcomes: [
    'Drucktaktiken in Nachrichten oder Chats erkennen.',
    'Eine Innehalten-und-prüfen-Routine anwenden, bevor man handelt.',
    'Wissen, wann und wie man verdächtiges Verhalten meldet.',
  ],
  teachingGuide: {
    ariaLabel: 'Unterrichtsleitfaden herunterladen',
    download: 'Unterrichtsleitfaden Social Engineering',
  },
  parts: [
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Social Engineering ist, indem sie zunächst erkennen, wie Menschen in alltäglichen Situationen beeinflusst oder manipuliert werden können, und dieses Verständnis dann mit digitalen Umgebungen und dem Verhalten von Angreifern verbinden.',
      bundle: {
        filename: 'Social Engineering Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.1.1
            kind: 'Bild',
            name: 'Menschen täuschen vs. Systeme hacken',
            filename: 'Image - Tricking People vs Hacking Systems',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.1.2
            kind: 'Bild',
            name: 'Beispiele für Social-Engineering-Nachrichten',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.1.3
            kind: 'Situationsbewertung',
            name: 'Was will ein Angreifer?',
            filename: 'Situation Assessment - What Does an Attacker Want',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.1.4
            kind: 'Arbeitsblatt',
            name: 'Social Engineering verstehen',
            filename: 'Worksheet - Understanding Social Engineering',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung – Einfluss und Überzeugung im Alltag',
          },
          {
            title: 'Einführung des Konzepts Social Engineering',
          },
          {
            title: 'Was wollen Angreifer?',
          },
          {
            title: 'Social Engineering online und offline',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        title: 'Was ist Social Engineering?',
        supportText:
          'Verwenden Sie dieses Video, um Social Engineering als Technik einzuführen, die menschliches Vertrauen anstatt technischer Systeme ausnutzt. Halten Sie inne und fragen Sie die Schülerinnen und Schüler, ob sie sich an eine Situation erinnern, in der jemand versucht hat, sie online zu täuschen.',
        downloads: {
          video: {
            filename: 'What Is Social Engineering',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What Is Social Engineering - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, warum Angreifer Social Engineering einsetzen, indem sie die psychologischen und emotionalen Hebel erkunden, die Menschen verwundbar machen, und üben, wie man kritisch denkt, wenn man Druck spürt.',
      bundle: {
        filename: 'Social Engineering Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Bild',
            name: 'Menschliche Entscheidungsfindung vs. Computer-Entscheidungsfindung',
            filename: 'Image - Human Decision-making vs Computer Decision-making',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.2.2
            kind: 'Szenarienkarten',
            name: 'Beispiele für emotionale Manipulation',
            filename: 'Scenario Cards - Emotional Manipulation Examples',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.2.3
            kind: 'Spielkarten',
            name: 'Taktiken von Angreifern',
            filename: 'Game Cards - Attacker Tactics',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.2.4
            kind: 'Arbeitsblatt',
            name: 'Warum Social Engineering funktioniert',
            filename: 'Worksheet - Why Social Engineering Works',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung – Menschen vs. Systeme',
          },
          {
            title: 'Emotionen, die Angreifer nutzen',
          },
          {
            title: 'Wie ein Angreifer denken',
          },
          {
            title: 'Alltägliche Kontexte, in denen Social Engineering funktioniert',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen, Social-Engineering-Versuche zu erkennen, indem sie häufige Warnsignale identifizieren und die verschiedenen Kontexte verstehen, in denen diese Angriffe auftreten können, sowohl online als auch offline.',
      bundle: {
        filename: 'Social Engineering Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.3.1
            kind: 'Bild',
            name: 'Beispiele für Social-Engineering-Nachrichten',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.3.2
            kind: 'Szenarienkarten',
            name: 'Social-Engineering-Situationen',
            filename: 'Scenario Cards - Social Engineering Situations',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.3.3
            kind: 'Arbeitsblatt',
            name: 'Social Engineering erkennen',
            filename: 'Worksheet - Spot the Social Engineering',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung – Wo kann Social Engineering passieren?',
          },
          {
            title: 'Häufige Warnsignale',
          },
          {
            title: 'Arten von Social Engineering',
          },
          {
            title: 'Erkennen üben',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        title: 'Arten von Social Engineering',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schülern zu helfen, die verschiedenen Formen zu erkennen, die Social Engineering annehmen kann, von Phishing-E-Mails bis zu telefonischer Identitätsvortäuschung. Halten Sie inne, um zu diskutieren, welche Art ihrer Meinung nach am schwierigsten zu erkennen wäre und warum.',
        downloads: {
          video: {
            filename: 'Types of Social Engineering',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Types of Social Engineering - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen, das Überprüfen von Informationen und die Wahl sicherer Reaktionen zu üben, und sie zu befähigen, andere zu unterstützen, wenn sie auf Social-Engineering-Versuche stoßen.',
      bundle: {
        filename: 'Social Engineering Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Szenarienkarten',
            name: 'Was würdest du tun?',
            filename: 'Scenario Cards - What Would You Do',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.2
            kind: 'Checkliste',
            name: 'Stopp, denk nach, prüf, frag',
            filename: 'Checklist - Stop, Think, Check, Ask',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.3
            kind: 'Arbeitsblatt',
            name: 'Stopp, denk nach, prüf, frag',
            filename: 'Worksheet - Stop, Think, Check, Ask',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.4
            kind: 'Rollenkarten',
            name: 'Opfer, Helfer, Zuschauer',
            filename: 'Role Cards - Target, Helper, Bystander',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.5
            kind: 'Arbeitsblatt',
            name: 'Mich und andere schützen',
            filename: 'Worksheet - Protecting Myself and Others',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung – Von der Erkennung zur Reaktion',
          },
          {
            title: 'Ein einfaches Modell für sichere Entscheidungen',
          },
          {
            title: 'Sichere Reaktionen üben',
          },
          {
            title: 'Andere schützen',
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
  title: 'Phishing-Fallakten',
  subtitle: 'Werde ein Nachrichten-Detektiv! Kannst du die Betrugsmaschen und Phishing-Tricks erkennen? Lies jede Nachricht und entscheide: Vertrauen oder Ignorieren / Melden.',
  howItWorks: 'So funktioniert es',
  instruction: 'Lies jede Nachrichten-Fallakte und entscheide, ob sie vertrauenswürdig ist oder ignoriert/gemeldet werden sollte. Denke an Dringlichkeit, verdächtige Links und Anfragen nach privaten Informationen.',
  tip: 'Wenn du dir bei einer Nachricht unsicher bist, schau dir die Detektivnotizen mit Tipps zur Erkennung von Betrug an.',
  tipLabel: 'Tipp',
  startTitle: 'Willkommen, Detektiv!',
  startDescription: 'Du wirst gleich 14 verdächtige Nachrichten untersuchen. Deine Aufgabe ist es zu entscheiden, ob jede Nachricht vertrauenswürdig ist oder ignoriert/gemeldet werden sollte. Viel Glück!',
  startButton: 'Ermittlung starten',
  caseProgress: 'Fallfortschritt',
  trustButton: '👍 Vertrauen',
  ignoreButton: '⚠️ Ignorieren / Melden',
  nextCase: 'Nächster Fall →',
  completedTitle: 'Ermittlung abgeschlossen!',
  completedDescription: 'Hier ist dein Ergebnis:',
  casesIdentified: 'von 14 Fällen korrekt identifiziert',
  detectiveRankLabel: 'Detektiv-Rang',
  defaultRank: 'Anfänger-Detektiv',
  defaultRankMessage: 'Übe weiter, um aufzusteigen!',
  performanceSummary: 'Leistungsübersicht',
  playAgain: 'Nochmal spielen',
  detectiveNotes: 'Detektivnotizen',
  detectiveTipsTitle: 'Tipps, um online sicher zu bleiben',
  redFlags: [
    '🚩 Fragt nach Passwörtern',
    '🚩 Gefälschte E-Mail-Adressen',
    '🚩 Zu-gut-um-wahr-zu-sein-Preise',
    '🚩 Dringende Fristen & Drohungen',
    '🚩 Verdächtige Downloads',
    '🚩 Emotionale Manipulation',
  ],
  proTip: 'Profi-Tipp: Im Zweifelsfall frag einen vertrauenswürdigen Erwachsenen, bevor du auf Links klickst oder Informationen teilst!',
  caseLabel: 'Fall',
  ofLabel: 'von',
  fromLabel: 'Von',
  subjectLabel: 'Betreff',
  messageLabel: 'Nachricht',
  rankRookie: '🥉 Anfänger-Detektiv',
  rankRookieMsg: 'Du beginnst gerade deine Ermittlung. Übe weiter, um die Warnsignale zu erkennen!',
  rankJunior: '🥈 Junior-Detektiv',
  rankJuniorMsg: 'Du wirst besser darin, verdächtige Nachrichten zu erkennen. Gut gemacht!',
  rankSenior: '🥇 Senior-Detektiv',
  rankSeniorMsg: 'Du bist großartig darin, Phishing und Betrug zu identifizieren. Schöne Arbeit!',
  rankMaster: '👑 Meister-Detektiv',
  rankMasterMsg: 'Du bist ein Phishing-Experte! Du hast fast alle Tricks entlarvt. Ausgezeichnet!',
  correctLabel: 'Richtig',
  incorrectLabel: 'Falsch',
  scenarios: [
    {
      id: 1,
      type: 'email',
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Sie haben 1.000 $ gewonnen!',
      message: 'Herzlichen Glückwunsch! Sie wurden als unser Glücksgewinner ausgewählt! Klicken Sie hier, um Ihren Preis von 1.000 $ zu beanspruchen. Geben Sie einfach die Bankdaten Ihrer Eltern ein.',
      correct: 'ignore-report',
      explanation: 'Das ist ein klassischer Betrug! Echte Preise verlangen keine Bankdaten. Die E-Mail-Adresse sieht auch gefälscht aus.',
      tactic: 'Gier & Dringlichkeit',
    },
    {
      id: 2,
      type: 'chat',
      from: 'BestFriend_2024',
      message: 'Hey! Schau dir diese coole Website an, die ich gefunden habe: www.free-vbucks-4real.com — du kannst unbegrenzte V-Bucks bekommen!',
      correct: 'ignore-report',
      explanation: 'Auch wenn es aussieht, als käme es von einem Freund, könnte dessen Konto gehackt worden sein. Seiten mit kostenlosen V-Bucks sind immer Betrug.',
      tactic: 'Vertrauensausnutzung',
    },
    {
      id: 3,
      type: 'email',
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Hausaufgaben-Erinnerung',
      message: 'Nur eine Erinnerung, dass dein Naturwissenschaftsprojekt bis nächsten Freitag abgegeben werden muss. Bitte schau für Details im Klassenportal nach.',
      correct: 'trust',
      explanation: 'Das ist eine normale Schul-E-Mail. Sie kommt von einer echten Schuldomäne, fragt nicht nach persönlichen Daten und enthält keine verdächtigen Links.',
      tactic: 'Keiner — Legitim',
    },
    {
      id: 4,
      type: 'chat',
      from: 'CoolGamer99',
      message: 'Ich bin Spieleentwickler! Schick mir deine Anmeldedaten und ich füge deinem Konto kostenlos 1000 Münzen hinzu!',
      correct: 'ignore-report',
      explanation: 'Echte Spieleentwickler verlangen niemals dein Passwort. Diese Person versucht, deinen Account zu stehlen!',
      tactic: 'Autoritätsanmaßung',
    },
    {
      id: 5,
      type: 'email',
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'DRINGEND: Ihr Konto wird gelöscht!',
      message: 'Ihr Konto wird in 24 Stunden dauerhaft gelöscht, wenn Sie Ihr Passwort nicht JETZT bestätigen!',
      correct: 'ignore-report',
      explanation: 'Beachte die gefälschte Domain \'g00gle\' (mit Nullen). Echte Unternehmen drohen niemals per E-Mail mit der Löschung deines Kontos oder verlangen Passwörter.',
      tactic: 'Angst & Dringlichkeit',
    },
    {
      id: 6,
      type: 'chat',
      from: 'Mama 💕',
      message: 'Hey Schatz, kannst du auf dem Weg nach Hause Milch kaufen? Ich liebe dich!',
      correct: 'trust',
      explanation: 'Das ist eine normale Nachricht von einem Familienmitglied. Keine verdächtigen Links oder Anfragen nach persönlichen Informationen.',
      tactic: 'Keiner — Legitim',
    },
    {
      id: 7,
      type: 'email',
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Helfen Sie bedürftigen Kindern!',
      message: 'Bitte spenden Sie jetzt! Kinder leiden! Schicken Sie die Kreditkartennummer Ihrer Eltern, um sofort zu helfen!',
      correct: 'ignore-report',
      explanation: 'Echte Wohltätigkeitsorganisationen verlangen niemals Kreditkartennummern per E-Mail. Hier werden Emotionen eingesetzt, um dich zu täuschen.',
      tactic: 'Emotionale Manipulation',
    },
    {
      id: 8,
      type: 'chat',
      from: 'Unbekannter Nutzer',
      message: 'Hallo! Ich bin neu an deiner Schule. Was ist deine Heimadresse, damit ich vorbeikommen und abhängen kann?',
      correct: 'ignore-report',
      explanation: 'Teile niemals deine Adresse mit Fremden online, auch wenn sie behaupten, dich zu kennen. Ein echter neuer Schüler würde in der Schule fragen.',
      tactic: 'Sozialer Vorwand',
    },
    {
      id: 9,
      type: 'email',
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Geteiltes Dokument gesperrt',
      message: 'Jemand hat versucht, deine Datei zu öffnen. Bestätige jetzt deine Anmeldung, um den Zugriff auf deine Cloud-Dokumente zu behalten.',
      correct: 'ignore-report',
      explanation: 'Diese Nachricht erzeugt Panik und drängt dich dazu, dich über einen verdächtigen Link anzumelden. Öffne stattdessen die echte App direkt.',
      tactic: 'Angst & Dringlichkeit',
    },
    {
      id: 10,
      type: 'chat',
      from: 'Schulbüro',
      message: 'Erinnerung: Die Schule schließt morgen früh um 13:00 Uhr wegen Lehrerfortbildung. Siehe die Mitteilung im Elternportal.',
      correct: 'trust',
      explanation: 'Das ist eine normale Schulinformation und fragt nicht nach Passwörtern, Geld oder privaten Kontoinformationen.',
      tactic: 'Keiner — Legitim',
    },
    {
      id: 11,
      type: 'email',
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Quittungsproblem: Karte jetzt bestätigen',
      message: 'Dein letzter Kauf ist fehlgeschlagen. Bestätige deine vollständige Kartennummer und CVV innerhalb von 10 Minuten, um eine Kontosperrung zu vermeiden.',
      correct: 'ignore-report',
      explanation: 'Echte App-Stores verlangen niemals vollständige Kartendaten und CVV per E-Mail. Dringende Fristen sind ein verbreiteter Betrugs trick.',
      tactic: 'Finanzieller Diebstahl',
    },
    {
      id: 12,
      type: 'email',
      from: 'School Library <library@your-school.edu>',
      subject: 'Leseclub-Treffen morgen',
      message: 'Erinnerung: Der Leseclub trifft sich morgen zur Mittagspause in Raum 12. Bring dein aktuelles Buch mit, wenn du kannst.',
      correct: 'trust',
      explanation: 'Das ist eine normale Schulerinnerung von einer vertrauenswürdigen Domain, ohne Anfragen nach Passwörtern oder privaten Kontodaten.',
      tactic: 'Keiner — Legitim',
    },
    {
      id: 13,
      type: 'chat',
      from: 'Coach Rivera',
      message: 'Das Training beginnt heute 15 Minuten später wegen des Wetters. Bring deine Wasserflasche mit.',
      correct: 'trust',
      explanation: 'Das ist eine routinemäßige Terminaktualisierung und fragt nicht nach sensiblen Informationen oder verdächtigen Aktionen.',
      tactic: 'Keiner — Legitim',
    },
    {
      id: 14,
      type: 'email',
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Neue Noten veröffentlicht',
      message: 'Neue Noten sind jetzt im Schülerportal verfügbar. Öffne das Portal über dein übliches Schullesezeichen, um sie einzusehen.',
      correct: 'trust',
      explanation: 'Diese Nachricht leitet dich zu deinem üblichen Schulportal und fragt nicht nach Passwörtern, Zahlungen oder privaten Daten in der Nachricht.',
      tactic: 'Keiner — Legitim',
    },
  ],
}
