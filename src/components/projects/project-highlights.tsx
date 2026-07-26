import type { ProjectHighlight } from "@/types/portfolio";
import Image from "next/image";

export function ProjectHighlights({
  highlights,
}: {
  highlights?: ProjectHighlight[];
}) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <section
      className="project-highlights"
      aria-labelledby="project-highlights-title"
    >
      <div className="project-highlights__heading">
        <p>Selected systems</p>
        <h2 id="project-highlights-title">Manufacturing project highlights</h2>
      </div>

      <div className="project-highlights__list">
        {highlights.map((highlight, index) => (
          <article key={highlight.title} className="project-highlight">
            <div className="project-highlight__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-highlight__content">
              {highlight.role ? (
                <p className="project-highlight__role">{highlight.role}</p>
              ) : null}
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>

              {highlight.details?.length ? (
                <ul className="project-highlight__details">
                  {highlight.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}

              {highlight.technologies.length ? (
                <ul
                  className="project-highlight__technologies"
                  aria-label={`${highlight.title} technologies`}
                >
                  {highlight.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              ) : null}

              {highlight.relatedWork ? (
                <aside className="project-highlight__related">
                  <p>Related application</p>
                  <h4>{highlight.relatedWork.title}</h4>
                  <p>{highlight.relatedWork.description}</p>
                  {highlight.relatedWork.technologies.length ? (
                    <ul
                      aria-label={`${highlight.relatedWork.title} technologies`}
                    >
                      {highlight.relatedWork.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  ) : null}
                </aside>
              ) : null}
            </div>

            {highlight.image ? (
              <figure className="project-highlight__image">
                <Image
                  src={highlight.image.src}
                  alt={highlight.image.alt}
                  width={960}
                  height={540}
                />
              </figure>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
