import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export const GalleryInterviews = () => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            fs: 1,
            iv_load_policy: 3,
            disablekb: 1,
            playsinline: 1,
            cc_load_policy: 0,
            widget_referrer: window.location.href
        },
    };

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (Math.abs(touchStart - touchEnd) > 50) {
            const currentSlide = document.querySelector('.carousel-item[style*="display: block"]');
            if (!currentSlide) return;

            if (touchStart - touchEnd > 50) {
                const nextButton = currentSlide.querySelector('a[href^="#slide"]:last-child');
                if (nextButton) nextButton.click();
            } else if (touchStart - touchEnd < -50) {
                const prevButton = currentSlide.querySelector('a[href^="#slide"]:first-child');
                if (prevButton) prevButton.click();
            }
        }
    };

    const videos = [
        { id: 'gGJJi_i52DI', title: 'Herman 3/10/25' },
        { id: 'C0nBSwJyq40', title: 'Musheer 3/10/25' },
        { id: 'PR4cG2zblu4', title: 'Herman 3/17/25' },
        { id: 'oneCekg6qJE', title: 'Musheer 3/17/25' },
        { id: 'iNOkkhYKMBE', title: 'Herman 3/24/25' },
        { id: 'EjAfwSl2gOM', title: 'Musheer 3/24/25' },
        { id: 'PWgLF_HIiGo', title: 'Herman 4/14/25' },
        { id: 'QJAWcY0luHM', title: 'Musheer 4/14/25' },
        { id: 'S9N-gYw3RTg', title: 'Herman 4/28/25' },
        { id: 'hNqI6E5uuIM', title: 'Musheer 4/28/25' },
        { id: '26Ty5LX5JyA', title: 'Herman 5/5/25' },
        { id: 'p56tdtSBtZk', title: 'Musheer 5/5/25' }
    ];

    return (
        <section id="/interviews" data-aos="fade" className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 py-10">
            <div className='p-4 bg-secondary rounded-xl'>
                <div className='p-4 bg-accent rounded-xl text-xl max-w-sm font-semibold'>
                    Full Length Interviews
                </div>
            </div>

            <div className='w-full max-w-screen-sm lg:max-w-screen-lg mt-6'>
                <div className='p-2 md:p-4 bg-secondary rounded-xl'>
                    <div className='p-2 md:p-4 bg-accent rounded-lg'>
                        <div 
                            className="carousel"
                            ref={carouselRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {videos.map((video, index) => (
                                <div 
                                    id={`slide${index + 1}`} 
                                    key={video.id} 
                                    className="carousel-item relative w-full"
                                >
                                    <div className="aspect-video w-full rounded-xl h-full overflow-hidden z-0 bg-black">
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=0&modestbranding=1&rel=0&iv_load_policy=3&fs=1`}
                                            className="w-full h-full"
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10 pointer-events-none">
                                        <a 
                                            href={`#slide${index === 0 ? videos.length : index}`} 
                                            className="btn btn-circle btn-secondary text-xs md:text-lg w-7 h-7 md:w-12 md:h-12 pointer-events-auto"
                                        >
                                            ❮
                                        </a>
                                        <a 
                                            href={`#slide${index === videos.length - 1 ? 1 : index + 2}`} 
                                            className="btn btn-circle btn-secondary text-xs md:text-lg w-7 h-7 md:w-12 md:h-12 pointer-events-auto"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-screen-md mt-10">
                <Link to="/gallery" className="btn btn-accent">
                    Back to Main Gallery
                </Link>
                <Link to="/" className="btn btn-outline btn-secondary">
                    View Timeline
                </Link>
            </div>
        </section>
    );
};
