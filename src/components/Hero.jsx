import React from 'react';

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Hi, I'm Israt Jahan
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300 text-base font-normal md:text-lg">
              A MERN Stack Developer Crafting Modern &amp; Responsive Web Experiences
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold tracking-wide transition-transform hover:scale-105">
              <span className="truncate">View My Work</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white text-base font-bold tracking-wide transition-transform hover:scale-105">
              <span className="truncate">Download CV</span>
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-primary/20 -translate-x-4 -translate-y-4"></div>
            <div
              className="w-full h-full rounded-full bg-center bg-no-repeat bg-cover shadow-lg"
              data-alt="Professional headshot of John Doe, a frontend developer."
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkom0FEzYuj4Rm_VhgA1MNpaoHj_PJZNM8xrtpCWCtbBOANh8Hi1rspCuKsUSRxAcKmv81QW2KCauzBtvU597Nhssi1fkt_2JQ2BD7gN3NBM1tPh94meZsVoF0031vFbxSr1d7W0c5X_ymDg3yb7jtq_aDErXkn64WfCsvVhqxK1mXwtb6Vy2ivcaYGZk4rpeqmu0mih5Vpc981GEXCechw3YoLVMROo_9wOlkFN0RSlfbquWYADymW6q-TYjbGjSXLg-89V9OyGeB')",
              }}
            ></div>
            <div className="absolute bottom-4 -right-4 md:bottom-8 md:-right-8 flex items-center gap-3 rounded-xl bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-3 shadow-lg border border-gray-200/50 dark:border-white/10">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-2xl">star</span>
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-gray-900 dark:text-white text-base font-bold leading-none">
                  Hands-on
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-tight">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
