import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden px-4">
      <div className="relative grid h-max w-max justify-center gap-4 rounded-md border border-purple-100/60 bg-white p-12 shadow-3xl">
        {/* accent blur */}
        <div className="absolute -left-1/4 -top-1/4 -z-10 h-[200px] w-[200px] rounded-full bg-purple-600/50 blur-3xl" />

        <div className="text-center">
          <h1 className="mb-1 text-[28px] font-extrabold text-gray-900">
            Login to your account
          </h1>
          <p className="inline-flex items-center gap-1 text-[14px] text-gray-500">
            Don't have an account?
            <Link to="/register" className="text-purple-600 hover:underline">
              Register
            </Link>
          </p>
        </div>

        <div className="grid gap-4">
          <div className="flex flex-col gap-4">
            <label className="grid gap-1">
              <span className="mb-1 text-[14px] text-gray-500">
                Email Address
              </span>
              <input
                type="email"
                placeholder="email@example.com"
                className="flex h-[42px] rounded-md border border-gray-300 p-4 text-[14px] font-semibold text-gray-900 outline-none placeholder:text-[14px] placeholder:font-normal placeholder:text-gray-500 focus:border-purple-600 focus:ring focus:ring-purple-100"
              />
            </label>

            <label className="grid gap-1">
              <span className="mb-1 text-[14px] text-gray-500">Password</span>
              <input
                type="password"
                placeholder="min. 8 characters"
                className="flex h-[42px] rounded-md border border-gray-300 p-4 text-[14px] font-semibold text-gray-900 outline-none placeholder:text-[14px] placeholder:font-normal placeholder:text-gray-500 focus:border-purple-600 focus:ring focus:ring-purple-100"
              />
            </label>
          </div>

          <Link
            to="#"
            className="justify-self-end text-[14px] font-medium text-purple-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          className="flex h-[42px] items-center justify-center rounded-md bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700"
          onClick={(e) => e.preventDefault()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
