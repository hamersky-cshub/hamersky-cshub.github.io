// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
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

export const contentSE = {
  subtitle:
    'Social engineering is when someone uses pressure, tricks, or false trust to get information or access. This module helps educators teach students how to spot manipulation and respond safely.',
  aim: 'To help students recognize manipulation tactics, pause before acting, and choose safer responses when someone uses pressure, urgency, or false trust.',
  objectives: [
    'Explain how manipulation can happen online and in person.',
    'Identify common tactics like urgency, flattery, or authority.',
    'Practice safe responses and help-seeking behavior.',
  ],
  outcomes: [
    'Recognize pressure tactics used in messages or chats.',
    'Use a pause-and-check routine before acting.',
    'Know when and how to report suspicious behavior.',
  ],
  parts: [
    {
      goal: 'Help students understand what social engineering is by first recognising how people can be influenced or manipulated in everyday situations, and then connecting this understanding to digital environments and attacker behaviour.',
      bundle: {
        filename: 'Social Engineering Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.1.1
            kind: 'Image',
            name: 'Tricking People vs Hacking Systems',
            filename: 'Image - Tricking People vs Hacking Systems',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.1.2
            kind: 'Image',
            name: 'Examples of Social Engineering Messages',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.1.3
            kind: 'Situation Assessment',
            name: 'What Does an Attacker Want?',
            filename: 'Situation Assessment - What Does an Attacker Want',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.1.4
            kind: 'Worksheet',
            name: 'Understanding Social Engineering',
            filename: 'Worksheet - Understanding Social Engineering',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction \u2013 Influence and Persuasion in Everyday Life',
          },
          {
            title: 'Introducing the Concept of Social Engineering',
          },
          {
            title: 'What Do Attackers Want?',
          },
          {
            title: 'Social Engineering Online and Offline',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        title: 'What Is Social Engineering?',
        supportText:
          'Use this video to introduce social engineering as a technique that exploits human trust rather than technical systems. Pause to ask students if they can recall a situation where someone tried to trick them online.',
        downloads: {
          video: {
            filename: 'What Is Social Engineering',
            ariaLabel: 'Download video',
          },
          subtitles: {
            ilename: 'What Is Social Engineering - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students understand why attackers use social engineering by exploring the psychological and emotional levers that make people vulnerable, and practising how to think critically when they feel pressure.',
      bundle: {
        filename: 'Social Engineering Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Image',
            name: 'Human Decision-making vs Computer Decision-making',
            filename: 'Image - Human Decision-making vs Computer Decision-making',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.2.2
            kind: 'Scenario Cards',
            name: 'Emotional Manipulation Examples',
            filename: 'Scenario Cards - Emotional Manipulation Examples',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.2.3
            kind: 'Game Cards',
            name: 'Attacker Tactics',
            filename: 'Game Cards - Attacker Tactics',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.2.4
            kind: 'Worksheet',
            name: 'Why Social Engineering Works',
            filename: 'Worksheet - Why Social Engineering Works',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction \u2013 People vs Systems',
          },
          {
            title: 'Emotions Attackers Use',
          },
          {
            title: 'Thinking Like an Attacker',
          },
          {
            title: 'Everyday Contexts Where Social Engineering Works',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal: 'Help students recognise social engineering attempts by identifying common warning signs and understanding the different contexts in which these attacks may occur, both online and offline.',
      bundle: {
        filename: 'Social Engineering Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.3.1
            kind: 'Image',
            name: 'Examples of Social Engineering Messages',
            filename: 'Image - Examples of Social Engineering Messages',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.3.2
            kind: 'Scenario Cards',
            name: 'Social Engineering Situations',
            filename: 'Scenario Cards - Social Engineering Situations',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.3.3
            kind: 'Worksheet',
            name: 'Spot the Social Engineering',
            filename: 'Worksheet - Spot the Social Engineering',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction \u2013 Where Can Social Engineering Happen?',
          },
          {
            title: 'Common Warning Signs',
          },
          {
            title: 'Types of Social Engineering',
          },
          {
            title: 'Practising Recognition',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        title: 'Types of Social Engineering',
        supportText:
          'Use this video to help students recognise the different forms social engineering can take, from phishing emails to phone impersonation. Pause to discuss which type they think would be hardest to spot and why.',
        downloads: {
          video: {
            ilename: 'Types of Social Engineering',
            ariaLabel: 'Download video',
          },
          subtitles: {
            ilename: 'Types of Social Engineering - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students practise verifying information and choosing safe responses, and empower them to support others when they encounter social engineering attempts.',
      bundle: {
        filename: 'Social Engineering Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Scenario Cards',
            name: 'What Would You Do?',
            filename: 'Scenario Cards - What Would You Do',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.2
            kind: 'Checklist',
            name: 'Stop, Think, Check, Ask',
            filename: 'Checklist - Stop, Think, Check, Ask',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.3
            kind: 'Worksheet',
            name: 'Stop, Think, Check, Ask',
            filename: 'Worksheet - Stop, Think, Check, Ask',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.4
            kind: 'Role Cards',
            name: 'Target, Helper, Bystander',
            filename: 'Role Cards - Target, Helper, Bystander',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.5
            kind: 'Worksheet',
            name: 'Protecting Myself and Others',
            filename: 'Worksheet - Protecting Myself and Others',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction \u2013 From Recognising to Responding',
          },
          {
            title: 'A Simple Model for Safe Decisions',
          },
          {
            title: 'Practising Safe Responses',
          },
          {
            title: 'Protecting Others',
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
      imageSrc: '/src/assets/images/learning-hub/01_digital-citizenship.png',
      description:
        'This module helps kids develop responsible habits for communicating, sharing, and behaving respectfully in online spaces. It covers the core principles of ethical digital behaviour and sets a solid foundation for navigating the internet with confidence and care.',
    },
    {
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/src/assets/images/learning-hub/02_attacker-perspective.png',
      description:
        'This module shows kids how online trust can be exploited and what risky behaviour looks like from the other side. Understanding how attacks happen is a key step in recognising and avoiding them in everyday digital life.',
    },
    {
      moduleId: 'at',
      brand: 'AT',
      href: '/learning-hub/authentication/content',
      imageSrc: '/src/assets/images/learning-hub/03_authentication.png',
      description:
        'This module covers the essentials of protecting online accounts through strong, secure authentication habits. Kids learn practical routines around passwords and login safety that are easy to remember and genuinely effective.',
    },
    {
      moduleId: 'dp',
      brand: 'DP',
      href: '/learning-hub/data-privacy/content',
      imageSrc: '/src/assets/images/learning-hub/04_data-privacy.png',
      description:
        'This module explores what personal information actually is, how it gets shared — often without us realising — and what kids can do to stay in control of their digital footprint. It builds awareness of privacy as an active, everyday responsibility.',
    },
    {
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/src/assets/images/learning-hub/06_malware.png',
      description:
        'This module helps kids recognise suspicious links, downloads, and software that can harm their devices. It builds practical awareness of how malware spreads and how simple, consistent habits can prevent it.',
    },
    {
      moduleId: 'da',
      brand: 'DA',
      href: '/learning-hub/digital-abuse/content',
      imageSrc: '/src/assets/images/learning-hub/07_digital-abuse.png',
      description:
        'This module addresses harmful online behaviour including cyberbullying, harassment, and coercion. Kids learn to identify when a situation has crossed a line and, importantly, how to seek help safely and confidently.',
    },
  ],
}

export const challengeSE = {
  title: 'Phishing Case Files',
  subtitle: 'Become a Message Detective! Can you spot the scams and phishing tricks? Read each message and decide: Trust It or Ignore / Report.',
  howItWorks: 'How It Works',
  instruction: 'Read each message case file and decide if it is trustworthy or should be ignored/reported. Think about urgency, suspicious links, and requests for private information.',
  tip: 'If you are unsure about some message, check the Detective Notes with some tips about how to identify scams.',
  tipLabel: 'Tip',
  startTitle: 'Welcome, Detective!',
  startDescription: 'You\'re about to investigate 14 suspicious messages. Your job is to decide whether each message is trustworthy or should be ignored/reported. Good luck!',
  startButton: 'Start Investigation',
  caseProgress: 'Case Progress',
  trustButton: '👍 Trust',
  ignoreButton: '⚠️ Ignore / Report',
  nextCase: 'Next Case →',
  completedTitle: 'Investigation Complete!',
  completedDescription: 'Here\'s how you did:',
  casesIdentified: 'out of 14 cases correctly identified',
  detectiveRankLabel: 'Detective Rank',
  defaultRank: 'Rookie Detective',
  defaultRankMessage: 'Keep practicing to level up!',
  performanceSummary: 'Performance Summary',
  playAgain: 'Play Again',
  detectiveNotes: 'Detective Notes',
  detectiveTipsTitle: 'Tips to stay safe online',
  redFlags: [
    '🚩 Asks for passwords',
    '🚩 Fake email addresses',
    '🚩 Too-good-to-be-true prizes',
    '🚩 Urgent deadlines & threats',
    '🚩 Suspicious downloads',
    '🚩 Emotional manipulation',
  ],
  proTip: 'Pro Tip: When in doubt, ask a trusted adult before clicking links or sharing info!',
  caseLabel: 'Case',
  ofLabel: 'of',
  fromLabel: 'From',
  subjectLabel: 'Subject',
  messageLabel: 'Message',
  rankRookie: '🥉 Rookie Detective',
  rankRookieMsg: 'You\'re just starting your investigation. Keep practicing to spot the red flags!',
  rankJunior: '🥈 Junior Detective',
  rankJuniorMsg: 'You\'re getting better at spotting suspicious messages. Well done!',
  rankSenior: '🥇 Senior Detective',
  rankSeniorMsg: 'You\'re great at identifying phishing and scams. Nice work!',
  rankMaster: '👑 Master Detective',
  rankMasterMsg: 'You\'re a phishing expert! You caught almost all the tricks. Outstanding!',
  correctLabel: 'Correct',
  incorrectLabel: 'Incorrect',
  scenarios: [
    {
      id: 1,
      type: 'email',
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'You Won $1,000!',
      message: 'Congratulations! You\'ve been selected as our lucky winner! Click here to claim your $1,000 prize. Just enter your parent\'s bank details.',
      correct: 'ignore-report',
      explanation: 'This is a classic scam! Real prizes don\'t ask for bank details. The email address looks fake too.',
      tactic: 'Greed & Urgency',
    },
    {
      id: 2,
      type: 'chat',
      from: 'BestFriend_2024',
      message: 'Hey! Check out this cool website I found: www.free-vbucks-4real.com — you can get unlimited V-Bucks!',
      correct: 'ignore-report',
      explanation: 'Even if it looks like it\'s from a friend, their account might be hacked. Free V-Bucks sites are always scams.',
      tactic: 'Trust Exploitation',
    },
    {
      id: 3,
      type: 'email',
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Homework reminder',
      message: 'Just a reminder that your science project is due next Friday. Please check the class portal for details.',
      correct: 'trust',
      explanation: 'This is a normal school email. It comes from a real school domain, doesn\'t ask for personal info, and has no suspicious links.',
      tactic: 'None — Legitimate',
    },
    {
      id: 4,
      type: 'chat',
      from: 'CoolGamer99',
      message: 'I\'m a game developer! Send me your login and I\'ll add 1000 coins to your account for free!',
      correct: 'ignore-report',
      explanation: 'Real game developers never ask for your password. This person is trying to steal your account!',
      tactic: 'Authority Impersonation',
    },
    {
      id: 5,
      type: 'email',
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'URGENT: Your account will be deleted!',
      message: 'Your account will be permanently deleted in 24 hours unless you verify your password NOW!',
      correct: 'ignore-report',
      explanation: 'Notice the fake domain \'g00gle\' (with zeros). Real companies never threaten to delete your account via email or ask for passwords.',
      tactic: 'Fear & Urgency',
    },
    {
      id: 6,
      type: 'chat',
      from: 'Mom 💕',
      message: 'Hey sweetie, can you pick up some milk on the way home? Love you!',
      correct: 'trust',
      explanation: 'This is a normal message from a family member. No suspicious links or requests for personal information.',
      tactic: 'None — Legitimate',
    },
    {
      id: 7,
      type: 'email',
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Help children in need!',
      message: 'Please donate now! Children are suffering! Send your parent\'s credit card number to help immediately!',
      correct: 'ignore-report',
      explanation: 'Real charities never ask for credit card numbers via email. This is using emotions to trick you.',
      tactic: 'Emotional Manipulation',
    },
    {
      id: 8,
      type: 'chat',
      from: 'Unknown User',
      message: 'Hi! I\'m new at your school. What\'s your home address so I can come over and hang out?',
      correct: 'ignore-report',
      explanation: 'Never share your address with strangers online, even if they claim to know you. A real new student would ask at school.',
      tactic: 'Social Pretexting',
    },
    {
      id: 9,
      type: 'email',
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Shared document locked',
      message: 'Someone tried to open your file. Verify your login now to keep access to your cloud documents.',
      correct: 'ignore-report',
      explanation: 'This message creates panic and pushes you to log in through a suspicious link. Open the real app directly instead.',
      tactic: 'Fear & Urgency',
    },
    {
      id: 10,
      type: 'chat',
      from: 'School Office',
      message: 'Reminder: school closes early at 1 PM tomorrow for staff training. See the notice in the parent portal.',
      correct: 'trust',
      explanation: 'This is a normal school update and doesn\'t ask for passwords, money, or private account info.',
      tactic: 'None — Legitimate',
    },
    {
      id: 11,
      type: 'email',
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Receipt problem: confirm card now',
      message: 'Your last purchase failed. Confirm your full card number and CVV in 10 minutes to avoid account suspension.',
      correct: 'ignore-report',
      explanation: 'Real app stores never ask for full card details and CVV by email. Urgent deadlines are a common scam trick.',
      tactic: 'Financial Theft',
    },
    {
      id: 12,
      type: 'email',
      from: 'School Library <library@your-school.edu>',
      subject: 'Reading club meeting tomorrow',
      message: 'Reminder: Reading Club meets tomorrow at lunch in Room 12. Bring your current book if you can.',
      correct: 'trust',
      explanation: 'This is a normal school reminder from a trusted domain, with no request for passwords or private account details.',
      tactic: 'None — Legitimate',
    },
    {
      id: 13,
      type: 'chat',
      from: 'Coach Rivera',
      message: 'Practice starts 15 minutes later today because of weather. Bring your water bottle.',
      correct: 'trust',
      explanation: 'This is a routine schedule update and does not ask for sensitive information or suspicious actions.',
      tactic: 'None — Legitimate',
    },
    {
      id: 14,
      type: 'email',
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'New grades posted',
      message: 'New grades are now available in the student portal. Open the portal from your usual school bookmark to review them.',
      correct: 'trust',
      explanation: 'This message directs you to your usual school portal and does not ask for passwords, payments, or private data in the message.',
      tactic: 'None — Legitimate',
    },
  ],
}
