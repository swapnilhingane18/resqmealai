import { motion } from 'framer-motion';
import UploadForm from '../../components/UploadForm';
import AIInsightsCard from '../../components/AIInsightsCard';

export default function UploadFood() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Log New <span className="text-primary">Donation</span>
          </h1>
          <p className="mt-3 text-lg text-gray-500 font-medium max-w-2xl">
            Enter the details of your surplus food. Our AI engine will instantly scan freshness and auto-route to the best matching NGO.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
          <div className="w-full bg-[#111827] border border-[#1f2937] rounded-3xl p-6">
            <UploadForm />
          </div>
          <div className="w-full lg:sticky lg:top-28 bg-[#111827] border border-[#1f2937] rounded-3xl p-6">
            <AIInsightsCard freshness={87} riskLevel="Low" timeRemaining="4h 30m" />
          </div>
        </div>
      </div>
    </div>
  );
}
