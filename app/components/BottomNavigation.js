import Image from 'next/image';

export default function BottomNav() {
  const navItems = [
    { icon: '/Home.png', label: 'Home', active: true },
    { icon: '/Favorit.png', label: 'Favorites', active: false },
    { icon: '/cart.png', label: 'Cart', active: false },
    { icon: '/Acount.png', label: 'Account', active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow flex justify-around py-4">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`text-center flex flex-col items-center ${item.active ? 'text-primary' : 'text-gray-500'}`}
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={24} // Sesuaikan ukuran ikon
            height={24}
            unoptimized // Gunakan ini agar gambar dari `public/` tidak dioptimasi oleh Next.js
            className={`mb-1 ${item.active ? 'opacity-100' : 'opacity-50'}`} // Efek transparan jika tidak aktif
          />
          <p className="text-xs">{item.label}</p>
        </div>
      ))}
    </nav>
  );
}
