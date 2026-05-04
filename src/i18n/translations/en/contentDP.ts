// ---------------------------------------------------------------------------
// Data Privacy (DP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Data Privacy module.
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

export const contentDP = {
  subtitle:
    'Data privacy helps students understand what information is personal, why it matters, and how to make careful choices when sharing online. This module supports educators in building safe, confident decision-making around personal data.',
  aim: 'To help students recognize what counts as personal data, understand why privacy matters, and make safer choices before sharing information online.',
  objectives: [
    'Define personal data and identify what is sensitive.',
    'Encourage thoughtful sharing and consent-based choices.',
    'Build awareness of privacy settings and safe defaults.',
  ],
  outcomes: [
    'Recognize common types of personal information.',
    'Explain how data can travel and be stored online.',
    'Apply simple privacy rules before sharing or posting.',
  ],
  teachersGuide: {
    ariaLabel: 'Download Teaching Guide',
    download: 'Data Privacy Teaching Guide',
  },
  parts: [
    {
      goal: 'Help students understand what personal data is, identify different types of sensitive information, and recognise why protecting it matters.',
      bundle: {
        filename: 'Data Privacy Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.1.3
            kind: 'Sorting Cards',
            name: 'Public or Private',
            filename: 'Sorting Cards - Public or Private',
            ariaLabel: 'Download material',
          },
          {
            // ID: 4.1.5
            kind: 'Worksheet',
            name: 'Reflection on Public vs Private Data',
            filename: 'Worksheet - Reflection on Public vs Private Data',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What Is Personal Data?',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.2
        title: 'What Is Private Data?',
        supportText:
          'Use this video to introduce the concept of private data and spark discussion about the types of information students share every day. Pause to ask students which details they consider private.',
        downloads: {
          video: {
            filename: 'What Is Private Data',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What Is Private Data - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students understand how and why data gets shared online, the importance of consent, and how to make thoughtful decisions before sharing personal information.',
      bundle: {
        filename: 'Data Privacy Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.2.2
            kind: 'Scenario Cards',
            name: 'Roleplay',
            filename: 'Scenario Cards - Roleplay',
            ariaLabel: 'Download material',
          },
          {
            // ID: 4.2.3
            kind: 'Image',
            name: 'Sharing Online: Safe vs Risky',
            filename: 'Image - Sharing Online: Safe vs Risky',
            ariaLabel: 'Download material',
          },
          {
            // ID: 4.2.4
            kind: 'Worksheet',
            name: 'Share or Don\'t Share?',
            filename: 'Worksheet - Share or Don\'t Share',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'How Is Data Shared?',
          },
          {
            title: 'Consent and Permissions',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal: 'Help students discover what a digital footprint is, understand how everyday online activities leave lasting traces, and consider the long-term impact of their online behaviour.',
      bundle: {
        filename: 'Data Privacy Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.3.3
            kind: 'Comic Story',
            name: 'A Day in the Life of Sam Online',
            filename: 'Comic Story - A Day in the Life of Sam Online',
            ariaLabel: 'Download material',
          },
          {
            // ID: 4.3.4
            kind: 'Worksheet',
            name: 'Track Sam\'s Footprint',
            filename: 'Worksheet - Track Sam\'s Footprint',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What Is a Digital Footprint?',
          },
          {
            title: 'Mapping Your Online Traces',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.3.1
        title: 'What Is a Digital Footprint?',
        supportText:
          'Use this video to help students visualise the trail of data they leave behind online. Encourage reflection on which of their recent activities might have created a footprint.',
        downloads: {
          video: {
            filename: 'What Is a Digital Footprint',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What Is a Digital Footprint - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students learn practical strategies for reviewing and managing their digital footprint, including how to adjust privacy settings and remove unwanted data.',
      bundle: {
        filename: 'Data Privacy Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Checklist',
            name: 'Digital Footprint Cleanup Checklist',
            filename: 'Checklist - Digital Footprint Cleanup Checklist',
            ariaLabel: 'Download material',
          },
          {
            // ID: 4.4.2
            kind: 'Worksheet',
            name: 'Privacy Settings Guide',
            filename: 'Worksheet - Privacy Settings Guide',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Reviewing Your Digital Footprint',
          },
          {
            title: 'Managing Privacy Settings',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.4.4
        title: 'Protecting Your Personal Data Online',
        supportText:
          'Use this video to introduce the concept of personal data and spark discussion about the types of information students share every day.',
        downloads: {
          video: {
            filename: 'Protecting Your Personal Data Online',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Protecting Your Personal Data Online - Subtitles',
            ariaLabel: 'Download subtitles',
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
}

export const challengeDP = {
  title: 'Digital Footprint Sorter',
  subtitle: 'Sort each activity into the right category. Learn which of your everyday actions leave traces online!',
  howItWorks: 'How It Works',
  instruction: 'Drag each activity card into the zone where it belongs. On mobile, tap a card to select it, then tap a drop zone.',
  tip: 'Think about whether the activity involves the internet, an app, or a website. If it does, it probably leaves a digital footprint!',
  tipLabel: 'Tip',
  tryAgain: 'Try Again',
  activitiesToSort: 'Activities to Sort',
  leavesFootprint: 'Leaves a Footprint',
  dragOnlineHere: 'Drag online activities here',
  noFootprint: 'No Footprint',
  dragOfflineHere: 'Drag offline activities here',
  correct: 'Correct! 🎯',
  tryOtherZone: 'Not quite — try the other zone!',
  winTitle: 'Amazing! You sorted them all!',
  winMessage: 'You now know which activities leave a digital footprint. Remember: every click, search, and post creates a trail online!',
  playAgain: 'Play Again',
  activities: [
    { 
      text: 'Posting a photo on Instagram', 
      category: 'footprint', 
      emoji: '📸', 
      explanation: 'Photos you share online stay on servers and can be found by anyone — even years later!' 
    },
    { 
      text: 'Reading a paper book at home', 
      category: 'no-footprint', 
      emoji: '📖', 
      explanation: 'No internet connection means no digital trace is created.' 
    },
    { 
      text: 'Searching for answers on Google', 
      category: 'footprint', 
      emoji: '🔍', 
      explanation: 'Search engines record what you look for and use it to show you personalised results.' 
    },
    { 
      text: 'Playing soccer outside', 
      category: 'no-footprint', 
      emoji: '⚽', 
      explanation: 'Outdoor activities without a phone or app leave no digital record.' 
    },
    { 
      text: 'Sending a message on WhatsApp', 
      category: 'footprint', 
      emoji: '💬', 
      explanation: 'Messages are stored on servers and create a permanent record of your conversations.' 
    },
    { 
      text: 'Drawing a picture with crayons', 
      category: 'no-footprint', 
      emoji: '🖍️', 
      explanation: 'Traditional art with physical materials doesn\'t create any online data.' 
    },
    { 
      text: 'Creating an account on a game website', 
      category: 'footprint', 
      emoji: '🎮', 
      explanation: 'Signing up stores your name, email, and every action you take on the site.' 
    },
    { 
      text: 'Riding your bike around the neighbourhood', 
      category: 'no-footprint', 
      emoji: '🚲', 
      explanation: 'Unless you use a tracking app, cycling is a purely offline activity.' 
    },
    { 
      text: 'Watching videos on YouTube', 
      category: 'footprint', 
      emoji: '▶️', 
      explanation: 'YouTube tracks every video you watch and uses it to recommend more content.' 
    },
    { 
      text: 'Writing in your paper diary', 
      category: 'no-footprint', 
      emoji: '📓', 
      explanation: 'A paper diary has no internet connection — your thoughts stay truly private.' 
    },
    { 
      text: 'Liking a friend\'s TikTok video', 
      category: 'footprint', 
      emoji: '❤️', 
      explanation: 'Every like you give is recorded and shapes your online profile and recommendations.' 
    },
    { 
      text: 'Playing a board game with family', 
      category: 'no-footprint', 
      emoji: '🎲', 
      explanation: 'Board games are offline fun — no data is created or stored anywhere.' 
    },
    { 
      text: 'Filling out an online quiz', 
      category: 'footprint', 
      emoji: '📝', 
      explanation: 'Websites collect every answer you type in and may share it with others.' 
    },
    { 
      text: 'Talking to friends at school', 
      category: 'no-footprint', 
      emoji: '🗣️', 
      explanation: 'Face-to-face conversations leave no digital trace at all.' 
    },
    { 
      text: 'Leaving a comment on a blog', 
      category: 'footprint', 
      emoji: '💻', 
      explanation: 'Comments are public, linked to your name, and stay on the website forever.' 
    },
  ],
}
