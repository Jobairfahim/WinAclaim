export default function ContactUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Left Side Text */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Need Help With Your Claim?
          </h2>
          <p className="text-gray-700 mb-4">
            Our team is here to help you understand WinAClaim, explore features, or troubleshoot your account – completely free.
          </p>
          <p className="text-gray-700 font-semibold">
            100% free support – no pressure, ever.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow">
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Tell us about yourself"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
