import { motion } from 'framer-motion';

const urgencyColors = {
  High: 'bg-red-500/10 text-red-500 border-red-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  Low: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
};

export default function FoodCard({ name, quantity, location, urgency = 'Medium', image, index = 0, eta = '45m', assignedTo = null }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 30px -10px rgba(0, 198, 255, 0.15)' }}
      className="group bg-[#111827] border border-[#1f2937] hover:border-primary/30 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0F19]/80 pointer-events-none z-10" />

      {/* Image / Radar Mock */}
      <div className="relative h-40 overflow-hidden bg-[#0B0F19]">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full relative" style={{ backgroundImage: 'linear-gradient(rgba(31, 41, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 41, 55, 0.3) 1px, transparent 1px)', backgroundSize: '1rem 1rem' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-primary/40 animate-ping" />
              </div>
            </div>
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            </svg>
          </div>
        )}
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between z-20">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B0F19]/80 backdrop-blur border border-[#1f2937] text-[10px] font-mono text-gray-300 uppercase tracking-wider">
            <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ETA: {eta}
          </div>
          <motion.div 
            animate={urgency === 'High' ? { scale: [1, 1.05, 1] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`px-2.5 py-1 rounded-md text-[10px] font-bold border uppercase tracking-wider backdrop-blur ${urgencyColors[urgency]}`}
          >
            {urgency}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-20">
        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{name}</h3>
        
        <div className="space-y-2 mt-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="font-mono text-xs">{quantity}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* Footer actions or assigned NGO */}
        <div className="pt-4 border-t border-[#1f2937]/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs text-cyan-500 font-medium">Ready for Dispatch</span>
          </div>
          <button className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
            Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
