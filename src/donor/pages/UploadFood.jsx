import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UploadFood() {
  const [formData, setFormData] = useState({ name: '', quantity: '', image: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proceed to Step 4 AI Scan logic
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-6">
        
        <div className="mb-10">
          <h1 className="text-4xl font-black text-white tracking-tight">Log New Donation</h1>
          <p className="mt-3 text-lg text-gray-500 font-medium">Upload surplus food for instant AI routing.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111827] border border-[#1f2937] p-8 sm:p-10 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Food Name</label>
              <input 
                type="text" 
                placeholder="e.g. 20 Loaves of Bakery Bread"
                className="w-full bg-[#0B0F19] border border-[#1f2937] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-primary transition-colors font-medium"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Quantity / Size</label>
              <input 
                type="text" 
                placeholder="e.g. 5 kg, 20 servings"
                className="w-full bg-[#0B0F19] border border-[#1f2937] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-primary transition-colors font-medium"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Food Image</label>
              <div className="w-full bg-[#0B0F19] border-2 border-dashed border-[#1f2937] rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                  📸
                </div>
                <p className="text-gray-400 font-bold mb-1">Click to upload photo</p>
                <p className="text-xs text-gray-500 font-medium tracking-wide border px-3 py-1 rounded-md border-[#1f2937]">Max 5MB • JPG, PNG</p>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 mt-4 rounded-xl font-black text-[#0B0F19] shadow-lg shadow-primary/20 bg-primary hover:bg-secondary transition-colors uppercase tracking-wider text-sm"
            >
              Submit & Auto-Route
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
