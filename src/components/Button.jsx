import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-dark-bg',
    secondary: 'bg-dark-card text-text-primary border border-border hover:border-primary/50 hover:bg-dark-card-hover',
    outline: 'bg-transparent text-primary border border-primary/40 hover:bg-primary/10 hover:border-primary',
  };

  return (
    <motion.button 
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03, boxShadow: variant === 'primary' ? '0 0 20px rgba(0, 198, 255, 0.4)' : 'none' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
