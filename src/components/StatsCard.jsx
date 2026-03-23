import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StatsCard({ title, value, icon, suffix = '', index = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 30px -10px rgba(0, 198, 255, 0.15)' }}
      className="bg-[#111827] border border-[#1f2937] hover:border-primary/30 rounded-2xl p-6 group transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
          <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-[#1f2937] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-4xl font-black text-white tracking-tight">
            {typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue}
            <span className="text-2xl text-primary ml-1">{suffix}</span>
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <svg className="w-3.5 h-3.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
            <p className="text-xs font-medium text-success">Live Tracking</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
