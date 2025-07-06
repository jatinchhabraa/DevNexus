import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context.jsx";
import axios from "../config/axios.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    axios
      .post("/users/register", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        navigate("/");
      })
      .catch((err) => {
        setError(
          err.response?.data?.message ||
            "Registration failed. Please try again."
        );
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-3xl shadow-xl w-full max-w-2xl border border-gray-700/30 !p-24">
        {/* Header */}
        <div className="text-center !mb-16">
          <h2 className="text-5xl font-bold text-white !mb-4">
            Create Account
          </h2>
          <p className="text-gray-400 text-xl">Start your journey today</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm !mb-6">
            {error}
          </div>
        )}

        <form onSubmit={submitHandler} className="!space-y-8">
          {/* Email */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-gray-300 mb-3 font-medium text-xl"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
              className="w-full p-6 rounded-2xl bg-gray-700/40 text-white border border-gray-600/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 text-xl"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="group">
            <label
              htmlFor="password"
              className="block text-gray-300 mb-3 font-medium text-xl"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
              className="w-full p-6 rounded-2xl bg-gray-700/40 text-white border border-gray-600/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 text-xl"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none !mt-12"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white mr-3"></div>
                Registering...
              </div>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Link to login */}
        <div className="text-center !mt-12">
          <p className="text-gray-400 text-xl">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-colors duration-200"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
//update code
