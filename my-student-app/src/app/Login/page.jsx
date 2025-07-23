"use client";
import { useState } from "react";
import Head from "next/head";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.email || !form.password) {
      setError("Both fields are required.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Invalid email format.");
      return;
    }

    try {
      // Simulate login logic or API call
      console.log("Login attempt:", form);
      setSuccess(true);
      setForm({ email: "", password: "" });
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Login to Your Account
          </h2>

          {error && <p className="mb-4 text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="mb-4 text-green-600 text-sm">Login successful!</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/Register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
