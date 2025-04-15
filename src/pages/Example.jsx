import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const Example = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center text-center justify-center relative overflow-hidden">


            <RevealOnScroll>

                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-[#CCA43B]"> Musheer and Herman (es201) </h1>

                    <p className='text-lg text-[#E5E5E5] mb-2'> Created by CJ Spence and Jonathan Chambers </p>

                    <div className='flex space-x-6 mb-4 justify-center'>
                        
                        <FaReact className="w-8 h-8 text-[#E5E5E5] hover:text-[#CCA43B] transition-color hover:scale-120 duration-150 transition-transform"/>
                        <DiJavascript className="w-8 h-8 text-[#E5E5E5] hover:text-[#CCA43B] transition-color hover:scale-120 duration-150 transition-transform"/>
                        <RiTailwindCssFill className="w-8 h-8 text-[#E5E5E5] hover:text-[#CCA43B] transition-color hover:scale-120 duration-150 transition-transform" />

                    </div>

                </div>
            
            </RevealOnScroll>

        </section>
    );
};