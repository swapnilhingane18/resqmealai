import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AIInsightsCard({ freshness = 87, riskLevel = 'Low', timeRemaining = '4h 30m' }) {
  const [displayFreshness, setDisplayFreshness] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = freshness / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= freshness) {
        setDisplayFreshness(freshness);
        clearInterval(timer);
      } else {
        setDisplayFreshness(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [freshness]);

  const riskColors = {
    Low: { text: 'text-success', bg: 'bg-success', bar: 'bg-success' },
    Medium: { text: 'text-warning', bg: 'bg-warning', bar: 'bg-warning' },
    High: { text: 'text-danger', bg: 'bg-danger', bar: 'bg-danger' },
  };

  const risk = riskColors[riskLevel] || riskColors.Low;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      className="glass-card rounded-2xl p-6 space-y-6 border border-border"
    >
      <div className="flex items-center gap-3">
        <motion.div 
          initial={{ rotate: -90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.div>
        <div>
          <h3 className="text-lg font-bold text-text-primary">AI Insights</h3>
          <p className="text-xs text-text-muted">Powered by ML</p>
        </div>
      </div>

      {/* Freshness */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-text-secondary">Freshness Score</span>
          <span className="text-sm font-bold text-primary">{displayFreshness}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-dark-bg overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${freshness}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>
      </div>

      {/* Risk Level */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-between items-center p-4 rounded-xl bg-dark-bg/50 border border-border/50"
      >
        <div className="space-y-1">
          <span className="text-xs text-text-muted uppercase tracking-wider">Risk Level</span>
          <div className="flex items-center gap-2">
            <motion.div 
              animate={riskLevel === 'High' ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className={`w-2.5 h-2.5 rounded-full ${risk.bg}`} 
            />
            <span className={`text-sm font-semibold ${risk.text}`}>{riskLevel}</span>
          </div>
        </div>
        <div className="text-right space-y-1">
          <span className="text-xs text-text-muted uppercase tracking-wider">Time Left</span>
          <p className="text-sm font-semibold text-text-primary">{timeRemaining}</p>
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-2"
      >
        <span className="text-xs text-text-muted uppercase tracking-wider">Recommendation</span>
        <div className="flex items-start gap-2 p-3 rounded-xl bg-success/5 border border-success/10">
          <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-text-secondary leading-relaxed">
            Food is in good condition. Recommended for immediate distribution to nearby shelters.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
