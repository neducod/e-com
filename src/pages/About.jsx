import React from 'react';
import { ArrowUpRight, ShieldCheck, Leaf, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'Crafted with recycled nylon and eco-certified organic canvas to minimize environmental impact.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description: 'Reinforced stitching and weather-resistant fabrics engineered for daily urban commutes.',
  },
  {
    icon: Sparkles,
    title: 'Intelligent Design',
    description: 'Dedicated compartments for tech essentials with a sleek, distraction-free aesthetic.',
  },
];

const stats = [
  { label: 'Recycled Plastic Bottles Used', value: '150k+' },
  { label: 'Carbon Neutral Shipping', value: '100%' },
  { label: 'Lifetime Warranty Guarantee', value: '100 Year' },
];

export default function AboutUs() {
  return (
    <div className="bg-neutral-50 text-neutral-900 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
          Our Philosophy
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight max-w-3xl mb-8">
          Form meets function in every stitch. We design carry goods for the modern minimalist.
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-end pt-8 border-t border-neutral-200">
          <p className="text-neutral-600 leading-relaxed">
            Founded on the principle that everyday carry should be both effortless and enduring, 
            we stripped away unnecessary clutter to focus on pure utility, premium tactile materials, 
            and timeless silhouettes.
          </p>
          <div className="flex md:justify-end">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-neutral-900 pb-1 hover:opacity-70 transition-opacity"
            >
              Explore Collection <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 aspect-[16/9] bg-neutral-200 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1200"
              alt="Craftsmanship detail"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="aspect-square md:aspect-auto bg-neutral-200 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800"
              alt="Minimalist Backpack"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-2xl font-light tracking-tight">Crafted with Purpose</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="space-y-4">
                <Icon className="w-6 h-6 stroke-[1.5] text-neutral-800" />
                <h3 className="text-lg font-medium tracking-tight">{value.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-neutral-900 text-neutral-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 border-l border-neutral-800 pl-6">
              <span className="text-4xl md:text-5xl font-light tracking-tight">{stat.value}</span>
              <p className="text-xs uppercase tracking-wider text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
          Ready to simplify your carry?
        </h2>
        <a
          href="#shop"
          className="inline-block bg-neutral-900 text-neutral-50 px-8 py-4 text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors"
        >
          Shop Everyday Packs
        </a>
      </section>
    </div>
  );
}