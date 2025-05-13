import HermanMusheer from '../assets/hermanandmusheer.png'
import Fist from '../assets/fist.jpg'
import Campus from '../assets/smc1970.png'
import { Link } from 'react-router-dom';

export const GalleryMain = () => {
    return (
        <section id="/gallery" className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden p-4">

            <div data-aos="fade" className="mb-2 md:mb-4 lg:mb-6 text-sm md:text-lg lg:text-2xl font-bold">
                Click the pictures below to check out the galleries.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 w-full max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-6xl mx-auto">

                <div data-aos="fade-right" className="flex flex-col items-center">
                    <div className="relative w-full max-w-[170px] sm:max-w-[180px] md:max-w-full">
                        <div className="bg-accent p-2 sm:p-3 md:p-4 rounded-lg w-full">
                            <Link to="/">
                                <img 
                                    src={Campus} 
                                    alt="Saint Mary's Campus 1970" 
                                    className='w-full h-[120px] sm:h-[140px] md:h-[180px] lg:h-[250px] rounded-lg shadow-md hover:scale-105 duration-300 transition-transform object-cover'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-1 sm:mt-2 md:mt-3 w-full">
                        <div className="badge badge-accent rounded-md text-xs sm:text-sm md:text-lg font-medium md:font-semibold px-2 py-1 sm:px-3 sm:py-2 w-full max-w-[160px] sm:max-w-[180px] md:max-w-full"> 
                            Saint Mary's in the '70s
                        </div>
                    </div>
                </div>

                <div data-aos="fade" className="flex flex-col items-center">
                    <div className="relative w-full max-w-[170px] sm:max-w-[180px] md:max-w-full">
                        <div className="bg-secondary p-2 sm:p-3 md:p-4 rounded-lg w-full">
                            <Link to="/interviews">
                                <img 
                                    src={HermanMusheer} 
                                    alt="Black Resistance" 
                                    className='w-full h-[120px] sm:h-[140px] md:h-[180px] lg:h-[250px] rounded-lg shadow-md hover:scale-105 duration-300 transition-transform object-cover'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-1 sm:mt-2 md:mt-3 w-full">
                        <div className="badge badge-secondary rounded-md text-xs sm:text-sm md:text-lg font-medium md:font-semibold px-2 py-1 sm:px-3 sm:py-2 w-full max-w-[160px] sm:max-w-[180px] md:max-w-full"> 
                            Full-Length Interviews
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" className="flex flex-col items-center">
                    <div className="relative w-full max-w-[170px] sm:max-w-[180px] md:max-w-full">
                        <div className="bg-accent p-2 sm:p-3 md:p-4 rounded-lg w-full">
                            <Link to="/">
                                <img 
                                    src={Fist} 
                                    alt="Student Activism" 
                                    className='w-full h-[120px] sm:h-[140px] md:h-[180px] lg:h-[250px] rounded-lg shadow-md hover:scale-105 duration-300 transition-transform object-cover'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-1 sm:mt-2 md:mt-3 w-full">
                        <div className="badge badge-accent rounded-md text-xs sm:text-sm md:text-lg font-medium md:font-semibold px-2 py-1 sm:px-3 sm:py-2 w-full max-w-[160px] sm:max-w-[180px] md:max-w-full"> 
                            SMC Student Activism
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};