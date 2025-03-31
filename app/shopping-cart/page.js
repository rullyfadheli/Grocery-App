"use client";

import TopNavigation from "../components/TopNavigation";
import CheckoutCard from "../components/CheckoutCard";
import ProductCard from "../components/ProductCard";
import ApplyCoupon from "../components/ApplyCoupon";
import Image from "next/image";
import PriceList from "../components/PriceList";
import { useEffect } from "react";
const data = { image: "/attarice.png", price: 5.99, name: "Rice" };
function ShoppingCart() {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("refreshToken", refreshToken);

  useEffect(() => {
    async function getAccessToken() {
      const response = await fetch("https://grocery-app.my.id/api/token", {
        method: "GET",
        headers: { authorization: refreshToken },
      });
      const data = await response.json();
      console.log(data);
    }
    getAccessToken();
  }, []);
  return (
    <div className="bg-primary w-full h-content md:h-screen flex justify-center font-inter">
      <div className="bg-secondary h-content w-full max-w-[1080px] p-6 pb-6">
        <TopNavigation
          contentLeft={
            <Image
              src={"/Arrow Left.png"}
              width={10}
              height={10}
              alt={"arrow navigation"}
            />
          }
          title={"Checkout"}
        />
        {/* Checkout List */}
        <section className="my-4">
          <CheckoutCard />
          <CheckoutCard />
        </section>

        {/* See more produts */}
        <section className="my-6">
          <p>Before you checkout</p>
          <div className="flex gap-3">
            <ProductCard product={data} />
            <ProductCard product={data} />
          </div>
        </section>

        {/* Apply coupun */}
        <ApplyCoupon />

        {/* Price List */}
        <PriceList />
      </div>
    </div>
  );
}

export default ShoppingCart;
