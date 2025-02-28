import Link from "next/link";
import Image from "next/image";
import { productCategoryData } from "../product-category-data";

function HomeProductCategories() {
  return (
    <section className="px-6 pt-20 pb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">Shop By Category</h2>
        <a href="#" className="text-sm text-primary font-medium">
          See All
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {productCategoryData.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Link
              href={`/product-category?category=${category.name.replace(
                "&",
                "%26"
              )}`}
            >
              <Image
                src={category.img}
                alt={category.name}
                width={40}
                height={40}
                quality={80}
                className="w-16 h-16 object-contain mb-2 cursor-pointer"
              />
            </Link>
            <p className="text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeProductCategories;
