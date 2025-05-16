// ✅ TOP OF FILE ONLY
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import './index.css';

import { Landing } from './pages/Landing';
import { Introduction } from './pages/Introduction';
import { Timeline1 } from './pages/Timeline1';
import { Timeline2 } from './pages/Timeline2';
import { Timeline3 } from './pages/Timeline3';
import { Timeline4 } from './pages/Timeline4';
import { GalleryMain } from './pages/GalleryMain';
import { GalleryInterviews } from './pages/GalleryInterviews';
import { GallerySchool } from './pages/GallerySchool';
import { GalleryActivism } from './pages/GalleryActivism';
import { NoPage } from './pages/NoPage';
import { Outro } from './pages/Outro';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import Preloader from './components/Preloader'

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

function GalleryPaths() {
  return (
    <Routes>
      <Route index element={<GalleryMain />} />
      <Route path="/interviews" element={<GalleryInterviews />} />
      <Route path="/saintmarys" element={<GallerySchool />} />
      <Route path="/activism" element={<GalleryActivism />} />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 300,
      anchorPlacement: 'top-bottom',
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec preloader

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery/*" element={<GalleryPaths />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
