import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { ScrollDown } from "./ScrollDown";
import marypleasant1 from "../assets/marypleasant.jpg";
import marypleasant2 from "../assets/marypleasant2.jpg";

const LazyLoad = ({ children, placeholder = null, rootMargin = "200px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin]);

  return <div ref={ref}>{isVisible ? children : placeholder}</div>;
};

const HorizontalScrollVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const content = [
    {
      type: "text",
      id: 2,
      title: "Legacy and Ongoing Advocacy",
      description:
        "Herman and Musheer were key leaders of the student-led movement here at SMC, which led to the creation of a number of academic programs and services including on our campus that include: ",
    },
    {
      type: "text",
      id: 2,
      title: "",
      caption:
        "The Intercultural Center (formerly, the Third World Cultural Center)\n\nThe High Potential Program\n\nThe Tutorial & Academic Skills Center (formerly, the Office of Tutorial Services Program)\n\nThe Center for Writing Across the Curriculum (previously, Better Writing courses)\n\nThe Student Success Office (formerly, the Office of Advising Services).",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=256hxAds2pc",
      caption: "Herman discussing the honoring of Mary Pleasant.",
    },
    {
      type: "text",
      id: 2,
      title: "Who is Mary Pleasant?",
      caption:
        "Mary Ellen Pleasant was born enslaved in Georgia in 1814. She gained her freedom and moved north, where she worked on the Underground Railroad. In the 1850s, she moved to San Francisco during the Gold Rush and built a fortune through businesses and real estate. ",
    },
    {
      type: "image",
      id: 3,
      url: marypleasant2,
      alt: "Mary Ellen Pleasant 2",
      caption:
        "Pleasant, a light-skinned Black woman often passed as white to avoid recapture back into slavery.",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=98Fmk96C1Q4",
      caption: "Musheer discussing the honoring of Mary Pleasant.",
    },
    {
      type: "text",
      id: 2,
      title: "Why is she not remembered at SMC?",
      description:
        "She secretly funded abolitionist causes, including John Brown’s raid, and later helped desegregate San Francisco’s streetcars. She made donations to support the founding of Saint Mary’s College of California.",
    },
    {
      type: "image",
      id: 3,
      url: marypleasant1,
      alt: "Mary Ellen Pleasant",
      caption:
        "Mary Pleasant was California’s first Black millionaire, a key figure in the California Civil Rights movement, and an early donor to SMC.",
    },
  ];

  const cardPadding = 32;
  const gapBetweenCards = 20;

  const [computedCardWidth, setComputedCardWidth] = useState(
    window.innerWidth > 640 ? 760 : window.innerWidth * 0.9
  );
  const [sectionHeight, setSectionHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      const vw = window.innerWidth;
      const newCardWidth = vw > 640 ? 760 : vw * 0.9;
      setComputedCardWidth(newCardWidth);
      setViewportWidth(vw);

      const totalScroll =
        content.length * (newCardWidth + cardPadding + gapBetweenCards);
      const maxScrollNeeded = Math.max(totalScroll - vw, 0);
      setSectionHeight(window.innerHeight + maxScrollNeeded);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [content.length]);

  const scrollWidth =
    content.length * (computedCardWidth + cardPadding + gapBetweenCards);

  const xTarget = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollWidth + viewportWidth]
  );

  return (
    <section
      ref={targetRef}
      style={{ height: `${sectionHeight}px` }}
      className="relative -mt-4"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{
            x: xTarget,
            width: scrollWidth,
            paddingLeft: "30px",
            willChange: "transform",
            transform: "translate3d(0, 0, 0)"
          }}
          className="flex items-center gap-13 relative"
        >
          {content.map((item, index) => {
            if (item.type === "video") {
              return (
                <div
                  key={index}
                  className="p-4 bg-secondary rounded-xl flex-shrink-0"
                  style={{ width: computedCardWidth }}
                >
                  <div className="p-4 bg-accent rounded-xl">
                    <LazyLoad
                      placeholder={
                        <div
                          style={{
                            height: "400px",
                            width: "100%",
                            backgroundColor: "#eee",
                          }}
                        />
                      }
                    >
                      <VideoPlayer url={item.url} />
                    </LazyLoad>
                    <p className="text-center text-md text-black mt-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            } else if (item.type === "text") {
              return (
                <div
                  key={index}
                  className="p-4 bg-secondary rounded-xl flex-shrink-0"
                  style={{ width: computedCardWidth }}
                >
                  <div className="w-full h-full bg-accent rounded-xl">
                    <div className="text-center h-full flex flex-col items-center justify-center p-8">
                      <h2 className="text-lg md:text-3xl font-bold mb-4">
                        {item.title}
                      </h2>
                      <p className="text-xs md:text-lg mb-2 whitespace-pre-line">
                        {item.caption}
                      </p>
                      <p className="text-sm md:text-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else if (item.type === "image") {
              return (
                <div
                  key={index}
                  className="p-4 bg-secondary rounded-xl flex-shrink-0"
                  style={{ width: computedCardWidth }}
                >
                  <div className="p-4 bg-accent rounded-xl">
                    <LazyLoad
                      placeholder={
                        <div
                          style={{
                            height: "40vh",
                            width: "100%",
                            backgroundColor: "#eee",
                          }}
                        />
                      }
                    >
                      <img
                        src={item.url}
                        alt={item.alt}
                        className="w-full h-[40vh] sm:h-[400px] object-cover object-top rounded-lg"
                      />
                    </LazyLoad>
                    {item.caption && (
                      <p className="text-center text-md text-black mt-2">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </motion.div>
      </div>
      <ScrollDown />
    </section>
  );
};

const VideoPlayer = ({ url }) => {
  const [muted, setMuted] = useState(true);
  const playerRef = useRef(null);

  return (
    <div className="group relative h-[400px] overflow-hidden rounded-xl">
      <ReactPlayer
        ref={playerRef}
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
        muted={muted}
        loop={true}
        playsinline={true}
        config={{
          youtube: {
            playerVars: {
              autoplay: 0,
              mute: muted ? 1 : 0,
              modestbranding: 1,
              rel: 0,
              fs: 1,
            },
          },
        }}
      />
    </div>
  );
};

const HorizontalScroll4 = () => {
  return (
    <div>
      <HorizontalScrollVideo />
    </div>
  );
};

export default HorizontalScroll4;
