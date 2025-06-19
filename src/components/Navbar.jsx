import { FiHome, FiFolder, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { VscCode } from 'react-icons/vsc';

const Navbar = () => {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
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

  return (
 <nav className="bg-gray-800/80 backdrop-blur-lg py-3 px-6 rounded-full shadow-lg border border-gray-700/50 flex justify-between items-center w-max mx-auto z-50">

      {/* Main Navigation Links */}
      <ul className="flex space-x-4">
        {[
  { path: "#home", name: "Home", icon: <FiHome />, id: 'home' },
  { path: "#skills", name: "Skills", icon: <VscCode size={24} />, id: 'skills' },
  { path: "#projects", name: "Projects", icon: <FiFolder />, id: 'projects' },
  { path: "#contact", name: "Contact", icon: <FiMail />, id: 'contact' },
].map((item) => (
  <li key={item.path}>
    <button
      onClick={() => scrollToSection(item.id)}
      className={`flex cursor-pointer items-center px-4 py-2 rounded-full transition-all duration-300 group relative ${
        activeSection === item.id
          ? 'text-cyan-400 bg-gray-700/50'
          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
      }`}
    >
      <span className={`mr-2 transition-colors duration-300 ${
        activeSection === item.id ? 'text-cyan-400' : ''
      }`}>
        {item.icon}
      </span>
      <span className="font-medium">{item.name}</span>
    </button>
  </li>
))}

      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex space-x-3 ml-8 border-l border-gray-700/50 pl-4">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-colors duration-300"
        >
          <FiGithub className="text-lg" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-colors duration-300"
        >
          <FiLinkedin className="text-lg" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;