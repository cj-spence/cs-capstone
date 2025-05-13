import { Link } from "react-router-dom";
import Augustine from '../assets/smcaii02157.JPG'
import Albert from '../assets/smcaiii00348.JPG'
import quad from '../assets/smcav00246.JPG'
import sem from '../assets/smcav00634.JPG'
import classtime from '../assets/smcav03055.JPG'


export const GallerySchool = () => {
    return (
        <section id="/saintmarys" data-aos="fade" className="min-h-screen flex flex-col items-center justify-center p-4 bg-base-100">

            <div className='p-4 bg-secondary rounded-xl px-2 py-2'>
                <div className='p-4 bg-accent rounded-xl px-4 py-3 text-xl font-semibold'>
                    Saint Mary's in the '70s
                </div>
            </div>


            <div className='p-0 px-4 py-4 bg-secondary rounded-xl mt-10'>
                <div className="p-0 px-4 py-4 rounded-xl bg-accent">
                    <div className="w-full max-w-5xl mx-auto">
                        <div className="carousel w-full rounded-box shadow-xl">

                            <div id="item1" className="carousel-item relative w-full">
                                <img
                                    src={Augustine}
                                    alt="Saint Mary's Campus in 1970s"
                                    className="w-full object-cover h-[60vh]"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#item5" className="btn btn-circle btn-secondary">❮</a>
                                    <a href="#item2" className="btn btn-circle btn-secondary">❯</a>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                    <h2 className="text-xl md:text-3xl font-bold text-white">1970s Campus Life</h2>
                                    <p className="text-white/90 mt-2">Augustine Hall in 1970</p>
                                </div>
                            </div>


                            <div id="item2" className="carousel-item relative w-full">
                                <img
                                    src={Albert}
                                    alt="Saint Mary's Campus in 1970s"
                                    className="w-full object-cover h-[60vh]"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#item1" className="btn btn-circle btn-secondary">❮</a>
                                    <a href="#item3" className="btn btn-circle btn-secondary">❯</a>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                    <h2 className="text-xl md:text-3xl font-bold text-white">St. Albert Hall Library, 1970</h2>
                                    <p className="text-white/90 mt-2">New Library building with students in foreground</p>
                                </div>
                            </div>


                            <div id="item3" className="carousel-item relative w-full">
                                <img
                                    src={quad}
                                    alt="Interview with activists"
                                    className="w-full object-cover h-[60vh]"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#item2" className="btn btn-circle btn-secondary">❮</a>
                                    <a href="#item4" className="btn btn-circle btn-secondary">❯</a>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                    <h2 className="text-xl md:text-3xl font-bold text-white">St. Albert Hall Library Quad, 1970</h2>
                                    <p className="text-white/90 mt-2">New Library building behind oak tree</p>
                                </div>
                            </div>


                            <div id="item4" className="carousel-item relative w-full">
                                <img
                                    src={sem}
                                    alt="Historical campus building"
                                    className="w-full object-cover h-[60vh]"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#item3" className="btn btn-circle btn-secondary">❮</a>
                                    <a href="#item5" className="btn btn-circle btn-secondary">❯</a>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                    <h2 className="text-xl md:text-3xl font-bold text-white">Philosophy Seminar, 1970</h2>
                                    <p className="text-white/90 mt-2">Philosophy Seminar with Owen Carroll</p>
                                </div>
                            </div>


                            <div id="item5" className="carousel-item relative w-full">
                                <img
                                    src={classtime}
                                    alt="Historical campus building"
                                    className="w-full object-cover h-[60vh]"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#item4" className="btn btn-circle btn-secondary">❮</a>
                                    <a href="#item1" className="btn btn-circle btn-secondary">❯</a>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                    <h2 className="text-xl md:text-3xl font-bold text-white"></h2>
                                    <p className="text-white/90 mt-2">Philosophy Seminar with Owen Carroll</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl mt-10">
                        <Link to="/gallery" className="btn btn-accent">
                            Back to Main Gallery
                        </Link>
                        <Link to="/" className="btn btn-outline btn-secondary">
                            View Timeline
                        </Link>
                    </div>

        </section>
    );
}