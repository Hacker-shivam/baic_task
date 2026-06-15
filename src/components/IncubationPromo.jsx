import React from 'react';
import { MapPin, ArrowRight, Lightbulb, Briefcase } from 'lucide-react';

export default function IncubationPromo() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-24 space-y-24">
      {/* Network Segment */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center justify-center min-h-[250px]">
          <div className="text-center text-slate-400 space-y-2">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <MapPin className="w-8 h-8" />
            </div>
            <p className="text-sm font-semibold">Pan-India Presence Map</p>
            <p className="text-xs">Connecting Incubation Centres Corporate Wide</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
            We have the <br />
            <span className="text-emerald-600">Strongest network of Incubation centres</span> in India
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Providing end-to-end guidance across the nation. From ideation workshops to investor matching, our incubation cells help set deep roots for scale.
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium text-sm px-6 py-3 rounded-lg transition shadow-md flex items-center gap-2">
            Share your business plans today <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Guide segment dynamic filter window */}
      <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-slate-200/60">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Guide me <span className="text-emerald-600 italic font-serif">Flora</span></h2>
          <p className="text-xs text-slate-500 mt-1">Tailored funding mechanisms for every vertical</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-xl mx-auto bg-slate-200/60 p-1.5 rounded-xl text-xs font-bold text-slate-600">
          <button className="px-4 py-2 rounded-lg transition hover:bg-white">START NEW</button>
          <button className="px-4 py-2 rounded-lg transition hover:bg-white">MARKET ME</button>
          <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white shadow-sm">FUND ME</button>
          <button className="px-4 py-2 rounded-lg transition hover:bg-white">PROTECT ME</button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">50+</div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Government Funding Schemes</h4>
              <p className="text-xs text-slate-400 mt-0.5">Direct central & state grants</p>
            </div>
          </div>

          <div className="bg-emerald-600 text-white p-5 rounded-xl shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold">Funding Schemes for</h4>
              <p className="text-xs opacity-90 font-medium">Manufacturing Sector</p>
            </div>
            <Lightbulb className="w-5 h-5 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}