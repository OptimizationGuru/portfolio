import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/feature/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// import { Link } from 'react-scroll';

function App() {
  return (
    <div className="bg-bodyColor h-auto w-full text-lightText pb-[20px]">
      <div className=" max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
