'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Cpu, Terminal, Mail, MessageSquare, Activity, Send } from 'lucide-react';

const Contact = () => {
  const [displayText, setDisplayText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    '$ node contact-system.js',
    '$ git init connection',
    '$ npm run message',
    '$ system ready'
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

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/Rubaid07",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-500 hover:to-gray-700",
      borderColor: "border-gray-500/30"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rubaid07",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <FaSquareXTwitter className="text-xl" />,
      name: "X",
      url: "https://x.com/Rubaid077",
      color: "from-black to-gray-800",
      hoverColor: "hover:from-gray-700 hover:to-gray-900",
      borderColor: "border-gray-600/30"
    },
    {
      icon: <FaFacebook className="text-xl" />,
      name: "Facebook",
      url: "https://www.facebook.com/rubaid.rahman.589",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-400 hover:to-blue-600",
      borderColor: "border-blue-400/30"
    },
  ];

  return (
    <section id="contact" className="py-20   relative overflow-hidden">
      {/* Animated Bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal */}
        <div
          className="bg-black/80 backdrop-blur-2xl border border-cyan-400/40 rounded-2xl p-5 md:p-7 lg:p-9 shadow-2xl shadow-cyan-500/30 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <motion.div className="w-3 h-3 bg-red-500 rounded-full" />
                  <motion.div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <motion.div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-cyan-400 text-sm font-mono">contact@rubaid:~</span>
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
                  CONNECT MATRIX
                </span>
              </h2>

              <p className="text-gray-400 text-center text-base mb-4">
                <span className="text-cyan-400">//</span> Let's collaborate and build something amazing together
              </p>

              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>System Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Connection Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Links Section */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border-2 border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-400/30">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-mono">
                  DIGITAL PRESENCE
                </h3>
              </div>

              {/* Email */}
              <div className="flex items-start mb-6 p-4 bg-gray-800/30 rounded-xl border border-gray-600/30 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-cyan-500/20 rounded-lg border border-cyan-400/30">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-400 font-mono">EMAIL</h4>
                  <a
                    href="mailto:mohammadrubaid07@gmail.com"
                    className="text-cyan-300 hover:text-cyan-200 font-mono text-sm transition-colors duration-300"
                  >
                    mohammadrubaid07@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-xl border-2 ${social.borderColor} bg-gradient-to-r ${social.color} ${social.hoverColor} text-white transition duration-300 group backdrop-blur-sm`}
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="font-mono text-sm">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Preferred Contact Methods */}
              <div className="mt-6 pt-6 border-t border-gray-600/30">
                <h4 className="text-sm font-medium text-gray-400 font-mono mb-3">PREFERRED CHANNELS</h4>
                <div className="flex flex-wrap gap-2">
                  {['Email', 'LinkedIn', 'Facebook'].map((method, index) => (
                    <span
                      key={method}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-mono rounded-full border border-cyan-400/30 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                      {method}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-mono mt-3">
                  Response time: <span className="text-cyan-400">~24 hours</span> on weekdays
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div
              className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-2xl border-2 border-cyan-400/30 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse" />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-cyan-500/30 rounded-lg border border-cyan-400/30">
                    <MessageSquare className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-mono">
                    COLLABORATION READY
                  </h3>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Let's Build Together
                </h3>
                <p className="text-cyan-100 text-center mb-6 leading-relaxed">
                  I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can bring your ideas to life with cutting-edge technology!
                </p>

                <motion.a
                  href="mailto:mohammadrubaid07@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Rubaid,%0A%0AI found your portfolio and wanted to reach out..."
                  whileHover={{ scale: 0.95 }}
                  className="group/button relative flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-mono font-bold py-4 px-6 rounded-xl border border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>SEND MESSAGE</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-700 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                </motion.a>

                <p className="text-cyan-200 text-sm text-center mt-4 font-mono">
                  Or just say hi! 👋 Love connecting with fellow developers
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-6">
              <p className="text-gray-400 italic text-sm font-mono">
                "Great collaborations begin with simple conversations. Reach out - whether for projects, tech discussions, or just to share your favorite stack!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;