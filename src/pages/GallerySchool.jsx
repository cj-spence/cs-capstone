import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Augustine from '../assets/smcaii02157.JPG'
import Albert from '../assets/smcaiii00348.JPG'
import quad from '../assets/smcav00246.JPG'
import sem from '../assets/smcav00634.JPG'
import classtime from '../assets/smcav03055.JPG'

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

export const GallerySchool = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
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
        <section id="/saintmarys" className="min-h-screen flex flex-col items-center justify-center p-4 bg-base-100">

            <div className="w-full max-w-6xl text-center mb-8 md:mb-12">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Historical Archives Gallery</h1>
                <p className="text-sm md:text-lg opacity-80">
                    Browse through our collection of historical moments
                </p>
            </div>

            <div className="w-full max-w-5xl mx-auto mb-12">
                <div className="carousel w-full rounded-box shadow-xl">
                    {galleryItems.map((item, index) => (
                        <div id={`item${index + 1}`} key={index} className="carousel-item relative w-full">
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full object-cover h-[60vh]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#item${index === 0 ? galleryItems.length : index}`} className="btn btn-circle btn-accent">❮</a>
                                <a href={`#item${index === galleryItems.length - 1 ? 1 : index + 2}`} className="btn btn-circle btn-accent">❯</a>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h2 className="text-xl md:text-3xl font-bold text-white">{item.title}</h2>
                                <p className="text-white/90 mt-2">{item.desc}</p>
                                <button 
                                    className="btn btn-sm btn-accent mt-2"
                                    onClick={() => openFullscreen(index)}
                                >
                                    View Fullscreen
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl">
                <Link to="/gallery" className="btn btn-accent">
                    Back to Main Gallery
                </Link>
                <Link to="/" className="btn btn-outline btn-accent">
                    View Timeline
                </Link>
            </div>
            {isFullscreen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={closeFullscreen}
                    tabIndex={0}
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <div className="relative max-w-full max-h-full">
                            <img 
                                src={galleryItems[currentIndex].image} 
                                alt={galleryItems[currentIndex].alt} 
                                className="max-w-full max-h-[90vh] object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button 
                                className="absolute left-4 top-1/2 transform btn btn-circle btn-secondary w-7 h-7 md:w-12 md:h-12"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                            >
                                ❮
                            </button>
                            <button 
                                className="absolute right-4 top-1/2 transform btn btn-circle btn-secondary w-7 h-7 md:w-12 md:h-12"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                            >
                                ❯
                            </button>
                            <div className="absolute -top-12 right-0 flex items-center gap-2 bg-black/50 rounded-full px-3 py-1">
                                <span className="text-white text-sm hidden md:block">
                                    Press ESC to exit
                                </span>
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
                        </div>
                        <div className="mt-4 text-center text-white max-w-3xl px-4">
                            <h2 className="text-xl md:text-3xl font-bold">{galleryItems[currentIndex].title}</h2>
                            <p className="text-white/90 mt-2">{galleryItems[currentIndex].desc}</p>
                            <p className="text-white/70 mt-2">{currentIndex + 1} of {galleryItems.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};