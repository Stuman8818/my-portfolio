import { ManufacturingCaseStudyVisuals } from "@/components/projects/manufacturing-case-study-visuals";
import { ProjectHighlights } from "@/components/projects/project-highlights";
import type { Project, ProjectStatus } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

interface ProjectCaseStudyProps {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
}

const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  active: "Active",
  "in-development": "In Development",
  concept: "Concept",
};

function DetailListSection({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="case-study__section">
      <h2>{title}</h2>
      <ul className="case-study__detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectNavigationLink({
  direction,
  project,
}: {
  direction: "Previous" | "Next";
  project?: Project;
}) {
  if (!project) {
    return <span />;
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="case-study__project-link"
    >
      <span>{direction} project</span>
      <strong>{project.title}</strong>
    </Link>
  );
}

export function ProjectCaseStudy({
  project,
  previousProject,
  nextProject,
}: ProjectCaseStudyProps) {
  const contributionTitle =
    project.status === "in-development" ? "Planned scope" : "My contribution";
  const isManufacturingProject =
    project.slug === "manufacturing-applications-rain-engineering";

  return (
    <article className="case-study">
      <Link href="/#projects" className="case-study__back-link">
        <span aria-hidden="true">←</span> Back to Work
      </Link>

      <header className="case-study__hero">
        <div className="case-study__labels">
          {project.projectType ? <span>{project.projectType}</span> : null}
          {project.status ? (
            <span data-status={project.status}>
              {statusLabels[project.status]}
            </span>
          ) : null}
        </div>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>

        <dl className="case-study__metadata">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          {project.company ? (
            <div>
              <dt>Company</dt>
              <dd>{project.company}</dd>
            </div>
          ) : null}
          {project.dates ? (
            <div>
              <dt>Dates</dt>
              <dd>{project.dates}</dd>
            </div>
          ) : null}
        </dl>

        {project.githubUrl || project.liveDemoUrl ? (
          <div className="case-study__actions">
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="case-study__primary-action"
              >
                View live project
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="case-study__secondary-action"
              >
                View GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      {project.confidentialityNotice ? (
        <aside
          className="confidentiality-notice"
          aria-label="Confidentiality notice"
        >
          <strong>Confidentiality notice</strong>
          <p>{project.confidentialityNotice}</p>
        </aside>
      ) : null}

      {project.image ? (
        <figure className="case-study__main-visual">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </figure>
      ) : null}

      <section className="case-study__section">
        <h2>Project context</h2>
        <p>{project.fullDescription}</p>
      </section>

      <DetailListSection title="The challenge" items={project.challenges} />
      <DetailListSection
        title={contributionTitle}
        items={project.responsibilities}
      />

      {project.technologies.length > 0 || project.technicalApproach?.length ? (
        <section className="case-study__section">
          <h2>Technical approach</h2>
          {project.technicalApproach?.length ? (
            <ul className="case-study__detail-list">
              {project.technicalApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {project.technologies.length > 0 ? (
            <ul
              className="case-study__technologies"
              aria-label="Technologies used"
            >
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      <ProjectHighlights highlights={project.highlights} />

      {isManufacturingProject ? <ManufacturingCaseStudyVisuals /> : null}

      <DetailListSection title="Solutions" items={project.solutions} />
      <DetailListSection title="Outcomes" items={project.outcomes} />

      {project.galleryImages?.length ? (
        <section className="case-study__section">
          <h2>Gallery</h2>
          <div className="case-study__gallery">
            {project.galleryImages.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={960}
                  height={540}
                />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {project.keyTakeaway ? (
        <section className="case-study__section case-study__takeaway">
          <h2>Key takeaway</h2>
          <p>{project.keyTakeaway}</p>
        </section>
      ) : null}

      <nav
        className="case-study__project-navigation"
        aria-label="Project case studies"
      >
        <ProjectNavigationLink direction="Previous" project={previousProject} />
        <ProjectNavigationLink direction="Next" project={nextProject} />
      </nav>

      <section className="case-study__contact">
        <p>Have a product or workflow that needs a thoughtful interface?</p>
        <h2>Let’s build a system that moves the work forward.</h2>
        <Link href="/contact">Start a conversation</Link>
      </section>
    </article>
  );
}
