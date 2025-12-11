import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// IMPORTS
import petroImg from "../../assets/pertoshop.png";
import echoImg from "../../assets/echopulse.png";
import digitalImg from "../../assets/digital.png";
import quicknotesImg from "../../assets/quicknotes.png"; 

const projects = [
  {
    id: 1,
    title: "The Petro Shop",
    description: "A full-stack e-commerce platform with dynamic cart management and seamless transaction handling.",
    className: "md:col-span-2",
    img: petroImg,
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    link: "https://thepetroshop.com"
  },
  {
    id: 2,
    title: "EchoPulse CRM",
    description: "An internal tool for HR and Admin to manage employee attendance, tasks, and analytics.",
    className: "md:col-span-1",
    img: echoImg,
    tech: ["MERN Stack", "Analytics", "RBAC"],
    link: "https://echopulse.petrotechindia.com"
  },
  {
    id: 3,
    title: "Digital Fly High",
    description: "Interactive corporate portfolio with advanced animations and optimized user interaction.",
    className: "md:col-span-1",
    img: digitalImg,
    tech: ["React.js", "Framer Motion", "Node.js"],
    link: "https://digitalflyhigh.in"
  },
  {
    id: 4,
    title: "QuickNotes",
    description: "A secure MERN-stack notes app featuring real-time CRUD operations, a modern glass-morphism UI.",
    className: "md:col-span-2",
    img: quicknotesImg, 
    tech: ["React (Vite)", "Node.js", "MongoDB Atlas", "Express"],
    link: "https://quicknotes-backend-9k0a.onrender.com" 
  },
];

const Projects = () => {
  return (
    <section className="py-20 w-full relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-10 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className={cn(
                "group relative block overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-colors cursor-pointer",
                project.className
              )}
            >
              {/* Image Section - UPDATED */}
              <div className="h-64 w-full overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  // Added 'object-top' to align screenshots to the header
                  // Changed scale-110 to scale-105 for subtler zoom
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Optional: Dark gradient overlay so text is always readable if you move text over image later */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;