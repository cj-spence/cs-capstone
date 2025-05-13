import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { Link } from "react-router-dom";

export const Outro = () => {
    
    return (
        <section id="/about" className="h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div className="flex flex-col items-center justify-center mx-auto px-4 text-center sm:px-6 w-full max-w-4xl">
                <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-xl"> Thanks for coming. </h1>
                    <div className="bg-secondary p-6 rounded-2xl max-w-3xl w-full">
                        <div className="bg-accent p-6 rounded-xl space-y-6">
                        <h2 className="text-md md:text-xl font-semibold mb-10">
                            Though this chapter of Herman and Musheer's story closes, their work to secure Mary Pleasant's rightful place in history persists through their continued activism with Saint Mary's alumni.
                        </h2>
                        
                        <h3 className="text-lg md:text-xl font-medium">
                            Check out the other sections of the website below.
                        </h3>

                        <div className="flex flex-col">
                            <Link to="/gallery" className="btn mb-4"> Gallery </Link>
                            <Link to="/about" className="btn btn-xlqw"> About </Link>
                        </div>

                        </div>
                    </div>
            </div>

        </section>
    );
};