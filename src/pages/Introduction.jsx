import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const Introduction = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center text-center justify-center relative overflow-hidden">


            <RevealOnScroll>

                <div className="flex w-full items-center justify-center">
                    <div className="card bg-gray-300 rounded-box h-100 w-84 grid grow place-items-center"> <img className="h-96 w-80 rounded-lg object-cover object-center" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg" alt="bron"/> </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="card bg-gray-300 rounded-box h-100 w-84 grid grow place-items-center"> <img className="h-96 w-80 rounded-lg object-cover object-center" src="https://images.squarespace-cdn.com/content/v1/65d0423c9de6215855817b18/f7425a32-0ffe-4bf6-b394-f125ef3c8970/Michael+Jordan%2C+Miami%2C+FL+1989+-+%5B2x3%5D.jpg" alt="jordan"/> </div>
                </div>
            
            </RevealOnScroll>

        </section>
    );
};
