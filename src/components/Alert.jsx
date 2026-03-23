import { motion } from 'framer-motion';

export default function Alert({ title, message, type = 'danger' }) {
  const styles = {
    danger: 'bg-red-500/10 border-red-500/20 text-red-500',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500',
    success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
  };

  const icons = {
    danger: (
      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 p-4 rounded-xl border ${styles[type]} backdrop-blur-md shadow-lg`}
    >
      <div className="shrink-0 mt-0.5">{icons[type] || icons.warning}</div>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        {message && <p className="text-xs opacity-90 mt-1 leading-relaxed">{message}</p>}
      </div>
    </motion.div>
  );
}
