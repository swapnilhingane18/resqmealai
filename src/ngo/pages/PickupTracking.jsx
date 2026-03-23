import { motion } from 'framer-motion';

const activePickups = [
  { id: 1, food: 'Fresh Organic Produce', qty: '12 kg', location: 'Downtown Market', donor: 'Green Grocery', status: 'Pending', eta: '15 mins' },
  { id: 2, food: 'Artisan Bread Loaves', qty: '30 units', location: 'Westside Bakery', donor: 'BakeHouse', status: 'Picked up', eta: 'Completed' },
];

export default function PickupTracking() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Active <span className="text-primary">Pickups</span>
          </h1>
          <p className="mt-2 text-gray-400 max-w-2xl">
            Track the status of your accepted rescue requests and coordinate logistics.
          </p>
        </motion.div>

        {/* Tracking List */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 sm:p-8">
          <div className="space-y-6">
            {activePickups.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-6 rounded-2xl bg-[#0B0F19] border border-[#1f2937] relative overflow-hidden gap-6"
              >
                {/* Status Indicator Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.status === 'Picked up' ? 'bg-success' : 'bg-warning animate-pulse'}`} />

                <div className="flex-1 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.food}</h3>
                    <div className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border backdrop-blur ${
                      item.status === 'Picked up' ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'
                    }`}>
                      {item.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="font-mono text-gray-300">{item.qty}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                      {item.location}
                    </span>
                    <span>•</span>
                    <span>{item.donor}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 pl-4 lg:pl-0 border-t lg:border-t-0 border-[#1f2937]/50 pt-4 lg:pt-0">
                  <div className="text-left lg:text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">ETA Details</p>
                    <p className={`text-sm font-bold ${item.status === 'Picked up' ? 'text-gray-400' : 'text-primary'}`}>{item.eta}</p>
                  </div>
                  
                  {item.status !== 'Picked up' && (
                    <button className="px-5 py-2.5 rounded-xl bg-[#1f2937] text-white text-sm font-medium hover:bg-primary hover:text-[#0B0F19] transition-all shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                      Mark as Picked Up
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
