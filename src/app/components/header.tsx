import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex justify-between lg:max-h-screen bg-[#0F172A] text-[#F8FAFC] p-8 lg:py-24 lg:sticky lg:top-0 lg:flex lg:w-[48%] lg:flex-col lg:justify-between">
      <div className="w-[48%]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Dave Stewart
          </h1>
          <h2 className="mt-3 text-lg font-medium text-indigo-300">
            Front-End Engineer
          </h2>
          <p className="mt-4 text-gray-400">
            I build pixel-perfect and responsive web applications.
          </p>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-col space-x-6 text-indigo-300">
            <li><a href="#about" className="hover:text-indigo-400 transition mt-10">About</a></li>
            <li><a href="#experience" className="hover:text-indigo-400 transition mt-10">Experience</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition mt-10">Projects</a></li>
          </ul>
        </nav>
        <div className="mt-20 flex">
            <h1 className="hover:text-indigo-400 transition"><a href="https://drive.google.com/uc?export=download&id=1ZrSHKzl1dpGv9xpu7TrT7-3nrKjYShuQ">Full Resume</a></h1>
            <a href="https://drive.google.com/uc?export=download&id=1ZrSHKzl1dpGv9xpu7TrT7-3nrKjYShuQ"><FontAwesomeIcon className="h-6 w-6 ml-6 hover:text-indigo-400 transition" icon={faArrowUpRightFromSquare} /></a>
        </div>

        <ul className="mt-8 flex space-x-6" aria-label="social-media">
          <li>
            <a href="http://www.linkedin.com/in/dave-stewart-6092bb296" target="_blank" rel="noreferrer noopener" title="Linkedin">
              <FontAwesomeIcon className="h-6 w-6 text-indigo-300 hover:text-indigo-400 transition" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Stuman8818" target="_blank" rel="noreferrer noopener" title="Github Personal">
              <FontAwesomeIcon className="h-6 w-6 text-indigo-300 hover:text-indigo-400 transition" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="http://github.com/DaveStu-Rain" target="_blank" rel="noreferrer noopener" title="Github Rain Engineering">
              <FontAwesomeIcon className="h-6 w-6 text-indigo-300 hover:text-indigo-400 transition" icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
