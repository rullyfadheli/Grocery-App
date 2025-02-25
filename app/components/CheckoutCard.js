import Image from "next/image";
import InputQuantity from "./elements/InputQuantity";
function CheckoutCard({ src, name, price }) {
  return (
    <div className="flex font-inter relative my-4">
      <div>
        <Image
          src={"/attarice.png"}
          width={70}
          height={70}
          alt={"product"}
          className=""
        />
      </div>

      <div className="flex flex-col justify-between mx-4 w-full max-w-[30%]">
        <span className="font-semibold">Product Name</span>
        <span>Price</span>
      </div>
      <InputQuantity />
    </div>
  );
}

export default CheckoutCard;
