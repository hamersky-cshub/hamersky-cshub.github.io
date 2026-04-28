// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
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

export const contentAT = {
  subtitle:
    'Authentication helps students understand how we prove who we are online. This module supports educators in teaching strong sign-in habits, why extra verification matters, and how to keep accounts protected.',
  aim: 'To provide core knowledge of authentication and identity management principles for protecting personal digital assets.',
  objectives: [
    'To stress the importance of secure identity management.',
    'To introduce the concept of authentication and its different types.',
    'To develop students understanding of digital assets and access control awareness.',
    'To develop students’ knowledge and skills for creating secure usernames and passwords following recommendations and good practices.',
    'To build students skills for managing passwords securely.',
  ],
  outcomes: [
    'I can identify my personal digital assets and explain the risks they face in both physical and digital environments.',
    'I can explain what authentication is, why it is important, and list different types of authentications.',
    'I can distinguish between weak and strong usernames and passwords.',
    'I can demonstrate how to use a password manager to store passwords and justify why I made those choices.',
  ],
  parts: [
    {
      goal: 'Help students create strong, memorable secrets and understand why reuse is risky.',
      bundle: {
        filename: 'Authentication Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Image',
            name: 'Online Identity',
            filename: 'Image - Online Identity',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.1.2
            kind: 'Images',
            name: 'Examples of Personal Digital Assets',
            filename: 'Images - Examples of Personal Digital Assets',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.1.4
            kind: 'Worksheet',
            name: 'What Would Happen if ...?',
            filename: 'Worksheet - What Would Happen if',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.1.5
            kind: 'Worksheet',
            name: 'My Digital Assets',
            filename: 'Worksheet - My Digital Assets',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What is Digital Identity?',
          },
          {
            title: 'Understanding Digital Assets',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        title: 'What is Digital Identity?',
        supportText:
          'Use this video to help students understand that their digital identity is made up of the information and behaviours they share online. Pause to ask which parts of their digital identity they think they can control.',
        downloads: {
          video: {
            filename: 'What is Digital Identity',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Digital Identity - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand what authentication is, why it is important, and how it helps protect their digital identity and digital assets by controlling who is allowed access.',
      bundle: {
        filename: 'Authentication Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Images',
            name: 'Real-world Authentication Examples',
            filename: 'Images - Real-world Authentication Examples',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.2.3
            kind: 'Image',
            name: 'Logging Into a Digital System',
            filename: 'Image - Logging Into a Digital System',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.2.4
            kind: 'Worksheet',
            name: 'Authentication in Everday Life',
            filename: 'Worksheet - Authentication in Everday Life',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Authentication',
          },
          {
            title: 'Understanding Types of Authentication',
          },
          {
            title: 'Applying Authentication to Digital Assets',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'What is Authentication and Why is It Important?',
        supportText:
          'Use this video to introduce authentication as the everyday mechanism that guards students\' digital accounts. Pause to ask how they currently prove their identity on the apps they use most.',
        downloads: {
          video: {
            filename: 'What is Authentication and Why is It Important',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Authentication and Why is It Important - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand what authentication is, why it is important, and how it helps protect their digital identity and digital assets by controlling who is allowed access.',
      bundle: {
        filename: 'Authentication Part 3 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Image',
            name: 'Examples of Weak Passwords',
            filename: 'Image - Examples of Strong Passwords',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.3
            kind: 'Image',
            name: 'Examples of Strong Passwords',
            filename: 'Image - Check your Password',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.4
            kind: 'Cards',
            name: 'Create a Strong Password',
            filename: 'Cards - Create a Strong Password',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.5
            kind: 'Image',
            name: 'Check your Password',
            filename: 'Image - Two Different Types of Authentication Used Together',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.6
            kind: 'Worksheet',
            name: 'My Strong Password Rules',
            filename: 'Worksheet - My Strong Password Rules',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Passwords',
          },
          {
            title: 'Strong vs Weak Passwords',
          },
          {
            title: 'Creating Strong Passwords Safely',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Strong and Weak Passwords',
        supportText:
          'Use this video to show students the difference between passwords that protect accounts and passwords that put them at risk. Invite them to reflect on whether their own passwords meet the criteria for strength.',
        downloads: {
          video: {
            filename: 'Strong and Weak Passwords',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Strong and Weak Passwords - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand I can explain what two-factor authentication is and why managing many passwords is difficult, introduce the concept of a password manager, and explain how password managers help protect digital identities and digital assets when used responsibly with support from a trusted adult.',
      bundle: {
        filename: 'Authentication Part 4 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Schema',
            name: 'Set of Groups',
            filename: 'Schema - Set of Groups',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.2
            kind: 'Schema',
            name: 'Set of Money Coins',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.3
            kind: 'Schema',
            name: 'Set of Groups',
            filename: 'Schema - Set of Groups',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.4
            kind: 'Schema',
            name: 'PIN Cards',
            filename: 'Schema - PIN Cards',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.6
            kind: 'Images',
            name: 'How to Use a Password Manager',
            filename: 'Images - How to Use a Password Manager',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.7
            kind: 'Image',
            name: 'Password Manager Vault',
            filename: 'Image - Password Manager Vault',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.8
            kind: 'Image',
            name: 'Password Manager as a Digital Keyring',
            filename: 'Image - Password Manager as a Digital Keyring',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.9
            kind: 'Image',
            name: 'Steps of Saving Passwords',
            filename: 'Image - Steps of Saving Passwords',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.10
            kind: 'Worksheet',
            name: 'Password Problems and Solutions',
            filename: 'Worksheet - Password Problems and Solutions',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Passwords',
          },
          {
            title: 'Password Managers',
          },
          {
            title: 'Applying Password Managers Safely',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'What Is a Password Manager?',
        supportText:
          'Use this video to introduce password managers as a practical solution for creating and storing strong, unique passwords for every account. Pause to ask students if they have heard of or used one before.',
        downloads: {
          video: {
            filename: 'What Is a Password Manager',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What Is a Password Manager - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand how their choices and behaviour affect the security of their digital identity, and how acting responsibly helps protect their digital assets, themselves, and others in digital environments.',
      bundle: {
        filename: 'Authentication Part 5 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Image',
            name: 'Safe and Unsafe Online Behaviours',
            filename: 'Image - Safe and Unsafe Online Behaviours',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.5.3
            kind: 'Worksheet',
            name: 'Digital Identity and Authentication Scenarios',
            filename: 'Worksheet - Digital Identity and Authentication Scenarios',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.5.4
            kind: 'Worksheet',
            name: 'How I Protect My Digital Identity',
            filename: 'Worksheet - How I Protect My Digital Identity',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Protecting Digital Identity',
          },
          {
            title: 'Digital Identity and Authentication',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Protecting Your Digital Identity',
        supportText:
          'Use this video to bring together the strategies students have learned for keeping their digital identity safe. Encourage them to identify one specific habit they will change or start after watching.',
        downloads: {
          video: {
            filename: 'Protecting Your Digital Identity',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Protecting Your Digital Identity - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
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
      moduleId: 'dp',
      brand: 'DP',
      href: '/learning-hub/data-privacy/content',
      imageSrc: '/src/assets/images/learning-hub/04_data-privacy.png',
      description:
        'This module explores what personal information actually is, how it gets shared — often without us realising — and what kids can do to stay in control of their digital footprint. It builds awareness of privacy as an active, everyday responsibility.',
    },
    {
      moduleId: 'se',
      brand: 'SE',
      href: '/learning-hub/social-engineering/content',
      imageSrc: '/src/assets/images/learning-hub/05_social-engineering.png',
      description:
        'This module dives into the human side of cybercrime — how scammers use persuasion, false urgency, and deception to manipulate people into giving up information or access. Kids learn to pause, question, and verify before they act.',
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
  relatedModules: [
    { title: 'Digital Citizenship', description: 'Build a strong foundation of rights, responsibility, and respect online.', cta: 'Explore' },
    { title: 'Data Privacy', description: 'Explore how personal information is shared and ways to keep it safe.', cta: 'Explore' },
    { title: 'Social Engineering', description: 'Learn how scammers and manipulators use persuasion and false urgency.', cta: 'Explore' },
  ],
}

export const challengeAT = {
  title: 'Password Lab',
  subtitle:
    'Build a stronger password one round at a time. Each level adds a new ingredient to your password recipe!',
  howItWorks: 'How It Works',
  instruction:
    "Each round introduces a new password requirement. Meet all the current round's criteria to advance — and watch your password become harder and harder to crack!",
  tipLabel: 'Tip',
  tip: 'Check the sidebar on the right to track your round progress and get password tips!',
  yourPassword: 'Your Password',
  placeholder: 'Type your password here...',
  passwordInputAriaLabel: 'Password input',
  showPassword: 'Show password',
  strengthAriaLabel: 'Password strength',
  roundBadgeTemplate: 'Round {n} of {total}',
  criteriaTitle: 'Password Recipe — Round {n}:',
  criterionLength: 'Length > 10 characters',
  criterionNumber: 'Contains a number (0–9)',
  criterionSymbol: 'Contains a symbol (! @ # $ % ^ & * ?)',
  criterionUppercase: 'Contains an UPPERCASE letter',
  criterionLowercase: 'Contains a lowercase letter',
  strengthWeak: 'Weak',
  strengthOkay: 'Getting there',
  strengthStrong: 'Strong ✓',
  feedbackDefault: 'Start typing to see your password strength!',
  feedbackAllMet: '🎉 All requirements met! Hit Next Round to continue.',
  almostThereTemplate: 'Almost there! Try to {hint}.',
  hints: {
    length: 'make it longer (10+ characters)',
    number: 'add a number (0–9)',
    symbol: 'add a symbol like ! @ # $ %',
    upper: 'add an UPPERCASE letter',
    lower: 'add a lowercase letter',
  },
  keepGoing: 'Keep going!',
  nextRound: 'Next Round →',
  finish: 'Finish! 🏆',
  nextRoundAriaLabel: 'Proceed to next round',
  tryAgain: 'Try Again',
  tryAgainAriaLabel: 'Clear password and start over',
  completionTitle: 'Password Master!',
  completionText: "You've completed all 4 rounds and learned how to create unbreakable passwords!",
  completionRounds: '4 / 4 Rounds Completed',
  completionTips: 'Strong passwords protect your digital life. Use these skills everywhere you create an account!',
  startOver: 'Start Over',
  roundProgressTitle: 'Round Progress',
  roundProgressDesc: 'Complete all 4 rounds to master passwords',
  rounds: [
    { 
      icon: '🎮', 
      title: 'Create a password for your game account',  
      description: 'Just start with a good length — at least 10 characters!',                                         
      label: 'Round 1', 
      desc: 'Length only' 
    },
    { 
      icon: '📧', 
      title: 'Create a password for your email',          
      description: 'Great start! Now add a number to make it harder to crack.',                                        
      label: 'Round 2', 
      desc: '+ Number' 
    },
    { 
      icon: '📱', 
      title: 'Create a password for your social media',   
      description: 'Good progress! Now throw in a symbol to really mix things up.',                                   
      label: 'Round 3', 
      desc: '+ Symbol' 
    },
    { 
      icon: '📔', 
      title: 'Create a password for your secret diary',   
      description: 'Final round! Add both UPPERCASE and lowercase letters to complete the full recipe.',               
      label: 'Round 4', 
      desc: '+ Upper & lowercase' 
    },
  ],
  dosTitle: "✅ Do's",
  dos: [
    'Mix UPPER and lowercase letters',
    'Add numbers in the middle',
    'Use symbols like ! @ # $ %',
    'Make it 12+ characters long',
    'Use random combinations',
  ],
  dontsTitle: "❌ Don'ts",
  donts: [
    'Use your real name or birthday',
    'Use "123456" or simple patterns',
    'Repeat the same character',
    'Use common dictionary words',
    "Use your school or pet's name",
  ],
}
