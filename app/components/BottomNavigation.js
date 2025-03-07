import Image from "next/image";
import Link from "next/link";

export default function BottomNav() {
  const navItems = [
    { icon: "/Home.png", label: "Home", href: "/home" },
    { icon: "/Favorit.png", label: "Favorites", href: "/favorite" },
    { icon: "/cart.png", label: "Cart", href: "/shopping-cart" },
    { icon: "/Acount.png", label: "Account", href: "/account" },
  ];

  return (
    <nav className="text-primary font-inter fixed bottom-0 left-0 w-full bg-tertiary shadow flex justify-around py-4">
      {navItems.map((item, index) => (
        <div key={index} className={`text-center flex flex-col items-center`}>
          <Link href={item.href}>
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className={`mb-1`}
            />
          </Link>
          <p className="text-xs">{item.label}</p>
        </div>
      ))}
    </nav>
  );
}
