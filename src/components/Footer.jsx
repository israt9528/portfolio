import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/israt9528", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/israt-jahan",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebook />,
    link: "https://facebook.com/yourusername",
    label: "Facebook",
  },
  { icon: <FaEnvelope />, link: "mailto:israt9528@gmail.com", label: "Email" },
  { icon: <FaPhone />, link: "tel:+8801889984859", label: "Phone" },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about-me" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background Gradient Orbs (Matching Contact Section) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-black text-white tracking-tighter uppercase mb-6"
            >
              Israt<span className="text-purple-500">.</span>Jahan
            </motion.h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              A passionate Full-Stack Developer focused on building digital
              experiences that blend performance with high-end aesthetics.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#a855f7" }}
                  className="text-gray-600 text-xl transition-colors"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4 className="text-white text-[10px] font-mono uppercase tracking-[0.3em] mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Column */}
          <div>
            <h4 className="text-white text-[10px] font-mono uppercase tracking-[0.3em] mb-8">
              Say Hello
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:israt9528@gmail.com"
                className="block text-gray-500 hover:text-white transition-colors text-sm font-medium"
              >
                israt9528@gmail.com
              </a>
              <a
                href="tel:+8801889984859"
                className="block text-gray-500 hover:text-white transition-colors text-sm font-medium"
              >
                +880 1889984859
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest text-center md:text-left">
            © 2025 Israt Jahan — Based in Bangladesh
          </p>

          {/* Animated Watermark Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            className="absolute bottom-0 right-0 text-[12vw] font-black text-white pointer-events-none select-none leading-none tracking-tighter"
          >
            ISRAT
          </motion.div>

          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">
            Design inspired by <span className="text-gray-400">Minimalism</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
