import { SiteHeader } from "@/components/layout/site-header";
import { skillGroups } from "@/data/skills";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-white">About</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          I am a full-stack software engineer with a front-end focus, building
          responsive, maintainable applications with React, Next.js, TypeScript,
          Vue, and Angular. My experience spans manufacturing, healthcare, and
          independent product development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {group.title}
              </h2>
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
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
