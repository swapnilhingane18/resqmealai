import { motion } from 'framer-motion';
import { useState } from 'react';
import FoodCard from '../../components/FoodCard';
import Button from '../../components/Button';

const initialFood = [
  { id: 1, name: 'Fresh Organic Produce', qty: '12 kg', location: 'Downtown Market', urgency: 'High', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Artisan Bread Loaves', qty: '30 units', location: 'Westside Bakery', urgency: 'Medium', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Cooked Base Gravy', qty: '5 liters', location: 'Central Kitchen', urgency: 'Low', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Packaged Snacks', qty: '50 packets', location: 'North Warehouse', urgency: 'Low', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=800' },
];

export default function AvailableFood() {
  const [filter, setFilter] = useState('All');
  const [foods, setFoods] = useState(initialFood);
  const [acceptedIds, setAcceptedIds] = useState([]);

  const handleAccept = (id) => {
    if (!acceptedIds.includes(id)) {
      setAcceptedIds([...acceptedIds, id]);
    }
  };

  const filteredFoods = filter === 'All' ? foods : foods.filter(f => f.urgency === filter);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Available <span className="text-primary">Rescues</span>
            </h1>
            <p className="mt-2 text-gray-400 max-w-xl">
              Filter incoming donations by urgency and accept requests directly to generate pickup routing.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex items-center gap-2 bg-[#111827] p-1.5 rounded-xl border border-[#1f2937]"
          >
            {['All', 'High', 'Medium', 'Low'].map(urgency => (
              <button
                key={urgency}
                onClick={() => setFilter(urgency)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === urgency ? 'bg-[#1f2937] text-white shadow-md' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {urgency}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFoods.map((food, idx) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              <FoodCard 
                name={food.name} 
                quantity={food.qty} 
                location={food.location} 
                urgency={food.urgency} 
                image={food.image} 
                eta={food.urgency === 'High' ? '15m' : food.urgency === 'Medium' ? '45m' : '2h'}
              />
              <div className="absolute bottom-5 left-5 right-5 z-30">
                <Button 
                  variant={acceptedIds.includes(food.id) ? 'secondary' : 'primary'} 
                  className={`w-full py-2.5 ${acceptedIds.includes(food.id) ? 'pointer-events-none opacity-80 border-success/50 text-success' : ''}`}
                  onClick={() => handleAccept(food.id)}
                >
                  {acceptedIds.includes(food.id) ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Accepted
                    </span>
                  ) : 'Accept Request'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredFoods.length === 0 && (
          <div className="text-center py-20 bg-[#111827] border border-[#1f2937] rounded-3xl">
            <svg className="w-12 h-12 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-bold text-gray-400">No {filter !== 'All' ? filter : ''} urgency rescues available</h3>
            <p className="text-sm text-gray-500 mt-1">Check back later or adjust your filters.</p>
          </div>
        )}

      </div>
    </div>
  );
}
