import Link from "next/link";

export function AboutPreviewSection() {
  return (
    <section
      id="about"
      className="supporting-section supporting-section--compact scroll-mt-28"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
        About preview
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-white">
        Practical engineering for real-world workflows.
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
        I focus on practical frontend engineering that improves usability,
        supports product teams, and scales across real-world workflows.
      </p>
      <Link
        href="/about"
        className="mt-6 inline-flex text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
      >
        Read more about my background →
      </Link>
    </section>
  );
}
