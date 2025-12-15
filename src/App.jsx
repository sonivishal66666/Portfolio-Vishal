import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
