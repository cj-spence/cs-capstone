import chapelprotest from '../assets/chapelprotest.png'
import jetmagazine from '../assets/jetmagazine.png'
import boycott from '../assets/boycott.png'

export const Transition3 = () => {
    
    return (
        <section id="" className="flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div data-aos="" className="flex flex-col items-center justify-center mx-auto px-4 text-center sm:px-6 w-full max-w-4xl">
                <div className="p-4 bg-secondary rounded-xl flex-shrink-0">
                  <div className="p-4 bg-accent rounded-xl">
                    <img src={chapelprotest} className="w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] object-cover rounded-lg" />
                    <p className="text-center text-md text-black mt-2 max-w-[80vw] sm:max-w-[700px] break-words">
                        Students and staff gather to occupy the chapel in solidarity against racism. 
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-secondary rounded-xl flex-shrink-0 mt-10">
                    <div className="p-4 bg-accent rounded-xl">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <img 
                                src={jetmagazine} 
                                className="w-full h-[40vh] sm:h-[400px] object-cover object-right sm:object-center rounded-lg" 
                                />
                            </div>
                        
                            <div className="flex-1">
                                <img 
                                src={boycott}
                                className="w-full h-[40vh] sm:h-[400px] object-cover object-top rounded-lg" 
                                />
                            </div>
                        </div>
                            <p className="text-center text-md text-black mt-2">
                                Featured in Jet Magazine on March 4, 1971, The first basketball boycott brought temporary change before the firing of Odell Johnson.
                            </p>
                    </div>
                </div>
            </div>

        </section>
    );
};