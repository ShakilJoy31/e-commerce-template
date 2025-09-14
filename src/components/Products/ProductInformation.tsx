// components/product/ProductInformation.tsx
import { motion } from "framer-motion";
import { Product } from "@/types/product/productCard";
import { CheckCircle, Shield, RotateCcw } from "lucide-react";

interface ProductInformationProps {
  product: Product;
}

export default function ProductInformation({ product }: ProductInformationProps) {
  const features = [
    "Noise cancelling technology",
    "30-hour battery life",
    "Bluetooth 5.2 connectivity",
    "Voice assistant support",
    "Comfortable over-ear design",
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "2-Year Warranty",
      description: "Coverage for manufacturing defects",
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Free returns within 30 days",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="border rounded-lg p-4 dark:border-gray-700"
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Product Information
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Guarantees</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center p-3 bg-gray-50 rounded-lg dark:bg-gray-800"
              >
                <guarantee.icon className="w-5 h-5 text-blue-500 mr-2" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {guarantee.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {guarantee.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Category</h4>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/30 dark:text-blue-300">
            {product.category}
          </span>
        </div>
        
        {product.tags && product.tags.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block border rounded-full px-3 py-1 bg-gray-100 text-gray-700 hover:bg-cyan-50 hover:cursor-pointer border-cyan-500 transition-colors duration-300 text-sm dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}