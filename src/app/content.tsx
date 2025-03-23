export default function Content () {
    return (
        <main className="w-[52%]" id="content">
            <section id="about">
                <div>
                <h2>About</h2>
                <p>I'm a frontend developer that is highly detailed orientated and I care about the UX/UI of the product has my name on it. I enjoy taking a component or feature and creating a robust user experience start to finish</p>
                    <p>Currently, I am a software developer II at rain engineering. I was one of three react developers that took our product from the beginning to going live in a plant in Europe in just 7 months.</p>
                    <p>Prior to this i workde for Collette Health, where we used Laravel and Vue.js to build and continiouly improve a video monitoring application in hospitals.</p>
                </div>
            </section>
            <section id="experience">
                <div>
                    <h2>Experience</h2>
                    <a target="_blank" rel="noreferrer noopener" title="Rain Engineering Linkedin" href="https://www.linkedin.com/company/raineng/posts/?feedView=all">Software Developer II, Rain Engineering</a>
                    <p>At Rain Engineering, I played a key role in developing and deploying a full-scale manufacturing application in just seven months. I contributed to UX/UI design and front-end development, translating Figma wireframes into functional components and leading features like "Batch History" and "Comingle Modal." I helped implement a security system, optimized workflows across five manufacturing plants, and streamlined API integrations with SwaggerUI. During deployment in the Netherlands, I provided on-site support to ensure a smooth transition. Additionally, I earned a Plant Administration certification, leveraging GE’s software suite to enhance front-end solutions and workflow efficiency.</p>
                </div>

                <div>
                    <a target="_blank" rel="noreferrer noopener" title="Collette Health Linkedin" href="https://www.linkedin.com/company/collettehealth/posts/?feedView=all">Software Developer II, Rain Engineering</a>
                    <p>At Collette Health, I collaborated in an agile team to develop a responsive design and build 15+ reusable Vue components. I helped transition legacy code from jQuery to Vue.js with the Composition API and Tailwind CSS while mentoring junior developers on frontend standards. Additionally, I implemented unit testing, resolved 32+ bugs, and enhanced security to meet NIST standards. I also streamlined version control and code reviews using GitKraken and GitHub, ensuring an efficient and maintainable codebase.</p>
                </div>

            </section>
            <section id="projects">
            <div>
                <h2>
                    Projects
                </h2>
            </div>
            <div>
                <div>
                <h2>EBR</h2>
                <p>A SAAS application that allows a manufacturing plant to track quantity of materials, usage of materials, tracking and testing a product through the manufacturing process, view manufacturing data, and store in a DB.</p>
                <ul>
                <li>React</li>
                <li>Python</li>
                <li>Github</li>
                <li>Mui</li>
                <li>Azure Data Explorer</li>
                <li>Javascript</li>
                </ul>
                </div>
                <div>
                   <h2>Mixing Application</h2>
                   <p>A SAAS application that allows plant operators to track the mixing of matierals and the and the outcome of said matierials interacting</p>
                   <ul>
                    <li>Angular.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Javascript</li>
                    <li>Docker</li>
                   </ul>
                </div>
                <div>
                    <h2><a target="_blank" rel="noreferrer noopener" title="Medsitter Demo Request" href="https://www.collettehealth.com/solutions/#VirtualNursing">MedSitter</a></h2>
                    <p>Patient monitoring service that allows a nurse to view up to 10 patients at a time and interact with those patients via the Medsitter application.</p>
                    <ul>
                    <li>Vue.js</li>
                    <li>Tailwind css/Bootstrap css</li>
                    <li>Laravel</li>
                    <li>Github</li>
                    <li>Javascript</li>
                   </ul>
                </div>
            </div>
            </section>
        </main>
    )
}