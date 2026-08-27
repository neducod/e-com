import React from 'react';
import { Link } from 'react-router-dom';
// import { ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-900 pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
        
        {/* Brand Statement */}
        <div className="space-y-4 md:col-span-1">
          <span className="text-white text-sm tracking-[0.2em] font-bold block uppercase">
            ATELIER
          </span>
          <p className="leading-relaxed text-neutral-500 max-w-xs">
            Architectural silhouettes, premium materials, and timeless design. Crafted for the intentional minimalist.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-white uppercase tracking-widest text-[11px] font-semibold">Explore</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><Link to="/shop" className="hover:text-white transition">Shop All (20)</Link></li>
            <li><Link to="/collections" className="hover:text-white transition">Collections</Link></li>
            <li><Link to="/about" className="hover:text-white transition">Our Story</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="space-y-3">
          <h4 className="text-white uppercase tracking-widest text-[11px] font-semibold">Client Care</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Care Guide</a></li>
            <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-3 md:col-span-1">
          <h4 className="text-white uppercase tracking-widest text-[11px] font-semibold">Newsletter</h4>
          <p className="text-neutral-500 leading-relaxed">
            Subscribe to receive private preview access to new releases.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center border-b border-neutral-700 py-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none text-white text-xs placeholder-neutral-600 focus:outline-none w-full"
            />
            <button type="submit" aria-label="Subscribe" className="text-neutral-400 hover:text-white transition pl-2">
                <FaArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500">
        <p>© {new Date().getFullYear()} ATELIER Studio. All rights reserved.</p>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="hover:text-white transition" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="hover:text-white transition" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}