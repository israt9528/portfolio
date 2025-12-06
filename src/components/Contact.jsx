import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "israt9528@gmail.com.com",
    link: "mailto:israt9528@gmail.com.com",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    value: "github.com/israt9528",
    link: "https://github.com/israt9528",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/israt-jahan",
    link: "https://www.linkedin.com/in/israt-jahan-889516388/",
  },
  {
    icon: <FiTwitter />,
    label: "Twitter",
    value: "@yourusername",
    link: "https://twitter.com/yourusername",
  },
];

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 font-display antialiased py-16"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-slate-100"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-slate-400"
          >
            Feel free to reach out via email or connect with me on social media.
            I’m always open to discussing new projects or opportunities.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-800/40 hover:bg-slate-800/70 transition-colors px-6 py-4 rounded-lg shadow-lg backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-primary text-2xl">{item.icon}</div>
                <div className="text-slate-100">
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-slate-400 text-sm">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={formVariants}
            className="bg-slate-900/40 backdrop-blur-lg border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-black/20 flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
              e.target.reset();
            }}
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-3 bg-slate-800/50 rounded-md text-slate-100 placeholder-slate-400 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 bg-slate-800/50 rounded-md text-slate-100 placeholder-slate-400 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="px-4 py-3 bg-slate-800/50 rounded-md text-slate-100 placeholder-slate-400 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="self-start px-6 py-3 bg-primary text-slate-100 font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
