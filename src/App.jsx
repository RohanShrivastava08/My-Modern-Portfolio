import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack'; 
import WorkExperience from './sections/WorkExperience';
import Project from './sections/Project';
import Education from './sections/Education';
import Certification from './sections/Certification';
import Volunteer from './sections/Volunteer';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="techstack"><TechStack /></section>
      <section id="workexperience"><WorkExperience /></section>
      <section id="project"><Project /></section>
      <section id="education"><Education /></section>
      <section id="certification"><Certification /></section>
      <section id="volunteer"><Volunteer /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
