"use client";
function InputQuantity() {
  return (
    <form className="w-20 h-7 px-2 flex justify-between items-center absolute right-2 bottom-1 outline outline-1 outline-primary rounded-xl">
      <input type="button" value={"-"} />
      <span>4</span>
      <input type="button" value={"+"} />
    </form>
  );
}

export default InputQuantity;
