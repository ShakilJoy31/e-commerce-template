"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import categoryProduct from "../../../public/category-product.jpg";
import categoryProduct2 from "../../../public/4094.jpg";
import Button from "../reusable-components/Button";

const categories = [
  { name: "Sun Skin Crem" },
  { name: "SPF Sunscreens" },
  { name: "Face Sun Protection" },
  { name: "Body Sunscreen" },
  { name: "Moisturizing Sun Cream" },
  { name: "After Sun Care" },
  { name: "Mineral Sunscreen" },
];

const livingRoomImages = [
  categoryProduct.src,
  categoryProduct2.src,
  categoryProduct2.src,
  categoryProduct2.src,
  categoryProduct2.src,
  categoryProduct2.src,
  categoryProduct2.src,
];

const products = [
  { name: "Sun Skin Crem", price: "$25", image: categoryProduct.src },
  { name: "SPF Sunscreens", price: "$30", image: categoryProduct2.src },
  { name: "Face Sun Protection", price: "$28", image: categoryProduct2.src },
  { name: "Body Sunscreen", price: "$35", image: categoryProduct2.src },
  { name: "Moisturizing Sun Cream", price: "$22", image: categoryProduct2.src },
  { name: "After Sun Care", price: "$27", image: categoryProduct2.src },
  { name: "Mineral Sunscreen", price: "$32", image: categoryProduct2.src },
];

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState("Sun Skin Crem");
  const [selectedImage, setSelectedImage] = useState(livingRoomImages[0]);

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
        Our Category
      </h2>

      {/* Scrollable Tabs */}
      <div className="relative mb-10">
        <div className="flex overflow-x-auto pb-2 hide-scrollbar md:overflow-visible">
          <div className="flex space-x-6 min-w-max md:min-w-0">
            {categories.map((cat, index) => (
              <button
                key={cat.name}
                onClick={(e) => {
                  setActiveCategory(cat.name);
                  setSelectedImage(livingRoomImages[index]);

                  // Scroll into view when partially visible
                  const button = e.currentTarget;
                  const buttonRect = button.getBoundingClientRect();

                  const fullyVisible =
                    buttonRect.left >= 0 &&
                    buttonRect.right <= window.innerWidth;

                  if (!fullyVisible) {
                    button.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }
                }}
                className={`relative flex-shrink-0 pb-1 font-semibold transition-colors text-sm md:text-base ${
                  activeCategory === cat.name
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-400"
                }`}
              >
                {cat.name}
                {activeCategory === cat.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-orange-500 rounded"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sub heading */}
      <h3 className="font-semibold text-lg mb-6">{activeCategory}</h3>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main image */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-xl shadow-lg relative"
            >
              <Image
                src={selectedImage}
                alt="Main category image"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Product info overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white px-4 py-3 flex justify-between items-center">
                <div>
                  <h4 className="text-sm md:text-lg font-semibold">
                    {activeCategory}
                  </h4>
                  <p className="text-xs md:text-sm opacity-80">$25</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors">
                    Add to Cart
                  </Button>
                  <Button className="hover:text-orange-400 transition-colors">
                    <FaHeart />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side gallery */}
        <div className="grid grid-cols-2 gap-4">
          {products.slice(1).map((product) => (
            <motion.div
              key={product.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`cursor-pointer overflow-hidden rounded-xl shadow-md relative ${
                selectedImage === product.image ? "ring-2 ring-orange-400" : ""
              }`}
              onClick={() => setSelectedImage(product.image)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              {/* Product info overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white px-2 py-2 flex justify-between items-center">
                <div>
                  <h4 className="text-xs md:text-sm font-semibold">
                    {product.name}
                  </h4>
                  <p className="text-xs opacity-80">{product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button className="bg-orange-500 hover:bg-orange-600 px-2 py-2 rounded-md text-xs font-semibold transition-colors">
                    <FaShoppingCart></FaShoppingCart>
                  </Button>

                  <Button className="hover:text-orange-400 transition-colors text-sm">
                    <FaHeart />
                  </Button>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
