import React, { useState, useEffect } from 'react';
import { FiPaperclip, FiSend, FiSmile } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#002b36] via-[#014f43] to-[#003322] flex flex-col items-center justify-center px-4 py-20 font-sans relative overflow-hidden">
      {/* Animated Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.8 }}
        className="text-4xl font-bold text-white mb-10"
      >
        <span className="bg-gradient-to-r from-green-300 to-blue-400 text-transparent bg-clip-text">
          Contact Me
        </span>
      </motion.h2>

      {/* Animated Compose Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md"
      >
        {/* Compose Header */}
        <div className="flex items-center justify-between mb-6 border-b pb-3">
          <h3 className="text-lg font-semibold text-gray-800">New Message</h3>
          <button
            type="button"
            className="text-gray-400 hover:text-red-500 text-xl font-bold transition duration-300 ease-in-out"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <input
              type="email"
              placeholder="To"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition"
              required
            ></textarea>
          </motion.div>

          {/* Attachments & Send */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex items-center justify-between mt-4"
          >
            <div className="flex items-center gap-4 text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
                <FiPaperclip className="text-xl" />
                <input type="file" className="hidden" />
              </label>
              <button type="button" className="hover:text-yellow-500 transition">
                <FiSmile className="text-xl" />
              </button>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition"
            >
              <FiSend className="text-lg" /> Send
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full shadow-lg z-50"
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
