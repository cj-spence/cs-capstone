import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect, lazy, Suspense, useMemo } from "react";
import bsudemands from "../assets/bsudemands.png";
import chapeloccupation from "../assets/chapeloccupation.png";

const ReactPlayer = lazy(() => import("react-player"));

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

const LazyLoad = ({ children, placeholder, rootMargin = "500px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let ticking = false;
    const observer = new IntersectionObserver(
      entries => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
              }
            });
            ticking = false;
          });
          ticking = true;
        }
      },
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [rootMargin]);

  return <div ref={ref}>{isVisible ? children : placeholder}</div>;
};

const HorizontalScrollVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const content = useMemo(() => [
    {
      type: "text",
      id: 2,
      title: "Activism at Saint Mary's",
      description:
        '"We were not feeling that [as Black students] we were included as part of the Saint Mary’s community…But we had to evolve and make the campus reflect us to a certain degree."\n\n- Herman Brown',
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=NRsKIuZpTrQ",
      caption: "Herman recalling his experience as an athlete and activist.",
    },
    {
      type: "text",
      id: 2,
      title: "The Basketball Walkout",
      description:
        "In 1971, during a game against Fresno State, BSU president Musheer and his friend Kamal Abdul-Jabbaar halted play by standing at midcourt for 30 minutes to present 11 demands, including more Black Studies courses and hiring a Black basketball coach.",
    },
    {
      type: "image",
      id: 3,
      url: bsudemands,
      alt: "11 BSU Demands",
      caption:
        "The letter written to SMC Administration with 11 demands from the Black Student Union.\n\n(full size available in the gallery)",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=H7IeUmJjNoo",
      caption:
        "Musheer talking about his activity as BSU president, and student-activist.",
    },
    {
      type: "text",
      id: 2,
      title: "The Second Walkout",
      description:
        "The second SMC basketball team protest was against Santa Clara on February 26, 1972. At halftime, Herman announced that he and four other SMC teammates: Roy Brown (Herman’s brother), Nate Carroll, Maurice Harper, and Alonzo Strange were boycotting the second half of the game in protest of racism at the College.",
    },
    {
      type: "image",
      id: 3,
      url: chapeloccupation,
      alt: "Chapel Occupation",
      caption:
        "In the aftermath of the basketball team walkout, BSU and MEChA student activists fasted and slept in the Chapel pews for several days in response to the potential elimination of Chicano Studies courses.",
    }
  ], []);

  const cardPadding = 32;
  const gapBetweenCards = 20;

  const [computedCardWidth, setComputedCardWidth] = useState(
    window.innerWidth > 640 ? 760 : window.innerWidth * 0.9
  );
  const [sectionHeight, setSectionHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = debounce(() => {
      const vw = window.innerWidth;
      const newCardWidth = vw > 640 ? 760 : vw * 0.9;
      setComputedCardWidth(newCardWidth);
      setViewportWidth(vw);

      const totalScroll =
        content.length * (newCardWidth + cardPadding + gapBetweenCards);
      const maxScrollNeeded = Math.max(totalScroll - vw, 0);
      setSectionHeight(window.innerHeight + maxScrollNeeded);
    }, 100);

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
      className="relative"
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
                      rootMargin="200px"
                    >
                      <Suspense fallback={
                        <div style={{height: "400px", width: "100%", background: "#eee"}} />
                      }>
                        <VideoPlayer url={item.url} />
                      </Suspense>
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
                      <h2 className="text-lg md:text-3xl font-bold mb-4">{item.title}</h2>
                      <p className="text-sm md:text-xl">{item.description}</p>
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
                      rootMargin="200px"
                    >
                      <img
                        src={item.url}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-[40vh] sm:h-[400px] object-cover rounded-lg"
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
    </section>
  );
};

const VideoPlayer = ({ url }) => {
  const [muted] = useState(true);
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

const HorizontalScroll3 = () => {
  return (
    <div>
      <HorizontalScrollVideo />
    </div>
  );
};

export default HorizontalScroll3;
