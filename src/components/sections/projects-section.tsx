import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
      (firstProject, secondProject) =>
        (firstProject.displayOrder ?? Number.MAX_SAFE_INTEGER) -
        (secondProject.displayOrder ?? Number.MAX_SAFE_INTEGER),
    );

  return (
    <section
      id="projects"
      className="projects-showcase scroll-mt-28"
      aria-labelledby="projects-showcase-title"
    >
      <div className="projects-showcase__heading">
        <p className="projects-showcase__eyebrow">Selected Systems</p>
        <h2 id="projects-showcase-title">Systems I’ve Built</h2>
        <p>
          Applications built across healthcare, manufacturing, productivity, and
          gardening—each designed to make a real-world process clearer, easier,
          or more effective.
        </p>
      </div>

      <div className="projects-showcase__grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
