import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden text-gray-200 selection:bg-primary/30 selection:text-white">
      {/* Global Background Glow Layers */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="pt-24 pb-10"
        >
          <Outlet />
        </motion.main>

        {/* Footer */}
        <footer className="border-t border-[#1f2937] bg-[#0B0F19]/50 mt-20 relative z-10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00C6FF] to-[#22D3EE] flex items-center justify-center shadow-lg shadow-primary/20">
                  <svg className="w-4 h-4 text-[#0B0F19]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#22D3EE] tracking-tight">ResQMeal</span>
              </div>
              <p className="text-xs font-medium text-gray-500">© 2026 ResQMeal. Structured AI Dashboard.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
