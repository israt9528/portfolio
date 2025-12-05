import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-background-dark font-display antialiased">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              My Projects
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400">
              A collection of projects showcasing my skills in frontend development.
            </p>
          </header>
          <main className="space-y-8">
            <div className="bg-slate-900/40 p-6 sm:p-8 md:p-10 rounded-DEFAULT backdrop-blur-lg border border-slate-800 shadow-2xl shadow-black/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-2xl font-bold text-slate-100">
                    AI Chat Interface
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Developing the next generation of conversational AI.
                  </p>
                  <p className="mt-6 text-base text-slate-300">
                    A sleek and responsive chat interface built with modern web
                    technologies. It features real-time message updates, user
                    authentication, and a clean, intuitive design optimized for
                    user experience.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-primary/5 text-primary hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors"
                      href="#"
                    >
                      Know More
                      <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center px-5 py-2.5 text-slate-300 hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors"
                      href="#"
                    >
                      Live Preview
                      <span className="material-symbols-outlined ml-2 text-base">open_in_new</span>
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    alt="AI Chat Interface project preview showing a dark themed application with prompts and responses."
                    className="rounded-xl shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRGy-woq_mbQaHV6rC6KMIpg01LcYaeELoQWeYXVWdulI2ZLjfQuTP8G8suLwDoL3EYsp3kJ79M-b_MC0UqQH1sEvkvH6cJgr4y6FJKL4zRLKqXOLaiLuMQXeQgb_9UZi-Gta1wfRhXysZCIq4lM8gcV8d4Oqbdtlu3XvpX44wmH93i-IXjtvOY1FVTCsSuxQAd6U8A9d8nBTsEsGzZ44voIcKrAMEghoOGOesDrKkT7PTNZjG39GffZGj9LMwXar3-02-JGJouOyd"
                  />
                </div>
              </div>
            </div>
            <div className="bg-slate-900/40 p-6 sm:p-8 md:p-10 rounded-DEFAULT backdrop-blur-lg border border-slate-800 shadow-2xl shadow-black/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-1">
                  <img
                    alt="Data Visualization Dashboard project preview showing a 3D point cloud of a street scene."
                    className="rounded-xl shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCXM230e2jB2iiFFyf0go6fKtnpemcnYOek1-ynJUw85Pz4NBvuaMvfjP4Xan0FURAuQX5B8xz4P1H6xwdsfomWHAGG6aTVLEM65IjrHmGwF0KU20A-LNaKlydRL11GjwreSPLhQ7Fh9zNKR1h0eWQt6y-gPkvc5O1OlcjeHGAtNlhE7zh3YttvKqezWmlZ4D7kTP5xpsx8z-YkSpeIdilA6-X3MvFCAKz6yoWJsFaJJgYASE_45KL4f0VfhBfat77MX1MUKD5n-Ns"
                  />
                </div>
                <div className="order-2 md:order-2">
                  <h2 className="text-2xl font-bold text-slate-100">
                    Data Visualization Dashboard
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    The best quality data to fuel the best performing models.
                  </p>
                  <div className="my-6 border-b border-slate-700">
                    <nav className="flex -mb-px space-x-6">
                      <button className="py-2 px-1 border-b-2 border-primary text-primary text-sm font-semibold">
                        3D
                      </button>
                      <button className="py-2 px-1 border-b-2 border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500 text-sm font-medium transition-colors">
                        Image
                      </button>
                      <button className="py-2 px-1 border-b-2 border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500 text-sm font-medium transition-colors">
                        Mapping
                      </button>
                    </nav>
                  </div>
                  <p className="text-base text-slate-300">
                    An advanced dashboard for visualizing complex 3D datasets.
                    This project leverages WebGL to render high-performance,
                    interactive point clouds and sensor data directly in the
                    browser.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-primary/5 text-primary hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors"
                      href="#"
                    >
                      Know More
                      <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center px-5 py-2.5 text-slate-300 hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors"
                      href="#"
                    >
                      Live Preview
                      <span className="material-symbols-outlined ml-2 text-base">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/40 p-6 sm:p-8 md:p-10 rounded-DEFAULT backdrop-blur-lg border border-slate-800 shadow-2xl shadow-black/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-2xl font-bold text-slate-100">
                    Image Curation Platform
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Unearth the most valuable data by intelligently managing
                    your dataset.
                  </p>
                  <p className="mt-6 text-base text-slate-300">
                    A web application for curating, testing, and evaluating
                    image datasets. Features include advanced filtering, model
                    comparison tools, and a robust interface for identifying the
                    highest value data.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-primary/5 text-primary hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors"
                      href="#"
                    >
                      Know More
                      <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center px-5 py-2.5 text-slate-300 hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors"
                      href="#"
                    >
                      Live Preview
                      <span className="material-symbols-outlined ml-2 text-base">open_in_new</span>
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    alt="Image Curation Platform project preview showing a gallery of images with filtering and data visualization components."
                    className="rounded-xl shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9JPF4GCne8v46eY6hQK4MKmxyvOlKaEm7bTEhAD-YEjmwqnGx5xB3giihO7iCEK3uQfqwZeNdwZliR92cIgBT7Ie-Lxy3csh7R4QzjKWjBx0H4-6hkydttUtBuw4L8nwEETZGk9h_eel2nQtUfZpJ_kTpsRyO9DexgiEXbyWQiV3P-sHMF5EScTrkxCuNez_xo7GhkZAJIrLEsB8hRWeAVp7AeXtlLQ0XxvMSysMmR_QcquovPVGZLvv0MxhvMs62j1t4KllCOK0"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Projects;
