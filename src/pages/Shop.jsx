import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronDown, 
  ArrowRight, 
  ArrowUp, 
  Ruler, 
  RefreshCw, 
  Truck, 
  Check, 
  SlidersHorizontal 
} from 'lucide-react';

// --- MOCK DATA ---
const CATEGORIES = ["All Items", "Tops & Shirts", "Trousers", "Outerwear", "Knitwear", "Accessories"];

const PRODUCTS = [
  {
    id: 1,
    name: "Oversized Heavyweight Cotton Shirt",
    category: "Tops & Shirts",
    price: 180,
    colors: ["#171717", "#D4D4D4", "#A3A3A3"],
    imgPrimary: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: 2,
    name: "Tailored Pleated Trousers",
    category: "Trousers",
    price: 240,
    colors: ["#171717", "#525252"],
    imgPrimary: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: 3,
    name: "Double-Breasted Wool Coat",
    category: "Outerwear",
    price: 580,
    colors: ["#171717", "#737373"],
    imgPrimary: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: 4,
    name: "Minimalist Cashmere Crewneck",
    category: "Knitwear",
    price: 320,
    colors: ["#E5E5E5", "#171717", "#D4D4D4"],
    imgPrimary: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: 5,
    name: "Relaxed Linen Blend Blazer",
    category: "Outerwear",
    price: 390,
    colors: ["#D4D4D4", "#171717"],
    imgPrimary: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: 6,
    name: "Structured Canvas Tote",
    category: "Accessories",
    price: 150,
    colors: ["#171717", "#E5E5E5"],
    imgPrimary: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  }
];

// Frame motion global ease transitions
const smoothTransition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Newest");
  const [activeFilters, setActiveFilters] = useState(["Size: M", "Color: Neutral"]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const removeFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter((f) => f !== filterToRemove));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F0F0F] font-sans selection:bg-[#0F0F0F] selection:text-[#FFFFFF]">
      
      {/* SECTION 1: HERO HEADER & CATEGORY INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <p className="text-xs tracking-wider text-[#737373] uppercase mb-3">
          Home / Shop / All Clothing
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[#0F0F0F] mb-8">
          The Apparel Catalog
        </h1>

        {/* Scrollable Horizontal Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors rounded-full"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-[#0F0F0F] rounded-full"
                  transition={smoothTransition}
                />
              )}
              <span className={`relative z-10 ${activeCategory === cat ? "text-white" : "text-[#737373] hover:text-[#0F0F0F]"}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 2: FILTER & SORT BAR (STICKY) */}
      <section className="sticky top-0 z-30 bg-[#FAFAFA]/90 backdrop-blur-md border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          <div className="flex items-center space-x-6">
            <span className="text-xs uppercase tracking-widest text-[#737373]">
              {PRODUCTS.length} Items
            </span>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 text-sm font-medium hover:opacity-60 transition-opacity"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters +</span>
            </button>
          </div>

          <div className="relative group">
            <div className="flex items-center space-x-2 text-sm font-medium cursor-pointer">
              <span className="text-[#737373]">Sort:</span>
              <span className="text-[#0F0F0F]">{sortOption}</span>
              <ChevronDown className="w-4 h-4 text-[#737373]" />
            </div>
            {/* Minimal Dropdown Menu */}
            <div className="absolute right-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-40">
              <div className="bg-white border border-[#E5E5E5] shadow-lg rounded-sm py-2 min-w-[180px]">
                {["Newest", "Price: Low to High", "Price: High to Low"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortOption(option)}
                    className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#FAFAFA] transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Active Filter Badges Strip */}
        {activeFilters.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 flex items-center space-x-2">
            {activeFilters.map((filter) => (
              <span
                key={filter}
                className="inline-flex items-center space-x-1 text-xs bg-[#E5E5E5]/50 border border-[#E5E5E5] px-2.5 py-1 rounded-full"
              >
                <span>{filter}</span>
                <X
                  className="w-3 h-3 cursor-pointer hover:text-red-500 transition-colors"
                  onClick={() => removeFilter(filter)}
                />
              </span>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 3: PRIMARY PRODUCT GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* SECTION 4: MID-CATALOG EDITORIAL SPOTLIGHT BANNER */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-2 border border-[#E5E5E5] bg-white rounded-sm overflow-hidden">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
              alt="Editorial craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-[#F4F4F5]">
            <span className="text-xs uppercase tracking-widest text-[#737373] mb-3">Material Focus</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-[#0F0F0F]">
              Crafted from 100% Organic Heavyweight Cotton. Designed for longevity.
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed mb-6">
              Our minimal manufacturing footprint emphasizes timeless utility over seasonal trends. Each piece is garment-dyed to resist fading and pre-shrunk to retain form.
            </p>
            <div>
              <button className="inline-flex items-center space-x-2 text-sm font-medium text-[#0F0F0F] group border-b border-[#0F0F0F] pb-1 hover:opacity-60 transition-opacity">
                <span>Learn About Our Fabrics</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Remaining Product Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* SECTION 5: CURATED BESTSELLERS SPOTLIGHT STRIP */}
      <section className="border-t border-[#E5E5E5] py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs uppercase tracking-widest text-[#737373] mb-8">
            Curated Favorites
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.isBestseller).slice(0, 4).map((product) => (
              <div key={`bestseller-${product.id}`} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#F4F4F5] mb-3">
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-medium tracking-wider uppercase bg-white/90 backdrop-blur-sm px-2 py-1 border border-[#E5E5E5]">
                    Bestseller
                  </span>
                  <img
                    src={product.imgPrimary}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <h4 className="text-sm font-medium text-[#0F0F0F] truncate">{product.name}</h4>
                <p className="text-xs text-[#737373] mt-1">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SIZING & TRUST CONFIDENCE BANNER */}
      <section className="bg-[#F4F4F5] border-y border-[#E5E5E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center text-center p-4">
            <Ruler className="w-6 h-6 text-[#0F0F0F] mb-3 stroke-1" />
            <h4 className="text-sm font-medium text-[#0F0F0F] mb-1">True to Size Guarantee</h4>
            <p className="text-xs text-[#737373] mb-3">Precision cuts tailored to standard measurements.</p>
            <button 
              onClick={() => setIsSizeGuideOpen(true)}
              className="text-xs underline text-[#0F0F0F] hover:opacity-60 transition-opacity"
            >
              View Size Guide
            </button>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <RefreshCw className="w-6 h-6 text-[#0F0F0F] mb-3 stroke-1" />
            <h4 className="text-sm font-medium text-[#0F0F0F] mb-1">14-Day Seamless Returns</h4>
            <p className="text-xs text-[#737373]">Pre-paid return labels provided with every purchase.</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <Truck className="w-6 h-6 text-[#0F0F0F] mb-3 stroke-1" />
            <h4 className="text-sm font-medium text-[#0F0F0F] mb-1">Complimentary Express Shipping</h4>
            <p className="text-xs text-[#737373]">Applied automatically on orders over $150.</p>
          </div>

        </div>
      </section>

      {/* SECTION 7: PAGINATION & FOOTER TRANSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
        <div className="w-full max-w-xs mb-4">
          <div className="flex justify-between text-xs text-[#737373] mb-2">
            <span>Showing 6 of 24 items</span>
          </div>
          <div className="w-full h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
            <div className="w-1/4 h-full bg-[#0F0F0F]" />
          </div>
        </div>

        <button
          onClick={() => {
            setIsLoadingMore(true);
            setTimeout(() => setIsLoadingMore(false), 800);
          }}
          disabled={isLoadingMore}
          className="px-8 py-3 border border-[#0F0F0F] text-xs font-medium uppercase tracking-widest text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white transition-colors duration-200 mb-12"
        >
          {isLoadingMore ? "Loading..." : "Load More Products"}
        </button>

        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-xs text-[#737373] hover:text-[#0F0F0F] transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* SLIDE-OVER FILTER DRAWER */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={smoothTransition}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
                  <h3 className="text-sm font-medium uppercase tracking-widest">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5 text-[#737373] hover:text-[#0F0F0F]" />
                  </button>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase text-[#737373] tracking-wider mb-3">Size</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className="py-2 border border-[#E5E5E5] text-xs font-medium hover:border-[#0F0F0F] transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase text-[#737373] tracking-wider mb-3">Color</h4>
                  <div className="flex space-x-3">
                    {["#171717", "#D4D4D4", "#525252", "#E5E5E5"].map((hex) => (
                      <button
                        key={hex}
                        className="w-6 h-6 rounded-full border border-[#E5E5E5] flex items-center justify-center"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="text-xs uppercase text-[#737373] tracking-wider mb-3">Price Range</h4>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    className="w-full accent-[#0F0F0F]"
                  />
                  <div className="flex justify-between text-xs text-[#737373] mt-2">
                    <span>$100</span>
                    <span>$600</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] pt-4">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-3 bg-[#0F0F0F] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#262626] transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL: SIZE GUIDE */}
      <AnimatePresence>
        {isSizeGuideOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSizeGuideOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={smoothTransition}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-lg w-full p-6 shadow-xl rounded-sm border border-[#E5E5E5]"
              >
                <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-4 mb-4">
                  <h3 className="text-sm font-medium uppercase tracking-widest">Size Measurement Guide</h3>
                  <button onClick={() => setIsSizeGuideOpen(false)}>
                    <X className="w-4 h-4 text-[#737373]" />
                  </button>
                </div>
                <div className="text-xs text-[#737373] space-y-3">
                  <p>All measurements are listed in inches. Fits true to standard sizing.</p>
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-[#E5E5E5] text-[#0F0F0F]">
                        <th className="py-2">Size</th>
                        <th className="py-2">Chest</th>
                        <th className="py-2">Waist</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#E5E5E5]/50">
                        <td className="py-2 font-medium text-[#0F0F0F]">S</td>
                        <td className="py-2">36-38"</td>
                        <td className="py-2">30"</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]/50">
                        <td className="py-2 font-medium text-[#0F0F0F]">M</td>
                        <td className="py-2">38-40"</td>
                        <td className="py-2">32"</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]/50">
                        <td className="py-2 font-medium text-[#0F0F0F]">L</td>
                        <td className="py-2">40-42"</td>
                        <td className="py-2">34"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- SUB-COMPONENT: PRODUCT CARD ---
function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div 
        className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#F4F4F5] mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Primary Image */}
        <motion.img
          src={product.imgPrimary}
          alt={product.name}
          animate={{ scale: isHovered ? 1.03 : 1, opacity: isHovered ? 0 : 1 }}
          transition={smoothTransition}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Secondary Image Crossfade */}
        <motion.img
          src={product.imgSecondary}
          alt={`${product.name} angle`}
          animate={{ scale: isHovered ? 1.03 : 1, opacity: isHovered ? 1 : 0 }}
          transition={smoothTransition}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Inline Quick Add Bar */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? 0 : "100%" }}
          transition={smoothTransition}
          className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm border-t border-[#E5E5E5] py-3 text-center"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-[#0F0F0F] hover:opacity-70 transition-opacity">
            + Quick Add
          </span>
        </motion.div>
      </div>

      {/* Details */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-[#0F0F0F] truncate pr-2">{product.name}</h3>
          <span className="text-xs font-light text-[#0F0F0F]">${product.price}</span>
        </div>
        <span className="text-xs text-[#737373]">{product.category}</span>
        
        {/* Color Swatches */}
        <div className="flex space-x-1.5 pt-1">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-2.5 h-2.5 rounded-full border border-[#E5E5E5]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}