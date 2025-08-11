'use client';
import {
  FaReact, FaJs, FaGithub, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiFirebase, SiTypescript, SiVercel,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { VscChevronDown } from 'react-icons/vsc';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16 sm:pt-0"
    >
      {/* Blurry Circles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <motion.div
            className="sm:absolute sm:top-1/4 sm:left-1/4 md:w-48 md:h-48 sm:w-72 sm:h-72 sm:bg-blue-600 sm:rounded-full sm:mix-blend-multiply sm:filter sm:blur-xl sm:opacity-20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-11/12 sm:w-10/12 lg:w-9/12 mx-auto py-10 sm:py-20 gap-8 sm:gap-16 z-10">

        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Hey, I'm Rubaid Islam
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I am a passionate <span className="font-semibold text-cyan-400">Frontend Web Developer</span> who loves creating beautiful, efficient, and user-friendly websites.
          </p>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I transform ideas into pixel-perfect experiences using <span className="text-blue-400">React</span>, <span className="text-blue-400">JavaScript</span>, and <span className="text-blue-400">TailwindCSS</span>.
          </p>

          <div className="flex gap-3 justify-center md:justify-start pt-2 sm:pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md text-white font-medium hover:shadow-lg hover:from-cyan-500 hover:to-blue-600 transition duration-300 cursor-pointer text-sm sm:text-base"
            >
              View Projects
            </button>

            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = "https://drive.google.com/uc?export=download&id=10CJ6GhKfSaMA8v10MiWYfTuNDdVe1VQD";
                link.download = "Rubaid_Islam_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-md text-cyan-400 font-medium hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              Download Resume
            </button>

          </div>
        </div>

        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          {/* Circle background SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 600 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="280" stroke="white" strokeOpacity="1" fill="none" />
              <circle cx="300" cy="300" r="200" stroke="white" strokeOpacity="1" fill="none" />
              <circle cx="300" cy="300" r="120" stroke="white" strokeOpacity="1" fill="none" />
              <line x1="300" y1="0" x2="300" y2="600" stroke="white" strokeOpacity="1" />
              <line x1="0" y1="300" x2="600" y2="300" stroke="white" strokeOpacity="1" />
              <line x1="80" y1="80" x2="520" y2="520" stroke="white" strokeOpacity="1" />
              <line x1="520" y1="80" x2="80" y2="520" stroke="white" strokeOpacity="1" />
            </svg>
          </div>

          {/* Center Icon */}
          <div className="absolute top-1/2 left-1/2 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-400/30 -translate-x-1/2 -translate-y-1/2 z-10">
            <SiTypescript className="text-cyan-400 text-xl sm:text-3xl" />
          </div>

          {/* Orbit Icons */}
          {[
            { icon: <FaReact className="text-cyan-400 text-xl sm:text-2xl" />, position: 'top-4 sm:top-6 left-1/2' },
            { icon: <FaJs className="text-yellow-400 text-xl sm:text-2xl" />, position: 'top-[20%] right-[20%]' },
            { icon: <SiFirebase className="text-orange-400 text-xl sm:text-2xl" />, position: 'top-[23%] left-[18%]' },
            { icon: <SiMongodb className="text-green-500 text-xl sm:text-2xl" />, position: 'top-[45%] right-[18%]' },
            { icon: <SiTailwindcss className="text-cyan-400 text-xl sm:text-2xl" />, position: 'bottom-[20%] right-[16%]' },
            { icon: <SiVercel className="text-white text-xl sm:text-2xl" />, position: 'bottom-[40%] left-[22%]' },
            { icon: <FaGithub className="text-gray-300 text-xl sm:text-2xl" />, position: 'bottom-16 sm:bottom-20 left-[46%]' },
            { icon: <FaCss3Alt className="text-blue-400 text-xl sm:text-2xl" />, position: 'bottom-[20%] left-[8%]' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.position} w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 z-10`}
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-10 animate-bounce z-10 "
      >
        <button
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-1 sm:p-2 rounded-full bg-gray-800/80 border border-gray-700 hover:border-cyan-400 group transition-all duration-300 cursor-pointer"
          aria-label="Scroll to skills section"
        >
          <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
            <VscChevronDown size={20} className="sm:w-6 sm:h-6" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Home;