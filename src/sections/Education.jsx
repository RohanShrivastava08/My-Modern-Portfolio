import React from 'react';

const Education = () => {
  return (
    <section className="bg-gradient-to-b from-[#e0f7fa] to-[#b3e5fc] min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
          <span className="bg-gradient-to-r from-[#0288d1] to-[#039be5] text-transparent bg-clip-text">
            Education
          </span>
        </h2>

        <div className="space-y-12">
          {/* Manipal University */}
          <div className="bg-[#2c2f36] text-white shadow-2xl rounded-xl p-8 transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-3xl hover:bg-[#3a4149]">
            <div className="flex items-center space-x-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0288d1] to-[#039be5] text-white flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-110">
                <span className="text-2xl font-bold">MU</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-200 hover:text-[#0288d1] cursor-pointer transition-colors duration-300 ease-in-out">
                  Manipal University Jaipur
                </h3>
                <p className="text-sm text-gray-400">Aug 2023 - Aug 2025</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="transition-all duration-300 ease-in-out hover:text-[#0288d1]">
                • Pursuing IT & Fintech through distance learning
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-[#0288d1]">
                • Focused on emerging technologies and financial technology trends
              </li>
            </ul>
          </div>

          {/* Bhilai Institute of Technology */}
          <div className="bg-[#2c2f36] text-white shadow-2xl rounded-xl p-8 transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-3xl hover:bg-[#3a4149]">
            <div className="flex items-center space-x-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1e7e34] to-[#388e3c] text-white flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-110">
                <span className="text-2xl font-bold">BIT</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-200 hover:text-[#1e7e34] cursor-pointer transition-colors duration-300 ease-in-out">
                  Bhilai Institute of Technology, Durg
                </h3>
                <p className="text-sm text-gray-400">Aug 2018 - Aug 2022</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="transition-all duration-300 ease-in-out hover:text-[#1e7e34]">
                • Bachelor of Technology in Computer Science Engineering with 76% aggregate
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-[#1e7e34]">
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
