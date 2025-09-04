"use client";

import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { sampleProducts } from "@/utils/constant/productData";
import { Product } from "@/types/product/productCard";

const NewProducts: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
    // Add your cart logic here
  };

  const handleQuickView = (product: Product) => {
    console.log("Quick view:", product);
    // Add your quick view logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
            onQuickView={handleQuickView}
            className="hover:scale-105 transition-transform"
            imageHeight="h-64"
            showCategory={true}
            showRating={true}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;