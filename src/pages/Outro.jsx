import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Outro = () => {
    
    return (
        <section id="/about" data-aos="fade" className="h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden">

            <div className="flex flex-col items-center justify-center mx-auto px-4 text-center sm:px-6 w-full max-w-4xl">
                <TypeAnimation 
                        sequence={[
                            "Thank you.",
                            1000,
                            "ありがとう。",
                            1000,
                            "Gracias.",
                            1000,
                            "감사합니다.",
                            1000,
                            "Grazie.",
                            1000,
                            "धन्यवाद।",
                            1000,
                            "Merci.",
                            1000,
                            "谢谢。",
                            1000,
                            "Спасибо.",
                            1000,
                            ".شكرًا لك",
                            1000,
                            ".תודה לך",
                            1000,
                            "Cảm ơn.",
                            1000,
                            "Mauruuru koe.",
                            1000,
                            "Σας ευχαριστώ.",
                            1000,

                        ]}
                        wrapper="span"
                        speed={1}
                        deletionSpeed={2}
                        className="text-4xl md:text-5xl font-bold mb-6"
                        repeat={Infinity}
                        />
                    <div className="bg-secondary p-6 rounded-2xl max-w-3xl w-full">
                        <div className="bg-accent p-6 rounded-xl space-y-6">
                        <h2 className="text-lg md:text-2xl font-medium">
                            Though this chapter of Herman and Musheer's story closes, their work to secure Mary Pleasant's rightful place in history persists through their continued activism with Saint Mary's alumni.
                        </h2>

                        <h2 className="text-md md:text-xl font-semibold text-center">
                            " My ancestors gave me an assignment. They said, 'struggle until you are free'. " <br /> - Musheer Abdul-Jabbaar
                        </h2>

                        </div>

                    </div>

                    <h3 className="text-sm md:text-xl font-medium mt-5">
                        Check out the other sections of the website below.
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl mt-2">
                        <Link to="/gallery" className="btn btn-accent">
                        View Gallery
                        </Link>
                        <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                        Back to the Top
                        </button>
                        <Link to="/about" className="btn btn-accent">
                        View About
                        </Link>
                    </div>

            </div>

        </section>
    );
};