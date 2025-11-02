import React from 'react'


export default function HeroSection(){
return (
<section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Left column: Text */}
<div className="lg:col-span-7">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-winatext">
Filing Insurance
<br />
Claims Just Got
<br />
Smarter.
</h1>


<p className="mt-6 max-w-2xl text-gray-600 text-lg">
AI tools that help you get paid faster — from stolen cars to house fires.
</p>


<ul className="mt-8 space-y-3 max-w-xl text-gray-700">
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-md bg-green-100 text-winagreen font-bold">✓</span>
<span>Stolen car? House fire? Delayed payout?</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-md bg-purple-100 text-indigo-600 font-bold">💼</span>
<span>WinAClaim helps you file, follow up, and get paid — stress-free.</span>
</li>
</ul>


<div className="mt-10 flex items-center gap-4">
<button className="px-6 py-3 rounded-lg bg-winablue text-white font-semibold shadow">Get Started</button>
<button className="px-6 py-3 rounded-lg border border-gray-200 text-sm">Learn more</button>
</div>
</div>


{/* Right column: empty placeholder where image was */}
<div className="lg:col-span-5 hidden lg:block relative">
{/* Decorative triangle accent bottom-right */}
<div className="absolute -right-12 bottom-0 w-56 h-56 transform rotate-12" style={{background: 'linear-gradient(135deg, rgba(6,176,122,0.16), rgba(11,43,107,0.08))', borderTopLeftRadius: '8px'}} />
{/* intentionally left blank where original image would appear */}
</div>
</div>
</section>
)
}