import { motion } from 'framer-motion';

export default function Tracking() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Live Pickup Tracking</h1>
            <p className="mt-2 text-lg text-gray-500 font-medium">Order #RM-84920</p>
          </div>
          <div className="px-4 py-2 bg-success/10 text-success border border-success/20 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-ping" />
            Out for Pickup
          </div>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Mock Map Area */}
          <div className="relative h-64 bg-[#0B0F19] w-full border-b border-[#1f2937] overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(31, 41, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 41, 55, 0.4) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111827] to-transparent z-10" />
            
            {/* Route Mock */}
            <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M50 150 Q 150 150, 200 100 T 350 50" fill="none" stroke="#22D3EE" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
            </svg>
            <style>{`@keyframes dash { to { stroke-dashoffset: -16; } }`}</style>
            
            <div className="absolute top-[30%] left-[80%] w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 border border-primary z-20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="absolute top-[75%] left-[12%] w-8 h-8 rounded-full bg-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-lg z-20 border-2 border-primary">
              <span className="text-xl">📍</span>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            {/* ETA Header */}
            <div className="mb-10">
              <h2 className="text-5xl font-black text-white">14 min</h2>
              <p className="text-gray-400 font-medium text-lg">Estimated arrival at 2:45 PM</p>
            </div>

            {/* NGO info */}
            <div className="flex items-center justify-between p-5 bg-[#0B0F19] border border-[#1f2937] rounded-2xl mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl shrink-0">🚚</div>
                <div>
                  <h3 className="text-white font-bold text-lg">Community Hope Center</h3>
                  <p className="text-sm text-gray-500">Pick-up Volunteer assigned</p>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </button>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 space-y-8">
              <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-[#1f2937]" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shadow-[0_0_10px_#00C6FF]" />
                <div>
                  <h4 className="text-white font-bold text-lg">Donation Listed</h4>
                  <p className="text-sm text-gray-500">2:15 PM • Approved by AI</p>
                </div>
              </div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shadow-[0_0_10px_#00C6FF]" />
                <div>
                  <h4 className="text-white font-bold text-lg">NGO Auto-Assigned</h4>
                  <p className="text-sm text-gray-500">2:18 PM • Community Hope Center accepted</p>
                </div>
              </div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="relative w-3 h-3 mt-1.5">
                  <div className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
                  <div className="relative rounded-full w-full h-full bg-success shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Out for Pickup</h4>
                  <p className="text-sm text-success font-medium">2:31 PM • Driver is 2.3 km away</p>
                </div>
              </div>

              <div className="relative z-10 flex items-start gap-6 opacity-40 grayscale">
                <div className="w-3 h-3 rounded-full bg-gray-500 mt-1.5" />
                <div>
                  <h4 className="text-gray-300 font-bold text-lg">Picked Up</h4>
                  <p className="text-sm text-gray-400">Awaiting arrival</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
