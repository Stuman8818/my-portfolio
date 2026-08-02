import { resumeUrl, socialLinks } from "@/data/skills";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="supporting-section supporting-section--contact scroll-mt-28"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
        Contact
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-white">
        Let’s connect.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
        I’m always interested in thoughtful conversations about frontend
        engineering, product development, and building better web experiences.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          View résumé
        </a>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
