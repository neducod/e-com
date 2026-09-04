import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown, Plus, Check } from 'lucide-react';

const categories = ['All Goods', 'Backpacks', 'Totes', 'Slings', 'Travel & Weekenders', 'Accessories'];
const colorOptions = ['Black', 'Sand', 'Charcoal', 'Navy', 'Olive'];

const allProducts = [
  {
    id: 1,
    name: 'Aero Daypack 20L',
    category: 'Backpacks',
    price: 180,
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller',
    inStock: true,
  },
  {
    id: 2,
    name: 'Studio Canvas Tote',
    category: 'Totes',
    price: 140,
    color: 'Sand',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    tag: 'New',
    inStock: true,
  },
  {
    id: 3,
    name: 'Modular Sling Pack',
    category: 'Slings',
    price: 95,
    color: 'Charcoal',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800',
    tag: null,
    inStock: true,
  },
  {
    id: 4,
    name: 'Transit Weekender 35L',
    category: 'Travel & Weekenders',
    price: 260,
    color: 'Navy',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    tag: 'Limited',
    inStock: true,
  },
  {
    id: 5,
    name: 'Tech Organizer Pouch',
    category: 'Accessories',
    price: 55,
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800',
    tag: null,
    inStock: true,
  },
  {
    id: 6,
    name: 'Commuter Rolltop 28L',
    category: 'Backpacks',
    price: 210,
    color: 'Olive',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    tag: null,
    inStock: false,
  },
];

export default function ShopSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Goods');
  const [selectedColor, setSelectedColor] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All Goods' || product.category === selectedCategory;
        const matchesColor = selectedColor === 'All' || product.color === selectedColor;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesColor && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return a.id - b.id; // Default / Featured
      });
  }, [selectedCategory, selectedColor, searchQuery, sortBy]);

  return (
    <section className="bg-neutral-50 text-neutral-900 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-8">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-semibold">
            Catalog
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-4xl font-light tracking-tight">Shop All Carrying Goods</h1>
            <p className="text-xs text-neutral-500 font-mono">
              Showing {filteredProducts.length} of {allProducts.length} items
            </p>
          </div>
        </div>

        {/* Toolbar (Search & Sort Bar) */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-10 pb-6 border-b border-neutral-200">
          {/* Search Input */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-100 pl-10 pr-4 py-2 text-xs tracking-wide focus:outline-none focus:bg-white focus:ring-1 focus:ring-neutral-900 border border-transparent focus:border-neutral-900 transition-all"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4">
            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-wider border border-neutral-300 px-4 py-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-neutral-100 text-neutral-900 text-xs uppercase tracking-wider px-4 py-2 pr-8 border border-transparent focus:outline-none focus:border-neutral-900 cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" />
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className={`md:block space-y-8 ${mobileFilterOpen ? 'block' : 'hidden'}`}>
            {/* Categories Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 text-neutral-900">
                Categories
              </h3>
              <ul className="space-y-2 text-xs">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left w-full py-1 transition-colors ${
                        selectedCategory === cat
                          ? 'font-medium text-neutral-900 border-l-2 border-neutral-900 pl-2 -ml-2'
                          : 'text-neutral-500 hover:text-neutral-900'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Filter */}
            <div className="pt-6 border-t border-neutral-200">
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 text-neutral-900">
                Color
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedColor('All')}
                  className={`text-xs px-3 py-1 border ${
                    selectedColor === 'All'
                      ? 'border-neutral-900 bg-neutral-900 text-neutral-50'
                      : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  All
                </button>
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`text-xs px-3 py-1 border ${
                      selectedColor === color
                        ? 'border-neutral-900 bg-neutral-900 text-neutral-50'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            {(selectedCategory !== 'All Goods' || selectedColor !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All Goods');
                  setSelectedColor('All');
                  setSearchQuery('');
                }}
                className="text-xs underline text-neutral-500 hover:text-neutral-900 pt-2"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid Area */}
          <main className="md:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-neutral-100/50">
                <p className="text-sm text-neutral-500 font-light">No products match your current filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative flex flex-col">
                    {/* Card Image */}
                    <div className="aspect-[4/5] bg-neutral-200 overflow-hidden relative mb-4">
                      {product.tag && (
                        <span className="absolute top-3 left-3 z-10 bg-neutral-900 text-neutral-50 text-[10px] uppercase tracking-widest px-2 py-0.5">
                          {product.tag}
                        </span>
                      )}
                      
                      {!product.inStock && (
                        <span className="absolute top-3 right-3 z-10 bg-neutral-200 text-neutral-600 text-[10px] uppercase tracking-widest px-2 py-0.5">
                          Sold Out
                        </span>
                      )}

                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                          product.inStock ? 'grayscale group-hover:grayscale-0' : 'grayscale opacity-50'
                        }`}
                      />

                      {/* Quick Add Button */}
                      {product.inStock && (
                        <button
                          className="absolute bottom-3 right-3 bg-neutral-900 text-neutral-50 p-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-neutral-800"
                          aria-label="Add to bag"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Card Info */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs font-medium tracking-tight text-neutral-900 group-hover:underline underline-offset-4 decoration-neutral-300">
                          {product.name}
                        </h3>
                        <p className="text-[11px] text-neutral-500 mt-0.5">{product.color}</p>
                      </div>
                      <span className="text-xs font-light text-neutral-900">${product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}