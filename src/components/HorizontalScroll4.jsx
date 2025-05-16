import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { ScrollDown } from "./ScrollDown";

const HorizontalScrollVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const content = [
    {
      type: "text",
      id: 2,
      title: "Legacy and Ongoing Advocacy",
      description: "Herman and Musheer were key leaders of the student-led movement here at SMC, which led to the creation of a number of academic programs and services including on our campus that include: ",
    },
    {
      type: "text",
      id: 2,
      title: "",
      caption: "The Intercultural Center (formerly, the Third World Cultural Center)\n\nThe High Potential Program\n\nThe Tutorial & Academic Skills Center (formerly, the Office of Tutorial Services Program)\n\nThe Center for Writing Across the Curriculum (previously, Better Writing courses)\n\nThe Student Success Office (formerly, the Office of Advising Services).",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=CjEwONEXx-Q",
    },
    {
      type: "text",
      id: 2,
      title: "Who is Mary Pleasant?",
      caption: "Mary Ellen Pleasant was born enslaved in Georgia in 1814. She gained her freedom and moved north, where she worked on the Underground Railroad. In the 1850s, she moved to San Francisco during the Gold Rush and built a fortune through businesses and real estate. ",
    },
    {
      type: "image",
      id: 3,
      url: "src/assets/marypleasant.jpg",
      alt: "Mary Ellen Pleasant",
      caption: "Mary Pleasant was California’s first Black millionaire, a key figure in the California Civil Rights movement, and an early donor to SMC.",
    },
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=iy6T0nqaNNg",
    },
    {
      type: "text",
      id: 2,
      title: "Why is she not remembered at SMC?",
      description: "She secretly funded abolitionist causes, including John Brown’s raid, and later helped desegregate San Francisco’s streetcars. She made donations to support the founding of Saint Mary’s College of California.",
    },
    {
      type: "image",
      id: 3,
      url: "src/assets/marypleasant2.jpg",
      alt: "Mary Ellen Pleasant 2",
      caption: "Pleasant, a light-skinned Black woman often passed as white to avoid recapture back into slavery.",
    },
    {
      type: "text",
      id: 2,
      title: "Why isn't she recognized?",
      description: "She secretly funded abolitionist causes, including John Brown’s raid, and later helped desegregate San Francisco’s streetcars. She made donations to support the founding of Saint Mary’s College of California."
    },
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
                      <p className="text-xs md:text-lg mb-2 whitespace-pre-line">{item.caption}</p>
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
                      className="w-[80vw] sm:w-[700px] h-[40vh] sm:h-[400px] object-cover object-top rounded-lg"
                    />
                    {item.caption && (
                      <p className="text-center text-md text-black mt-2 max-w-[80vw] sm:max-w-[700px] break-words">
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

const HorizontalScroll4 = () => {
  return (
    <div className="">
      <HorizontalScrollVideo />
    </div>
  );
};

export default HorizontalScroll4;