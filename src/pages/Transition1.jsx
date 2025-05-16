import youngmusheer from '../assets/youngmusheer.png'
import youngmusheer2 from '../assets/youngmusheer2.png'

export const Transition1 = () => {
    
    return (
        <section id="" className="flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div data-aos="" className="flex flex-col items-center justify-center mx-auto px-4 text-center sm:px-6 w-full max-w-4xl">
                <div className="p-4 bg-secondary rounded-xl flex-shrink-0">
                  <div className="p-4 bg-accent rounded-xl">
                    <img src={youngmusheer} className="w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] object-cover rounded-lg" />
                    <p className="text-center text-md text-black mt-2 max-w-[80vw] sm:max-w-[700px] break-words">
                        Pictured: Musheer Abdul-Jabbaar (formerly Edward Badon) in his youth.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-secondary rounded-xl flex-shrink-0 mt-10">
                  <div className="p-4 bg-accent rounded-xl">
                    <img src={youngmusheer2} className="w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] object-cover object-right sm:object-center rounded-lg" />
                    <p className="text-center text-md text-black mt-2 max-w-[80vw] sm:max-w-[700px] break-words">
                        Musheer Abdul-Jabbaar, a co-founder of BSU at his Catholic High School in L.A.
                    </p>
                  </div>
                </div>

            </div>

        </section>
    );
};