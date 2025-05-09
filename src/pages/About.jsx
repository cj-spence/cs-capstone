import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

export const About = () => {
    
    return (
        <section id="/about" className="h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col items-center justify-center mx-auto px-4 text-center sm:px-6 w-full max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-xl"> Made With Love </h1>
            <div className="bg-secondary p-6 rounded-2xl max-w-3xl w-full">
                <div className="bg-accent p-6 rounded-xl space-y-6">
                <h2 className="text-md md:text-xl font-medium">
                    This website was created in collaboration with Saint Mary's 
                    <span className="font-bold"> ES-201 Creating Community </span> class to share the interviews and stories of 
                    <span className="font-bold"> Herman </span> and 
                    <span className="font-bold"> Musheer</span>.
                </h2>
                
                <h3 className="text-md md:text-xl font-medium">
                    Thank you to <span className="font-bold">Professor Viola</span> and all{" "}
                    <span className="tooltip" data-tip="Paris Alcaraz, Natalia Cortev, Kalilah Epperson-Lee, Khalia Gathwright, Alexis Hackett, Eloise Hampson, Dante Hauser, Evony Jackson, Julian Jimenez, Kaleia Ketcham, Julie Lacerda, Eduardo Leon, Thibaud Maxant, Maiya Mccleod, Erica Meyers, Savannah Peden, Gwen Penalber, Christopher Spence.">
                    <span className="underline decoration-dotted cursor-pointer font-semibold">ES-201 Students</span>.
                    </span>{" "}
                </h3>         
                
                <p className='text-lg text-black'>
                    Developed by <a href="https://cjspence.com" target="_blank" className="font-bold underline decoration-dotted"> CJ Spence </a> and <span className="font-bold">Jonathan Chambers</span>.
                </p>

                <div className='flex space-x-6 justify-center'>
                    <FaReact className="w-8 h-8 text-black hover:scale-130 duration-150"/>
                    <DiJavascript className="w-8 h-8 text-black hover:scale-130 duration-150"/>
                    <RiTailwindCssFill className="w-8 h-8 text-black hover:scale-130 duration-150"/>
                    <SiDaisyui className="w-8 h-8 text-black hover:scale-130 duration-150" />
                </div>
                </div>
            </div>
            </div>

        </section>
    );
};