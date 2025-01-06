import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div className="h-screen md:justify-center md:flex bg-[#A9411D] w-full ">
      <div className="h-full font-inter w-full max-w-3xl bg-[#EBE5DD] p-6 flex-col centerElement">
        <h1 className="text-center">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
