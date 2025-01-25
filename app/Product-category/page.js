"use client";
import { useState, useEffect } from 'react';

export default function ProductCategory() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {

    async function fetchCategories() {
      const response = await fetch(''); 
      const data = await response.json();
      setCategories(data);
      if (data.length > 0) {
        setActiveCategory(data[0].id);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      
      async function fetchProducts() {
        const response = await fetch(`/api/products?category=${activeCategory}`);
        const data = await response.json();
        setProducts(data);
      }

      fetchProducts();
    }
  }, [activeCategory]);

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-green-100 text-primary'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Product List */}
      <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-contain mb-2"
            />
            <h3 className="text-sm font-medium mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-2">{product.weight}</p>
            <div className="flex justify-between items-center w-full">
              <p className="text-lg font-bold text-primary">${product.price}</p>
              {product.oldPrice && (
                <p className="text-sm line-through text-gray-400">${product.oldPrice}</p>
              )}
            </div>
            <button className="mt-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}