import { useState } from 'react';
import FoodCard from '../components/FoodCard';

const categories = ['All', 'Cooked', 'Raw', 'Packaged', 'Beverages'];

const dummyFoods = [
  { id: 1, name: 'Cooked Rice & Dal', quantity: '15 servings', location: 'Andheri West, Mumbai', urgency: 'High', image: null },
  { id: 2, name: 'Fresh Vegetable Pack', quantity: '8 kg', location: 'Koramangala, Bangalore', urgency: 'Medium', image: null },
  { id: 3, name: 'Bread & Butter', quantity: '20 packs', location: 'Connaught Place, Delhi', urgency: 'Low', image: null },
  { id: 4, name: 'Fruit Basket', quantity: '5 kg', location: 'Baner, Pune', urgency: 'High', image: null },
  { id: 5, name: 'Chapati & Sabzi', quantity: '30 servings', location: 'Salt Lake, Kolkata', urgency: 'Medium', image: null },
  { id: 6, name: 'Packaged Juice Boxes', quantity: '50 units', location: 'T. Nagar, Chennai', urgency: 'Low', image: null },
];

export default function Receive() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Available <span className="gradient-text">Food Listings</span>
          </h1>
          <p className="mt-3 text-text-secondary max-w-xl mx-auto">
            Browse surplus food near you and request a pickup for your community.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all ${
                activeCategory === cat
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'bg-dark-card text-text-secondary border border-border hover:border-primary/20 hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Search */}
          <div className="flex-1 min-w-[200px] ml-auto">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search food..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-card border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50"
              />
            </div>
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {dummyFoods.map((food) => (
            <FoodCard key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
}
