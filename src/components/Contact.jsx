import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
  FiPhone,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "israt9528@gmail.com",
    link: "mailto:israt9528@gmail.com",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+880 1889984859",
    link: "tel:+8801889984859",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    value: "israt9528",
    link: "https://github.com/israt9528",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    value: "Israt Jahan",
    link: "https://www.linkedin.com/in/israt-jahan-889516388/",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation variants for children
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#050505] px-6 lg:px-12 overflow-hidden"
    >
      {/* --- PRO ANIMATED GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Deep base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120e0e] via-[#000000] to-[#050505]" />

        {/* Floating Orb 1 */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[10%] w-[600px] h-[600px]  blur-[130px] rounded-full"
        />

        {/* Floating Orb 2 */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-purple-500" />
            <span className="text-purple-400 font-mono text-[10px] uppercase tracking-[0.5em]">
              Let's Connect
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none"
          >
            GET IN{" "}
            <span className="text-gray-700 italic font-light font-serif lowercase">
              touch.
            </span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Side: Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="lg:col-span-5 space-y-12"
          >
            <motion.p
              variants={itemVariant}
              className="text-gray-400 text-lg leading-relaxed max-w-sm"
            >
              I’m currently available for internship and full-time positions.
              Let’s build something extraordinary together.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  whileHover={{ x: 10 }}
                  className="group flex items-center justify-between border-b border-white/5 pb-6 hover:border-purple-500/50 transition-all duration-500"
                >
                  <a href={item.link} className="flex items-center gap-6">
                    <div className="text-purple-500 text-xl group-hover:scale-125 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                        {item.label}
                      </p>
                      <p className="text-white text-base md:text-lg font-medium">
                        {item.value}
                      </p>
                    </div>
                  </a>
                  {item.label === "Phone" ? (
                    <button
                      onClick={() => handleCopy(item.value)}
                      className="p-2 text-gray-500 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <FiCheck className="text-green-500" />
                      ) : (
                        <FiCopy />
                      )}
                    </button>
                  ) : (
                    <FiArrowUpRight
                      className="text-gray-700 group-hover:text-white group-hover:rotate-45 transition-all"
                      size={20}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Prominent Glass Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <form
              className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
                e.target.reset();
              }}
            >
              {/* Inner subtle glow for the form */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                {/* Input 1 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col gap-3"
                >
                  <label className="text-xs text-purple-400 font-mono uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                  />
                </motion.div>

                {/* Input 2 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col gap-3"
                >
                  <label className="text-xs text-purple-400 font-mono uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                  />
                </motion.div>

                {/* Textarea */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col gap-3 md:col-span-2"
                >
                  <label className="text-xs text-purple-400 font-mono uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#9333ea",
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="md:col-span-2 py-5 bg-purple-600 text-white font-bold uppercase tracking-[0.4em] text-xs rounded-xl transition-all flex items-center justify-center gap-3"
                >
                  Send Message{" "}
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
