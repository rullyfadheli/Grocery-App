import Link from "next/link";

function RegisterForm() {
  return (
    <div>
      {" "}
      <form className="flex flex-col my-2">
        <input
          className="my-2 h-12 rounded-md p-2"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />

        <input
          className="my-2 h-12 rounded-md p-2"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />

        <input
          className="my-2 h-12 rounded-md p-2"
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm password"
        />

        <div className="flex justify-center mt-2 h-12">
          <button className="bg-primary text-secondary w-full max-w-[50%] rounded-md">
            Register
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-2">
        <span>Already have an account?</span>
        <Link className="mx-2 font-bold text-primary" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
