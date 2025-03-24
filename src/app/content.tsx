export default function Content() {
  return (
    <main className="w-[52%] text-[#F8FAFC] bg-[#0F172A] p-8" id="content">
      {/* About Section */}
      <section id="about" className="mb-12">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            About
          </h2>
          <p className="mt-2 text-gray-400">
            I'm a frontend developer passionate about pixel-perfect UI and a seamless UX. I take pride in ensuring that every component and feature I develop delivers a robust, user-friendly experience.
          </p>
          <p className="mt-4 text-gray-400">
            Currently, I'm a Software Developer II at Rain Engineering, where I helped launch a manufacturing application in Europe within just 7 months. Previously, at Collette Health, I worked on a hospital video monitoring system using Laravel and Vue.js.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="mt-4 p-6 bg-[#1E293B] rounded-2xl shadow-lg">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="text-indigo-300 hover:text-indigo-400 transition"
            href="https://www.linkedin.com/company/raineng/posts/?feedView=all"
          >
            Software Developer II, Rain Engineering
          </a>
          <p className="mt-2 text-gray-400">
            Developed and deployed a full-scale manufacturing app in 7 months. Led UX/UI and front-end efforts, integrating Figma wireframes into React components. Implemented security features, optimized workflows for multiple plants, and ensured smooth API interactions.
          </p>
        </div>

        <div className="mt-6 p-6 bg-[#1E293B] rounded-2xl shadow-lg">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="text-indigo-300 hover:text-indigo-400 transition"
            href="https://www.linkedin.com/company/collettehealth/posts/?feedView=all"
          >
            Software Developer, Collette Health
          </a>
          <p className="mt-2 text-gray-400">
            Collaborated on a responsive video monitoring system for hospitals. Built reusable Vue components, migrated legacy code, improved security, and enhanced code maintainability with Tailwind CSS and modern frontend standards.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="mt-6 p-6 bg-[#1E293B] rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-300">EBR</h3>
          <p className="mt-2 text-gray-400">
            A SaaS application that tracks material quantities, usage, and testing throughout the manufacturing process, storing data efficiently in a database.
          </p>
          <ul className="flex flex-wrap mt-2 text-gray-300">
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">React</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Python</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">MUI</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Javascript</li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-[#1E293B] rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-300">Mixing Application</h3>
          <p className="mt-2 text-gray-400">
            A SaaS tool enabling plant operators to track material mixing and analyze interaction results.
          </p>
          <ul className="flex flex-wrap mt-2 text-gray-300">
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Angular.js</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Node.js</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Express.js</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Javascript</li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-[#1E293B] rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="text-indigo-300 hover:text-indigo-400 transition"
              href="https://www.collettehealth.com/solutions/#VirtualNursing"
            >
              MedSitter
            </a>
          </h3>
          <p className="mt-2 text-gray-400">
            A patient monitoring service allowing nurses to observe up to 10 patients and interact via video communication.
          </p>
          <ul className="flex flex-wrap mt-2 text-gray-300">
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Vue.js</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Laravel</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Tailwind CSS</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">TypeScript</li>
            <li className="mr-3 bg-indigo-600 px-3 py-1 rounded-full">Javascript</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
