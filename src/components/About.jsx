import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Sparkles,
  Code,
  Terminal,
  Cpu,
  Rocket,
  ShieldCheck,
  Layers,
  Zap,
} from "lucide-react";

export default function AboutMe() {
  // Mouse hover tilt effect for the code window
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about-me"
      className="relative w-full min-h-screen px-6 pb-26 pt-32  text-white flex items-center overflow-hidden"
    >
      {/* --- ANIMATED MESH GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Animated Purple Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/50 blur-[130px] rounded-full"
        />

        {/* Animated Blue Orb */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[0%] w-[500px] h-[500px] bg-blue-600 blur-[130px] rounded-full"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* LEFT SIDE: Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          style={{ perspective: 1000 }}
          className="lg:col-span-5 relative group"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            className="relative z-10 p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-transparent to-blue-500/30"
          >
            <div className="bg-[#0A0A0F]/90 backdrop-blur-3xl rounded-[23px] p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-hidden">
                <code className="block">
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-blue-400">Developer</span> {"{"}
                  {"\n  "}{" "}
                  <span className="text-gray-500">// Core Philosophy</span>
                  {"\n  "} <span className="text-purple-400">constructor</span>
                  () {"{"}
                  {"\n    "}
                  <span className="text-pink-400">this</span>.name ={" "}
                  <span className="text-green-400">"Israt Jahan"</span>;
                  {"\n    "}
                  <span className="text-pink-400">this</span>.focus ={" "}
                  <span className="text-green-400">"Full Stack Architect"</span>
                  ;{"\n    "}
                  <span className="text-pink-400">this</span>.stack = [
                  <span className="text-yellow-400">"MERN"</span>,{" "}
                  <span className="text-yellow-400">"Cloud"</span>];
                  {"\n  "} {"}"}
                  {"\n\n  "} <span className="text-purple-400">build</span>
                  (concept) {"{"}
                  {"\n    "}
                  <span className="text-purple-400">return</span> concept.
                  <span className="text-blue-400">deploy</span>(cleanCode);
                  {"\n  "} {"}"}
                  {"\n"} {"}"}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
          >
            <Layers className="text-purple-400" size={24} />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-purple-500" />
              <h2 className="text-purple-500 font-mono tracking-[0.3em] text-xs uppercase">
                01. Discovery
              </h2>
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Crafting High-End <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Digital Logic.
              </span>
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I am a{" "}
              <span className="text-white border-b-2 border-purple-500/30">
                MERN Stack Developer
              </span>{" "}
              driven by the challenge of turning complex problems into elegant,
              scalable web applications. My approach combines robust engineering
              with a relentless focus on the user experience.
            </p>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              I specialize in architecting systems that aren't just functional,
              but future-proof. By leveraging the latest in JavaScript
              ecosystems, I build buttery-smooth interfaces backed by secure,
              lightning-fast servers.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
          >
            {[
              {
                icon: Rocket,
                title: "Performance",
                desc: "Optimized for extreme speed.",
              },
              {
                icon: ShieldCheck,
                title: "Scalability",
                desc: "Ready for enterprise growth.",
              },
              {
                icon: Zap,
                title: "Efficiency",
                desc: "Modular and maintainable code.",
              },
              {
                icon: Terminal,
                title: "Modern Stack",
                desc: "Next-gen development standards.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-lg shadow-purple-500/10">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-12 mt-4 py-8 border-t border-white/5"
          >
            <div className="group">
              <p className="text-3xl font-black text-white group-hover:text-purple-500 transition-colors">
                20+
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Projects Launched
              </p>
            </div>
            <div className="group">
              <p className="text-3xl font-black text-white group-hover:text-blue-500 transition-colors">
                MERN
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Core Expertise
              </p>
            </div>
            <div className="group">
              <p className="text-3xl font-black text-white group-hover:text-pink-500 transition-colors">
                99%
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                User Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
