import type { Project, ProjectStatus } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

type ProjectAccent = "healthcare" | "manufacturing" | "productivity" | "garden";

const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  active: "Active",
  "in-development": "In Development",
  concept: "Concept",
};

function getProjectAccent(project: Project): ProjectAccent {
  const searchableText =
    `${project.slug} ${project.projectType ?? ""}`.toLowerCase();

  if (searchableText.includes("healthcare")) return "healthcare";
  if (searchableText.includes("manufacturing")) return "manufacturing";
  if (searchableText.includes("garden")) return "garden";
  return "productivity";
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-contain"
      />
    );
  }

  return (
    <div
      className="project-card__placeholder"
      role="img"
      aria-label={`Conceptual system diagram representing ${project.title}`}
    >
      <span className="project-card__placeholder-label">
        {project.projectType ?? "Project"}
      </span>
      <span className="project-card__placeholder-line" aria-hidden="true" />
      <span className="project-card__placeholder-node project-card__placeholder-node--one" aria-hidden="true" />
      <span className="project-card__placeholder-node project-card__placeholder-node--two" aria-hidden="true" />
      <span className="project-card__placeholder-node project-card__placeholder-node--three" aria-hidden="true" />
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const accent = getProjectAccent(project);
  const status =
    project.cardStatus ??
    (project.status ? statusLabels[project.status] : "Project");
  const isProfessional = project.projectType
    ?.toLowerCase()
    .includes("professional");
  const confidentialityText = project.confidentialityNotice?.toLowerCase();
  const isNdaProtected =
    confidentialityText?.includes("nda") ||
    confidentialityText?.includes("confidentiality agreements");
  const displayedTechnologies = project.technologies.slice(0, 6);
  const remainingTechnologyCount =
    project.technologies.length - displayedTechnologies.length;

  return (
    <article
      className="project-card"
      data-accent={accent}
      data-development={project.status === "in-development"}
    >
      <div className="project-card__visual">
        <ProjectVisual project={project} />
      </div>

      <div className="project-card__content">
        <div className="project-card__metadata">
          <span className="project-card__category">
            {project.projectType ?? "Project"}
          </span>
          <span className="project-card__status">{status}</span>
        </div>

        <h3 className="project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-card__description">{project.shortDescription}</p>

        <dl className="project-card__details">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>
              {isNdaProtected
                ? "NDA-protected work"
                : isProfessional
                  ? "Professional project"
                  : "Personal product"}
            </dd>
          </div>
        </dl>

        {project.cardImpact ? (
          <p className="project-card__impact">
            <strong>Impact</strong>
            <span>{project.cardImpact}</span>
          </p>
        ) : null}

        {displayedTechnologies.length > 0 ? (
          <ul
            className="project-card__technologies"
            aria-label={`${project.title} technologies`}
          >
            {displayedTechnologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
            {remainingTechnologyCount > 0 ? (
              <li>+{remainingTechnologyCount} more</li>
            ) : null}
          </ul>
        ) : null}

        <div className="project-card__actions">
          <span className="project-card__action">
            View Case Study <span aria-hidden="true">→</span>
          </span>
          {project.liveDemoUrl && project.liveActionLabel ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card__external-action"
            >
              {project.liveActionLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
