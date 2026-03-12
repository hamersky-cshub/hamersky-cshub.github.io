export interface ContentItem {
  label: string;
  description: string;
  href: string;
  download?: string;
  ariaLabel?: string;
}

export interface ContentSection {
  title: string;
  items: ContentItem[];
}

export interface FeaturedVideoTrack {
  label: string;
  srclang: string;
  src: string;
  default?: boolean;
}

export interface FeaturedVideo {
  title: string;
  description: string;
  downloadHref: string;
  download?: string;
  subtitlesHref?: string;
  subtitlesDownload?: string;
  poster: string;
  source: string;
  tracks?: FeaturedVideoTrack[];
}

export interface ModulePart {
  label: string;
  title: string;
  goal: string;
  bundleHref: string;
  bundleDownload?: string;
  sections: ContentSection[];
  featuredVideo?: FeaturedVideo;
}

export interface RelatedModule {
  title: string;
  description: string;
  href: string;
  colorVar: string;
  cta?: string;
}

export interface LearningHubContentPageData {
  title: string;
  subtitle: string;
  brandColor: string;
  aimText: string;
  learningObjectives: string[];
  learningOutcomes: string[];
  parts: ModulePart[];
  relatedModules: RelatedModule[];
}

const placeholderHref = "/learning-hub/introduction";

const item = (label: string, description: string): ContentItem => ({
  label,
  description,
  href: placeholderHref,
});

const downloadItem = (
  label: string,
  description: string,
  href: string,
  download?: string,
  ariaLabel?: string,
): ContentItem => ({
  label,
  description,
  href,
  download,
  ariaLabel,
});

const section = (title: string, items: ContentItem[]): ContentSection => ({
  title,
  items,
});

const allModules = [
  {
    title: "Digital Citizenship",
    description:
      "Build responsible habits for communication, sharing, and respectful online behavior.",
    href: "/learning-hub/digital-citizenship/content",
    colorVar: "--brand-DC",
  },
  {
    title: "Attacker Perspective",
    description:
      "Understand how trust can be misused and how to ask for help safely.",
    href: "/learning-hub/attacker-perspective/content",
    colorVar: "--brand-AP",
  },
  {
    title: "Authentication",
    description:
      "Learn how strong passwords and extra verification protect accounts.",
    href: "/learning-hub/authentication/content",
    colorVar: "--brand-AT",
  },
  {
    title: "Data Privacy",
    description:
      "Learn what counts as personal data and how to keep it protected.",
    href: "/learning-hub/data-privacy/content",
    colorVar: "--brand-DP",
  },
  {
    title: "Social Engineering",
    description:
      "Practice spotting manipulation tactics and choosing safer responses.",
    href: "/learning-hub/social-engineering/content",
    colorVar: "--brand-SE",
  },
  {
    title: "Malware",
    description: "Discover how harmful software spreads and how to avoid it.",
    href: "/learning-hub/malware/content",
    colorVar: "--brand-MW",
  },
  {
    title: "Digital Abuse",
    description: "Recognize harmful online behavior and find support pathways.",
    href: "/learning-hub/digital-abuse/content",
    colorVar: "--brand-DA",
  },
] as const;

const relatedModulesFor = (
  currentTitle: (typeof allModules)[number]["title"],
): RelatedModule[] =>
  allModules.filter((module) => module.title !== currentTitle);

export const citizenshipContentPage: LearningHubContentPageData = {
  title: "Digital Citizenship",
  subtitle:
    "Digital citizenship helps students navigate online spaces with confidence, empathy, and responsibility. This module supports educators in teaching safe habits, respectful communication, and thoughtful decision-making in digital environments.",
  brandColor: "var(--brand-DC)",
  aimText:
    "To provide an understanding of what digital citizenship is and how to follow its core principles.",
  learningObjectives: [
    "To stress the importance of digital citizenship.",
    "To introduce the concept of digital citizenship and its principles of rights, responsibility and respect in digital environments.",
    "To develop students understanding of how to apply these principles of rights, responsibility and respect in digital environments - to be safe, savvy, and social.",
  ],
  learningOutcomes: [
    "I can explain what digital citizenship is and why it is important.",
    "I can discuss the principles of rights, responsibility and respect in digital environments, including how to stay safe, act savvy and engage socially.",
  ],
  parts: [
    {
      label: "Part 1",
      title: "Digital Environments",
      goal: "Help students understand what a digital environment is and positive aspects of this.",
      bundleHref: "/materials/digital-citizenship/bundles/dc-01-digital-environments-materials.zip",
      bundleDownload: "dc-01-digital-environments-materials.zip",
      sections: [
        section("Resources", [
          downloadItem(
            "Scenario Cards",
            "Physical and digital worlds.",
            "/images/01_digital-citizenship_poster.png",
            "dc-01-map-of-common-digital-spaces.png",
            "Download map of common digital spaces",
          ),
        ]),
        section("Activity Plan", [
          downloadItem(
            "Step 1",
            "Introduction",
            "/materials/digital-citizenship/dc-01-activity-spot-digital-environment.txt",
            "dc-01-activity-spot-digital-environment.txt",
            "Download activity one",
          ),
          downloadItem(
            "Step 2",
            "What is a digital environment?",
            "/materials/digital-citizenship/dc-01-activity-class-agreement.txt",
            "dc-01-activity-class-agreement.txt",
            "Download activity two",
          ),
          downloadItem(
            "Step 3",
            "Plenary - Summary/informal assessment",
            "/materials/digital-citizenship/dc-01-activity-class-agreement.txt",
            "dc-01-activity-class-agreement.txt",
            "Download activity three",
          ),
        ]),
      ],
      featuredVideo: {
        title: "What Is a Digital Environment?",
        description:
          "Use this video to spark discussion about online spaces students already use, from learning platforms to games and messaging apps. Pause for quick reflections on where students spend time online.",
        downloadHref: "/videos/DigitalCitizenship_Presentation_DigitalEnvironmentV1.mp4",
        download: "DigitalCitizenship_Presentation_DigitalEnvironmentV1.mp4",
        subtitlesHref: "/videos/1.1.1.Subtitles.Digital_environments_EN.vtt",
        subtitlesDownload: "1.1.1.Subtitles.Digital_environments_EN.vtt",
        poster:
          "/videos/DigitalCitizenship_Presentation_DigitalEnvironment_Thumbnail.png",
        source: "/videos/DigitalCitizenship_Presentation_DigitalEnvironmentV1.mp4",
        tracks: [
          {
            label: "English",
            srclang: "en",
            src: "/videos/1.1.1.Subtitles.Digital_environments_EN.vtt",
            default: true,
          },
          {
            label: "Czech",
            srclang: "cs",
            src: "/videos/1.1.1.Subtitles.Digital_environments_CZ.vtt",
          },
        ],
      },
    },
    {
      label: "Part 2",
      title: "What Does it Mean to be a Digital Citizen?",
      goal: "Help students understand what digital citizenship is and why it is important.",
      bundleHref: "/materials/digital-citizenship/bundles/dc-02-digital-footprint-materials.zip",
      bundleDownload: "dc-02-digital-footprint-materials.zip",
      sections: [
        section("Resources", [
          downloadItem(
            "Image",
            "Footprint trail to visualize online actions.",
            "/images/01_digital-citizenship_challenge.png",
            "dc-02-footprint-trail.png",
            "Download footprint trail image",
          ),
          downloadItem(
            "Checklist",
            "“Pause before you post” questions.",
            "/materials/digital-citizenship/dc-02-resource-pause-before-post-checklist.txt",
            "dc-02-resource-pause-before-post-checklist.txt",
            "Download pause before post checklist",
          ),
        ]),
        section("Activity Plan", [
          downloadItem(
            "Activity #1",
            "Footprint choices sorting.",
            "/materials/digital-citizenship/dc-02-activity-footprint-sorting.txt",
            "dc-02-activity-footprint-sorting.txt",
            "Download footprint choices activity",
          ),
          downloadItem(
            "Activity #2",
            "Create a positive profile.",
            "/materials/digital-citizenship/dc-02-activity-positive-profile.txt",
            "dc-02-activity-positive-profile.txt",
            "Download positive profile activity",
          ),
        ]),
        section("Reading Material", [
          downloadItem(
            "Reading for Educators",
            "Talking about reputation and safety.",
            "/materials/digital-citizenship/dc-02-reading-educators-reputation-safety.txt",
            "dc-02-reading-educators-reputation-safety.txt",
            "Download educator reading about reputation and safety",
          ),
          downloadItem(
            "Reading for Students",
            "What stays online?",
            "/materials/digital-citizenship/dc-02-reading-students-what-stays-online.txt",
            "dc-02-reading-students-what-stays-online.txt",
            "Download student reading about what stays online",
          ),
        ]),
        section("Preparation Material", [
          downloadItem(
            "Material #1",
            "Discussion prompts on sharing.",
            "/materials/digital-citizenship/dc-02-prep-sharing-prompts.txt",
            "dc-02-prep-sharing-prompts.txt",
            "Download discussion prompts on sharing",
          ),
          downloadItem(
            "Material #2",
            "Exit ticket reflection.",
            "/materials/digital-citizenship/dc-02-prep-exit-ticket.txt",
            "dc-02-prep-exit-ticket.txt",
            "Download exit ticket reflection",
          ),
        ]),
      ],
    },
    {
      label: "Part 3",
      title: "How to Stay Safe in Digital Environments – Privacy Settings",
      goal: "Help students to know how to be safe in digital environments by thinking critically and acting responsibly with privacy settings.",
      bundleHref: "/materials/digital-citizenship/bundles/dc-03-respect-empathy-materials.zip",
      bundleDownload: "dc-03-respect-empathy-materials.zip",
      sections: [
        section("Resources", [
          downloadItem(
            "Poster",
            "The “THINK” checklist for kind communication.",
            "/images/01_digital-citizenship_poster_hover.png",
            "dc-03-think-checklist-poster.png",
            "Download think checklist poster",
          ),
          downloadItem(
            "Cards",
            "Empathy scenarios for small groups.",
            "/images/01_digital-citizenship_game.png",
            "dc-03-empathy-scenario-cards.png",
            "Download empathy scenario cards",
          ),
        ]),
        section("Activity Plan", [
          downloadItem(
            "Activity #1",
            "Rewrite it with kindness.",
            "/materials/digital-citizenship/dc-03-activity-rewrite-with-kindness.txt",
            "dc-03-activity-rewrite-with-kindness.txt",
            "Download rewrite with kindness activity",
          ),
          downloadItem(
            "Activity #2",
            "Build a respectful reply.",
            "/materials/digital-citizenship/dc-03-activity-respectful-reply.txt",
            "dc-03-activity-respectful-reply.txt",
            "Download respectful reply activity",
          ),
        ]),
        section("Reading Material", [
          downloadItem(
            "Reading for Educators",
            "Supporting positive peer culture.",
            "/materials/digital-citizenship/dc-03-reading-educators-peer-culture.txt",
            "dc-03-reading-educators-peer-culture.txt",
            "Download educator reading on peer culture",
          ),
          downloadItem(
            "Reading for Students",
            "How to disagree respectfully.",
            "/materials/digital-citizenship/dc-03-reading-students-disagree-respectfully.txt",
            "dc-03-reading-students-disagree-respectfully.txt",
            "Download student reading on respectful disagreement",
          ),
        ]),
        section("Preparation Material", [
          downloadItem(
            "Material #1",
            "Role-play guidelines.",
            "/materials/digital-citizenship/dc-03-prep-role-play-guidelines.txt",
            "dc-03-prep-role-play-guidelines.txt",
            "Download role-play guidelines",
          ),
          downloadItem(
            "Material #2",
            "Reflection worksheet.",
            "/materials/digital-citizenship/dc-03-prep-reflection-worksheet.txt",
            "dc-03-prep-reflection-worksheet.txt",
            "Download reflection worksheet",
          ),
        ]),
      ],
    },
    {
      label: "Part 4",
      title: "How to Act Savvy in Digital Environments – Being Wise and Resilient",
      goal: "Help students understand how being wise and resilient can help them to be savvy in digital environments.",
      bundleHref: "/materials/digital-citizenship/bundles/dc-03-respect-empathy-materials.zip",
      bundleDownload: "dc-03-respect-empathy-materials.zip",
      sections: [
        section("Resources", [
          downloadItem(
            "Poster",
            "The “THINK” checklist for kind communication.",
            "/images/01_digital-citizenship_poster_hover.png",
            "dc-03-think-checklist-poster.png",
            "Download think checklist poster",
          ),
          downloadItem(
            "Cards",
            "Empathy scenarios for small groups.",
            "/images/01_digital-citizenship_game.png",
            "dc-03-empathy-scenario-cards.png",
            "Download empathy scenario cards",
          ),
        ]),
        section("Activity Plan", [
          downloadItem(
            "Activity #1",
            "Rewrite it with kindness.",
            "/materials/digital-citizenship/dc-03-activity-rewrite-with-kindness.txt",
            "dc-03-activity-rewrite-with-kindness.txt",
            "Download rewrite with kindness activity",
          ),
          downloadItem(
            "Activity #2",
            "Build a respectful reply.",
            "/materials/digital-citizenship/dc-03-activity-respectful-reply.txt",
            "dc-03-activity-respectful-reply.txt",
            "Download respectful reply activity",
          ),
        ]),
        section("Reading Material", [
          downloadItem(
            "Reading for Educators",
            "Supporting positive peer culture.",
            "/materials/digital-citizenship/dc-03-reading-educators-peer-culture.txt",
            "dc-03-reading-educators-peer-culture.txt",
            "Download educator reading on peer culture",
          ),
          downloadItem(
            "Reading for Students",
            "How to disagree respectfully.",
            "/materials/digital-citizenship/dc-03-reading-students-disagree-respectfully.txt",
            "dc-03-reading-students-disagree-respectfully.txt",
            "Download student reading on respectful disagreement",
          ),
        ]),
        section("Preparation Material", [
          downloadItem(
            "Material #1",
            "Role-play guidelines.",
            "/materials/digital-citizenship/dc-03-prep-role-play-guidelines.txt",
            "dc-03-prep-role-play-guidelines.txt",
            "Download role-play guidelines",
          ),
          downloadItem(
            "Material #2",
            "Reflection worksheet.",
            "/materials/digital-citizenship/dc-03-prep-reflection-worksheet.txt",
            "dc-03-prep-reflection-worksheet.txt",
            "Download reflection worksheet",
          ),
        ]),
      ],
    },
    {
      label: "Part 5",
      title:
        "How to Act Responsibly in Digital Environments - Respecting Ourselves and Others in Digital Environments",
      goal: "Help students understand how to act responsibly, showing respect for themselves and others when engaging socially in digital environments.",
      bundleHref: "/materials/digital-citizenship/bundles/dc-03-respect-empathy-materials.zip",
      bundleDownload: "dc-03-respect-empathy-materials.zip",
      sections: [
        section("Resources", [
          downloadItem(
            "Poster",
            "The “THINK” checklist for kind communication.",
            "/images/01_digital-citizenship_poster_hover.png",
            "dc-03-think-checklist-poster.png",
            "Download think checklist poster",
          ),
          downloadItem(
            "Cards",
            "Empathy scenarios for small groups.",
            "/images/01_digital-citizenship_game.png",
            "dc-03-empathy-scenario-cards.png",
            "Download empathy scenario cards",
          ),
        ]),
        section("Activity Plan", [
          downloadItem(
            "Activity #1",
            "Rewrite it with kindness.",
            "/materials/digital-citizenship/dc-03-activity-rewrite-with-kindness.txt",
            "dc-03-activity-rewrite-with-kindness.txt",
            "Download rewrite with kindness activity",
          ),
          downloadItem(
            "Activity #2",
            "Build a respectful reply.",
            "/materials/digital-citizenship/dc-03-activity-respectful-reply.txt",
            "dc-03-activity-respectful-reply.txt",
            "Download respectful reply activity",
          ),
        ]),
        section("Reading Material", [
          downloadItem(
            "Reading for Educators",
            "Supporting positive peer culture.",
            "/materials/digital-citizenship/dc-03-reading-educators-peer-culture.txt",
            "dc-03-reading-educators-peer-culture.txt",
            "Download educator reading on peer culture",
          ),
          downloadItem(
            "Reading for Students",
            "How to disagree respectfully.",
            "/materials/digital-citizenship/dc-03-reading-students-disagree-respectfully.txt",
            "dc-03-reading-students-disagree-respectfully.txt",
            "Download student reading on respectful disagreement",
          ),
        ]),
        section("Preparation Material", [
          downloadItem(
            "Material #1",
            "Role-play guidelines.",
            "/materials/digital-citizenship/dc-03-prep-role-play-guidelines.txt",
            "dc-03-prep-role-play-guidelines.txt",
            "Download role-play guidelines",
          ),
          downloadItem(
            "Material #2",
            "Reflection worksheet.",
            "/materials/digital-citizenship/dc-03-prep-reflection-worksheet.txt",
            "dc-03-prep-reflection-worksheet.txt",
            "Download reflection worksheet",
          ),
        ]),
      ],
    },
  ],
  relatedModules: [
    {
      title: "Attacker Perspective",
      description:
        "Understand how trust can be manipulated and learn to spot risky behavior.",
      href: "/learning-hub/attacker-perspective/content",
      colorVar: "--brand-AP",
    },
    {
      title: "Authentication",
      description:
        "Teach students how to secure their accounts with strong, memorable routines.",
      href: "/learning-hub/authentication/content",
      colorVar: "--brand-AT",
    },
    {
      title: "Data Privacy",
      description:
        "Explore how personal information is shared and ways to keep it safe.",
      href: "/learning-hub/data-privacy/content",
      colorVar: "--brand-DP",
    },
    {
      title: "Social Engineering",
      description:
        "Learn how scammers and manipulators use persuasion and false urgency.",
      href: "/learning-hub/social-engineering/content",
      colorVar: "--brand-SE",
    },
    {
      title: "Malware",
      description:
        "Help students recognize suspicious downloads and protect devices.",
      href: "/learning-hub/malware/content",
      colorVar: "--brand-MW",
    },
    {
      title: "Digital Abuse",
      description:
        "Identify harmful online behavior and learn how to get help safely.",
      href: "/learning-hub/digital-abuse/content",
      colorVar: "--brand-DA",
    },
  ],
};

export const authenticationContentPage: LearningHubContentPageData = {
  title: "Authentication",
  subtitle:
    "Authentication helps students understand how we prove who we are online. This module supports educators in teaching strong sign-in habits, why extra verification matters, and how to keep accounts protected.",
  brandColor: "var(--brand-AT)",
  aimText:
    "To help students understand how people prove who they are online and how strong passwords, passphrases, and extra verification keep accounts safe.",
  learningObjectives: [
    "Introduce the idea of identity and access in digital spaces.",
    "Build habits for creating and protecting strong passwords.",
    "Explain how extra verification improves account safety.",
  ],
  learningOutcomes: [
    "Define authentication and why it is used online.",
    "Create a memorable, strong passphrase and store it safely.",
    "Identify when to use multi-factor authentication and ask for help.",
  ],
  parts: [
    {
      label: "Part 1",
      title: "Passwords & Passphrases",
      goal: "Help students create strong, memorable secrets and understand why reuse is risky.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Poster", '"Passphrase recipe" steps.'),
          item("Worksheet", "Password strength checklist."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Build a strong passphrase."),
          item("Activity #2", "Spot weak password habits."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Teaching password hygiene."),
          item("Reading for Students", "Why secrets keep us safe."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Vocabulary cards for key terms."),
          item("Material #2", "Scenario prompts for class discussion."),
        ]),
      ],
    },
    {
      label: "Part 2",
      title: "Multi-Factor Authentication",
      goal: "Show how a second step protects accounts, even if a password is guessed.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Diagram", '"Two-step login" flow.'),
          item("Handout", "Examples of verification methods."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Match accounts to the right factor."),
          item("Activity #2", "Role-play a safe login."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Why MFA reduces risk."),
          item("Reading for Students", 'The "second lock" idea.'),
        ]),
        section("Preparation Material", [
          item("Material #1", "Parent/guardian note on MFA."),
          item("Material #2", "Quick-start checklist for setups."),
        ]),
      ],
    },
  ],
  relatedModules: relatedModulesFor("Authentication"),
};

export const attackerPerspectiveContentPage: LearningHubContentPageData = {
  title: "Attacker Perspective",
  subtitle:
    "Students naturally build trust with family, peers, and familiar adults. This module helps educators show how that trust can be misused, so students can spot warning signs, protect boundaries, and ask for help early.",
  brandColor: "var(--brand-AP)",
  aimText:
    "To help students understand how trust can be misused, how risky behavior can be hidden behind familiar language, and how to ask for help early.",
  learningObjectives: [
    "Understand the perspective of an attacker.",
    "Identify how trust can be misused in everyday situations.",
    "Build awareness of safe help-seeking behavior.",
  ],
  learningOutcomes: [
    "Recognize common tactics used to gain a child’s trust.",
    "Explain why personal boundaries and privacy matter.",
    "Practice safer decision-making with trusted adults.",
  ],
  parts: [
    {
      label: "Part 1",
      title: "The Circle of Trustees",
      goal: "Help children gain knowledge of the concept of a trusted person and develop skills in identifying the circle of trusted persons.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Image", "Trust circle map around the child."),
          item("Image", "Trust levels overview for familiar adults and peers."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Build your personal trust circle."),
          item("Activity #2", "Sort situations by trust level."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Teaching healthy trust boundaries."),
          item("Reading for Children", "Knowing who to talk to when unsure."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Classroom prompt cards for trust scenarios."),
          item("Material #2", "Reflection sheet on trusted adults."),
        ]),
      ],
    },
    {
      label: "Part 2",
      title: "What Is an Adversary?",
      goal: "Help children understand who adversaries are and how they might pretend to be trustworthy.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Poster", "Common manipulation tactics and warning signs."),
          item("Cards", "Realistic message examples for analysis."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Spot the red-flag tactic."),
          item("Activity #2", "Practice safe responses and exit strategies."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Building manipulation awareness."),
          item("Reading for Children", "It is okay to pause and ask for help."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Quick-reference help map for students."),
          item("Material #2", "Exit ticket reflection on safer choices."),
        ]),
      ],
    },
  ],
  relatedModules: relatedModulesFor("Attacker Perspective"),
};

export const dataPrivacyContentPage: LearningHubContentPageData = {
  title: "Data Privacy",
  subtitle:
    "Data privacy helps students understand what information is personal, why it matters, and how to make careful choices when sharing online. This module supports educators in building safe, confident decision-making around personal data.",
  brandColor: "var(--brand-DP)",
  aimText:
    "To help students recognize what counts as personal data, understand why privacy matters, and make safer choices before sharing information online.",
  learningObjectives: [
    "Define personal data and identify what is sensitive.",
    "Encourage thoughtful sharing and consent-based choices.",
    "Build awareness of privacy settings and safe defaults.",
  ],
  learningOutcomes: [
    "Recognize common types of personal information.",
    "Explain how data can travel and be stored online.",
    "Apply simple privacy rules before sharing or posting.",
  ],
  parts: [
    {
      label: "Part 1",
      title: "What Counts as Personal Data?",
      goal: "Help students identify personal and sensitive information in everyday scenarios.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Poster", "Personal vs. public information chart."),
          item("Cards", "Data type sorting deck."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Data detective sorting game."),
          item("Activity #2", '"Would you share?" scenarios.'),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Teaching data sensitivity."),
          item("Reading for Students", "My information, my choice."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Key vocabulary handout."),
          item("Material #2", "Example profiles for discussion."),
        ]),
      ],
    },
    {
      label: "Part 2",
      title: "Sharing, Consent & Privacy Settings",
      goal: "Practice safe sharing decisions and introduce privacy controls students can use.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Guide", "Simple privacy settings walkthrough."),
          item("Checklist", '"Pause before you share" prompts.'),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Consent role-play scenarios."),
          item("Activity #2", "Set safer sharing defaults."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Coaching privacy habits."),
          item("Reading for Students", "Think before you share."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Family conversation guide."),
          item("Material #2", "Exit ticket reflection sheet."),
        ]),
      ],
    },
  ],
  relatedModules: relatedModulesFor("Data Privacy"),
};

export const digitalAbuseContentPage: LearningHubContentPageData = {
  title: "Digital Abuse",
  subtitle:
    "Digital abuse includes harmful behavior online such as threats, harassment, or unwanted contact. This module helps educators teach students to recognize unsafe behavior, set boundaries, and find support.",
  brandColor: "var(--brand-DA)",
  aimText:
    "To help students recognize harmful online behavior, understand that boundaries matter, and know the steps they can take to get support and stay safe.",
  learningObjectives: [
    "Define digital abuse in age-appropriate, supportive terms.",
    "Recognize warning signs and unhealthy online behaviors.",
    "Practice safe help-seeking and reporting steps.",
  ],
  learningOutcomes: [
    "Identify behaviors that cross boundaries or cause harm.",
    "Use simple safety steps like blocking or reporting.",
    "Know trusted adults and support channels to reach out to.",
  ],
  parts: [
    {
      label: "Part 1",
      title: "Recognizing Harmful Online Behavior",
      goal: "Help students identify behaviors that are unsafe, intimidating, or harmful.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Poster", "Examples of harmful behavior."),
          item("Cards", "Boundary and safety scenarios."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Safe vs. unsafe sorting."),
          item("Activity #2", '"How would you respond?" discussion.'),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Trauma-informed conversations."),
          item("Reading for Students", "Your boundaries matter."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Classroom support map."),
          item("Material #2", "Vocabulary and definitions."),
        ]),
      ],
    },
    {
      label: "Part 2",
      title: "Support, Reporting & Recovery",
      goal: "Reinforce steps for getting help, documenting issues, and restoring safety.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Guide", "Reporting and blocking steps."),
          item("Handout", "Trusted adults and support hotlines."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Build a safety plan."),
          item("Activity #2", "Practice asking for help."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Responding to disclosures."),
          item("Reading for Students", "You are not alone."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Family support letter template."),
          item("Material #2", "Reflection worksheet."),
        ]),
      ],
    },
  ],
  relatedModules: relatedModulesFor("Digital Abuse"),
};

export const malwareContentPage: LearningHubContentPageData = {
  title: "Malware",
  subtitle:
    "Malware is harmful software that can slow devices, steal information, or cause damage. This module helps educators teach students how malware spreads and how to keep devices safe.",
  brandColor: "var(--brand-MW)",
  aimText:
    "To help students understand what malware is, how infections happen, and which habits reduce the risk of unsafe downloads, files, and installations.",
  learningObjectives: [
    "Introduce what malware is and why it is risky.",
    "Identify common ways malware spreads.",
    "Build habits for safer downloads and updates.",
  ],
  learningOutcomes: [
    "Explain the difference between safe and unsafe files or links.",
    "Recognize warning signs of suspicious downloads.",
    "Use trusted sources and ask for help when unsure.",
  ],
  parts: [
    {
      label: "Part 1",
      title: "How Malware Spreads",
      goal: "Show common infection paths like unsafe links, downloads, and attachments.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Poster", "Common malware entry points."),
          item("Cards", "Safe vs. unsafe examples."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Link safety sorting."),
          item("Activity #2", "Attachment detective game."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Explaining malware simply."),
          item("Reading for Students", "How malware tricks us."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Vocabulary cards for key terms."),
          item("Material #2", "Classroom scenario prompts."),
        ]),
      ],
    },
    {
      label: "Part 2",
      title: "Safe Devices & Updates",
      goal: "Reinforce habits like updates, trusted sources, and asking before installing.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Checklist", "Safe download steps."),
          item("Guide", "Why updates protect devices."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Build a device safety routine."),
          item("Activity #2", "Spot the trusted source."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Reinforcing safe habits."),
          item("Reading for Students", "Updates are protection."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Home device safety note."),
          item("Material #2", "Exit ticket reflection sheet."),
        ]),
      ],
    },
  ],
  relatedModules: relatedModulesFor("Malware"),
};

export const socialEngineeringContentPage: LearningHubContentPageData = {
  title: "Social Engineering",
  subtitle:
    "Social engineering is when someone uses pressure, tricks, or false trust to get information or access. This module helps educators teach students how to spot manipulation and respond safely.",
  brandColor: "var(--brand-SE)",
  aimText:
    "To help students recognize manipulation tactics, pause before acting, and choose safer responses when someone uses pressure, urgency, or false trust.",
  learningObjectives: [
    "Explain how manipulation can happen online and in person.",
    "Identify common tactics like urgency, flattery, or authority.",
    "Practice safe responses and help-seeking behavior.",
  ],
  learningOutcomes: [
    "Recognize pressure tactics used in messages or chats.",
    "Use a pause-and-check routine before acting.",
    "Know when and how to report suspicious behavior.",
  ],
  parts: [
    {
      label: "Part 1",
      title: "Tricks, Pressure & Persuasion",
      goal: "Help students spot common manipulation tactics used to gain trust or access.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Poster", '"Red flags" checklist.'),
          item("Cards", "Tactics and examples deck."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Spot the tactic game."),
          item("Activity #2", "Role-play safe responses."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Recognizing influence tactics."),
          item("Reading for Students", "When a message feels off."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Scenario scripts for discussion."),
          item("Material #2", '"Pause and check" reminder cards.'),
        ]),
      ],
    },
    {
      label: "Part 2",
      title: "Verify, Report & Get Help",
      goal: "Practice verifying information and choosing safe help pathways.",
      bundleHref: placeholderHref,
      sections: [
        section("Resources", [
          item("Guide", "Verification steps for messages."),
          item("Handout", "Trusted adults and school contacts list."),
        ]),
        section("Activity Plan", [
          item("Activity #1", "Choose the safest next step."),
          item("Activity #2", "Create a class help map."),
        ]),
        section("Reading Material", [
          item("Reading for Educators", "Building reporting confidence."),
          item("Reading for Students", "It is okay to ask for help."),
        ]),
        section("Preparation Material", [
          item("Material #1", "Parent/guardian letter template."),
          item("Material #2", "Exit ticket reflection sheet."),
        ]),
      ],
    },
  ],
  relatedModules: relatedModulesFor("Social Engineering"),
};
