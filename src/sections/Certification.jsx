import React from 'react';

const certifications = [
  {
    id: 1,
    title: "React Developer Certification",
    platform: "Udemy",
    logo: "/logos/udemy.svg",
    date: "Jan 2024",
    description: "Advanced React concepts including hooks, routing, and performance optimization.",
    link: "https://www.udemy.com/course/react-development"
  },
  {
    id: 2,
    title: "Python for Data Science",
    platform: "Coursera",
    logo: "/logos/coursera.svg",
    date: "Mar 2023",
    description: "Python basics, Pandas, Numpy, and data visualization libraries.",
    link: "https://www.coursera.org/learn/python-for-data-science"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    platform: "freeCodeCamp",
    logo: "/logos/freecodecamp.svg",
    date: "Jun 2022",
    description: "Built and deployed full MERN stack applications with authentication and REST APIs.",
    link: "https://www.freecodecamp.org/learn/full-stack"
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    platform: "edX",
    logo: "/logos/edx.svg",
    date: "Jul 2022",
    description: "Implemented ML algorithms with Python and built real-world classification projects.",
    link: "https://www.edx.org/course/machine-learning-with-python"
  },
  {
    id: 5,
    title: "Cloud Computing Fundamentals",
    platform: "LinkedIn Learning",
    logo: "/logos/linkedin.svg",
    date: "Sep 2023",
    description: "Cloud deployment models, AWS basics, and service models like IaaS and SaaS.",
    link: "https://www.linkedin.com/learning/cloud-computing-fundamentals"
  },
];

const Certification = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0f4f8] to-[#ffffff] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
          <span className="bg-gradient-to-r from-[#0073b1] to-[#00a0dc] text-transparent bg-clip-text">
            Certifications
          </span>
        </h2>

        {/* Masonry-style Pinterest Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="break-inside-avoid bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Image / Logo area */}
              <div className="relative h-40 bg-gray-100 flex items-center justify-center">
                <img src={cert.logo} alt={cert.platform} className="h-16" />
              </div>

              {/* Content area */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">{cert.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{cert.platform} • {cert.date}</p>
                <p className="text-gray-700 text-sm">{cert.description}</p>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#0073b1] font-semibold hover:underline"
                  >
                    View Certificate
                  </a>
                  <button
                    onClick={() => window.open(cert.link, '_blank')}
                    className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-all"
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
