import { FiHome, FiCode, FiFolder, FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <FiHome size={20} />, label: 'Home' },
    { id: 'skills', icon: <FiCode size={20} />, label: 'Skills' },
    { id: 'projects', icon: <FiFolder size={20} />, label: 'Projects' },
    { id: 'contact', icon: <FiMail size={20} />, label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full md:max-w-3xl top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm '
      } rounded-full border border-gray-800`}
    >
      <div className="flex items-center px-4 py-2">
        <ul className="flex w-full justify-around space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center p-2 sm:px-4 sm:py-2 rounded-full transition-colors cursor-pointer relative ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                aria-label={item.label}
              >
                <span className="sm:mr-2">{item.icon}</span>
                <span className="hidden sm:inline text-sm font-medium">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.span 
                    className="sm:hidden absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full sm:bottom-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;