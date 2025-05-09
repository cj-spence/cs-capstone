import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

const HorizontalScroll2 = () => {
  return (
    <div className="">
        <div className="text-center items-center justify-center font-bold text-2xl translate-y-30 drop-shadow-xl bg-secondary rounded-xl w-fit mx-auto px-3 py-3">
            <div className="bg-accent rounded-xl py-3 px-3"> Experience at SMC </div>
        </div>
        <HorizontalScrollVideo />
    </div>
  );
};

const HorizontalScrollVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const content = [
    {
      type: "video",
      id: 1,
      url: "https://www.youtube.com/watch?v=sy-_mTMgZyA",
      //
      containerClasses: "",
      innerClasses: ""
    },
    {
      type: "text",
      id: 2,
      title: "Example Title",
      description: "This is some descriptive text between videos.",
      //
      containerClasses: "",
      textContainerClasses: "",
      titleClasses: "",
      descriptionClasses: ""
    },
    {
      type: "image",
      id: 3,
      url: "https://drive.google.com/file/d/11DcDDdBBS_dEtu_ttKqS8JR-NJvA72QB/view?usp=sharing",
      alt: "Random image",
      containerClasses: "",
      innerClasses: "",
      imageClasses: ""
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          style={{ x }}
          className="flex items-center gap-20 relative"
        >
          {content.map((item, index) => {
            if (item.type === "video") {
              return (
                <div 
                  key={index} 
                  className={`p-4 bg-secondary rounded-xl flex-shrink-0 ${item.containerClasses || ""}`}
                >
                  <div className={`p-4 bg-accent rounded-xl ${item.innerClasses || ""}`}>
                    <VideoPlayer url={item.url} />
                  </div>
                </div>
              );
            } else if (item.type === "text") {
              return (
                <div 
                  key={index} 
                  className={`p-4 bg-secondary rounded-xl flex-shrink-0 w-[700px] h-[400px] flex items-center justify-center ${item.containerClasses || ""}`}
                >
                  <div className={`text-center p-8 ${item.textContainerClasses || ""}`}>
                    <h2 className={`text-3xl font-bold mb-4 ${item.titleClasses || ""}`}>{item.title}</h2>
                    <p className={`text-xl ${item.descriptionClasses || ""}`}>{item.description}</p>
                  </div>
                </div>
              );
            } else if (item.type === "image") {
              return (
                <div 
                  key={index} 
                  className={`p-4 bg-secondary rounded-xl flex-shrink-0 ${item.containerClasses || ""}`}
                >
                  <div className={`p-4 bg-accent rounded-xl ${item.innerClasses || ""}`}>
                    <img 
                      src={item.url} 
                      alt={item.alt} 
                      className={`w-[700px] h-[400px] object-cover rounded-lg ${item.imageClasses || ""}`}
                    />
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
              fs: 1
            }
          }
        }}
      />
    </div>
  );
};

export default HorizontalScroll2;