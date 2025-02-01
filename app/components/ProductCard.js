"use client";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <img src={product.image} alt={product.name} className="w-full h-24 object-contain" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.weight}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        <button className="bg-orange-600 text-white px-4 py-1 rounded">Add</button>
      </div>
    </div>
  );
};

export default ProductCard;