import { experienceItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="mt-6 space-y-6">
        {experienceItems.map((item) => (
          <article
            key={item.company}
            className="rounded-xl border border-slate-800 bg-slate-950/50 p-6"
          >
            <h3 className="text-lg font-semibold text-indigo-300">
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-200"
              >
                {item.role} · {item.company}
              </a>
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
