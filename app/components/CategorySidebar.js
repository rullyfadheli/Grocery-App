"use client";
const CategorySidebar = ({ categories, onSelectCategory }) => {
    return (
      <div className="w-1/4 bg-gray-100 p-4 h-screen">
        {categories.map((category) => (
          <button key={category} onClick={() => onSelectCategory(category)} className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded">
            {category}
          </button>
        ))}
      </div>
    );
  };
  export default CategorySidebar;