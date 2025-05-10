import { useState, useEffect } from 'react';
import { GiBasketballBasket } from "react-icons/gi";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div data-aos="fade-in" className="navbar bg-base-100/60 backdrop-blur-md z-50 fixed shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-secondary hover:scale-120 duration-100 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center gap-2"> 
                        <progress 
                            className="bg-gray-300 progress progress-secondary w-32 md:w-90" 
                            value={scrollProgress} 
                            max="100"
                        ></progress>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};