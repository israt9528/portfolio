import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiEye, FiArrowUp } from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaQuoteRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiStripe,
} from "react-icons/si";

const projects = [
  {
    title: "PULSE",
    tag: "FULL STACK Role Based DASHBOARD",
    description:
      "Pulse is a modern blood donation web application that enables users to request blood, donate blood, search donors, manage requests, and support organizations through funding, all within a secure and responsive platform built using the MERN stack.",
    image:
      "https://i.ibb.co.com/cSBgTpVk/3a4b9d5c-0cdb-40ed-97d9-ec06bb80b45f.jpg",
    repo: "https://github.com/israt9528/blood-donation.git",
    live: "https://blood-donation-9b87e.web.app",
    tech: [
      <SiExpress key="0" className="text-white" />,
      <SiStripe key="stripe" className="text-[#635BFF]" />,
      <FaReact key="1" className="text-[#61DAFB]" />,
      <FaNodeJs key="2" className="text-[#339933]" />,
      <SiMongodb key="3" className="text-[#47A248]" />,
      <SiFirebase key="4" className="text-[#FFCA28]" />,
      <SiTailwindcss key="5" className="text-[#38BDF8]" />,
    ],
  },
  {
    title: "TravelEase",
    tag: "FULL STACK ARCHITECTURE",
    description:
      "A premium vehicle booking ecosystem engineered for seamless peer-to-peer rentals. I built a high-performance infrastructure handling real-time listings, fleet management, and secure booking flows. Integrated Firebase for identity and MERN for the core engine, delivering a lag-free experience.",
    image: "https://i.ibb.co.com/bMmH3yHK/Capture-1.png",
    repo: "https://github.com/israt9528/travelEase-client.git",
    live: "https://travel-ease-eaca9.web.app/",
    tech: [
      <SiExpress key="0" className="text-white" />,
      <FaReact key="1" className="text-[#61DAFB]" />,
      <FaNodeJs key="2" className="text-[#339933]" />,
      <SiMongodb key="3" className="text-[#47A248]" />,
      <SiFirebase key="4" className="text-[#FFCA28]" />,
      <SiTailwindcss key="5" className="text-[#38BDF8]" />,
    ],
  },
  {
    title: "WarmPaws",
    tag: "UI/UX • PRODUCT DESIGN",
    description:
      "Addressing the critical need for specialized pet care during winter. Features a sophisticated booking engine and trust-oriented UI. Engineered a modular service architecture allowing pet owners to discover and secure professional care easily with high-conversion patterns.",
    image:
      "https://i.ibb.co.com/zhn9q9Cc/33be2737-4f4a-491a-b163-3b97c01f3cde.jpg",
    repo: "https://github.com/israt9528/WarmPaws.git",
    live: "https://warmpaws-pet-care-in-win-94c91.web.app/",
    tech: [
      <FaReact key="1" className="text-[#61DAFB]" />,
      <SiTailwindcss key="2" className="text-[#38BDF8]" />,
      <FaJs key="3" className="text-[#F7DF1E]" />,
      <FaCss3Alt key="4" className="text-[#1572B6]" />,
      <FaHtml5 key="5" className="text-[#E34F26]" />,
    ],
  },
  {
    title: "GrabNGo",
    tag: "NEXT.JS • E-COMMERCE",
    description:
      "A modern, tech-centric marketplace designed for smart devices. Empowering buyers and sellers via a scalable multi-vendor dashboard. Implemented advanced search algorithms and rapid-response filtering with Next.js for a lightning-fast browsing experience.",
    image:
      "https://i.ibb.co.com/0Vfh2wTf/b092fff5-c219-4283-8685-f7627386a78f.jpg",
    repo: "https://github.com/israt9528/Web-Station.git",
    live: "https://next-app-adz6.vercel.app",
    tech: [
      <SiNextdotjs key="1" className="text-white" />,
      <FaNodeJs key="2" className="text-[#339933]" />,
      <SiExpress key="3" className="text-white" />,
      <SiTailwindcss key="4" className="text-[#38BDF8]" />,
      <SiMongodb key="5" className="text-[#47A248]" />,
    ],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const scrollToTop = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative bg-[#050505] py-32 px-6 md:px-12 overflow-hidden z-0"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-12"
        >
          <div>
            <span className="text-purple-500 font-mono text-[10px] uppercase tracking-[0.6em] mb-4 block">
              Portfolio Archive
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
              Featured{" "}
              <span className="text-gray-700 font-light italic lowercase">
                Works
              </span>
            </h2>
          </div>
          <div className="text-gray-500 text-[10px] font-mono mt-8 md:mt-0 space-y-1 text-right">
            <p>DESIGNED & DEVELOPED BY ISY</p>
            <p>© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </motion.div>

        {/* Project List */}
        <div className="space-y-32">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                key={project.title}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-[50%] group relative">
                  {/* Glassmorphism Quote Icon - Overlapping edge */}
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 z-30 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-purple-500">
                    <FaQuoteRight size={22} />
                  </div>

                  <div className="relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 bg-white text-black rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-2"
                      >
                        <FiEye size={20} />
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 transition-all transform hover:-translate-y-2"
                      >
                        <FiGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[45%]">
                  <span className="text-purple-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">
                    {project.tag}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10">
                    {project.description}
                  </p>

                  {/* Tech Stack with Glassmorphism */}
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((icon, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-purple-500/50 transition-colors"
                      >
                        <div className="text-xl opacity-80 hover:opacity-100">
                          {icon}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ x: 10 }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-[0.4em] group w-fit"
                  >
                    Explore Case Study
                    <span className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full group-hover:bg-purple-600 transition-colors">
                      <FiArrowUpRight />
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="mt-26 flex flex-col items-center gap-8">
          {!showAll ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-24 flex justify-center"
            >
              <button
                onClick={() => setShowAll(true)}
                className="group relative px-12 py-4 bg-transparent text-white font-mono text-[10px] uppercase tracking-[0.5em] border border-white/10 rounded-full hover:border-purple-500 transition-all duration-500"
              >
                <span className="relative z-10">Explore All Projects</span>
                <div className="absolute inset-0 bg-purple-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </button>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-4 text-gray-500 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-all">
                <FiArrowUp />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em]">
                Back to top
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
