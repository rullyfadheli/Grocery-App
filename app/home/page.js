import React from "react";
import Link from "next/link";
import BottomNav from "../components/BottomNavigation";
import Image from "next/image";
import Button from "../components/elements/Button";
import { productCategoryData } from "../product-category-data";

export default function Home() {
  return (
    <div className="min-h-screen md:justify-center md:flex bg-[#A9411D] w-full">
      <div className="font-inter w-full max-w-[1080px] bg-[#EBE5DD] p-6">
        <div className="pb-40 w-full max-w-[1080px] bg-secondary font-inter">
          {/* header */}
          <header className="bg-secondary py-4 px-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-primary">
                <Image
                  src={"/location.png"}
                  width={20}
                  height={20}
                  alt="Home"
                />
              </span>
              <div>
                <h1 className="text-sm font-semibold">Home</h1>
                <p className="text-xs text-gray-500">
                  6391 Elgin St. Celina, Delaware 10299
                </p>
              </div>
            </div>
            <Link href={"/shopping-cart"}>
              <Image src="/cart.png" height={20} width={20} alt="Cart" />
            </Link>
          </header>

          {/* Search Bar */}
          <div className="bg-secondary px-6 py-4 flex items-center gap-2">
            <form className="flex-grow flex items-center bg-tertiary rounded-md px-4 py-2">
              <span className="text-tertiary material-icons">
                <Image src="/search.png" width={18} height={18} alt="Search" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-tertiary px-4 outline-none text-sm md:flex-grow w-full max-w-40"
              />
            </form>
            <span className="p-2 flex justify-center items-center bg-primary rounded-md">
              <Button
                text={
                  <Image src="/filter.png" width={20} height={20} alt="Tune" />
                }
              />
            </span>
          </div>

          {/* Categories */}
          <section className="px-6 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-black">
                Shop By Category
              </h2>
              <a href="#" className="text-sm text-primary font-medium">
                See All
              </a>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {productCategoryData.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
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
                  <p className="text-sm font-medium text-gray-700">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* World Food Festival */}
          <section className="px-6 py-4">
            <div className="flex justify-between bg-tertiary rounded-lg p-2 md:p-4 items-center gap-4 relative">
              <div className="w-content max-w-[70%]">
                <h3 className="text-lg font-semibold text-black whitespace-wrap">
                  World Food Festival,
                  <br className="" /> Bring the world to your Kitchen!
                </h3>
                <button className="mt-2 bg-primary text-yellowCustom px-4 py-2 rounded text-sm">
                  Shop Now
                </button>
              </div>
              <Image
                src="/cta.png"
                width={40}
                height={60}
                unoptimized
                alt="World Food Festival"
                className="w-20 h-30 absolute bottom-0 md:right-4 right-0"
              />
            </div>
          </section>
          {/* Best Deal */}
          <section className="px-6 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Best Deal</h2>
              <a href="#" className="text-sm text-primary font-medium">
                See All
              </a>
            </div>
            <div className="flex w-content gap-4 mt-4 overflow-x-auto">
              {[
                {
                  name: "Surf Excel Easy Wash Detergent Power",
                  size: "500 ml",
                  price: "$12",
                  discount: "$14",
                  img: "/surf.png",
                },
                {
                  name: "Fortune Arhar Dal (Toor Dal)",
                  size: "1 kg",
                  price: "$10",
                  discount: "$12",
                  img: "/fortune.png",
                },
                {
                  name: "Fortune Arhar Dal (Toor Dal)",
                  size: "1 kg",
                  price: "$10",
                  discount: "$12",
                  img: "/fortune.png",
                },
              ].map((deal, index) => (
                <div
                  key={index}
                  className="bg-tertiary p-4 rounded-lg shadow flex flex-col items-center text-center md:w-60 min-w-60 w-full max-w-70"
                >
                  <Image
                    src={deal.img}
                    width={40}
                    height={40}
                    alt={deal.name}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  <h3 className="text-sm w-full max-w-[50%] font-medium text-gray-700 flex-wrap">
                    {deal.name}
                  </h3>
                  <p className="text-xs text-gray-500">{deal.size}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-primary font-bold">{deal.price}</span>
                    <span className="text-xs text-gray-400 line-through">
                      {deal.discount}
                    </span>
                  </div>
                  <button className="mt-2 bg-primary text-yellowCustom px-4 py-2 rounded text-sm">
                    Add
                  </button>
                </div>
              ))}
            </div>
          </section>

          <BottomNav />
        </div>
      </div>
    </div>
  );
}
