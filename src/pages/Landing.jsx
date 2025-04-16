import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { SiDaisyui } from "react-icons/si";
import { ScrollDown } from "../components/ScrollDown";

export const Landing = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center text-center justify-center relative overflow-hidden">


            <RevealOnScroll>

                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6"> Hey there. </h1>

                    <h2 className="max-w-3xl text-2xl md:text-4xl mb-10"> This is a collection of stories, memories, and media of <span className="text-secondary text-shadow-sm">Herman Brown</span> and <span className="text-secondary text-shadow-sm">Musheer Abdul-Jabbar</span>. </h2>

                        <div className="text-lg mb-2">
                            <p> Researched by Professor Viola and ES-201 </p>
                            <p> Developed by CJ Spence and Jonathan Chambers </p>
                        </div>

                        <div className='flex space-x-6 mb-4 justify-center'>
                            
                            <FaReact className="w-8 h-8 hover:scale-140 hover:text-secondary duration-150 transition-transform"/>
                            <DiJavascript className="w-8 h-8 hover:scale-140 hover:text-secondary duration-150 transition-transform"/>
                            <RiTailwindCssFill className="w-8 h-8 hover:scale-140 hover:text-secondary duration-150 transition-transform" />
                            <SiDaisyui className="w-8 h-8 hover:scale-140 hover:text-secondary duration-150 transition-transform" />

                        </div>

                </div>

                <div className="bottom-0 w-full">
                <ScrollDown />
                </div>

            </RevealOnScroll>

        </section>
    );
};

