import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <HeroHighlight containerClassName="h-screen min-h-[600px]">
      <div className="text-center max-w-4xl mx-auto px-4 relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-tight"
        >
          Hi, I'm <span className="text-purple-500">Priyanshu Shrivastava</span>.
          <br />
          I build{" "}
          <Highlight className="text-black dark:text-white">
            scalable MERN Stack applications.
          </Highlight>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-neutral-400 text-lg md:text-2xl mt-6 max-w-2xl mx-auto"
        >
          Full Stack Developer • React.js • Node.js • System Design
        </motion.p>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10"
        >
          <a
            href="/resume.pdf"
            download="Priyanshu_Shrivastava_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden hover:bg-neutral-200 transition-colors"
          >
            <FaDownload className="group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;