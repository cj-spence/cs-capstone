import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import YouTube from 'react-youtube';

export const Interviews = () => {
    // YouTube player options
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0
        },
    };

    const videos = [
        { id: 'sy-_mTMgZyA', title: 'Interview 1' },
        { id: 'dQw4w9WgXcQ', title: 'Interview 2' },
        { id: '9bZkp7q19f0', title: 'Interview 3' },
        { id: 'JGwWNGJdvx8', title: 'Interview 4' }
    ];

    return (
        <section id="/interviews" className="h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">
            {/* Tech Stack Icons - kept from your original */}
            <div className="flex gap-4 mb-8">
                <FaReact className="text-4xl text-blue-500" />
                <DiJavascript className="text-4xl text-yellow-400" />
                <RiTailwindCssFill className="text-4xl text-cyan-400" />
                <SiDaisyui className="text-4xl text-purple-500" />
            </div>

            <div className="carousel max-w-4xl">
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
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a 
                                href={`#slide${index === videos.length - 1 ? 1 : index + 2}`} 
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};