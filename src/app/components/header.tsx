import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Header () {
    
    return (
        <div className="w-[48%] lg:max-h-screen lg:top-0 lg:sticky lg:flex-col lg:justify-between lg:py-24">
            <h1>
                Dave Stewart
            </h1>
            <h2>
                Front End Engineer
            </h2>
            <p>
                I build pixel perfect and responsive web applications
            </p>

            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        <ul className="ml-1 mt-8 flex flex-row items-center" aria-label="social-media">        

        <a href="http://www.linkedin.com/in/dave-stewart-6092bb296" target="_blank" rel="noreferrer noopener" title="Linkedin">
        <li>
        <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
        </li>
        </a>

        <a href="https://github.com/Stuman8818" target="_blank" rel="noreferrer noopener" title="Github Personal/Collette Health">
        <li>
        <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
        </li>
        </a>

        <a href="http://github.com/DaveStu-Rain" target="_blank" rel="noreferrer noopener" title="Github Rain Engineering" >
        <li><FontAwesomeIcon className="h-6 w-6" icon={faGithub} /></li>
        </a>
        </ul>
            
        </div>
    )
}