import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const experiences = [
  {
    company: 'Infosys',
    role: 'Software Trainee',
    duration: 'Jan 2023 - May 2023',
    bullets: [
      'Learnt Java, DBMS, Cloud Computing, Unix, and Networking Fundamentals.',
      'Applied frontend technologies to create interactive UI components.',
    ],
  },
  {
    company: 'Pregrad',
    role: 'Full Stack Developer Intern',
    duration: 'Apr 2024 - Aug 2024',
    bullets: [
      'Built MERN stack projects using React.js and Redux.',
      'Implemented dynamic dashboards and API integrations.',
    ],
  },
  {
    company: 'Zidio Development',
    role: 'Frontend Developer Intern',
    duration: 'Jul 2024 - Sep 2024',
    bullets: [
      'Worked with React.js, Tailwind CSS, and JavaScript frameworks.',
      'Developed UI components and improved performance.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#e9fdf1] text-[#1b2b22] py-20 px-4 flex items-center justify-center font-['JetBrains_Mono','monospace']"
    >
      <div className="w-full max-w-5xl bg-[#e0f5e9] border border-[#c4e2d1] shadow-xl rounded-lg overflow-hidden">

        {/* Header - Classy, Bold */}
        <div className="bg-[#d3f1dd] py-4 px-6 border-b border-[#b9dccc]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-[#2d6a4f]">
            Work Experience
          </motion.h2>
        </div>

        {/* Tabs Bar (VS Code Style) */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#d3f1dd] border-b border-[#b9dccc]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
            <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
          </div>
          <div className="flex items-center space-x-4 text-sm font-medium text-[#3b5245]">
            <span className="px-3 py-1 bg-white rounded-t-md border-x border-t border-[#b9dccc] text-[#1c3d2a]">
              experience.log
            </span>
            <span className="px-3 py-1 text-[#94b8a1]">projects.js</span>
            <span className="px-3 py-1 text-[#94b8a1]">skills.md</span>
          </div>
          <div className="w-4"></div>
        </div>

        {/* Terminal Body */}
        <div className="bg-[#f3fdf7] px-6 md:px-10 py-10 text-sm leading-relaxed">
          {/* Typewriter Title */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1d7f5c]"
          >
            <Typewriter
              words={['> compiling experience.log...']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1500}
            />
          </motion.p>

          {/* Experience List */}
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className="mt-6"
            >
              <p className="text-[#2d6a4f] font-semibold">
                {exp.role} <span className="text-[#4caf50]">at</span> {exp.company}
              </p>
              <p className="text-[#6b9080] text-xs mb-2">{exp.duration}</p>
              <ul className="list-disc list-inside text-[#1b4332] pl-4 space-y-1">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Terminal Footer Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 text-[#52796f] font-medium"
          >
            <Typewriter
              words={['// Process complete — experience.log saved ✅']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={0}
              delaySpeed={3000}
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
