import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleSwipeUp = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectSection = document.getElementById('project');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-white relative overflow-hidden">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Welcome to My Portfolio</h1>

        {/* Introduction */}
        <p className="text-xl font-medium tracking-wide mb-4 drop-shadow-sm">
          I am <span className="font-semibold text-white/90">Rohan Shrivastava</span>, a passionate Front End Developer.
        </p>

        {/* Professional Header Text in Notification Style */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-2 rounded-lg shadow-md">
             MERN Stack Developer
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-2 rounded-lg shadow-md">
             MBA (IT & FinTech)
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-2 rounded-lg shadow-md">
             Infosys Trained (3.5 Months)
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-2 rounded-lg shadow-md">
             GitHub Enthusiast
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-2 rounded-lg shadow-md">
             Postman API Expert
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-2 rounded-lg shadow-md">
             Open Source Contributor
          </div>
        </div>

        <motion.button
          onClick={scrollToProjects} // Add the click handler here to navigate to the Project section
          className="mt-6 bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Explore My Work
        </motion.button>
      </motion.div>

      {/* Swipe Up Button */}
      <motion.div
        className="absolute bottom-8 flex justify-center z-50 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          onClick={handleSwipeUp}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-6 py-2 rounded-full shadow-md cursor-pointer hover:bg-white/20 transition-all"
        >
          Swipe Up for More
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
