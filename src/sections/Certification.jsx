import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

const certifications = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    platform: 'Coursera',
    year: 2024,
    tags: ['#Web', '#FullStack', '#React'],
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    description: 'Learned to build full-stack web apps using the MERN stack, including backend integration, authentication, and deployment.',
  },
  {
    id: 2,
    title: 'AI For Everyone',
    platform: 'DeepLearning.ai',
    year: 2023,
    tags: ['#AI', '#MachineLearning'],
    image: 'https://imgs.search.brave.com/C-Jt9VSZiwDjUoU1pmcjpOxiVA_Dn8wndVoXClCjHP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M0LzBj/LzE1L2M0MGMxNTIw/ZGM0NDQ5YWMyOGQ3/MDE5MjEwN2QwNTk2/LmpwZw',
    description: 'Explored core concepts of artificial intelligence, societal implications, and business applications of AI.',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    platform: 'freeCodeCamp',
    year: 2022,
    tags: ['#HTML', '#CSS', '#Responsive'],
    image: 'https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_1280.jpg',
    description: 'Mastered responsive layouts using Flexbox and CSS Grid, ensuring optimal UI across all devices.',
  },
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
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-white mb-14">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Pinterest-style Masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.03 }}
              className="break-inside-avoid rounded-xl overflow-hidden relative group transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full rounded-xl object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5 rounded-xl">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.platform} • {cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        {selectedCert && (
          <div className="bg-white p-8 rounded-2xl max-w-2xl mx-auto relative shadow-2xl text-gray-800">
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
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
            >
              ✖
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certification;
