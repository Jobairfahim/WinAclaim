import { FaLinkedin, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Side: Logo + Socials */}
        <div className="lg:w-1/2 space-y-4">
          {/* Logo */}
          <div className="text-2xl font-bold">Win A Claim</div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
            <a href="#" aria-label="Email" className="hover:text-blue-500">
              <FaEnvelope size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="lg:w-1/2 flex flex-col sm:flex-row justify-between gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">How it Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-2">Legal Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-400">Terms of Use</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Create Account / Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optional: Bottom Text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Win A Claim. All rights reserved.
      </div>
    </footer>
  );
}
