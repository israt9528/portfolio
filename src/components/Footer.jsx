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
  {
    icon: <FaGithub />,
    link: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebook />,
    link: "https://facebook.com/yourusername",
    label: "Facebook",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:youremail@example.com",
    label: "Email",
  },
  { icon: <FaPhone />, link: "tel:+1234567890", label: "Phone" },
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
    <footer className="relative overflow-hidden bg-gray-900 font-display py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Animated gradient wave */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-[200%] h-full bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-800 opacity-20"
          animate={{ x: ["0%", "-50%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-slate-100 tracking-tight"
        >
          Israt Jahan
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 text-2xl"
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit my ${item.label} profile`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-slate-400 hover:text-primary text-base font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-slate-500 text-sm font-normal mt-4"
        >
          © 2025 Israt Jahan. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
