import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiNextdotjs, SiReactrouter, SiVercel, SiFigma, SiBootstrap } from 'react-icons/si';
import { TbTools, TbServer, TbDeviceDesktopCode } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <TbDeviceDesktopCode className="text-blue-500" size={24} />,
      topGradient: 'from-blue-500 to-cyan-400',
      bottomGradient: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#e34c26]" size={36} /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#264de4]" size={36} /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={36} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={36} /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952b3]" size={36} /> },
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={36} /> },
        { name: 'React Router', icon: <SiReactrouter className="text-[#CA4245]" size={36} /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" size={36} /> },
        { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" size={36} /> }
      ]
    },
    {
      name: 'Backend',
      icon: <TbServer className="text-green-500" size={24} />,
      topGradient: 'from-green-500 to-teal-400',
      bottomGradient: 'from-teal-400 to-green-500',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" size={36} /> },
        { name: 'Express.js', icon: <SiExpress className="text-black" size={36} /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={36} /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" size={36} /> }
      ]
    },
    {
      name: 'Tools',
      icon: <TbTools className="text-purple-500" size={24} />,
      topGradient: 'from-purple-500 to-pink-500',
      bottomGradient: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" size={36} /> },
        { name: 'GitHub', icon: <FaGithub className="text-black" size={36} /> },
        { name: 'Vercel', icon: <SiVercel className="text-black" size={36} /> },
        { name: 'VSCode', icon: <VscVscode className="text-[#007ACC]" size={36} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          My Technical Stack
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Categorized by development expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="relative rounded-lg overflow-hidden p-[2px]">
              
              {/* Top Gradient Animation */}
            <div className="h-2 relative overflow-hidden mt-10">
  <motion.div
    style={{
      backgroundImage: 'linear-gradient(to right, #3b82f6, #06b6d4)',
      backgroundSize: '200% 200%',
      height: '100%',
    }}
    initial={{ backgroundPosition: '100% 50%' }}
    animate={{ backgroundPosition: '0% 50%' }}
    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
  />
</div>
              {/* Bottom Gradient Animation */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.bottomGradient}`}
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'linear'
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              />

              {/* Card Content */}
              <div className="relative bg-white rounded-lg h-full shadow-md">
                <div className="flex items-center p-4 border-b border-gray-200">
                  <div className="mr-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-2 hover:bg-gray-50 rounded transition-colors duration-150"
                      >
                        <div className="text-3xl mb-2 hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
