// Hero.jsx (Updated: JSX + Official Tech Icons + Mobile-Optimized Particle Density)
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import portfolioImg from "/portfolio.jpeg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Official icons (simple-icons SVG inline)
const techIcons = [
  {
    name: "React",
    svg: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Node.js",
    svg: "https://cdn.simpleicons.org/nodedotjs/3C873A",
  },
  {
    name: "MongoDB",
    svg: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "Express",
    svg: "https://cdn.simpleicons.org/express/FFFFFF",
  },
];

export default function Hero() {
  const typeRef = useRef(null);

  /* --------------------------------------
     TYPEWRITER EFFECT
  -------------------------------------- */
  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "MERN Stack Developer",
      "UI Engineer",
      "Frontend Specialist",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 90;
    const erasingSpeed = 40;
    const pauseAfterTyping = 1400;
    let timer;

    function type() {
      const el = typeRef.current;
      if (!el) return;

      if (charIndex < roles[roleIndex].length) {
        el.textContent += roles[roleIndex][charIndex];
        charIndex++;
        timer = setTimeout(type, typingSpeed);
      } else {
        timer = setTimeout(erase, pauseAfterTyping);
      }
    }

    function erase() {
      const el = typeRef.current;
      if (!el) return;

      if (charIndex > 0) {
        el.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        timer = setTimeout(erase, erasingSpeed);
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        timer = setTimeout(type, 400);
      }
    }

    type();
    return () => clearTimeout(timer);
  }, []);

  /* --------------------------------------
     PARTICLE CONFIG (mobile auto-density reduce)
  -------------------------------------- */
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 1200 },
      },
      color: { value: "#7f5af0" },
      opacity: { value: 0.4 },
      size: { value: 2 },
      move: { enable: true, speed: 0.6 },
    },
    responsive: [
      {
        maxWidth: 640,
        options: {
          particles: {
            number: { value: 25 }, // reduced density on mobile
          },
        },
      },
    ],
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center px-6 md:px-16 lg:px-24 bg-[#07070b] text-white overflow-hidden"
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* Neon grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(127,90,240,0.12) 1px, transparent 1px), linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Main row layout */}
      <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-16">
        {/* ---------------- LEFT (TEXT) ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Glow behind text */}
          <div className="absolute -z-10 left-0 top-20 w-72 h-72 bg-purple-600/30 blur-[120px]"></div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.45)]">
              Israt
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(127,90,240,0.55)]">
              Jahan.
            </span>
          </h1>

          {/* Typewriter */}
          <p className="mt-3 text-xl text-gray-300 inline-flex gap-1 items-center">
            <span ref={typeRef} className="underline-animate" />
            <span className="animate-blink">|</span>
          </p>

          {/* Description */}
          <p className="max-w-lg mx-auto lg:mx-0 mt-4 text-gray-400">
            I build modern, scalable and high-performance web apps with the MERN
            stack.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-3 mt-6">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <motion.a
                whileHover={{ scale: 1.12 }}
                key={i}
                href="#"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* TECH ICONS */}
          <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
            {techIcons.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="flex items-center gap-2"
              >
                <img
                  src={t.svg}
                  alt={t.name}
                  className="w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />
                <span className="text-gray-300 text-sm">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- RIGHT (IMAGE) ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-72 md:w-80 lg:w-[420px] rounded-3xl overflow-hidden shadow-2xl p-[2px] bg-gradient-to-br from-indigo-600/20 via-purple-500/10 to-fuchsia-500/10">
            <img
              src={portfolioImg}
              alt="profile"
              className="w-full h-full object-cover rounded-3xl opacity-95"
            />
          </div>
        </motion.div>
      </div>

      {/* Inline animations */}
      <style>{`
        .underline-animate{
          position: relative;
        }
        .underline-animate::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-4px;
          height:3px;
          width:0%;
          background:linear-gradient(90deg,#7f5af0,#00d4ff);
          transition:0.35s;
        }
        .underline-animate:hover::after{
          width:100%;
        }
        @keyframes blink {
          0%,49%{opacity:1}
          50%,100%{opacity:0}
        }
        .animate-blink{
          animation:blink 1s steps(2,start) infinite;
        }
      `}</style>
    </section>
  );
}
