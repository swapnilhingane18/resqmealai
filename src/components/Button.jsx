import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-[#00C6FF] to-[#22D3EE] text-[#0B0F19] shadow-[0_0_20px_rgba(0,198,255,0.2)] hover:shadow-[0_0_30px_rgba(0,198,255,0.4)] border border-transparent',
    secondary: 'bg-[#111827] text-white border border-[#1f2937] hover:border-primary/50 hover:bg-[#1f2937]/50',
    outline: 'bg-transparent text-primary border border-primary/40 hover:bg-primary/10 hover:border-primary',
  };

  return (
    <motion.button 
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
