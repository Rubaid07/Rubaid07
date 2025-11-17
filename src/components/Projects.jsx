'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaUsers } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Cpu, Terminal, Sparkles, Rocket, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [displayText, setDisplayText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    '$ npm run projects',
    '$ git init portfolio',
    '$ node project.js',
    '$ projects loaded'
  ];

  useEffect(() => {
    const currentCommand = commands[commandIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentCommand.length) {
        setDisplayText(currentCommand.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCommandIndex((prev) => (prev + 1) % commands.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [commandIndex]);

  const projects = [
    {
      title: "Elyzian",
      description: "A modern insurance management platform built with MERN stack. Features policy management, agent coordination, and customer interaction tools with secure payment integration.",
      tags: ["React", "Tailwind CSS", "Stripe", "Tanstack", "JWT", "NodeJs", "ExpressJs", "MongoDB"],
      image: "https://i.postimg.cc/dVZJ49p0/Screenshot-2025-07-26-180201.png",
      github: "https://github.com/Rubaid07/Elyzian",
      live: "https://elyzian07.web.app"
    },
    {
      title: "Pack2Go",
      description: "A comprehensive tour package booking platform with full-stack functionality. Users can explore destinations, book packages, and manage their travel itineraries seamlessly.",
      tags: ["React", "MongoDB", "TailwindCSS", "JWT", "ExpressJs", "React Router", "Axios", "Framer Motion"],
      image: "https://i.postimg.cc/j2MqWVTX/Screenshot-8.png",
      github: "https://github.com/Rubaid07/pack2go",
      live: "https://pack2go07.web.app/"
    },
    {
      title: "ByteStory",
      description: "An AI-powered blogging platform with real-time features. Integrates Gemini AI for content creation and optimization with collaborative editing capabilities.",
      tags: ["Next.Js", "Socket.io", "MongoDB", "Gemini API", "Mongoose", "JWT", "React", "Axios"],
      image: "https://i.postimg.cc/HLk9q888/Screenshot-8.png",
      github: "https://github.com/shahnewaz5646455/ByteStory",
      live: "https://byte-story.vercel.app/",
      teamProject: true,
      teamSize: 5,
      role: "Full Stack Developer & UI designer"
    },
    {
      title: "Study Mate",
      description: "An all-in-one student productivity platform combining academic tools and wellness features. Helps students manage studies, finances, and schedules effectively.",
      tags: ["Gemini API", "React", "ExpressJs", "Axios", "MongoDB", "TailwindCSS", "Firebase"],
      image: "https://i.postimg.cc/3R0thjNz/Screenshot-3.png",
      github: "https://github.com/Rubaid07/StudyMate",
      live: "https://study-mate-07.web.app/"
    },
    {
      title: "Task Tide",
      description: "It is a Full Stack project. it's simple and modern platform where users can post freelance tasks, and freelancers can bid on those tasks based on skills, budget, and deadlines.",
      tags: ["React", "Firebase", "Tailwind CSS", "ExpressJs", "MongoDB"],
      image: "https://i.postimg.cc/vmfNDQzr/Screenshot-7.png",
      github: "https://github.com/Rubaid07/TaskTide",
      live: "https://tasktide07.web.app/"
    },
    {
      title: "Easy Pay",
      description: "Precise Figma-to-code conversion showcasing pixel-perfect implementation skills. Achieved exact design specifications with responsive behavior and modern UI components using Shadcn.",
      tags: ["Next.Js", "Shadcn", "Tailwind CSS", "Figma", "UI/UX", "Responsive"],
      image: "https://i.postimg.cc/662Cp70L/Screenshot-3.png",
      github: "https://github.com/Rubaid07/Easy-Pay",
      live: "https://easy-pay-mauve.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="   relative overflow-hidden pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Terminal Header */}
        <div className="bg-black/80 backdrop-blur-2xl border border-cyan-400/40 rounded-2xl p-5 md:p-7 lg:p-9 shadow-2xl shadow-cyan-500/30 mb-16 relative overflow-hidden">
          {/* Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                  />
                  <motion.div
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                  />
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                </div>
                <span className="text-cyan-400 text-sm font-mono">projects@rubaid:~</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-6 h-6 text-cyan-400" />
              </motion.div>
            </div>

            <div className="font-mono">
              <div className="mb-4">
                <span className="text-green-400">system</span>
                <span className="text-cyan-400">:~$ </span>
                <span className="text-white">{displayText}</span>
                <span className="text-cyan-400 animate-pulse">▊</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  PROJECT MATRIX
                </span>
              </h2>

              <p className="text-gray-400 text-center text-base mb-4">
                <span className="text-cyan-400">//</span> A collection of my development endeavors and innovative solutions
              </p>

              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>System Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Projects Loaded</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
            >
              {/* Team Project Badge */}
              {project.teamProject && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="flex items-center gap-2 bg-black text-cyan-300 font-mono border border-cyan-400/30 px-4 py-2 rounded-full text-sm font-medium shadow-2xl shadow-purple-500/30">
                    <FaUsers className="text-xs" />
                    <span>Team Project</span>
                    <Sparkles className="w-3 h-3 animate-pulse" />
                  </div>
                </div>
              )}

              {/* Project Card */}
              <div className="relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border-2 border-cyan-400/30 rounded-2xl overflow-hidden h-full hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-cyan-500">
                      {project.title}
                    </h3>
                    {project.teamProject && (
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-400/30">
                        {project.teamSize} members
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
                    >
                      <FiExternalLink className="mr-2" />
                      <span className="font-mono text-sm">Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center flex-1 px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-xl border border-gray-600/30 hover:border-cyan-400/30 transition-all duration-300 group"
                    >
                      <FiGithub className="mr-2 group-hover:text-cyan-400 transition-colors duration-300" />
                      <span className="font-mono text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/30 rounded-br-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className="mt-10 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-2xl border-2 border-cyan-400/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse" />

            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                  EXPLORE MORE CODE
                </h3>
                <div
                >
                  <Terminal className="w-6 h-6 text-purple-400" />
                </div>
              </div>

              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Dive deeper into my coding journey, contributions, and open-source projects on GitHub.
              </p>

              <motion.a
                href="https://github.com/Rubaid07"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-mono font-bold border border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <FaGithub size={20} />
                <span>VIEW GITHUB PROFILE</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;