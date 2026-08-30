import React, { useState } from 'react';
// import { Search, User, ShoppingBag, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

// Sample Data for Bestsellers
const BESTSELLERS = [
  {
    id: 1,
    name: 'The Architectural Tote',
    price: '$680',
    category: 'Totes',
    bgPrimary: 'bg-[#536253]', // Olive
    bgHover: 'bg-[#435043]',
  },
  {
    id: 2,
    name: 'Minimalist Carryall',
    price: '$540',
    category: 'Travel',
    bgPrimary: 'bg-[#4A1D33]', // Plum
    bgHover: 'bg-[#391627]',
  },
  {
    id: 3,
    name: 'Structured Crossbody',
    price: '$420',
    category: 'Crossbody',
    bgPrimary: 'bg-[#1E4D6B]', // Navy
    bgHover: 'bg-[#15374E]',
  },
  {
    id: 4,
    name: 'Essential Duffle',
    price: '$890',
    category: 'Travel',
    bgPrimary: 'bg-[#2A2D34]', // Charcoal
    bgHover: 'bg-[#1C1E23]',
  },
];

export default function HomePage() {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full font-sans bg-[#F4F4F5] text-slate-800 antialiased selection:bg-slate-900 selection:text-white">
      
      {/* ------------------ ANNOUNCEMENT BAR ------------------ */}
      <div className="w-full bg-[#3F444E] text-white text-[10px] sm:text-xs tracking-[0.2em] py-2 text-center uppercase font-medium">
        Free ground shipping on orders over $500
      </div>

      {/* ------------------ NAVBAR ------------------ */}
      <nav className="sticky top-0 z-50 w-full bg-[#F4F4F5]/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#" className="flex items-center text-slate-900 font-extrabold text-2xl tracking-tighter uppercase">
              <span className="text-3xl font-black mr-1">K</span>KRUDCUP
            </a>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-[0.15em] text-slate-600 uppercase">
            <a href="#shop" className="text-slate-900 hover:text-black transition-colors">Shop All (20)</a>
            <a href="#categories" className="hover:text-black transition-colors">Categories</a>
            <a href="#about" className="hover:text-black transition-colors">Manifesto</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>

          {/* Search & Utility Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} /> */}
              <input
                type="text"
                placeholder="Search catalogue"
                className="pl-9 pr-4 py-2 w-48 lg:w-60 bg-white text-xs rounded-full border border-slate-200 focus:outline-none focus:border-slate-400 text-slate-700 placeholder:text-slate-400 transition-all"
              />
            </div>

            <button aria-label="Account" className="p-2.5 bg-[#3F444E] text-white rounded-full hover:bg-slate-700 transition-colors">
              {/* <User size={15} /> */}
            </button>

            <button aria-label="Cart" className="relative p-2.5 bg-[#3F444E] text-white rounded-full hover:bg-slate-700 transition-colors">
              {/* <ShoppingBag size={15} /> */}
              <span className="absolute -top-1 -right-1 bg-white text-slate-900 border border-slate-200 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ------------------ 1. HERO SECTION ------------------ */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 text-white flex items-center justify-center overflow-hidden">
        {/* Editorial Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
        
        {/* Stylized Visual Placeholder (Mimicking Editorial Shoot) */}
        <div className="absolute inset-0 bg-[#2A2D34] flex items-center justify-center scale-105 transform hover:scale-100 transition-transform duration-1000">
          <div className="w-80 h-[500px] bg-[#536253] rounded-t-full rounded-b-[60px] shadow-2xl opacity-40 blur-sm transform -rotate-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-3xl px-6 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-300 font-semibold mb-4">
            Autumn / Winter 2026
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight mb-6">
            Elevated Everyday Carry
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-lg mb-8 leading-relaxed">
            Architectural silhouettes crafted from vegetable-tanned Italian leather. Designed for intentional living.
          </p>
          <a
            href="#shop"
            className="group flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-200 transition-all duration-300"
          >
            <span>Shop the Collection</span>
            {/* <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> */}
          </a>
        </div>
      </section>

      {/* ------------------ 2. FEATURED BESTSELLERS ------------------ */}
      <section id="shop" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">Curated Selection</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">Featured Bestsellers</h2>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-xs font-bold tracking-[0.15em] text-slate-600 hover:text-black uppercase flex items-center space-x-2">
            <span>View All Products (20)</span>
            {/* <ArrowRight size={14} /> */}
          </a>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BESTSELLERS.map((product) => (
            <div key={product.id} className="group flex flex-col cursor-pointer">
              {/* Image Box */}
              <div className="relative w-full h-80 bg-white rounded-lg border border-slate-200/80 overflow-hidden flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-lg">
                <div className={`w-36 h-56 ${product.bgPrimary} group-hover:${product.bgHover} rounded-t-2xl rounded-b-[30px] shadow-md transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center text-white/30 text-xs font-bold`}>
                  {product.category}
                </div>
                
                {/* Quick Add Overlay Button */}
                <button className="absolute bottom-4 left-4 right-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black">
                  Add to Bag
                </button>
              </div>

              {/* Meta Content */}
              <div className="mt-4 flex items-center justify-between text-xs tracking-wider uppercase font-semibold">
                <h3 className="text-slate-900 group-hover:text-slate-600 transition-colors">{product.name}</h3>
                <span className="text-slate-500">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ 3. CATEGORY HIGHLIGHTS ------------------ */}
      <section id="categories" className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Large Main Highlight */}
          <div className="lg:col-span-7 relative h-[450px] bg-[#2A2D34] rounded-lg overflow-hidden group cursor-pointer flex items-end p-8 sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-[#536253] rounded-t-full rounded-b-[40px] opacity-30 blur-md group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-20 text-white">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">Category</span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1 mb-4">Structured Totes</h3>
              <span className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white group-hover:underline">
                <span>Explore Category</span>
                {/* <ArrowRight size={14} /> */}
              </span>
            </div>
          </div>

          {/* Side Stacked Highlights */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Upper Small Highlight */}
            <div className="relative h-[213px] bg-[#1E4D6B] rounded-lg overflow-hidden group cursor-pointer flex items-end p-6">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div className="relative z-20 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300 font-semibold">Category</span>
                <h3 className="text-2xl font-black uppercase tracking-tight">Travel & Carryall</h3>
              </div>
            </div>

            {/* Lower Small Highlight */}
            <div className="relative h-[213px] bg-[#4A1D33] rounded-lg overflow-hidden group cursor-pointer flex items-end p-6">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div className="relative z-20 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300 font-semibold">Category</span>
                <h3 className="text-2xl font-black uppercase tracking-tight">Compact Crossbody</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------ 4. BRAND MANIFESTO ------------------ */}
      <section id="about" className="w-full bg-white border-y border-slate-200 py-28 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Our Ethos</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight uppercase tracking-wide">
            "Sourced ethically. Crafted for longevity. Designed for the modern minimalist."
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal leading-relaxed tracking-wide pt-2">
            Every piece is cut from full-grain hides, prioritizing clean architectural silhouettes over seasonal trends. Built to withstand daily wear while acquiring character over time.
          </p>
        </div>
      </section>

      {/* <footer className="w-full bg-[#0a0a0a] text-[#8e8e8e] pt-20 pb-12 px-6 lg:px-12 selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-sm">ATELIER</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-sm">
              Architectural silhouettes, premium materials, and timeless design. Crafted for the intentional minimalist.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3 text-xs tracking-[0.15em] uppercase">
            <h5 className="text-white font-bold mb-4">Explore</h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Shop All (20)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 text-xs tracking-[0.15em] uppercase">
            <h5 className="text-white font-bold mb-4">Client Care</h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h5 className="text-white font-bold tracking-[0.2em] uppercase text-xs">Newsletter</h5>
            <p className="text-xs text-neutral-400 font-light">
              Subscribe to receive private preview access to new releases.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative pt-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-neutral-800 pb-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" aria-label="Subscribe" className="absolute right-0 bottom-2 text-neutral-400 hover:text-white transition-colors">
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <div>
            © 2026 ATELIER Studio. All rights reserved.
          </div>
        </div>
      </footer> */}

    </div>
  );
}