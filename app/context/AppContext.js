"use client";
import { createContext, useState } from "react";

const SearchProductContext = createContext();
const SearchProductProvider = ({ children }) => {
  const [searchRequestData, setSearchRequestData] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [searchClick, setSearchClick] = useState(false);
  const [toggleSearchResult, setToggleSearchResult] = useState(false);

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
      }}
    >
      {children}
    </SearchProductContext.Provider>
  );
};

export { SearchProductContext };
export default SearchProductProvider;
