import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", link: "#", id: "home" },
    { label: "About", link: "#about-me", id: "about-me" },
    { label: "Skills", link: "#skills", id: "skills" },
    { label: "Projects", link: "#projects", id: "projects" },
    { label: "Contact", link: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-10">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out rounded-2xl md:rounded-full border ${
          isScrolled
            ? "bg-gray-950/80 border-white/10 backdrop-blur-md py-3 shadow-2xl"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col leading-none cursor-pointer">
            <span className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-purple-200 to-white/50 bg-clip-text text-transparent">
              IJ.
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full
                  ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                onClick={() => setActiveSection(item.id)}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Action Button - UPDATED GRADIENT & SHIMMER */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative px-7 py-3 rounded-full overflow-hidden group bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-purple-500/25 transition-all"
            >
              {/* Shimmer Effect overlay */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                  repeatDelay: 2,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <span className="relative z-10">Let's Talk</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              />
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-2xl rounded-2xl mt-2 border border-white/10 mx-2"
            >
              <div className="flex flex-col p-6 gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSection(item.id);
                    }}
                    className={`text-2xl font-semibold ${
                      activeSection === item.id
                        ? "text-purple-400"
                        : "text-white/70"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <hr className="border-white/10" />
                <a
                  href="#contact"
                  className="w-full py-4 text-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
