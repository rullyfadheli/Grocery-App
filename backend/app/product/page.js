import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-primary"><img src="/public/Home.png" alt="Home" /></span>
          <div>
            <h1 className="text-sm font-semibold">Home</h1>
            <p className="text-xs text-gray-500">6391 Elgin St. Celina, Delaware 10299</p>
          </div>
        </div>
        <img src="/public/cart.png" alt="Cart" /> 
      </header>

      {/* Search Bar */}
      <div className="bg-white px-6 py-4 flex items-center gap-2">
        <div className="flex-grow flex items-center bg-gray-100 rounded px-4 py-2">
          <span className="text-gray-500 material-icons">search</span>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm flex-grow"
          />
        </div>
        <span className="text-primary material-icons">tune</span>
      </div>

      <section className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">Shop By Category</h2>
          <a href="#" className="text-sm text-primary font-medium">See All</a>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          { [
            { name: 'Vegetables & Fruits', img: '/public/fruit.png' },
            { name: 'Dairy & Breakfast', img: '/public/breakfast.png' },
            { name: 'Cold Drinks & Juices', img: '/public/colddrink.png' },
            { name: 'Instant & Frozen Food', img: '/public/instanfood.png' },
            { name: 'Tea & Coffee', img: '/public/teaandcoffee.png' },
            { name: 'Atta, Rice & Dal', img: '/public/attarice.png' },
            { name: 'Masala, Oil & Dry Fruits', img: '/public/masalaoil.png' },
            { name: 'Chicken, Meat & Fish', img: '/public/meatandfish.png' },
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={category.img}
                alt={category.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{category.name}</p>
            </div>
          ))}
         
        </div>
      </section>
      {/* World Food Festival */}
      <section className="px-6 py-4">
        <div className="bg-secondary rounded-lg p-4 flex items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-black">
              World Food Festival,
              <br /> Bring the world to your Kitchen!
            </h3>
            <button className="mt-2 bg-primary text-white px-4 py-2 rounded text-sm">
              Shop Now
            </button>
          </div>
          <img src="/public/cta.png" alt="World Food Festival" className="w-20 h-20 object-contain" />
        </div>
      </section>

      {/* Best Deal */}
      <section className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Best Deal</h2>
          <a href="#" className="text-sm text-primary font-medium">See All</a>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { name: 'Surf Excel Easy Wash Detergent Power', size: '500 ml', price: '$12', discount: '$14', img: '/path/to/image9.png' },
            { name: 'Fortune Arhar Dal (Toor Dal)', size: '1 kg', price: '$10', discount: '$12', img: '/path/to/image10.png' },
          ].map((deal, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img
                src={deal.img}
                alt={deal.name}
                className="w-20 h-20 object-contain mb-2"
              />
              <h3 className="text-sm font-medium text-gray-700">{deal.name}</h3>
              <p className="text-xs text-gray-500">{deal.size}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary font-bold">{deal.price}</span>
                <span className="text-xs text-gray-400 line-through">{deal.discount}</span>
              </div>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded text-sm">Add</button>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow flex justify-around py-4">
        {[
          { icon: 'home', label: 'Home', active: true },
          { icon: 'favorite_border', label: 'Favorites', active: false },
          { icon: 'lock', label: 'Cart', active: false },
          { icon: 'person_outline', label: 'Account', active: false },
        ].map((item, index) => (
          <div key={index} className={`text-center ${item.active ? 'text-primary' : 'text-gray-500'}`}>
            <span className="material-icons">{item.icon}</span>
            <p className="text-xs">{item.label}</p>
          </div>
        ))}
      </nav>
    </div>
  );
}
