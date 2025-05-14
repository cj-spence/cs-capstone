import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Augustine from '../assets/smcaii02157.JPG';
import Albert from '../assets/smcaiii00348.JPG';
import quad from '../assets/smcav00246.JPG';
import sem from '../assets/smcav00634.JPG';
import classtime from '../assets/smcav03055.JPG';

const galleryItems = [
  {
    image: Augustine,
    alt: "Augustine Hall in 1970",
    title: "1970s Campus Life",
    desc: "Augustine Hall in 1970"
  },
  {
    image: Albert,
    alt: "St. Albert Hall Library, 1970",
    title: "St. Albert Hall Library, 1970",
    desc: "New Library building with students in foreground"
  },
  {
    image: quad,
    alt: "St. Albert Hall Library Quad, 1970",
    title: "St. Albert Hall Library Quad, 1970",
    desc: "New Library building behind oak tree"
  },
  {
    image: sem,
    alt: "Philosophy Seminar, 1970",
    title: "Philosophy Seminar, 1970",
    desc: "Philosophy Seminar with Owen Carroll"
  },
  {
    image: classtime,
    alt: "Classroom Scene, 1970",
    title: "Classroom Scene, 1970",
    desc: "Students in classroom setting"
  }
];

export const GalleryActivism = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      goToNext();
    } else if (distance < -50) {
      goToPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <section id="/activism" data-aos="fade" className="h-screen flex flex-col items-center justify-center p-4 bg-base-100">
    <div className="p-3 bg-secondary rounded-xl mb-5">
        <div className="p-3 bg-accent rounded-xl text-md sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-full sm:max-w-sm mx-auto">
            Student Activism
        </div>
    </div>


    <div className="p-4 bg-secondary rounded-xl">
        <div className="p-4 bg-accent rounded-xl">
            <div className="w-full max-w-screen-md mx-auto">
                <div className="carousel w-full rounded-box shadow-xl">
                    {galleryItems.map((item, index) => (
                        <div
                            id={`item${index + 1}`}
                            key={index}
                            className="carousel-item relative w-full"
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full object-cover h-[40vh] sm:h-[50vh]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a
                                    href={`#item${index === 0 ? galleryItems.length : index}`}
                                    className="btn btn-circle btn-secondary text-xs md:text-lg w-7 h-7 md:w-12 md:h-12"
                                >
                                    ❮
                                </a>
                                <a
                                    href={`#item${index === galleryItems.length - 1 ? 1 : index + 2}`}
                                    className="btn btn-circle btn-secondary text-xs md:text-lg w-7 h-7 md:w-12 md:h-12"
                                >
                                    ❯
                                </a>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white">
                                    {item.title}
                                </h2>
                                <p className="text-sm sm:text-base text-white/90 mt-1">{item.desc}</p>
                                <button
                                    className="btn btn-sm md:btn-md lg:btn-lg btn-active mt-2"
                                    onClick={() => openFullscreen(index)}
                                >
                                    View Fullscreen
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl mt-5">
        <Link to="/gallery" className="btn btn-accent">
          Back to Main Gallery
        </Link>
        <Link to="/" className="btn btn-outline btn-secondary">
          View Timeline
        </Link>
      </div>

      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black bg-opacity-90 p-2 sm:p-4"
          onClick={closeFullscreen}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
        >
          <div className="absolute top-4 right-4 z-50 bg-black/60 rounded-full px-3 py-1 flex items-center gap-2">
            <span className="text-white text-xs sm:text-sm hidden sm:inline">Press ESC to exit</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                closeFullscreen();
              }}
              className="btn btn-circle btn-secondary btn-sm"
              aria-label="Close fullscreen"
            >
              ✕
            </button>
          </div>

          <div className="relative w-full max-w-6xl flex flex-col items-center">
            <img 
              src={galleryItems[currentIndex].image} 
              alt={galleryItems[currentIndex].alt} 
              className="w-full max-h-[75vh] sm:max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute left-4 top-1/2 transform btn btn-circle btn-secondary text-xs md:text-lg w-7 h-7 md:w-12 md:h-12"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              ❮
            </button>
            <button 
              className="absolute right-4 top-1/2 transform btn btn-circle btn-secondary text-xs md:text-lg w-7 h-7 md:w-12 md:h-12"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              ❯
            </button>
          </div>

          <div className="mt-4 text-center text-white max-w-3xl px-4">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold">{galleryItems[currentIndex].title}</h2>
            <p className="text-sm sm:text-base text-white mt-2">{galleryItems[currentIndex].desc}</p>
            <p className="text-xs sm:text-sm text-accent mt-2">{currentIndex + 1} of {galleryItems.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};
