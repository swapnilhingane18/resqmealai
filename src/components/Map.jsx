import { motion } from 'framer-motion';

export default function Map() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-primary/40 transition-all duration-500 overflow-hidden relative group"
    >
      <div className="absolute inset-0 group-hover:shadow-[0_0_40px_rgba(0,198,255,0.1)] transition-shadow duration-500 pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-[#1f2937]/50 bg-[#0B0F19]/50">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>
          Live Rescue Map
        </h3>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-success uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Map Mockup Area */}
      <div className="relative h-64 bg-[#0B0F19] overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(31, 41, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 41, 55, 0.4) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }} />
        
        {/* Radar sweep effect */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 origin-center"
          style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(0, 198, 255, 0.1) 100%)' }}
        />

        {/* Pulsing Nodes */}
        <motion.div className="absolute top-1/4 left-1/3" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2 }}>
          <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#00C6FF]" />
        </motion.div>

        <motion.div className="absolute bottom-1/3 right-1/4" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}>
          <div className="w-3 h-3 bg-success rounded-full shadow-[0_0_15px_#10B981]" />
        </motion.div>

        <motion.div className="absolute top-1/2 right-1/3" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}>
          <div className="w-3 h-3 bg-warning rounded-full shadow-[0_0_15px_#F59E0B]" />
        </motion.div>

        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 border-2 border-primary/50 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_#00C6FF]" />
          </div>
        </div>

        {/* UI Overlay */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-1">
          <div className="text-[10px] text-gray-500 font-mono">LAT: 19.0760 N</div>
          <div className="text-[10px] text-gray-500 font-mono">LNG: 72.8777 E</div>
        </div>
      </div>
    </motion.div>
  );
}
