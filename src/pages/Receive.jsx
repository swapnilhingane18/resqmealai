import { useState } from 'react';
import { motion } from 'framer-motion';
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Available <span className="text-primary">Food Listings</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Browse surplus food near you and request a pickup for your community.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                activeCategory === cat
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'bg-dark-card text-text-secondary border border-border hover:border-primary/20 hover:text-text-primary'
              }`}
            >
              {cat}
            </motion.button>
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
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-card border border-border text-sm text-text-primary placeholder-text-muted transition-all focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(0,198,255,0.15)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyFoods.map((food, idx) => (
            <FoodCard key={food.id} {...food} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
