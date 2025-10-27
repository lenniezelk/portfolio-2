export interface Project {
    id: number;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    techUsed: string[];
    longDescription: string;
    riveArtboard?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "Linkhub",
        slug: "linkhub",
        tagline: "Your Ultimate Link Management Solution",
        description: "Simplify, organize, and share your links with ease using LinkHub's powerful features.",
        techUsed: ["React", "TypeScript", "TailwindCSS", "Node.js", "Cloudflare Workers", "D1 Database"],
        longDescription: `Linkhub is a comprehensive link management platform designed to help users organize, shorten, and share their links efficiently. Built with a modern tech stack including React, TypeScript, and TailwindCSS for the frontend, and Node.js with Cloudflare Workers and D1 Database for the backend, Linkhub offers a seamless user experience.`,
    },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
}

export const listProjects = (): Project[] => {
    return projects;
}