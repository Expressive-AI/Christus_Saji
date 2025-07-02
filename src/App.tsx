import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 relative">
      {/* Subtle corner gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-green-100/40 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-100/30 to-transparent rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-purple-100/20 to-transparent rounded-full -translate-x-48 translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-gray-200/50 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;