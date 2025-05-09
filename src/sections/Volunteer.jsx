import React from 'react';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

const volunteerExperiences = [
  {
    id: 1,
    role: 'GitHub Global Campus Student',
    org: 'GitHub',
    year: 'Mar 2024 - Present',
    description: 'Engage with a global community, collaborate on projects, develop coding skills, and contribute to open source. Access learning resources and earn recognition for contributions.',
  },
  {
    id: 2,
    role: 'Postman API Fundamentals Student Expert',
    org: 'Postman',
    year: 'Apr 2024 - Present',
    description: 'Learned API basics, navigated Postman environment, completed an AI text summarizer project, and earned expertise badge. Expanded skills for future projects and networked with industry professionals.',
  },
  {
    id: 3,
    role: 'Ninja Leader',
    org: 'Coding Ninjas',
    year: 'Feb 2024 - Jun 2024',
    description: 'Representing Coding Ninjas at Manipal University, hosting events, empowering peers, and fostering a vibrant tech community. Successfully organized a quiz and code challenge event.',
  },
  {
    id: 4,
    role: 'Campus Ambassador',
    org: 'TRYST, IIT Delhi',
    year: 'Feb 2024 - Apr 2024',
    description: 'Promoted TRYST, IIT Delhi, exceeded points goal, and engaged in social media outreach. Contributed to event success and earned completion certificate for tasks.',
  },
  {
    id: 5,
    role: 'Student Ambassador',
    org: 'LetsUpgrade',
    year: 'Mar 2024 - Apr 2024',
    description: 'Promoted LetsUpgrade, shared referral links, engaged with learners, and expanded reach beyond campus. Helped onboard numerous learners and contributed to educational empowerment.',
  },
  {
    id: 6,
    role: 'Zuno Community Captain',
    org: 'Zuno by foundit',
    year: 'May 2024 - Nov 2024',
    description: 'Promoted content, shared engaging posts, participated in practice tests, and earned bonuses. Proud to contribute to the Zuno community’s growth and success.',
  },
  {
    id: 7,
    role: 'Internshala Student Partner',
    org: 'Internshala',
    year: 'May 2024 - Sep 2024',
    description: 'Shared Internshala opportunities on LinkedIn and among friends. Contributed to awareness and earned points and bonuses. Thrilled to help others discover amazing career opportunities.',
  },
];


const Volunteer = () => {
  return (
    <section className="bg-[linear-gradient(90deg,_#3F2B96_0%,_#A8C0FF_100%)] py-20 px-6 font-mono">

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-[#e74c3c] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.8 }}
        >
          Volunteer Experience
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg border border-[#e74c3c] overflow-visible"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {volunteerExperiences.map((item) => (
            <motion.div
              key={item.id}
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center text-[#e74c3c] font-mono mb-6">
                <span className="text-sm">GET /volunteer/{item.id} HTTP/1.1</span>
                <span className="ml-4 text-xs text-gray-400">Host: localhost:3000</span>
              </div>

              <div className="text-black mb-4">
                <h3 className="text-2xl font-semibold text-[#e74c3c]">{item.role}</h3>
                <p className="text-sm text-gray-600">{item.org} • {item.year}</p>
                <p className="text-gray-700 mt-3">{item.description}</p>
              </div>

              <div className="text-sm text-gray-600">
                <strong>Status:</strong> <span className="text-[#2ecc71]">200 OK</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;
