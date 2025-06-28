import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgimage from '../assets/image_73.png';
import arrowIcon from '../assets/arrow_right.png';
import ellipseIcon from '../assets/ellipse.png';
import headPhone from '../assets/headphone.png';
import logo from '../assets/logo_icon.png';
import {
    containerVariants,
    fadeUp,
    springButton,
    logoVariants
} from "./Animations/variants.js";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-50px",
        threshold: 0.2
    });

    const logoContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={bgimage} alt="Background" className="w-full h-full object-cover" />
            </div>

            {/* Overlay */}
            <div className="relative inset-0 bg-black/90 z-0"></div>

            {/* Navigation */}
            <nav className="relative z-10 flex justify-between items-center px-6 py-10">

                <div className="flex items-center gap-3"> 
                    <span className="flex w-14 h-14"><img src={logo} alt="icon" /></span>
                    <div className="flex items-center bg-[#383838] px-5 py-3 rounded-full text-white space-x-4">
                        <a href="#" className="font-bold hover:text-gray-300">HOME</a>
                        <a href="#" className="font-bold hover:text-gray-300">FEATURE</a>
                        <a href="#" className="font-bold hover:text-gray-300">PRICING</a>
                        <a href="#" className="font-bold hover:text-gray-300">CASE STUDIES</a>
                        <a href="#" className="font-bold hover:text-gray-300">BLOG</a>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="bg-white font-bold text-black px-5 py-4 rounded-full flex items-center gap-2 hover:bg-gray-100">
                        <span><img src={headPhone} alt="icon" /></span>
                        <span>CONTACT US</span>
                    </button>
                    <button className="bg-[#CBC2FE] rounded-full text-black px-6 py-4 font-bold">
                        FREE TRIAL
                    </button>
                </div>
            </nav>

            {/* Main Hero Content */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-10 flex flex-col justify-center items-center px-6 text-center pt-20"
            >
                {/* NEW Badge */}
                <motion.div variants={fadeUp} className="mb-6">
                    <div className="flex items-center w-full max-w-l bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">

                        <span className="bg-white font-medium text-black w-14 h-8 rounded-full flex items-center"><p className="ml-1">NEW</p>
                            <img src={ellipseIcon} alt="Online Dot" className="w-2 h-2 items-center mb-1 mt-1 mr-8 ml-1" />                
                        </span>

                        <span className="text-white/50 text-xl flex-grow text-left ml-5">
                            Try The New Update With a 5-day Free Trial!
                        </span>
                        
                        <span className="ml-7 bg-[#CBC2FE] rounded-full w-10 h-8 justify-center"><img src={arrowIcon} alt="arrow icon" className="w-7 h-6 items-center mb-1 mt-1 mr-8 ml-2" /></span>
                    </div>
                </motion.div>

                {/* Stars */}
                <div className="absolute left-4 top-1/3">{/* star image left */}</div>
                <div className="absolute right-4 top-1/3">{/* star image right */}</div>

                {/* Big Heading */}
                <motion.h2
                    variants={fadeUp}
                    className="text-[#FFFAEB] text-4xl md:text-6xl font-extrabold leading-tight mb-6"
                >
                    SUPPORT MADE SIMPLE,
                    <br />
                    HAPPY CUSTOMERS<br />
                    GUARANTEED.
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="text-[#B2B2B2] text-xl md:text-2xl font-medium max-w-3xl mb-8"
                >
                    Smart Tools To Streamline Support<br />
                    And Ensure To Keep All Great <br /> Customers Happy.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={springButton} className="flex flex-col sm:flex-row gap-4 mb-16">
                    <button className="bg-[#CBC2FE] text-black px-8 py-3 rounded-3xl font-bold flex items-center gap-2">
                        <span>{/* icon here */}</span>
                        <span>GET STARTED FOR FREE</span>
                    </button>
                    <button className="bg-white text-black px-8 py-3 rounded-3xl font-bold flex items-center gap-2">
                        <span>{/* icon here */}</span>
                        <span>REQUEST A DEMO</span>
                    </button>
                </motion.div>

                <div className="bg-[#CBC2FE] w-full">
                    {/* Trusted by */}
                    <motion.div variants={fadeUp} className="text-black-400 font-bold mb-4">
                        Trusted By 100s Of Existing And<br />
                        <span className="inline-block border-t border-gray-500 w-16 mx-2 align-middle text-center"></span>
                        Growing Companies Around The World
                    </motion.div>

                    {/* Logos */}
                    <motion.div
                        variants={logoContainerVariants}
                        className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl"
                    >
                        {["Klarna.", "amazon pay", "AMERICAN EXPRESS", "Payoneer", "Skrill"].map((logo) => (
                            <motion.div
                                key={logo}
                                variants={logoVariants}
                                className="text-xl font-bold text-black-300"
                            >
                                {logo}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;