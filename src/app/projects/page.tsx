import { SiteHeader } from "@/components/layout/site-header";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-white">Projects</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
