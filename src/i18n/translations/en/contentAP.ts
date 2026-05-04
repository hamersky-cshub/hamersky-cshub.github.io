// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
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

export const contentAP = {
  subtitle:
    'This module helps children understand how attackers might try to gain their trust and how to make safer choices. The attacker perspective module supports educators in teaching children about the tactics that adversaries use to gain trust and how to recognize and respond to these tactics.',
  aim: 'To provide an overview of the attacker perspective by helping learners recognize attacker techniques and understand the motives behind cyber-attacks.',
  objectives: [
    'To develop students understanding of attacker motivations, including psychological, social, and economic factors.',
    'To build students skills in recognizing common attacker techniques.',
  ],
  outcomes: [
    'I understand the attacker motives and can give examples related to psychological, social and economic factors.',
    'I can recognize attacker techniques in given scenarios.',
  ],
  teachersGuide: {
    ariaLabel: 'Download Teaching Guide',
    download: 'Attacker Perspective Teaching Guide',
  },
  parts: [
    {
      goal:
        'Help children gain knowledge of the concept of a trusted person and develop skills in identifying the circle of trusted persons.',
      bundle: {
        filename: 'Attacker Perspective Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Worksheet',
            name: 'Trusteees: People Around Me',
            filename: 'Worksheet - Trusteees People Around Me',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.1.2
            kind: 'Worksheet',
            name: 'Circles of Trust',
            filename: 'Worksheet - Circles of Trust',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Define the Circle of Trustees',
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal: 'Introduce the concept of an attacker and motivation from the attacker perspective.',
      bundle: {
        filename: 'Attacker Perspective Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Cards',
            name: 'Identify the Behaviour',
            filename: 'Cards - Identify the Behaviour',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.2.2
            kind: 'Cards',
            name: 'Recognise the Characters',
            filename: 'Cards - Recognise the Characters',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.2.4
            kind: 'Image',
            name: 'Attacker Motivations',
            filename: 'Image - Attacker Motivations',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.2.5
            kind: 'Worksheet',
            name: 'Attack Analysis',
            filename: 'Worksheet - Attack Analysis',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Define a Cybersecurity Attacker',
          },
          {
            title: "Understand the Attacker's Motivation",
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Who is Behind Cyber Attacks?',
        supportText:
          'Use this video to help students picture the real people and motives behind cyber attacks, moving beyond the stereotype of a lone hacker. Pause to ask who they imagine is responsible and why.',
        downloads: {
          video: {
            filename: 'Who is Behind Cyber Attacks',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Who is Behind Cyber Attacks - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Introduce the basic techniques (tactics) relevant to children that attackers use to achieve their goals.',
      bundle: {
        filename: 'Attacker Perspective Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Situation',
            name: 'Smishing and Impersonation',
            filename: 'Situation - Smishing and Impersonation',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.3.2
            kind: 'Image',
            name: 'Common Adversary Techniques',
            filename: 'Image - Common Adversary Techniques',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Understand Behavioural Patterns',
          },
          {
            title: 'Understand Attack Paths',
          },
          {
            title: 'Plenary - Summary and Informal Assessment',
          },
        ],
      },
    },
  ],
  otherModulesDivider: 'Explore Other Topics',
  otherModulesTitle: 'Other Modules',
  otherModulesSubtitle: 'Browse related modules and continue learning.',
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
    { title: 'Digital Citizenship', description: 'Build a strong foundation of rights, responsibility, and respect online.', cta: 'Explore' },
    { title: 'Social Engineering', description: 'Learn how scammers and manipulators use persuasion and false urgency.', cta: 'Explore' },
    { title: 'Digital Abuse', description: 'Identify harmful online behavior and learn how to get help safely.', cta: 'Explore' },
  ],
}

export const challengeAP = {
  title: "In Hacker's Mind",
  subtitle:
    "You are an ethical hacker scanning a social media profile. Click on anything that looks like a security flaw — but watch your lives!",
  howItWorks: 'How It Works',
  instruction:
    "Examine this social media profile as if you were a hacker looking for weak spots. Almost everything on the screen is clickable — think carefully, because clicking something that is not a real vulnerability costs you a life!",
  tipLabel: 'Tip',
  tip: "There are exactly 4 real vulnerabilities hidden among many innocent-looking elements. Not every clickable thing is a security flaw!",
  livesTitle: 'Lives',
  livesDesc: "3 wrong clicks and it's game over",
  vulnerabilitiesFoundTitle: '🔍 Vulnerabilities Found',
  vulnerabilitiesEmpty: 'None found yet…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 What Attackers Target',
  attackerTargets: [
    '🚩 Weak or exposed passwords',
    '🚩 HTTP instead of HTTPS',
    '🚩 Real-time location sharing',
    '🚩 Full birthdate visible publicly',
    '🚩 Security question answers exposed',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Active now',
    bioText: '16 · Gamer 🎮 · Manga Fan · Coffee ☕',
    aboutTitle: 'About',
    statsFriendsLabel: 'Friends',
    statsFollowingLabel: 'Following',
    bornText: 'Born June 14, 2008',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Pet Name: Whiskers',
    post1Time: '📍 Downtown Shopping Mall · Just now',
    post1Body: 'Just grabbed a coffee ☕ Anyone nearby? Come find me at the food court! 😄',
    post1Badge: '🛍️ Downtown Mall — checked in',
    post2Time: '2 hours ago',
    post2Body: 'Just got back from school! Having pizza with the family 🍕 Best evening ever!',
    actionLike: 'Like',
    actionComment: 'Comment',
    actionShare: 'Share',
  },
  vulnFoundSuffix: '/ 4 vulnerabilities found',
  tryAgain: 'Try Again',
  winTitle: 'Excellent Work!',
  winMsg: "You spotted all 4 vulnerabilities like a real security researcher. Now you know how attackers think!",
  loseTitle: 'Game Over!',
  loseMsgTemplate:
    "You ran out of lives! You found {found} out of {total} vulnerabilities. The missed ones are now highlighted in red.",
  attackerVoiceInitial: 'Interesting profile… let me scan for weaknesses.',
  attackerVoiceWin: '🏆 Impressive! You found all {total} weaknesses. You think like a hacker!',
  attackerVoiceLose: '💀 Too many mistakes. Study the profile more carefully next time.',
  attackerVoiceAlreadyTagged: 'Already tagged: {label}.',
  attackerVoiceCorrect: '🔓 Vulnerability found: {label}! {explain}',
  attackerVoiceWrong: 'Not a vulnerability — {explain}',
  hotspots: [
    { 
      id: 'http',      
      label: 'Unencrypted Connection (HTTP)',    
      explain: "This site uses HTTP instead of HTTPS. Everything you type here — including passwords — travels completely unencrypted and can be intercepted by anyone on the same network." 
    },
    { id: 'avatar',    
      label: 'Profile Picture',                  
      explain: "Profile photos are a standard part of social media. They're not a security risk on their own!" 
    },
    { 
      id: 'username',  
      label: 'Display Name / Username',          
      explain: "Displaying your name and @handle is completely normal on social platforms. Not a vulnerability." 
    },
    { 
      id: 'online',    
      label: 'Active Status',                    
      explain: "Showing when you're online is a common feature. It's a minor privacy consideration, but not a critical security vulnerability." 
    },
    { 
      id: 'bio',       
      label: 'Bio / Interests',                  
      explain: "Listing general hobbies like gaming or anime is fine. This doesn't expose sensitive account data." 
    },
    { 
      id: 'followers', 
      label: 'Follower / Friend Count',          
      explain: "Friend and follower counts are a normal social media feature. Not a security vulnerability!" 
    },
    { 
      id: 'birthday',  
      label: 'Full Birthday Exposed',            
      explain: "Exposing your full date of birth is dangerous! Attackers use birthdays to guess passwords (e.g. 'alex2008'), answer security questions, and bypass account recovery." 
    },
    { 
      id: 'email',     
      label: 'Email on Profile',                 
      explain: "Showing an email can attract spam, but compared to an exposed password or security answer, it's a relatively minor concern." 
    },
    { 
      id: 'petname',   
      label: 'Pet Name Exposed',                 
      explain: "Exposing your pet's name can be used by attackers to guess security answers or create more convincing social engineering attacks." 
    },
    { 
      id: 'location',  
      label: 'Real-time Location Broadcast',    
      explain: "This post reveals Alex's exact location right now! Anyone — including strangers and attackers — can see where Alex is at this moment. Real-time location sharing is a serious safety risk." 
    },
    { 
      id: 'post2',     
      label: 'Generic Post',                     
      explain: "Posting about everyday activities like having pizza is totally fine. It doesn't expose any sensitive security information!" 
    },
    { 
      id: 'like1',     
      label: 'Like Button',                      
      explain: "Liking posts is a completely normal and harmless social media interaction!" 
    },
    { 
      id: 'comment1',  
      label: 'Comment Button',                   
      explain: "Being able to comment is a standard social media feature. Not a vulnerability!" 
    },
    { 
      id: 'share1',    
      label: 'Share Button',                     
      explain: "Sharing posts is a basic social media feature. The button itself isn't a security issue!" 
    },
    { 
      id: 'like2',     
      label: 'Like Button',                      
      explain: "Liking posts is completely normal and harmless!" 
    },
    { 
      id: 'comment2',  
      label: 'Comment Button',                   
      explain: "Comments are a standard social media feature!" 
    },
  ],
}
