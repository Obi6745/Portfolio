import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the person behind the code and design
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-white text-2xl font-bold">O</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Obi Habibi</h3>
                    <p className="text-gray-600">Interactive Media Design Student</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Story Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">My Story</h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm Obi Habibi, a passionate Interactive Media Design student at Georgian College, 
                  where I'm diving deep into the world of web development and digital design. My journey 
                  in technology began with curiosity and has evolved into a genuine passion for creating 
                  meaningful digital experiences.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  What drives me is the intersection of creativity and functionality. I believe that 
                  great design isn't just about how something looks, but about how it makes people feel 
                  and how effectively it solves real problems. Every project is an opportunity to learn, 
                  grow, and push the boundaries of what's possible.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding or designing, you'll find me exploring new technologies, 
                  experimenting with different frameworks, or diving into the latest design trends. 
                  I'm always eager to collaborate and learn from others in the field.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                <p className="text-blue-100 text-lg mb-6">
                  I'm always excited to discuss new projects, share ideas, or just chat about 
                  technology and design. Don't hesitate to reach out!
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">obi6745@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">(437) 245-6526</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">My Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Currently pursuing Interactive Media Design – Web at Georgian College, 
                  focusing on modern web technologies and user experience design.
                </p>
              </div>
              
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deeply passionate about technology, design, and the endless possibilities 
                  of creating digital experiences that make a real difference.
                </p>
              </div>
              
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Committed to building websites and applications that are not only visually 
                  stunning but also highly functional and user-friendly.
                </p>
              </div>
            </div>
          </div>

          {/* Student Life */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Student Life</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Being a student in the Interactive Media Design program means constantly learning, 
                experimenting, and growing. Every day brings new challenges and opportunities 
                to expand my skills and knowledge in web development and design.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  I spend countless hours exploring new technologies, working through coding challenges, 
                  and experimenting with different design approaches. The journey isn't always smooth, 
                  but every obstacle is a learning opportunity.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resources & Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  I actively engage with the developer community through online platforms, 
                  attend workshops, and collaborate with fellow students to enhance my 
                  understanding of modern web development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
