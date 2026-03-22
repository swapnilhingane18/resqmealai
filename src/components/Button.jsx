export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-dark-bg hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-primary/40',
    secondary: 'bg-dark-card text-text-primary border border-border hover:border-primary/50 hover:bg-dark-card-hover',
    outline: 'bg-transparent text-primary border border-primary/40 hover:bg-primary/10 hover:border-primary',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
