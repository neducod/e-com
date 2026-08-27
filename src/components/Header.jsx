import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full bg-[#0a0a0a] text-[#8e8e8e] font-sans selection:bg-white selection:text-black">
      {/* Top Announcement Bar */}
      <div className="w-full border-b border-neutral-900 bg-[#070707] py-2 px-6 text-center text-xs tracking-[0.2em] text-neutral-400 uppercase">
        <span>Complimentary worldwide shipping on orders over $500</span>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`sticky top-0 z-50 w-full border-b border-neutral-900 bg-[#0a0a0a]/90 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs tracking-[0.15em] uppercase text-neutral-300">
            <a href="#shop" className="hover:text-white transition-colors duration-200">
              Shop (20)
            </a>
            <a href="#collections" className="hover:text-white transition-colors duration-200">
              Collections
            </a>
            <a href="#story" className="hover:text-white transition-colors duration-200">
              Our Story
            </a>
          </div>

          {/* Mobile Menu Toggle (Left) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center Brand Logo */}
          <div className="text-center">
            <a
              href="#"
              className="text-lg md:text-xl font-bold tracking-[0.3em] text-white uppercase"
            >
              ATELIER
            </a>
          </div>

          {/* Right Utilities */}
          <div className="flex items-center space-x-6 text-xs tracking-[0.15em] uppercase text-neutral-300">
            <button className="hidden sm:flex items-center space-x-2 hover:text-white transition-colors">
              <Search size={16} strokeWidth={1.5} />
              <span className="hidden lg:inline">Search</span>
            </button>
            <a href="#account" className="hidden sm:block hover:text-white transition-colors">
              Account
            </a>
            <a href="#cart" className="flex items-center space-x-2 hover:text-white transition-colors">
              <ShoppingBag size={16} strokeWidth={1.5} />
              <span>(0)</span>
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-900 bg-[#0a0a0a] px-6 py-8 space-y-6 text-xs tracking-[0.2em] uppercase text-neutral-300">
            <div className="flex flex-col space-y-4">
              <a href="#shop" className="hover:text-white">Shop (20)</a>
              <a href="#collections" className="hover:text-white">Collections</a>
              <a href="#story" className="hover:text-white">Our Story</a>
              <a href="#account" className="hover:text-white">Account</a>
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-neutral-400">
                <span>Search Catalogue</span>
                <Search size={16} />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Header Section */}
      <section className="relative w-full border-b border-neutral-900 px-6 py-24 md:py-36 text-center flex flex-col items-center justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4">
          Autumn / Winter 2026
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-[0.15em] text-white uppercase max-w-4xl leading-tight mb-6">
          Architectural Silhouettes & Timeless Design
        </h1>
        <p className="text-sm md:text-base text-neutral-400 max-w-xl font-light leading-relaxed mb-10">
          Crafted for the intentional minimalist. Highlighting premium raw textiles, sharp tailoring, and structural elegance.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#shop"
            className="group flex items-center space-x-3 bg-white text-black px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors"
          >
            <span>Explore Collection</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </header>
  );
}