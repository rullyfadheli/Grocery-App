import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#A9411D] w-full ">
      <div className="font-inter h-96 w-full max-w-2xl bg-[#EBE5DD] p-6 flex-col centerElement rounded-md">
        <h1 className="text-center">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
