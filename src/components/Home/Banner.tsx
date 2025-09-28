"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import backgroundImage from "../../../public/home-banner4.jpg";

const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function HomeBanner() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl md:text-5xl font-bold text-white leading-snug"
                >
                    Elevate Your Online Store with Modern E-Commerce Solutions
                </motion.h1>

                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-white/90 mt-6 max-w-4xl mx-auto text-base md:text-lg leading-relaxed"
                >
                    Discover a powerful e-commerce platform built with cutting-edge technology
                    that delivers exceptional shopping experiences. Our solution offers seamless
                    performance, intuitive navigation, and mobile-optimized design to help you
                    convert visitors into loyal customers and drive business growth.
                </motion.p>

                <motion.button
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.9, duration: 1.8, ease: "easeOut" }}
                    className="mt-8 px-6 py-3 bg-white text-gray-900 font-medium rounded-md shadow 
         relative overflow-hidden transition-all duration-500 group hover:cursor-pointer"
                >
                    <span className="absolute inset-0 bg-gray-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
                    <span className="relative z-10 group-hover:text-white">EXPLORE DEMOS ↓</span>
                </motion.button>
            </div>
            
        </section>
    );
}
