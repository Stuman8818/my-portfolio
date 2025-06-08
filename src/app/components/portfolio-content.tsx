// app/components/Content.tsx
import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Experience {
  company: string;
  title: string;
  companyUrl: string;
  copy: string;
}

interface Project {
  name: string;
  description: string;
  stack: string[];
  externalUrl?: string;
}

const experiences: Experience[] = [
  {
    company: "Rain Engineering",
    title: "Software Engineer",
    companyUrl: "https://www.linkedin.com/company/raineng/posts/?feedView=all",
    copy: "Developed and deployed a full-scale manufacturing app in 7 months. Led UX/UI and front-end efforts, integrating Figma wireframes into React components. Implemented security features, optimized workflows for multiple plants, and ensured smooth API interactions.",
  },
  {
    company: "Collette Health",
    title: "Software Developer",
    companyUrl:
      "https://www.linkedin.com/company/collettehealth/posts/?feedView=all",
    copy: "Collaborated on a responsive video monitoring system for hospitals. Built reusable Vue components, migrated legacy code, improved security, and enhanced code maintainability with Tailwind CSS and modern frontend standards.",
  },
];

const projects: Project[] = [
  {
    name: "EBR (Electronic Bench Record)",
    description:
      "EBR is a vital application in Sherwin-Williams’ manufacturing process, supporting quality control and material tracking. It displays real-time product data on the plant floor.",
    stack: ["React", "Python", "MUI", "JavaScript", "CSS", "HTML"],
  },
  {
    name: "Kellogg's QC Platform",
    description:
      "A quality control application built for Kellogg’s Cheez-It manufacturing process. Developed with Angular and Node.js, it allows operators to validate product batches, input test data, and ensure adherence to internal QC standards during the mixing and formulation stages.",
    stack: ["AngularJS", "Node.js", "Express.js", "TypeScript", "SCSS"],
  },
  {
    name: "Collette Health",
    externalUrl: "https://www.collettehealth.com/solutions/#VirtualNursing",
    description:
      "At Collette Health, I helped build a SaaS-based Virtual Observation platform enabling nurses to monitor 10 patients via live video. It supported two-way communication, real-time alerts, and patient record access to improve safety.",
    stack: ["Vue.js", "Laravel", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
];

const PortFolioContent: FC = () => {
  return (
    <main
      id="content"
      className="w-full max-w-prose bg-slate-900 text-slate-50 p-8 md:w-[52%]"
    >
      {/* About */}
      <section id="about" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          About
        </h2>

        <p className="text-gray-400 leading-relaxed mt-2">
          Frontend-focused Software Engineer with 3 years of experience building
          large-scale React and Vue applications. Original team member on the
          Electronic Bench Record (EBR) system, now deployed in 5
          Sherwin-Williams plants and used by 100+ operators. Built core
          frontend features critical to the manufacturing process. At Collette
          Health, contributed significantly to the frontend of their virtual
          nursing platform, developing its responsive layout and reusable
          component system.
        </p>
        <p className="text-gray-400 leading-relaxed mt-4">
          Currently, I&apos;m a Software Developer I at Rain Engineering, where
          I helped launch a manufacturing application in Europe within just
          seven months. Previously, at Collette Health, I worked on a hospital
          video-monitoring system using Laravel and Vue.js.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Experience
        </h2>

        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="p-6 bg-slate-800 rounded-2xl shadow-lg mt-6"
            aria-labelledby={`${exp.company}-title`}
          >
            <h3
              id={`${exp.company}-title`}
              className="text-lg font-semibold text-indigo-300"
            >
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                {exp.title}, {exp.company}
              </a>
            </h3>
            <p className="text-gray-400 leading-relaxed mt-2">{exp.copy}</p>
          </article>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Projects
        </h2>

        {projects.map((proj) => (
          <article
            key={proj.name}
            className="p-6 bg-slate-800 rounded-2xl shadow-lg mt-6"
            aria-labelledby={`${proj.name}-title`}
          >
            <h3
              id={`${proj.name}-title`}
              className="text-xl font-semibold text-indigo-300"
            >
              {proj.externalUrl ? (
                <a
                  href={proj.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  {proj.name}
                </a>
              ) : (
                proj.name
              )}
            </h3>
            <p className="text-gray-400 leading-relaxed mt-2">
              {proj.description}
            </p>
            {proj.name === "Collette Health" && (
              <div className="mt-4">
                <Image
                  src="/ColletteHealth.png"
                  alt="Collette Health screenshot"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md"
                />
              </div>
            )}

            <ul className="flex flex-wrap mt-2 text-gray-300">
              {proj.stack.map((tech) => (
                <li
                  key={tech}
                  className="mr-3 mb-1 bg-indigo-600 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <div className="mt-12 text-right">
        <Link
          href="#content"
          className="text-indigo-300 hover:text-indigo-400 transition-colors text-sm"
        >
          ↑ Back to top
        </Link>
      </div>
    </main>
  );
};

export default PortFolioContent;
