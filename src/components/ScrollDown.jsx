import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

export const ScrollDown = () => {
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
    >
      <div className="animate-bounce text-4xl text-black md:text-4xl lg:text-5xl">
        <FaChevronDown />
      </div>
    </motion.div>
  );
};
