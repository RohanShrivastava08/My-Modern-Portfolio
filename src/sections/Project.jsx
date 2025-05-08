import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    id: '1',
    name: 'Notion Project',
    link: 'https://live-notion-project.com',
    description: 'Notion-style collaborative app with Next.js, Convex, Clerk Auth, and more.',
    features: ['Real-time sync', 'Markdown editing', 'Beautiful UI'],
    images: ['path_to_img/notion1.png', 'path_to_img/notion2.png'],
    tags: ['#WebApp', '#NextJS', '#Collaboration'],
  },
  {
    id: '2',
    name: 'Portfolio Project',
    link: 'https://live-portfolio.com',
    description: 'Built in 10 minutes using AI. Enhanced by ChatGPT + Framer Motion.',
    features: ['AI Generated', 'Animations', 'Responsive'],
    images: ['path_to_img/portfolio1.png', 'path_to_img/portfolio2.png'],
    tags: ['#Portfolio', '#AI', '#FramerMotion'],
  },
  {
    id: '3',
    name: 'Apple Website Clone',
    link: 'https://live-apple-website.com',
    description: 'Stunning Apple-like clone with GSAP, 3D Three.js, and scroll animation.',
    features: ['Three.js 3D', 'GSAP Scroll', 'Tailwind Design'],
    images: ['path_to_img/apple1.png', 'path_to_img/apple2.png'],
    tags: ['#ThreeJS', '#Clone', '#GSAP'],
  },
];

const Project = () => {
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCommentChange = (id, value) => {
    setComments((prev) => ({ ...prev, [id]: value }));
  };

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <section className="bg-gradient-to-b from-[#2c0a1a] to-[#1a0a10] min-h-screen py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-5xl font-bold text-rose-100 mb-16">
        <span className="bg-gradient-to-r from-[#6a0d45] via-[#8a2c5c] to-[#a8325d] text-transparent bg-clip-text">
          Projects Showcase
        </span>
      </h2>
  
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[#2a0c1f] rounded-2xl shadow-lg border border-[#3a1d2c] overflow-hidden"
          >
            <div className="h-1 bg-[#3a1d2c] relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#a8325d]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </div>
  
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
              modules={[Autoplay, Pagination]}
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`project-${i}`}
                    className="w-full h-64 object-cover cursor-pointer"
                    onClick={() => openModal(img)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
  
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-rose-100">{project.name}</h3>
                <button onClick={() => toggleLike(project.id)} className="text-xl">
                  {likes[project.id] ? '❤️' : '🤍'}
                </button>
              </div>
  
              <p className="text-sm text-rose-200 mb-3">{project.description}</p>
  
              <ul className="list-disc list-inside text-sm text-rose-300 mb-3">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
  
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#6a0d45] text-white text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
  
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full border border-[#512b3e] bg-[#3c1b2e] text-rose-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={comments[project.id] || ''}
                onChange={(e) => handleCommentChange(project.id, e.target.value)}
              />
  
              <div className="text-right mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-rose-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="relative max-w-3xl mx-auto">
        <img src={modalImage} alt="Zoom" className="w-full h-auto rounded-lg" />
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-black bg-opacity-60 text-white p-2 rounded-full"
        >
          ✖
        </button>
      </div>
    </Modal>
  </section>
  
  );
};

export default Project;
