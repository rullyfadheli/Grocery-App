import Image from "next/image";

function HomeBestDealList() {
  return (
    <section className="px-6 py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Best Deal</h2>
        <a href="#" className="text-sm text-primary font-medium">
          See All
        </a>
      </div>
      <div className="flex w-content gap-4 mt-4 overflow-x-auto">
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
          <div
            key={index}
            className="bg-tertiary p-4 rounded-lg shadow flex flex-col items-center text-center md:w-60 min-w-60 w-full max-w-70"
          >
            <Image
              src={deal.img}
              width={40}
              height={40}
              alt={deal.name}
              className="w-20 h-20 object-contain mb-2"
            />
            <h3 className="text-sm w-full max-w-[50%] font-medium text-gray-700 flex-wrap">
              {deal.name}
            </h3>
            <p className="text-xs text-gray-500">{deal.size}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-primary font-bold">{deal.price}</span>
              <span className="text-xs text-gray-400 line-through">
                {deal.discount}
              </span>
            </div>
            <button className="mt-2 bg-primary text-yellowCustom px-4 py-2 rounded text-sm">
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeBestDealList;
