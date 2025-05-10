import Herman from '../assets/herman.png'
import HermanMusheer from '../assets/hermanandmusheer.png'
import Fist from '../assets/fist.jpg'
import StudentActivism from '../assets/studentactivism.png'
import { Link } from 'react-router-dom';

export const GalleryMain = () => {
    return (
        <section id="/gallery" className="h-screen flex flex-col items-center justify-center text-center relative pt-24 pb-16 md:py-24 lg:py-70 overflow-hidden">

            <div className="mb-6 text-xl font-bold">
                Click the pictures below to check out the galleries.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 w-full max-w-md md:max-w-6xl mx-auto">

                <div data-aos="fade-right" className="flex flex-col items-center">
                    <div className="relative flex justify-center w-full">
                        <div className="group relative w-[250px] md:w-[300px]">
                            <div className="bg-accent p-4 md:p-5 rounded-xl w-full">
                                <Link to="/"><img 
                                    src={HermanMusheer} 
                                    alt="Herman and Musheer" 
                                    className='w-full h-[200px] md:h-[250px] rounded-xl shadow-2xl hover:scale-107 duration-300 transition-transform object-cover'
                                /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-center w-full">
                        <div className="badge badge-accent rounded-xl md:badge-xl text-xl md:text-2xl font-semibold drop-shadow-lg px-4 py-4 w-[250px] md:w-[300px]"> 
                            Herman and Musheer
                        </div>
                    </div>
                </div>

                <div data-aos="fade" className="flex flex-col items-center">
                    <div className="relative flex justify-center w-full">
                        <div className="group relative w-[250px] md:w-[300px]">
                            <div className="bg-secondary p-4 md:p-5 rounded-xl w-full">
                                <Link to="/"><img 
                                    src={Fist} 
                                    alt="Black Resistance" 
                                    className='w-full h-[200px] md:h-[250px] rounded-xl shadow-2xl hover:scale-107 duration-300 transition-transform object-cover'
                                /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-center w-full">
                        <div className="badge badge-secondary rounded-xl md:badge-xl text-xl md:text-2xl font-semibold drop-shadow-lg px-4 py-4 w-[250px] md:w-[300px]"> 
                            Saint Mary's in the '70s
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" className="flex flex-col items-center">
                    <div className="relative flex justify-center w-full">
                        <div className="group relative w-[250px] md:w-[300px]">
                            <div className="bg-accent p-4 md:p-5 rounded-xl w-full">
                                <Link to="/"><img 
                                    src={StudentActivism} 
                                    alt="Student Activism" 
                                    className='w-full h-[200px] md:h-[250px] rounded-xl shadow-2xl hover:scale-107 duration-300 transition-transform object-cover'
                                /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-center w-full">
                        <div className="badge badge-accent rounded-xl md:badge-xl text-xl md:text-2xl font-semibold drop-shadow-lg px-4 py-4 w-[250px] md:w-[300px]"> 
                            SMC Student Activism
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};