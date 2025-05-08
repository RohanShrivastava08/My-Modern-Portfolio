import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';

const certifications = [
  {
    id: 1,
    title: 'META Front End Developer',
    platform: 'Coursera',
    year: 2024,
    tags: ['#FrontEnd', '#React', '#Meta'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateMetafrontend.19fd56ef093032387834.jpg',
    description: 'Completed an in-depth course covering front-end technologies and responsive design.',
  },
  {
    id: 2,
    title: 'Complete Web Development 2024 Bootcamp',
    platform: 'Udemy',
    year: 2024,
    tags: ['#FullStack', '#Bootcamp'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateUdemywebdev.79ff08a1cb0fdd636ab8.jpg',
    description: 'Gained comprehensive web development skills from front-end to back-end.',
  },
  {
    id: 3,
    title: 'Social Summer of Code - Season 3',
    platform: 'Open Source',
    year: 2023,
    tags: ['#OpenSource', '#Contributions'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateSsoc.24623acf4097c8d315c6.png',
    description: 'Completed coding contributions as part of Social Summer of Code.',
  },
  {
    id: 4,
    title: 'Coding Ninjas Student Ambassador',
    platform: 'Coding Ninjas',
    year: 2023,
    tags: ['#Leadership', '#Community'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateCn.ad681f00d2637a7307fa.png',
    description: 'Recognized as a Student Ambassador for Coding Ninjas.',
  },
  {
    id: 5,
    title: 'IBM AI Developer Specialization',
    platform: 'Coursera',
    year: 2024,
    tags: ['#AI', '#IBM'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateIbmspecial.44ffba1c678f50e05d83.jpg',
    description: 'Specialization in AI development.',
  },
  {
    id: 6,
    title: '50 Days of JavaScript',
    platform: 'codedamn',
    year: 2024,
    tags: ['#JavaScript', '#Challenge'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateCodedamn.581bcceee59feae3cfcc.jpg',
    description: 'Completed a 50-day JavaScript bootcamp for mastering modern JavaScript.',
  },
  {
    id: 7,
    title: 'Introduction to Responsible AI',
    platform: 'Google',
    year: 2024,
    tags: ['#AI', '#Ethics'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/badgeGoogleai.9a445f4ae61293425e76.png',
    description: 'Credential ID 8308509, focused on responsible AI principles and practices.',
  },
  {
    id: 8,
    title: '30 Days of HTML CSS',
    platform: 'codedamn',
    year: 2024,
    tags: ['#HTML', '#CSS'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateCodedamn30.b9a2f4b042f32c8b2b25.jpg',
    description: 'Completed a 30-day hands-on HTML and CSS course.',
  },
  {
    id: 9,
    title: 'Frontend React',
    platform: 'HackerRank',
    year: 2024,
    tags: ['#React', '#Frontend'],
    image: 'https://rohan-portfolio-rouge.vercel.app/static/media/certificateHackerrank.bf6d75eb4df3bef484ea.jpg',
    description: 'Certificate of Accomplishment for Frontend Development with React.',
  }
];

const Certification = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section className="min-h-screen w-full bg-[linear-gradient(90deg,_#e3ffe7_0%,_#d9e7ff_100%)] py-20 px-4">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-center text-5xl font-extrabold text-white mb-14">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="break-inside-avoid rounded-xl overflow-hidden relative group cursor-pointer shadow-lg"
              onClick={() => openModal(cert)}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5 rounded-xl">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-300">
                  {cert.platform} • {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && selectedCert && (
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl max-w-2xl mx-auto relative shadow-2xl text-gray-800"
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg mb-6 object-cover"
              />
              <h3 className="text-3xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {selectedCert.platform} • {selectedCert.year}
              </p>
              <p className="text-base leading-relaxed">{selectedCert.description}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {selectedCert.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
              >
                ✖
              </button>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certification;
