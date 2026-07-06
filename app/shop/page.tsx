"use client";

import ProductCard from "@/components/home/ProductCard";
import FilterButton from "@/components/shop/FilterButton";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const shopPage = () => {
  const [sortBy, setSortBy] = useState("Featured");
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="heading mb-8 text-lg font-black! max-sm:text-center">
        Shop All Products
      </h1>
      <div className="flex justify-end items-center mb-6">
        <div className="flex">
          <FilterButton />
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 appearance-none bg-black text-white px-4 pr-8 max-sm:pr-1 border-l border-white max-sm:text-sm"
            >
              <option value="">Featured</option>
              <option value="">Price: low to high</option>
              <option value="">Price: high to low</option>
              <option value="">customer rating</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <ChevronDown className="size-4 max-sm:size-[14px]" />
            </div>
          </div>
        </div>
      </div>
      <ProductCard heading="" shop={true} />
      <ProductCard heading="" shop={true} />
    </div>
  );
};

export default shopPage;
