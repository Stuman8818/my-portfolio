import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section
      id="projects"
      className="scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-sm"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Featured projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Selected work across product, healthcare, and manufacturing.
          </h2>
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
