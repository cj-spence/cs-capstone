import { TypeAnimation } from "react-type-animation";
import { ScrollDown } from "../components/ScrollDown";
import { useRef, useState, useEffect } from "react";

const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, inView];
};

export const Landing = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      id="/"
      className="min-h-screen flex flex-col items-center justify-center text-center relative py-16 md:py-24 lg:py-70 overflow-hidden"
    >
      <div
        ref={ref}
        data-aos="fade"
        data-aos-delay="300"
        className="mx-auto px-4 sm:px-6 w-full max-w-4xl xl:max-w-5xl"
      >
        {inView ? (
          <TypeAnimation
            sequence={[
              "Hey there.",
              1000,
              "こんにちは。",
              1000,
              "Hola.",
              1000,
              "안녕하세요.",
              1000,
              "Ciao.",
              1000,
              "नमस्ते।",
              1000,
              "Bonjour.",
              1000,
              "你好。",
              1000,
              "привет.",
              1000,
              ".مرحبًا",
              1000,
              ".שלום",
              1000,
              "Xin chào.",
              1000,
              "Kia Ora.",
              1000,
              "Γειά σου.",
              1000,
            ]}
            wrapper="span"
            speed={1}
            deletionSpeed={2}
            className="text-4xl md:text-7xl font-bold mb-6"
            repeat={Infinity}
          />
        ) : (
          <span className="text-4xl md:text-7xl font-bold mb-6">Hey there.</span>
        )}

        <h2 className="text-2xl md:text-4xl mb-10 mt-5">
          This is a collection of stories, memories, and media of{" "}
          <span className="text-secondary text-shadow-sm font-semibold">
            Herman Brown
          </span>{" "}
          and{" "}
          <span className="text-secondary text-shadow-sm font-semibold">
            Musheer Abdul-Jabbaar
          </span>
          .
        </h2>

        <h2 className="text-lg md:text-xl mt-20">
          You can easily navigate the page by {" "}
          <span className="text-secondary text-shadow-sm text-xl md:text-2xl font-semibold">
            Scrolling Down
          </span>
          .
        </h2>

        <div className="text-black justify-center items-center mt-16 md:mt-24 lg:mt-40">
          <ScrollDown />
        </div>
      </div>
    </section>
  );
};
