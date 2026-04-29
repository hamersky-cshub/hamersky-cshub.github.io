// ---------------------------------------------------------------------------
// Digital Citizenship (DC) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Citizenship module.
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

export const contentDC = {
  subtitle:
    'Digital citizenship helps students navigate online spaces with confidence, empathy, and responsibility. This module supports educators in teaching safe habits, respectful communication, and thoughtful decision-making in digital environments.',
  aim: 'To provide an understanding of what digital citizenship is and how to follow its core principles.',
  objectives: [
    'To stress the importance of digital citizenship.',
    'To introduce the concept of digital citizenship and its principles of rights, responsibility and respect in digital environments.',
    'To develop students understanding of how to apply these principles of rights, responsibility and respect in digital environments - to be safe, savvy, and social.',
  ],
  outcomes: [
    'I can explain what digital citizenship is and why it is important.',
    'I can discuss the principles of rights, responsibility and respect in digital environments, including how to stay safe, act savvy and engage socially.',
  ],
  parts: [
    {
      goal: 'Help students understand what a digital environment is and positive aspects of this.',
      bundle: {
        filename: 'Digital Citizenship Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.1.1
            kind: 'Scenario Cards',
            name: 'Physical and Digital Worlds',
            filename: 'Scenario Cards - Physical and Digital Worlds',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What is a digital environment?',
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.1.2
        title: 'What Is a Digital Environment?',
        supportText:
          'Use this video to spark discussion about online spaces students already use, from learning platforms to games and messaging apps. Pause for quick reflections on where students spend time online.',
        downloads: {
          video: {
            filename: 'What Is a Digital Environment',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What Is a Digital Environment - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students understand what digital citizenship is and why it is important.',
      bundle: {
        filename: 'Digital Citizenship Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.2.1
            kind: 'Image',
            name: 'Responsible Citizen',
            filename: 'Worksheet A - Rights Responsibilities and Respect',
            ariaLabel: 'Download material',
          },
          {
            // ID: 1.2.2a
            kind: 'Worksheet A',
            name: 'Rights, Responsibilities and Respect',
            filename: 'Worksheet B - Rights Responsibilities and Respect',
            ariaLabel: 'Download material',
          },
          {
            // ID: 1.2.2b
            kind: 'Worksheet B',
            name: 'Rights, Responsibilities and Respect',
            filename: 'Image - Feeling Safe',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Digitel Citizenship',
          },
          {
            title: 'Rights, Respect and Responsibilities in Digital Environments',
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal:
        'Help students to know how to be safe in digital environments by thinking critically and acting responsibly with privacy settings.',
      bundle: {
        filename: 'Digital Citizenship Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.3.1
            kind: 'Image',
            name: 'Feeling Safe',
            filename: 'Image - Feeling Unsafe',
            ariaLabel: 'Download material',
          },
          {
            // ID: 1.3.2
            kind: 'Image',
            name: 'Feeling Unsafe',
            filename: 'Image - Application Privacy Settings',
            ariaLabel: 'Download material',
          },
          {
            // ID: 1.3.4
            kind: 'Image',
            name: 'Application Privacy Settings',
            filename: 'Image - Privacy Settings Strategy',
            ariaLabel: 'Download material',
          },
          {
            // ID: 1.3.5
            kind: 'Image',
            name: 'Privacy Settings Strategy',
            filename: 'Image - Digital Footprint',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Understanding the Connections Between the Physical and Digital Environment',
          },
          {
            title: 'Privacy Settings',
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.3.3
        title: 'What Are Privacy Settings?',
        supportText:
          'Use this video to introduce privacy settings as a practical tool students can control on the apps and devices they already own. Pause to ask which settings they have checked or changed before.',
        downloads: {
          video: {
            filename: 'What Are Privacy Settings',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What Are Privacy Settings - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students understand how being wise and resilient can help them to be savvy in digital environments.',
      bundle: {
        filename: 'Digital Citizenship Part 4 Package',
      },
      included: {
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Challenges in Digital Environments',
          },
          {
            title: 'Understanding How to Develop Resilience',
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.4.1
        title: 'Resilience in Digital Environments',
        supportText:
          'Use this video to explore how students can recover and adapt when things go wrong online, from account issues to unwanted contact. Pause to ask who students turn to for help in those situations.',
        downloads: {
          video: {
            filename: 'Resilience in Digital Environments',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Resilience in Digital Environments - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand how to act responsibly, showing respect for themselves and others when engaging socially in digital environments.',
      bundle: {
        filename: 'Digital Citizenship Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 1.5.1
            kind: 'Image',
            name: 'Digital Footprint',
            ariaLabel: 'Download material',
          },
          {
            // ID: 1.5.2
            kind: 'Scenario Cards',
            name: 'Good and Bad to Post',
            ariaLabel: 'Download material',
          },
          {
            // ID: 1.5.3
            kind: 'Scenario Cards',
            name: 'Social Media Posts',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Acting Responsibly in Digital Environments',
          },
          {
            title: 'Curating a Positive Digital Footprint',
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
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
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/images/learning-hub/06_malware.png',
      description:
        'This module helps kids recognise suspicious links, downloads, and software that can harm their devices. It builds practical awareness of how malware spreads and how simple, consistent habits can prevent it.',
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
  relatedModules: [
    { title: 'Attacker Perspective', 
      description: 'Understand how trust can be manipulated and learn to spot risky behavior.', 
      cta: 'Explore' 
    },
    { title: 'Authentication', 
      description: 'Teach students how to secure their accounts with strong, memorable routines.', 
      cta: 'Explore' 
    },
    { title: 'Data Privacy', 
      description: 'Explore how personal information is shared and ways to keep it safe.', 
      cta: 'Explore' 
    },
    { title: 'Social Engineering', 
      description: 'Learn how scammers and manipulators use persuasion and false urgency.', 
      cta: 'Explore' 
    },
    { title: 'Malware', 
      description: 'Help students recognize suspicious downloads and protect devices.', 
      cta: 'Explore' 
    },
    { title: 'Digital Abuse', 
      description: 'Identify harmful online behavior and learn how to get help safely.', 
      cta: 'Explore' 
    },
  ],
}

export const challengeDC = {
  title: 'GOOD or BAD Content to Post?',
  subtitle: 'Drag each post into the correct category. Learn what\'s safe to share online!',
  howItWorks: 'How It Works',
  instruction: 'Drag each post card into the zone where it belongs. On mobile, tap a card to select it, then tap a drop zone.',
  tip: 'Think about whether the information could identify you or put you in danger if a stranger saw it.',
  tipLabel: 'Tip',
  tryAgain: 'Try Again',
  correctCountLabel: 'Correct',
  postsToSort: 'Posts to Sort',
  safeToShare: 'Safe to Share',
  dragSafeHere: 'Drag safe posts here',
  doNotShare: 'Do NOT Share',
  dragUnsafeHere: 'Drag unsafe posts here',
  safeZoneAriaLabel: 'Safe to Share drop zone',
  unsafeZoneAriaLabel: 'Do NOT Share drop zone',
  correct: 'Correct!',
  tryOtherZone: 'Not quite — try the other zone!',
  winTitle: 'Perfect! You sorted them all correctly!',
  winMessage: 'You\'re a digital citizenship expert. Remember these lessons when posting online!',
  playAgain: 'Play Again',
  posts: [
    { text: 'My home address is 123 Main Street', 
      category: 'unsafe', 
      emoji: '🏠', 
      explanation: 'Your home address is private — never share it online! Strangers could use it to find where you live.' 
    },
    { text: 'I love playing football!', 
      category: 'safe', 
      emoji: '⚽', 
      explanation: 'Sharing hobbies is totally fine and a great way to connect with others!' 
    },
    { text: 'My password is Fluffy123', 
      category: 'unsafe', 
      emoji: '🔑', 
      explanation: 'Never share passwords with anyone online — not even your best friends!' 
    },
    { text: 'I got an A on my science test!', 
      category: 'safe', 
      emoji: '🎉', 
      explanation: 'Celebrating achievements is safe to share — way to go!' 
    },
    { text: 'My phone number is 555-0123', 
      category: 'unsafe',
      emoji: '📱', 
      explanation: 'Phone numbers are personal — keep them private so strangers can\'t contact you.' 
    },
    { text: 'I\'m home alone until 6 PM', 
      category: 'unsafe', 
      emoji: '🏡', 
      explanation: 'Never tell anyone online that you\'re home alone — it puts your safety at risk!' 
    },
    { text: 'Our school play is next Friday!', 
      category: 'safe', 
      emoji: '🎭', 
      explanation: 'School events are fine to share with friends!' 
    },
    { text: 'Check out my new drawing!', 
      category: 'safe', 
      emoji: '🎨', 
      explanation: 'Sharing creative work is a great way to express yourself!' 
    },
    { text: 'My mom\'s credit card number is...', 
      category: 'unsafe', 
      emoji: '💳', 
      explanation: 'Financial info like credit card numbers must always stay private!' 
    },
    { text: 'My favourite movie is Toy Story!', 
      category: 'safe', 
      emoji: '🎬', 
      explanation: 'Talking about movies you enjoy is totally safe and fun!' 
    },
    { text: 'My full name is Emily Rose Johnson', 
      category: 'unsafe', 
      emoji: '📛', 
      explanation: 'Sharing your full real name online can help strangers identify and track you.' 
    },
    { text: 'I just learned to ride a bike!', 
      category: 'safe', 
      emoji: '🚲', 
      explanation: 'Sharing milestones and new skills is a great thing to post!' 
    },
    { text: 'My school locker combo is 24-8-16', 
      category: 'unsafe', 
      emoji: '🔒', 
      explanation: 'Locker combinations are private — someone could break into your locker!' 
    },
    { text: 'We got a new puppy named Max!', 
      category: 'safe', 
      emoji: '🐶', 
      explanation: 'Sharing about your pets is safe and fun for everyone!' 
    },
    { text: 'I walk home alone through the park at 3:30', 
      category: 'unsafe', 
      emoji: '🚶', 
      explanation: 'Sharing your daily routine and route tells strangers exactly where to find you.' 
    },
  ],
}
