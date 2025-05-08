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
      className="min-h-screen bg-[#f1f4ff] text-white py-20 px-4 flex items-center justify-center font-['JetBrains_Mono','monospace'] bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl bg-[#1c252b] border border-[#2a343e] shadow-2xl rounded-xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#263238] py-5 px-6 border-b border-[#37474f]">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-[#e0f7fa]"
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Tabs Bar (VS Code style) */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#263238] border-b border-[#37474f]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex space-x-4 text-sm text-[#90a4ae] font-medium">
            <span className="px-3 py-1 bg-white rounded-t-md border border-[#b0bec5] text-[#1b2b2d]">
              experience.log
            </span>
            <span className="px-3 py-1">projects.js</span>
            <span className="px-3 py-1">skills.md</span>
          </div>
          <div className="w-4"></div>
        </div>

        {/* Terminal-like Body */}
        <div className="bg-[#1c252b] text-[#eceff1] px-6 md:px-10 py-10 text-sm leading-relaxed">
          {/* Typewriter Line */}
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#00c853]"
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

          {/* Experience Cards */}
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className="mt-8"
            >
              <p className="text-lg font-semibold text-[#b2ff59]">
                {exp.role} <span className="text-[#4dd0e1]">at</span> {exp.company}
              </p>
              <p className="text-sm text-[#80cbc4] mb-2">{exp.duration}</p>
              <ul className="list-disc list-inside text-[#eceff1] space-y-1 ml-2">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Footer Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 text-[#4db6ac] font-medium"
          >
            <Typewriter
              words={['// Process complete — experience.log saved ✅']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={0}
              delaySpeed={2500}
            />
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
