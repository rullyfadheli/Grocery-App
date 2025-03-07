"use client";
import Image from "next/image";
import Button from "./elements/Button";
import { useState, useContext } from "react";
import { SearchProductContext } from "../context/AppContext";
import dynamic from "next/dynamic";

// Components with lazy loading
const RecentSearch = dynamic(() => import("../components/RecentSearch"));
function HomeSearchBar() {
  const { setToggleSearchResult } = useContext(SearchProductContext);

  // State to toggle Recent Search feature
  const [isOpen, setIsOpen] = useState(false);

  // State to update searchRequestData
  const [inputValue, setInputValue] = useState("");

  // Function to handle submit search
  async function handleSubmit(event) {
    event.preventDefault();
    if (inputValue === "" || inputValue === null || inputValue === undefined) {
      return;
    }

    // Checking if searchHistory exists in the localStorage
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];

    if (history.length === 5) {
      history.splice(0, 1);
    }

    // Updating searchHistory in the localStorage with inputValue from user
    const updatedHistory = [...history, { history: inputValue }];
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));

    // Updating state to product-category page so the search result from Home page could be rendered
    setToggleSearchResult(true);

    // Redirecting to product-category page and sending the query params
    // that would be processed at SearchResultProduct.js
    window.location.href = `/product-category?search=${inputValue}`;
  }

  return (
    <div className="relative font-inter">
      <div
        className="bg-secondary px-6 py-4 flex items-center gap-2 absolute w-full"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <form
          onSubmit={handleSubmit}
          className="flex-grow flex items-center bg-tertiary rounded-md px-4 py-2"
        >
          <span className="text-tertiary material-icons">
            <Image src="/search.png" width={18} height={18} alt="Search" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-tertiary px-4 outline-none text-sm md:flex-grow w-full"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <span className="p-2 flex justify-center items-center bg-primary rounded-md">
            <Button
              text={
                <Image
                  src="/Search.png"
                  width={20}
                  height={20}
                  alt="Tune"
                  type={"submit"}
                />
              }
            />
          </span>
        </form>
      </div>

      {isOpen && <RecentSearch />}
    </div>
  );
}

export default HomeSearchBar;
