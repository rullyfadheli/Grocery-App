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
    <div className="w-1/4 md:max-w-[20%] bg-tertiary flex justify-center relative">
      <div className="bg-tertiary w-full flex-col justify-items-center">
        {data.map((items, index) => (
          <div
            key={index}
            className="h-content w-full"
            onClick={() => {
              setActive(items.name);
              params.delete("search");
              params.set("category", "");
              params.set("category", items.name);
              setToggleSearchResult(false);
              setSearchClick(false);
              router.push(`http://localhost:3000/product-category?${params}`);
            }}
          >
            <div className="flex justify-between w-full h-full my-2">
              <div></div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 my-4 rounded-lg ${
                    active === items.name
                      ? "bg-primary transition-colors delay-100 duration-300"
                      : "bg-tertiary"
                  } flex justify-center items-center`}
                >
                  <Image
                    src={items.img}
                    width={40}
                    height={40}
                    alt={items.alt}
                    style={{ width: "30px", height: "auto" }}
                  />
                </div>
                <p className="text-center leading-1">{items.name}</p>
              </div>
              <div
                className={`w-1 h-24 mt-3 rounded-sm ${
                  active === items.name
                    ? "bg-primary"
                    : "bg-tertiary transition-colors duration-100"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
