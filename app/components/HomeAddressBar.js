import Image from "next/image";
import Link from "next/link";
function HomeAddressBar() {
  return (
    <header className="bg-secondary py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-primary">
          <Image
            src={"/location.png"}
            width={20}
            height={20}
            alt="location icon"
          />
        </span>
        <div>
          <h1 className="text-sm font-semibold">Home</h1>
          <p className="text-xs text-gray-500">
            6391 Elgin St. Celina, Delaware 10299
          </p>
        </div>
      </div>
      <Link href={"/shopping-cart"}>
        <Image src="/cart.png" height={20} width={20} alt="Cart" />
      </Link>
    </header>
  );
}

export default HomeAddressBar;
