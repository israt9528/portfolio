import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", link: "#", id: "home" },
    { label: "About Me", link: "#about-me", id: "about-me" },
    { label: "Skills", link: "#skills", id: "skills" },
    { label: "Projects", link: "#projects", id: "projects" },
    { label: "Contact", link: "#contact", id: "contact" },
  ];

  // Detect scroll for shadow
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.link === "#" ? "body" : item.link)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id || "home");
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300
        bg-gray-900/90  /* Fully dark background by default */
        ${isScrolled ? "shadow-xl shadow-purple-600/20" : "shadow-none"}
        border-b border-transparent
        before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-b-xl
        before:border-b before:border-purple-500/30
        before:shadow-[0_0_25px_2px_rgba(168,85,247,0.25)]
      `}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Glowing Logo */}
          <div className="flex items-center gap-3">
            <div className="p-[12px] rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_0_20px_5px_rgba(168,85,247,0.45)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                />
              </svg>
            </div>

            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Israt Jahan
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`relative text-sm font-medium transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                      : "text-gray-300"
                  }
                  hover:-translate-y-[3px] hover:drop-shadow-[0_8px_12px_rgba(168,85,247,0.35)]
                  hover:text-transparent hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 hover:bg-clip-text
                `}
              >
                {item.label}

                {/* Gradient underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "w-full bg-gradient-to-r from-purple-400 to-pink-400"
                        : "w-0 group-hover:w-full"
                    }`}
                />
              </a>
            ))}

            <button
              className="flex items-center justify-center h-10 px-5 rounded-xl 
              bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.45)]
              font-semibold transition hover:scale-105 hover:-translate-y-[3px]"
            >
              Hire Me
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-600/40 mt-2 py-4 bg-gray-900/95 backdrop-blur-xl rounded-b-xl shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            <div className="flex flex-col gap-4 text-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-all
                    ${
                      activeSection === item.id
                        ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                        : "text-gray-300"
                    }
                    hover:-translate-y-[2px]
                    hover:text-transparent hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 hover:bg-clip-text`}
                >
                  {item.label}
                </a>
              ))}

              <button
                className="mt-2 mx-auto w-32 h-10 rounded-xl 
                bg-gradient-to-r from-purple-600 to-pink-500 text-white 
                shadow-[0_0_20px_rgba(168,85,247,0.45)]
                font-semibold transition hover:scale-105 hover:-translate-y-[3px]"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
