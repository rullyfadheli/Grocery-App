import Image from "next/image";
function ApplyCoupon() {
  return (
    <div className="w-full h-20 flex justify-between font-inter">
      <span>
        <Image src={"/percent.png"} width={30} height={30} alt="Percent icon" />
      </span>
      <p>APPLY COUPON</p>
      <span>
        <Image
          src={"/Arrow Right.png"}
          width={13}
          height={13}
          alt="Arrow Right "
        />
      </span>
    </div>
  );
}

export default ApplyCoupon;
