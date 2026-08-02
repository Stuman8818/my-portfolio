import type { SkillGroup, SocialLink } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend and data",
    items: [
      "Node.js",
      "GraphQL",
      "REST APIs",
      "Prisma",
      "SQL",
      "Neon Postgres",
    ],
  },
  {
    title: "Testing, delivery, and tooling",
    items: [
      "Jest",
      "Postman",
      "Swagger/OpenAPI",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dave-stewart-engineer",
    title: "Visit Dave Stewart on LinkedIn",
  },
  {
    label: "Personal GitHub",
    href: "https://github.com/Stuman8818",
    title: "Visit Dave Stewart on GitHub",
  },
  {
    label: "Rain Engineering GitHub",
    href: "https://github.com/DaveStu-Rain",
    title: "Visit Rain Engineering on GitHub",
  },
];

export const resumeUrl =
  "/Software Engineer Resume Dave Stewart.pdf";
