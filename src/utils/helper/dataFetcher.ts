import { Product } from "@/types/product/productCardTypes";

// utils/dataHelpers.ts
export async function getProductsData() {
  try {
    // In production
    const response = await fetch(`${'https://e-commerce-template-olive-seven.vercel.app'}/products.json`);
    
    // For development only - if you want to use absolute path
    // const response = await fetch('http://localhost:3000/products.json');
    
    if (!response.ok) {
      throw new Error('Failed to fetch products data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to empty array
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  const products = await getProductsData();
  return products.find((product: Product) => product.slug === slug);
}



// utils/helper/dataFetcher.ts
export async function getRecommendedProducts(currentProductId: string, count: number = 4) {
  const products = await getProductsData();
  
  // Filter out the current product and get random products
  return products
    .filter((product: Product) => product.id !== currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}