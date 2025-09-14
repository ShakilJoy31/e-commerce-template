// components/product/RecommendedProducts.tsx
import { sampleProducts } from "@/utils/constant/productData";
import { motion } from "framer-motion";
import ProductCard from "../ui/ProductCard";

interface RecommendedProductsProps {
    currentProductId: string;
}

export default function RecommendedProducts({ currentProductId }: RecommendedProductsProps) {
    // Filter out the current product and get 4 random products
    const recommendedProducts = sampleProducts
        .filter(product => product.id !== currentProductId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    return (
        <div className="mt-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
                You might also like
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}