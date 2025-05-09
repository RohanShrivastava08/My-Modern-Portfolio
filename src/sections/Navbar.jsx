import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'techstack', label: 'Tech' },
  { id: 'workexperience', label: 'Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certification', label: 'Certifications' },
  { id: 'volunteer', label: 'Volunteer' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const sectionsInView = sections.map((section) => {
      const element = document.getElementById(section.id);
      const rect = element.getBoundingClientRect();
      return { id: section.id, top: rect.top };
    });

    const closestSection = sectionsInView.reduce((closest, current) => {
      return Math.abs(current.top) < Math.abs(closest.top) ? current : closest;
    });

    setActiveSection(closestSection.id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close the mobile menu after a selection
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-2 flex items-center justify-between w-full sm:w-auto"
    >
      <div className="hidden sm:flex items-center gap-4 text-sm text-white font-medium">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`hover:text-yellow-400 transition duration-300 ${
              activeSection === id ? 'text-yellow-400' : 'text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="sm:hidden text-white"
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-lg shadow-md p-6">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-center text-white py-2 mb-2 border-b ${
                activeSection === id ? 'text-yellow-400' : 'text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
