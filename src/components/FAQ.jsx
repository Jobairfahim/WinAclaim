import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Win A Claim?",
    answer:
      "Win A Claim is your personal AI assistant for insurance claims. Whether it’s home damage, theft, or an auto loss — we guide you through the entire process, helping you respond like a pro, prepare the right documents, and protect your payout.",
  },
  { question: "Who is Win A Claim for?", answer: "Answer goes here." },
  { question: "Does WinAClaim file the claim for me?", answer: "Answer goes here." },
  { question: "Will I be talking to a real person?", answer: "Answer goes here." },
  { question: "Is this legal to use?", answer: "Answer goes here." },
  { question: "How does the free trial work?", answer: "Answer goes here." },
  { question: "Will I be charged automatically after 3 days?", answer: "Answer goes here." },
  { question: "I already filed my claim — is WinAClaim still useful?", answer: "Answer goes here." },
  { question: "How is WinAClaim different from a lawyer or public adjuster?", answer: "Answer goes here." },
  { question: "Is WinAClaim only for Canadians?", answer: "Answer goes here." },
  { question: "Do I need to install anything?", answer: "Answer goes here." },
  { question: "Is my information safe?", answer: "Answer goes here." },
  { question: "Can I contact a real person if I need help?", answer: "Answer goes here." },
  { question: "What if my claim is already denied?", answer: "Answer goes here." },
  { question: "Can I use WinAClaim for multiple claims?", answer: "Answer goes here." },
  { question: "Does WinAClaim help with photos, receipts, and documents?", answer: "Answer goes here." },
  { question: "What kind of claims does WinAClaim support?", answer: "Answer goes here." },
  { question: "Can I use WinAClaim to deal with my adjuster’s delay or silence?", answer: "Answer goes here." },
  { question: "What happens if I miss a deadline in my claim?", answer: "Answer goes here." },
  { question: "Will WinAClaim give me legal advice?", answer: "Answer goes here." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none hover:bg-gray-100"
                onClick={() => toggle(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
