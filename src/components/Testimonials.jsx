import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  photo: `https://i.pravatar.cc/150?img=${i + 1}`, // placeholder image
  review: `This is a sample review from user ${i + 1}. Amazing service! Loved the experience and highly recommend!`,
}));

export default function Testimonials() {
  const cardsPerPage = 3; 
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const startIndex = page * cardsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevPage}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>

        {/* Cards Container */}
        <div className="flex overflow-hidden w-full max-w-6xl space-x-4">
          {visibleTestimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-1/3 bg-white p-6 rounded-lg shadow text-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="font-bold mb-3 text-lg">{t.name}</h3>
              <p className="text-gray-600">&quot;{t.review}&quot;</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextPage}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Page Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === page ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
