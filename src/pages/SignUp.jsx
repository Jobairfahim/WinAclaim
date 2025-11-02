import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../redux/authApi";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    agree: false,
  });

  const navigate = useNavigate();
  const [signUp, { isLoading, error }] = useSignUpMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signUp(form).unwrap();
      console.log("Signup success:", result);
      navigate("/signin"); 
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        
        <div className="flex flex-col items-center mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">WinAClaim</h1>
          <p className="text-gray-700 text-sm">Create your account</p>
        </div>

        
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          
          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="mail@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          
          <div>
            <label className="block mb-1 font-medium">Address*</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Your address"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          
          <div>
            <label className="block mb-1 font-medium">Phone Number (Optional)</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          
          <div className="relative">
            <label className="block mb-1 font-medium">Password*</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Min. 8 characters"
              className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-gray-700 text-sm">
              I agree to Win A Claim{" "}
              <Link to="/terms" className="text-green-600 hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-green-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          
          <button
            type="submit"
            className={`w-full font-semibold py-2 rounded transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>

          
          {error && (
            <p className="text-red-600 text-sm mt-2">
              {error?.data?.message || "Signup failed. Please try again."}
            </p>
          )}
        </form>

        
        <div className="mt-4 text-center text-gray-600 space-y-1">
          <p>Already have an account?</p>
          <Link to="/signin" className="text-blue-600 hover:underline block">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
