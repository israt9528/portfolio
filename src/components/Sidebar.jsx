import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-24 flex-col items-center justify-center lg:flex">
      <div className="flex flex-col gap-4">
        <a className="group" href="#">
          <div className="flex items-center justify-center p-3 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-300">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-gray-500 dark:text-gray-400 group-hover:text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </div>
        </a>
        <a className="group" href="mailto:israt9528@gmail.com">
          <div className="flex items-center justify-center p-3 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-300">
            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary text-3xl">
              mail
            </span>
          </div>
        </a>
        <a className="group" href="#">
          <div className="flex items-center justify-center p-3 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-300">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-gray-500 dark:text-gray-400 group-hover:text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.05 3.67c4.55 0 8.23 3.68 8.23 8.23 0 4.55-3.68 8.23-8.23 8.23-1.54 0-3.04-.42-4.38-1.21l-.3-.18-3.26.86.88-3.18-.2-.32a8.18 8.18 0 01-1.26-4.48c0-4.55 3.68-8.23 8.24-8.23zm-1.83 5.3c-.27-.13-1.64-.81-1.9-1-.26-.18-.45-.28-.63.28-.18.56-.72 1.76-.88 2.12-.17.36-.33.4-.63.13-.3-.26-1.25-.46-2.38-1.47-1-1-1.6-2.22-1.8-2.6-.2-.37 0-.56.12-.7l.27-.3c.12-.13.25-.33.38-.55s.12-.2.18-.33c.06-.13.03-.25 0-.38-.03-.13-.63-1.52-.86-2.08-.23-.56-.47-.48-.63-.48-.17 0-.35-.03-.53-.03s-.45.06-1 .56c-.55.5-1.12 1.38-1.12 3.35s1.14 3.9 1.3 4.17c.15.28 2.24 3.4 5.43 4.8 3.18 1.4 3.18.93 3.75.87.57-.06 1.64-.67 1.87-1.32.23-.65.23-1.2.17-1.32-.06-.13-.25-.2-.53-.34z"></path>
            </svg>
          </div>
        </a>
        <a className="group" href="#">
          <div className="flex items-center justify-center p-3 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-300">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-gray-500 dark:text-gray-400 group-hover:text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.526 2.332 1.085 2.902.83.092-.645.348-1.085.635-1.334-2.214-.252-4.543-1.107-4.543-4.93 0-1.088.39-1.979 1.03-2.675-.103-.253-.446-1.266.098-2.638 0 0 .837-.268 2.742 1.025A9.549 9.549 0 0112 6.84c.85.004 1.705.114 2.504.336 1.905-1.293 2.742-1.025 2.742-1.025.546 1.372.201 2.385.1 2.638.64.696 1.03 1.587 1.03 2.675 0 3.833-2.333 4.674-4.555 4.922.357.308.679.918.679 1.85 0 1.334-.012 2.41-.012 2.736 0 .267.18.577.688.48C19.138 20.162 22 16.416 22 12A10 10 0 0012 2z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
