import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/feature/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="w-screen min-h-screen bg-bodyColor">
      <div className="w-full h-full text-lightText pb-5 flex flex-col items-center justify-between gap-4">
        {/* Navbar */}
        <div className="w-full sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Sections with IDs for React Scroll */}
        <div id="home" className="w-full ">
          <Banner />
        </div>
        <div id="features" className="w-full md:px-10 lg:px-16">
          <Features />
        </div>
        <div id="projects" className="w-full md:px-10 lg:px-16">
          <Projects />
        </div>
        <div id="resume" className="w-full md:px-10 lg:px-16">
          <Resume />
        </div>
        <div id="contact" className="w-full md:px-10 lg:px-16">
          <Contact />
        </div>
        <div id="footer" className="w-full md:px-10 lg:px-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
