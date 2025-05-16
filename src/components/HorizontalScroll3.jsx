import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { ScrollDown } from "./ScrollDown";
import bsudemands from '../assets/bsudemands.png'
import chapeloccupation from '../assets/chapeloccupation.png'

const HorizontalScrollVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const content = [
    {
      type: "text",
      id: 2,
      title: "Activism at Saint Mary's",
      description: '"We were not feeling that [as Black students] we were included as part of the Saint Mary’s community…But we had to evolve and make the campus reflect us to a certain degree."\n\n- Herman Brown',
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
      description: "In 1971, during a game against Fresno State, BSU president Musheer and his friend Kamal Abdul-Jabbaar halted play by standing at midcourt for 30 minutes to present 11 demands, including more Black Studies courses and hiring a Black basketball coach.",
    },
    {
      type: "image",
      id: 3,
      url: bsudemands,
      alt: "11 BSU Demands",
      caption: "The letter written to SMC Administration with 11 demands from the Black Student Union.\n\n(full size available in the gallery)",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=H7IeUmJjNoo",
      caption: "Musheer talking about his activity as BSU president, and student-activist.",
    },
    {
      type: "text",
      id: 2,
      title: "The Second Walkout",
      description: "The second SMC basketball team protest was against Santa Clara on February 26, 1972. At halftime, Herman announced that he and four other SMC teammates: Roy Brown (Herman’s brother), Nate Carroll, Maurice Harper, and Alonzo Strange were boycotting the second half of the game in protest of racism at the College.",
    },
    {
      type: "image",
      id: 3,
      url: chapeloccupation,
      alt: "Chapel Occupation",
      caption: "In the aftermath of the basketball team walkout, BSU and MEChA student activists fasted and slept in the Chapel pews for several days in response to the potential elimination of Chicano Studies courses.",
    }
  ];

  const cardWidth = 760;
  const cardPadding = 32;
  const gapBetweenCards = 20;


  const scrollWidth =
    content.length * (cardWidth + cardPadding + gapBetweenCards);

  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {

    const onResize = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const extraHeight = scrollWidth - viewportWidth;
      setSectionHeight(viewportHeight + extraHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [scrollWidth]);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(
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
          style={{ x, width: scrollWidth, paddingLeft: "30px" }}
          className="flex items-center gap-20 relative"
        >
          {content.map((item, index) => {
            if (item.type === "video") {
              return (
                <div
                  key={index}
                  className="p-4 bg-secondary rounded-xl flex-shrink-0"
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
                  className="p-4 bg-secondary rounded-xl flex-shrink-0 w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] flex items-center justify-center"
                >
                  <div className="w-full h-full bg-accent rounded-xl">
                    <div className="text-center h-full flex flex-col items-center justify-center p-8">
                      <h2 className="text-lg md:text-3xl font-bold mb-4">{item.title}</h2>
                      <p className="text-sm md:text-xl whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            } else if (item.type === "image") {
              return (
                <div
                  key={index}
                  className="p-4 bg-secondary rounded-xl flex-shrink-0"
                >
                  <div className="p-4 bg-accent rounded-xl">
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] object-cover rounded-lg"
                    />
                    {item.caption && (
                      <p className="text-center text-md text-black mt-2 max-w-[80vw] sm:max-w-[700px] whitespace-pre-line break-words">
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

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="group relative h-[400px] w-[700px] overflow-hidden rounded-xl">
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
    <div className="">
      <HorizontalScrollVideo />
    </div>
  );
};

export default HorizontalScroll3;