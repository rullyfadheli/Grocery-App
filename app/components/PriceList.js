function PriceList() {
  return (
    <section className="font-inter flex justify-between border-y-[1px] border-gray-300">
      <div className="flex flex-col gap-1">
        <span>Item Total</span>
        <span>Discount</span>
        <span>Delivery Fee</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>$24</span>
        <span>$2</span>
        <span>Free</span>
      </div>
    </section>
  );
}

export default PriceList;
