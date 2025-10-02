import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  // my portfolio homepage - took me forever to get the gradient working right
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* hero section with my name and stuff */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hey, I'm Obi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I'm a <span className="text-blue-400 font-semibold">Interactive Media Design</span> student at Georgian College 
            who's just getting started with web development and having fun learning!
          </p>
          
          {/* about me section - had to look up how to center this */}
          <div className="bg-gray-800 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm really into making websites and learning new stuff. Still figuring things out 
              but it's been pretty cool so far! Just trying to get better at coding and design.
            </p>
          </div>

          {/* buttons to other pages - flexbox was confusing at first */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
            >
              About Me
            </Link>
            <Link 
              href="/projects" 
              className="border border-gray-300 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700"
            >
              My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* what i do section - white background to break up the dark */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm learning to build websites that work well on phones and computers. 
              Still getting the hang of it but I'm getting better at making things look good and work properly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* web dev card */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
              <p className="text-gray-600">
                Learning to build websites with HTML, CSS, and JavaScript. Still working on getting better at it!
              </p>
            </div>

            {/* design card */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Trying to make websites that look good and are easy to use. Learning about design stuff in my classes.
              </p>
            </div>

            {/* problem solving card */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Problem Solving</h3>
              <p className="text-gray-600">
                Figuring out how to fix bugs and make things work. Google is my best friend when I get stuck!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contact section - back to dark theme */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always down to try new things and work on cool projects. Still learning but I'm excited to keep getting better!
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
