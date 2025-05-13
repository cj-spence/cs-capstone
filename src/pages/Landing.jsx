import { ScrollDown } from "../components/ScrollDown";

export const Landing = () => {
    
    return (
        <section id="/" className="min-h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

                <div data-aos="fade" data-aos-delay="300" className="mx-auto px-4 sm:px-6 w-full max-w-4xl xl:max-w-5xl">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6">Hey there.</h1>
                    <h2 className="text-2xl md:text-4xl mb-10">
                        This is a collection of stories, memories, and media of{' '}
                        <span className="text-secondary text-shadow-sm">Herman Brown</span> and{' '}
                        <span className="text-secondary text-shadow-sm">Musheer Abdul-Jabbaar</span>.
                    </h2>

                    <div className="text-black justify-center items-center mt-16 md:mt-24 lg:mt-40">
                    <ScrollDown />
                    </div>

                </div>

        </section>
    );
};