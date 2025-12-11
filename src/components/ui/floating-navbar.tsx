import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Cpu 
} from "lucide-react"; // We installed lucide-react earlier

export const FloatingNav = () => {
  // Items for the navigation
  const navItems = [
    { name: "Home", link: "#", icon: <Home className="h-4 w-4" /> },
    { name: "Work", link: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Skills", link: "#skills", icon: <Cpu className="h-4 w-4" /> },
    { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }} // Wait for hero animation to finish
        className={cn(
          "fixed z-[5000] bottom-10 inset-x-0 mx-auto",
          "flex max-w-fit items-center justify-center gap-2",
          "px-4 py-3 rounded-full",
          "bg-black/50 backdrop-blur-md border border-white/10 shadow-xl"
        )}
      >
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-4 py-2 rounded-full flex items-center gap-2 transition-colors hover:bg-neutral-800"
          >
            {/* The Icon */}
            <span className="text-neutral-400 group-hover:text-white relative z-20">
              {item.icon}
            </span>

            {/* The Text (Only visible on hover) */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium text-white whitespace-nowrap overflow-hidden relative z-20"
                >
                  {item.name}
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};