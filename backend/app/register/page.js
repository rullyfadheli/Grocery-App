import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#A9411D] w-full ">
      <div className="font-inter min-h-96 max-h-content w-full max-w-2xl bg-[#EBE5DD] p-6 flex-col centerElement rounded-md">
        <h1 className="text-center font-bold text-primary">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
