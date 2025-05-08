import React from 'react';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

const volunteerExperiences = [
  {
    id: 1,
    role: 'Community Mentor',
    org: 'Code for Cause',
    year: '2024',
    description: 'Mentored beginners on Git, Web Dev, and Open Source contributions through weekly live sessions.',
  },
  {
    id: 2,
    role: 'Tech Volunteer',
    org: 'NGO Connect',
    year: '2023',
    description: 'Built a lightweight CMS for NGOs to manage activities and events.',
  },
];

const Volunteer = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] py-20 px-6 font-mono">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-[#e74c3c] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.8 }}
        >
          Volunteer Experience
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg border border-[#e74c3c]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.8 }}
        >
          {volunteerExperiences.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 * index }}
              viewport={{ once: false, amount: 0.8 }}
            >
              <div className="flex items-center text-[#e74c3c] font-mono mb-6">
                <span className="text-sm">GET /volunteer/{item.id} HTTP/1.1</span>
                <span className="ml-4 text-xs text-gray-400">Host: localhost:3000</span>
              </div>

              <div className="text-black mb-4">
                <h3 className="text-2xl font-semibold text-[#e74c3c]">{item.role}</h3>
                <p className="text-sm text-gray-600">{item.org} • {item.year}</p>
                <p className="text-gray-700 mt-3">{item.description}</p>
              </div>

              <div className="flex gap-6 mb-6">
                <motion.button
                  className="bg-[#e74c3c] hover:bg-[#c0392b] px-5 py-2 text-white rounded-lg flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload /> Export
                </motion.button>
                <motion.button
                  className="bg-[#e74c3c] hover:bg-[#c0392b] px-5 py-2 text-white rounded-lg flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiShare2 /> Share
                </motion.button>
              </div>

              <div className="text-sm text-gray-600">
                <strong>Status:</strong> <span className="text-[#2ecc71]">200 OK</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;
