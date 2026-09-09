import React, { useState } from 'react';
import { Search, User, ShoppingBag, ArrowRight } from 'lucide-react';
//new import added
import { NavLink } from 'react-router-dom';

const SLIDES = [
  {
    id: 0,
    tagline: 'Leather Carryall',
    headingLine1: 'Which Needed',
    headingLine2: 'Everyday',
    description: 'Minimalist leather totes engineered for daily utility, structured silhouettes, and seamless transitions.',
    primaryBg: 'bg-[#536253]', // Olive Green
    secondaryBg: 'bg-[#4A1D33]', // Wine Red
    tertiaryBg: 'bg-[#1E4D6B]', // Navy Blue
    accentGlow: 'bg-[#536253]/20',
  },
  {
    id: 1,
    tagline: 'Minimalist Weekender',
    headingLine1: 'Crafted For',
    headingLine2: 'Escapes',
    description: 'Spacious interior compartments designed with architectural symmetry and durable vegetable-tanned leather.',
    primaryBg: 'bg-[#2A2D34]', // Charcoal
    secondaryBg: 'bg-[#6B4E3D]', // Warm Amber
    tertiaryBg: 'bg-[#4A5D4E]', // Forest Green
    accentGlow: 'bg-[#2A2D34]/20',
  },
  {
    id: 2,
    tagline: 'Crossbody Edition',
    headingLine1: 'Essential &',
    headingLine2: 'Uncompromising',
    description: 'Lightweight structural form tailored for modern city transit with quick-access hardware.',
    primaryBg: 'bg-[#7B3F00]', // Saddle Brown
    secondaryBg: 'bg-[#2C3539]', // Dark Slate
    tertiaryBg: 'bg-[#5A4D41]', // Taupe
    accentGlow: 'bg-[#7B3F00]/20',
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = SLIDES[currentSlide];

//new code added
  const navLinkStyle = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? 'text-black font-extrabold border-b border-black pb-0.5'
        : 'hover:text-black'
  }`;
//new code added

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

        {/* <div className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest text-slate-600 uppercase">
          <a href="#home" className="text-slate-900 hover:text-black transition-colors">Home</a>
          <a href="#products" className="hover:text-black transition-colors">Products</a>
          <a href="#about" className="hover:text-black transition-colors">About Us</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact Us</a>
        </div> */}

<div className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest text-slate-600 uppercase">
      <NavLink to="/" className={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/shop" className={navLinkStyle}>
        Shop
      </NavLink>
      <NavLink to="/collections" className={navLinkStyle}>
        Collections
      </NavLink>
      <NavLink to="/about" className={navLinkStyle}>
        About Us
      </NavLink>
    </div>

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

   
    </div>
  );
}