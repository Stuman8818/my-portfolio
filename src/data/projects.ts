import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "collette-health-virtual-nursing-application",
    status: "active",
    cardStatus: "Professional project",
    cardImpact: "Built 15+ reusable Vue components.",
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
    status: "active",
    cardStatus: "NDA-protected",
    cardImpact: "Supported applications deployed across multiple manufacturing plants.",
    title: "Manufacturing Applications at Rain Engineering",
    shortDescription:
      "Applications supporting manufacturing operations, production workflows, batch history, genealogy tracking, data entry, and plant-specific requirements.",
    fullDescription:
      "At Rain Engineering, I have contributed to and led manufacturing applications supporting quality control, production visibility, ingredient traceability, batch genealogy, and daily plant activities. My responsibilities have ranged from working as one of three front-end developers on a large React application to serving as lead developer and sole developer on other systems. Across these projects, I have contributed substantially to UX/UI implementation, translated designs into working interfaces, and supported the different workflows of operators and supervisors on the plant floor.",
    role: "Software Developer / Front-End Engineer",
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
      "Collaborated as one of three front-end React developers on a global Electronic Batch Record application used across multiple Sherwin-Williams manufacturing plants to support paint-production quality control, batch tracking, production visibility, and historical data review.",
      "Served as lead developer on the Kellogg Mixing App, building workflows for ingredient quantities, source lots, production lines, and batch statuses.",
      "Created the React-based Mixing Sheet partner application and contributed the supporting database logic for its batch-genealogy view.",
      "Led and independently developed the Plant Activity Tracker, from its interface and activity workflows through its React and REST API integration.",
    ],
    challenges: [
      "Supporting shared manufacturing workflows while accommodating different plant requirements.",
      "Turning approved designs into production interfaces.",
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
          technologies: ["React", "T-SQL"],
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
      "These projects are protected by confidentiality agreements. Screenshots, proprietary data, and internal workflow details are omitted; the information shared here is limited to a high-level overview of my role and contributions.",
  },
  {
    slug: "daily-quest-book",
    status: "active",
    cardStatus: "Live",
    liveActionLabel: "Live Site",
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
    title: "Yard To Table",
    shortDescription:
      "A production-minded full-stack platform for a pre-launch lawn-care and garden-planning business, combining public lead intake with a foundation for property and service operations.",
    fullDescription:
      "Yard To Table is a full-stack application being developed alongside a future lawn-care, garden-planning, and installation business. The business is still pre-launch. Its public experience introduces the planned services and collects early customer interest through a working lead-intake flow. The underlying application is designed to eventually manage the operational journey from property records and assessments through estimates, scheduling, jobs, and ongoing care; those broader workflows remain on the roadmap. The project also serves as a software engineering portfolio case study, with future multi-company SaaS potential treated as an architectural direction rather than a currently implemented product.",
    role: "Independent Full-Stack Developer & Product Designer",
    projectType: "Full-stack product / pre-launch business platform",
    status: "in-development",
    cardStatus: "In development",
    liveActionLabel: "Live Application",
    dates: "2026–Present",
    featured: true,
    displayOrder: 4,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Apollo Server",
      "Prisma",
      "Neon Postgres",
      "Zod",
      "Resend",
      "Vercel",
      "GitHub Actions",
    ],
    responsibilities: [
      "Designed and developed Yard To Table from an initial business concept into a deployed full-stack application.",
      "Built a responsive public lead-intake workflow with shared Zod validation, typed GraphQL operations, resolver and service-layer separation, and Prisma persistence to Neon Postgres.",
      "Integrated Resend for server-side lead notifications while preserving a successful lead submission when notification delivery fails after the database write.",
      "Created separate development and production database environments using Neon branches and environment-specific deployment configuration.",
      "Redesigned the public experience around a pre-launch lawn-care and garden-planning business powered by custom operational software.",
      "Modeled the launch lawn-care service around real business rules, bundling mowing, trimming and edging, and cleanup into one customer-selectable offering.",
      "Established a foundation for future property, assessment, estimate, scheduling, job, and ongoing-care workflows without prematurely implementing multi-tenancy or subscriptions.",
    ],
    challenges: [
      "Balancing three goals: a credible future service business, a technically strong portfolio project, and a foundation that could later support a SaaS product.",
      "Keeping development and production data isolated while maintaining a straightforward Prisma migration workflow.",
      "Modeling services around real business rules instead of treating every operational task as a separate customer-selectable service.",
      "Presenting unfinished business and software capabilities honestly without making the application feel like a placeholder.",
    ],
    solutions: [
      "Positioned Yard To Table as a pre-launch service company powered by a custom operational platform.",
      "Used separate Neon branches and environment-specific database configuration for development and production.",
      "Implemented a layered lead-submission architecture with shared validation, GraphQL, a service layer, Prisma, and Resend.",
      "Kept future SaaS concerns in mind without adding speculative organization, billing, or multi-tenant complexity too early.",
    ],
    outcomes: [
      "Deployed a working public application to Vercel.",
      "Completed the first end-to-end vertical feature from public form submission through database persistence and email notification.",
      "Established an extensible architecture and roadmap for future operational workflows.",
      "Created a project demonstrating product design, frontend development, backend integration, database modeling, validation, deployment, and CI/CD practices.",
    ],
    technicalApproach: [
      "The implemented lead flow collects first and last names, Indiana service details, and the currently enabled bundled lawn-care interest through responsive loading, success, and error states.",
      "Shared Zod rules validate inputs on both client and server before a typed createLead GraphQL mutation reaches the resolver and service layers.",
      "Prisma persists leads to Neon Postgres before Resend sends the server-side notification, with failures handled according to whether the database write succeeded.",
      "Authentication, administrative lead management, property assessments, estimates, scheduling, jobs, payments, reporting, and SaaS multi-tenancy remain roadmap items.",
    ],
    image: {
      src: "/Yard To Table.PNG",
      alt: "Yard To Table pre-launch homepage showing planned lawn and garden services and the custom property-management platform",
    },
    githubUrl: "https://github.com/Stuman8818/yard-to-table",
    liveDemoUrl: "https://yard-to-table.vercel.app/",
  },
];
