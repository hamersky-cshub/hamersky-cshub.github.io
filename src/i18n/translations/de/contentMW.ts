// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim: 'Den Lernenden helfen zu verstehen, was Malware ist, wie Infektionen entstehen und welche Gewohnheiten das Risiko unsicherer Downloads, Dateien und Installationen verringern.',
  objectives: [
    'Einführung in das Konzept Malware und warum es gefährlich ist.',
    'Gängige Verbreitungswege von Malware identifizieren.',
    'Gewohnheiten für sicherere Downloads und Updates entwickeln.',
  ],
  outcomes: [
    'Den Unterschied zwischen sicheren und unsicheren Dateien oder Links erklären.',
    'Warnsignale bei verdächtigen Downloads erkennen.',
    'Vertrauenswürdige Quellen nutzen und bei Unsicherheit um Hilfe bitten.',
  ],
  teachingGuide: {
    ariaLabel: 'Download Teaching Guide',
    download: 'Unterrichtsleitfaden Malware',
  },
  parts: [
    {
      goal: 'Den Lernenden helfen, das Konzept Malware zu verstehen.',
      bundle: {
        filename: 'Malware Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Bild',
            name: 'Schädlich + Software = Malware',
            filename: 'Image - Malicious + Software = Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.1.3
            kind: 'Arbeitsblatt',
            name: 'Mit Malware verwandt oder nicht?',
            filename: 'Worksheet - Related to Malware or Not',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Malware definieren',
          },
          {
            title: 'Abschlussrunde – Zusammenfassung und informelle Bewertung',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.2
        title: 'Was ist Malware?',
        supportText:
          'Nutze dieses Video, um Malware als Software einzuführen, die darauf ausgelegt ist, Schaden anzurichten. Es gibt den Lernenden eine Grundlage, bevor sie spezifische Typen genauer erkunden. Halte das Video an und frage, was sie bereits über Computerviren wissen oder gehört haben.',
        downloads: {
          video: {
            filename: 'What is Malware',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Malware - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Gängige Malware-Typen vorstellen.',
      bundle: {
        filename: 'Malware Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schema',
            name: 'Münzset',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.3
            kind: 'Schema',
            name: 'Knoten-Zuordnungstafel',
            filename: 'Sheet - Knot Ties Board',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.4
            kind: 'Blatt',
            name: 'Malware-Eigenschaften',
            filename: 'Sheet - Malware Properties',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Knoten für Malware-Typen knüpfen',
          },
          {
            title: 'Abschlussrunde – Zusammenfassung und informelle Bewertung',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Malware-Typen im Überblick',
        supportText:
          'Nutze dieses Video, um den Lernenden einen klaren Überblick über die verschiedenen Malware-Kategorien und ihre Besonderheiten zu geben. Halte das Video an für eine kurze Diskussion, welchen Typ sie für am gefährlichsten halten und warum.',
        downloads: {
          video: {
            filename: 'Introducing Malware Types',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Introducing Malware Types - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Einen Überblick über die Merkmale von Malware geben, um sie zu erkennen und zu entdecken.',
      bundle: {
        filename: 'Malware Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Arbeitsblatt',
            name: 'Liste der Indikatoren',
            filename: 'Worksheet - List of Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.2
            kind: 'Lektüre',
            name: 'Malware erkennen',
            filename: 'Reading - Recognising Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.3
            kind: 'Poster',
            name: 'Sieben Indikatoren',
            filename: 'Poster - Seven Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.4
            kind: 'Tabelle',
            name: 'Situation und Indikatoren',
            filename: 'Table - Situation and Indicators',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Malware untersuchen',
          },
          {
            title: 'Abschlussrunde – Zusammenfassung und informelle Bewertung',
          },
        ],
      },
    },
    {
      goal: 'Den Lernenden helfen, Schutzmaßnahmen gegen Malware zu verstehen.',
      bundle: {
        filename: 'Malware Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situation',
            name: 'Malware und Datendiebstahl?',
            filename: 'Situation - Malware and Data Theft',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.2
            kind: 'Poster',
            name: 'DO\'s und DON\'Ts',
            filename: 'Poster - DOs and DON\'Ts',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.3
            kind: 'Arbeitsblatt',
            name: 'Ein Schutzschild gegen Malware',
            filename: 'Worksheet - A Shield Against Malware',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Die Situation unvorsichtigen Verhaltens analysieren',
          },
          {
            title: 'Grundlegende Schutzmaßnahmen erlernen',
          },
          {
            title: 'Abschlussrunde – Zusammenfassung und informelle Bewertung',
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
  title: 'Malware-Detektiv',
  subtitle: 'Du bist ein Cybersicherheitsanalyst. Untersuche Dateien auf deinem virtuellen Computer, scanne deinen Posteingang, handle verdächtige Pop-ups und überprüfe App-Berechtigungen in 4 interaktiven Levels. Kannst du das System sauber halten?',
  howItWorks: 'So funktioniert es',
  instruction: 'Arbeite dich durch 4 Levels auf deinem virtuellen Computer. Jedes Level zeigt ein anderes Cybersicherheitsszenario. Untersuche jeden Fall sorgfältig und entscheide, ob er sicher oder eine Bedrohung ist — dann lerne aus der Erklärung.',
  tip: 'Malware tarnt sich oft als etwas Harmloses. Achte auf verdächtige Dateiendungen, falsch geschriebene Domains, unnötige Berechtigungen und Versprechen, die zu gut klingen, um wahr zu sein.',
  tipLabel: 'Tipp',
  welcomeTitle: 'Willkommen, Cyber-Analyst!',
  welcomeDescription: 'Dein Computer hat verdächtige Dateien, E-Mails und Pop-ups erhalten. Arbeite dich durch 4 Levels, um Bedrohungen zu identifizieren und das System zu schützen.',
  levels: [
    '💻 Level 1 — Datei-Scanner',
    '📧 Level 2 — E-Mail-Posteingang',
    '🌐 Level 3 — Browser-Pop-ups',
    '🔒 Level 4 — App-Berechtigungen',
  ],
  bootButton: 'Computer starten →',
  scoreLabel: 'Punkte',
  correctLabel: 'Richtig',
  threatsCaughtLabel: 'Bedrohungen erkannt',
  keepFile: '✓ Datei behalten',
  quarantine: '🗑️ Quarantäne',
  safeKeep: '✓ Sicher / Behalten',
  threatRemove: '⚠️ Bedrohung / Entfernen',
  nextButton: 'Weiter →',
  malwareTypesTitle: 'Malware-Typen',
  malwareTypesSubtitle: 'Häufige Malware-Typen, auf die man achten sollte',
  malwareTypes: [
    '🦠 Virus — hängt sich an Dateien und verbreitet sich',
    '🪱 Wurm — repliziert sich selbst über Netzwerke',
    '🐴 Trojaner — tarnt sich als nützliche Software',
    '🔐 Ransomware — sperrt Dateien bis zur Zahlung',
    '👁️ Spyware — überwacht heimlich Aktivitäten',
    '📢 Adware — überflutet dich mit Werbung',
  ],
  securityGuideTitle: 'Sicherheitsleitfaden',
  securityGuideSubtitle: 'Warnsignale, auf die man achten sollte',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs aus unbekannten Quellen',
    '🚩 Falsch geschriebene oder gefälschte Absender-Domains',
    '🚩 Gefälschte Viruswarnungen im Browser',
    '🚩 Apps, die unnötige Berechtigungen anfordern',
    '🚩 Preise, kostenloses Geld oder dringende Bedrohungen',
    '🚩 Countdown-Timer, die Panik erzeugen',
  ],
  goldenRule: 'Im Zweifel nicht klicken. Wende dich stattdessen an den IT-Support oder eine vertrauenswürdige erwachsene Person.',
  levelCompleteTitle: 'Level abgeschlossen!',
  levelCompleteSubtitle: 'Weiter so!',
  levelResultLabel: 'Level-Ergebnis',
  correctDecisionsLabel: 'richtige Entscheidungen',
  continueButton: 'Weiter →',
  resultsTitle: 'System gesichert! 🛡️',
  resultsDescription: 'Dein Cybersicherheitsbericht ist fertig.',
  accuracyLabel: 'Genauigkeit',
  threatsCaughtStat: 'Bedrohungen erkannt',
  threatsMissedStat: 'Bedrohungen übersehen',
  analystRankLabel: 'Analysten-Rang',
  rankTrainee: '📘 Auszubildender',
  rankTraineeMsg: 'Bleib dran! Schau dir den Sicherheitsleitfaden rechts an und versuche es erneut — du wirst besser!',
  rankJunior: '🔍 Junior-Analyst',
  rankJuniorMsg: 'Gute Arbeit! Du baust solide Malware-Erkennungsfähigkeiten auf. Übung macht den Meister.',
  rankSenior: '🔐 Senior-Analyst',
  rankSeniorMsg: 'Toll gemacht! Du hast die meisten Bedrohungen erkannt. Schärfe weiter deinen Blick für subtile Warnsignale.',
  rankElite: '🛡️ Elite-Cyber-Analyst',
  rankEliteMsg: 'Hervorragende Arbeit! Du hast fast jede Bedrohung erkannt. Dein Instinkt für digitale Sicherheit ist ausgezeichnet.',
  playAgain: 'Nochmal spielen',
  levelMeta: [
    { title: 'Level 1 von 4 — Datei-Scanner', app: '📁 Datei-Explorer', msg: '🔍 Datei wird gescannt…' },
    { title: 'Level 2 von 4 — E-Mail-Posteingang', app: '📧 Mail', msg: '📧 E-Mail wird gelesen…' },
    { title: 'Level 3 von 4 — Browser-Pop-ups', app: '🌐 Browser', msg: '⚠️ Pop-up erkannt!' },
    { title: 'Level 4 von 4 — App-Berechtigungen', app: '⚙️ App-Manager', msg: '⚙️ Berechtigungen werden geprüft…' },
  ],
  files: [
    {
      icon: '💀', name: 'FreeMinecraft_Crack.exe', type: 'Ausführbare Datei (.exe)',
      source: 'Heruntergeladen von: crack-games-free.ru', size: '14,2 MB', date: 'Heute, 15:41 Uhr',
      description: 'Ein Installationsprogramm, das angeblich kostenloses Minecraft bietet. Von einer inoffiziellen russischen Website heruntergeladen.',
      isThreat: true,
      explanation: 'Gecrackte Spiel-Installer sind ein klassischer Weg, Trojaner und Ransomware zu verbreiten. Die .exe-Erweiterung, die verdächtige Domain und das „kostenlose Crack"-Versprechen sind große Warnsignale.',
      tip: 'Lade Software nur von offiziellen, verifizierten Websites herunter.',
    },
    {
      icon: '📄', name: 'History_Essay_Draft.docx', type: 'Word-Dokument (.docx)',
      source: 'Lokal auf diesem Gerät erstellt', size: '48 KB', date: 'Gestern, 19:15 Uhr',
      description: 'Ein Word-Dokument, das du selbst für deinen Geschichtsunterricht erstellt hast.',
      isThreat: false,
      explanation: 'Ein kleines, lokal erstelltes Word-Dokument ist sicher. Es hat eine Standardendung, eine kleine Dateigröße und einen lokalen Ursprung.',
      tip: 'Sei vorsichtig mit .docx-Dateien von Fremden — sie können schädliche Makros enthalten. Selbst erstellte Dateien sind jedoch sicher.',
    },
    {
      icon: '⚡', name: 'speedup_your_pc.bat', type: 'Batch-Skript (.bat)',
      source: 'Per Discord-DM erhalten von: xX_h4ck3r_Xx', size: '3,1 KB', date: 'Heute, 11:02 Uhr',
      description: 'Ein Batch-Skript, das per Discord von einem unbekannten Benutzer gesendet wurde und angeblich deinen PC beschleunigt.',
      isThreat: true,
      explanation: '.bat-Dateien können jeden Systembefehl ausführen — einschließlich Malware-Installation, Hintertüren öffnen oder Dateien löschen. Führe niemals Skripte von Fremden aus.',
      tip: 'Führe niemals .bat- oder .vbs-Skripte von Personen aus, die du nicht kennst und denen du nicht vollständig vertraust, auch wenn sie behaupten, es sei harmlos.',
    },
    {
      icon: '🎵', name: 'Summer_Playlist.mp3', type: 'Audiodatei (.mp3)',
      source: 'Aus der Spotify-Desktop-App gespeichert', size: '8,7 MB', date: 'Vor 3 Tagen',
      description: 'Eine Musikdatei, die über die offizielle Spotify-App gespeichert wurde.',
      isThreat: false,
      explanation: 'Dies ist eine Standard-Audiodatei aus einer vertrauenswürdigen Quelle. .mp3-Dateien sind nicht ausführbar und stellen kein echtes Risiko dar, wenn sie von legitimen Apps stammen.',
      tip: 'Standard-Mediendateien (.mp3, .jpg, .mp4) sind im Allgemeinen sicher. Achte nur auf Dateien, die ihre Endung verschleiern, z. B. „song.mp3.exe".',
    },
    {
      icon: '🔧', name: 'RegFix_Pro_Setup.exe', type: 'Ausführbare Datei (.exe)',
      source: 'Per Browser-Pop-up-Werbung geliefert', size: '2,1 MB', date: 'Heute, 14:18 Uhr',
      description: 'Ein „Registry-Reparaturtool", das durch eine Pop-up-Anzeige angeboten wurde, die behauptet, dein PC sei beschädigt.',
      isThreat: true,
      explanation: 'Gefälschte „PC-Reparatur"-Tools über Pop-up-Anzeigen sind ein häufiges Vehikel für Adware und Spyware. Echte Systemtools werden nicht so beworben.',
      tip: 'Legitime Antivirenprogramme oder Reparatursoftware werden niemals über zufällige Browser-Pop-up-Anzeigen verteilt.',
    },
    {
      icon: '📸', name: 'Birthday_Party_2024.jpg', type: 'Bilddatei (.jpg)',
      source: 'Per WhatsApp erhalten von: Oma', size: '2,9 MB', date: 'Letzte Woche',
      description: 'Ein Foto von deiner Geburtstagsfeier, das deine Großmutter geschickt hat.',
      isThreat: false,
      explanation: 'Ein .jpg-Foto von einem bekannten Familienmitglied ist sicher. Standardbilder von vertrauenswürdigen Kontakten sind keine Malware.',
      tip: 'Achte auf Bilddateien mit doppelten Endungen wie „photo.jpg.exe" — diese verbergen den echten, gefährlichen Dateityp.',
    },
    {
      icon: '💎', name: 'FREE_ROBUX_GENERATOR.vbs', type: 'VBScript (.vbs)',
      source: 'Link aus einem YouTube-Kommentar', size: '1,8 KB', date: 'Heute, 09:55 Uhr',
      description: 'Ein Skript aus einem YouTube-Kommentar, das angeblich unbegrenzte Robux für Roblox generiert.',
      isThreat: true,
      explanation: '„Kostenlose Robux"-Generatoren existieren nicht — sie sind 100 % Betrug. .vbs-Skripte können leistungsstarke Systembefehle ausführen. Dies ist eine typische Malware-Verbreitungsmethode.',
      tip: 'Generatoren für kostenlose Spielwährung sind immer Betrug. Sie existieren nur, um Accounts zu stehlen, Malware zu installieren oder beides.',
    },
    {
      icon: '📊', name: 'Science_Project_Data.xlsx', type: 'Excel-Tabelle (.xlsx)',
      source: 'Per E-Mail erhalten von: johnson.s@westridge-school.edu', size: '156 KB', date: 'Gestern, 10:33 Uhr',
      description: 'Eine Excel-Datei mit Projektdaten aus dem Naturwissenschaftsunterricht, gesendet von deiner verifizierten Schullehrerin.',
      isThreat: false,
      explanation: 'Diese Tabelle stammt von einer verifizierten Schullehrerin, die eine offizielle Schul-Domain verwendet. Der Dateityp ist angemessen und die Dateigröße ist vernünftig.',
      tip: 'Office-Dateien von unbekannten Absendern können schädliche Makros enthalten. Überprüfe immer den Absender, bevor du Anhänge öffnest.',
    },
  ],
  emails: [
    {
      fromName: 'IT-Sicherheitsteam', fromAddr: 'security-alert@school-itsupport.xyz', avatarLetter: '🔐',
      subject: 'DRINGEND: Dein Schulkonto wurde gehackt — setze dein Passwort JETZT zurück',
      body: `Liebe/r Schüler/in,

Unsere Systeme haben unbefugten Zugriff auf dein Schulkonto von einem unbekannten Standort erkannt.

Du musst dein Passwort SOFORT zurücksetzen, indem du das beigefügte Tool ausführst. Wenn du nicht innerhalb von 30 Minuten handelst, wird dein Konto dauerhaft gesperrt.

— IT-Sicherheitsabteilung`,
      attachment: 'PasswordReset_Tool.exe',
      isThreat: true,
      explanation: 'Mehrere Warnsignale: eine verdächtige „.xyz"-Domain (nicht die echte Schul-Domain), extreme Dringlichkeit und ein .exe-Anhang. Echte IT-Abteilungen senden niemals Passwort-Reset-Tools als ausführbare Dateien — sie verweisen auf eine ordentliche Anmeldeseite.',
      tip: 'Bei einer Sicherheitswarnung kontaktiere IT direkt über eine Telefonnummer, die du bereits kennst — vertraue nie den Kontaktdaten aus der verdächtigen E-Mail selbst.',
    },
    {
      fromName: 'Ms. Johnson', fromAddr: 'johnson.s@westridge-school.edu', avatarLetter: 'J',
      subject: 'Wissenschaftsmesse — Projektbeschreibung im Anhang',
      body: `Hallo Klasse,

im Anhang findet ihr die offizielle Projektbeschreibung für die bevorstehende Wissenschaftsmesse. Sie enthält die erforderlichen Abschnitte, Formatierungsrichtlinien und den Abgabetermin.

Bringt euer fertiges Poster und euren Bericht bis Freitag in Raum 14.

Bei Fragen könnt ihr euch gerne melden!

Ms. Johnson
Naturwissenschaftliche Abteilung, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      isThreat: false,
      explanation: 'Dies ist eine legitime Schul-E-Mail. Der Absender verwendet eine verifizierte .edu-Schul-Domain, der Anhang ist ein Standard-Word-Dokument, das zum Inhalt der E-Mail passt, und es werden keine persönlichen Daten angefordert.',
      tip: 'Eine .docx-Datei von einer bekannten Lehrkraft an einer offiziellen Schul-Domain ist sicher. Überprüfe immer die vollständige Absenderadresse, bevor du einen Anhang öffnest.',
    },
    {
      fromName: 'Lucas (Gaming-Freund)', fromAddr: 'lucas.gamer99@gmail.com', avatarLetter: 'L',
      subject: 'Alter, führ das aus, das gibt dir unendlich Münzen im Spiel!!',
      body: `Hey!!

Hab online dieses kranke Skript gefunden, das dir unbegrenzte Münzen in Clash Royale gibt. Führ einfach die .bat-Datei aus und sie patcht das Spiel automatisch lol

Mein Bruder hat's probiert und es hat funktioniert. Sag aber niemandem was

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      isThreat: true,
      explanation: 'Selbst Nachrichten von echten Freunden können Malware verbreiten — Lucas\' Konto könnte kompromittiert sein, oder er weiß nicht, dass die Datei gefährlich ist. Ein .bat-Skript, das angeblich ein Spiel „hackt", ist eine klassische Trojaner-Verbreitungsmethode. Das Ausführen könnte einem Angreifer die vollständige Kontrolle über dein System geben.',
      tip: 'Führe niemals .bat- oder .vbs-Skripte von irgendjemandem aus, auch nicht von Freunden. „Cheat"-Skripte für Online-Spiele sind fast immer getarnte Malware.',
    },
    {
      fromName: 'Schulbibliothek', fromAddr: 'library@westridge-school.edu', avatarLetter: '📚',
      subject: 'Sommerleseprogramm — deine Leseliste',
      body: `Hallo,

vielen Dank für deine Anmeldung zum Sommerleseprogramm! Im Anhang findest du deine personalisierte Leseliste basierend auf deiner Altersgruppe und deinen Interessen.

Du kannst alle diese Titel aus der Schulbibliothek ausleihen oder sie über das Schülerportal anfordern.

Viel Spaß beim Lesen!

Bibliotheksteam der Westridge School`,
      attachment: 'Summer_Reading_List_2024.pdf',
      isThreat: false,
      explanation: 'Eine legitime E-Mail der Schulbibliothek mit der offiziellen .edu-Domain. Der .pdf-Anhang ist eine Leseliste — völlig angemessen für den Kontext. Es werden keine persönlichen Daten angefordert und keine Links sind verdächtig.',
      tip: 'PDF-Dateien von vertrauenswürdigen, bekannten Absendern sind in der Regel sicher. Sei vorsichtiger bei PDFs von unbekannten Absendern, da sie manchmal eingebettete Skripte enthalten können.',
    },
    {
      fromName: 'PREISBENACHRICHTIGUNGS-CENTER', fromAddr: 'winner@free-prize-claim-2024.net', avatarLetter: '🏆',
      subject: 'DU WURDEST AUSGEWÄHLT — FORDERE DEIN iPHONE 15 JETZT AN!!!',
      body: `HERZLICHEN GLÜCKWUNSCH!!!

Du wurdest zufällig als unser Glücksgewinner ausgewählt! Um dein iPhone 15 Pro Max zu beanspruchen, fülle das beigefügte Antragsformular mit deinen persönlichen Daten und einer Versandgebühr von 4,99 € aus und sende es zurück.

Antworte innerhalb von 12 STUNDEN oder dein Preis verfällt!

[MEINEN PREIS BEANSPRUCHEN →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      isThreat: true,
      explanation: 'Ein klassischer Preis-Betrug mit einem .html-Anhang — das Öffnen lädt eine gefälschte Webseite, die darauf ausgelegt ist, deine persönlichen Daten und Zahlungsdetails zu stehlen. Warnsignale: Preis, für den du dich nie angemeldet hast, extreme Dringlichkeit, verdächtige Absender-Domain und übermäßige Großschreibung.',
      tip: '.html-E-Mail-Anhänge, die „Formulare" öffnen, sind ein gängiger Weg, um überzeugende gefälschte Login- oder Zahlungsseiten lokal auf deinem Gerät zu erstellen und Web-Filter zu umgehen.',
    },
  ],
  popups: [
    {
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SICHERHEITSWARNUNG',
      icon: '🚨',
      message: '⚠️ VIRUS ERKANNT! Dein Computer ist mit 47 Viren infiziert! Ruf sofort 1-800-FIX-NOW an oder dein System wird dauerhaft beschädigt!',
      subtext: 'Windows Defender hat kritische Bedrohungen erkannt. Jetzt handeln!',
      primaryBtnText: '📞 Jetzt anrufen & reparieren',
      isThreat: true,
      explanation: 'Dies ist „Scareware" — eine gefälschte Viruswarnung, die dich dazu bringen soll, eine Betrugs-Telefonnummer anzurufen oder gefälschte Antivirensoftware zu installieren. Echte Sicherheitstools zeigen niemals Warnungen in einem Browser-Pop-up an.',
      tip: 'Schließe verdächtige Browser-Pop-ups mit dem X-Button. Ruf niemals Telefonnummern an, die in Browser-Pop-ups angezeigt werden — das sind immer Betrugs-Hotlines.',
    },
    {
      browserUrl: 'https://school-portal.edu',
      appName: 'Schulportal',
      icon: '🍪',
      message: 'Diese Website verwendet Cookies, um deine Anmeldung zu speichern und deine Erfahrung zu verbessern.',
      subtext: 'Wir verwenden nur notwendige Cookies. Es werden keine persönlichen Daten an Dritte weitergegeben.',
      primaryBtnText: '✓ Cookies akzeptieren',
      isThreat: false,
      explanation: 'Ein legitimer Cookie-Zustimmungshinweis von deinem Schulportal. Er ist transparent über die Cookie-Verwendung und stellt keine ungewöhnlichen Anfragen. Das Akzeptieren notwendiger Cookies auf einer vertrauenswürdigen Seite ist in Ordnung.',
      tip: 'Cookie-Zustimmungsbanner auf vertrauenswürdigen, bekannten Websites sind in vielen Ländern gesetzlich vorgeschrieben und völlig normal.',
    },
    {
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Herzlichen Glückwunsch!!!',
      icon: '🎉',
      message: 'DU BIST DER 1.000.000. BESUCHER! Du hast eine KOSTENLOSE PlayStation 5 gewonnen! Klicke unten, um deinen Preis sofort zu beanspruchen!',
      subtext: '⏱️ Angebot läuft ab in: 00:59 — Beanspruche es, bevor die Zeit abläuft!',
      primaryBtnText: '🎮 KOSTENLOSE PS5 beanspruchen!',
      isThreat: true,
      explanation: 'Ein gefälschtes Preis-Pop-up — keine Website vergibt zufällig eine PlayStation 5. Das Klicken auf den Button führt zu einer Betrugsseite, die nach persönlichen Daten oder Zahlungen fragt. Der Countdown-Timer ist eine Drucktaktik.',
      tip: 'Countdown-Timer in Pop-ups sollen verhindern, dass du nachdenkst. Echte Preise werden niemals durch zufällige Browser-Pop-ups verteilt.',
    },
    {
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Möchtest du YouTube erlauben, dir Benachrichtigungen über neue Videos von Kanälen zu senden, die du abonniert hast?',
      subtext: 'Du kannst dies später in deinen Browser-Einstellungen ändern.',
      primaryBtnText: 'Benachrichtigungen erlauben',
      isThreat: false,
      explanation: 'Obwohl YouTube selbst legitim ist, ist das Blockieren von Browser-Benachrichtigungen die sicherere und übersichtlichere Standardeinstellung — selbst bei vertrauenswürdigen Seiten. Einmal gewährt, können Benachrichtigungsberechtigungen missbraucht werden oder zu Spam werden.',
      tip: 'Überlege gut, bevor du Browser-Benachrichtigungen zulässt. Die meisten Websites brauchen diese Berechtigung nicht, um ordnungsgemäß zu funktionieren.',
    },
    {
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Download-Manager',
      icon: '⬇️',
      message: 'Datei bereit: „Adobe_Photoshop_FULL_CRACK_2024.exe" (87 MB). Unsere KI hat diese Datei als SICHER verifiziert.',
      subtext: 'Powered by VirusSafe™ — gescannt und genehmigt. Klicke zum sofortigen Download.',
      primaryBtnText: '✓ Jetzt herunterladen',
      isThreat: true,
      explanation: 'Mehrere Warnsignale: verdächtige „.cc"-Domain, gecrackte (raubkopierte) Software, die fast immer mit Malware gebündelt ist, und ein gefälschtes selbst deklariertes „SICHER"-Siegel. Das „VirusSafe™"-Label ist erfunden, um dich zu manipulieren.',
      tip: 'Gecrackte oder raubkopierte Software enthält fast immer versteckte Malware. Lade Software nur von der offiziellen Website des Herstellers herunter.',
    },
  ],
  permissions: [
    {
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Herausgeber: Unbekannter Entwickler · ⭐ 2,1 · 500 Downloads',
      description: 'Eine einfache Taschenlampen-App.',
      permissions: [
        {
          icon: '📷',
          name: 'Kamera',
          reason: 'Zum Aktivieren der Flash-LED',
          suspicious: false,
        },
        {
          icon: '📍',
          name: 'Genaue Position (GPS)',
          reason: 'Kein Grund angegeben',
          suspicious: true,
        },
        {
          icon: '📞',
          name: 'Anrufliste lesen',
          reason: 'Kein Grund angegeben',
          suspicious: true,
        },
        {
          icon: '💾',
          name: 'Auf alle Dateien zugreifen',
          reason: 'Kein Grund angegeben',
          suspicious: true,
        },
      ],
      isThreat: true,
      explanation: 'Eine Taschenlampen-App braucht nur Kamerazugriff für die LED. Standort, Anruflisten und vollständiger Dateizugriff sind völlig unnötig — das sind Merkmale von Spyware, die still deine Daten sammelt.',
      tip: 'Frage dich immer: „Warum braucht diese App diese Berechtigung?" Eine Taschenlampe hat keinen legitimen Grund, auf dein GPS oder deine Kontakte zuzugreifen.',
    },
    {
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Herausgeber: Creative Tools Ltd · ⭐ 4,7 · 2M+ Downloads',
      description: 'Fotos für Schulprojekte bearbeiten und verbessern.',
      permissions: [
        {
          icon: '📷',
          name: 'Kamera',
          reason: 'Um neue Fotos zum Bearbeiten aufzunehmen',
          suspicious: false,
        },
        {
          icon: '🖼️',
          name: 'Zugriff auf Fotos',
          reason: 'Um vorhandene Fotos zu öffnen',
          suspicious: false,
        },
        {
          icon: '💾',
          name: 'Im Speicher speichern',
          reason: 'Um bearbeitete Fotos zu speichern',
          suspicious: false,
        },
      ],
      isThreat: false,
      explanation: 'Alle drei Berechtigungen haben klare, logische Gründe, die direkt mit der Fotobearbeitung zusammenhängen. Kamerazugriff, Fotobibliothekszugriff und Dateispeicherung sind genau das, was ein Fotoeditor braucht — nichts mehr.',
      tip: 'Wenn jede angeforderte Berechtigung einen klaren Zweck hat, der mit der Hauptfunktion der App zusammenhängt, ist das ein Zeichen für ehrliche, gut gestaltete Software.',
    },
    {
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Herausgeber: FastGame Studio · ⭐ 4,1 · 800K Downloads',
      description: 'Ein schnelles Side-Scrolling-Plattformspiel.',
      permissions: [
        {
          icon: '🔊',
          name: 'Audio abspielen',
          reason: 'Für Soundeffekte im Spiel',
          suspicious: false,
        },
        {
          icon: '📳',
          name: 'Vibration',
          reason: 'Für haptisches Feedback beim Spielen',
          suspicious: false,
        },
        {
          icon: '📍',
          name: 'Genaue GPS-Position',
          reason: 'Kein Grund angegeben',
          suspicious: true,
        },
        {
          icon: '📱',
          name: 'Geräte-ID & -Info lesen',
          reason: 'Kein Grund angegeben',
          suspicious: true,
        },
      ],
      isThreat: true,
      explanation: 'Audio und Vibration sind normal für ein Spiel. Aber GPS und Geräte-ID haben keine legitime Verwendung in einem Plattformspiel — sie dienen dazu, dich für Werbedatenhändler zu verfolgen und zu identifizieren oder ein Profil zu erstellen.',
      tip: 'Selbst Apps mit guten Bewertungen können unnötige Berechtigungen anfordern. Verweigere immer Berechtigungen, die keinen klaren Bezug zum Zweck der App haben.',
    },
    {
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Herausgeber: CsHub Education · ⭐ 4,9 · 50K Downloads',
      description: 'Interaktives Cybersicherheitslernen für Schüler.',
      permissions: [
        {
          icon: '🌐',
          name: 'Internetzugang',
          reason: 'Zum Laden von Lektionen und Quizfragen',
          suspicious: false,
        },
        {
          icon: '💾',
          name: 'Lokaler Speicher',
          reason: 'Um deinen Fortschritt offline zu speichern',
          suspicious: false,
        },
      ],
      isThreat: false,
      explanation: 'Internetzugang und lokaler Speicher sind beide klar notwendig für eine Lern-App, die Online-Inhalte lädt und deinen Fortschritt speichert. Es wird nur das Notwendige angefordert — eine gute Datenschutzpraxis.',
      tip: 'Apps, die nur die Mindestberechtigungen für ihre Kernfunktion anfordern, sind Beispiele für datenschutzfreundliches Design.',
    },
  ],
}
