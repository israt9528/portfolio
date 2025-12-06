// import React from 'react';

// const About = () => {
//   return (
//     <section id="about-me" className="bg-slate-900 text-slate-300 pt-20">
//       <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             <div className="relative w-full h-80 lg:h-full rounded-lg overflow-hidden">
//               <img
//                 alt="A developer working on code across two monitors in a dimly lit room."
//                 className="w-full h-full object-cover"
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8cU3K0oVUCuL3gz31NbUapR2ajH3ijqmpVILGWm_i9AxX5sRgF1yG_rwQDM0KPSUW69fhfs-3R62jrbhPqj9Qd5_G4pPl7HGfrTdE6AUNbmmlcHT1DLVHo1hgzIbnTdvokv8qaNM3A9402enUHo5bKbPaOZDGYYXrCJjeu31OxYvvi97UPq2nj8HOn1aLvCwOvrOHeF06RB14TVcfdRsE4uO2qNaB5G4_kg3Quvy9NDtzcnO_CWc6Plcm4DLkMJB0Zt4Dsv1Wgnqj"
//               />
//               <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900 to-transparent"></div>
//             </div>
//             <div className="text-left">
//               <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mb-6">
//                 Who Am I
//               </h2>
//               <div className="space-y-4 text-slate-400">
//                 <p>
//                   I'm a passionate MERN Stack Developer with a knack for creating
//                   beautiful and functional websites
//                 </p>
//                 <p>
//                   I have a strong foundation in HTML, CSS, and JavaScript, and I
//                   love to learn new technologies and frameworks. I enjoy working
//                   on projects that challenge me and allow me to grow as a
//                   developer.
//                 </p>
//                 <p>
//                   When I'm not coding, you can find me hiking in the mountains or
//                   experimenting with new recipes in the kitchen. I believe that a
//                   healthy work-life balance is essential for creativity and
//                   productivity.
//                 </p>
//               </div>
//               <div className="mt-8">
//                 <div>
//                   <p className="text-3xl font-bold text-primary">20</p>
//                   <p className="text-sm text-slate-500 tracking-wide">Projects</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, User } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 py-24 bg-[#0A0A0F] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Glowing background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_25px_rgba(99,102,241,0.6)]"
        >
          <User size={32} />
        </motion.div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          I'm a passionate MERN Stack developer who loves creating smooth,
          powerful, and visually appealing digital experiences. I enjoy solving
          complex problems, designing modern UI/UX, and building scalable
          applications with clean logic and optimized performance.
        </p>

        {/* Skills showcase icons */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <motion.div
            whileHover={{ scale: 1.15, y: -5 }}
            className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <Sparkles className="text-purple-300" size={32} />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15, y: -5 }}
            className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <Code className="text-blue-300" size={32} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
