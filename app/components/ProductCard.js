import Image from "next/image";

const ProductCard = ({ product }) => {
  // async function addToCart(cart) {
  //   const { productId, userId, quantity } = cart;
  //   const response = await fetch("https://grocery-app.my.id/api/add-to-cart", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.parse({ productId, userId, quantity }),
  //   });
  //   const data = await response.json();
  // }

  // console.log(typeof product.price);
  return (
    <div className="relative flex flex-col w-full max-w-[100px] md:max-w-32 min-h-48 md:min-h-52 max-h-52 items-center bg-secondary rounded-md shadow p-2 font-inter">
      <div className="h-24 w-24 md:h-28 md:w-28 flex justify-center items-center rounded-md bg-primary">
        <Image
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
          quality={50}
          className="h-18 w-18"
        />
      </div>
      <h2 className="text-sm md:text-base font-bold mt-1">
        {product.name.length > 15
          ? product.name.substring(0, 14) + "..."
          : product.name}
      </h2>
      <div className="absolute bottom-2 flex justify-between items-center mt-1 w-full">
        <p className="text-sm md:text-base ml-2">${product.price}</p>
        <form>
          <input
            type="submit"
            name="add-to-cart"
            value={"Add"}
            className="bg-primary text-yellowCustom mr-2 p-1 md:px-2 md:py-1 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
