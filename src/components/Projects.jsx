import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: "Tour Package Booking Platform",
            description: "Pack2Go is a complete tour package booking platform where users can explore, book, and manage travel packages.",
            tags: ["React", "MongoDB", "TailwindCSS", "JWT", "ExpressJs"],
            image: "https://i.postimg.cc/MK0SgySg/Screenshot-5.png",
            github: "https://github.com/yourusername/ecommerce",
            live: "https://pack2go07.web.app/"
        },
        {
            title: "Freelance Task Marketplace",
            description: "A simple and modern platform where users can post freelance tasks, and freelancers can bid on those tasks based on skills, budget, and deadlines.",
            tags: ["React", "Firebase", "Tailwind CSS", "ExpressJs", "MongoDB"],
            image: "https://i.postimg.cc/9FXDhMVW/tasktide1.png",
            github: "https://github.com/Rubaid07/TaskTide",
            live: "https://tasktide07.web.app/"
        },
        {
            title: "Task Management App",
            description: "A productivity app for organizing tasks with drag-and-drop functionality and team collaboration.",
            tags: ["Next.js", "Firebase", "Tailwind CSS"],
            image: "/taskapp.jpg",
            github: "https://github.com/yourusername/taskapp",
            live: "https://your-taskapp.com"
        },
        {
            title: "Task Management App",
            description: "A productivity app for organizing tasks with drag-and-drop functionality and team collaboration.",
            tags: ["Next.js", "Firebase", "Tailwind CSS"],
            image: "/taskapp.jpg",
            github: "https://github.com/yourusername/taskapp",
            live: "https://your-taskapp.com"
        },
        {
            title: "Task Management App",
            description: "A productivity app for organizing tasks with drag-and-drop functionality and team collaboration.",
            tags: ["Next.js", "Firebase", "Tailwind CSS"],
            image: "/taskapp.jpg",
            github: "https://github.com/yourusername/taskapp",
            live: "https://your-taskapp.com"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing projects and skills with modern animations.",
            tags: ["React", "Framer Motion", "GSAP"],
            image: "/portfolio.jpg",
            github: "https://github.com/yourusername/portfolio",
            live: "https://your-portfolio.com"
        }
    ];

    return (
        <section id="projects" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        My<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Projects</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Here are some of my recent works. Each project was built to solve specific problems and improve my skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title} className="relative group"
                        >
                            {/* Border */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden p-[1px]">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 rounded-xl" />
                            </div>

                            <div className="relative bg-white rounded-xl h-full overflow-hidden shadow-md hover:shadow-lg">
                                {/* Project Image */}
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition duration-300"
                                        >
                                            <FiGithub className="mr-2" />
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
                                        >
                                            <FiExternalLink className="mr-2" />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                 <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/Rubaid07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <FaGithub size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
            </div>
        </section>
    );
};

export default Projects;