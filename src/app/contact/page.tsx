import { SiteHeader } from "@/components/layout/site-header";
import { resumeUrl, socialLinks } from "@/data/skills";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-white">Contact</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Connect with me to discuss frontend engineering, full-stack product
          development, or the systems behind my work.
        </p>

        <div className="mt-8 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <a
            href={resumeUrl}
            download="Software Engineer Resume Dave Stewart.pdf"
            className="block text-indigo-300 transition hover:text-indigo-200"
          >
            Download résumé
          </a>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
