import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiMongodb, SiExpress, SiCplusplus, SiTailwindcss 
} from "react-icons/si";

// REAL SKILLS FROM RESUME
const skills = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "SQL", icon: <FaDatabase className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technical Expertise
        </h2>
        <p className="text-neutral-400">The stack I use to build scalable solutions.</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <div className="flex animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="mx-8 flex items-center gap-2 px-6 py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-lg font-medium text-neutral-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;