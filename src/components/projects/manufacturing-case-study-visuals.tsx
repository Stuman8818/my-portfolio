const productionWorkflow = [
  "Production order",
  "Review requirements",
  "Record process activity",
  "Confirm completion",
  "Save production history",
] as const;

const integrationLayers = [
  "Front-end interface",
  "Application API",
  "Business logic",
  "Production data",
] as const;

function ProcessFlow({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: readonly string[];
}) {
  return (
    <figure className="manufacturing-visual">
      <figcaption>
        <span>Conceptual visual</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
      <ol className="manufacturing-flow" aria-label={title}>
        {steps.map((step, index) => (
          <li key={step}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function ConceptualManufacturingInterface() {
  return (
    <figure className="manufacturing-visual">
      <figcaption>
        <span>Conceptual visual · fictional data</span>
        <h3>Manufacturing workflow interface</h3>
        <p>
          A portfolio-safe example showing how operational information might be
          organized. This is not a production screenshot.
        </p>
      </figcaption>

      <div
        className="manufacturing-ui"
        role="img"
        aria-label="Fictional manufacturing dashboard for Demo Facility 01 showing sample products and generic production statuses"
      >
        <div className="manufacturing-ui__header">
          <div>
            <span>Fictional facility</span>
            <strong>Demo Facility 01</strong>
          </div>
          <span className="manufacturing-ui__connection">System available</span>
        </div>

        <div className="manufacturing-ui__summary">
          <div>
            <span>Scheduled items</span>
            <strong>04</strong>
          </div>
          <div>
            <span>Current shift</span>
            <strong>Day</strong>
          </div>
          <div>
            <span>Completed today</span>
            <strong>02</strong>
          </div>
        </div>

        <div className="manufacturing-ui__table" role="table">
          <div
            className="manufacturing-ui__row manufacturing-ui__row--header"
            role="row"
          >
            <span role="columnheader">Sample product</span>
            <span role="columnheader">Planned value</span>
            <span role="columnheader">Status</span>
          </div>
          <div className="manufacturing-ui__row" role="row">
            <strong role="cell">Sample Blend A</strong>
            <span role="cell">120 units</span>
            <span role="cell" data-status="active">
              In progress
            </span>
          </div>
          <div className="manufacturing-ui__row" role="row">
            <strong role="cell">Sample Blend B</strong>
            <span role="cell">80 units</span>
            <span role="cell">Ready</span>
          </div>
          <div className="manufacturing-ui__row" role="row">
            <strong role="cell">Sample Product C</strong>
            <span role="cell">60 units</span>
            <span role="cell">Complete</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function ManufacturingCaseStudyVisuals() {
  return (
    <section
      className="manufacturing-case-study"
      aria-labelledby="manufacturing-visuals-title"
    >
      <div className="manufacturing-case-study__heading">
        <p>Portfolio-safe system views</p>
        <h2 id="manufacturing-visuals-title">How the work fits together</h2>
      </div>

      <ProcessFlow
        title="Generalized production workflow"
        description="A high-level sequence illustrating the kind of workflow supported, without reproducing an internal process."
        steps={productionWorkflow}
      />
      <ConceptualManufacturingInterface />
      <ProcessFlow
        title="High-level integration"
        description="A simplified view of application layers, with implementation details intentionally omitted."
        steps={integrationLayers}
      />
    </section>
  );
}
