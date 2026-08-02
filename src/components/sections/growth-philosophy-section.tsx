const principles = ["Care", "Operations", "Progress", "Planning"] as const;

export function GrowthPhilosophySection() {
  return (
    <section
      className="growth-philosophy"
      aria-labelledby="growth-philosophy-title"
    >
      <div className="growth-philosophy__introduction">
        <p className="growth-philosophy__eyebrow">Growth Philosophy</p>
        <h2 id="growth-philosophy-title" className="growth-philosophy__title">
          Systems designed around meaningful progress.
        </h2>
        <p className="growth-philosophy__copy">
          I build practical interfaces and workflows that make complex work
          clearer, more reliable, and easier to manage.
        </p>
      </div>

      <ol className="growth-philosophy__values">
        {principles.map((principle, index) => (
          <li key={principle} className="growth-philosophy__value">
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            {principle}
          </li>
        ))}
      </ol>
    </section>
  );
}
