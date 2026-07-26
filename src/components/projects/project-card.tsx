import type { Project } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm">
      {project.image ? (
        <div className="relative aspect-[16/9] w-full bg-slate-950">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
          {project.role}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {project.shortDescription}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
          >
            View details
          </Link>
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
