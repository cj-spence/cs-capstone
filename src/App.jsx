import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './index.css';
import { Navbar } from './components/Navbar';
import Preloader from './components/Preloader';
import { About } from './pages/About';
import { GalleryMain } from './pages/GalleryMain';
import { GalleryInterviews } from './pages/GalleryInterviews';
import { GallerySchool } from './pages/GallerySchool';
import { GalleryActivism } from './pages/GalleryActivism';
import { NoPage } from './pages/NoPage';

const Landing = lazy(() =>
  import('./pages/Landing').then((module) => ({ default: module.Landing }))
);
const Introduction = lazy(() =>
  import('./pages/Introduction').then((module) => ({ default: module.Introduction }))
);
const Timeline1 = lazy(() =>
  import('./pages/Timeline1').then((module) => ({ default: module.Timeline1 }))
);
const Transition1 = lazy(() =>
  import('./pages/Transition1').then((module) => ({ default: module.Transition1 }))
);
const Timeline2 = lazy(() =>
  import('./pages/Timeline2').then((module) => ({ default: module.Timeline2 }))
);
const Transition2 = lazy(() =>
  import('./pages/Transition2').then((module) => ({ default: module.Transition2 }))
);
const Timeline3 = lazy(() =>
  import('./pages/Timeline3').then((module) => ({ default: module.Timeline3 }))
);
const Transition3 = lazy(() =>
  import('./pages/Transition3').then((module) => ({ default: module.Transition3 }))
);
const Timeline4 = lazy(() =>
  import('./pages/Timeline4').then((module) => ({ default: module.Timeline4 }))
);
const Outro = lazy(() =>
  import('./pages/Outro').then((module) => ({ default: module.Outro }))
);

function Home() {
  return (
    <Suspense fallback={<div></div>}>
      <Landing />
      <Introduction />
      <Timeline1 />
      <Transition1 />
      <Timeline2 />
      <Transition2 />
      <Timeline3 />
      <Transition3 />
      <Timeline4 />
      <Outro />
    </Suspense>
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

    const timer = setTimeout(() => setLoading(false), 2000);

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
