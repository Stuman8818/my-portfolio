import { SiteHeader } from "@/components/layout/site-header";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/portfolio";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previousProject, nextProject } = getAdjacentProjects(slug);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <ProjectCaseStudy
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </main>
  );
}
