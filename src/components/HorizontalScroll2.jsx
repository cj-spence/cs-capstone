import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { ScrollDown } from "./ScrollDown";
import musheerhermannathan from '../assets/musheerhermannathan.jpg'
import hermanandmusheer from '../assets/hermanandmusheer2.png'

const HorizontalScrollVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const content = [
    {
      type: "text",
      id: 2,
      title: "Experience at Saint Mary's",
      description: "Herman and Musheer's paths to SMC, experience on campus, and what they learned.",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=cokUQ-cvtj8",
      caption: "Herman explaining his path to SMC.",
    },
    {
      type: "text",
      id: 2,
      title: "Herman's Path to SMC",
      description: "A product of Oakland public schools, Herman developed a love for basketball and became a highly regarded recruit. In 1969, Herman followed his older brother, Roy Brown, and enrolled at SMC. ",
    },
    {
      type: "image",
      id: 3,
      url: musheerhermannathan,
      alt: "Nate, Herman, Musheer",
      caption: "Nate Carroll, Herman Brown, and Musheer Abdul-Jabbar.",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=5yd8HN6S_jA",
      caption: "Musheer explaining his path to SMC.",
    },
    {
      type: "text",
      id: 2,
      title: "Musheer's Path and First Event at SMC",
      description: "Before choosing to attend SMC, Musheer co-founded the first BSU at his Catholic High School and decided to attend SMC with a revolutionary vision.",
    },
    {
      type: "image",
      id: 3,
      url: hermanandmusheer,
      alt: "Musheer's Hometown",
      caption: "Herman Brown and Musher Abdul-Jabbaar at SMC.",
    }
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

  // Create a target transform value based on the scroll progress.
  const xTarget = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollWidth + viewportWidth]
  );
  // Create a motion value that we’ll manually update.
  const smoothX = useMotionValue(0);

  useEffect(() => {
    let animationFrameId;
    // A simple linear interpolation function.
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const update = () => {
      const current = smoothX.get();
      const target = xTarget.get();
      // Adjust the factor (0.1) for slower/faster smoothing.
      const newValue = lerp(current, target, 0.1);
      smoothX.set(newValue);
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    return () => cancelAnimationFrame(animationFrameId);
  }, [xTarget, smoothX]);

  return (
    <section
      ref={targetRef}
      style={{ height: `${sectionHeight}px` }}
      className="relative -mt-4"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{
            x: smoothX, // Use the manually interpolated value
            width: scrollWidth,
            paddingLeft: "30px",
            willChange: "transform",
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
                    <VideoPlayer url={item.url} />
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
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="w-full h-[40vh] sm:h-[400px] object-cover rounded-lg"
                    />
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

const HorizontalScroll2 = () => {
  return (
    <div>
      <HorizontalScrollVideo />
    </div>
  );
};

export default HorizontalScroll2;
