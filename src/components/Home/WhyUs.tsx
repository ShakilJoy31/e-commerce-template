"use client";

import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck, RefreshCw } from 'lucide-react';

const features = [
    {
        icon: <Truck className="w-8 h-8 text-white" />,
        title: "Free shipping on orders over $50",
    },
    {
        icon: <Clock className="w-8 h-8 text-white" />,
        title: "Available to you 24/7",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: "Extended Warranty Plans",
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-white" />,
        title: "Easy 30-Day Returns",
    }
];

export default function WhyUs() {
    return (
        <section className=" bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <div className="relative  text-white py-16 container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Us</h2>

                {/* Divider */}
                <div className="border-t border-white/30 mb-12"></div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-4 ">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.002 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 25px rgba(255,255,255,0.15)",
                            }}
                            className="flex items-start gap-4 p-6 rounded-xl transition hover:cursor-pointer"
                        >
                            <div className="flex-shrink-0">{feature.icon}</div>
                            <p className="text-sm md:text-base leading-relaxed font-medium">
                                {feature.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
}
