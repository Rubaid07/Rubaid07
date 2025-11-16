'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Cpu, Code2, Database, Cloud, Terminal, Sparkles, Zap, Rocket,
  Server, Package, Activity
} from 'lucide-react';
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap,
  SiReact, SiReactrouter, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiFirebase, SiGit, SiGithub, SiVercel,
  SiTypescript, SiGo, SiDocker, SiAwsamplify, SiNginx, SiPostgresql,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayText, setDisplayText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    '$ npm run skills',
    '$ git init tech-stack',
    '$ node scan-stack.js',
    '$ system online'
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

  const skillCategories = {
    frontend: {
      icon: <Code2 className="w-5 h-5" />,
      color: 'from-cyan-400 via-blue-500 to-indigo-500',
      border: 'border-cyan-400/30',
      glow: 'shadow-cyan-500/30',
      skills: [
        { name: 'HTML5', icon: <SiHtml5 className="w-7 h-7" />, color: 'text-orange-500', bgGradient: 'from-orange-500/20 to-orange-600/20' },
        { name: 'CSS3', icon: <SiCss3 className="w-7 h-7" />, color: 'text-blue-500', bgGradient: 'from-blue-500/20 to-blue-600/20' },
        { name: 'JavaScript', icon: <SiJavascript className="w-7 h-7" />, color: 'text-yellow-400', bgGradient: 'from-yellow-400/20 to-yellow-500/20' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-7 h-7" />, color: 'text-cyan-400', bgGradient: 'from-cyan-400/20 to-cyan-500/20' },
        { name: 'Bootstrap', icon: <SiBootstrap className="w-7 h-7" />, color: 'text-purple-500', bgGradient: 'from-purple-500/20 to-purple-600/20' },
        { name: 'React', icon: <SiReact className="w-7 h-7" />, color: 'text-cyan-300', bgGradient: 'from-cyan-300/20 to-cyan-400/20' },
        { name: 'React Router', icon: <SiReactrouter className="w-7 h-7" />, color: 'text-red-400', bgGradient: 'from-red-400/20 to-red-500/20' },
        { name: 'Next.js', icon: <SiNextdotjs className="w-7 h-7" />, color: 'text-white', bgGradient: 'from-white/20 to-gray-300/20' }
      ]
    },
    backend: {
      icon: <Server className="w-5 h-5" />,
      color: 'from-emerald-400 via-green-500 to-teal-500',
      border: 'border-emerald-400/30',
      glow: 'shadow-emerald-500/30',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="w-7 h-7" />, color: 'text-green-500', bgGradient: 'from-green-500/20 to-green-600/20' },
        { name: 'Express.js', icon: <SiExpress className="w-7 h-7" />, color: 'text-gray-300', bgGradient: 'from-gray-300/20 to-gray-400/20' },
        { name: 'MongoDB', icon: <SiMongodb className="w-7 h-7" />, color: 'text-green-400', bgGradient: 'from-green-400/20 to-green-500/20' },
        { name: 'Firebase', icon: <SiFirebase className="w-7 h-7" />, color: 'text-yellow-500', bgGradient: 'from-yellow-500/20 to-yellow-600/20' }
      ]
    },
    tools: {
      icon: <Package className="w-5 h-5" />,
      color: 'from-purple-400 via-pink-500 to-rose-500',
      border: 'border-purple-400/30',
      glow: 'shadow-purple-500/30',
      skills: [
        { name: 'Git', icon: <SiGit className="w-7 h-7" />, color: 'text-orange-600', bgGradient: 'from-orange-600/20 to-orange-700/20' },
        { name: 'GitHub', icon: <SiGithub className="w-7 h-7" />, color: 'text-gray-200', bgGradient: 'from-gray-200/20 to-gray-300/20' },
        { name: 'Vercel', icon: <SiVercel className="w-7 h-7" />, color: 'text-white', bgGradient: 'from-white/20 to-gray-100/20' },
        { name: 'VSCode', icon: <VscVscode className="w-7 h-7" />, color: 'text-blue-400', bgGradient: 'from-blue-400/20 to-blue-500/20' },
      ]
    },
    learning: {
      icon: <Zap className="w-5 h-5" />,
      color: 'from-orange-400 via-red-500 to-pink-500',
      border: 'border-orange-400/30',
      glow: 'shadow-orange-500/30',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript className="w-7 h-7" />, color: 'text-blue-500', bgGradient: 'from-blue-500/20 to-blue-600/20' },
        { name: 'GoLang', icon: <SiGo className="w-7 h-7" />, color: 'text-cyan-400', bgGradient: 'from-cyan-400/20 to-cyan-500/20' },
        { name: 'Docker', icon: <SiDocker className="w-7 h-7" />, color: 'text-blue-400', bgGradient: 'from-blue-400/20 to-blue-500/20' },
        { name: 'AWS', icon: <SiAwsamplify className="w-7 h-7" />, color: 'text-orange-400', bgGradient: 'from-orange-400/20 to-orange-500/20' },
        { name: 'Nginx', icon: <SiNginx className="w-7 h-7" />, color: 'text-green-500', bgGradient: 'from-green-500/20 to-green-600/20' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-7 h-7" />, color: 'text-blue-600', bgGradient: 'from-blue-600/20 to-blue-700/20' }
      ]
    }
  };

  const allSkills = Object.entries(skillCategories)
    .filter(([key]) => key !== 'learning')
    .flatMap(([_, cat]) => cat.skills);

  return (
    <section id="skills" className="bg-gradient-to-br from-black via-gray-900 to-black py-36 relative overflow-hidden ">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating Tech Icons */}
      {[...Array(12)].map((_, i) => {
        const icons = [Code2, Database, Cloud, Terminal, Cpu, Rocket];
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon size={40} />
          </motion.div>
        );
      })}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Terminal Header */}
        <div className="bg-black/80 backdrop-blur-2xl border border-cyan-400/40 rounded-2xl p-5 md:p-7 lg:p-9 shadow-2xl shadow-cyan-500/30 mb-12 relative overflow-hidden">
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
                <span className="text-cyan-400 text-sm font-mono">tech-matrix@rubaid:~</span>
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
                  TECH STACK MATRIX
                </span>
              </h2>

              <p className="text-gray-400 text-center text-base mb-4">
                <span className="text-cyan-400">//</span> My complete arsenal of development technologies
              </p>

              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>System Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Skills Loaded</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(activeCategory === key ? 'all' : key)}
              className={`relative px-6 py-3 rounded-xl border-2 font-mono text-sm font-bold transition-all duration-300 flex items-center space-x-2 overflow-hidden hover:cursor-pointer ${activeCategory === key || activeCategory === 'all'
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-2xl ${category.glow}`
                  : `${category.border} text-gray-400 hover:text-white hover:border-cyan-400/60 bg-black/40 backdrop-blur-sm`
                }`}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background Glow Effect */}
              {(activeCategory === key || activeCategory === 'all') && (
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="relative z-10 flex items-center space-x-2">
                {category.icon}
                <span className="capitalize">{key}</span>
                {activeCategory === key && <Sparkles className="w-4 h-4 animate-spin" />}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
        >
          {(activeCategory === 'all' ? allSkills : skillCategories[activeCategory]?.skills || []).map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative"
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className={`relative bg-gradient-to-br ${skill.bgGradient} rounded-2xl p-4 shadow-lg`}>
                  
                  <div className={`relative ${skill.color}`}>
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-center text-xs md:text-sm font-mono font-bold text-gray-400">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl px-6 py-4 shadow-lg shadow-cyan-500/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-gray-300 font-mono text-sm">
              Constantly learning and evolving my tech stack
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-5 h-5 text-purple-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;