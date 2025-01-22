"use client";

import Link from "next/link";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://grocery-app.my.id/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col my-2">
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
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="flex justify-center mt-2 h-12">
          <button className="bg-primary text-secondary w-full max-w-[50%] rounded-md">
            Login
          </button>
        </span>
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

export default LoginForm;
