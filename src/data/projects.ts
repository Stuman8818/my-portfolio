import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "collette-health-virtual-nursing-application",
    title: "Collette Health Virtual Nursing Application",
    shortDescription:
      "A virtual nursing and patient-monitoring application used by healthcare teams.",
    fullDescription:
      "At Collette Health, formerly Medsitter, I contributed to a virtual nursing and patient-monitoring application used by healthcare teams. I worked with developers, QA, a UX designer, and a product manager on reusable interfaces, responsive application updates, testing, and configurable security features.",
    role: "Software Developer / Front-End Developer",
    company: "Collette Health",
    projectType: "Professional healthcare application",
    dates: "February 2022 – January 2024",
    featured: true,
    displayOrder: 1,
    technologies: ["Vue.js", "Laravel", "JavaScript", "HTML", "CSS"],
    responsibilities: [
      "Built more than 15 reusable Vue components.",
      "Helped implement a responsive redesign of the application.",
      "Performed unit testing.",
      "Updated configurable security features to support NIST-related requirements.",
      "Collaborated with developers, QA, a UX designer, and a product manager.",
      "Mentored junior developers.",
    ],
    challenges: [
      "Supporting responsive healthcare workflows while maintaining reusable front-end patterns.",
      "Adapting configurable security features to support NIST-related requirements.",
    ],
    solutions: [
      "Contributed reusable Vue components and responsive interface updates.",
      "Worked cross-functionally to test and refine application changes.",
    ],
    outcomes: [
      "Delivered more than 15 reusable Vue components as part of the broader development team.",
      "Contributed to the application's responsive redesign and security configuration updates.",
    ],
    image: {
      src: "/ColletteHealth.png",
      alt: "Collette Health virtual nursing application screenshot",
    },
    // TODO: Confirm that this public solutions page remains the preferred project link.
    liveDemoUrl: "https://www.collettehealth.com/solutions/#VirtualNursing",
    githubUrl: undefined,
    caseStudyUrl: undefined,
    confidentialityNotice:
      "Shared at a public-facing level. Additional screenshots and internal application details are not available for confidentiality reasons.",
  },
  {
    slug: "manufacturing-applications-rain-engineering",
    title: "Manufacturing Applications at Rain Engineering",
    shortDescription:
      "Applications supporting manufacturing operations, production workflows, batch history, genealogy tracking, data entry, and plant-specific requirements.",
    fullDescription:
      "At Rain Engineering, I worked as one of three front-end React developers on manufacturing applications supporting production workflows across multiple plants. One application progressed from inception to live deployment in approximately seven months. I contributed substantially to UX/UI implementation and worked with client UX/UI and product-management teams to translate Figma designs into working interfaces.",
    role: "Software Developer II / Front-End Engineer",
    company: "Rain Engineering",
    projectType: "Professional manufacturing applications",
    // TODO: Add employment or project dates once they are confirmed for publication.
    featured: true,
    displayOrder: 2,
    technologies: [
      "React",
      "TanStack Query",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Sass",
      "REST APIs",
      "GraphQL",
    ],
    responsibilities: [
      "Worked as one of three front-end React developers on a manufacturing application taken from inception to live deployment in approximately seven months.",
      "Contributed substantially to UX/UI implementation.",
      "Translated Figma designs into working interfaces with client UX/UI and product-management teams.",
      "Led or had major ownership of generalized production-history and data-entry workflows.",
      "Supported multiple plants with different operational requirements.",
      "Provided on-site launch support in the Netherlands.",
    ],
    challenges: [
      "Supporting shared manufacturing workflows while accommodating different plant requirements.",
      "Turning approved designs into production interfaces within an approximately seven-month delivery window.",
    ],
    solutions: [
      "Built and refined React interfaces in coordination with client design and product-management teams.",
      "Took major ownership of key production-history and data-entry workflows.",
    ],
    outcomes: [
      "Helped take a manufacturing application from inception to live deployment in approximately seven months.",
      "Supported the launch on site in the Netherlands.",
    ],
    highlights: [
      {
        title: "Sherwin-Williams Electronic Bench Record",
        description:
          "A manufacturing application used by operators to enter paint quality-control data and review batch details. A dedicated batch view gives plant users access to batches at their location and the historical quality-control inputs recorded for those batches.",
        technologies: ["React", "TanStack Query", "REST APIs", "GraphQL"],
        details: [
          "Distributed across multiple manufacturing plants.",
          "Supports four languages.",
          "Supports quality-control data entry, batch details, and historical batch data.",
        ],
        // Screenshots are confidential and are intentionally omitted.
      },
      {
        title: "Kellogg Mixing App",
        role: "Lead Developer",
        description:
          "An application supporting the Cheez-It and sandwich-cracker mixing process. Users can record ingredient quantities and source lots, then review batches by production line and generic states such as in progress, completed, on hold, or scrapped.",
        technologies: [
          "Angular",
          "TypeScript",
          "Node.js",
          "Express.js",
          "Sass",
        ],
        details: [
          "Led development of the mixing application.",
          "Supported ingredient-quantity and source-lot entry.",
          "Provided batch status visibility across production lines.",
        ],
        relatedWork: {
          title: "Mixing Sheet",
          description:
            "A partner application providing a quick view of batch genealogy, including ingredient quantities and the mixers used across manufacturing stages. The application supported the plant's move toward paperless workflows; I also contributed its supporting database logic.",
          technologies: ["React"],
        },
        // Screenshots are confidential and are intentionally omitted.
      },
      {
        title: "Plant Activity Tracker",
        role: "Lead Developer / Sole Developer",
        description:
          "A product developed as part of Rain Engineering's initiative to create its own applications for customers. It gives supervisors and operators quick insight into daily plant activities and lets users update activities and add comments as work is completed on the plant floor.",
        technologies: ["React", "REST APIs"],
        details: [
          "Led and independently developed the application.",
          "Designed for quick activity-status visibility and plant-floor updates.",
          "Supports completion updates and comments for daily activities.",
        ],
        // TODO: Add an approved Plant Activity Tracker screenshot when available.
      },
    ],
    // TODO: Add screenshots or gallery images only after publication approval.
    // TODO: Add an exact public project link only if NDA-safe wording and access are confirmed.
    confidentialityNotice:
      "This project is protected by confidentiality agreements. All visuals, data, and workflows shown here are generalized or recreated for portfolio purposes and do not represent the original application.",
  },
  {
    slug: "daily-quest-book",
    title: "Daily Quest",
    shortDescription:
      "A pixel-art application where users record Daily Habits and track their personal progress.",
    fullDescription:
      "Daily Quest is a Super Nintendo-inspired personal product where users create an account with a username and password, record Daily Habits, and track their own progress. Each user has a profile that can include a height, weight, personal “why,” and uploaded image. The application saves habit progress, combining a distinct pixel-art identity with gamification, persistence, and a focus on daily progress. A full-screen calendar shows average habit values and lets users return to past days to enter Daily Habits they missed.",
    role: "Independent builder",
    projectType: "Personal product",
    // TODO: Confirm the current product status and project dates.
    featured: true,
    displayOrder: 3,
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "React",
      "Vercel",
    ],
    responsibilities: [
      "Created a visual identity inspired by Super Nintendo-era pixel art.",
      "Implemented Next.js-based username and password authentication so each user can track their own habits.",
      "Implemented entry and persistence for Daily Habits.",
      "Built user profiles containing height, weight, a personal “why,” and an uploaded image.",
      "Built a full-screen calendar for reviewing habit averages and entering missed Daily Habits on past days.",
      "Designed the product around gamification and visible daily progress.",
    ],
    technicalApproach: [
      "Built as a Next.js application and deployed with Vercel.",
      "Uses MongoDB for back-end data persistence.",
    ],
    // TODO: Add verified challenge, solution, and outcome details.
    image: {
      src: "/DailyQuest.png",
      alt: "Daily Quest Daily Habits entry screen with pixel-art clouds and trees",
    },
    galleryImages: [
      {
        src: "/DailyQuestCalendar.PNG",
        alt: "Daily Quest monthly calendar showing average habit values and selectable dates",
      },
    ],
    liveDemoUrl: "https://journal-app-beige-five.vercel.app/",
  },
  {
    slug: "garden-planning-application",
    title: "Garden Planning Application",
    shortDescription:
      "An in-development product for planning a garden within a yard or other available growing space.",
    fullDescription:
      "This personal product is in development. Its purpose is to help users plan a garden within their available growing space, learn what to grow, and access planning and maintenance guidance. Plant selection, garden layout planning, growing information, care instructions, and seasonal maintenance are planned capabilities; the repository does not yet confirm them as implemented.",
    role: "Independent builder",
    projectType: "Personal product",
    status: "in-development",
    // TODO: Confirm project dates.
    featured: true,
    displayOrder: 4,
    // TODO: Add technologies after the implementation stack is confirmed.
    technologies: [],
    responsibilities: [
      "Planned: Help users identify what to grow.",
      "Planned: Support garden layout planning for available growing space.",
      "Planned: Provide growing information and care instructions.",
      "Planned: Provide seasonal maintenance guidance.",
    ],
    // TODO: Document implemented functionality as development progresses.
    // TODO: Add approved screenshots, a repository URL, or a live-demo URL when available.
  },
];
