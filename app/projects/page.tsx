export default function Projects() {
  // my projects - some are from school assignments, others i did for fun
  const projects = [
    {
      id: 1,
      title: "Whack-a-Mole Game (Tinkercad)", // this was for a hardware class
      description: "Made a Whack-a-Mole game using Tinkercad with Arduino. Has buttons, LEDs, buzzer, and LCD display. Was fun to build and learned a lot about circuits.",
      technologies: ["Tinkercad", "Arduino", "Circuit Design", "Game Dev"],
      features: [
        "Working buttons",
        "LEDs light up",
        "Sound effects",
        "Score display"
      ],
      link: "https://www.tinkercad.com/things/7NB49tWeLrd-copy-of-whack-a-mole"
    },
    {
      id: 2,
      title: "Eco Haven Website", // assignment for web design class
      description: "Built a website about sustainable living for an assignment. Has hero section, product cards, and works on mobile. Learned CSS layouts.",
      technologies: ["HTML", "CSS", "Responsive Design", "UI/UX"],
      features: [
        "Works on mobile and desktop",
        "Clean design",
        "Product cards",
        "Easy navigation"
      ],
      link: "https://obi6745.github.io/EcoHaven-Assignment-/"
    },
    {
      id: 3,
      title: "CSS Rockstar - SZA Lyrics Page", // did this for fun, love sza
      description: "Made a lyric page for SZA's 'Good Days' song. Got to try different fonts and CSS styling. Learned about typography and making text look good.",
      technologies: ["HTML", "CSS", "Typography", "Visual Design"],
      features: [
        "Good typography",
        "Artist info",
        "Easy to read lyrics",
        "Clean design"
      ],
      link: "https://obi6745.github.io/CSS-ROCKSTAR/"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here's some stuff I've built for school assignments and just for fun. Each project taught me something new 
            and helped me get better at coding. Some of them were pretty frustrating to get working, but I learned a lot! 
            Still figuring things out but it's been pretty cool so far.
          </p>
        </div>

        {/* projects grid - alternating layout */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* project placeholder - need real screenshots */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="w-full h-80 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">P{project.id}</span>
                      </div>
                      <p className="text-white text-xl font-bold mb-2">Project {project.id}</p>
                      <p className="text-gray-300 text-sm">{project.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* project content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gray-700 transition-colors">
                  <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* technologies used */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* features list */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">What I Built</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* project links */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                    >
                      View Project
                    </a>
                    <a 
                      href="https://github.com/Obi6745" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* how i learn section - added this to be more honest */}
        <div className="mt-16">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">How I Learn</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">School Assignments</h3>
                <p className="text-gray-300 text-sm">Working on projects for my classes and learning from feedback</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🎥</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">YouTube Tutorials</h3>
                <p className="text-gray-300 text-sm">Watching coding videos and trying to follow along</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Google & Stack Overflow</h3>
                <p className="text-gray-300 text-sm">Looking up solutions when I get stuck (which happens a lot!)</p>
              </div>
            </div>
          </div>
        </div>

        {/* call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Want to see more?</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm always working on new projects and learning new things. 
              Get in touch if you want to chat about coding or work on something together.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Contact Me
              </a>
              <a 
                href="/skills" 
                className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700"
              >
                My Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
