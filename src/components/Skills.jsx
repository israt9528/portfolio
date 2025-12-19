import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiVercel,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";
import { RiShieldKeyholeLine } from "react-icons/ri";

const skillCategories = [
  {
    category: "Frontend Architecture",
    items: [
      {
        name: "React.js",
        level: "95%",
        icon: <FaReact />,
        color: "group-hover:text-[#61DAFB]",
        glow: "shadow-[#61DAFB]/10",
      },
      {
        name: "Next.js",
        level: "80%",
        icon: <SiNextdotjs />,
        color: "group-hover:text-white",
        glow: "shadow-white/10",
      },
      {
        name: "JavaScript",
        level: "92%",
        icon: <SiJavascript />,
        color: "group-hover:text-[#F7DF1E]",
        glow: "shadow-[#F7DF1E]/10",
      },
      {
        name: "Tailwind CSS",
        level: "90%",
        icon: <SiTailwindcss />,
        color: "group-hover:text-[#38BDF8]",
        glow: "shadow-[#38BDF8]/10",
      },
      {
        name: "HTML5 & CSS3",
        level: "98%",
        icon: (
          <div className="flex gap-1">
            <FaHtml5 />
            <FaCss3Alt />
          </div>
        ),
        color: "group-hover:text-[#E34F26]",
        glow: "shadow-[#E34F26]/10",
      },
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      {
        name: "Node.js",
        level: "88%",
        icon: <FaNodeJs />,
        color: "group-hover:text-[#339933]",
        glow: "shadow-[#339933]/10",
      },
      {
        name: "Express.js",
        level: "85%",
        icon: <SiExpress />,
        color: "group-hover:text-gray-400",
        glow: "shadow-gray-400/10",
      },
      {
        name: "MongoDB",
        level: "82%",
        icon: <SiMongodb />,
        color: "group-hover:text-[#47A248]",
        glow: "shadow-[#47A248]/10",
      },
      {
        name: "JWT Auth",
        level: "90%",
        icon: <SiJsonwebtokens />,
        color: "group-hover:text-[#d63aff]",
        glow: "shadow-[#d63aff]/10",
      },
      {
        name: "Firebase",
        level: "80%",
        icon: <SiFirebase />,
        color: "group-hover:text-[#FFCA28]",
        glow: "shadow-[#FFCA28]/10",
      },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      {
        name: "Figma (UI/UX)",
        level: "85%",
        icon: <FaFigma />,
        color: "group-hover:text-[#F24E1E]",
        glow: "shadow-[#F24E1E]/10",
      },
      {
        name: "Vercel / Netlify",
        level: "90%",
        icon: <SiVercel />,
        color: "group-hover:text-white",
        glow: "shadow-white/10",
      },
      {
        name: "Git / GitHub",
        level: "88%",
        icon: <FaGitAlt />,
        color: "group-hover:text-[#F05032]",
        glow: "shadow-[#F05032]/10",
      },
      {
        name: "Postman",
        level: "85%",
        icon: <SiPostman />,
        color: "group-hover:text-[#FF6C37]",
        glow: "shadow-[#FF6C37]/10",
      },
      {
        name: "REST APIs",
        level: "95%",
        icon: <RiShieldKeyholeLine />,
        color: "group-hover:text-blue-400",
        glow: "shadow-blue-400/10",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 25 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#050505] py-32 px-6 overflow-hidden perspective-1000"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-12 bg-purple-500" />
            <span className="text-purple-400 font-mono tracking-[0.4em] text-xs uppercase">
              Professional Stack
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
            TECHNICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700 italic font-light">
              MASTERY.
            </span>
          </h2>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {skillCategories.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-8">
              <h3 className="text-white/40 font-mono text-sm tracking-widest flex items-center gap-4">
                <span className="text-purple-500">0{idx + 1}</span> //{" "}
                {group.category}
              </h3>

              <div className="flex flex-col gap-4">
                {group.items.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.03,
                      translateX: 10,
                      transition: { duration: 0.2 },
                    }}
                    className={`group relative p-5 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${skill.glow}`}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-5">
                        <div
                          className={`text-3xl text-gray-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-[10deg] ${skill.color}`}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-gray-300 font-bold tracking-tight text-base group-hover:text-white transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mt-1 font-mono">
                            Proficiency: {skill.level}
                          </p>
                        </div>
                      </div>

                      {/* Animated Gauge Ring (Visual Indicator) */}
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="20"
                            cy="20"
                            r="18"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            className="text-white/5"
                          />
                          <motion.circle
                            cx="20"
                            cy="20"
                            r="18"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray="113"
                            initial={{ strokeDashoffset: 113 }}
                            whileInView={{
                              strokeDashoffset:
                                113 - (113 * parseInt(skill.level)) / 100,
                            }}
                            className="text-purple-500/40 group-hover:text-purple-500 transition-colors"
                          />
                        </svg>
                        <span className="absolute text-[8px] font-mono text-gray-500 group-hover:text-white">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Background Spotlight Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-purple-500/5 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Global CSS for Perspective */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
