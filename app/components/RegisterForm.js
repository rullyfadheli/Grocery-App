"use client";

import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
          confirmPassword,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "Register user success") {
        redirect("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div>
      <form className="flex flex-col my-2">
        <input
          className="my-2 h-12 rounded-md p-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="my-2 h-12 rounded-md p-2"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="my-2 h-12 rounded-md p-2"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="my-2 h-12 rounded-md p-2"
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="flex justify-center mt-2 h-12">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-primary text-secondary w-full max-w-[50%] rounded-md"
          >
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
