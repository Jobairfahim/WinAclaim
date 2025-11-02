// File: src/pages/SignIn.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useLoginMutation } from "../redux/authApi";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [signIn, { isLoading, error }] = useLoginMutation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn(form).unwrap();
      console.log("Login success:", result);
      // Redirect after successful login
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">WinAClaim</h1>
          <p className="text-gray-700 text-sm">
            Enter your credentials to sign in
          </p>
        </div>

        {/* Sign In Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className={`w-full font-semibold py-2 rounded transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          {/* Error message */}
          {error && (
            <p className="text-red-600 text-sm mt-2">
              {error?.data?.message || "Login failed. Please try again."}
            </p>
          )}
        </form>

        {/* Sign Up Link */}
        <div className="mt-4 text-center text-gray-600 space-y-1">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue-600 hover:underline block">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
