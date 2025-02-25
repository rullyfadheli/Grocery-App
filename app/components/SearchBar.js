"use client";
import Image from "next/image";
import { useContext } from "react";
import { SearchProductContext } from "../context/AppContext";
function SearchBar() {
  const {
    searchRequestData,
    setSearchRequestData,
    searchResult,
    setSearchResult,
  } = useContext(SearchProductContext);

  // Function to search product by name
  async function handleSearchResult(event) {
    event.preventDefault();
    const response = await fetch(
      "https://grocery-app.my.id/api/search-product",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: searchRequestData }),
      }
    );
    const data = await response.json();
    setSearchResult(data);
    console.log(searchResult);
  }
  return (
    <form
      onSubmit={handleSearchResult}
      className="flex justify-between items-center bg-transparent shadow text-black h-12 px-4 py-2 font-inter"
    >
      <div></div>
      <input
        placeholder="Search product"
        type="text"
        className="w-[50%] h-8 rounded-md bg-secondary px-4"
        onChange={(event) => {
          setSearchRequestData(event.target.value);
        }}
      />
      <Image src={"/search.png"} width={22} height={22} alt="search icon" />
    </form>
  );
}

export default SearchBar;
