import TopNavigation from "../components/TopNavigation";
import CheckoutCard from "../components/CheckoutCard";
import ProductCard from "../components/ProductCard";
import ApplyCoupon from "../components/ApplyCoupon";
import Image from "next/image";
const data = { image: "/attarice.png", price: 5.99, name: "Rice" };
function ShoppingCart() {
  return (
    <div className="bg-primary w-full h-screen flex justify-center font-inter">
      <div className="bg-secondary h-screen w-full max-w-[1080px] p-6">
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
      </div>
    </div>
  );
}

export default ShoppingCart;
