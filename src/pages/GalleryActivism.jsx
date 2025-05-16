import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chapeloccupation from '../assets/chapeloccupation.png'
import chapelprotest1 from '../assets/chapelprotest.png'
import chapelprotest2 from '../assets/chapelprotest1972.png'
import leadersofmecha from '../assets/leadersofmecha.png'
import peacefulprotest from '../assets/peacefulchappelsleeping.png'
import natehermanmusheer from '../assets/musheerhermannathan.jpg'
import bsuleaders from '../assets/BSU.png'
import solidaritystatements from '../assets/solidaritystatements.png'
import studentactivism from '../assets/studentactivism.png'
import gaol from '../assets/gaol.png'
import fist from '../assets/fist.jpg'
import bsudemands from '../assets/bsudemands.png'
import jeyboycott from '../assets/boycott.png'
import hermanandmusheer from '../assets/hermanmusheer2.png'

const galleryItems = [
  {
    image: natehermanmusheer,
    alt: "Student Activist Leaders",
    title: "Student Activist Leaders",
    desc: "Nate Carroll, Herman Brown, and Musheer Abdul-Jabbaar, leaders of the SMC basketball boycotts."
  },
  {
    image: hermanandmusheer,
    alt: "Herman and Musheer",
    title: "Herman and Musheer",
    desc: "When Herman read the 1971 and 1972 Basketball boycott speeches, Musheer was his bodyguard by his side."
  },
  {
    image: jeyboycott,
    alt: "Jet Magazine Boycott Excerpt, [1971]",
    title: "Jet Magazine Boycott Excerpt, [1971]",
    desc: "An excerpt from the March 4, 1972 JET Magazine, showcasing the BSU Demands from the basketball boycott."
  },
  {
    image: bsudemands,
    alt: "BSU Demands of SMC, [1971]",
    title: "BSU Demands of SMC, [1971]",
    desc: "The letter written to Saint Mary's administration after the basketball boycott vs. Fresno State."
  },
  {
    image: chapelprotest1,
    alt: "Chapel Protest, [1972]",
    title: "Chapel Protest, [1972]",
    desc: "After the aftermath of the basketball boycotts, students occupied the Chapel for several days after SMC threatened to eliminate Chicano Studies courses."
  },
  {
    image: chapelprotest2,
    alt: "Speaking to the Press, [1972]",
    title: "Speaking to the Press, [1972]",
    desc: "Darryl Burnett speaking to local press during the Chapel occupation."
  },
  {
    image: peacefulprotest,
    alt: "Peaceful Occupation of the Chapel, [1972]",
    title: "Peaceful Occupation of the Chapel, [1972]",
    desc: "Students pictured sleeping during a peaceful occupation of the Chapel."
  },
  {
    image: leadersofmecha,
    alt: "Leaders of MECha, [1972]",
    title: "Leaders of MECha, [1972]",
    desc: "Alex Contereras, unknown, and Carlos Reyes were leaders of MECha, a student-group fighting for solidarity."
  },
  {
    image: chapeloccupation,
    alt: "Solidified Community, [1972]",
    title: "Solidified Community, [1972]",
    desc: "Community members and students gathered at SMC to share solidarity with SMC minority students."
  },
  {
    image: studentactivism,
    alt: "Community Activism, [1972]",
    title: "Community Activism, [1972]",
    desc: "A collage of moments of solidarity from the Chapel Protest."
  },
  {
    image: solidaritystatements,
    alt: "Staff Solidarity, [1972]",
    title: "Staff Solidarity, [1972]",
    desc: "Thomas Brown (left), Assistant Dean for Black students and Harry Acosta (right), Assistant Dean for Chicano students share statements of solidarity."
  },
  {
    image: gaol,
    alt: "Reflections on Connections, [1972]",
    title: "Reflections on Connections, [1972]",
    desc: "An excerpt from Thomas Brown's 'Reflections on Connections'."
  },
  {
    image: bsuleaders,
    alt: "BSU Leader Musheer",
    title: "BSU Leader Musheer",
    desc: "Musheer Abdul-Jabbaar (formally Edward Badon), a co-founder of BSU at is Catholic High School in L.A."
  },
  {
    image: fist,
    alt: "Reginald Lemay's Fist, [1972]",
    title: "Reginald Lemay's Fist, [1972]",
    desc: "Image of Reginald Lemay's fist, symbolism of solidarity."
  },
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
    <section id="/saintmarys" data-aos="fade" className="h-screen flex flex-col items-center justify-center p-4 bg-base-100">

    <p className="block lg:hidden text-md text-center font-semibold mb-2">
      Swipe left or right to browse photos
    </p>

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
                                className="w-full object-cover h-[50vh] md:h-[60vh]"
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
                            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 z-10">
                              <div className="inline-block bg-black/90 text-white p-4 rounded-lg">
                                <h2 className="text-md md:text-3xl font-bold">
                                  {item.title}
                                </h2>
                                <p className="text-xs md:text-xl font-semibold mt-1">{item.desc}</p>
                                <button
                                  className="btn btn-sm md:btn-md lg:btn-lg mt-2 text-black animate-pulse"
                                  onClick={() => openFullscreen(index)}
                                >
                                  View Fullscreen
                                </button>
                              </div>
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
