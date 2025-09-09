"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { sampleProducts } from "@/utils/constant/productData";

import SidebarFilters from "./SidebarFilters";
import FilterDrawer from "./FilterDrawer";
import SearchAndSort from "./SearchAndSort";
import ProductGrid from "./ProductGrid";
import Button from "../reusable-components/Button";
import Paragraph from "../reusable-components/Paragraph";

export default function ProductListing() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["View All"]);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("New Arrival");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // Filtering logic
    const filteredProducts = sampleProducts.filter((p) => {
        const matchesCategory =
            selectedCategories.includes("View All") || selectedCategories.includes(p.category);

        const matchesRating = selectedRating ? p.rating >= selectedRating : true;

        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];

        return matchesCategory && matchesRating && matchesSearch && matchesPrice;
    });

    // Sorting logic
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        if (sortBy === "Top Rated") return b.rating - a.rating;
        return 0;
    });

    return (
        <div className="flex flex-col lg:flex-row gap-4 mt-16 py-16 container mx-auto px-4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
                <Button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="flex items-center gap-2 border border-cyan-500 rounded px-4 py-2 text-sm font-medium"
                >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                </Button>
            </div>

            {/* Mobile Sidebar Drawer */}
            <FilterDrawer
                isOpen={mobileFiltersOpen}
                onClose={() => setMobileFiltersOpen(false)}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block border-r pr-4 border-cyan-500">
                <SidebarFilters
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                <SearchAndSort
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />

                <ProductGrid products={sortedProducts} />

                {sortedProducts.length === 0 && (
                    <Paragraph className="text-center py-12 text-gray-700 dark:text-gray-300 ">
                        No products found matching your filters.
                    </Paragraph>
                )}
            </div>
        </div>
    );
}
