import React from 'react';
import { Camera, ShieldCheck, Award, Briefcase, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
      <div className="text-center mb-6">
        <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          India's Trusted Platform
        </span>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-center mt-8">
        <div className="md:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            आपके Business का <br />
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              100% Trusted Guide
            </span>
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            We guide and consult Indian startups and MSMEs to build an Atmanirbhar Bharat through strategic planning, compliance framework, and financial modeling.
          </p>
          <ul className="space-y-2.5 text-sm font-medium text-slate-700">
            <li className="flex items-center gap-2">✔ Govt. Schemes Assistance</li>
            <li className="flex items-center gap-2">✔ Institutional Support</li>
            <li className="flex items-center gap-2">✔ Training & Business Development</li>
          </ul>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded-lg transition shadow-md">
              Apply By Yourself
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium text-sm px-6 py-3 rounded-lg transition shadow-sm">
              Get Expert Advice
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col items-center justify-center text-white p-6 shadow-xl relative overflow-hidden group">
            <Camera className="w-12 h-12 mb-2 text-pink-400 group-hover:scale-110 transition" />
            <span className="font-semibold text-lg tracking-wide">Instagram Feed</span>
            <p className="text-xs text-slate-400 mt-1">Latest updates & media</p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-16 pt-8 border-t border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 tracking-wider uppercase mb-6">
          Recognized & Affiliated With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all">
          <div className="font-bold tracking-tight text-slate-700 text-lg flex items-center gap-1"><ShieldCheck className="text-emerald-600" /> PIERC</div>
          <div className="font-bold tracking-tight text-slate-700 text-lg flex items-center gap-1"><Award className="text-amber-500" /> AIC</div>
          <div className="font-bold tracking-tight text-slate-700 text-lg flex items-center gap-1"><Briefcase className="text-cyan-600" /> ACC</div>
          <div className="font-bold tracking-tight text-slate-700 text-lg flex items-center gap-1"><TrendingUp className="text-rose-500" /> MIET</div>
        </div>
      </div>
    </section>
  );
}