import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-[#A9411D] font-inter">
      <div className="font-inter min-h-96 max-h-content w-full max-w-2xl bg-[#EBE5DD] p-6 flex-col centerElement rounded-md">
        <h1 className="text-center font-bold text-primary">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
