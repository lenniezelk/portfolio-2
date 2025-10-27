import { createFileRoute, notFound } from '@tanstack/react-router'
import { getProjectBySlug } from '@/projects'

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
                        <div className="flex flex-wrap gap-2">
                            {project.techUsed.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-sm text-blue-300 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}