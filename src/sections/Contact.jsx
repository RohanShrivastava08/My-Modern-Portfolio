import React, { useState } from 'react';
import { FiPaperclip, FiSend, FiSmile } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase'; // Make sure the path matches your setup

const Contact = () => {
  const [toast, setToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  return (
    <section className="min-h-screen bg-[linear-gradient(90deg,_#00C9FF_0%,_#92FE9D_100%)] flex flex-col items-center justify-center px-4 py-20 font-sans relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.8 }}
        className="text-4xl font-bold text-white mb-10"
      >
        <span className="bg-gradient-to-r from-yellow-800 to-blue-800 text-transparent bg-clip-text">
          Contact Me
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md"
      >
        <div className="flex items-center justify-between mb-6 border-b pb-3">
          <h3 className="text-lg font-semibold text-gray-800">New Message</h3>
          <button
            type="button"
            className="text-gray-400 hover:text-red-500 text-xl font-bold transition duration-300 ease-in-out"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: false }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </motion.div>

          {/* Subject */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: false }}
          >
            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition"
              required
            ></textarea>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
