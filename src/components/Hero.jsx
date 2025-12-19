import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import portfolioImg from "/israt.jpeg";

export default function Hero() {
  const typeRef = useRef(null);

  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/israt9528",
      color: "#ffffff",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/israt-jahan-889516388/",
      color: "#0077b5",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:israt9528@gmail.com",
      color: "#ea4335",
    },
  ];

  useEffect(() => {
    const roles = ["Full Stack Developer", "MERN Expert", "UI/UX Strategist"];
    let roleIdx = 0;
    let charIdx = 0;
    let erasing = false;
    const type = () => {
      const curr = roles[roleIdx];
      if (typeRef.current) {
        typeRef.current.textContent = erasing
          ? curr.slice(0, charIdx--)
          : curr.slice(0, charIdx++);
      }
      if (!erasing && charIdx === curr.length + 1) {
        erasing = true;
        setTimeout(type, 2000);
      } else if (erasing && charIdx === 0) {
        erasing = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(type, 500);
      } else setTimeout(type, erasing ? 40 : 80);
    };
    type();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40 md:opacity-60 mt-16">
        <div className="relative w-full max-w-4xl h-[80vh]">
          <img
            src={portfolioImg}
            alt="Israt Jahan"
            className="w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#05050560]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#2a192a] rounded-r-lg" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Open to Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
            ISRAT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              JAHAN.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 font-medium h-8">
            I'm a <span ref={typeRef} className="text-white"></span>
            <span className="text-purple-500 animate-pulse">|</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/CV.pdf"
              download="Israt_Jahan_CV.pdf"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl shadow-xl hover:shadow-purple-500/20 transition-all flex items-center gap-2"
            >
              <Download size={18} /> CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/Resume.pdf"
              download="Israt_Jahan_Resume.pdf"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </motion.a>
          </div>
        </motion.div>

        <div className="lg:col-span-4 h-64 lg:h-full order-1 lg:order-2" />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-6 order-3"
        >
          {/* Card 1 with thin border */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-purple-600/30 backdrop-blur-xl transition-colors hover:bg-white/[0.06]">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">
              Expertise
            </p>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              MERN Stack Specialist
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Building high-performance web architectures with React, Node, and
              MongoDB.
            </p>
          </div>

          {/* Card 2 with thin border */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-blue-600/30 backdrop-blur-xl">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
              Connect with me
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-purple-400 transition-all border border-white/5 hover:border-purple-500/30"
                  aria-label={social.name}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 lg:justify-end mt-2">
            <div className="text-right">
              <p className="text-white text-sm font-bold">Dhaka, Bangladesh</p>
              <p className="text-gray-500 text-xs tracking-tighter uppercase font-medium">
                Active Now
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
