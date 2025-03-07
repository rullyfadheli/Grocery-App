"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useState } from "react";
import { SearchProductContext } from "../context/AppContext";
import CategorySidebar from "../components/CategorySidebar";
import ProductList from "../components/ProductList";
import TopNavigation from "../components/TopNavigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import SearchProductResult from "../components/SearchResultProducts";
import SearchBar from "../components/SearchBar";

export default function ProductCategory() {
  const searchParams = useSearchParams();

  // Getting state from context
  const {
    searchClick,
    setSearchClick,
    toggleSearchResult,
    setToggleSearchResult,
  } = useContext(SearchProductContext);

  // console.log(toggleSearchResult);
  //Getting params from URL to display product by category
  const params = useSearchParams().get("category");
  const decoded = decodeURIComponent(params);

  console.log(decoded);

  const searchQuery = useSearchParams().get("search");
  const [decodedSearch] = useState(decodeURIComponent(searchQuery));

  // Function to show search input by clicking the search icon
  function handleToggleSearch() {
    setSearchClick(!searchClick);
    setToggleSearchResult(!toggleSearchResult);
  }
  return (
    <div className="bg-primary w-full flex justify-center">
      <div className="flex flex-col bg-tertiary w-full max-w-[1080px]">
        {searchClick ? (
          // Search bar that could be toggled when the user click the search icon
          <SearchBar />
        ) : (
          // Navigation bar that includes search button, title, and back button
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
          {toggleSearchResult || searchParams.has("search") ? (
            //Component that shows the products from search
            <SearchProductResult searchQuery={decodedSearch} />
          ) : (
            //Component that shows products from sidebar category
            //This component receives params from url ?category=decoded
            <Suspense>
              <ProductList productCategory={decoded} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
