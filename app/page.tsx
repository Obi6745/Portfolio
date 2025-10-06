import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I&apos;m Obi Habibi
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I&apos;m an Interactive Media Design student at Georgian College. 
              I&apos;m learning web development and design to create great digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                About Me
              </Link>
              <Link 
                href="/projects" 
                className="border-2 border-gray-300 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                My Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What I&apos;m Learning</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
              <p className="text-gray-300">
                Learning HTML, CSS, JavaScript, and React to build responsive websites
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-300">
                Creating user-friendly interfaces that are both beautiful and functional
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Problem Solving</h3>
              <p className="text-gray-300">
                Developing skills to tackle coding challenges and find creative solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to get in touch?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Feel free to reach out if you want to chat about projects or web development!
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}
