export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Whack-a-Mole Game (Tinkercad)",
      description: "Made a Whack-a-Mole game using Tinkercad with Arduino. Has buttons, LEDs, buzzer, and LCD display. Was fun to build and learned a lot about circuits.",
      technologies: ["Tinkercad", "Arduino", "Circuit Design"],
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
      title: "Eco Haven Website",
      description: "Built a website about sustainable living for an assignment. Has hero section, product cards, and works on mobile. Learned CSS layouts.",
      technologies: ["HTML", "CSS", "Responsive Design"],
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
      title: "CSS Rockstar - SZA Lyrics Page",
      description: "Made a lyric page for SZA's 'Good Days' song. Got to try different fonts and CSS styling. Learned about typography and making text look good.",
      technologies: ["HTML", "CSS", "Typography"],
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
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Here are some projects I've worked on for school and for fun. Each one helped me learn something new!
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* technologies */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* features */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                  <ul className="text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                {/* project link */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
