import Link from "next/link";

function RegisterOrLoginHeader() {
  return (
    <div
      className="flex justify-between w-full shadow my-2 p-2 rounded-md font-inter text-yellowCustom
    "
    >
      <div className="flex items-center">
        <span className="font-rubik text-primary text-4xl">FR</span>
        <span className="font-bold text-xs md:text-base ml-1">
          Grocery Store
        </span>
      </div>
      <div className="flex items-center">
        <Link
          href="/register"
          className="mx-1 md:mx-2 bg-primary p-1 md:p-2 rounded-md"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="mx-1 md:mx-2 bg-primary p-1 md:p-2 rounded-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default RegisterOrLoginHeader;
