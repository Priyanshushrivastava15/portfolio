import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // YOUR REAL EMAIL
  const email = "priyanshushrivastavaa@gmail.com"; 

  const handleClick = () => {
    if (copied) {
        // Second Click: Redirect to Mail App
        window.location.href = `mailto:${email}`;
    } else {
        // First Click: Copy to Clipboard
        navigator.clipboard.writeText(email);
        setCopied(true);
        
        // Reset back to original state after 3 seconds
        setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-20 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
        >
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            innovative together.
          </span>
        </motion.h2>

        <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Based in Indore. Available for freelance and full-time opportunities.
        </p>

        {/* Smart Email Button */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 md:px-8 bg-white/5 border border-white/10 rounded-xl md:rounded-full hover:bg-white/10 transition-all cursor-pointer overflow-hidden max-w-full w-auto"
        >
          <FaEnvelope className="text-purple-400 flex-shrink-0" />
          
          <span className="text-sm md:text-xl font-medium text-white break-all text-center">
            {copied ? "Email Copied! (Click to Open)" : email}
          </span>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.button>
        
        {/* Contact Grid */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-neutral-400">
                <FaPhone /> <span>+91 9977264510</span>
            </div>
            <a 
              href="https://linkedin.com/in/priyanshushrivastavaa" // Verify your actual LinkedIn URL
              target="_blank" 
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
                <FaLinkedin /> <span>LinkedIn</span>
            </a>
        </div>

        <footer className="mt-20 text-neutral-600 text-sm">
          © 2025 Priyanshu Shrivastava. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default Contact;