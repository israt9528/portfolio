import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 sm:py-20">
            <div className="layout-content-container w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <p className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Get in Touch
                    </p>
                    <p className="text-gray-500 dark:text-[#9db0b9] text-base font-normal leading-normal">
                      Have a project in mind or just want to say hi? Feel free to
                      send me a message. I'll get back to you as soon as possible.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 min-h-14">
                      <div className="text-gray-800 dark:text-white flex items-center justify-center rounded-lg bg-gray-100 dark:bg-[#283339] shrink-0 size-10">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <p className="text-gray-800 dark:text-white text-base font-medium leading-normal flex-1 truncate">
                        israt9528@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center gap-4 min-h-14">
                      <div className="text-gray-800 dark:text-white flex items-center justify-center rounded-lg bg-gray-100 dark:bg-[#283339] shrink-0 size-10">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <p className="text-gray-800 dark:text-white text-base font-medium leading-normal flex-1 truncate">
                        +8801889984859
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="gap-4 flex flex-wrap justify-start">
                      <a
                        className="flex flex-col items-center gap-2 p-2.5 text-center w-20 group"
                        href="#"
                      >
                        <div className="rounded-full bg-gray-100 dark:bg-[#283339] group-hover:bg-primary/20 p-2.5 transition-colors">
                          <span className="material-symbols-outlined text-gray-700 dark:text-white group-hover:text-primary transition-colors">
                            code
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">
                          GitHub
                        </p>
                      </a>
                      <a
                        className="flex flex-col items-center gap-2 p-2.5 text-center w-20 group"
                        href="#"
                      >
                        <div className="rounded-full bg-gray-100 dark:bg-[#283339] group-hover:bg-primary/20 p-2.5 transition-colors">
                          <span className="material-symbols-outlined text-gray-700 dark:text-white group-hover:text-primary transition-colors">
                            work
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">
                          LinkedIn
                        </p>
                      </a>
                      <a
                        className="flex flex-col items-center gap-2 p-2.5 text-center w-20 group"
                        href="#"
                      >
                        <div className="rounded-full bg-gray-100 dark:bg-[#283339] group-hover:bg-primary/20 p-2.5 transition-colors">
                          <span className="material-symbols-outlined text-gray-700 dark:text-white group-hover:text-primary transition-colors">
                            social_leaderboard
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">
                          Facebook
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#111618] p-8 rounded-xl shadow-lg dark:border dark:border-[#283339]">
                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
                          htmlFor="first-name"
                        >
                          First Name
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-gray-100 dark:bg-[#283339] border-transparent focus:border-primary focus:ring-primary text-gray-800 dark:text-white"
                          id="first-name"
                          name="first-name"
                          placeholder="John"
                          type="text"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
                          htmlFor="last-name"
                        >
                          Last Name
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-gray-100 dark:bg-[#283339] border-transparent focus:border-primary focus:ring-primary text-gray-800 dark:text-white"
                          id="last-name"
                          name="last-name"
                          placeholder="Doe"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full h-12 px-4 rounded-lg bg-gray-100 dark:bg-[#283339] border-transparent focus:border-primary focus:ring-primary text-gray-800 dark:text-white"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        type="email"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full p-4 rounded-lg bg-gray-100 dark:bg-[#283339] border-transparent focus:border-primary focus:ring-primary text-gray-800 dark:text-white"
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        rows="5"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-opacity-80 text-white text-base font-bold leading-normal tracking-[0.015em]"
                        type="submit"
                      >
                        <span className="truncate">Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Contact;
