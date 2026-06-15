import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-xl">
      <div className="flex items-center gap-2 font-bold text-xl text-emerald-600">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-serif italic text-lg">
          S
        </div>
        <span>StartupFlora</span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <a href="#home" className="hover:text-emerald-600 transition">Home</a>
        <a href="#suchna" className="hover:text-emerald-600 transition">Business Suchna</a>
        <a href="#services" className="hover:text-emerald-600 transition">Services</a>
        <a href="#stories" className="hover:text-emerald-600 transition">Success Stories</a>
      </nav>
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition shadow-md">
        Contact Us
      </button>
    </header>
  );
}