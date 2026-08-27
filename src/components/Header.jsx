import React from 'react';
import { Search, User, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full font-sans bg-[#F4F4F5] text-slate-800 min-h-screen relative overflow-hidden select-none">
      
      {/* Top Banner */}
      <div className="w-full bg-[#3F444E] text-white text-[10px] sm:text-xs tracking-wider py-2 text-center uppercase font-medium">
        Free ground shipping on orders over $74
      </div>

      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-slate-900 font-extrabold text-2xl tracking-tighter uppercase">
            <span className="text-3xl font-black mr-1">K</span>KRUDCUP
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest text-slate-600 uppercase">
          <a href="#home" className="text-slate-900 hover:text-black transition-colors">Home</a>
          <a href="#products" className="hover:text-black transition-colors">Products</a>
          <a href="#about" className="hover:text-black transition-colors">About Us</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact Us</a>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search here"
              className="pl-9 pr-4 py-2 w-48 lg:w-64 bg-white text-xs rounded-full border border-slate-200 focus:outline-none focus:border-slate-400 text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <button className="p-2.5 bg-[#3F444E] text-white rounded-full hover:bg-slate-700 transition-colors">
            <User size={16} />
          </button>

          <button className="relative p-2.5 bg-[#3F444E] text-white rounded-full hover:bg-slate-700 transition-colors">
            <ShoppingBag size={16} />
            <span className="absolute -top-1 -right-1 bg-white text-slate-900 border border-slate-200 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-24 grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
        
        {/* Left Copy */}
        <div className="lg:col-span-6 space-y-6 lg:pr-8">
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Leather Carryall
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight uppercase">
            Which Needed <br /> Everyday
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md font-normal leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </p>

          <div className="pt-2">
            <button className="flex items-center space-x-4 border border-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-200">
              <span>Shop Now</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="flex items-center space-x-2 pt-12">
            <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
            <div className="w-8 h-1 bg-slate-900 rounded-full"></div>
            <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Product Showcase (CSS Bag Placeholders) */}
        <div className="lg:col-span-6 relative mt-16 lg:mt-0 h-[480px] sm:h-[540px] flex items-end justify-center lg:justify-end">
          
          {/* Subtle Background Glow Circles */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-96 h-96 bg-white/60 rounded-full blur-3xl -z-10" />

          {/* Bag 1: Left / Background (Plum / Burgundy) */}
          <div className="absolute left-4 sm:left-12 bottom-0 w-44 sm:w-52 h-80 sm:h-96 bg-[#4A1D33] rounded-t-3xl rounded-b-[40px] shadow-2xl transform -rotate-12 translate-y-4 hover:translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center text-white border-t-8 border-neutral-900/20">
            <div className="w-16 h-12 border-4 border-neutral-800 rounded-t-full absolute -top-10" />
            <div className="opacity-30 tracking-widest text-[10px] font-bold">ATELIER</div>
          </div>

          {/* Bag 3: Right / Middle Layer (Navy Blue) */}
          <div className="absolute right-0 sm:right-6 bottom-4 w-48 sm:w-56 h-88 sm:h-[420px] bg-[#1E4D6B] rounded-t-3xl rounded-b-[40px] shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300 flex flex-col items-center justify-center text-white border-t-8 border-neutral-900/20">
            <div className="w-20 h-14 border-4 border-neutral-800 rounded-t-full absolute -top-12" />
            <div className="opacity-30 tracking-widest text-xs font-bold">ATELIER</div>
          </div>

          {/* Bag 2: Center / Foreground (Olive Green) */}
          <div className="relative z-20 w-52 sm:w-64 h-96 sm:h-[460px] bg-[#536253] rounded-t-3xl rounded-b-[44px] shadow-2xl transform -rotate-2 hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center justify-center text-white border-t-8 border-neutral-900/20">
            <div className="w-24 h-16 border-4 border-neutral-800 rounded-t-full absolute -top-14" />
            
            {/* Minimalist Logo Stamp on Bag */}
            <div className="flex flex-col items-center opacity-40">
              <span className="text-2xl font-black mb-1">K</span>
              <span className="text-[10px] tracking-widest font-bold">KRUDCUP</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}