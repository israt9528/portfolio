import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#0b0d15]"
    >
      {/* NEON MOVING PARTICLES BACKGROUND */}
      <Particles
        options={{
          fpsLimit: 60,
          background: { color: "transparent" },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ["#A855F7", "#F472B6", "#6366F1"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 0.5, opacity_min: 0.2, sync: false },
            },
            size: { value: { min: 2, max: 4 }, random: true },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#A855F7",
              opacity: 0.3,
              width: 1,
              blink: false,
              warp: false,
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Floating Sidebar Icons */}
      <aside className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
        {[
          { icon: <Github size={26} />, link: "https://github.com/" },
          { icon: <Linkedin size={26} />, link: "https://linkedin.com/" },
          { icon: <Mail size={26} />, link: "mailto:israt9528@gmail.com" },
          { icon: <MessageSquare size={26} />, link: "#" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.2, x: 5 }}
            className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:text-primary transition-all shadow-lg hover:shadow-primary/30"
          >
            {item.icon}
          </motion.a>
        ))}
      </aside>

      {/* Content Wrapper */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-20 w-full max-w-7xl">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-primary via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,140,0.4)]">
            Hi, I'm <br />
            <span className="text-white drop-shadow-lg">Israt Jahan</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0">
            A passionate{" "}
            <span className="text-primary font-semibold">
              MERN Stack Developer
            </span>{" "}
            crafting modern, scalable & visually stunning digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 h-12 rounded-lg bg-gradient-to-r from-primary to-purple-600 
                         text-white font-bold shadow-lg shadow-primary/40 hover:shadow-primary/70 
                         flex items-center gap-2"
            >
              🚀 View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
                         text-white font-bold hover:bg-white/20 transition-all"
            >
              📄 Download CV
            </motion.button>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/40 animate-pulse blur-[1px] shadow-[0_0_50px_rgba(147,51,234,0.6)]"></div>

            {/* Image with floating animation */}
            <motion.img
              src="https://i.ibb.co.com/bRjPDPrj/Whats-App-Image-2025-12-06-at-14-08-32-1a92cbef-removebg-preview.png"
              alt="Israt Jahan"
              className="w-full h-full object-cover rounded-full shadow-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-4 -right-4 sm:bottom-8 sm:-right-8 
                         bg-white/10 backdrop-blur-lg border border-white/10 
                         rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-500 text-white">
                ⭐
              </div>
              <div>
                <h3 className="text-white font-bold">Hands-on</h3>
                <p className="text-gray-300 text-sm">Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
