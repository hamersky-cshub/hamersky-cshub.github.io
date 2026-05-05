// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

/**
 * Part shape for content editors (translatable fields only).
 *
 * {
 *   goal:          string              // optional — pedagogical objective for this part
 *   bundle: {
 *     filename:    string              // required — display name shown on the download button
 *   }
 *   included: {
 *     material: {                      // optional — one entry per downloadable material
 *       kind:      string              // required — type label, e.g. "Worksheet", "Cards"
 *       name:      string              // required — display name of the material
 *       ariaLabel: string              // required — accessible label for the download button
 *     }
 *     activityPlan: {                  // optional — activity steps
 *       title:      string                  // required — step title
 *     }                                // ⚠️  Steps are numbered automatically (1, 2, 3…).
 *                                      //    ORDER MATTERS — first entry becomes Step 1.
 *   }
 *   featuredVideo: {                   // optional — omit entirely if this part has no video
 *     title:        string             // required — video title
 *     supportText:  string             // optional — teacher guidance text shown below the video
 *     downloads: {
 *       video:     { ariaLabel: string } // accessible label for video download button
 *       subtitles: { ariaLabel: string } // accessible label for subtitles download button
 *     }
 *   }
 * }
 */

export const contentMW = {
  subtitle:
    'Malware is harmful software that can slow devices, steal information, or cause damage. This module helps educators teach students how malware spreads and how to keep devices safe.',
  aim: 'To help students understand what malware is, how infections happen, and which habits reduce the risk of unsafe downloads, files, and installations.',
  objectives: [
    'Introduce what malware is and why it is risky.',
    'Identify common ways malware spreads.',
    'Build habits for safer downloads and updates.',
  ],
  outcomes: [
    'Explain the difference between safe and unsafe files or links.',
    'Recognize warning signs of suspicious downloads.',
    'Use trusted sources and ask for help when unsure.',
  ],
  teachersGuide: {
    ariaLabel: 'Download Teaching Guide',
    download: 'Malware Teaching Guide',
  },
  parts: [
    {
      goal: 'Help students understand the concept of malware.',
      bundle: {
        filename: 'Malware Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Image',
            name: 'Malicious + Software = Malware',
            filename: 'Image - Malicious + Software = Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.1.3
            kind: 'Worksheet',
            name: 'Related to Malware or Not?',
            filename: 'Worksheet - Related to Malware or Not',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Defining Malware',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.2
        title: 'What is Malware?',
        supportText:
          'Use this video to introduce malware as software designed to cause harm, giving students a foundation before they explore specific types in more depth. Pause to ask what they already know or have heard about computer viruses.',
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
      goal: 'Introduce common types of malwares.',
      bundle: {
        filename: 'Malware Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schema',
            name: 'Set of Coins',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.3
            kind: 'Schema',
            name: 'Knot Ties Board',
            filename: 'Sheet - Knot Ties Board',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.4
            kind: 'Sheet',
            name: 'Malware Properties',
            filename: 'Sheet - Malware Properties',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {

            title: 'Introduction',
          },
          {
            title: 'Tie the Knots for Malware Types',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Introducing Malware Types',
        supportText:
          'Use this video to give students a clear overview of the different categories of malware and what makes each one distinct. Pause for a brief discussion on which type they think poses the greatest risk and why.',
        downloads: {
          video: {
            filename: 'Introducing Malware Types',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Introducing Malware Types - Subtitles',
            ariaLabel: 'Download subtitles' },
        },
      },
    },
    {
      goal: 'Provide an overview of the characteristics of the malware to recognise and detect it.',
      bundle: {
        filename: 'Malware Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Worksheet',
            name: 'List of Indicators',
            filename: 'Worksheet - List of Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.2
            kind: 'Reading',
            name: 'Recognising Malware',
            filename: 'Reading - Recognising Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.3
            kind: 'Poster',
            name: 'Seven Indicators',
            filename: 'Poster - Seven Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.4
            kind: 'Table',
            name: 'Situation and Indicators',
            filename: 'Table - Situation and Indicators',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Investigating Malware',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal: 'Help students understand protection measures against malware.',
      bundle: {
        filename: 'Malware Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situation',
            name: 'Malware and Data Theft?',
            filename: 'Situation - Malware and Data Theft',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.2
            kind: 'Poster',
            name: 'DOs and DON\'Ts',
            filename: 'Poster - DOs and DON\'Ts',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.3
            kind: 'Worksheet',
            name: 'A Shield Against Malware',
            filename: 'Worksheet - A Shield Against Malware',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Analysing the Situation of Uncareful Behaviour',
          },
          {
            title: 'Learning Basic Protection Measures',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
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
      description:
        'This module helps kids develop responsible habits for communicating, sharing, and behaving respectfully in online spaces. It covers the core principles of ethical digital behaviour and sets a solid foundation for navigating the internet with confidence and care.',
    },
    {
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/images/learning-hub/02_attacker-perspective.png',
      description:
        'This module shows kids how online trust can be exploited and what risky behaviour looks like from the other side. Understanding how attacks happen is a key step in recognising and avoiding them in everyday digital life.',
    },
    {
      moduleId: 'at',
      brand: 'AT',
      href: '/learning-hub/authentication/content',
      imageSrc: '/images/learning-hub/03_authentication.png',
      description:
        'This module covers the essentials of protecting online accounts through strong, secure authentication habits. Kids learn practical routines around passwords and login safety that are easy to remember and genuinely effective.',
    },
    {
      moduleId: 'dp',
      brand: 'DP',
      href: '/learning-hub/data-privacy/content',
      imageSrc: '/images/learning-hub/04_data-privacy.png',
      description:
        'This module explores what personal information actually is, how it gets shared — often without us realising — and what kids can do to stay in control of their digital footprint. It builds awareness of privacy as an active, everyday responsibility.',
    },
    {
      moduleId: 'se',
      brand: 'SE',
      href: '/learning-hub/social-engineering/content',
      imageSrc: '/images/learning-hub/05_social-engineering.png',
      description:
        'This module dives into the human side of cybercrime — how scammers use persuasion, false urgency, and deception to manipulate people into giving up information or access. Kids learn to pause, question, and verify before they act.',
    },
    {
      moduleId: 'da',
      brand: 'DA',
      href: '/learning-hub/digital-abuse/content',
      imageSrc: '/images/learning-hub/07_digital-abuse.png',
      description:
        'This module addresses harmful online behaviour including cyberbullying, harassment, and coercion. Kids learn to identify when a situation has crossed a line and, importantly, how to seek help safely and confidently.',
    },
  ],
}

export const challengeMW = {
  title: 'Malware Detective',
  subtitle: 'You are a cybersecurity analyst. Inspect files on your virtual computer, scan your inbox, handle suspicious pop-ups, and review app permissions across 4 interactive levels. Can you keep the system clean?',
  howItWorks: 'How It Works',
  instruction: 'Work through 4 levels on your virtual computer. Each level presents a different cybersecurity scenario. Examine each case carefully and decide whether it is safe or a threat — then learn from the explanation.',
  tip: 'Malware often disguises itself as something harmless. Look for suspicious file extensions, misspelled domains, unnecessary permissions, and promises that seem too good to be true.',
  tipLabel: 'Tip',
  welcomeTitle: 'Welcome, Cyber Analyst!',
  welcomeDescription: 'Your computer has received suspicious files, emails, and pop-ups. Work through 4 levels to identify threats and protect the system.',
  levels: [
    '💻 Level 1 — File Scanner',
    '📧 Level 2 — Email Inbox',
    '🌐 Level 3 — Browser Pop-ups',
    '🔒 Level 4 — App Permissions',
  ],
  bootButton: 'Boot Up Computer →',
  scoreLabel: 'Score',
  correctLabel: 'Correct',
  threatsCaughtLabel: 'Threats Caught',
  keepFile: '✓ Keep File',
  quarantine: '🗑️ Quarantine',
  safeKeep: '✓ Safe / Keep',
  threatRemove: '⚠️ Threat / Remove',
  nextButton: 'Next →',
  malwareTypesTitle: 'Malware Types',
  malwareTypesSubtitle: 'Common types of malware to watch out for',
  malwareTypes: [
    '🦠 Virus — attaches to files and spreads',
    '🪱 Worm — self-replicates across networks',
    '🐴 Trojan — disguised as useful software',
    '🔐 Ransomware — locks files until you pay',
    '👁️ Spyware — secretly monitors activity',
    '📢 Adware — floods you with ads',
  ],
  securityGuideTitle: 'Security Guide',
  securityGuideSubtitle: 'Red flags to watch for',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs from unknown sources',
    '🚩 Misspelled or fake sender domains',
    '🚩 Fake virus alerts in your browser',
    '🚩 Apps requesting unneeded permissions',
    '🚩 Prizes, free money, or urgent threats',
    '🚩 Countdown timers creating panic',
  ],
  goldenRule: 'When in doubt, don\'t click. Contact IT support or a trusted adult instead.',
  levelCompleteTitle: 'Level Complete!',
  levelCompleteSubtitle: 'Keep going!',
  levelResultLabel: 'Level Result',
  correctDecisionsLabel: 'correct decisions',
  continueButton: 'Continue →',
  resultsTitle: 'System Secured! 🛡️',
  resultsDescription: 'Your cybersecurity report is ready.',
  accuracyLabel: 'Accuracy',
  threatsCaughtStat: 'Threats Caught',
  threatsMissedStat: 'Threats Missed',
  analystRankLabel: 'Analyst Rank',
  rankTrainee: '📘 Trainee',
  rankTraineeMsg: 'Keep learning! Review the Security Guide on the right and try again — you\'ll improve!',
  rankJunior: '🔍 Junior Analyst',
  rankJuniorMsg: 'Good effort! You\'re building solid malware detection skills. Practice makes perfect.',
  rankSenior: '🔐 Senior Analyst',
  rankSeniorMsg: 'Great job! You identified most threats. Keep sharpening your eye for subtle red flags.',
  rankElite: '🛡️ Elite Cyber Analyst',
  rankEliteMsg: 'Outstanding work! You caught nearly every threat. Your digital security instincts are excellent.',
  playAgain: 'Play Again',
  levelMeta: [
    { title: 'Level 1 of 4 — File Scanner', app: '📁 File Explorer', msg: '🔍 Scanning file…' },
    { title: 'Level 2 of 4 — Email Inbox', app: '📧 Mail', msg: '📧 Reading email…' },
    { title: 'Level 3 of 4 — Browser Pop-ups', app: '🌐 Browser', msg: '⚠️ Pop-up detected!' },
    { title: 'Level 4 of 4 — App Permissions', app: '⚙️ App Manager', msg: '⚙️ Reviewing permissions…' },
  ],
  files: [
    {
      icon: '💀', name: 'FreeMinecraft_Crack.exe', type: 'Executable (.exe)',
      source: 'Downloaded from: crack-games-free.ru', size: '14.2 MB', date: 'Today, 3:41 PM',
      description: 'An installer claiming to give you free Minecraft. Downloaded from an unofficial Russian website.',
      isThreat: true,
      explanation: 'Cracked game installers are a classic way to distribute trojans and ransomware. The .exe extension, suspicious domain, and "free crack" premise are major red flags.',
      tip: 'Always download software only from official, verified websites.',
    },
    {
      icon: '📄', name: 'History_Essay_Draft.docx', type: 'Word Document (.docx)',
      source: 'Created locally on this device', size: '48 KB', date: 'Yesterday, 7:15 PM',
      description: 'A Word document you created yourself for your history class.',
      isThreat: false,
      explanation: 'A small Word document you created locally is safe. It has a standard extension, tiny file size, and a local origin.',
      tip: 'Be cautious with .docx files received from strangers — they can contain malicious macros. But self-created files are fine.',
    },
    {
      icon: '⚡', name: 'speedup_your_pc.bat', type: 'Batch Script (.bat)',
      source: 'Received via Discord DM from: xX_h4ck3r_Xx', size: '3.1 KB', date: 'Today, 11:02 AM',
      description: 'A batch script sent via Discord by an unknown user, claiming to speed up your PC.',
      isThreat: true,
      explanation: '.bat files can execute any system command — including installing malware, opening backdoors, or deleting files. Never run scripts from strangers.',
      tip: 'Never run .bat or .vbs scripts from people you do not know and fully trust, even if they claim it is harmless.',
    },
    {
      icon: '🎵', name: 'Summer_Playlist.mp3', type: 'Audio File (.mp3)',
      source: 'Saved from Spotify desktop app', size: '8.7 MB', date: '3 days ago',
      description: 'A music file saved through the official Spotify app.',
      isThreat: false,
      explanation: 'This is a standard audio file from a trusted source. .mp3 files are not executable and pose no real risk when they come from legitimate apps.',
      tip: 'Standard media files (.mp3, .jpg, .mp4) are generally safe. Watch out only for files that disguise their extension, e.g. "song.mp3.exe".',
    },
    {
      icon: '🔧', name: 'RegFix_Pro_Setup.exe', type: 'Executable (.exe)',
      source: 'Delivered by browser pop-up advertisement', size: '2.1 MB', date: 'Today, 2:18 PM',
      description: 'A "registry repair tool" that was pushed by a pop-up ad claiming your PC is damaged.',
      isThreat: true,
      explanation: 'Fake "PC repair" tools delivered through pop-up ads are a common vehicle for adware and spyware. Real system tools are not advertised this way.',
      tip: 'Legitimate antivirus or repair software is never distributed through random browser pop-up ads.',
    },
    {
      icon: '📸', name: 'Birthday_Party_2024.jpg', type: 'Image File (.jpg)',
      source: 'Received via WhatsApp from: Grandma', size: '2.9 MB', date: 'Last week',
      description: 'A photo from your birthday party sent by your grandmother.',
      isThreat: false,
      explanation: 'A .jpg photo from a known family member is safe. Standard images from trusted contacts are not malware.',
      tip: 'Watch out for image files with double extensions like "photo.jpg.exe" — those hide the real, dangerous file type.',
    },
    {
      icon: '💎', name: 'FREE_ROBUX_GENERATOR.vbs', type: 'VBScript (.vbs)',
      source: 'Link from a YouTube comment', size: '1.8 KB', date: 'Today, 9:55 AM',
      description: 'A script from a YouTube comment claiming to generate unlimited Robux for Roblox.',
      isThreat: true,
      explanation: '"Free Robux" generators do not exist — they are 100% scams. .vbs scripts can run powerful system commands. This is a textbook malware distribution technique.',
      tip: 'Free in-game currency generators are always scams. They exist only to steal accounts, install malware, or both.',
    },
    {
      icon: '📊', name: 'Science_Project_Data.xlsx', type: 'Excel Spreadsheet (.xlsx)',
      source: 'Emailed from: johnson.s@westridge-school.edu', size: '156 KB', date: 'Yesterday, 10:33 AM',
      description: 'An Excel file with science project data sent by your verified school teacher.',
      isThreat: false,
      explanation: 'This spreadsheet is from a verified school teacher using an official school domain. The file type is appropriate and the file size is reasonable.',
      tip: 'Office files from unknown senders can contain malicious macros. Always verify the sender before opening attachments.',
    },
  ],
  emails: [
    {
      fromName: 'IT Security Team', fromAddr: 'security-alert@school-itsupport.xyz', avatarLetter: '🔐',
      subject: 'URGENT: Your school account has been hacked — reset password NOW',
      body: `Dear Student,

Our systems detected unauthorised access to your school account from an unknown location.

You must reset your password IMMEDIATELY by running the attached tool. Failure to act within 30 minutes will result in permanent account lockout.

— IT Security Department`,
      attachment: 'PasswordReset_Tool.exe',
      isThreat: true,
      explanation: 'Multiple red flags: a suspicious ".xyz" domain (not your school\'s real domain), extreme urgency, and a .exe attachment. Real IT departments never send password reset tools as executables — they link to a proper login page.',
      tip: 'If you get a security alert, contact IT directly using a phone number you already know — never trust contact info from the suspicious email itself.',
    },
    {
      fromName: 'Ms. Johnson', fromAddr: 'johnson.s@westridge-school.edu', avatarLetter: 'J',
      subject: 'Science Fair — project brief attached',
      body: `Hi class,

Please find attached the official project brief for the upcoming science fair. It covers the required sections, formatting guidelines, and the submission deadline.

Bring your completed poster and report to Room 14 by Friday.

Let me know if you have any questions!

Ms. Johnson
Science Department, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      isThreat: false,
      explanation: 'This is a legitimate school email. The sender uses a verified .edu school domain, the attachment is a standard Word document relevant to the email\'s purpose, and there are no requests for personal information or urgent threats.',
      tip: 'A .docx file from a known teacher at an official school domain is safe. Always verify the sender\'s full address before opening any attachment.',
    },
    {
      fromName: 'Lucas (Gaming Buddy)', fromAddr: 'lucas.gamer99@gmail.com', avatarLetter: 'L',
      subject: 'dude run this it gives you infinite coins in the game!!',
      body: `hey!!

found this sick script online that gives you unlimited coins in Clash Royale. just run the .bat file and it patches the game automatically lol

my brother tried it and it worked. don\'t tell anyone tho

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      isThreat: true,
      explanation: 'Even messages from real friends can spread malware — Lucas\'s account may be compromised, or he may not know the file is dangerous. A .bat script claiming to "hack" a game is a classic trojan delivery method. Running it could give an attacker full control of your system.',
      tip: 'Never run .bat or .vbs scripts from anyone, including friends. "Cheat" scripts for online games are almost always malware in disguise.',
    },
    {
      fromName: 'School Library', fromAddr: 'library@westridge-school.edu', avatarLetter: '📚',
      subject: 'Summer Reading Programme — your reading list',
      body: `Hi there,

Thank you for signing up for our Summer Reading Programme! Attached is your personalised reading list based on your age group and interests.

You can borrow any of these titles from the school library or request them via the student portal.

Happy reading!

Westridge School Library Team`,
      attachment: 'Summer_Reading_List_2024.pdf',
      isThreat: false,
      explanation: 'A legitimate email from the school library using the official .edu domain. The .pdf attachment is a reading list — completely appropriate for the context. No personal information is requested and no links are suspicious.',
      tip: 'PDF files from trusted, known senders are generally safe. Be more cautious with PDFs from unknown senders, as they can sometimes contain embedded scripts.',
    },
    {
      fromName: 'PRIZE ALERT CENTER', fromAddr: 'winner@free-prize-claim-2024.net', avatarLetter: '🏆',
      subject: 'YOU HAVE BEEN SELECTED — CLAIM YOUR iPHONE 15 NOW!!!',
      body: `CONGRATULATIONS!!!

You have been randomly selected as our lucky winner! To claim your iPhone 15 Pro Max, complete and return the attached claim form with your personal details and a $4.99 shipping fee.

Respond within 12 HOURS or your prize expires!

[CLAIM MY PRIZE →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      isThreat: true,
      explanation: 'A classic prize scam with an .html attachment — opening it loads a fake webpage designed to steal your personal information and payment details. Red flags: prize you never entered, extreme urgency, suspicious sender domain, and excessive caps.',
      tip: '.html email attachments that open "forms" are a common way to create convincing fake login or payment pages locally on your device, bypassing web filters.',
    },
  ],
  popups: [
    {
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SECURITY ALERT',
      icon: '🚨',
      message: '⚠️ VIRUS DETECTED! Your computer is infected with 47 viruses! Call 1-800-FIX-NOW immediately or your system will be permanently damaged!',
      subtext: 'Windows Defender has detected critical threats. Act now!',
      primaryBtnText: '📞 Call Now & Fix',
      isThreat: true,
      explanation: 'This is "scareware" — a fake virus alert designed to trick you into calling a scam phone number or installing fake antivirus software. Real security tools never display alerts inside a web browser pop-up.',
      tip: 'Close suspicious browser pop-ups using the X button. Never call phone numbers shown in browser pop-ups — those are always scam hotlines.',
    },
    {
      browserUrl: 'https://school-portal.edu',
      appName: 'School Portal',
      icon: '🍪',
      message: 'This website uses cookies to remember your login and improve your experience.',
      subtext: 'We only use essential cookies. No personal data is shared with third parties.',
      primaryBtnText: '✓ Accept Cookies',
      isThreat: false,
      explanation: 'A legitimate cookie consent notice from your school portal. It is transparent about cookie use and makes no unusual requests. Accepting essential cookies on a trusted site is fine.',
      tip: 'Cookie consent banners on trusted, familiar websites are required by law in many countries and are completely normal.',
    },
    {
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Congratulations!!!',
      icon: '🎉',
      message: 'YOU ARE THE 1,000,000th VISITOR! You have won a FREE PlayStation 5! Click below to claim your prize immediately!',
      subtext: '⏱️ Offer expires in: 00:59 — Claim before time runs out!',
      primaryBtnText: '🎮 Claim FREE PS5!',
      isThreat: true,
      explanation: 'A fake prize pop-up — no website randomly awards visitors a PlayStation 5. Clicking the button leads to a scam site asking for personal information or payment. The countdown timer is a pressure tactic.',
      tip: 'Countdown timers in pop-ups exist to stop you from thinking. Real prizes are never distributed through random browser pop-ups.',
    },
    {
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Allow YouTube to send you notifications about new videos from channels you subscribe to?',
      subtext: 'You can change this later in your browser settings.',
      primaryBtnText: 'Allow Notifications',
      isThreat: false,
      explanation: 'Although YouTube itself is legitimate, blocking browser notifications is the safer and cleaner default — even from trusted sites. Once granted, notification permissions can be misused or become spam.',
      tip: 'Think carefully before allowing browser notifications. Most websites do not need this permission to function properly.',
    },
    {
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Download Manager',
      icon: '⬇️',
      message: 'File ready: "Adobe_Photoshop_FULL_CRACK_2024.exe" (87 MB). Our AI verified this file as SAFE.',
      subtext: 'Powered by VirusSafe™ — scanned and approved. Click to download instantly.',
      primaryBtnText: '✓ Download Now',
      isThreat: true,
      explanation: 'Multiple red flags: suspicious ".cc" domain, cracked (pirated) software which is almost always bundled with malware, and a fake self-declared "SAFE" badge. The "VirusSafe™" label is invented to manipulate you.',
      tip: 'Cracked or pirated software almost always contains hidden malware. Only download software from the official publisher\'s website.',
    },
  ],
  permissions: [
    {
      appIcon: '🔦', 
      appName: 'Flashlight Pro',
      source: 'Publisher: Unknown Developer · ⭐ 2.1 · 500 downloads',
      description: 'A simple flashlight utility app.',
      permissions: [
        { 
          icon: '📷', 
          name: 'Camera', 
          reason: 'To activate the flash LED', 
          suspicious: false 
        },
        { 
          icon: '📍', 
          name: 'Precise Location (GPS)', 
          reason: 'No reason given', 
          suspicious: true 
        },
        { 
          icon: '📞', 
          name: 'Read Call Logs', 
          reason: 'No reason given', 
          suspicious: true 
        },
        { 
          icon: '💾', 
          name: 'Access All Files', 
          reason: 'No reason given', 
          suspicious: true 
        },
      ],
      isThreat: true,
      explanation: 'A flashlight app needs only camera access for the LED. Location, call logs, and full file access are completely unnecessary — these are hallmarks of spyware that silently harvests your data.',
      tip: 'Always ask yourself: "Why does this app need this permission?" A flashlight has no legitimate use for your GPS or contacts.',
    },
    {
      appIcon: '📷', 
      appName: 'School Photo Editor',
      source: 'Publisher: Creative Tools Ltd · ⭐ 4.7 · 2M+ downloads',
      description: 'Edit and enhance photos for school projects.',
      permissions: [
        { 
          icon: '📷', 
          name: 'Camera', 
          reason: 'To take new photos to edit', 
          suspicious: false 
        },
        { 
          icon: '🖼️', 
          name: 'Access Photos', 
          reason: 'To open your existing photos', 
          suspicious: false 
        },
        { 
          icon: '💾', 
          name: 'Save to Storage', 
          reason: 'To save your edited photos', 
          suspicious: false 
        },
      ],
      isThreat: false,
      explanation: 'All three permissions have clear, logical reasons directly related to photo editing. Camera access, photo library access, and saving files are exactly what a photo editor needs — nothing more.',
      tip: 'When every permission requested has a clear purpose tied to the app\'s main function, it is a sign of honest, well-designed software.',
    },
    {
      appIcon: '🎮', 
      appName: 'SuperRun Adventure',
      source: 'Publisher: FastGame Studio · ⭐ 4.1 · 800K downloads',
      description: 'A fast-paced side-scrolling platformer game.',
      permissions: [
        { 
          icon: '🔊', 
          name: 'Play Audio', 
          reason: 'For in-game sound effects', 
          suspicious: false 
        },
        { 
          icon: '📳', 
          name: 'Vibration', 
          reason: 'For haptic feedback in gameplay', 
          suspicious: false 
        },
        { 
          icon: '📍', 
          name: 'Precise GPS Location', 
          reason: 'No reason given', 
          suspicious: true 
        },
        { 
          icon: '📱', 
          name: 'Read Device ID & Info', 
          reason: 'No reason given', 
          suspicious: true 
        },
      ],
      isThreat: true,
      explanation: 'Audio and vibration are normal for a game. But GPS and device ID have no legitimate use in a platformer — these are used to track and identify you for advertising data brokers or to build a profile.',
      tip: 'Even apps with good ratings can request unnecessary permissions. Always deny permissions that have no clear link to the app\'s purpose.',
    },
    {
      appIcon: '📚', 
      appName: 'CsHub Learning',
      source: 'Publisher: CsHub Education · ⭐ 4.9 · 50K downloads',
      description: 'Interactive cybersecurity learning for students.',
      permissions: [
        { 
          icon: '🌐', 
          name: 'Internet Access', 
          reason: 'To load lessons and quizzes', 
          suspicious: false 
          
        },
        { 
          icon: '💾', 
          name: 'Local Storage', 
          reason: 'To save your progress offline', 
          suspicious: false 
          
        },
      ],
      isThreat: false,
      explanation: 'Internet access and local storage are both clearly necessary for an educational app that loads online content and saves your progress. Only what is needed is requested — a good privacy practice.',
      tip: 'Apps that request only the minimum permissions needed for their core function are examples of privacy-respecting design.',
    },
  ],
}
