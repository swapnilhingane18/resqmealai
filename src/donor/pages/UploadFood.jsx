import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function UploadFood() {
  const [formData, setFormData] = useState({ name: '', quantity: '', image: null });
  const [mode, setMode] = useState('form'); // 'form' | 'scanning' | 'assigned'
  const [scanText, setScanText] = useState('Analyzing food condition...');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMode('scanning');
  };

  useEffect(() => {
    if (mode === 'scanning') {
      const t1 = setTimeout(() => setScanText('Checking freshness & expiry...'), 1000);
      const t2 = setTimeout(() => setScanText('Finding best NGO based on Distance & Capacity...'), 2000);
      const t3 = setTimeout(() => setMode('assigned'), 3500);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [mode]);

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-6">
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-white tracking-tight">Log New Donation</h1>
          <p className="mt-3 text-lg text-gray-500 font-medium">Upload surplus food for instant AI routing.</p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Form */}
            {mode === 'form' && (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#111827] border border-[#1f2937] p-8 sm:p-10 rounded-3xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Food Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 20 Loaves of Bakery Bread"
                      className="w-full bg-[#0B0F19] border border-[#1f2937] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-primary transition-colors font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Quantity / Size</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 5 kg, 20 servings"
                      className="w-full bg-[#0B0F19] border border-[#1f2937] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-primary transition-colors font-medium"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Food Image</label>
                    <div className="w-full bg-[#0B0F19] border-2 border-dashed border-[#1f2937] rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-white/5 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                      <p className="text-gray-400 font-bold mb-1">Click to upload photo</p>
                      <p className="text-xs text-gray-500 font-medium tracking-wide">Max 5MB • JPG, PNG</p>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 mt-4 rounded-xl font-black text-[#0B0F19] shadow-lg shadow-primary/20 bg-primary hover:bg-secondary transition-colors uppercase tracking-wider text-sm"
                  >
                    Submit & Auto-Route
                  </button>
                </form>
              </motion.div>
            )}

            {/* Step 2: AI Scanning Overlay */}
            {mode === 'scanning' && (
              <motion.div 
                key="scanning"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="bg-[#111827] border border-primary/30 p-12 rounded-3xl flex flex-col items-center justify-center text-center min-h-[400px] overflow-hidden relative shadow-[0_0_50px_rgba(0,198,255,0.1)]"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-3xl animate-pulse" />
                
                <div className="relative z-10 w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping" />
                  <div className="absolute w-12 h-12 bg-primary/40 rounded-full pointer-events-none" />
                  <svg className="absolute w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>

                <div className="relative z-10 w-full max-w-sm">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={scanText}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-lg font-bold text-white mb-6"
                    >
                      {scanText}
                    </motion.p>
                  </AnimatePresence>
                  
                  <div className="w-full h-2 bg-[#0B0F19] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3.5, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-[#00C6FF] to-[#22D3EE] rounded-full shadow-[0_0_10px_#00C6FF]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Assignment Result */}
            {mode === 'assigned' && (
              <motion.div 
                key="assigned"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-b from-[#111827] to-[#0B0F19] border border-success/30 p-10 sm:p-12 rounded-3xl text-center shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-success/10 rounded-full blur-[80px]" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto rounded-full bg-success/20 flex items-center justify-center text-success mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Best NGO matched successfully!</h2>
                  <p className="text-gray-400 font-medium mb-10">Your donation has been auto-routed for immediate pickup.</p>
                  
                  <div className="bg-[#111827] border border-[#1f2937] p-6 rounded-2xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-xl shrink-0">🤝</div>
                      <div>
                        <h3 className="text-white font-bold tracking-wide">Community Hope Center</h3>
                        <p className="text-sm text-gray-500 font-medium">Auto-accepted via AI mapping</p>
                      </div>
                    </div>
                    <div className="text-center sm:text-right">
                      <div className="text-2xl font-black text-white">14 min</div>
                      <p className="text-sm text-success font-bold uppercase tracking-wider">2.3 km away</p>
                    </div>
                  </div>

                  <Link to="/donor/tracking">
                    <button className="w-full py-4 rounded-xl font-black text-[#0B0F19] shadow-lg shadow-success/20 bg-success hover:bg-emerald-400 transition-colors uppercase tracking-wider text-sm">
                      Track Live Pickup →
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
