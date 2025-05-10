import './App.css'
import './index.css'
import { Landing } from './pages/Landing'
import { Introduction } from './pages/Introduction'
import { Timeline1 } from './pages/Timeline1'
import { Timeline2 } from './pages/Timeline2'
import { Timeline3 } from './pages/Timeline3'
import { Timeline4 } from './pages/Timeline4'
import { GalleryMain } from './pages/GalleryMain'
import { Outro } from './pages/Outro'
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
      <About />
      <Timeline2 />
      <About />
      <Timeline3 />
      <About />
      <Timeline4 />
      <Outro />
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
        <Route path="/gallery" element={<GalleryMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;