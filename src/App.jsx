import './App.css'
import './index.css'
import { Landing } from './pages/Landing'
import { Introduction } from './pages/Introduction'
import { Timeline1 } from './pages/Timeline1'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  return (
    <>
      <Landing />
      <Introduction />
      <Timeline1 />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 300,
      anchorPlacement: 'top-bottom',
    });
    const handleScroll = () => {
      AOS.refresh();
    };
  
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;