import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-sm"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
        Technical skills
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-white">
        Practical expertise across modern frontend stacks.
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-slate-800 bg-slate-950/50 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
