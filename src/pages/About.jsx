import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

export const About = () => {
    
    return (
        <section id="/about" className="h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col items-center justify-center mx-auto px-4 text-center sm:px-6 w-full max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-xl">Thank you for your time.</h1>
            <div className="bg-secondary p-6 rounded-2xl max-w-3xl w-full">
                <div className="bg-accent p-6 rounded-xl space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold">
                    This website was created in collaboration with Saint Mary's ES201 Creating Community class to share the interviews and stories of Herman and Musheer.
                </h2>
                
                <h3 className="text-md md:text-lg font-medium">
                    Thank you to <span className="font-bold">Professor Viola</span> and{" "}
                    <span className="tooltip" data-tip="A special thanks to all participating students!">
                    <span className="underline decoration-dotted cursor-pointer font-semibold">every student</span>
                    </span>{" "}
                    for their diligent work and effort to make this possible.
                </h3>         
                
                <p className='text-lg text-black'>
                    Developed by <span className="font-bold">CJ Spence</span> and <span className="font-bold">Jonathan Chambers</span>.
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