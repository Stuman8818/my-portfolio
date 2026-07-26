import Link from "next/link";

function GrowthSystemsDiagram() {
  return (
    <figure className="growth-diagram">
      <div className="growth-diagram__grid" aria-hidden="true" />
      <svg
        className="growth-diagram__map"
        viewBox="0 0 460 460"
        role="img"
        aria-labelledby="growth-diagram-title growth-diagram-description"
      >
        <title id="growth-diagram-title">Front-end engineering system</title>
        <desc id="growth-diagram-description">
          A central front-end engineering node connects to healthcare,
          manufacturing, productivity, and gardening application areas.
        </desc>

        <g className="growth-diagram__branches" aria-hidden="true">
          <path d="M230 230 C190 190 172 132 128 94" />
          <path d="M230 230 C270 190 288 132 332 94" />
          <path d="M230 230 C190 270 172 328 128 366" />
          <path d="M230 230 C270 270 288 328 332 366" />
          <path className="growth-diagram__root" d="M230 278 V323" />
          <path className="growth-diagram__root" d="M230 302 L205 330" />
          <path className="growth-diagram__root" d="M230 302 L255 330" />
        </g>

        <g className="growth-diagram__domain growth-diagram__domain--one">
          <circle cx="128" cy="94" r="40" />
          <text x="128" y="98" textAnchor="middle">
            Healthcare
          </text>
        </g>
        <g className="growth-diagram__domain growth-diagram__domain--two">
          <circle cx="332" cy="94" r="40" />
          <text x="332" y="98" textAnchor="middle">
            Manufacturing
          </text>
        </g>
        <g className="growth-diagram__domain growth-diagram__domain--three">
          <circle cx="128" cy="366" r="40" />
          <text x="128" y="370" textAnchor="middle">
            Productivity
          </text>
        </g>
        <g className="growth-diagram__domain growth-diagram__domain--four">
          <circle cx="332" cy="366" r="40" />
          <text x="332" y="370" textAnchor="middle">
            Gardening
          </text>
        </g>

        <g className="growth-diagram__core">
          <rect x="161" y="184" width="138" height="92" rx="18" />
          <text x="230" y="220" textAnchor="middle">
            Front-End
          </text>
          <text x="230" y="241" textAnchor="middle">
            Engineering
          </text>
          <text
            className="growth-diagram__core-detail"
            x="230"
            y="260"
            textAnchor="middle"
          >
            React · TypeScript · UI
          </text>
        </g>

        <g className="growth-diagram__signals" aria-hidden="true">
          <circle cx="185" cy="178" r="4" />
          <circle cx="275" cy="178" r="4" />
          <circle cx="185" cy="282" r="4" />
          <circle cx="275" cy="282" r="4" />
        </g>
      </svg>
    </figure>
  );
}

export function IntroSection() {
  return (
    <section id="home" className="hero-section scroll-mt-28">
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">Front-End Software Engineer</p>
        <h1 className="hero-section__headline">
          Designing digital systems that help people, processes, and ideas grow.
        </h1>
        <p className="hero-section__supporting">
          I build intuitive, workflow-driven applications across healthcare,
          manufacturing, productivity, and everyday life.
        </p>
        <div className="hero-section__actions">
          <Link href="/#projects" className="hero-section__primary-action">
            View My Work
          </Link>
          <Link href="/#about" className="hero-section__secondary-action">
            About Me
          </Link>
        </div>
      </div>

      <GrowthSystemsDiagram />
    </section>
  );
}
