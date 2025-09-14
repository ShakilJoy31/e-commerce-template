// components/product/ProductGallery.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Product } from "@/types/product/productCard";
import productImage from "../../../public/product2.jpg";
import Button from "../reusable-components/Button";
import productImage2 from "../../../public/380.jpg";



interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Mock multiple images for the gallery
  const images = [
    productImage.src,
    product.imageUrl,
    productImage2.src,
    product.imageUrl,
  ];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <motion.img
          key={selectedImageIndex}
          src={images[selectedImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsZoomed(true)}
        />
        
        {/* Navigation Arrows */}
        <Button
          onClick={prevImage}
          className="absolute hover:cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          onClick={nextImage}
          className="absolute hover:cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
        
        {/* Zoom Indicator */}
        <div className="absolute bottom-2 right-2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <Button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`aspect-square overflow-hidden rounded-md border-2 ${
              selectedImageIndex === index
                ? "border-cyan-600 border-2 dark:border-blue-400"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover hover:cursor-pointer " />
          </Button>
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              src={images[selectedImageIndex]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}