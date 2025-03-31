"use client";
import { SearchProductContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoadingAnimation from "./LoadingAnimation";
import NotFoundMessage from "./elements/NotFoundMessage";

function SearchProductResult({ searchQuery }) {
  // State to store fetched data from SearchBar.js at page product-category
  const {
    searchResult,
    setSearchResult,
    querySearchResult,
    setQuerySearchResult,
  } = useContext(SearchProductContext);
  console.log("searchQuery:", searchQuery);

  console.log(querySearchResult);
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Function to get search query from home search bar
  // and fetch the data from server and set the searchResult state
  useEffect(() => {
    console.log();

    // Run the function if searchQuery is not null
    if (searchQuery && searchQuery !== "") {
      async function searchProductByName() {
        try {
          setLoading(true); // Set loading to true while fetching
          const response = await fetch(
            "https://grocery-app.my.id/api/search-product",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: searchQuery }),
            }
          );
          const data = await response.json();
          setQuerySearchResult(data);
          setSearchResult({ message: "Type something to search" });
          setLoading(false); // Set loading to false when fetching is complete
        } catch (error) {
          console.log(error);
          setLoading(false); // Set loading to false on error
        }
      }

      searchProductByName();
    } else {
      console.log("searchQuery is null or empty, skipping fetch");
    }

    return () => {
      // Cleanup
    };
  }, [searchQuery]);

  return (
    <div className="w-3/4 font-inter">
      {/* Show loading animation when loading */}
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <LoadingAnimation />
        </div>
      ) : (
        // Display products or message after loading
        <>
          {searchResult && !Array.isArray(querySearchResult) ? (
            <div
              className={`gap-4 flex-wrap p-2 w-full ${
                searchResult ? "flex " : "hidden"
              }`}
            >
              {Array.isArray(searchResult) ? (
                searchResult.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <NotFoundMessage data={searchResult?.message} />
              )}
            </div>
          ) : querySearchResult && !Array.isArray(searchResult) ? (
            <div
              className={`gap-4 flex-wrap p-2 w-full ${
                querySearchResult ? "flex " : "hidden"
              }`}
            >
              {querySearchResult.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <NotFoundMessage data={querySearchResult?.message} />
          )}
        </>
      )}
    </div>
  );
}

export default SearchProductResult;
