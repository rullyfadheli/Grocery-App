"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const seachParams = useSearchParams();
  const token = seachParams.get("token");
  console.log(token);

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(password);
    const response = await fetch("http://localhost:4000/api/reset-password", {
      method: "PUT", // The method is PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, token }),
    });
    const result = await response.json();
    setMessage(result.message);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Type your new password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;
