import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    short: 'MU',
    name: 'Manipal University Jaipur',
    duration: 'Aug 2023 - Aug 2025',
    gradient: 'from-[#0288d1] to-[#03a9f4]',
    hoverColor: '#0288d1',
    bullets: [
      'Pursuing IT & Fintech through distance learning',
      'Focused on emerging technologies and financial technology trends',
    ],
  },
  {
    short: 'BIT',
    name: 'Bhilai Institute of Technology, Durg',
    duration: 'Aug 2018 - Aug 2022',
    gradient: 'from-[#1e7e34] to-[#43a047]',
    hoverColor: '#1e7e34',
    bullets: [
      'B.Tech in Computer Science with 76% aggregate',
      'Built a strong base in web development and software engineering',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.3,
      ease: 'easeOut',
    },
  }),
};

const Education = () => {
  return (
    <section className="bg-[linear-gradient(90deg,_#FDBB2D_0%,_#22C1C3_100%)] min-h-screen py-24 px-6 font-['JetBrains_Mono','Inter','monospace']">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-bold text-gray-800 mb-20"
        >
          <span className="bg-gradient-to-r from-[#0288d1] to-[#039be5] text-transparent bg-clip-text">
            🎓 Education
          </span>
        </motion.h2>

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="group bg-[#1f2937] text-white rounded-xl shadow-xl border border-[#2e3a49] transition-all duration-500 hover:shadow-2xl hover:scale-[1.025] overflow-hidden"
            >
              <div className="flex items-center space-x-6 px-8 py-6">
                {/* Icon Badge */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} text-white flex items-center justify-center rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110`}
                >
                  <span className="text-2xl font-extrabold">{edu.short}</span>
                </div>

                {/* University Info */}
                <div>
                  <h3
                    className="text-2xl font-semibold text-gray-100 group-hover:text-[#ffffff] transition-colors duration-300"
                    style={{ color: edu.hoverColor }}
                  >
                    {edu.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{edu.duration}</p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="px-10 pb-6 space-y-3 text-sm">
                {edu.bullets.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                  >
                    • <span className="hover:text-white transition-colors duration-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
