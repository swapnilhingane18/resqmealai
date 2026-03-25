import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { label: 'Donation Listed', sub: 'Approved by AI', time: '2:15 PM' },
  { label: 'NGO Auto-Assigned', sub: 'Community Hope Center accepted', time: '2:18 PM' },
  { label: 'Out for Pickup', sub: 'Driver is approaching', time: '2:31 PM' },
  { label: 'Picked Up', sub: 'Food successfully rescued!', time: '' },
];

export default function Tracking() {
  const [activeStep, setActiveStep] = useState(1);
  const [eta, setEta] = useState(14);

  useEffect(() => {
    if (activeStep >= 3) return;

    const interval = setInterval(() => {
      setEta((prev) => Math.max(prev - 1, 0));
    }, 1000);

    const t1 = setTimeout(() => { setActiveStep(2); setEta(7); }, 4000);
    const t2 = setTimeout(() => { setActiveStep(3); setEta(0); }, 12000);

    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const statusLabel = steps[activeStep]?.label ?? '';
  const isComplete = activeStep === 3;

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Live Pickup Tracking</h1>
            <p className="mt-2 text-lg text-gray-500 font-medium">Order #RM-84920</p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div 
              key={statusLabel}
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={`px-4 py-2 border rounded-xl font-bold uppercase tracking-wider text-sm flex items-center gap-2 ${
                isComplete 
                  ? 'bg-primary/10 text-primary border-primary/20'
                  : 'bg-success/10 text-success border-success/20'
              }`}
            >
              {!isComplete && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
              )}
              {statusLabel}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Mock Map */}
          <div className="relative h-64 bg-[#0B0F19] w-full border-b border-[#1f2937] overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(31, 41, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 41, 55, 0.4) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111827] to-transparent z-10" />
            
            <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M50 150 Q 150 150, 200 100 T 350 50" fill="none" stroke="#22D3EE" strokeWidth="4" strokeDasharray="8 8" className={!isComplete ? "animate-[dash_1s_linear_infinite]" : ""} />
            </svg>
            <style>{`@keyframes dash { to { stroke-dashoffset: -16; } }`}</style>
            
            {!isComplete && (
              <motion.div 
                initial={{ left: '80%', top: '30%' }}
                animate={activeStep >= 2 ? { left: '15%', top: '72%' } : { left: '50%', top: '55%' }}
                transition={{ duration: 6, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute w-7 h-7 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-primary/20 shadow-[0_0_20px_rgba(0,198,255,0.6)]" />
                <div className="relative w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,198,255,0.8)]" />
              </motion.div>
            )}

            <div className="absolute top-[75%] left-[12%] w-8 h-8 rounded-full bg-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-lg z-20 border-2 border-primary">
              <span className="text-lg">📍</span>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            
            {/* ETA */}
            <div className="mb-10">
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={isComplete ? 'done' : eta}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`text-5xl font-black ${isComplete ? 'text-primary' : 'text-white'}`}
                >
                  {isComplete ? 'Delivered ✓' : `${eta} min`}
                </motion.h2>
              </AnimatePresence>
              {!isComplete && <p className="text-gray-400 font-medium text-lg mt-1">Estimated Arrival</p>}
            </div>

            {/* NGO */}
            <div className="flex items-center justify-between p-5 bg-[#0B0F19] border border-[#1f2937] rounded-2xl mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl shrink-0">🚚</div>
                <div>
                  <h3 className="text-white font-bold text-lg">Community Hope Center</h3>
                  <p className="text-sm text-gray-500">Pick-up Volunteer assigned</p>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </button>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-8">
              {/* Track line background */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#1f2937] rounded-full" />
              
              {/* Animated progress fill */}
              <motion.div 
                className="absolute left-[11px] top-2 w-[2px] rounded-full bg-gradient-to-b from-primary to-success shadow-[0_0_8px_rgba(0,198,255,0.5)]"
                initial={{ height: '0%' }}
                animate={{ height: activeStep === 0 ? '5%' : activeStep === 1 ? '33%' : activeStep === 2 ? '66%' : '95%' }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              />

              <div className="space-y-10">
                {steps.map((s, i) => {
                  const isReached = activeStep >= i;
                  const isCurrent = activeStep === i;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                      className="relative flex items-start gap-5"
                    >
                      {/* Dot */}
                      <div className="relative flex-shrink-0 mt-1">
                        {/* Outer glow ring for current step */}
                        {isCurrent && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className={`absolute -inset-2 rounded-full ${i < 3 ? 'bg-success/20' : 'bg-primary/20'}`}
                          />
                        )}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: i * 0.15, type: 'spring', stiffness: 300 }}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
                            isCurrent 
                              ? (i < 3 ? 'border-success bg-success/20 shadow-[0_0_16px_rgba(16,185,129,0.6)]' : 'border-primary bg-primary/20 shadow-[0_0_16px_rgba(0,198,255,0.6)]')
                              : isReached 
                                ? 'border-primary bg-primary shadow-[0_0_10px_rgba(0,198,255,0.4)]' 
                                : 'border-[#1f2937] bg-[#0B0F19]'
                          }`}
                        >
                          {isReached && !isCurrent && (
                            <motion.svg 
                              initial={{ scale: 0 }} 
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              className="w-3 h-3 text-[#0B0F19]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </motion.svg>
                          )}
                          {isCurrent && (
                            <motion.div
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                              className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-success' : 'bg-primary'}`}
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Text */}
                      <motion.div
                        animate={{ opacity: isReached ? 1 : 0.35 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                      >
                        <div className="flex items-center gap-3">
                          <h4 className={`font-bold text-lg transition-colors duration-500 ${
                            isCurrent ? 'text-white' : isReached ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {s.label}
                          </h4>
                          {isReached && s.time && (
                            <span className="text-xs text-gray-500 font-medium">{s.time}</span>
                          )}
                        </div>
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={isCurrent ? 'active' : 'default'}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.3 }}
                            className={`text-sm font-medium mt-0.5 ${
                              isCurrent 
                                ? (i < 3 ? 'text-success' : 'text-primary')
                                : 'text-gray-500'
                            }`}
                          >
                            {s.sub}
                          </motion.p>
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
