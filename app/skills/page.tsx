import Image from 'next/image'

export default function Skills() {
  // my skills - being honest about my level
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90, description: "Semantic markup and structure" }, // pretty good at this
        { name: "CSS3", level: 85, description: "Styling, layouts, and animations" }, // flexbox was hard to learn
        { name: "JavaScript", level: 75, description: "Interactive functionality and logic" }, // still learning
        { name: "Responsive Design", level: 80, description: "Mobile-first approach" } // getting better
      ],
      icon: "💻",
      color: "blue"
    },
    {
      title: "Design & UX",
      skills: [
        { name: "UI Design", level: 80, description: "User interface design principles" }, // learned in class
        { name: "User Experience", level: 75, description: "User-centered design approach" }, // still figuring this out
        { name: "Typography", level: 85, description: "Font selection and hierarchy" }, // love picking fonts
        { name: "Color Theory", level: 80, description: "Visual design and branding" } // colors are fun
      ],
      icon: "🎨",
      color: "purple"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", level: 85, description: "Version control and collaboration" }, // use it for all my projects
        { name: "Tinkercad", level: 80, description: "3D design and prototyping" }, // used for hardware class
        { name: "Adobe Creative Suite", level: 70, description: "Design and editing tools" }, // still learning photoshop
        { name: "VS Code", level: 90, description: "Code editing and development" } // my favorite editor
      ],
      icon: "🛠️",
      color: "green"
    }
  ]

  // soft skills - these are important too
  const additionalSkills = [
    "Problem Solving", // google is my friend
    "Creative Thinking", // love coming up with ideas
    "Project Planning", // learned this in school
    "Team Collaboration", // group projects taught me this
    "Continuous Learning", // always trying to get better
    "Attention to Detail" // perfectionist sometimes
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm learning web design and development, getting better at HTML, CSS, and JavaScript. 
            I like making websites that work on phones and computers. Still figuring out frameworks 
            and trying to get better at building stuff that actually works!
          </p>
        </div>

        {/* skills categories with progress bars */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4">{category.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          category.color === 'blue' ? 'from-blue-500 to-blue-600' :
                          category.color === 'purple' ? 'from-purple-500 to-purple-600' :
                          'from-green-500 to-green-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* soft skills section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Skills & Qualities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{skill}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* learning journey - gradient background looks cool */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-lg mb-6 opacity-90">
              I'm always learning new stuff and excited to try more frameworks and design techniques. 
              Still working on getting better at problem-solving but I'm getting there!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Frameworks</h3>
                <p className="text-sm opacity-90">React, Next.js, and more</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Design Techniques</h3>
                <p className="text-sm opacity-90">Advanced UI/UX principles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Problem Solving</h3>
                <p className="text-sm opacity-90">Advanced strategies and methods</p>
              </div>
            </div>
          </div>
        </div>

        {/* call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm always down to try new things and work on cool projects. Still learning but excited to keep getting better!
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
