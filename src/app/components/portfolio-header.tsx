// app/components/Header.tsx
import type { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PortFolioHeader: FC = () => {
  return (
    <header className="flex justify-between bg-slate-900 text-slate-50 p-8 lg:py-24 lg:sticky lg:top-0 lg:h-screen lg:w-[48%] lg:flex-col lg:justify-between">
      <div className="max-w-md">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Dave Stewart
          </h1>
          <h2 className="mt-3 text-lg font-medium text-indigo-300">
            Front-End Engineer
          </h2>
          <p className="mt-4 text-gray-400">
            Software Engineer with a front-end focus and back-end experience. I
            specialize in building clean, responsive UIs using modern javascript
            libraries like React, Vue, and Angular.
          </p>
        </div>

        {/* Primary navigation */}
        <nav className="mt-6" aria-label="Primary">
          <ul className="flex flex-col gap-2 text-indigo-300">
            <li>
              <Link
                href="#about"
                className="block py-2 hover:text-indigo-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="block py-2 hover:text-indigo-400 transition-colors"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 hover:text-indigo-400 transition-colors"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/* Résumé download */}
        <div className="mt-10 flex items-center">
          <a
            href="Dave_Stewart_Frontend_Software_Developer_Resume.pdf"
            download="Dave_Stewart_Frontend_Software_Developer_Resume.pdf"
            className="text-indigo-300 hover:text-indigo-400 transition-colors"
            rel="noopener noreferrer"
          >
            Full Résumé
          </a>
          <a
            href="Dave_Stewart_Frontend_Software_Developer_Resume.pdf"
            download="Dave_Stewart_Frontend_Software_Developer_Resume.pdf"
            className="ml-4 text-indigo-300 hover:text-indigo-400 transition-colors"
            aria-label="Download résumé"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-5 w-5"
            />
          </a>
        </div>

        {/* Social links */}
        <ul className="mt-8 flex space-x-6" aria-label="Social media">
          <li>
            <a
              href="https://www.linkedin.com/in/dave-stewart-6092bb296"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-indigo-300 hover:text-indigo-400 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Stuman8818"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub – Personal"
              className="text-indigo-300 hover:text-indigo-400 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DaveStu-Rain"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub – Rain Engineering"
              className="text-indigo-300 hover:text-indigo-400 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default PortFolioHeader;
