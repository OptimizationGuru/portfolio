import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/feature/Features';
import Projects from './components/projects/Projects';
// import { Link } from 'react-scroll';

function App() {
  return (
    <div className="bg-bodyColor h-auto w-full text-lightText">
      <div className=" max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
      </div>
    </div>
  );
}

export default App;
