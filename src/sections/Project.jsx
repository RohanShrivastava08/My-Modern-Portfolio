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

  const shareProject = (project) => {
    if (navigator.share) {
      navigator
        .share({ title: project.name, url: project.link })
        .catch((err) => console.log('Share failed:', err));
    } else {
      alert('Share not supported in this browser.');
    }
  };

  return (
    <section className="bg-[linear-gradient(90deg,_#efd5ff_0%,_#515ada_100%)] min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-rose-100 mb-16">
        <motion.span
  className="text-[#9e2a2f] font-semibold"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Projects Showcase
</motion.span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Animated Progress Bar */}
              <div className="h-1 bg-gray-100 relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#a8325d]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'easeInOut' }}
                />
              </div>

              {/* Swiper Carousel */}
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

              {/* Content Body */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                </div>

                {/* Instagram-style Action Icons */}
                <div className="flex gap-6 text-2xl mb-3 cursor-pointer">
                  <span onClick={() => toggleLike(project.id)}>
                    {likes[project.id] ? '❤️' : '🤍'}
                  </span>
                  <span title="Comment">💬</span>
                  <span title="Share" onClick={() => shareProject(project)}>📤</span>
                </div>

                <p className="text-sm text-gray-600 mb-3">{project.description}</p>

                <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Comment Box */}
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  value={comments[project.id] || ''}
                  onChange={(e) => handleCommentChange(project.id, e.target.value)}
                />

                <div className="text-right mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-pink-500 hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
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
