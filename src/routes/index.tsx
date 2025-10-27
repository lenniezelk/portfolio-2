import HomeProject from '@/components/HomeProject'
import { listProjects } from '@/projects'
import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { BookOpen, FileText } from 'lucide-react'

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
            <h3 className="text-lg text-slate-400">Typescript • React • After Effects • Rive • Defold</h3>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm rounded-sm shadow-2xl p-8 border border-slate-700/50">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a senior frontend engineer with over 12+ years of experience in building commercial web applications with
              Typescript and React leveraging modern tools like Vite, TailwindCSS, Tanstack Router and Tanstack Start. I am also a
              motion designer skilled in Adobe After Effects and Rive, creating engaging animations for web and mobile apps. Additionally, I am an indie game developer using the Defold engine to create unique gaming experiences. I am passionate
              about crafting high-quality user experiences through code and design.
            </p>
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
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">My Blog</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Check out my latest articles and tech insights on Hashnode. I write about
                software development, best practices, and emerging technologies.
              </p>
              <div className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                Visit Blog →
              </div>
            </a>

            {/* Resume Link */}
            <a
              href="/LeonardKinyanjui.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 backdrop-blur-sm rounded-sm shadow-xl p-6 hover:shadow-2xl hover:from-emerald-500/30 hover:to-cyan-600/30 transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400/50"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-sm flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Resume</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Download my resume to learn more about my professional experience,
                skills, and educational background.
              </p>
              <div className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                Download PDF →
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
            <p className="text-lg text-slate-300 text-center">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to connect at leonardkioi370[at]gmail.com.
            </p>
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
