import { projects } from "@/data/projects";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(slug: string) {
  const orderedProjects = [...projects].sort(
    (firstProject, secondProject) =>
      (firstProject.displayOrder ?? Number.MAX_SAFE_INTEGER) -
      (secondProject.displayOrder ?? Number.MAX_SAFE_INTEGER),
  );
  const projectIndex = orderedProjects.findIndex(
    (project) => project.slug === slug,
  );

  if (projectIndex === -1) {
    return { previousProject: undefined, nextProject: undefined };
  }

  return {
    previousProject: orderedProjects[projectIndex - 1],
    nextProject: orderedProjects[projectIndex + 1],
  };
}
