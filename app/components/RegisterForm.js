import Button from "./Button";

function RegisterForm() {
  return (
    <form className="flex flex-col my-2">
      <input className="h-4" type="text" id="username" name="username" />

      <input type="password" id="password" name="password" />

      <button className="bg-primary max-w-[50%]">Register</button>
    </form>
  );
}

export default RegisterForm;
