import React from 'react';

const Education = () => {
  return (
    <section className="bg-gradient-to-b from-[#f9f9f9] to-[#e9e9e9] min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
          <span className="bg-gradient-to-r from-[#0073b1] to-[#00a0dc] text-transparent bg-clip-text">
            Education
          </span>
        </h2>

        <div className="space-y-12">
          {/* Manipal University */}
          <div className="bg-white shadow-2xl rounded-xl p-8 transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-3xl hover:bg-gray-50">
            <div className="flex items-center space-x-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0073b1] to-[#00a0dc] text-white flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-110">
                <span className="text-2xl font-bold">MU</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 hover:text-[#0073b1] cursor-pointer transition-colors duration-300 ease-in-out">
                  Manipal University Jaipur
                </h3>
                <p className="text-sm text-gray-600">Aug 2023 - Aug 2025</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="transition-all duration-300 ease-in-out hover:text-[#0073b1]">
                • Pursuing IT & Fintech through distance learning
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-[#0073b1]">
                • Focused on emerging technologies and financial technology trends
              </li>
            </ul>
          </div>

          {/* Bhilai Institute of Technology */}
          <div className="bg-white shadow-2xl rounded-xl p-8 transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-3xl hover:bg-gray-50">
            <div className="flex items-center space-x-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2d8b47] to-[#4caf50] text-white flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-110">
                <span className="text-2xl font-bold">BIT</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 hover:text-[#2d8b47] cursor-pointer transition-colors duration-300 ease-in-out">
                  Bhilai Institute of Technology, Durg
                </h3>
                <p className="text-sm text-gray-600">Aug 2018 - Aug 2022</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="transition-all duration-300 ease-in-out hover:text-[#2d8b47]">
                • Bachelor of Technology in Computer Science Engineering with 76% aggregate
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-[#2d8b47]">
                • Developed a strong foundation in programming, web development, and software engineering
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
