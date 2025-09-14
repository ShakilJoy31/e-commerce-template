import ProductDetail from "@/components/Products/ProductDetails";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";
import { sampleProducts } from "@/utils/constant/productData";

export async function generateMetadata() {
  return generateDynamicMetadata({
    title: "Premium Online Store | Home ",
    description: "Discover amazing products at unbeatable prices. Shop the latest trends in electronics, fashion, home goods and more. Free shipping on orders over $50. Secure checkout guaranteed.",
    keywords: [
      "online shopping", "ecommerce store", "buy products online",
      "electronics", "fashion", "home decor", "premium products",
      "discounts", "free shipping", "secure checkout", "best deals",
      "shopping", "online store", "quality products", "affordable prices"
    ],
  });
}

const Home = () => {
  // For demonstration, using the first product from sample data
  const featuredProduct = sampleProducts[0];

  return (
    <div className="bg-[#F4F6F8] dark:bg-gray-900 min-h-screen">
      <ProductDetail product={featuredProduct} />
    </div>
  )
}

export default Home;