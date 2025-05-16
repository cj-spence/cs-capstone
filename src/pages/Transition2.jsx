import hermanstare from '../assets/hermanstare.jpeg'
import musheerandfriends from '../assets/musheerandfriends.jpg'

export const Transition2 = () => {
    
    return (
        <section id="" className="flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div data-aos="" className="flex flex-col items-center justify-center mx-auto px-4 text-center sm:px-6 w-full max-w-4xl">
                <div className="p-4 bg-secondary rounded-xl flex-shrink-0">
                  <div className="p-4 bg-accent rounded-xl">
                    <img src={hermanstare} className="w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] object-cover rounded-lg" />
                    <p className="text-center text-md text-black mt-2 max-w-[80vw] sm:max-w-[700px] break-words">
                        Image of Musheer Abdul-Jabbaar (left), William Hearton (center), their friend who attended UC Berkeley, and Herman Brown (right). 
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-secondary rounded-xl flex-shrink-0 mt-10">
                  <div className="p-4 bg-accent rounded-xl">
                    <img src={musheerandfriends} className="w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] object-cover object-right sm:object-center rounded-lg" />
                    <p className="text-center text-md text-black mt-2 max-w-[80vw] sm:max-w-[700px] break-words">
                        Image of Musheer Abdul-Jabbaar (right), along with friends to his left.
                    </p>
                  </div>
                </div>

            </div>

        </section>
    );
};