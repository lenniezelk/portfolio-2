import HomeProject from '@/components/HomeProject'
import RiveAnimation from '@/components/RiveAnimation'
import { listProjects } from '@/projects'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const fetchInitialData = createServerFn({ method: 'GET' }).handler(async () => {
  return {
    projects: listProjects()
  }
})

export const Route = createFileRoute('/')({
  component: App,
  loader: () => fetchInitialData(),
})



function App() {
  const { projects } = Route.useLoaderData();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Leonard Kinyanjui
            </h1>
            <h2 className="text-xl text-slate-300 mb-2">Frontend Dev • Motion Designer • Indie Game Dev</h2>
            <h3 className="text-lg text-slate-400">Typescript • React • Rive • Defold</h3>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm rounded-sm shadow-2xl p-8 border border-slate-700/50">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Rive Animation Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-slate-600/30 to-gray-700/30 rounded-sm flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-300">
                <div className="text-slate-400 text-xs text-center">
                  <div>About</div>
                  <div>Animation</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I am a senior frontend engineer with over 12+ years of experience in building commercial web applications with
                  Typescript and React leveraging modern tools like Vite, TailwindCSS, Tanstack Router and Tanstack Start. I am also a
                  motion designer skilled in Rive, creating engaging animations for web and mobile apps. Additionally, I am an indie game developer using the Defold engine to create unique gaming experiences. I am passionate
                  about crafting high-quality user experiences through code and design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Connect & Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Blog Link */}
            <a
              href="https://lkioi.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-sm shadow-xl p-6 hover:shadow-2xl hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50"
            >
              <div className="flex items-start gap-4">
                {/* Rive Animation Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <RiveAnimation artboardName='blog' />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-white">My Blog</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Check out my latest articles and tech insights on Hashnode. I write about
                    software development, best practices, and emerging technologies.
                  </p>
                  <div className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    Visit Blog →
                  </div>
                </div>
              </div>
            </a>

            {/* Resume Link */}
            <a
              href="/LeonardKinyanjui.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 backdrop-blur-sm rounded-sm shadow-xl p-6 hover:shadow-2xl hover:from-emerald-500/30 hover:to-cyan-600/30 transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400/50"
            >
              <div className="flex items-start gap-4">
                {/* Rive Animation Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/30 to-cyan-600/30 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <RiveAnimation artboardName='resume' />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-white">Resume</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Download my resume to learn more about my professional experience,
                    skills, and educational background.
                  </p>
                  <div className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                    Download PDF →
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <HomeProject key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm rounded-sm shadow-2xl p-8 border border-slate-700/50">
            <p className="text-lg text-slate-300 text-center mb-8">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to connect using the links below.
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:leonardkioi370@gmail.com"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-700/20 hover:from-red-500/30 hover:to-red-700/30 border border-red-500/30 hover:border-red-400/50 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="Send me an email"
              >
                <Mail className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
              </a>

              <a
                href="https://x.com/lk_kioi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 hover:from-blue-400/30 hover:to-blue-600/30 border border-blue-500/30 hover:border-blue-400/50 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="Follow me on Twitter"
              >
                <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/leonard-kioi-b6954841/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-800/20 hover:from-blue-600/30 hover:to-blue-800/30 border border-blue-600/30 hover:border-blue-500/50 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href="https://github.com/lenniezelk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-600/20 to-gray-800/20 hover:from-gray-600/30 hover:to-gray-800/30 border border-gray-600/30 hover:border-gray-500/50 rounded-sm transition-all duration-300 hover:scale-110"
                aria-label="Check out my GitHub profile"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900/50 to-gray-900/50 backdrop-blur-sm border-t border-slate-700/50 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Leonard Kinyanjui. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
