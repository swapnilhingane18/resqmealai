import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DonorDashboard() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Active Donations</h1>
            <p className="mt-3 text-lg text-gray-500 font-medium">Track the live status of your food rescue.</p>
          </div>
          <Link to="/donor/upload">
            <button className="px-6 py-3 rounded-xl bg-primary text-[#0B0F19] font-bold text-sm tracking-wide hover:bg-secondary transition-colors shadow-lg shadow-primary/20">
              + New Donation
            </button>
          </Link>
        </div>

        {/* Minimal Macro Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#111827] border border-[#1f2937] px-6 py-5 rounded-2xl flex items-center justify-between">
            <span className="text-gray-400 font-medium text-sm">Meals Saved</span>
            <span className="text-2xl font-black text-white">684</span>
          </div>
          <div className="bg-[#111827] border border-[#1f2937] px-6 py-5 rounded-2xl flex items-center justify-between">
            <span className="text-gray-400 font-medium text-sm">CO₂ Prevented (kg)</span>
            <span className="text-2xl font-black text-white">855</span>
          </div>
          <div className="bg-[#111827] border border-[#1f2937] px-6 py-5 rounded-2xl flex items-center justify-between">
            <span className="text-gray-400 font-medium text-sm">Active Pickups</span>
            <span className="text-2xl font-black text-primary animate-pulse">1</span>
          </div>
        </div>

        <hr className="border-t border-white/10 my-10" />

        {/* Live Swiggy-Style Tracking Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111827] border border-[#1f2937] p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-2xl font-black text-white mb-2">Assorted Bakery Bread</h2>
                <p className="text-gray-500 font-medium">20 Loaves • Listed 12 mins ago</p>
              </div>
              <div className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                NGO Assigned
              </div>
            </div>

            {/* Status Timeline */}
            <div className="relative flex justify-between items-center px-4 mb-4">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#1f2937] -translate-y-1/2 rounded-full z-0 overflow-hidden">
                <div className="h-full bg-primary w-1/2" />
              </div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-[#0B0F19] flex items-center justify-center shadow-[0_0_15px_rgba(0,198,255,0.4)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Listed</span>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B0F19] border-2 border-primary text-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Assigned</span>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B0F19] border-2 border-[#1f2937] text-gray-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Picked Up</span>
              </div>
            </div>

            {/* NGO Assignment Detail */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-xl">🤝</div>
                <div>
                  <h3 className="text-white font-bold tracking-wide">Community Hope Center</h3>
                  <p className="text-sm text-gray-500 font-medium">Pickup volunteer assigned</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-white">14 min</div>
                <p className="text-sm text-primary font-bold">2.3 km away</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
