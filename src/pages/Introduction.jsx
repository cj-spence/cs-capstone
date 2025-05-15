import Herman from '../assets/herman.png'
import Musheer from '../assets/musheer.png'
import { ScrollDown } from '../components/ScrollDown';

export const Introduction = () => {
    return (
        <section id="" className="min-h-screen flex flex-col items-center text-center justify-center relative px-4 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mb-16">
            <div data-aos="fade-right" className="relative flex flex-col items-center md:items-start">
              <div className="relative flex justify-center md:justify-start drop-shadow-xl w-full">
                <div className="group relative">
                  <div className="mask mask-squircle bg-accent p-4 md:p-5 rounded-xl shadow-2xl hover:scale-103 duration-300 transition-transform w-[250px] md:w-fit">
                    <img 
                      src={Herman} 
                      alt="Herman" 
                      className='mask mask-squircle w-full h-full object-cover'
                    />
                  </div>
                  <div className="hidden md:block absolute bottom-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mb-2 opacity-0 sm:opacity-0 sm:group-hover:opacity-100 group-hover:opacity-100 transition-opacity duration-500 w-[90vw] md:w-fit max-w-[300px] md:max-w-3xl pointer-events-none">
                    <div className="chat chat-start">
                      <div className="chat-bubble bg-accent rounded-3xl px-4 py-3 md:px-6 md:py-4 text-md md:text-lg font-medium text-black shadow-lg hover:shadow-xl transition-shadow leading-relaxed tracking-wide">
                        "But this is something now about Ethnic Studies, this is an opportunity to become an activist."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center w-full">
                <div className="badge badge-lg md:badge-xl badge-accent text-xl md:text-3xl font-semibold drop-shadow-lg px-5 py-5"> 
                  Herman Brown 
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" className="relative flex flex-col items-center md:items-end">
              <div className="relative flex justify-center md:justify-end drop-shadow-xl w-full">
                <div className="group relative">
                  <div className="mask mask-squircle bg-secondary p-4 md:p-5 rounded-xl shadow-2xl hover:scale-103 duration-300 transition-transform w-[250px] md:w-fit">
                    <img 
                      src={Musheer} 
                      alt="Musheer" 
                      className='mask mask-squircle w-full h-full object-cover'
                    />
                  </div>
                  <div className="hidden md:block absolute bottom-full right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 mb-2 opacity-0 sm:opacity-0 sm:group-hover:opacity-100 group-hover:opacity-100 transition-opacity duration-500 w-[90vw] md:w-fit max-w-[300px] md:max-w-3xl pointer-events-none">
                    <div className="chat chat-end">
                      <div className="chat-bubble bg-secondary rounded-3xl px-4 py-3 md:px-6 md:py-4 text-md md:text-lg font-medium text-black hover:shadow-xl transition-shadow leading-relaxed tracking-wide">
                        "Remember, it's not the people in power, it's the power in the people."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center w-full">
                <div className="badge badge-lg md:badge-xl badge-secondary text-xl md:text-3xl font-semibold drop-shadow-lg px-5 py-5">
                  Musheer Abdul-Jabbar
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade" className="p-3 bg-secondary rounded-xl mb-5">
            <div className="p-3 bg-accent rounded-xl text-left font-medium max-w-screen-md mx-auto">
              <div className='text-center text-xl font-bold'>
                Herman, Musheer, and ES-201.
              </div>
              <div className='font-medium text-center mt-5'>
                During Spring 2025, students from the course Ethnic Studies 201: Creating Community documented the oral histories of two Saint Mary’s College (SMC) alumni: Herman Brown and Musheer Abdul-Jabbaar (formerly Edward Badon). Herman and Musheer attended SMC from 1969-1974 and were active participants in the nationwide student movement that led to the establishment of Ethnic Studies.
              </div>
              <div className='items-center text-center text-md font-semibold mt-5'>
                Scroll down to view their stories.
              </div>

            </div>
          </div>
        </section>
    );
}