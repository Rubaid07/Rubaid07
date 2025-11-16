'use client';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Terminal } from 'lucide-react';
import LaserFlow from './LaserFlow';

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-black overflow-hidden flex items-center"
    >
      {/* Laser Background */}
      <div className="absolute inset-0 pointer-events-none flex justify-center md:h-[1000px] sm:h-[780px] h-[710px]">
        <div className="w-full max-w-8xl">
          <LaserFlow
            horizontalBeamOffset={0.02}
            verticalBeamOffset={0.0}
            color="#06b6d4"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative w-full z-10 flex flex-col items-center">

        {/* Intro Text  */}
        <div className="w-full container px-4 sm:px-6 mt-24 md:mt-52">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 leading-tight">
              Hey, I'm Rubaid Islam
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I am a passionate Frontend Web Developer who loves creating beautiful,
              efficient, and user-friendly websites.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I transform ideas into pixel-perfect experiences using React, NextJs,
              and TailwindCSS.
            </p>
          </motion.div>
        </div>

        {/* Terminal */}
        <div className="w-full container px-4 sm:px-6 mt-16 sm:mt-24 md:mt-20">
          <div className="w-full max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black border-2 border-cyan-400/50 rounded-xl p-5 md:p-7 lg:p-9 shadow-[0_0_80px_rgba(6,182,212,0.5)] backdrop-blur-sm relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-xl"></div>

              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm hidden sm:block">
                    terminal@rubaid:~
                  </span>
                </div>
                <Terminal className="text-cyan-400 w-5 h-5 animate-pulse" />
              </div>

              <div className="font-mono space-y-4 relative z-10 text-sm md:text-base">
                <div className="flex flex-wrap items-center gap-1 text-cyan-300">
                  <span className="text-green-400">rubaid@portfolio</span>
                  <span>:~$</span>
                  <span className="text-white">cat introduction.txt</span>
                </div>

                <div className="text-cyan-300 text-xl md:text-2xl lg:text-3xl min-h-[2em] font-bold">
                  <Typewriter
                    words={["I'm Rubaid Islam", 'Frontend Developer', 'UI/UX Enthusiast', 'Tech Explorer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1800}
                  />
                </div>

                <div className="text-gray-400 space-y-1 text-xs md:text-sm">
                  <p>&gt; Crafting digital experiences</p>
                  <p>&gt; Turning ideas into reality</p>
                  <p>&gt; Powered by code & coffee</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={() =>
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="px-5 py-2.5 cursor-pointer border-2 border-cyan-400 text-cyan-300 rounded-lg font-mono text-sm hover:bg-cyan-500/20 transition"
                  >
                    $ view_projects.sh
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        'https://drive.google.com/file/d/1mD_1eViwBpOfKJWLpn7wPf0bJ37qHvg5/view?usp=drive_link',
                        '_blank'
                      )
                    }
                    className="px-5 py-2.5 cursor-pointer border-2 border-purple-400 text-purple-300 rounded-lg font-mono text-sm hover:bg-purple-500/20 transition"
                  >
                    $ view_resume.pdf
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
