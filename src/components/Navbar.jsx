import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/donor/dashboard', label: 'Dashboard' },
  { path: '/donor/upload', label: 'Upload Food' },
  { path: '/donor/impact', label: 'Impact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/80 backdrop-blur-2xl border-b border-[#1f2937]/80 shadow-lg shadow-black/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20"
            >
              <svg className="w-5 h-5 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </motion.div>
            <span className="text-xl font-bold gradient-text">ResQMeal</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                >
                  <span className={`relative z-10 ${isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Login + Hamburger */}
          <div className="flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 198, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-dark-bg transition-colors"
            >
              Login
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-dark-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full mt-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-dark-bg">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
