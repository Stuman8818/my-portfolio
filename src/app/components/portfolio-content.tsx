// app/components/Content.tsx
import type { FC } from "react";
import Link from "next/link";

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
    companyUrl:
      "https://www.linkedin.com/company/raineng/posts/?feedView=all",
    copy:
      "Developed and deployed a full-scale manufacturing app in 7 months. Led UX/UI and front-end efforts, integrating Figma wireframes into React components. Implemented security features, optimized workflows for multiple plants, and ensured smooth API interactions.",
  },
  {
    company: "Collette Health",
    title: "Software Developer",
    companyUrl:
      "https://www.linkedin.com/company/collettehealth/posts/?feedView=all",
    copy:
      "Collaborated on a responsive video monitoring system for hospitals. Built reusable Vue components, migrated legacy code, improved security, and enhanced code maintainability with Tailwind CSS and modern frontend standards.",
  },
];

const projects: Project[] = [
  {
    name: "EBR",
    description:
      "A SaaS application that tracks material quantities, usage, and testing throughout the manufacturing process, storing data efficiently in a database.",
    stack: ["React", "Python", "MUI", "JavaScript"],
  },
  {
    name: "Mixing Application",
    description:
      "A SaaS tool enabling plant operators to track material mixing and analyze interaction results.",
    stack: ["AngularJS", "Node.js", "Express.js", "JavaScript"],
  },
  {
    name: "MedSitter",
    externalUrl:
      "https://www.collettehealth.com/solutions/#VirtualNursing",
    description:
      "A patient monitoring service allowing nurses to observe up to 10 patients and interact via video communication.",
    stack: ["Vue.js", "Laravel", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
];

const Content: FC = () => {
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
          I&apos;m a frontend developer passionate about pixel-perfect UI and a
          seamless UX. I take pride in ensuring that every component and
          feature I build delivers a robust, user-friendly experience.
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

export default Content;
