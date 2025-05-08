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
  'Docker',
  'Kubernetes',
  'NextAuth',
  'Zustand',
  'SWR',
  'tRPC',
  'WebAssembly',
  'Deno',
  'Turbopack',
];

const TechStack = () => {
  return (
    <section id="tech" className="min-h-screen bg-[#0d1117] text-white px-4 py-20 font-['JetBrains_Mono','Inter','monospace']">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-12 text-center text-white"
        >
          💻 Technical Skills
        </motion.h2>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Card Header (GitHub-style top bar) */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#0d1117] border-b border-[#30363d]">
                <span className="text-sm font-semibold text-white">{stack.category}</span>
                <span className="text-xs text-gray-400">public</span>
              </div>

              {/* Card Content */}
              <div className="px-5 py-4 space-y-3">
                {stack.items.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs font-medium bg-[#21262d] text-gray-300 px-3 py-1 mr-2 mb-2 rounded-full border border-[#30363d] hover:bg-[#30363d] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee for Currently Exploring */}
        <div className="mt-16 border-t border-[#30363d] pt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-300 text-center">🚀 Currently Exploring</h3>
          <div className="overflow-hidden relative h-10">
            <motion.div
              animate={{ x: ['100%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute whitespace-nowrap text-sm text-gray-400"
            >
              {exploringTools.map((tool, index) => (
                <span
                  key={index}
                  className="mx-4 px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-full inline-block"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
