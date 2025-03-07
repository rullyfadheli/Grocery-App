"use client";
import Image from "next/image";
import Link from "next/link";
import RecentSearchRecommendationCard from "./RecentSearchRecommendationCard";
function RecentSearch() {
  const history = JSON.parse(localStorage.getItem("searchHistory"));

  return (
    <div className="absolute z-40 motion-preset-slide-down motion-duration-500 top-[175px] md:top-[183px] left-1/2 w-full h-content max-w-[1000px] -translate-x-1/2 -translate-y-1/2 mt-2 bg-tertiary rounded-md shadow-lg">
      <h1 className="font-bold mb-2 mt-3 mx-4 text-lg text-primary">
        Recent Search
      </h1>
      {history.length <= 1 || history === undefined || history === null ? (
        <p className="ml-4 text-yellowCustom text-lg">
          Find everything you need...
        </p>
      ) : (
        <ul className="p-2 overflow-x-auto w-full md:max-w-[60%] flex gap-2 md:mx-2">
          {history.map((historyData, index) => {
            return (
              <Link
                key={index}
                href={`/product-category?search=${historyData.history}`}
              >
                <li
                  className={`p-2 hover:bg-gray-500 bg-secondary rounded-md flex items-center`}
                >
                  {historyData.history}
                  <Image
                    src={"/Search.png"}
                    width={20}
                    height={20}
                    alt="search icon"
                    className="md:mx-1 ml-1 mr-3 h-4 w-auto"
                  />
                </li>
              </Link>
            );
          })}
        </ul>
      )}
      <p className="mx-4 text-primary bold">You might like</p>
      <div className="flex w-full my-4 gap-4 px-4 overflow-x-auto">
        {[
          {
            name: "Surf Excel Easy Wash Detergent Power",
            size: "500 ml",
            price: "$12",
            discount: "$14",
            img: "/surf.png",
          },
          {
            name: "Fortune Arhar Dal (Toor Dal)",
            size: "1 kg",
            price: "$10",
            discount: "$12",
            img: "/fortune.png",
          },
          {
            name: "Fortune Arhar Dal (Toor Dal)",
            size: "1 kg",
            price: "$10",
            discount: "$12",
            img: "/fortune.png",
          },
        ].map((deal, index) => (
          <RecentSearchRecommendationCard
            key={index}
            name={deal.name}
            image={deal.img}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentSearch;
