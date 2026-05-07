// ---------------------------------------------------------------------------
// Digital Abuse (DA) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Abuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDA = {
  aim: 'Den Lernenden helfen, schädliches Online-Verhalten zu erkennen, zu verstehen, dass Grenzen wichtig sind, und zu wissen, welche Schritte sie unternehmen können, um Unterstützung zu erhalten und sicher zu bleiben.',
  objectives: [
    'Digitalen Missbrauch in altersgerechten, unterstützenden Begriffen definieren.',
    'Warnsignale und ungesundes Online-Verhalten erkennen.',
    'Sichere Hilfesuche und Meldeschritte praktizieren.',
  ],
  outcomes: [
    'Verhaltensweisen identifizieren, die Grenzen überschreiten oder Schaden anrichten.',
    'Einfache Sicherheitsmaßnahmen wie Blockieren oder Melden anwenden.',
    'Vertrauenspersonen und Unterstützungskanäle kennen, an die man sich wenden kann.',
  ],
  teachersGuide: {
    ariaLabel: 'Unterrichtsleitfaden herunterladen',
    download: 'Unterrichtsleitfaden Digitaler Missbrauch',
  },
  parts: [
    {
      title: 'Fehlinformation',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Fehlinformation ist, was Menschen dazu motiviert und wie man sie erkennt.',
      bundle: {
        filename: 'Digital Abuse Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Spiel',
            name: 'Wahrheitsdetektive',
            filename: 'Game - Truth Detectives',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Was ist Fehlinformation?',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Was ist Fehlinformation?',
        supportText:
          'Verwenden Sie dieses Video, um Fehlinformation als falsche oder ungenaue Inhalte einzuführen, die sich online ohne schädliche Absicht verbreiten können. Halten Sie inne und fragen Sie die Schülerinnen und Schüler, ob sie jemals etwas geteilt haben, das sich später als unwahr herausstellte.',
        downloads: {
          video: {
            filename: 'What is Misinformation',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What is Misinformation - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Desinformation',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Desinformation ist, die Motivationen dahinter und wie man sie erkennt.',
      bundle: {
        filename: 'Digital Abuse Part 2 Package',
      },
      included: {
        materials: [],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Was ist Desinformation?',
          },
          {
            title: 'Algorithmen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Was ist Desinformation?',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schüler darin zu unterstützen, Desinformation — absichtlich täuschende Inhalte — von Fehlinformation zu unterscheiden. Halten Sie inne, um zu besprechen, wie die Absicht die Art und Weise verändert, wie wir falsche Informationen bewerten und darauf reagieren.',
        downloads: {
          video: {
            filename: 'What is Disinformation',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What is Disinformation - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Cybermobbing',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Cybermobbing ist, die Motivationen dahinter und wie man es erkennt.',
      bundle: {
        filename: 'Digital Abuse Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Spiel',
            name: 'Zeig es!',
            filename: 'Game - Act it Out',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Was ist Cybermobbing?',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Was ist Cybermobbing?',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schülern zu helfen, Cybermobbing zu definieren und zu verstehen, wie Online-Verhalten echten emotionalen Schaden verursachen kann. Halten Sie inne, um zu besprechen, warum die Reaktion von Zuschauern in diesen Situationen wichtig ist.',
        downloads: {
          video: {
            filename: 'What is Cyber Bullying',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'What is Cyber Bullying - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Fremde Gefahr',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Fremde Gefahr ist, die Motivationen dahinter und wie man sie erkennt.',
      bundle: {
        filename: 'Digital Abuse Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Spiel',
            name: 'Echt oder Fake?',
            filename: 'Game - Real or Fake',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      title: 'Influencer',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Influencer sind und was sie motiviert.',
      bundle: {
        filename: 'Digital Abuse Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Szenarien',
            name: 'Beispiele für Influencer-Beiträge, die potenziell schädlich und nicht schädlich sind',
            filename: 'Scenarios - Examples of Influencers Posts That Are Potentially Harmful and Not Harmful',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Social-Media-Influencer',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Social-Media-Influencer',
        supportText:
          'Verwenden Sie dieses Video, um zu erkunden, wie Influencer Meinungen und Verhaltensweisen in sozialen Medien beeinflussen, und welche Verantwortung mit dieser Reichweite einhergeht. Halten Sie inne und fragen Sie die Schülerinnen und Schüler, welchen Influencern sie folgen und was sie vertrauenswürdig macht.',
        downloads: {
          video: {
            filename: 'Social Media Influencers',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Social Media Influencers - Subtitles',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Wie können wir mit dem Verhalten digitaler Täter umgehen?',
      goal: 'Den Schülerinnen und Schülern helfen zu wissen, was sie tun können, um sich vor digitalem Missbrauch zu schützen.',
      bundle: {
        filename: 'Digital Abuse Part 6 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Aktivität',
            name: 'Sicherheits-Superheldenpaket',
            filename: 'Activity - Safety Superhero Suggestion Pack',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
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
  ],
}

export const challengeDA = {
  title: 'Echte Geschichten',
  subtitle:
    'Triff Entscheidungen. Erlebe Konsequenzen. Lerne, wie du mit Cybermobbing, Online-Druck und digitalem Missbrauch umgehst.',
  howItWorks: 'So funktioniert es',
  instruction:
    'Arbeite dich durch 10 reale Szenarien zu digitalem Missbrauch. In jedem Schlüsselmoment entscheidest du, was zu tun ist — und verschiedene Entscheidungen führen zu wirklich unterschiedlichen Ergebnissen. Verdiene bis zu 3 Sterne pro Geschichte, indem du den sichersten Weg findest. Wenn du ein schwieriges Ende erhältst, versuche die Geschichte erneut, um einen besseren Weg zu entdecken!',
  tip: 'Jede Geschichte verzweigt sich in mehrere Richtungen. Es gibt immer mindestens einen Weg, der zu einem sicheren, positiven Ergebnis führt — aber du musst die richtigen Entscheidungen treffen, um ihn zu finden!',
  tipLabel: 'Tipp',
  yourBestScore: 'Dein bestes Ergebnis',
  bestResultDesc: 'Bestes Ergebnis aus jeder Geschichte',
  storiesTitle: '📖 Geschichten',
  watchOutTitle: '🚩 Achte auf',
  watchOutItems: [
    '🚩 Jemanden, der nach privaten Fotos fragt',
    '🚩 Passwortforderungen von Partnern',
    '🚩 Fremde, die nach deiner Adresse oder Schule fragen',
    '🚩 „Halt das geheim"-Druck',
    '🚩 Gemeine Beiträge, Screenshots, gefälschte Profile',
  ],
  welcomeDesc: 'Triff deine Entscheidungen sorgfältig — verschiedene Wege führen zu sehr unterschiedlichen Ergebnissen.',
  startStory: 'Geschichte starten →',
  whatWeLearned: '💡 Was wir gelernt haben:',
  tryDifferentPath: '↩ Einen anderen Weg ausprobieren',
  nextStory: 'Nächste Geschichte →',
  seeFinalScore: '🎉 Endergebnis anzeigen',
  allStoriesComplete: 'Alle Geschichten abgeschlossen!',
  finalScoreDesc: 'So hast du in allen 10 Geschichten abgeschnitten:',
  playAgain: 'Nochmal spielen',
  rankChampion: '🏆 Sicherheits-Champion',
  rankChampionMsg: 'Hervorragend! Du hast in fast jeder Situation den sichersten Weg gefunden.',
  rankDefender: '🛡️ Digitaler Verteidiger',
  rankDefenderMsg: 'Gute Arbeit! Du hast die meisten Situationen weise und sicher gemeistert.',
  rankNavigator: '📚 Lern-Navigator',
  rankNavigatorMsg: 'Gute Bemühungen! Spiele einige Geschichten erneut, um bessere Wege zu finden und mehr Sterne zu verdienen.',
  rankBeginning: '🌱 Erste Schritte',
  rankBeginningMsg: 'Probiere weiterhin verschiedene Wege — jedes Wiederholungsspiel lehrt dich etwas Neues!',
  stories: [
    {
      id: 1, title: 'Das Meme-Problem', emoji: '😟', topic: 'Cybermobbing',
      nodes: [
        {
          id: 'start',
          text: 'Du öffnest dein Handy und siehst einen Gruppenchat. Jemand namens Jake hat ein gemeines Meme über deine Klassenkameradin Emma gepostet, das sich über ihr Aussehen lustig macht. 23 Personen haben es bereits geliked. Was machst du?',
          choices: ['👍 Das Meme liken, um dazuzugehören', '📲 Vorbei scrollen und es ignorieren', '💬 Emma eine private unterstützende Nachricht senden'],
        },
        {
          id: 'end_a',
          title: 'Teil des Problems',
          text: 'Du hast das Meme geliked. Jake postet mehr, noch gemeinere. Emma sieht deinen Namen in den Likes und ist am Boden. Ein Lehrer erfährt davon und kontaktiert deine Eltern.',
          lesson: 'Gemeinen Inhalten zu liken ist eine Form von Cybermobbing. Dein „Like" ist nie unsichtbar — das Ziel sieht immer, wer es unterstützt hat.',
        },
        {
          id: 'mid_b',
          text: 'Du scrollst vorbei, aber die Beiträge kommen weiter. Am nächsten Tag sitzt Emma allein beim Mittagessen und sieht sehr aufgewühlt aus. Das Mobbing hat sich verschlimmert.',
          choices: ['😶 Weiter ignorieren — nicht dein Problem', '🏫 Einem Lehrer erzählen, was passiert ist'],
        },
        {
          id: 'end_b1',
          title: 'Der schweigende Zeuge',
          text: 'Wochen vergehen. Emma fehlt in der Schule. Du fühlst dich schuldig, sagst aber nichts. Das Mobbing geht ungehindert weiter.',
          lesson: 'Mobbing zu ignorieren lässt es nicht aufhören. Zuschauer haben echte Macht zu helfen — zu schweigen ist trotzdem eine Entscheidung.',
        },
        {
          id: 'end_b2',
          title: 'Der mutige Melder',
          text: 'Der Lehrer handelt sofort. Jake und seine Eltern werden hereingerufen. Emma erhält Unterstützung vom Schulberater. Das Mobbing hört auf.',
          lesson: 'Einer Vertrauensperson zu erzählen ist eines der wirkungsvollsten Dinge, die du tun kannst. Es ist kein Petzen — es ist jemanden schützen, der Hilfe braucht.',
        },
        {
          id: 'mid_c',
          text: 'Emma antwortet: „Vielen Dank… es hat wirklich wehgetan. Ich wusste nicht, was ich tun soll." Sie ist dankbar, aber verängstigt. Die Beiträge sind noch online.',
          choices: ['📢 Emma helfen, jeden Beitrag der Plattform zu melden', '🤷 Emma sagen, sie soll es einfach ignorieren, es wird sich legen'],
        },
        {
          id: 'end_c1',
          title: 'Der digitale Verteidiger',
          text: 'Du und Emma melden jeden Beitrag gemeinsam. Die meisten werden innerhalb eines Tages entfernt. Ihr besucht auch den Schulberater, der Emma weiter unterstützt. Das Mobbing hört auf.',
          lesson: 'Jemanden zu kontaktieren UND zu handeln — online melden und Vertrauenspersonen einbeziehen — ist die beste Reaktion auf Cybermobbing.',
        },
        {
          id: 'end_c2',
          title: 'Nett, aber nicht genug',
          text: 'Emma versucht es zu ignorieren, aber die Beiträge kommen weiter. Deine freundliche Nachricht hat geholfen, aber ohne Meldung oder Erwachsenenunterstützung geht das Mobbing weiter.',
          lesson: 'Freundlichkeit ist ein großartiger Anfang, aber Mobbing zu melden und Vertrauenspersonen einzubeziehen ist das, was es wirklich stoppt.',
        },
      ],
    },
    {
      id: 2, title: 'Screenshot-Falle', emoji: '📸', topic: 'Privatsphäre & Verrat',
      nodes: [
        {
          id: 'start',
          text: 'Du hast deiner Freundin Zoe eine private Nachricht geschickt, dass du jemanden magst. Zoe hat einen Screenshot davon gemacht und ihn ohne deine Erlaubnis in einem großen Gruppenchat geteilt. Alle kommentieren. Was machst du?',
          choices: ['😡 Einen wütenden öffentlichen Beitrag über das veröffentlichen, was Zoe getan hat', '📱 Zoe privat in einer DM konfrontieren', '📸 Die Beweise sichern und einer Vertrauensperson erzählen'],
        },
        {
          id: 'end_a',
          title: 'Feuer trifft Feuer',
          text: 'Du postest öffentlich und stellst Zoe bloß. Zoe schlägt zurück. Dutzende Personen mischen sich ein. Jetzt ist es ein vollständiger Online-Krieg und ihr beide seht schlecht aus.',
          lesson: 'Öffentliche Bloßstellungen online eskalieren fast immer. Sie bringen selten die erhoffte Lösung.',
        },
        {
          id: 'mid_b',
          text: 'Du schreibst Zoe: „Warum hast du das geteilt? Es war privat!" Zoe sagt „Es war doch nur ein Witz, chill mal." Aber sie hat es nicht gelöscht.',
          choices: ['😔 Ihre „Entschuldigung" akzeptieren und leise weitermachen', '🗣️ Fest darum bitten, es zu löschen, und eine Vertrauensperson einbeziehen'],
        },
        {
          id: 'end_b1',
          title: 'Unter den Teppich gekehrt',
          text: 'Zoe versteht nicht wirklich, warum es falsch war. Der Screenshot bleibt online. Du fühlst dich verletzt, aber nichts ist wirklich gelöst.',
          lesson: '„Nur ein Witz" ist nie eine Entschuldigung für das Teilen privater Nachrichten. Schlechtes Verhalten ohne Konsequenzen zu akzeptieren bedeutet, dass es wieder passieren kann.',
        },
        {
          id: 'end_b2',
          title: 'Echte Lösung',
          text: 'Unter Druck und mit Erwachsenenbeteiligung löscht Zoe es und führt ein echtes Gespräch über Zustimmung und Privatsphäre. Eure Freundschaft erholt sich unter gesünderen Bedingungen.',
          lesson: 'Ruhig aber bestimmt für deine Privatsphäre einzutreten — mit Unterstützung Erwachsener — führt zu echtem Wandel, nicht nur vorübergehender Ruhe.',
        },
        {
          id: 'mid_c',
          text: 'Eine Vertrauensperson hilft, es der Plattform zu melden und kontaktiert Zoes Eltern. Der Screenshot wird entfernt. Zoe entschuldigt sich.',
          choices: ['🤝 Ihre Entschuldigung akzeptieren und versuchen, die Freundschaft wiederherzustellen', '🚫 Zoe blockieren — du willst sie nicht mehr als Freundin'],
        },
        {
          id: 'end_c1',
          title: 'Vertrauen wiederhergestellt',
          text: 'Mit Erwachsenenunterstützung und einer echten Entschuldigung löst sich die Situation richtig. Zoe versteht Zustimmung. Ihr beide geht weiter.',
          lesson: 'Dokumentieren, melden und Raum für eine echte Entschuldigung geben verwandelt eine schmerzliche Erfahrung in einen echten Lernmoment.',
        },
        {
          id: 'end_c2',
          title: 'Sichere Distanz',
          text: 'Der Screenshot ist weg und du bist geschützt. Blockieren ist eine gültige Grenze, wenn das Vertrauen gebrochen ist. Ein sicheres Ergebnis durch die richtigen Handlungen.',
          lesson: 'Dich selbst zu schützen ist immer gültig. Erwachsene einzubeziehen, um die Situation zu handhaben, war genau die richtige Entscheidung.',
        },
      ],
    },
    {
      id: 3, title: 'Gaming-Wut', emoji: '🎮', topic: 'Online-Gaming-Belästigung',
      nodes: [
        {
          id: 'start',
          text: 'Du spielst dein Lieblings-Online-Spiel und ein anderer Spieler beginnt, hastige Nachrichten zu spammen — ruft dich Namen und macht Drohungen. Andere in der Lobby schauen zu. Was machst du?',
          choices: ['💢 Mit eigenen Beleidigungen zurückschlagen', '🙉 Die Nachrichten ignorieren und weiterspielen', '🔇 Stummschalten, Screenshot machen und den Spieler im Spiel melden'],
        },
        {
          id: 'end_a',
          title: 'Beide gesperrt',
          text: 'Du streitest zurück. Ihr beide werdet gemeldet. Das System markiert dein Konto. Ihr beide werdet gesperrt — der toxische Spieler hat dich zuerst gemeldet.',
          lesson: 'Mit Hass auf Hass zu reagieren setzt auch dich ins Risiko. Spieleplattformen sperren oft beide Seiten toxischer Auseinandersetzungen.',
        },
        {
          id: 'mid_b',
          text: 'Du ignorierst sie, aber sie eskalieren. Jetzt haben sie dein öffentliches Spielprofil gefunden und posten dort Beleidigungen für andere zum Sehen.',
          choices: ['🗑️ Dein Profil löschen, um sie zum Aufhören zu bringen', '📢 Der Plattform melden und einer Vertrauensperson erzählen'],
        },
        {
          id: 'end_b1',
          title: 'Davonlaufen',
          text: 'Dein Profil zu löschen stoppt diesen Belästiger zunächst. Aber er zieht zum nächsten Ziel weiter. Keine Konsequenzen, keine echte Veränderung.',
          lesson: 'Dich selbst zu schützen ist wichtig, aber Melden stellt sicher, dass der Belästiger Konsequenzen trägt und es nicht weiter mit anderen machen kann.',
        },
        {
          id: 'end_b2',
          title: 'Spieler gesperrt',
          text: 'Die Plattform untersucht und sperrt das Konto des Belästigers. Eine Vertrauensperson hilft dir, deine Datenschutzeinstellungen zu überprüfen, und du fühlst dich unterstützt.',
          lesson: 'Gaming-Belästigung zu melden funktioniert. Plattformen nehmen diese Meldungen ernst, besonders wenn Screenshots als Beweise gespeichert sind.',
        },
        {
          id: 'mid_c',
          text: 'Du hast den Spieler stummgeschaltet und mit Screenshots gemeldet. Der Bericht wird überprüft. Aber du bist immer noch erschüttert von dem, was gesagt wurde.',
          choices: ['🗣️ Einer Vertrauensperson erzählen, wie die Erfahrung sich angefühlt hat', '😶 Es für dich behalten — du hast es bereits erledigt'],
        },
        {
          id: 'end_c1',
          title: 'Melden und Unterstützung',
          text: 'Eine Vertrauensperson bestätigt deine Gefühle und hilft dir, deine Datenschutzeinstellungen anzupassen. Die Plattform bestätigt, dass der Spieler gesperrt wurde.',
          lesson: 'Melden ist wichtig, aber genauso wichtig ist es zu verarbeiten, wie Online-Missbrauch dich fühlen lässt. Vertrauenspersonen können bei beidem helfen.',
        },
        {
          id: 'end_c2',
          title: 'Halbe Lösung',
          text: 'Der Spieler wird gesperrt, aber du trägst die Erfahrung allein. Du fühlst dich online sicherer, aber bist immer noch beunruhigt.',
          lesson: 'Du hast die technische Seite perfekt gehandhabt! Denk daran: mit jemandem über das Gefühl von Online-Missbrauch zu sprechen ist genauso wichtig.',
        },
      ],
    },
    {
      id: 4, title: 'Falsches Profil', emoji: '👤', topic: 'Identitätsdiebstahl',
      nodes: [
        {
          id: 'start',
          text: 'Du entdeckst ein gefälschtes Social-Media-Konto, das Fotos deines Freundes Sam verwendet. Es postet peinliche Dinge und fügt Sams Klassenkameraden hinzu. Sam weiß es noch nicht. Was machst du?',
          choices: ['💬 Das gefälschte Konto anschreiben und ihm sagen, es soll aufhören', '📞 Sam sofort erzählen, damit er es weiß', '🚩 Das gefälschte Konto melden UND Sam sofort erzählen'],
        },
        {
          id: 'end_a',
          title: 'Den Troll nicht füttern',
          text: 'Das gefälschte Konto blockiert dich und beschleunigt das Posten. Jetzt beginnt es, auch dich anzugreifen. Direktes Eingreifen hat die Dinge verschlimmert.',
          lesson: 'Ein gefälschtes oder missbräuchliches Konto direkt zu kontaktieren macht die Dinge fast immer schlimmer. Stattdessen der Plattform melden.',
        },
        {
          id: 'mid_b',
          text: 'Sam ist schockiert und aufgewühlt. Sam möchte alle anschreiben, um zu erklären, dass es fake ist, weiß aber nicht, was er sonst tun soll. Das Konto ist noch online.',
          choices: ['📢 Sam helfen, das Konto der Plattform zu melden', '🗣️ Vorschlagen, dass Sam es nur persönlich erklärt, dass es fake ist'],
        },
        {
          id: 'end_b1',
          title: 'Teamarbeit gewinnt',
          text: 'Du und Sam melden das Konto gemeinsam. Die Plattform entfernt es innerhalb von Stunden. Sam erzählt es auch einer Vertrauensperson, die hilft, auf zukünftige Versuche zu achten.',
          lesson: 'Gefälschte Konten gemeinsam zu melden ist sehr effektiv. Plattformen nehmen Identitätsdiebstahl sehr ernst und handeln schnell.',
        },
        {
          id: 'end_b2',
          title: 'Langsame Reaktion',
          text: 'Sam erklärt es persönlich den Leuten, aber das gefälschte Konto bleibt tagelang online und verursacht mehr Peinlichkeit, bevor jemand anderes es schließlich meldet.',
          lesson: 'Gefälschte Konten direkt der Plattform zu melden ist viel schneller und effektiver als zu versuchen, es jedem einzeln zu erklären.',
        },
        {
          id: 'mid_c',
          text: 'Die Plattform erhält deinen Bericht und beginnt mit der Überprüfung des Kontos. Sam ist dankbar, dass du so schnell gehandelt hast.',
          choices: ['🏠 Auch einer Vertrauensperson erzählen, um Sam zu unterstützen', '⏳ Einfach warten, bis die Plattform handelt'],
        },
        {
          id: 'end_c1',
          title: 'Vollständiger Schutz',
          text: 'Mit Erwachsenenunterstützung und der Aktion der Plattform wird das Konto entfernt. Sam fühlt sich wirklich umsorgt. Die Schule wird darauf aufmerksam gemacht, auf weitere Versuche zu achten.',
          lesson: 'Der Plattform zu melden UND eine Vertrauensperson einzubeziehen bietet den bestmöglichen Schutz, wenn jemand imitiert wird.',
        },
        {
          id: 'end_c2',
          title: 'Schnelles Handeln',
          text: 'Die Plattform entfernt das Konto. Sam ist erleichtert. Ein großartiges Ergebnis durch schnelles, richtiges Handeln.',
          lesson: 'Gefälschte Konten sofort der Plattform zu melden ist genau die richtige Maßnahme. Schnelles Melden bedeutet schnellere Entfernung.',
        },
      ],
    },
    {
      id: 5, title: 'Online ausgeschlossen', emoji: '😔', topic: 'Online-Ausgrenzung',
      nodes: [
        {
          id: 'start',
          text: 'Du entdeckst, dass deine Freundesgruppe einen neuen Gruppenchat ohne dich erstellt hat. Sie planen eine Party, zu der du nicht eingeladen wurdest, und du kannst sehen, wie sie öffentlich darüber posten. Du fühlst dich verletzt und gedemütigt.',
          choices: ['📣 Öffentlich über den Schmerz und die Ausgrenzung posten', '💬 Eine wütende Nachricht an die ganze Gruppe senden', '🤝 Deinem engsten Freund in der Gruppe privat schreiben'],
        },
        {
          id: 'end_a',
          title: 'Öffentlicher Ausbruch',
          text: 'Dein öffentlicher Beitrag erregt Aufmerksamkeit, hauptsächlich Peinlichkeit. Die Freundesgruppe wird defensiv. Das Drama verbreitet sich über die ganze Schule online.',
          lesson: 'Öffentlich über Ausgrenzung zu klagen hilft selten und macht die Dinge meistens schlimmer. Direkte private Gespräche sind viel effektiver.',
        },
        {
          id: 'end_b',
          title: 'Gruppenchat-Drama',
          text: 'Der Gruppenchat wird unangenehm. Einige Freunde fühlen sich schuldig; andere werden ärgerlich. Nichts wird wirklich gelöst und Spannungen bleiben wochenlang.',
          lesson: 'Eine ganze Gruppe auf einmal zu konfrontieren versetzt alle in die Defensive. Persönliche Einzelgespräche funktionieren viel besser.',
        },
        {
          id: 'mid_c',
          text: 'Deine engste Freundin Mia gibt zu, dass sie sich unter Druck gesetzt fühlte, dich von jemand anderem in der Gruppe auszuschließen. Sie entschuldigt sich und sagt, sie möchte helfen, die Dinge zu verbessern.',
          choices: ['🤝 Mia bitten, für dich in der Gruppe zu sprechen', '🏫 Einer Vertrauensperson über den absichtlichen Ausschluss erzählen'],
        },
        {
          id: 'end_c1',
          title: 'Echte Verbündete',
          text: 'Mia spricht. Du wirst wieder eingeschlossen und die Person, die dich ausgeschlossen hat, wird zur Rede gestellt. Die Freundschaftsgruppe wird durch Ehrlichkeit stärker.',
          lesson: 'Wenn jemand bereit ist zu helfen, lass es zu. Echte Freunde setzen sich füreinander ein — auch wenn es unangenehm ist.',
        },
        {
          id: 'end_c2',
          title: 'Erwachsene Verbündete',
          text: 'Die Vertrauensperson hilft zu vermitteln. Alle reflektieren darüber, wie absichtlicher Ausschluss verletzt. Die Gruppendynamik verbessert sich.',
          lesson: 'Absichtliche soziale Ausgrenzung online ist eine Form von Mobbing. Eine Vertrauensperson kann helfen, ungesunde Gruppendynamiken zurückzusetzen.',
        },
      ],
    },
    {
      id: 6, title: 'Private Fotos', emoji: '📷', topic: 'Bildbezogener Druck',
      nodes: [
        {
          id: 'start',
          text: 'Jemand, mit dem du zwei Wochen online gechattet hast, sagt, er mag dich wirklich, und bittet um ein privates Foto. Er verspricht, zuerst eines zu senden, und sagt, du sollst es vor allen geheim halten.',
          choices: ['📸 Ein Foto senden — er scheint wirklich nett zu sein', '😐 Sagen, dass du dich nicht wohl fühlst, aber weiter mit ihm reden', '🚫 Ablehnen, aufhören mit ihm zu reden und sofort einer Vertrauensperson erzählen'],
        },
        {
          id: 'end_a',
          title: 'Die Falle',
          text: 'Er schickt nie etwas zurück. Stattdessen fordert er mehr Fotos oder er wird deine mit allen teilen. Du bist gefangen. Das nennt man Sextortion.',
          lesson: 'Private Fotos an jemanden zu senden, den du nur online kennst, ist äußerst gefährlich. Sextortion — Erpressung mit Bildern — ist eine Straftat. Wenn das passiert, erzähle es sofort einer Vertrauensperson.',
        },
        {
          id: 'mid_b',
          text: '„Wenn du keines sendest, vertraust du mir offensichtlich nicht." Er sagt, die ganze Sache ist vorbei, wenn du dich weigerst. Du fühlst dich verwirrt und unter Druck gesetzt.',
          choices: ['📸 Nachgeben und ein Foto senden, um den Frieden zu wahren', '🚫 Blockieren und sofort einer Vertrauensperson erzählen'],
        },
        {
          id: 'end_b1',
          title: 'Die Falle (Teil 2)',
          text: 'Du sendest das Foto und die Erpressung beginnt sofort. Du erkennst, dass diese Person das von der ersten Nachricht an geplant hat.',
          lesson: 'Gesunde Beziehungen beinhalten niemals Ultimaten. „Sende ein Foto oder wir sind fertig" ist ein großes Warnsignal für einen Täter. Erzähle es einer Vertrauensperson, wenn das jemals passiert.',
        },
        {
          id: 'end_b2',
          title: 'Gute Instinkte',
          text: 'Du blockierst das Konto und erzählst es einer Vertrauensperson. Sie hilft dabei, es der Plattform zu melden und erklärt, dass dies eine klassische Grooming-Taktik von Kriminellen ist.',
          lesson: 'Druck abzulehnen und eine Vertrauensperson einzubeziehen ist immer richtig. Du wurdest manipuliert — es zu erkennen und zu handeln erfordert echten Mut.',
        },
        {
          id: 'mid_c',
          text: 'Eine Vertrauensperson sieht sich das Gespräch an und ist sehr besorgt. Sie erklärt, dass dies wie Grooming aussieht — jemand, der vorgibt, freundlich zu sein, um dein Vertrauen zu gewinnen. Sie möchte es melden.',
          choices: ['📋 Den vollständigen Gesprächsverlauf teilen, um den Bericht zu stärken', '😳 Einige Details weglassen, weil du dich schämst'],
        },
        {
          id: 'end_c1',
          title: 'Vollständige Offenlegung',
          text: 'Mit vollständigen Beweisen ergreifen die Vertrauensperson und die Plattform starke Maßnahmen. Das Konto wird entfernt und den Behörden gemeldet, die ordnungsgemäß ermitteln können.',
          lesson: 'Der Vertrauensperson die ganze Geschichte zu erzählen — auch peinliche Teile — gibt ihr die beste Chance, dich zu schützen und den Kriminellen zu stoppen.',
        },
        {
          id: 'end_c2',
          title: 'Teilbericht',
          text: 'Einige Schutzmaßnahmen werden mit begrenzten Details getroffen. Du bist sicherer, aber das vollständige Bild hätte der Untersuchung viel mehr geholfen.',
          lesson: 'Du warst mutig, dich zu äußern. Alle Details zu teilen — auch peinliche — hilft Vertrauenspersonen, dich vollständig zu schützen und zu verhindern, dass es anderen passiert.',
        },
      ],
    },
    {
      id: 7, title: 'Der hilfreiche Fremde', emoji: '🕵️', topic: 'Online-Grooming',
      nodes: [
        {
          id: 'start',
          text: 'Jemand in einem Spielchat sagt, er ist 14 und schreibt dir seit einer Woche. Jetzt fragt er, wo du zur Schule gehst, deine Heimatadresse und wann du täglich allein nach Hause kommst. Was machst du?',
          choices: ['💬 Die Fragen beantworten — er wirkt wie ein normales Kind', '🤔 Vage Antworten geben und weiter chatten', '🚫 Aufhören zu antworten, ihn blockieren und sofort einer Vertrauensperson erzählen'],
        },
        {
          id: 'end_a',
          title: 'Zu viele Informationen',
          text: 'In der nächsten Woche kennt er deine Schule, deinen Zeitplan und deine Adresse. Er schlägt vor, sich persönlich zu treffen. Du erkennst, dass etwas sehr falsch ist.',
          lesson: 'Jemand, der online nach deiner Heimatadresse, Schulnamen oder täglichem Zeitplan fragt, ist ein ernstes Gefahrensignal — auch wenn er behauptet, in deinem Alter zu sein.',
        },
        {
          id: 'mid_b',
          text: 'Du gibst vage Antworten, aber er drängt immer mehr und fragt jetzt nach deiner Telefonnummer. Etwas fühlt sich komisch an, aber du willst nicht unhöflich wirken.',
          choices: ['📱 Deine Nummer geben — er war so nett', '🚫 Blockieren und einer Vertrauensperson erzählen'],
        },
        {
          id: 'end_b1',
          title: 'Zu viel verbunden',
          text: 'Er verwendet deine Nummer, um deine anderen sozialen Konten zu finden und deine Aktivität zu verfolgen. Eine Vertrauensperson erfährt davon und ist sehr alarmiert.',
          lesson: 'Du schuldest niemandem online deine Telefonnummer oder persönliche Kontaktdaten. Wer danach drängt, hat schlechte Absichten.',
        },
        {
          id: 'end_b2',
          title: 'Vertrautem Instinkt folgen',
          text: 'Eine Vertrauensperson bestätigt, dass das Konto wie ein gefälschtes Profil eines Erwachsenen aussieht. Sie hilft dir, es zu melden und deine Datenschutzeinstellungen gemeinsam zu überprüfen.',
          lesson: 'Auf ein Bauchgefühl zu hören und eine Vertrauensperson einzubeziehen ist immer die richtige Entscheidung, wenn sich etwas online komisch anfühlt.',
        },
        {
          id: 'mid_c',
          text: 'Eine Vertrauensperson überprüft das Gespräch und ist sehr besorgt. Sie erklärt, dass dies wahrscheinlich ein Grooming-Versuch ist — ein Erwachsener, der vorgibt, ein Kind zu sein, um dein Vertrauen zu gewinnen.',
          choices: ['📋 Das vollständige Gespräch für einen ordentlichen Bericht bereitstellen', '🤐 Darum bitten, es ruhig ohne Behörden zu handhaben'],
        },
        {
          id: 'end_c1',
          title: 'Geschützt und stark',
          text: 'Das Konto wird der Plattform und der Polizei gemeldet. Die Vertrauensperson hilft dir, deine Datenschutzeinstellungen zu verschärfen. Du hast möglicherweise dich selbst und andere Kinder geschützt.',
          lesson: 'Grooming ist eine ernste Straftat. Mit vollständigen Beweisen zu melden hilft den Behörden, es zu verhindern, dass es anderen Kindern passiert.',
        },
        {
          id: 'end_c2',
          title: 'Sicherer aber unvollständig',
          text: 'Das Konto wird blockiert, aber nicht formal gemeldet. Du bist sicherer, aber die Person kann einfach weitermachen und jemand anderen zum Ziel machen.',
          lesson: 'Grooming ist zu ernst, um es allein zu handhaben. Vertrauenspersonen zu überlassen, den Bericht ordnungsgemäß zu handhaben, schützt sowohl dich als auch potenzielle zukünftige Opfer.',
        },
      ],
    },
    {
      id: 8, title: 'Hass in den Kommentaren', emoji: '💬', topic: 'Hassrede',
      nodes: [
        {
          id: 'start',
          text: 'Du schaust dir einen Live-Gaming-Stream an und der Chat füllt sich mit rassistischen und hasserfüllten Kommentaren, die einen der Spieler angreifen. Die Kommentare kommen schnell. Der angegriffene Spieler sieht sichtlich aufgewühlt aus.',
          choices: ['😂 Über einige Kommentare lachen — es ist nur Internet-Humor', '😶 Ruhig zuschauen, ohne mitzumachen', '🚩 Die Hassrede melden und im Chat das Wort ergreifen'],
        },
        {
          id: 'end_a',
          title: 'Kein Witz',
          text: 'Du hast gelacht. Der Spieler verlässt den Stream in Tränen. Screenshots deines Kommentars tauchen später auf. Du schämst dich und wirst von anderen Zuschauern gemeldet.',
          lesson: 'Rassistische Beleidigungen und gezielte Hassrede sind niemals „nur Internet-Humor". Mitzulachen macht dich zum Teil des verursachten Schadens.',
        },
        {
          id: 'mid_b',
          text: 'Du bleibst still. Der angegriffene Spieler trennt sich vom Stream. Der Chat feiert, ihn vertrieben zu haben. Du bist unbehaglich über das, was du gerade gesehen hast.',
          choices: ['💬 Eine unterstützende Nachricht zur Verteidigung des Spielers posten', '❌ Den Stream schließen und versuchen, es zu vergessen'],
        },
        {
          id: 'end_b1',
          title: 'Eine Stimme ändert alles',
          text: 'Andere Zuschauer sehen deine Nachricht und beginnen ebenfalls, sich zu erheben. Die Stimmung im Chat ändert sich. Mehrere Personen melden die schlimmsten Täter und einige Konten werden gesperrt.',
          lesson: 'Wenn sich eine Person in einem feindlichen Chat aufstellt, kann sich die gesamte Dynamik ändern. Zuschauer haben echte Macht, die Stimmung eines Raums zu verändern.',
        },
        {
          id: 'end_b2',
          title: 'Der Preis des Schweigens',
          text: 'Du gehst weg, aber der Hass geht weiter. Der angegriffene Spieler streamt vielleicht nie wieder. Dein Schweigen fühlte sich sicherer an, hat aber zum Problem beigetragen.',
          lesson: 'Wegzugehen schützt dein eigenes Wohlbefinden, aber Hassrede zu melden, bevor du gehst, hilft zu verhindern, dass es weitergeht.',
        },
        {
          id: 'mid_c',
          text: 'Du meldest die schlimmsten Kommentare und postest eine unterstützende Nachricht. Mehrere andere Zuschauer folgen deinem Beispiel und melden ebenfalls. Der Spieler bemerkt es und fühlt sich weniger allein.',
          choices: ['📣 Auch mit einer Vertrauensperson oder einem Lehrer über das Gesehene sprechen', '✅ Du hast genug getan — lass den Rest der Plattform überlassen'],
        },
        {
          id: 'end_c1',
          title: 'Welleneffekt',
          text: 'Mehrere Berichte werden schnell umgesetzt. Das Bewusstsein für Hassrede in Gaming-Bereichen bei einer Vertrauensperson zu schärfen hilft, breiteren Wandel zu schaffen.',
          lesson: 'Hassrede zu melden UND Vertrauenspersonen zu sensibilisieren macht Plattformen für alle sicherer — jetzt und in der Zukunft.',
        },
        {
          id: 'end_c2',
          title: 'Guter Bürger',
          text: 'Berichte werden umgesetzt und einige Konten werden markiert. Der Spieler bedankt sich später bei dir, dass du im Chat das Wort ergriffen hast.',
          lesson: 'Hassrede zu melden UND im Moment das Wort zu ergreifen ist eine mächtige Kombination. Gut gemacht, dass du gehandelt hast!',
        },
      ],
    },
    {
      id: 9, title: 'Der Anprangerungs-Post', emoji: '📣', topic: 'Falsche Gerüchte online',
      nodes: [
        {
          id: 'start',
          text: 'Jemand aus der Schule postet völlig falsche Gerüchte über dich auf sozialen Medien. Es verbreitet sich schnell — Menschen teilen es und schreiben gemeine Kommentare. Du weißt nicht, wer es gestartet hat, und du bist sehr aufgewühlt.',
          choices: ['😡 Eine wütende Antwort posten, um dich öffentlich zu verteidigen', '💬 Jeden, den du kennst, anschreiben, um ihm die Wahrheit zu sagen', '📸 Alles sichern und sofort einer Vertrauensperson erzählen'],
        },
        {
          id: 'mid_a',
          text: 'Deine Antwort wird viral. Die Leute streiten darüber. Der ursprüngliche Poster weiß, dass er dich getroffen hat, und postet noch mehr und genießt die Reaktion.',
          choices: ['💢 Weiter kämpfen, um deinen Namen zu reinigen', '🗑️ Deine Antwort löschen und einen Schritt zurücktreten'],
        },
        {
          id: 'end_a1',
          title: 'Ihr Spiel spielen',
          text: 'Das Argument eskaliert schlimm. Lehrer werden einbezogen. Ihr beide habt schulische Konsequenzen — obwohl sie es angefangen haben.',
          lesson: 'Wütend auf falsche Gerüchte online zu reagieren füttert das Drama und setzt dich ebenfalls Konsequenzen aus. Gib ihnen nicht die Reaktion, die sie wollen.',
        },
        {
          id: 'end_a2',
          title: 'Zurücktreten',
          text: 'Deine Antwort zu löschen war klug. Das Drama legt sich langsam, aber der ursprüngliche Beitrag bleibt ohne echte Konsequenz für die Person, die ihn gepostet hat.',
          lesson: 'Einen reaktiven Beitrag zu löschen ist eine kluge Entscheidung. Paare es mit dem Melden des ursprünglichen Inhalts und dem Einbeziehen einer Vertrauensperson für eine echte Lösung.',
        },
        {
          id: 'end_b',
          title: 'Schadensbegrenzung',
          text: 'Du verbringst Stunden damit, Leute anzuschreiben. Einige glauben dir; andere nicht. Es ist erschöpfend und der Beitrag ist immer noch online und erreicht ständig neue Leute.',
          lesson: 'Jeden einzeln anzuschreiben ist anstrengend und oft unwirksam. Den Beitrag zu melden und eine Vertrauensperson einzubeziehen ist schneller und wirkungsvoller.',
        },
        {
          id: 'mid_c',
          text: 'Die Vertrauensperson hilft dir, den Beitrag wegen Belästigung zu melden. Er wird schnell entfernt. Gemeinsam findet ihr heraus, wer ihn wahrscheinlich gepostet hat.',
          choices: ['🤝 Einem vermittelten Gespräch mit der Person, die ihn gepostet hat, zustimmen', '🚫 Sie blockieren und jetzt weitermachen, da der Beitrag entfernt ist'],
        },
        {
          id: 'end_c1',
          title: 'Echte Lösung',
          text: 'Ein vermitteltes Gespräch mit Erwachsenenunterstützung deckt auf, was hinter dem Gerücht steckte. Die andere Person entschuldigt sich. Die Schule erstellt neue Richtlinien, um zukünftige Vorfälle zu verhindern.',
          lesson: 'Zu dokumentieren, zu melden und — wenn sicher — die Grundursache anzugehen führt zu den besten und dauerhaftesten Ergebnissen.',
        },
        {
          id: 'end_c2',
          title: 'Sicher und gelöst',
          text: 'Der Beitrag wird entfernt und du bist geschützt. Blockieren hält dich sicher in Zukunft. Ein starkes Ergebnis durch die richtigen Handlungen.',
          lesson: 'Einen schädlichen Beitrag schnell durch Erwachsenenunterstützung entfernen zu lassen ist ein großartiges Ergebnis. Blockieren für die Sicherheit ist eine kluge Grenze.',
        },
      ],
    },
    {
      id: 10, title: 'Passwortdruck', emoji: '🔐', topic: 'Digitaler Beziehungsmissbrauch',
      nodes: [
        {
          id: 'start',
          text: 'Du bist seit zwei Monaten in einer Beziehung. Dein Partner sagt: „Wenn du mich wirklich lieben und mir vertrauen würdest, würdest du mir dein Passwort geben, damit ich deine Nachrichten überprüfen kann." Du bist unbehaglich. Was machst du?',
          choices: ['🔑 Dein Passwort geben — du hast nichts zu verbergen', '🤥 Ein falsches Passwort geben, um den Streit zu beenden', '🗣️ Ruhig erklären, dass gesunde Beziehungen kein Passwort-Sharing benötigen'],
        },
        {
          id: 'end_a',
          title: 'Die Kontrolle beginnt',
          text: 'Dein Partner liest alle deine Nachrichten und verwendet deine Konten, um deinen Freunden zu schreiben. Er beschuldigt dich aufgrund falsch verstandener Gespräche. Die Kontrolle eskaliert.',
          lesson: 'Ein Partner, der dein Passwort fordert, ist eine Form von digitalem Beziehungsmissbrauch. Keine gesunde Beziehung erfordert dies. Sprich mit einer Vertrauensperson, wenn das dir passiert.',
        },
        {
          id: 'mid_b',
          text: 'Dein Partner merkt, dass das Passwort falsch ist, und wird sehr wütend und beschuldigt dich der Lüge. Der Druck verdoppelt sich und er fordert das echte.',
          choices: ['🔑 Nachgeben und das echte Passwort teilen', '🚪 Die Beziehung beenden und einer Vertrauensperson über den Druck erzählen'],
        },
        {
          id: 'end_b1',
          title: 'Gefangen',
          text: 'Sobald er Zugang hat, verwendet er es, um zu kontrollieren, mit wem du redest. Dieses Muster von Kontrollverhalten eskaliert immer weiter.',
          lesson: 'Digitalem Kontrollzwang nachzugeben löst das Problem selten — es lässt das Kontrollverhalten typischerweise eskalieren.',
        },
        {
          id: 'end_b2',
          title: 'Befreiung',
          text: 'Eine kontrollierende Beziehung zu verlassen ist schwer, aber richtig. Eine Vertrauensperson bestätigt, dass dies digitaler Missbrauch ist, und hilft dir zu verstehen, wie gesunde Beziehungsgrenzen aussehen.',
          lesson: 'Kontrollierendes Verhalten zu erkennen und zu verlassen — auch in einer Beziehung — erfordert echten Mut. Es ist immer die richtige Entscheidung für deine Sicherheit.',
        },
        {
          id: 'mid_c',
          text: 'Dein Partner reagiert schlecht und sagt, du liebst ihn offensichtlich nicht. Du hältst an deiner Position fest, aber er drängt weiter und der Druck baut sich auf.',
          choices: ['💪 An deiner Grenze festhalten und einer Vertrauensperson über den Druck erzählen', '😔 Schließlich dein Passwort teilen, um die Dinge zu beruhigen'],
        },
        {
          id: 'end_c1',
          title: 'Gesunde Grenzen',
          text: 'Eine Vertrauensperson bestätigt, dass Passwörter zu fordern Kontrolle ist, keine Liebe. Mit ihrer Unterstützung triffst du eine klare Entscheidung über die Beziehung nach eigenen Bedingungen.',
          lesson: 'Ein guter Partner respektiert deine Privatsphäre. Passwörter zu fordern ist ein rotes Warnsignal für eine kontrollierende Beziehung. Du verdienst eine Beziehung, die auf Vertrauen aufgebaut ist, nicht auf Überwachung.',
        },
        {
          id: 'end_c2',
          title: 'Vorübergehender Frieden',
          text: 'Du fühlst dich kurzfristig erleichtert, aber das Kontrollverhalten geht weiter — jetzt erwartet er dies zukünftig. Die Forderung nach mehr Zugang wächst.',
          lesson: 'Passwortdruck nachzugeben löst das Kontrollproblem nicht. Es setzt einen Präzedenzfall. Kontrollierendes Verhalten muss angesprochen, nicht berücksichtigt werden.',
        },
      ],
    },
  ],
}
