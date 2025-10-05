export default function Skills() {
  const technicalSkills = [
    { name: "HTML5", level: 85 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 65 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Git/GitHub", level: 70 }
  ]

  const designSkills = [
    "UI Design",
    "Responsive Design",
    "Typography",
    "Color Theory"
  ]

  const tools = [
    "VS Code",
    "Tinkercad",
    "Adobe Creative Suite",
    "Figma"
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            My Skills
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Here are the technical skills and tools I'm learning and using
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-blue-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Skills */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Design Skills</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {designSkills.map((skill, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-white font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Tools & Software</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-white font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
