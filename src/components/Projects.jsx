import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const projects = [
  {
    title: "TravelEase",
    subtitle:
      "TravelEase is a modern full-stack vehicle booking platform designed to make renting, listing, and managing vehicles effortlessly.",
    description:
      "TravelEase offers a seamless experience where users can list their own vehicles, view detailed car information, and book rides effortlessly. Built with the MERN stack and integrated with Firebase Authentication, TravelEase ensures secure access, real-time data management, and a smooth, responsive interface. Whether you’re renting or listing, TravelEase makes your travel experience easier, smarter, and faster.",
    image: "https://i.ibb.co.com/bMmH3yHK/Capture-1.png",
    knowMoreLink: "https://github.com/israt9528/travelEase-client.git",
    livePreviewLink: "https://travel-ease-eaca9.web.app/",
    techStack: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <FaJs key="js" />,
    ],
  },
  {
    title: "WarmPaws",
    subtitle:
      "A pet care service platform offering winter pet services, booking, and secure user authentication.",
    description:
      "The main purpose of WarmPaws – Pet Care in Winter is to create a warm, friendly, and reliable digital space for pet owners who want to take extra care of their furry friends during the cold season. Many pets face challenges in winter, such as dry skin, cold-related illnesses, and discomfort due to low temperatures. WarmPaws helps pet owners overcome these problems by offering a simple platform where they can explore various winter care services.",
    image:
      "https://i.ibb.co.com/zhn9q9Cc/33be2737-4f4a-491a-b163-3b97c01f3cde.jpg",
    knowMoreLink: "https://github.com/israt9528/WarmPaws.git",
    livePreviewLink: "https://warmpaws-pet-care-in-win-94c91.web.app/",
    techStack: [
      <FaReact key="react" />,
      <FaJs key="js" />,
      <FaCss3Alt key="css" />,
    ],
  },
  {
    title: "GrabNGo",
    subtitle: "GrabNgo is a modern tech-focused e-commerce platform",
    description:
      "GrabNgo is a modern tech-focused e-commerce platform where customers can easily explore and buy smartphones, smartwatches, earphones, and a wide range of smart devices. The platform also empowers sellers to list and manage their products, creating a smooth and efficient marketplace for both buyers and sellers.",
    image:
      "https://i.ibb.co.com/0Vfh2wTf/b092fff5-c219-4283-8685-f7627386a78f.jpg",
    knowMoreLink: "https://github.com/israt9528/Web-Station.git",
    livePreviewLink: "https://next-app-adz6.vercel.app",
    techStack: [
      <RiNextjsFill key="next" />,

      <FaNodeJs key="node" />,
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
    ],
  },
  {
    title: "Web Station",
    subtitle:
      "Web Station is your one-stop platform to explore, install, and enjoy web apps.",
    description:
      "Web Station is an all-in-one digital marketplace designed to help users seamlessly discover, explore, and install web-based applications. From productivity tools and creative utilities to entertainment apps and online games, Web Station makes it easy for users to find everything they need in one centralized hub.",
    image: "https://i.ibb.co.com/JwTBqgpD/2.png",
    knowMoreLink: "https://github.com/israt9528/Web-Station.git",
    livePreviewLink: "https://mellifluous-lollipop-ca6c17.netlify.app/",
    techStack: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
    ],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const imageOverlayVariants = {
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 font-display antialiased py-16"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-slate-400"
          >
            A collection of projects showcasing my skills in frontend
            development.
          </motion.p>
        </header>

        <main className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-slate-900/40 p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-lg border border-slate-800 shadow-2xl shadow-black/20 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div
                  className={
                    idx % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"
                  }
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold text-slate-100"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-2 text-sm text-slate-400"
                  >
                    {project.subtitle}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-base text-slate-300"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech stack icons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 flex flex-wrap gap-3 text-xl text-primary"
                  >
                    {project.techStack.map((icon, i) => (
                      <div
                        key={i}
                        className="bg-slate-800 p-2 rounded-md flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        {icon}
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Project Image with overlay */}
                <motion.div
                  className={
                    idx % 2 === 0
                      ? "order-1 md:order-2 relative"
                      : "order-1 md:order-1 relative"
                  }
                >
                  <motion.img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="rounded-xl shadow-lg w-full object-cover"
                    whileHover={{ scale: 1.05, filter: "brightness(0.8)" }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Overlay buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 rounded-xl"
                  >
                    <a
                      href={project.knowMoreLink}
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-white/30 text-blue-800 hover:bg-white/80 rounded-lg text-sm font-bold transition-colors"
                    >
                      Know More <FiArrowRight className="ml-2 text-base" />
                    </a>
                    <a
                      href={project.livePreviewLink}
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-black/40 text-slate-300 hover:bg-slate-800/70 rounded-lg text-sm font-medium transition-colors"
                    >
                      Live Preview <FiExternalLink className="ml-2 text-base" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Projects;
