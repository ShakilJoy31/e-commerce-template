"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-16 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full container bg-[#3a3749]/90 text-white rounded-lg shadow-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Exclusive Deals
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Sign up for our newsletter and enjoy unmatched discounts, early
            access to sales, and insider tips!
          </p>
        </div>

        {/* Right side - Form */}
        <form className="flex flex-col space-y-4">
          <label
            htmlFor="email"
            className="text-sm font-semibold tracking-wide"
          >
            Enter your email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            required
            className="bg-transparent border-b border-gray-400 focus:border-white transition w-full outline-none py-2 text-sm"
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="subscribe"
              className="accent-purple-500"
            />
            <label htmlFor="subscribe" className="text-sm">
              Yes, subscribe me to your newsletter.
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 6px 20px rgba(255,255,255,0.25)" }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-white hover:cursor-pointer text-black font-semibold py-2 px-6 rounded-md transition"
          >
            SUBMIT
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
