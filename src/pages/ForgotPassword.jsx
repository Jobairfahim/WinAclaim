import { useState } from "react";
import { Link } from "react-router-dom";
import { useForgotPasswordMutation } from "../redux/authApi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [forgotPassword, { isLoading, error, isSuccess }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await forgotPassword({ email }).unwrap();
      console.log("Reset link sent:", result);
      
    } catch (err) {
      console.error("Password reset failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        
        <div className="flex flex-col items-center mb-6 text-center">
          <h1 className="text-3xl font-bold text-black-600 mb-2">
            Forgot your password?
          </h1>
          <p className="text-gray-700">
            No worries. Enter your email below and we'll send you a link to reset it securely.
          </p>
        </div>

        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
            {isLoading ? "Sending..." : "Send Verification OTP"}
          </button>

          
          {error && (
            <p className="text-red-600 text-sm mt-2">
              {error?.data?.message || "Failed to send reset link. Please try again."}
            </p>
          )}

          
          {isSuccess && (
            <p className="text-green-600 text-sm mt-2">
              Reset link has been sent to your email!
            </p>
          )}
        </form>

        
        <div className="mt-4 text-center text-gray-600 space-y-1">
          <p>Remembered your password?</p>
          <Link to="/signin" className="text-blue-600 hover:underline block">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
