import { motion } from 'framer-motion';
import UploadForm from '../components/UploadForm';
import AIInsightsCard from '../components/AIInsightsCard';

export default function Donate() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Donate <span className="text-primary">Surplus Food</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Help reduce food waste by listing your surplus food. Our AI will analyze freshness and match with nearby NGOs.
          </p>
        </motion.div>

        {/* Form + AI Insights (Animations are handled inside the components) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <UploadForm />
          </div>
          <div className="lg:col-span-2">
            <AIInsightsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
