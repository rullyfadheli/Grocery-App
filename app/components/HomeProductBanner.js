import Image from "next/image";

function HomeProductBanner() {
  return (
    <section className="px-6 py-4">
      <div className="flex justify-between bg-tertiary rounded-lg p-2 md:p-4 items-center gap-4 relative">
        <div className="w-content max-w-[70%]">
          <h3 className="text-lg font-semibold text-black whitespace-wrap">
            World Food Festival,
            <br className="" /> Bring the world to your Kitchen!
          </h3>
          <button className="mt-2 bg-primary text-yellowCustom px-4 py-2 rounded text-sm">
            Shop Now
          </button>
        </div>
        <Image
          src="/cta.png"
          width={40}
          height={60}
          unoptimized
          alt="World Food Festival"
          className="w-20 h-30 absolute bottom-0 md:right-4 right-0"
        />
      </div>
    </section>
  );
}

export default HomeProductBanner;
