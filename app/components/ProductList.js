"use client";
import ProductCard from "../components/ProductCard";
const ProductList = ({ products }) => {
  return (
    <div className="w-3/4 grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
