import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { FaSearch } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    platform: 'Coursera',
    year: 2024,
    tags: ['#Web', '#FullStack', '#React'],
    image: 'https://source.unsplash.com/random/400x300?web',
    description: 'Learned to build full-stack web apps using the MERN stack.',
  },
  {
    id: 2,
    title: 'AI For Everyone',
    platform: 'DeepLearning.ai',
    year: 2023,
    tags: ['#AI', '#MachineLearning'],
    image: 'https://source.unsplash.com/random/400x300?ai',
    description: 'Basics of AI, ethics, and its future role in society.',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    platform: 'freeCodeCamp',
    year: 2022,
    tags: ['#HTML', '#CSS', '#Responsive'],
    image: 'https://source.unsplash.com/random/400x300?css',
    description: 'Mastered CSS Flexbox, Grid and modern layouts.',
  },
  {
    id: 4,
    title: 'Python for Data Science',
    platform: 'Kaggle',
    year: 2023,
    tags: ['#Python', '#DataScience'],
    image: 'https://source.unsplash.com/random/400x300?python',
    description: 'Analyzed datasets using Python, NumPy, Pandas, and Seaborn.',
  },
  {
    id: 5,
    title: 'Advanced Tailwind CSS',
    platform: 'Udemy',
    year: 2024,
    tags: ['#Tailwind', '#UI'],
    image: 'https://source.unsplash.com/random/400x300?tailwind',
    description: 'Built beautifully responsive UIs with Tailwind best practices.',
  },
  {
    id: 6,
    title: 'React Essentials',
    platform: 'LinkedIn Learning',
    year: 2023,
    tags: ['#React', '#Frontend'],
    image: 'https://source.unsplash.com/random/400x300?react',
    description: 'Mastered React hooks, component design and patterns.',
  },
];

const uniqueTags = [...new Set(certifications.flatMap(cert => cert.tags))];

const Certification = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const certsPerPage = 6;

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  const filteredCerts = certifications
    .filter(cert =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterTag ? cert.tags.includes(filterTag) : true)
    )
    .sort((a, b) => {
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'platform') return a.platform.localeCompare(b.platform);
      return 0;
    });

  const totalPages = Math.ceil(filteredCerts.length / certsPerPage);
  const currentCerts = filteredCerts.slice((currentPage - 1) * certsPerPage, currentPage * certsPerPage);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#f8f8f8] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-gray-900 mb-12">
          <span className="bg-gradient-to-r from-[#bd081c] to-[#e60023] bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Search and Sort Controls */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search certifications..."
              className="w-full border border-gray-300 px-4 py-2 pl-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <select
            className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="year">Year</option>
            <option value="platform">Platform</option>
          </select>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(filterTag === tag ? '' : tag)}
              className={`px-3 py-1 text-sm font-medium rounded-full transition ${
                filterTag === tag
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-red-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Pinterest-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {currentCerts.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02 }}
              layout
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer bg-white transition-all"
              onClick={() => openModal(cert)}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">{cert.platform}</span> • {cert.year}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-14">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full font-semibold text-sm ${
                currentPage === i + 1
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-red-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        {selectedCert && (
          <div className="bg-white p-6 rounded-xl max-w-2xl mx-auto relative shadow-xl">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto rounded-lg mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold text-gray-800">{selectedCert.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {selectedCert.platform} • {selectedCert.year}
            </p>
            <p className="text-sm text-gray-700">{selectedCert.description}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {selectedCert.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
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
