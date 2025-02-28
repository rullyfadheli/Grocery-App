"use client";
import Image from "next/image";
import Button from "./elements/Button";
import { useState } from "react";
function HomeSearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-secondary px-6 py-4 flex items-center gap-2 absolute w-full"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <form className="flex-grow flex items-center bg-tertiary rounded-md px-4 py-2">
          <span className="text-tertiary material-icons">
            <Image src="/search.png" width={18} height={18} alt="Search" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-tertiary px-4 outline-none text-sm md:flex-grow w-full"
            onClick={() => setIsOpen(!isOpen)}
          />
        </form>
        <span className="p-2 flex justify-center items-center bg-primary rounded-md">
          <Button
            text={<Image src="/filter.png" width={20} height={20} alt="Tune" />}
          />
        </span>
      </div>

      {isOpen && (
        <div className="absolute motion-preset-slide-down motion-duration-500 top-20 left-1/2 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 mt-2 bg-tertiary rounded-md shadow-lg">
          <h3 className="font-bold mx-2">Recent Search</h3>
          <ul className="py-2 w-full max-w-[40%] flex">
            <li className="px-2 hover:bg-gray-100 cursor-pointer">
              Search Result 1
            </li>
            <li className="px-2 hover:bg-gray-100 cursor-pointer">
              Search Result 2
            </li>
            <li className="px-2 hover:bg-gray-100 cursor-pointer">
              Search Result 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomeSearchBar;
