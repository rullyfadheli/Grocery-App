"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const ProductList = ({ productCategory }) => {
  const [productData, setProductData] = useState();

  // console.log(productCategory);
  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch(
          "https://grocery-app.my.id/api/product-by-category",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              category: `${productCategory.replace("&", "and")}`,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    fetchProductData();
  }, [productCategory]);

  return (
    <div className={`w-3/4 p-4`}>
      <div className="gap-4 flex flex-wrap ">
        {productData &&
          productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default ProductList;
