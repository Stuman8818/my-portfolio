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
    projectType: "Professional manufacturing applications",
    // TODO: Add employment or project dates once they are confirmed for publication.
    featured: true,
    displayOrder: 2,
    technologies: ["React", "AngularJS", "TypeScript", "JavaScript", "Node.js"],
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
    // TODO: Add screenshots or gallery images only after publication approval.
    // TODO: Add an exact public project link only if NDA-safe wording and access are confirmed.
    confidentialityNotice:
      "This project is protected by confidentiality agreements. All visuals, data, and workflows shown here are generalized or recreated for portfolio purposes and do not represent the original application.",
  },
  {
    slug: "daily-quest-book",
    title: "Daily Quest Book",
    shortDescription:
      "A pixel-art habit tracker that turns daily habits into quests and makes progress visible.",
    fullDescription:
      "Daily Quest Book is a Super Nintendo-inspired personal product where users can enter daily habits or quests. The application tracks and saves habit progress, combining a distinct pixel-art identity with gamification, persistence, and a focus on daily progress.",
    role: "Independent builder",
    projectType: "Personal product",
    // TODO: Confirm the current product status and project dates.
    featured: true,
    displayOrder: 3,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "React"],
    responsibilities: [
      "Created a visual identity inspired by Super Nintendo-era pixel art.",
      "Implemented entry and persistence for daily habits or quests.",
      "Designed the product around gamification and visible daily progress.",
    ],
    // TODO: Add verified challenge, solution, and outcome details.
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
