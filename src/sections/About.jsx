import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex justify-center items-center bg-[linear-gradient(90deg,_#FDBB2D_0%,_#3A1C71_100%)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden"
      >
        {/* Window Controls */}
        <div className="flex items-center justify-start space-x-3 px-4 py-3 bg-gray-300 border-b border-gray-300">
          <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer"></span>
          <span className="w-4 h-4 rounded-full bg-yellow-400 cursor-pointer"></span>
          <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer"></span>
        </div>

        {/* Notes Content */}
        <div className="p-8 md:p-12 font-serif text-gray-800 text-lg leading-relaxed">
          <motion.h2
            className="text-4xl font-semibold text-yellow-900 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          >
            I’m Rohan, a full-stack developer passionate about crafting experiences that blend creativity,
            logic, and user empathy. With a deep love for React, Tailwind, Firebase, and animations, I aim
            to build apps that people genuinely enjoy using.
          </motion.p>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
          >
            I specialize in the <strong>MERN stack</strong>, creating web applications that are both functional
            and beautiful. I enjoy solving problems through code and focusing on improving user experience and
            performance. I am constantly exploring new technologies and staying updated with industry trends.
          </motion.p>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
          >
            When I’m not coding, I’m often reading, working out, learning new tech, or sketching out new ideas.
            I believe in continuous learning and the power of well-crafted products to change lives.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
          >
            If you’re looking to build something impactful or want to collaborate, feel free to reach out. I’m
            always open to new opportunities and discussions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
