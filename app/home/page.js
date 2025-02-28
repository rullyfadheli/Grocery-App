import BottomNav from "../components/BottomNavigation";
import HomeAddressBar from "../components/HomeAddressBar";
import HomeSearchBar from "../components/HomeSearchBar";
import HomeProductCategories from "../components/HomeProductCategories";
import HomeProductBanner from "../components/HomeProductBanner";
import HomeBestDealList from "../components/HomeBestDealList";

export default function Home() {
  return (
    <div className="min-h-screen md:justify-center md:flex bg-[#A9411D] w-full">
      <div className="font-inter w-full max-w-[1080px] bg-[#EBE5DD] p-6">
        <div className="pb-40 w-full max-w-[1080px] bg-secondary font-inter relative">
          <>
            {/* Header */}
            <HomeAddressBar />

            {/* Search Bar */}
            <HomeSearchBar />

            {/* Categories */}
            <HomeProductCategories />

            {/* Banner */}
            <HomeProductBanner />

            {/* Best Deal */}
            <HomeBestDealList />

            <BottomNav />
          </>
        </div>
      </div>
    </div>
  );
}
