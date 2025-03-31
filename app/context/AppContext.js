"use client";
import { createContext, useState } from "react";

const SearchProductContext = createContext();
const SearchProductProvider = ({ children }) => {
  // State to store search request data from user to send to server
  const [searchRequestData, setSearchRequestData] = useState("");

  // State to store search result from server
  const [searchResult, setSearchResult] = useState({
    message: "Type something to search",
  });

  //------------------- Only for product-category page -------------------//

  // State to update toggle click from page product-category
  const [searchClick, setSearchClick] = useState(false);

  // State to toggle search result animation from page product-category
  const [toggleSearchResult, setToggleSearchResult] = useState(false);

  //------------------- Only for home page -------------------//
  const [toggleSearchAnimation, setToggleSearchAnimation] = useState(true);

  // store value from search result from HomeSearchBar.js that is executed in SearchResultProduct.js
  const [querySearchResult, setQuerySearchResult] = useState(null);

  const [searchHistory, setSearchHistory] = useState([]);
  return (
    <SearchProductContext.Provider
      value={{
        searchRequestData,
        setSearchRequestData,
        searchResult,
        setSearchResult,
        searchClick,
        setSearchClick,
        toggleSearchResult,
        setToggleSearchResult,
        toggleSearchAnimation,
        setToggleSearchAnimation,
        searchHistory,
        setSearchHistory,
        querySearchResult,
        setQuerySearchResult,
      }}
    >
      {children}
    </SearchProductContext.Provider>
  );
};

export { SearchProductContext };
export default SearchProductProvider;
