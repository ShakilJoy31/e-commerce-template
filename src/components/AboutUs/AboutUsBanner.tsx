"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import bannerImg from "../../../public/about-us-banner.jpg";

export default function AboutBanner() {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={bannerImg}
                alt="About Orgado"
                fill
                className="object-cover brightness-50"
                priority
            />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-3xl md:text-5xl font-bold">About E-Commerce</h1>
                <p className="mt-3 text-lg md:text-xl font-light">
                    Discover amazing products at unbeatable prices. Shop the latest trends in electronics, fashion, home goods and more. Free shipping on orders over $50.
                </p>
            </motion.div>
        </section>
    );
}
