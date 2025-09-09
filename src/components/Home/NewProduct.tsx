import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { sampleProducts } from "@/utils/constant/productData";
import Heading from "../reusable-components/Heading";

const NewProducts: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <Heading className="text-3xl font-bold text-center mb-8">Featured Products</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            className="hover:scale-105 transition-transform"
            imageHeight="h-64"
            showCategory={true}
            showRating={true}
            showActions={true}
          />
        ))}
      </div>
    </section>
  );
};

export default NewProducts;