import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-gray-200/50 dark:border-white/10 h-20">
          <div className="flex items-center gap-4">
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-gray-900 dark:text-white text-lg font-bold">
              Israt Jahan
            </h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#"
              >
                Home
              </a>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#about-me"
              >
                About Me
              </a>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#contact"
              >
                Contact
              </a>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-transform hover:scale-105">
              <span className="truncate">Hire Me</span>
            </button>
          </nav>
          <div className="md:hidden">
            <button 
              className="text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-b border-gray-200/50 dark:border-white/10">
             <div className="flex flex-col gap-4">
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#about-me"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </a>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
