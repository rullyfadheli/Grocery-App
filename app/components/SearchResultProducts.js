import { SearchProductContext } from "../context/AppContext";
import ProductCard from "./ProductCard";
import { useContext } from "react";
function SearchProductResult() {
  const { searchResult } = useContext(SearchProductContext);
  console.log(searchResult);
  return (
    <div className="w-3/4">
      <div className="gap-4 flex flex-wrap p-2 w-full ">
        {searchResult &&
          searchResult.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default SearchProductResult;
