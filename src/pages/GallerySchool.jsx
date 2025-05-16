import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import odelljohnson from '../assets/odelljohnson.JPG'
import wilsonriles from '../assets/wilsonriles1971.JPG'
import augustine from '../assets/augustinehall1970.JPG';
import augustine2 from '../assets/augustinehall21970.JPG';
import Albert from '../assets/library1970.JPG';
import quad from '../assets/quadfromchapel1975.JPG';
import sem from '../assets/seminar1970.JPG';
import classtime from '../assets/classroom1970.JPG';
import basketballschedule from '../assets/basketballschedule1974.JPG';
import basketballteam from '../assets/basketballteam1969.JPG';
import bookstore from '../assets/bookstore1972.JPG'
import chapelarcade from '../assets/chapelarcade.png'
import classtime2 from '../assets/classroom21970.JPG'
import dantehall from '../assets/dantehall.jpg'
import distillation from '../assets/distillation1970.JPG'
import firetruck from '../assets/firetruck1970.JPG'
import gallopinggael from '../assets/gallopinggael1970.jpg'
import gleeclub from '../assets/gleeclub1971.JPG'
import gymnastics from '../assets/gymnastics1970.JPG'
import flagfootball from '../assets/intramuralflagfootball1972.JPG'
import ladyoftheoaks from '../assets/ladyoftheoaks1970.JPG'
import lefevretheatre from '../assets/lefevretheatre1973.JPG'
import lefevreplaza from '../assets/lefevreplaza1973.JPG'
import mathcontest2 from '../assets/mathcontest21974.JPG'
import mathematicscontest from '../assets/mathematicscontest1974.JPG'
import moragacampus from '../assets/moragacampus1969.JPG'
import sculptor from '../assets/sculptor1972.JPG'
import smcfootball from '../assets/smcfootball1974.jpg'
import smcvssfstate from '../assets/smcvssfstate1970.JPG'
import stadium from '../assets/stadium1973.JPG'
import studyinglibrary from '../assets/studyinglibrary1969.JPG'
import swimmingpool from '../assets/swimmingpool1972.JPG'

const galleryItems = [
  {
    image: odelljohnson,
    alt: "Odell Johnson Portrait",
    title: "Odell Johnson, [1970]",
    desc: "Former Dean of Students, Odell Johnson"
  },
  {
    image: wilsonriles,
    alt: "Wilson Riles, [1971]",
    title: "Wilson Riles, [1971]",
    desc: "First African American to be elected to statewide office in California, visiting Saint Mary's"
  },
  {
    image: augustine,
    alt: "Augustine Hall, [1970]",
    title: "Augustine Hall, [1970]",
    desc: "Augustine Hall pictured with tennis courts out front"
  },
  {
    image: augustine2,
    alt: "Augustine Hall 2, [1970]",
    title: "Augustine Hall 2, [1970]",
    desc: "Augustine Hall pictured in the 70s"
  },
  {
    image: Albert,
    alt: "St. Albert Hall Library, [1970]",
    title: "St. Albert Hall Library, [1970]",
    desc: "New Library building with students in foreground"
  },
  {
    image: quad,
    alt: "Ferroggiaro Hall and De La Salle Quad, [1975]",
    title: "Ferroggiaro Hall and De La Salle Quad, [1975]",
    desc: "Picture taken from Chapel Tower"
  },
  {
    image: sem,
    alt: "Philosophy Seminar, [1970]",
    title: "Philosophy Seminar, [1970]",
    desc: "Philosophy Seminar with Owen Carroll"
  },
  {
    image: classtime,
    alt: "Classroom Scene, [1970]",
    title: "Classroom Scene, [1970]",
    desc: "Students in classroom setting"
  },
  {
    image: basketballschedule,
    alt: "Basketball Schedule, [1974-1975]",
    title: "Basketball Schedule [1974-1975]",
    desc: "Gael Basketball Schedule and Lineup"
  },
  {
    image: basketballteam,
    alt: "Basketball Team, [1969]",
    title: "Basketball Team, [1969]",
    desc: "Picture day for the basketball team"
  },
  {
    image: bookstore,
    alt: "Bookstore, [1972]",
    title: "Campus Bookstore, [1972]",
    desc: "When the bookstore had books and records"
  },
  {
    image: chapelarcade,
    alt: "Chapel Arcade",
    title: "Chapel Arcade, [1970]",
    desc: "Boxwood maze at right, near Oliver Hall"
  },
  {
    image: classtime2,
    alt: "Classroom Scene 2, [1970]",
    title: "Classroom Scene 2, [1970]",
    desc: "Class being lead by Albert Dragstedt"
  },
  {
    image: dantehall,
    alt: "Dante Hall, [1970]",
    title: "Dante Hall, [1970]",
    desc: "Students between classes in Dante Hall"
  },
  {
    image: distillation,
    alt: "Distillation Lab, [1970]",
    title: "Distillation Lab, [1970]",
    desc: "Student performing distillation during a science lab."
  },
  {
    image: firetruck,
    alt: "Firetruck, [1970]",
    title: "Firetruck, [1970]",
    desc: "Volunteer students from SMC posing on a 70s firetruck"
  },
  {
    image: gallopinggael,
    alt: "The Galloping Gael, [1970]",
    title: "The Galloping Gael, [1970]",
    desc: "70s edition Galloping Gael logo"
  },
  {
    image: gleeclub,
    alt: "Glee Club, [1971]",
    title: "Glee Club, [1971]",
    desc: "SMC Glee Club picture day"
  },
  {
    image: gymnastics,
    alt: "Gymnastics Team, [1970]",
    title: "Gymnastics Team, [1970]",
    desc: "Parallel bars, trampoline, horse in gymnasium"
  },
  {
    image: flagfootball,
    alt: "Intramural Flag Football, [1972]",
    title: "Intramural Flag Football, [1972]",
    desc: "Intramural flag football game on the front lawn"
  },
  {
    image: ladyoftheoaks,
    alt: "Our Lady of the Oaks, [1970]",
    title: "Our Lady of the Oaks, [1970]",
    desc: "Famous SMC statue located in the grove trail"
  },
  {
    image: lefevretheatre,
    alt: "LeFevre Theatre, [1973]",
    title: "LeFevre Theatre, [1973]",
    desc: "Campus theatre"
  },
  {
    image: lefevreplaza,
    alt: "LeFevre Plaza, [1973]",
    title: "LeFevre Plaza, [1973]",
    desc: "Plaza outside the theatre, near the Cafe"
  },
  {
    image: mathcontest2,
    alt: "Math Contest, [1974]",
    title: "Math Contest, [1974]",
    desc: "Students participating in a math competition"
  },
  {
    image: mathematicscontest,
    alt: "Math Contest 2, [1974]",
    title: "Math Contest 2, [1974]",
    desc: "Student attempts to solve a challenging equation"
  },
  {
    image: moragacampus,
    alt: "Moraga Campus, [1969]",
    title: "Moraga Campus, [1969]",
    desc: "Far shot view of SMC"
  },
  {
    image: sculptor,
    alt: "Sculpture Work, [1972]",
    title: "Sculpture Work, [1972]",
    desc: "Student working on sculpture"
  },
  {
    image: smcfootball,
    alt: "SMC Football Team, [1974]",
    title: "SMC Football Team, [1974]",
    desc: "SMC Football picture day"
  },
  {
    image: smcvssfstate,
    alt: "SMC vs SF State Game, [1970]",
    title: "SMC vs SF State Game, [1970]",
    desc: "Gaels in action against SF State"
  },
  {
    image: stadium,
    alt: "Stadium Construction, [1973]",
    title: "Stadium Construction, [1973]",
    desc: "Saint Mary's stadium being constructed"
  },
  {
    image: studyinglibrary,
    alt: "Studying at Library, [1969]",
    title: "Studying at the Library, [1969]",
    desc: "Student focused on their studies"
  },
  {
    image: swimmingpool,
    alt: "Swimming Pool, [1972]",
    title: "Campus Swimming Pool, [1972]",
    desc: "Recreational facilities on campus"
  }
];


export const GallerySchool = () => {
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
    <div className="p-3 bg-secondary rounded-xl mb-5">
        <div className="p-3 bg-accent rounded-xl text-md sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-full sm:max-w-sm mx-auto">
            Saint Mary's in the '70s
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
                                className="w-full object-cover h-[40vh] md:h-[50vh]"
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
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 sm:p-6 z-10">
                          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white">
                            {item.title}
                          </h2>
                          <p className="text-sm sm:text-base font-semibold text-white/90 mt-1">{item.desc}</p>
                          <button
                            className="btn btn-sm md:btn-md lg:btn-lg mt-2 text-black animate-pulse"
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
