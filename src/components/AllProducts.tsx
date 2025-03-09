import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

interface AllProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const AllProducts: React.FC<AllProductsProps> = ({ products, onSelectProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelectProduct={() => onSelectProduct(product)} />
      ))}
    </div>
  );
};

export default AllProducts;
