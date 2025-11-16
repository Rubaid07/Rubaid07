import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, CodeXml, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Home' },
    { id: 'skills', icon: <CodeXml className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Skills' },
    { id: 'projects', icon: <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Projects' },
    { id: 'contact', icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Contact' },
  ];

  const socialIcons = [
    { icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://github.com/Rubaid07", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.linkedin.com/in/rubaid07", label: "LinkedIn" },
    { icon: <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://x.com/Rubaid077", label: "Twitter" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed w-full z-50  transition-all duration-300 ${scrolled ? 'top-0' : 'top-0 sm:top-4 md:top-6'
            }`}
        >
          {/* blur bg  */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10"
              />
            )}
          </AnimatePresence>

          {/* Main content */}
          <div className="relative z-10 container px-4 sm:px-6 mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between py-2 sm:py-3 md:py-4">
              {/* Logo */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center flex-shrink-0"
              >
                <img
                  src="./R logo.png"
                  className="h-6 sm:h-7 md:h-8"
                  alt="Rubaid Logo"
                />
              </motion.button>

              {/* Nav Items */}
              <div className="flex items-center gap-1 lg:gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer group relative ${activeSection === item.id
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`transition-all duration-300 ${activeSection === item.id
                          ? 'text-cyan-400 scale-110'
                          : 'text-gray-300 group-hover:text-white group-hover:scale-110'
                        }`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 md:gap-3">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden items-center justify-between py-2 sm:py-3">
              {/* Logo */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center flex-shrink-0"
              >
                <img
                  src="./R logo.png"
                  className="h-6 sm:h-7"
                  alt="Rubaid Logo"
                />
              </motion.button>

              {/* Nav Items */}
              <div className="flex items-center gap-4 md:gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${activeSection === item.id
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    whileTap={{ scale: 0.9 }}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;