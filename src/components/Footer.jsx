import React from 'react';

const Footer = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display">
      <div className="flex items-end justify-center">
        <footer className="w-full bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
              Israt Jahan
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                aria-label="Visit my GitHub profile"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  code
                </span>
              </a>
              <a
                aria-label="Visit my LinkedIn profile"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  work
                </span>
              </a>
              <a
                aria-label="Follow me on Facebook"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  social_leaderboard
                </span>
              </a>
              <a
                aria-label="Send me an email"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                href="mailto:johndoe@example.com"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  mail
                </span>
              </a>
              <a
                aria-label="Call me"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                href="tel:+1234567890"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  call
                </span>
              </a>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors duration-300"
                href="#"
              >
                Home
              </a>
              <a
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors duration-300"
                href="#about-me"
              >
                About
              </a>
              <a
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors duration-300"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors duration-300"
                href="#"
              >
                My Skills
              </a>
              <a
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors duration-300"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-4">
              © 2025 Israt Jahan. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
