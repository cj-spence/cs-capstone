import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { ScrollDown } from "./ScrollDown";
import ponchatoula from '../assets/ponchatoula.png';
import hermanstown from '../assets/hermansproject.png';

const HorizontalScrollVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const content = [
    {
      type: "text",
      id: 2,
      title: "Early Life",
      description: "Herman and Musheer's childhood stories.",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=CjEwONEXx-Q",
      caption: "Herman disucssing his upbringing in the West Oakland projects.",
    },
    {
      type: "text",
      id: 2,
      title: "Herman's Childhood",
      description:
        "Herman Brown was born in West Oakland, California on September 23, 1951. Herman was raised in a close-knit Black neighborhood with his parents and older brother Roy Brown, who also attended Saint Mary’s College.",
    },
    {
      type: "image",
      id: 3,
      url: hermanstown,
      alt: "Herman's Hometown Project",
      caption:
        "Herman grew up in Cypress Village Housing Project, West Oakland, circa 1950s.",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=iy6T0nqaNNg",
      caption: "Musheer talking about his time in the Jim Crow South.",
    },
    {
      type: "text",
      id: 2,
      title: "Musheer's Childhood",
      description:
        "Musheer Abdul-Jabbaar (born Edward Badon in 1952) grew up in Ponchatoula, Louisiana, raised by a strong matriarchal family. His early life in the Jim Crow South, including threats faced when integrating a Catholic school, shaped his lifelong commitment to social and racial justice.",
    },
    {
      type: "image",
      id: 3,
      url: ponchatoula,
      alt: "Musheer's Hometown",
      caption: "Ponchatoula, Louisiana - [1936]",
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

const HorizontalScroll = () => {
  return (
    <div>
      <HorizontalScrollVideo />
    </div>
  );
};

export default HorizontalScroll;
