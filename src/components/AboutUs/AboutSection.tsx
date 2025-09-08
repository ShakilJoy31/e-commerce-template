"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import img1 from "../../../public/about-img-3.webp";
import img2 from "../../../public/about-img-4.webp";
import img3 from "../../../public/about-img-5.webp";
import ceoImg from "../../../public/about-author.webp";
import authorSign from "../../../public/author-signature.webp";

export default function AboutSection() {
    return (
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Images */}
                <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="col-span-2">
                        <Image
                            src={img1}
                            alt="Farmers"
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <Image
                        src={img2}
                        alt="Strawberry Basket"
                        className="rounded-lg object-cover flex justify-end cols-span-2"
                    />
                    <Image
                        src={img2}
                        alt="Strawberry Basket"
                        className="rounded-lg object-cover flex justify-end cols-span-2"
                    />
                    

                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="text-green-700 font-medium uppercase tracking-wide">
                        About Us
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-snug">
                        We believe in pure and organic quality
                    </h2>

                    <div className="flex flex-col md:flex-row md:items-start gap-6 mt-6">
                        <Image
                            src={img3}
                            alt="Fresh Vegetables"
                            className="rounded-lg object-cover w-full md:w-auto "
                        />
                        <div>
                            <p className="mt-4 text-gray-700 leading-relaxed dark:text-gray-300 ">
                                We had reached a great height in the atmosphere, for the sky was a
                                dead black, and the stars had ceased to twinkle. By the same
                                illusion which lifts the horizon of the sea to the level. Always be
                                able to find the phone that you are looking for in our offer, have
                                made us stand out in the market, but they are simply symptoms of our
                                dedication to what we are doing and our desire to constantly.
                            </p>

                            {/* CEO Section */}
                            <div className="mt-6 flex items-center gap-4">
                                <Image
                                    src={ceoImg}
                                    alt="CEO"
                                    width={60}
                                    height={60}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-lg">Noyaviram</h4>
                                    <p className="text-sm text-gray-500">Founder & CEO, Orgado</p>
                                     <Image
                                    src={authorSign}
                                    alt="CEO"
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
