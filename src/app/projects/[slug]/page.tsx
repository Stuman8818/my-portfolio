import { SiteHeader } from "@/components/layout/site-header";
import { getProjectBySlug, getProjectSlugs } from "@/lib/portfolio";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/projects"
          className="text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
        >
          ← Back to projects
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-white">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          {project.fullDescription}
        </p>

        {project.image ? (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white">Technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              View live demo
            </a>
          ) : null}
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-white"
            >
              Case study
            </a>
          ) : null}
        </div>
      </article>
    </main>
  );
}
