import React, { useState } from 'react';
import { ArrowUpRight, Plus, SlidersHorizontal } from 'lucide-react';

const categories = ['All', 'Backpacks', 'Totes', 'Slings', 'Travel'];

const products = [
  {
    id: 1,
    name: 'Aero Daypack 20L',
    category: 'Backpacks',
    price: '$180',
    color: 'Matte Black',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Studio Tote Bag',
    category: 'Totes',
    price: '$140',
    color: 'Sand',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Modular Sling Pack',
    category: 'Slings',
    price: '$95',
    color: 'Charcoal',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Transit Weekender 35L',
    category: 'Travel',
    price: '$260',
    color: 'Deep Navy',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
  },
];

export default function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="bg-neutral-50 text-neutral-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-6 mb-12 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-semibold">
              Selected Goods
            </p>
            <h2 className="text-3xl font-light tracking-tight">The Core Collection</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs uppercase tracking-wider px-4 py-2 transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-neutral-900 text-neutral-50'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="aspect-[4/5] bg-neutral-200 overflow-hidden relative mb-4">
                {product.tag && (
                  <span className="absolute top-3 left-3 z-10 bg-neutral-900 text-neutral-50 text-[10px] uppercase tracking-widest px-2 py-1">
                    {product.tag}
                  </span>
                )}
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Quick Add Overlay Button */}
                <button 
                  className="absolute bottom-3 right-3 bg-neutral-900/90 text-neutral-50 p-2.5 backdrop-blur-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-neutral-900"
                  aria-label="Quick Add"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start pt-1">
                <div>
                  <h3 className="text-sm font-medium tracking-tight text-neutral-900 group-hover:underline underline-offset-4 decoration-neutral-400">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">{product.color}</p>
                </div>
                <span className="text-sm font-light text-neutral-900">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <a
            href="#full-catalog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
          >
            View Full Catalog ({products.length}) <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}