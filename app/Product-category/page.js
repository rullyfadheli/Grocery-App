"use client";
import { useSearchParams } from "next/navigation";
import { useState, useContext } from "react";
import CategorySidebar from "../components/CategorySidebar";
import ProductList from "../components/ProductList";
import TopNavigation from "../components/TopNavigation";
import SearchBar from "../components/SearchBar";
import { SearchProductContext } from "../context/AppContext";
import Image from "next/image";
import SearchProductResult from "../components/SearchResultProducts";

export default function ProductCategory() {
  // Getting state from context
  const {
    searchClick,
    setSearchClick,
    searchResult,
    setSearchResult,
    toggleSearchResult,
    setToggleSearchResult,
  } = useContext(SearchProductContext);

  // console.log(searchRequestData);
  const params = useSearchParams().get("category");
  const decoded = decodeURIComponent(params);

  // Function to show search input by clicking search icon
  function handleToggleSearch() {
    setSearchClick(!searchClick);
    setToggleSearchResult(!toggleSearchResult);
  }
  return (
    <div className="bg-primary w-full flex justify-center">
      <div className="flex flex-col bg-tertiary w-full max-w-[1080px]">
        {searchClick ? (
          <SearchBar />
        ) : (
          <TopNavigation
            onClick={handleToggleSearch}
            contentLeft={
              <Image
                src={"/Arrow Left.png"}
                width={10}
                height={10}
                alt="arrow left"
              />
            }
            title={!params ? "Products" : decoded}
            contentRight={
              <Image
                src={"/search.png"}
                width={22}
                height={22}
                alt="search icon"
              />
            }
          />
        )}
        <div className="flex">
          <CategorySidebar />
          {toggleSearchResult ? (
            <SearchProductResult />
          ) : (
            <ProductList productCategory={decoded} />
          )}
        </div>
      </div>
    </div>
  );
}
