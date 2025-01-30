"use client";
import { useEffect, useState } from "react";
import CategorySidebar from "../components/CategorySidebar";
import ProductList from "../components/ProductList";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://grocery-app.my.id/api/all-products")
      .then((res) => res.json())
      .then((data) => {
        const categoryList = [...new Set(data.map((item) => item.category))];
        setCategories(categoryList);
        setProducts(data);
      });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex">
      <CategorySidebar categories={categories} onSelectCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}