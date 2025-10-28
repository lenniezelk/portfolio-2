import { createFileRoute, notFound } from '@tanstack/react-router'
import { getProjectBySlug } from '@/projects'
import { ExternalLink, Github } from 'lucide-react'

export const Route = createFileRoute('/projects/$projectId')({
    component: ProjectDetail,
    loader: ({ params }) => {
        const project = getProjectBySlug(params.projectId)
        if (!project) {
            throw notFound();
        }
        return { project }
    },
})

function ProjectDetail() {
    const { project } = Route.useLoaderData()

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        {project.name}
                    </h1>
                    <p className="text-xl text-slate-300 mb-6">{project.tagline}</p>

                    <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm rounded-sm shadow-2xl p-8 border border-slate-700/50">
                        <h2 className="text-2xl font-semibold text-white mb-4">About This Project</h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            {project.longDescription}
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techUsed.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-sm text-blue-300 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Project Links */}
                        {(project.prodLink || project.repoLink) && (
                            <>
                                <h3 className="text-xl font-semibold text-white mb-3">Project Links</h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.prodLink && (
                                        <a
                                            href={project.prodLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 hover:from-emerald-500/30 hover:to-cyan-600/30 border border-emerald-500/30 hover:border-emerald-400/50 rounded-sm text-emerald-300 hover:text-emerald-200 transition-all duration-300 text-sm font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.repoLink && (
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600/20 to-gray-800/20 hover:from-gray-600/30 hover:to-gray-800/30 border border-gray-600/30 hover:border-gray-500/50 rounded-sm text-gray-300 hover:text-gray-200 transition-all duration-300 text-sm font-medium"
                                        >
                                            <Github className="w-4 h-4" />
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}