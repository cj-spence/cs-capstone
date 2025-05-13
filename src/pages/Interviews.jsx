import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export const Interviews = () => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0
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
        if (touchStart - touchEnd > 50) {
            const currentSlide = document.querySelector('.carousel-item[style*="display: block"]');
            if (currentSlide) {
                const nextButton = currentSlide.querySelector('a[href^="#slide"]:last-child');
                if (nextButton) nextButton.click();
            }
        }

        if (touchStart - touchEnd < -50) {
            const currentSlide = document.querySelector('.carousel-item[style*="display: block"]');
            if (currentSlide) {
                const prevButton = currentSlide.querySelector('a[href^="#slide"]:first-child');
                if (prevButton) prevButton.click();
            }
        }
    };

    const videos = [
        { id: 'sy-_mTMgZyA', title: 'Interview 1' },
        { id: 'dQw4w9WgXcQ', title: 'Interview 2' },
        { id: '9bZkp7q19f0', title: 'Interview 3' },
        { id: 'JGwWNGJdvx8', title: 'Interview 4' }
    ];

    return (
        <section id="/interviews" className="h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div className='p-4 bg-secondary rounded-xl px-2 py-2'>
                <div className='p-4 bg-accent rounded-xl px-4 py-3 text-xl font-semibold'>
                    Full Length Interviews
                </div>
            </div>

            <div className='p-4 bg-secondary rounded-xl sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mt-10'>
                <div className='p-4 bg-accent rounded-xl'>
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
                                <div className="w-full h-full aspect-video">
                                    <YouTube 
                                        videoId={video.id}
                                        opts={opts}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a 
                                        href={`#slide${index === 0 ? videos.length : index}`} 
                                        className="btn btn-circle text-lg w-12 h-12"
                                    >
                                        ❮
                                    </a>
                                    <a 
                                        href={`#slide${index === videos.length - 1 ? 1 : index + 2}`} 
                                        className="btn btn-circle text-lg w-12 h-12"
                                    >
                                        ❯
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
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
        </section>
    );
};