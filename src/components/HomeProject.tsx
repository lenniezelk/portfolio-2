import { type Project } from "@/projects";
import RiveAnimation from "./RiveAnimation";
import { Link } from "@tanstack/react-router";


export default function HomeProject({ project }: { project: Project }) {
    return (
        <div
            key={project.id}
            className="group bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm rounded-sm shadow-2xl border border-slate-700/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            {/* Rive Animation */}
            <div className="h-48 w-full bg-gradient-to-br from-slate-900 to-gray-900 flex items-center justify-center">
                <RiveAnimation artboardName={project.riveArtboard || 'default-project-icon'} />
            </div>

            {/* Project Content */}
            <div className="p-6">
                <Link
                    to="/projects/$projectId"
                    params={{ projectId: project.slug }}
                    className="block group-hover:text-blue-400 transition-colors duration-300"
                >
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.name}
                    </h3>
                </Link>
                <p className="text-slate-300 text-sm mb-3">{project.tagline}</p>
                <p className="text-slate-400 text-sm">{project.description}</p>
            </div>
        </div>
    )
}