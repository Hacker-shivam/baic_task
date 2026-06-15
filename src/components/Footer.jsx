import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <div className="flex items-center gap-2 font-bold text-lg text-white">
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-serif italic text-xs">S</div>
            StartupFlora
          </div>
          <p className="text-slate-500 leading-relaxed pr-4">
            Empowering next-gen Indian founders with standard consulting, dynamic strategy architectures, and streamlined capitalization tools.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm text-white tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#stories" className="hover:text-white transition">Success Stories</a></li>
            <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm text-white tracking-wide">Contact Us</h4>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-emerald-500" /> info@startupflora.com</li>
            <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-emerald-500" /> +91 80492-03227</li>
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>7th Floor, Galaxy Avenue, Tonk Road, Jaipur, 302015</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm text-white tracking-wide">Our Offices</h4>
          <ul className="space-y-2 text-slate-500">
            <li>• HQ: Jaipur, Rajasthan</li>
            <li>• Branch: New Delhi, NCR</li>
            <li>• Branch: Bengaluru, Karnataka</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
        <p>© {new Date().getFullYear()} StartupFlora. All Rights Reserved.</p>
        <div className="flex gap-4 text-slate-400">
          <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
          <a href="#refund" className="hover:text-white transition">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}