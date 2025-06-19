'use client';
import {
  FaReact, FaJs, FaGithub, FaAws, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiFirebase, SiTypescript, SiApollographql, SiVercel,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center fixed top-6 z-50">
        <Navbar />
      </div>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
      >

        {/* Blurry Circles Background using framer-motion */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between w-9/12 mx-auto py-20 gap-16 z-10">

          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Hey, I'm Rubaid Islam
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate <span className="font-semibold text-cyan-400">Frontend Web Developer</span> who loves creating beautiful, efficient, and user-friendly websites. With a keen eye for detail and a drive for innovation, I specialize in crafting responsive layouts, interactive designs, and seamless user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I transform ideas into pixel-perfect experiences using <span className="text-blue-400">React</span>, <span className="text-blue-400">Next.js</span>, <span className="text-blue-400">TypeScript</span>, and modern CSS. My code balances clean architecture with visual polish.
            </p>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a href="/projects">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md text-white font-medium hover:shadow-lg hover:from-cyan-500 hover:to-blue-600 transition duration-300 cursor-pointer">
                  View Projects
                </button>
              </a>
              <a href="/contact">
                <button className="px-6 py-3 border border-cyan-400 rounded-md text-cyan-400 font-medium hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Right Orbit Icons Section */}
          <div className="relative w-[400px] h-[400px]">
            {/* Circle background SVG */}
            <motion.div
              className="relative w-[400px] h-[400px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 600 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="300" cy="300" r="280" stroke="white" strokeOpacity="1" fill="none" />
                  <circle cx="300" cy="300" r="200" stroke="white" strokeOpacity="1" fill="none" />
                  <circle cx="300" cy="300" r="120" stroke="white" strokeOpacity="1" fill="none" />
                  <line x1="300" y1="0" x2="300" y2="600" stroke="white" strokeOpacity="1" />
                  <line x1="0" y1="300" x2="600" y2="300" stroke="white" strokeOpacity="1" />
                  <line x1="80" y1="80" x2="520" y2="520" stroke="white" strokeOpacity="1" />
                  <line x1="520" y1="80" x2="80" y2="520" stroke="white" strokeOpacity="1" />
                  <path d="M300,20 A280,280 0 0,1 520,300" stroke="gray" strokeOpacity="0.3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M460,140 A200,200 0 0,1 460,460" stroke="gray" strokeOpacity="0.3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M300,180 A120,120 0 0,1 420,300" stroke="gray" strokeOpacity="0.3" fill="none" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="gray" fillOpacity="1" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Center Icon */}
            <div className="absolute top-1/2 left-1/2 w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-400/30 -translate-x-1/2 -translate-y-1/2 z-10">
              <SiTypescript className="text-cyan-400 text-3xl" />
            </div>

            {/* Orbit Icons */}
            {[
              { icon: <FaReact className="text-cyan-400 text-2xl" />, position: 'top-6 left-1/2' },
              { icon: <FaJs className="text-yellow-400 text-2xl" />, position: 'top-[20%] right-[20%]' },
              { icon: <SiFirebase className="text-orange-400 text-2xl" />, position: 'top-[32%] left-[18%]' },
              { icon: <SiApollographql className="text-pink-400 text-2xl" />, position: 'top-[35%] right-[18%]' },
              { icon: <FaAws className="text-amber-400 text-2xl" />, position: 'bottom-[35%] right-[16%]' },
              { icon: <SiVercel className="text-white text-2xl" />, position: 'bottom-[30%] left-[22%]' },
              { icon: <FaGithub className="text-gray-300 text-2xl" />, position: 'bottom-6 left-1/2' },
              { icon: <FaCss3Alt className="text-blue-400 text-2xl" />, position: 'bottom-[20%] left-[8%]' },
            ].map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 z-10`}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Button with bounce animation using framer-motion */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <button
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 rounded-full bg-gray-800/80 border border-gray-700 hover:border-cyan-400 group transition-all duration-300 cursor-pointer"
            aria-label="Scroll to skills section"
          >
            <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
