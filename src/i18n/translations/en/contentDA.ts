// ---------------------------------------------------------------------------
// Digital Abuse (DA) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Abuse module.
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

export const contentDA = {
  subtitle:
    'Digital abuse includes harmful behavior online such as threats, harassment, or unwanted contact. This module helps educators teach students to recognize unsafe behavior, set boundaries, and find support.',
  aim: 'To help students recognize harmful online behavior, understand that boundaries matter, and know the steps they can take to get support and stay safe.',
  objectives: [
    'Define digital abuse in age-appropriate, supportive terms.',
    'Recognize warning signs and unhealthy online behaviors.',
    'Practice safe help-seeking and reporting steps.',
  ],
  outcomes: [
    'Identify behaviors that cross boundaries or cause harm.',
    'Use simple safety steps like blocking or reporting.',
    'Know trusted adults and support channels to reach out to.',
  ],
  relatedModules: [
    {
      title: 'Digital Citizenship',
      description: 'Build a strong foundation of rights, responsibility, and respect online.',
      cta: 'Explore',
    },
    {
      title: 'Attacker Perspective',
      description: 'Understand how trust can be manipulated and learn to spot risky behavior.',
      cta: 'Explore',
    },
    {
      title: 'Social Engineering',
      description: 'Learn how scammers and manipulators use persuasion and false urgency.',
      cta: 'Explore',
    },
  ],
  parts: [
    {
      title: 'Misinformation',
      goal: 'Help students understand what misinformation is, what motivates people to do it and how to recognise it.',
      bundle: {
        filename: 'Digital Abuse Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Game',
            name: 'Truth Detectives',
            filename: 'Game - Truth Detectives',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What is Misinformation?',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'What is Misinformation?',
        supportText:
          'Use this video to introduce misinformation as false or inaccurate content that can spread online without harmful intent. Pause to ask students if they have ever shared something that later turned out not to be true.',
        downloads: {
          video: {
            filename: 'What is Misinformation',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Misinformation - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'Disinformation',
      goal: 'Help students understand what disinformation is, the motivations behind it and how to recognise it.',
      bundle: {
        filename: 'Digital Abuse Part 2 Package',
      },
      included: {
        materials: [],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What is Disinformation?',
          },
          {
            title: 'Algorithms',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'What is Disinformation?',
        supportText:
          'Use this video to help students distinguish disinformation — deliberately deceptive content — from misinformation. Pause to discuss how intent changes the way we evaluate and respond to false information.',
        downloads: {
          video: {
            filename: 'What is Disinformation',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Disinformation - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'Cyber Bullying',
      goal: 'Help students understand what cyber bullying is, the motivations behind it and how to recognise it.',
      bundle: {
        filename: 'Digital Abuse Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Game',
            name: 'Act it Out!',
            filename: 'Game - Act it Out',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What is Cyber Bullying?',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'What is Cyber Bullying?',
        supportText:
          'Use this video to help students define cyber bullying and understand how online behaviour can cause real emotional harm. Pause to discuss what makes a bystander\'s response important in these situations.',
        downloads: {
          video: {
            filename: 'What is Cyber Bullying',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Cyber Bullying - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'Stranger Danger',
      goal: 'Help students understand what stranger danger is, the motivations behind it and how to recognise it.',
      bundle: {
        filename: 'Digital Abuse Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Game',
            name: 'Real or Fake?',
            filename: 'Game - Real or Fake',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      title: 'Influencers',
      goal: 'Help students understand what influencers are and what motivates them.',
      bundle: {
        filename: 'Digital Abuse Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Scenarios',
            name: 'Examples of Influencers Posts That Are Potentially Harmful and Not Harmful',
            filename: 'Scenarios - Examples of Influencers Posts That Are Potentially Harmful and Not Harmful',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Social Media Influencers',
          },
          {
            title: 'Plenary \u2013 Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Social Media Influencers',
        supportText:
          'Use this video to explore how influencers shape opinions and behaviours on social media, and the responsibilities that come with that reach. Pause to ask students which influencers they follow and what makes them trustworthy.',
        downloads: {
          video: {
            filename: 'Social Media Influencers',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Social Media Influencers - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'How Can We Deal With the Behaviour of Digital Abusers?',
      goal: 'Help students to know what they can do to protect themselves from digital abuse.',
      bundle: {
        filename: 'Digital Abuse Part 6 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Activity',
            name: 'Safety Superhero Suggestion Pack',
            filename: 'Activity - Safety Superhero Suggestion Pack',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
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
  ],
}

export const challengeDA = {
  title: 'Real Talk Stories',
  subtitle:
    'Make choices. See consequences. Learn how to handle cyberbullying, online pressure, and digital abuse.',
  howItWorks: 'How It Works',
  instruction:
    'Work through 10 real-life digital abuse scenarios. At each key moment you choose what to do — and different choices lead to genuinely different outcomes. Earn up to 3 stars per story by finding the safest path. If you get a tough ending, retry the story to discover a better route!',
  tip: 'Each story branches in multiple directions. There is always at least one path that leads to a safe, positive outcome — but you have to make the right calls to find it!',
  tipLabel: 'Tip',
  yourBestScore: 'Your Best Score',
  bestResultDesc: 'Best result from each story',
  storiesTitle: '📖 Stories',
  watchOutTitle: '🚩 Watch Out For',
  watchOutItems: [
    '🚩 Anyone asking for private photos',
    '🚩 Password demands from partners',
    '🚩 Strangers asking your address or school',
    '🚩 "Keep this a secret" pressure',
    '🚩 Mean posts, screenshots, fake profiles',
  ],
  welcomeDesc: 'Make your choices carefully — different paths lead to very different outcomes.',
  startStory: 'Start Story →',
  whatWeLearned: '💡 What we learned:',
  tryDifferentPath: '↩ Try a Different Path',
  nextStory: 'Next Story →',
  seeFinalScore: '🎉 See Final Score',
  allStoriesComplete: 'All Stories Complete!',
  finalScoreDesc: "Here's how you did across all 10 stories:",
  playAgain: 'Play Again',
  rankChampion: '🏆 Safety Champion',
  rankChampionMsg: 'Outstanding! You found the safest path in nearly every situation.',
  rankDefender: '🛡️ Digital Defender',
  rankDefenderMsg: 'Great work! You handled most situations wisely and safely.',
  rankNavigator: '📚 Learning Navigator',
  rankNavigatorMsg: 'Good effort! Replay some stories to find the better paths and earn more stars.',
  rankBeginning: '🌱 Getting Started',
  rankBeginningMsg: 'Keep trying different paths — every replay teaches you something new!',
  stories: [
    {
      id: 1, title: 'The Meme Problem', emoji: '😟', topic: 'Cyberbullying',
      nodes: [
        { 
          id: 'start',  
          text: 'You open your phone and see a group chat. Someone named Jake posted a mean meme about your classmate Emma, making fun of her appearance. 23 people already liked it. What do you do?', 
          choices: ['👍 Like the meme to fit in with everyone', '📲 Scroll past and ignore it', '💬 Send Emma a private supportive message'] 
        },
        { 
          id: 'end_a',  
          title: 'Part of the Problem',  
          text: 'You liked the meme. Jake posts more, even meaner ones. Emma sees your name in the likes and is devastated. A teacher finds out and contacts your parents.', 
          lesson: 'Liking mean content is a form of cyberbullying. Your "like" is never invisible — the target always sees who supported it.' 
        },
        { 
          id: 'mid_b',  
          text: 'You scroll past, but the posts keep coming. The next day, Emma sits alone at lunch looking very upset. The bullying has gotten worse.', 
          choices: ['😶 Keep ignoring it — not your problem', '🏫 Tell a teacher what has been happening'] 
        },
        { 
          id: 'end_b1', 
          title: 'The Silent Witness',   
          text: 'Weeks pass. Emma misses school. You feel guilty but say nothing. The bullying continues unchallenged.', 
          lesson: 'Ignoring bullying does not make it stop. Bystanders have real power to help — staying silent is still a choice.' 
        },
        { 
          id: 'end_b2', 
          title: 'The Brave Reporter',   
          text: 'The teacher acts immediately. Jake and his parents are called in. Emma gets support from the school counsellor. The bullying stops.', 
          lesson: 'Telling a trusted adult is one of the most powerful things you can do. It is not snitching — it is protecting someone who needs help.' 
        },
        { 
          id: 'mid_c',  
          text: "Emma replies: \"Thank you so much… it really hurt. I didn't know what to do.\" She is grateful but scared. The posts are still up.", 
          choices: ['📢 Help Emma report every post to the platform', '🤷 Tell Emma to just ignore it, it will blow over'] 
        },
        { 
          id: 'end_c1', 
          title: 'The Digital Defender', 
          text: 'You and Emma report every post together. Most are removed within a day. You also visit the school counsellor, who supports Emma further. The bullying stops.', 
          lesson: 'Reaching out AND taking action — reporting online and involving trusted adults — is the gold standard response to cyberbullying.' },
        { 
          id: 'end_c2', 
          title: 'Kind but Not Enough',  
          text: 'Emma tries to ignore it but the posts keep coming. Your kind message helped, but without reporting or adult support the bullying continues.', 
          lesson: 'Kindness is a great start, but reporting bullying and involving trusted adults is what actually makes it stop.' 
        },
      ],
    },
    {
      id: 2, title: 'Screenshot Trap', emoji: '📸', topic: 'Privacy & Betrayal',
      nodes: [
        { 
          id: 'start',  
          text: 'You sent a private message to your friend Zoe about having a crush on someone. Zoe screenshotted it and shared it in a big group chat without asking you. Everyone is commenting. What do you do?', 
          choices: ['😡 Post an angry public callout about what Zoe did', '📱 Confront Zoe privately in a DM', '📸 Save the evidence and tell a trusted adult'] 
        },
        { 
          id: 'end_a',  
          title: 'Fire Meets Fire',      
          text: 'You post publicly calling Zoe out. Zoe fights back. Dozens of people join the drama. Now it is a full online war and you both look bad.', 
          lesson: 'Public call-outs online almost always escalate things. They rarely bring the resolution you are hoping for.' 
        },
        { 
          id: 'mid_b',  
          text: 'You DM Zoe: "Why did you share that? It was private!" Zoe says "It was just a joke, chill out." But she has not deleted it.', 
          choices: ['😔 Accept her "apology" and move on quietly', '🗣️ Firmly ask her to delete it and involve a trusted adult'] 
        },
        { 
          id: 'end_b1', 
          title: 'Swept Under the Rug', 
          text: 'Zoe does not really understand why it was wrong. The screenshot stays up. You feel hurt but nothing is truly resolved.', 
          lesson: '"Just a joke" is never an excuse for sharing private messages. Accepting bad behaviour without consequence means it may happen again.' 
        },
        { 
          id: 'end_b2', 
          title: 'Real Resolution',      
          text: 'Under pressure and with adult involvement, Zoe deletes it and has a real conversation about consent and privacy. Your friendship recovers on healthier terms.', 
          lesson: 'Standing up for your privacy calmly but firmly — with adult support — leads to genuine change, not just temporary calm.' 
        },
        { 
          id: 'mid_c',  
          text: "A trusted adult helps report it to the platform and contacts Zoe's parents. The screenshot is removed. Zoe apologises.", 
          choices: ['🤝 Accept her apology and work to rebuild the friendship', '🚫 Block Zoe — you do not want her as a friend anymore'] },
        { 
          id: 'end_c1', 
          title: 'Trust Rebuilt',        
          text: 'With adult support and a genuine apology, the situation resolves properly. Zoe understands consent. You both move forward.', 
          lesson: 'Documenting, reporting, and giving space for a real apology turns a painful experience into a genuine learning moment.' 
        },
        { 
          id: 'end_c2', 
          title: 'Safe Distance',        
          text: 'The screenshot is gone and you are protected. Blocking is a valid boundary when trust is broken. A safe outcome through the right actions.', 
          lesson: 'Protecting yourself is always valid. Involving adults to handle the situation was exactly the right move.' 
        },
      ],
    },
    {
      id: 3, title: 'Gaming Rage', emoji: '🎮', topic: 'Online Gaming Harassment',
      nodes: [
        { 
          id: 'start',  
          text: 'You are playing your favourite online game and another player starts spamming hateful messages — calling you names and making threats. Others in the lobby are watching. What do you do?', 
          choices: ['💢 Fight back with insults of your own', '🙉 Ignore the messages and keep playing', '🔇 Mute, screenshot, and report the player in-game'] 
        },
        { 
          id: 'end_a',  
          title: 'Both Banned',          
          text: 'You argue back. Both of you get reported. The system flags your account. You both get banned — the toxic player reported you first.', 
          lesson: 'Responding to hate with hate puts you at risk too. Game platforms often ban both sides of toxic exchanges.' 
        },
        { 
          id: 'mid_b',  
          text: 'You ignore them, but they escalate. Now they have found your public game profile and are posting abuse there for others to see.', 
          choices: ['🗑️ Delete your profile to make them stop', '📢 Report to the platform and tell a trusted adult'] },
        { 
          id: 'end_b1', 
          title: 'Running Away',         
          text: 'Deleting your profile stops this harasser for now. But they move on to the next target. No consequence, no real change.', 
          lesson: 'Protecting yourself matters, but reporting ensures the harasser faces consequences and cannot keep doing it to others.' 
        },
        { 
          id: 'end_b2', 
          title: 'Player Banned',        
          text: "The platform investigates and bans the harasser's account. A trusted adult helps you review your privacy settings and feel supported.", 
          lesson: 'Reporting gaming harassment works. Platforms take these reports seriously, especially when screenshots are saved as evidence.' 
        },
        { 
          id: 'mid_c',  
          text: 'You have muted and reported the player with screenshots. The report is under review. But you are still shaken by what was said.', 
          choices: ['🗣️ Tell a trusted adult how the experience made you feel', '😶 Keep it to yourself — you already handled it'] 
        },
        { 
          id: 'end_c1', 
          title: 'Report and Support',   
          text: 'A trusted adult validates your feelings and helps you adjust privacy settings. The platform confirms the player was banned.', 
          lesson: 'Reporting is important, but so is processing how online abuse makes you feel. Trusted adults can help with both.' 
        },
        { 
          id: 'end_c2', 
          title: 'Half the Solution',    
          text: 'The player gets banned but you carry the experience alone. You feel safer online but still unsettled.', 
          lesson: 'You handled the technical side perfectly! Remember: talking to someone about how online abuse feels is just as important.' 
        },
      ],
    },
    {
      id: 4, title: 'Fake Profile', emoji: '👤', topic: 'Impersonation',
      nodes: [
        { 
          id: 'start',  
          text: "You spot a fake social media account using your friend Sam's photos. It is posting embarrassing things and adding Sam's classmates. Sam does not know yet. What do you do?", 
          choices: ['💬 Message the fake account and tell them to stop', '📞 Tell Sam immediately so they know', '🚩 Report the fake account AND tell Sam straight away'] 
        },
        { 
          id: 'end_a',  
          title: 'Do Not Feed the Troll', 
          text: 'The fake account blocks you and speeds up posting. Now it starts targeting you too. Engaging directly made things worse.', 
          lesson: 'Contacting a fake or abusive account directly almost always makes things worse. Report to the platform instead.' 
        },
        { 
          id: 'mid_b',  
          text: 'Sam is shocked and upset. Sam wants to message everyone to explain it is fake, but is not sure what else to do. The account is still live.', 
          choices: ['📢 Help Sam report the account to the platform', '🗣️ Suggest Sam just tell people in person it is fake'] 
        },
        { 
          id: 'end_b1', 
          title: 'Teamwork Wins',        
          text: 'You and Sam report the account together. The platform removes it within hours. Sam also tells a trusted adult who helps monitor for future attempts.', 
          lesson: 'Reporting fake accounts together is highly effective. Platforms take impersonation very seriously and act quickly.' 
        },
        { 
          id: 'end_b2', 
          title: 'Slow Response',        
          text: 'Sam explains to people in person, but the fake account stays up for days causing more embarrassment before someone else finally reports it.', 
          lesson: 'Reporting fake accounts to the platform directly is much faster and more effective than trying to explain to everyone individually.' 
        },
        { 
          id: 'mid_c',  
          text: 'The platform receives your report and begins reviewing the account. Sam is grateful you acted so quickly.', 
          choices: ['🏠 Also tell a trusted adult to help Sam feel supported', '⏳ Just wait for the platform to act'] 
        },
        { 
          id: 'end_c1', 
          title: 'Full Protection',      
          text: "With adult support and the platform's action, the account is removed. Sam feels genuinely cared for. The school is alerted to watch for further attempts.", 
          lesson: 'Reporting to the platform AND involving a trusted adult gives the best possible protection when someone is being impersonated.' 
        },
        { 
          id: 'end_c2', 
          title: 'Swift Action',         
          text: 'The platform removes the account. Sam is relieved. A great outcome through quick, correct action.', 
          lesson: 'Reporting fake accounts immediately to the platform is exactly the right move. Quick reporting means faster removal.' 
        },
      ],
    },
    {
      id: 5, title: 'Left Out Online', emoji: '😔', topic: 'Online Exclusion',
      nodes: [
        { 
          id: 'start',  
          text: 'You discover your friend group created a new group chat without you. They are planning a party you were not invited to, and you can see them posting about it publicly. You feel hurt and humiliated.', 
          choices: ['📣 Post publicly about being hurt and left out', '💬 Send an angry message to the whole group', '🤝 Message your closest friend in the group privately'] 
        },
        { 
          id: 'end_a',  
          title: 'Public Meltdown',      
          text: 'Your public post attracts attention but mostly embarrassment. The friend group gets defensive. The drama spreads across the whole school online.', 
          lesson: 'Venting publicly about being excluded rarely helps and usually makes things worse. Direct private conversations are far more effective.' 
        },
        { 
          id: 'end_b',  
          title: 'Group Chat Drama',     
          text: 'The group chat gets awkward. Some friends feel guilty; others get annoyed. Nothing is really resolved and tensions remain for weeks.', 
          lesson: 'Confronting a whole group at once puts everyone on the defensive. One-to-one private conversations work much better.' 
        },
        { 
          id: 'mid_c',  
          text: 'Your closest friend Mia admits she felt pressured to leave you out by someone else in the group. She apologises and says she wants to help fix things.', 
          choices: ['🤝 Ask Mia to speak up for you to the group', '🏫 Tell a trusted adult about the deliberate exclusion'] 
        },
        { 
          id: 'end_c1', 
          title: 'True Ally',            
          text: 'Mia speaks up. You are included again and the person who was excluding you is called out. The friendship group gets stronger through honesty.', 
          lesson: 'When someone is willing to help, let them. Real friends speak up for each other — even when it is uncomfortable.' },
        { 
          id: 'end_c2', 
          title: 'Adult Ally',           
          text: 'The trusted adult helps mediate. Everyone reflects on how deliberate exclusion hurts. The group dynamic shifts for the better.', 
          lesson: 'Deliberate social exclusion online is a form of bullying. A trusted adult can help reset unhealthy group dynamics.' 
        },
      ],
    },
    {
      id: 6, title: 'Private Photos', emoji: '📷', topic: 'Image-Based Pressure',
      nodes: [
        { 
          id: 'start',  
          text: 'Someone you have been chatting with online for two weeks says they really like you and asks for a private photo. They promise to send one first and say to keep it secret from everyone.', 
          choices: ['📸 Send a photo — they seem genuinely nice', '😐 Say you are not comfortable but keep talking to them', '🚫 Refuse, stop talking to them, and tell a trusted adult now'] 
        },
        { 
          id: 'end_a',  
          title: 'The Trap',             
          text: 'They never send anything back. Instead they demand more photos or they will share yours with everyone. You are trapped. This is called sextortion.', 
          lesson: 'Sending private photos to someone you only know online is extremely dangerous. Sextortion — blackmailing with images — is a crime. If this happens, tell a trusted adult immediately.' 
        },
        { 
          id: 'mid_b',  
          text: '"If you do not send one, you obviously do not trust me." They say the whole thing is over if you refuse. You feel confused and pressured.', 
          choices: ['📸 Give in and send a photo to keep the peace', '🚫 Block them and tell a trusted adult immediately'] 
        },
        { 
          id: 'end_b1', 
          title: 'The Trap (Part 2)',    
          text: 'You send the photo and the blackmail starts immediately. You realise this person planned this from the very first message.', 
          lesson: 'Healthy relationships never involve ultimatums. "Send a photo or we are done" is a major warning sign of a predator. Tell a trusted adult if this ever happens.' 
        },
        { 
          id: 'end_b2', 
          title: 'Good Instincts',       
          text: 'You block the account and tell a trusted adult. They help report it to the platform and explain this is a classic grooming tactic used by criminals.', 
          lesson: 'Refusing pressure and involving a trusted adult is always right. You were being manipulated — recognising it and acting takes real courage.' 
        },
        { 
          id: 'mid_c',  
          text: 'A trusted adult looks at the conversation and is very concerned. They explain this looks like grooming — someone pretending to be friendly to gain your trust. They want to report it.', 
          choices: ['📋 Share the full conversation history to strengthen the report', '😳 Leave out some details because you feel embarrassed'] 
        },
        { 
          id: 'end_c1', 
          title: 'Full Disclosure',      
          text: 'With full evidence, the adult and platform take strong action. The account is removed and reported to authorities who can investigate properly.', 
          lesson: 'Sharing the full story with a trusted adult — even embarrassing parts — gives them the best chance to protect you and stop the criminal.' 
        },
        { 
          id: 'end_c2', 
          title: 'Partial Report',       
          text: 'Some protective action is taken with limited details. You are safer, but the full picture would have helped the investigation much more.', 
          lesson: 'You were brave to speak up. Sharing all the details — even embarrassing ones — helps adults fully protect you and stop it happening to others.' 
        },
      ],
    },
    {
      id: 7, title: 'The Helpful Stranger', emoji: '🕵️', topic: 'Online Grooming',
      nodes: [
        { 
          id: 'start',  
          text: 'Someone in a game chat says they are 14 and has been messaging you for a week. They now ask where you go to school, your home address, and what time you get home alone each day. What do you do?', 
          choices: ['💬 Answer the questions — they seem like a normal kid', '🤔 Give vague answers and keep chatting', '🚫 Stop responding, block them, and tell a trusted adult now'] 
        },
        { 
          id: 'end_a',  
          title: 'Too Much Information', 
          text: 'Over the next week they know your school, your schedule, and your address. They suggest meeting up in person. You realise something is very wrong.', 
          lesson: 'Anyone asking for your home address, school name, or daily schedule online is a serious danger signal — even if they claim to be your age.' 
        },
        { 
          id: 'mid_b',  
          text: 'You give vague answers but they keep pushing harder and now ask for your phone number. Something feels off, but you do not want to seem rude.', 
          choices: ['📱 Give your number — they have been so kind', '🚫 Block them and tell a trusted adult'] 
        },
        { 
          id: 'end_b1', 
          title: 'Connected Too Much',   
          text: 'They use your number to find your other social accounts and track your activity. A trusted adult finds out and is very alarmed.', 
          lesson: 'You do not owe anyone your phone number or personal contact details online. Anyone pushing for them has bad intentions.' 
        },
        { 
          id: 'end_b2', 
          title: 'Trusted Instinct',     
          text: 'A trusted adult confirms the account looks like a fake profile used by an adult. They help you report it and review your privacy settings together.', 
          lesson: 'Acting on a gut feeling and involving a trusted adult is always the right move when something feels off online.' 
        },
        { 
          id: 'mid_c',  
          text: 'A trusted adult reviews the conversation and is very worried. They explain this is likely a grooming attempt — an adult pretending to be a child to gain your trust.', 
          choices: ['📋 Provide the full conversation for a proper report', '🤐 Ask to handle it quietly without involving authorities'] 
        },
        { 
          id: 'end_c1', 
          title: 'Protected and Strong', 
          text: 'The account is reported to the platform and to the police. The adult helps you tighten your privacy settings. You may have protected yourself and other children.', 
          lesson: 'Grooming is a serious crime. Reporting with full evidence helps authorities stop it from happening to other children.' 
        },
        { 
          id: 'end_c2', 
          title: 'Safer but Incomplete', 
          text: 'The account is blocked but not formally reported. You are safer, but the person may simply move on and target someone else.', 
          lesson: 'Grooming is too serious to handle alone. Trusting adults to handle the report properly protects both you and potential future victims.' 
        },
      ],
    },
    {
      id: 8, title: 'Hate in the Comments', emoji: '💬', topic: 'Hate Speech',
      nodes: [
        { 
          id: 'start',  
          text: 'You are watching a live gaming stream and the chat fills with racist and hateful comments targeting one of the players. The comments are coming fast. The targeted player looks visibly upset.', 
          choices: ['😂 Laugh at some comments — it is just internet humour', '😶 Watch quietly without joining in', '🚩 Report the hate speech and speak up in the chat'] 
        },
        { 
          id: 'end_a',  
          title: 'Not Just a Joke',      
          text: 'You laughed. The player leaves the stream in tears. Screenshots of your comment surface later. You feel ashamed and are reported by other viewers.', 
          lesson: 'Racial slurs and targeted hate speech are never "just internet humour." Laughing along makes you part of the harm being caused.' 
        },
        { 
          id: 'mid_b',  
          text: 'You stay quiet. The targeted player disconnects from the stream. The chat celebrates chasing them away. You feel uneasy about what you just witnessed.', 
          choices: ['💬 Post a supportive message defending the player', '❌ Close the stream and try to forget about it'] 
        },
        { 
          id: 'end_b1', 
          title: 'One Voice Changes Things', 
          text: 'Other viewers see your message and start standing up too. The mood shifts in the chat. Multiple people report the worst offenders and some accounts get banned.', 
          lesson: 'One person standing up in a hostile chat can shift the entire dynamic. Bystanders have real power to change the mood of a space.' 
        },
        { 
          id: 'end_b2', 
          title: 'The Cost of Silence',  
          text: 'You walk away, but the hate continues. The targeted player may never stream again. Your silence felt safer but contributed to the problem.', 
          lesson: 'Walking away protects your own wellbeing, but reporting hate speech before you go helps prevent it from continuing.' 
        },
        { 
          id: 'mid_c',  
          text: 'You report the worst comments and post a supportive message. Several other viewers follow your lead and report too. The player notices and feels less alone.', 
          choices: ['📣 Also talk to a trusted adult or teacher about what you saw', '✅ You have done enough — leave the rest to the platform'] 
        },
        { 
          id: 'end_c1', 
          title: 'Ripple Effect',        
          text: 'Multiple reports are actioned quickly. Raising awareness with a trusted adult about hate speech in gaming spaces helps create broader change.', 
          lesson: 'Reporting hate speech AND raising awareness with trusted adults makes platforms safer for everyone — now and in the future.' 
        },
        { 
          id: 'end_c2', 
          title: 'Good Citizen',         
          text: 'Reports are actioned and some accounts are flagged. The player later thanks you for standing up in the chat.', 
          lesson: 'Reporting hate speech AND speaking up in the moment is a powerful combination. Well done for taking action!' 
        },
      ],
    },
    {
      id: 9, title: 'The Call-Out Post', emoji: '📣', topic: 'False Rumours Online',
      nodes: [
        { 
          id: 'start',  
          text: 'Someone from school posts completely false rumours about you on social media. It is spreading fast — people are sharing it and writing mean comments. You do not know who started it and you are very upset.', 
          choices: ['😡 Post an angry response to publicly defend yourself', '💬 Message every person you know to tell them the truth', '📸 Screenshot everything and tell a trusted adult straight away'] 
        },
        { 
          id: 'mid_a',  
          text: 'Your response goes viral. People argue about it. The original poster knows they got to you and posts even more, enjoying the reaction.', 
          choices: ['💢 Keep fighting back to clear your name', '🗑️ Delete your response and step away'] 
        },
        { 
          id: 'end_a1', 
          title: 'Playing Their Game',   
          text: 'The argument spirals badly. Teachers get involved. Both of you face school consequences — even though they started it.', 
          lesson: 'Reacting angrily to false rumours online feeds the drama and puts you at risk of consequences too. Do not give them the reaction they want.' 
        },
        { 
          id: 'end_a2', 
          title: 'Step Away',            
          text: 'Deleting your response was smart. The drama slowly dies down, but the original post stays up without any real consequence for the person who posted it.', 
          lesson: 'Deleting a reactive post is a smart move. Pair it with reporting the original content and involving a trusted adult for a real resolution.' 
        },
        { 
          id: 'end_b',  
          title: 'Damage Control',       
          text: 'You spend hours messaging people. Some believe you; others do not. It is exhausting and the post is still up, reaching new people all the time.', 
          lesson: 'Messaging everyone individually is draining and often ineffective. Reporting the post and involving a trusted adult is faster and more powerful.' 
        },
        { 
          id: 'mid_c',  
          text: 'The trusted adult helps you report the post for harassment. It gets taken down quickly. Together you figure out who most likely posted it.', 
          choices: ['🤝 Agree to a mediated conversation with the person who posted it', '🚫 Block them and move on now the post is down'] 
        },
        { 
          id: 'end_c1', 
          title: 'Real Resolution',      
          text: 'A mediated conversation with adult support uncovers what was behind the rumour. The other person apologises. The school creates new guidelines to prevent future incidents.', 
          lesson: 'Documenting, reporting, and — when safe — addressing the root cause leads to the best and most lasting outcomes.' 
        },
        { 
          id: 'end_c2', 
          title: 'Safe and Resolved',    
          text: 'The post is removed and you are protected. Blocking keeps you safe going forward. A strong outcome through the right actions.', 
          lesson: 'Getting a harmful post removed quickly through adult help is a great outcome. Blocking to stay safe is a smart boundary.' 
        },
      ],
    },
    {
      id: 10, title: 'Password Pressure', emoji: '🔐', topic: 'Digital Relationship Abuse',
      nodes: [
        { 
          id: 'start',  
          text: 'You have been in a relationship for two months. Your partner says: "If you really loved me and trusted me, you would give me your password so I can check your messages." You feel uncomfortable. What do you do?', 
          choices: ['🔑 Give them your password — you have nothing to hide', '🤥 Give a fake password to stop the argument', '🗣️ Explain calmly that healthy relationships do not need password sharing'] 
        },
        { 
          id: 'end_a',  
          title: 'The Control Begins',   text: 'Your partner reads all your messages and uses your accounts to message your friends. They accuse you of things based on misread conversations. The control escalates.', 
          lesson: 'A partner demanding your passwords is a form of digital relationship abuse. No healthy relationship requires this. Talk to a trusted adult if this happens to you.' 
        },
        { 
          id: 'mid_b',  
          text: 'Your partner figures out the password is fake and gets very angry, accusing you of lying. The pressure doubles and they demand the real one.', 
          choices: ['🔑 Give in and share the real password', '🚪 End the relationship and tell a trusted adult about the pressure'] 
        },
        { 
          id: 'end_b1', 
          title: 'Trapped',              
          text: 'Once they have access they use it to control who you talk to. This pattern of controlling behaviour escalates further and further.', 
          lesson: 'Giving in to digital control rarely ends the problem — it usually makes the controlling behaviour escalate over time.' },
        { 
          id: 'end_b2', 
          title: 'Breaking Free',        
          text: 'Leaving a controlling relationship is hard but right. A trusted adult confirms this is digital abuse and helps you understand what healthy relationship boundaries look like.', 
          lesson: 'Recognising and leaving controlling behaviour — even in a relationship — takes real courage. It is always the right call for your safety.'
        },
        { 
          id: 'mid_c',  
          text: 'Your partner reacts badly, saying you obviously do not love them. You hold your ground, but they keep pushing and the pressure is building.', 
          choices: ['💪 Hold your boundary and talk to a trusted adult about the pressure', '😔 Eventually share your password just to calm things down'] 
        },
        { 
          id: 'end_c1', 
          title: 'Healthy Boundaries',   
          text: 'A trusted adult affirms that demanding passwords is control, not love. With their support, you make a clear decision about the relationship on your own terms.', 
          lesson: 'A good partner respects your privacy. Demanding passwords is a red flag for a controlling relationship. You deserve a relationship built on trust, not surveillance.' 
        },
        { 
          id: 'end_c2', 
          title: 'Temporary Peace',      
          text: 'You feel relieved short-term but the controlling behaviour continues — now they expect this going forward. The demand for more access grows.', 
          lesson: 'Giving in to password pressure does not resolve the control issue. It sets a precedent. Controlling behaviour needs to be addressed, not accommodated.' 
        },
      ],
    },
  ],
}
