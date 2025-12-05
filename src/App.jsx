import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="relative min-h-screen">
        <main className="w-full">
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="container mx-auto flex-1 pl-0 lg:pl-24">
              <Hero />
            </div>
          </div>
        </main>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
