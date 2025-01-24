"use client";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-sm font-semibold text-gray-800 text-center">
        {product.name}
      </h3>
      <p className="text-xs text-gray-500">{product.size}</p>
      <div className="flex items-center gap-2 my-2">
        <span className="text-primary font-bold text-sm">${product.price}</span>
        {product.oldPrice && (
          <span className="line-through text-gray-400 text-sm">
            ${product.oldPrice}
          </span>
        )}
      </div>
      <button className="bg-primary text-white text-sm px-4 py-1 rounded-md hover:bg-green-600">
        Add
      </button>
    </div>
  );
};

export default ProductCard;
