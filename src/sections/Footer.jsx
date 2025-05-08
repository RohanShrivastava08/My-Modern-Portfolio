import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-[#f6f7fa] via-[#f1f1f1] to-[#f9f9f9] text-gray-700 py-14 border-t border-gray-200 shadow-inner font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col gap-10">

        {/* Top Row: Subscribe + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Subscribe Box */}
          <div className="text-center md:text-left">
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-2xl">
            <a
              href="mailto:example@email.com"
              className="hover:text-blue-600 transition"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Row: Credits + Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6 border-gray-300 text-sm text-gray-500">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition font-medium"
          >
            <FiArrowUp className="text-lg" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
