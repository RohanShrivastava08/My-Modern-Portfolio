import React from 'react';
import { motion } from 'framer-motion';

const techStacks = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Angular'],
  },
  {
    category: 'Styling & UI',
    items: ['Tailwind CSS', 'Material-UI', 'Bootstrap', 'SCSS', 'GSAP', 'Three.js', 'Responsive Design', 'Accessibility'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'RESTful APIs', 'GraphQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Postman', 'Webpack', 'Babel', 'Figma', 'Cursor', 'VS Code'],
  },
  {
    category: 'AI Tools',
    items: ['ChatGPT', 'Gemini AI', 'Claude', 'Bolt AI', 'Deep Seek AI'],
  },
];

const exploringTools = [
  'Docker', 'Kubernetes', 'NextAuth', 'Zustand', 'SWR',
  'tRPC', 'WebAssembly', 'Deno', 'Turbopack',
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="min-h-screen bg-[#0d1117] text-white px-6 py-20 font-['JetBrains_Mono','Inter','monospace']"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-14 text-white tracking-wide"
        >
          💻 Technical Skills
        </motion.h2>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center px-5 py-3 border-b border-[#30363d] bg-[#0d1117]">
                <span className="text-sm font-semibold">{stack.category}</span>
                <span className="text-xs text-gray-400">public</span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-wrap gap-3">
                {stack.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, backgroundColor: '#30363d' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="px-3 py-1 text-xs rounded-full border border-[#30363d] bg-[#21262d] text-gray-300 cursor-default transition-all"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          className="mt-20 border-t border-[#30363d] pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-300 text-center">🚀 Currently Exploring</h3>
          <div className="overflow-hidden relative h-10">
            <motion.div
              animate={{ x: ['100%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute whitespace-nowrap flex gap-6 text-sm text-gray-400"
            >
              {exploringTools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-[#21262d] border border-[#30363d] rounded-full"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
