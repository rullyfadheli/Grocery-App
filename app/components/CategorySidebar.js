"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { SearchProductContext } from "../context/AppContext";
import { useSearchParams, useRouter } from "next/navigation";
import { productCategoryData } from "../product-category-data";

const CategorySidebar = () => {
  const { setToggleSearchResult, setSearchClick } =
    useContext(SearchProductContext);
  const data = productCategoryData;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [active, setActive] = useState();
  const router = useRouter();

  return (
    <div className="w-1/4 md:max-w-[20%] bg-secondary flex justify-center relative">
      <div className="bg-secondary py-4 h-content flex-col justify-items-center">
        {data.map((items, index) => (
          <div
            key={index}
            className="h-content w-20"
            onClick={() => {
              setActive(items.name);
              params.set("category", "");
              params.set("category", items.name);
              setToggleSearchResult(false);
              setSearchClick(false);
              router.push(`http://localhost:3000/product-category?${params}`);
            }}
          >
            <div
              className={`w-20 h-20 my-4 rounded-lg ${
                active === items.name
                  ? "bg-primary transition-colors delay-100 duration-300"
                  : "bg-tertiary"
              } flex justify-center items-center`}
            >
              <Image src={items.img} width={30} height={30} alt={items.alt} />
            </div>
            <p className="text-center">{items.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
