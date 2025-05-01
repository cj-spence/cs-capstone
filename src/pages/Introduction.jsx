import Herman from '../assets/herman.png'
import Musheer from '../assets/musheer.png'
import { ScrollDown } from '../components/ScrollDown';

export const Introduction = () => {

    return (
        <section id="" data-aos="fade" className="min-h-screen flex flex-col items-center text-center justify-center relative px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mb-16">
            <div className="group relative flex flex-col items-center md:items-start">
              <div className="relative flex justify-center md:justify-start drop-shadow-xl w-full">
                <div className="mask mask-squircle bg-accent p-4 md:p-5 rounded-xl shadow-2xl hover:scale-103 duration-150 transition-transform w-[250px] md:w-fit">
                  <img 
                    src={Herman} 
                    alt="Herman" 
                    className='mask mask-squircle w-full h-full object-cover'
                  />
                </div>
                <div className="absolute bottom-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-[90vw] md:w-fit max-w-[300px] md:max-w-3xl">
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-accent rounded-3xl px-4 py-3 md:px-6 md:py-4 text-md md:text-lg font-medium text-black shadow-lg hover:shadow-xl transition-shadow leading-relaxed tracking-wide">
                      "But this is something now about Ethnic Studies, this is an opportunity to become an activist."
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center w-full">
                <div className="badge badge-lg md:badge-xl badge-accent text-xl md:text-3xl font-semibold drop-shadow-lg px-4 py-3"> 
                  Herman Brown 
                </div>
              </div>
            </div>
            <div className="group relative flex flex-col items-center md:items-end">
              <div className="relative flex justify-center md:justify-end drop-shadow-xl w-full">
                <div className="mask mask-squircle bg-secondary p-4 md:p-5 rounded-xl shadow-2xl hover:scale-103 duration-150 transition-transform w-[250px] md:w-fit">
                  <img 
                    src={Musheer} 
                    alt="Musheer" 
                    className='mask mask-squircle w-full h-full object-cover'
                  />
                </div>
                <div className="absolute bottom-full right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-[90vw] md:w-fit max-w-[300px] md:max-w-3xl">
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-secondary rounded-3xl px-4 py-3 md:px-6 md:py-4 text-md md:text-lg font-medium text-black hover:shadow-xl transition-shadow leading-relaxed tracking-wide">
                      "Remember, it's not the people in power, it's the power in the people."
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center w-full">
                <div className="badge badge-lg md:badge-xl badge-secondary text-xl md:text-3xl font-semibold drop-shadow-lg px-4 py-3">
                  Musheer Abdul-Jabbar
                </div>
              </div>
            </div>
          </div>
            <div className="text-black justify-center items-center mt-16 md:mt-24 lg:mt-40">
                <ScrollDown />
            </div>
        </section>
      );
}
