import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack'; 
import WorkExperience from './sections/WorkExperience';
import Project from './sections/Project';
import Education from './sections/Education';
import Certification from './sections/Certification';

function App() {
  return (
    <>
      <Hero />
      <About />
      <TechStack /> 
      <WorkExperience />
      <Project />
      <Education /> 
      <Certification />
      {/* Add more sections as needed */}
    </>
  );
}

export default App;
