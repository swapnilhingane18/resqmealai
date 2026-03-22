import UploadForm from '../components/UploadForm';
import AIInsightsCard from '../components/AIInsightsCard';

export default function Donate() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Donate <span className="gradient-text">Surplus Food</span>
          </h1>
          <p className="mt-3 text-text-secondary max-w-xl mx-auto">
            Help reduce food waste by listing your surplus food. Our AI will analyze freshness and match with nearby NGOs.
          </p>
        </div>

        {/* Form + AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
