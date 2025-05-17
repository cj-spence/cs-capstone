import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdHome } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { BiSolidInfoSquare } from "react-icons/bi";
import { motion } from 'framer-motion';

const DesktopNavbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrollProgress(0);
    }
  }, [location.pathname]);
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/gallery":
        return "Gallery";
      case "/about":
        return "About";
      case "/gallery/interviews":
        return "Full Length Interviews";
      case "/gallery/saintmarys":
        return "Saint Mary's in the '70s";
      case "/gallery/activism":
        return "Student Activism";
      default:
        return "";
    }
  };

  return (
    <div className="navbar bg-base-100/60 backdrop-blur-md z-50 fixed top-0 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle btn-secondary hover:scale-120 duration-100 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                    to="/"
                    onClick={() => {
                        if (location.pathname === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    >
                    Home
                </Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex flex-col items-center">
          {location.pathname === "/" ? (
            <div className="flex items-center justify-center gap-2">
              <progress
                className="bg-gray-300 progress progress-secondary w-32 md:w-90"
                value={scrollProgress}
                max="100"
              ></progress>
            </div>
          ) : (
            <div className="text-xl font-semibold">{getPageTitle()}</div>
          )}
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

const MobileDock = () => {
  const location = useLocation();
  
  return (
    <div className="dock dock-md fixed z-50 bottom-0 left-0 w-full flex justify-around bg-base-100/60 backdrop-blur-md shadow-t p-2">
      <motion.div
        whileTap={{ 
          scale: 0.85
        }}
      >
        <Link
          to="/gallery"
          className="flex flex-col items-center"
        >
          <RiGalleryFill className="w-6 h-6 text-black mb-1" />
          <span className="text-xs font-semibold text-center">Gallery</span>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ 
          scale: 0.85
        }}
      >
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex flex-col items-center"
        >
          <MdHome className="w-7 h-7 text-black mb-1" />
          <span className="text-xs font-semibold text-center">Home</span>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ 
          scale: 0.85
        }}
      >
        <Link
          to="/about"
          className="flex flex-col items-center"
        >
          <BiSolidInfoSquare className="w-6 h-6 text-black mb-1" />
          <span className="text-xs font-semibold text-center">About</span>
        </Link>
      </motion.div>
    </div>
  );
};


export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return isMobile ? <MobileDock /> : <DesktopNavbar />;
};
