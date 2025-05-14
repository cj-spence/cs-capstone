import HermanMusheer from '../assets/hermanandmusheer.png'
import Fist from '../assets/fist.jpg'
import Campus from '../assets/smc1970.png'
import { Link } from 'react-router-dom';

export const GalleryMain = () => {
    return (
        <section 
            id="/gallery" 
            className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 py-10"
        >
            <div 
                data-aos="fade" 
                className="mb-4 text-sm sm:text-base md:text-lg lg:text-2xl font-bold"
            >
                Click the pictures below to check out the galleries.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto">
                <div data-aos="fade-right" className="flex flex-col items-center">
                    <div className="relative w-full">
                        <div className="bg-accent p-2 sm:p-3 md:p-4 rounded-lg w-full">
                            <Link to="/gallery/saintmarys">
                                <img 
                                    src={Campus} 
                                    alt="Saint Mary's Campus 1970" 
                                    className='w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[250px] xl:h-[300px] rounded-lg shadow-md hover:scale-105 duration-300 transition-transform object-cover'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-2 w-full">
                        <div className="badge badge-accent rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold px-3 py-4 w-full">
                            Saint Mary's in the '70s
                        </div>
                    </div>
                </div>

                <div data-aos="fade" className="flex flex-col items-center">
                    <div className="relative w-full">
                        <div className="bg-secondary p-2 sm:p-3 md:p-4 rounded-lg w-full">
                            <Link to="/gallery/interviews">
                                <img 
                                    src={HermanMusheer} 
                                    alt="Black Resistance" 
                                    className='w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[250px] xl:h-[300px] rounded-lg shadow-md hover:scale-105 duration-300 transition-transform object-cover'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-2 w-full">
                        <div className="badge badge-secondary rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold px-3 py-4 w-full">
                            Full-Length Interviews
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" className="flex flex-col items-center">
                    <div className="relative w-full">
                        <div className="bg-accent p-2 sm:p-3 md:p-4 rounded-lg w-full">
                            <Link to="/gallery/activism">
                                <img 
                                    src={Fist} 
                                    alt="Student Activism" 
                                    className='w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[250px] xl:h-[300px] rounded-lg shadow-md hover:scale-105 duration-300 transition-transform object-cover'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-2 w-full">
                        <div className="badge badge-accent rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold px-3 py-4 w-full">
                            Student Activism
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
