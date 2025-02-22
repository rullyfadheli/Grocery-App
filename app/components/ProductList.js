"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const ProductList = ({ productCategory }) => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState();

  console.log(productCategory);
  useEffect(() => {
    async function fetchProductData() {
      setLoading(true);
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
        setLoading(false);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    fetchProductData();
  }, [productCategory]);

  console.log("productData", productData);
  return (
    <div className={`w-3/4 ${loading ? "" : "p-4"}`}>
      {loading && (
        <div className="bg-tertiary absolute w-content h-full flex flex-col">
          <span className="loading loading-spinner loading-lg"></span>
          {/* <p className="font-semibold text-yellowCustom">loading...</p> */}
        </div>
      )}
      <div className="gap-4 flex flex-wrap ">
        {productData ? (
          productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="hjabsolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            loading...
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductList;
