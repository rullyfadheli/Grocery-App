import Image from "next/image";
import Link from "next/link";

function RecentSearchRecommendationCard(data) {
  const { index, name, image } = data;

  return (
    <div
      key={index}
      className="bg-tertiary rounded-lg shadow flex items-center text-center md:w-60 min-w-60 w-full max-w-70"
    >
      <Image
        src={image}
        width={30}
        height={30}
        alt={name}
        style={{ width: "auto", height: "auto" }}
        className="w-10 h-10 object-contain mb-2"
      />
      <h3 className="text-sm w-full max-w-[50%] font-medium text-gray-700 flex-wrap">
        {name}
      </h3>
    </div>
  );
}

export default RecentSearchRecommendationCard;
