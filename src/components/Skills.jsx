import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiNextjsFill } from "react-icons/ri";

const skills = [
  { name: "HTML", value: 98, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", value: 92, icon: <FaCss3Alt className="text-blue-500" /> },
  {
    name: "Tailwind",
    value: 85,
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    name: "JavaScript",
    value: 95,
    icon: <SiJavascript className="text-yellow-400" />,
  },
  { name: "React", value: 90, icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", value: 85, icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express.js",
    value: 75,
    icon: <SiExpress className="text-gray-400" />,
  },
  {
    name: "MongoDB",
    value: 80,
    icon: <SiMongodb className="text-green-700" />,
  },
  {
    name: "Git/GitHub",
    value: 85,
    icon: <FaGitAlt className="text-red-500" />,
  },
  {
    name: "Next.js",
    value: 70,
    icon: <RiNextjsFill className="text-blue-500" />,
  },
];

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="skills"
      className="bg-gray-900 text-gray-300 antialiased py-16"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My Skills
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            As a dedicated MERN Stack developer, I've honed a versatile set of
            skills to build modern, responsive, and high-performance web
            applications. Below are some of the key technologies I work with.
          </p>
        </div>

        {/* Skill Bars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              {/* Skill header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-200">
                    {skill.name}
                  </h3>
                </div>
                <span className="font-medium text-gray-400">
                  {skill.value}%
                </span>
              </div>
              {/* Animated Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      width: `${skill.value}%`,
                      transition: { duration: 1.5 },
                    },
                  }}
                  className="bg-blue-500 h-3 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
