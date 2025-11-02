import React from "react";

const features = [
  {
    title: "AI Email Response Generator",
    desc: "Get smart, personalized responses to insurer emails — in your tone, with legal strategy built in.",
    color: "bg-purple-500",
  },
  {
    title: "Letter Generator",
    desc: "Auto-generate powerful formal letters to push back on denials, delays, and bad-faith behavior.",
    color: "bg-blue-500",
  },
  {
    title: "Policy Analyzer",
    desc: "Upload your insurance policy and let our AI extract key coverages, exclusions, and limitations.",
    color: "bg-orange-500",
  },
  {
    title: "Proof of Loss Formatter",
    desc: "We guide you through filling out your Proof of Loss (POL) — a critical step in getting paid.",
    color: "bg-purple-400",
  },
  {
    title: "EUO Toolkit",
    desc: "Get prepared for Examination Under Oath with practice Q&As, guidance, and red flag warnings.",
    color: "bg-pink-500",
  },
];

export default function Features() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6 lg:px-20 relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Smart Claim Tools
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          AI tools built by insurance claim experts — to help you fight back smarter, faster.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left column: list of tools */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${f.color} rounded-xl flex-shrink-0`}></div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: placeholder for image */}
          <div className="hidden md:flex justify-center">
            <div className="w-[350px] h-[420px] rounded-3xl bg-gradient-to-br from-blue-100 to-green-100 border border-blue-200 shadow-lg flex items-center justify-center text-gray-400">
              <span className="text-sm">[Image Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
