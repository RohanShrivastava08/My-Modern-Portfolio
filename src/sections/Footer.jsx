import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-[#f6f7fa] via-[#f1f1f1] to-[#f9f9f9] text-gray-700 py-14 border-t border-gray-200 shadow-inner font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col gap-10">

        {/* Animated Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-10"
        >
          {/* Subscribe Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Stay in the loop 💌</h3>
            <p className="text-sm text-gray-500 mb-4">Subscribe to get updates and insights.</p>
            <form className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Animated Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex space-x-5 text-2xl"
          >
            <a
              href="rohansh0808@email.com"
              className="hover:text-blue-600 transition-transform duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="https://github.com/RohanShrivastava08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-transform duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-shrivastava-887a15251/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-transform duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com/rohan_sh0808"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-transform duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row justify-between items-center border-t pt-6 border-gray-300 text-sm text-gray-500"
        >
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Rohan Shrivastava. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-105 font-medium"
          >
            <FiArrowUp className="text-lg" />
            Back to Top
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
