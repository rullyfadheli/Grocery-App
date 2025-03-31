"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { SearchProductContext } from "../context/AppContext";
import Link from "next/link";
function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);

  // State to receive value from input to send as a request value to server
  const [inputValue, setInputValue] = useState("");

  // State to send fetched data from server to SearchResultProduct.js component
  const { setSearchRequestData, setSearchResult, setQuerySearchResult } =
    useContext(SearchProductContext);

  function handleSearchResult(event) {
    event.preventDefault();
    async function getSearchResult() {
      setIsLoading(true);
      setSearchRequestData(inputValue);
      try {
        const response = await fetch(
          "https://grocery-app.my.id/api/search-product",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: inputValue }),
          }
        );
        const data = await response.json();
        //update querySearchResult to null
        setQuerySearchResult(null);

        // store searchResult data
        setSearchResult(data);
        console.log(data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (inputValue) {
      getSearchResult();
    }
  }

  return (
    <form
      onSubmit={handleSearchResult}
      className="flex justify-between items-center bg-transparent text-primary h-12 px-4 py-2 font-inter"
    >
      <Link href={"/"}>
        <Image
          src={"/Arrow Left.png"}
          width={10}
          height={10}
          alt="Arrow left icon"
        />
      </Link>
      <div></div>
      <input
        placeholder="Search product"
        type="text"
        className="w-[50%] h-8 rounded-md bg-secondary px-4"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value); // Update local state only
        }}
      />
      <button type="submit">
        <Image src={"/search.png"} width={22} height={22} alt="search icon" />
      </button>
    </form>
  );
}

export default SearchBar;
