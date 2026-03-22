import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <motion.main 
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="pt-16"
      >
        <Outlet />
      </motion.main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="w-4 h-4 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold gradient-text">ResQMeal</span>
            </div>
            <p className="text-xs text-text-muted">© 2026 ResQMeal. Reducing food waste with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
