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
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Prisma",
      "SQL",
      "Neon Postgres",
      "MongoDB",
    ],
  },
  {
    title: "Testing, delivery, and tooling",
    items: [
      "Unit testing",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Zod",
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
    label: "PersonalGitHub",
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
  "https://drive.google.com/uc?export=download&id=1h63eHfaUTXZWs-DBjQCKTaYqktYeQTbA";
