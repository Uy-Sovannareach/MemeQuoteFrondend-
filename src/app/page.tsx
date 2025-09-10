"use client";
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface Quote {
quote: string;
author: string;
}

export default function App() {
const [loading, setLoading] = useState(false);
const [quote, setQuote] = useState<Quote | null>(null);
const api = process.env.NEXT_PUBLIC_API_URL;

const handleGenerate = async () => {
setLoading(true);
try {
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quote`);
const data = await res.json();
if (!res.ok) throw new Error(data.error || 'Failed to load');
setQuote(data);
} catch (e: unknown) {
	console.error(e);
	setQuote(null);
	if (e instanceof Error) {
		alert(e.message);
	} else {
		alert('An unknown error occurred');
	}
} finally {
	setLoading(false);
}
};


return (
<div className="flex items-center justify-center min-h-screen p-8 bg-blue-200">
<div className="flex flex-col items-center justify-center space-y-6">
<h1 className="text-4xl font-extrabold text-gray-800 uppercase tracking-widest">MEME QUOTE</h1>
<p className="font-extrabold text-gray-800 tracking-widest">by Sovannareach Uy</p>


<div className="w-full max-w-2xl p-6 bg-white rounded-3xl shadow-lg border border-gray-300 min-h-[300px] flex flex-col justify-center items-center">
<div className="flex-grow flex items-center justify-center w-full">
<p className="text-xl text-gray-700 font-medium text-center">
{quote ? `“${quote.quote}”` : 'Your meme quote will appear here'}
</p>
</div>
<div className="w-full flex justify-center items-center">
<p className="text-xl text-gray-700 font-medium text-center">
{quote ? `by ${quote.author}` : null}
</p>
</div>
<button
onClick={handleGenerate}
disabled={loading}
className="mt-4 px-6 py-3 bg-green-300 text-green-900 rounded-full font-bold shadow-md hover:bg-green-400 disabled:opacity-60 transition-colors"
>
{loading ? 'Loading…' : 'Generate'}
</button>
</div>


<div className="flex-grow flex items-center justify-center w-full gap-6">
<ul><a href="https://www.facebook.com/sreach.sreach.7" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Facebook size={20} /><span>Facebook</span></a></ul>
<ul><a href="https://www.instagram.com/turtle__sss/" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Instagram size={20} /><span>Instagram</span></a></ul>
<ul><a href="https://x.com/SovannareachUy" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Twitter size={20} /><span>X/Twitter</span></a></ul>
</div>
</div>
</div>
);
}