import { motion } from "framer-motion";

const experiences = [
  {
    company: "Digital Fly High Solutions",
    role: "Full Stack Development Intern",
    period: "Jul 2025 - Oct 2025",
    description: "Collaborated with internal teams to build multiple web applications. Mentored junior developers and contributed to major projects including The Petro Shop and EchoPulse.",
    tech: ["MERN Stack", "Team Leadership"]
  },
  {
    company: "Tech Grow",
    role: "Python Development Intern",
    period: "Feb 2025 - May 2025",
    description: "Developed data-driven applications using Python. Delivered efficient, high-performing code meeting real-world business requirements.",
    tech: ["Python", "Data Analysis"]
  },
  {
    company: "Acmegrade",
    role: "Data Science Intern",
    period: "Jul 2024 - Sep 2024",
    description: "Developed a Car Price Prediction Model using Python. Performed extensive data preprocessing using Pandas and NumPy.",
    tech: ["Python", "Machine Learning", "Pandas"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full relative z-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>

        <div className="relative border-l border-neutral-800 ml-6 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index} 
                className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-purple-500 border border-neutral-900" />
              
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-neutral-400 mb-2">
                <span className="text-purple-400 font-medium">{exp.company}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.period}</span>
              </div>
              
              <p className="text-neutral-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-400">
                        {t}
                    </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;