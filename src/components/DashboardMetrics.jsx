import React from 'react';
import { Star } from 'lucide-react';

export default function DashboardMetrics() {
  const steps = [
    { id: "1", label: "Registration" },
    { id: "2", label: "Certification" },
    { id: "3", label: "Funding" },
    { id: "4", label: "Marketing" },
    { id: "5", label: "Compliance" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 my-12">
      <div className="bg-gradient-to-tr from-emerald-50 via-cyan-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-inner border border-white/60">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Grow With <span className="text-emerald-600 italic font-serif">Flora</span></h2>
          <p className="text-sm text-slate-500 mt-1">Accelerate your business journey in simple steps</p>
        </div>

        {/* Steps roadmap block */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center border border-white shadow-sm flex flex-col items-center">
              <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm">
                {item.id}
              </span>
              <span className="text-xs font-bold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Operational Statistics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <span className="text-emerald-600 font-bold text-2xl">5000 +</span>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Startups Managed</p>
            </div>
            <p className="text-sm font-semibold text-slate-700 mt-4">Startup India Certificate <span className="text-emerald-500 block text-xs">within 7 Days</span></p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-emerald-500 text-white p-6 rounded-2xl shadow-md flex flex-col justify-center text-center">
            <span className="text-3xl font-black tracking-tight">100 + CRORES</span>
            <p className="text-xs font-medium uppercase tracking-wider opacity-90 mt-1">Disbursed to</p>
            <span className="text-xl font-bold mt-2">1000+ businesses</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="text-right">
              <span className="text-cyan-600 font-bold text-2xl">500 +</span>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Customers Got</p>
            </div>
            <p className="text-sm font-semibold text-slate-700 mt-4">TAX Holiday <span className="text-cyan-500 block text-xs">for 3 Consecutive Years</span></p>
          </div>
        </div>

        {/* Social Proof Panel */}
        <div className="mt-8 bg-white max-w-md mx-auto p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Google Reviews</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="font-bold text-lg text-slate-800">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1">Trusted by 10000 + businesses</p>
          </div>
          <div className="flex -space-x-2 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">U{i}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}