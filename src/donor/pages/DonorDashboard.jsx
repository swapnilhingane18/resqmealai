import { motion } from 'framer-motion';
import StatsCard from '../../components/StatsCard';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const recentDonations = [
  { id: 1, food: 'Fresh Organic Produce', qty: '12 kg', date: 'Today, 2:30 PM', status: 'In Transit', impact: '24 meals' },
  { id: 2, food: 'Artisan Bread Loaves', qty: '30 units', date: 'Yesterday', status: 'Delivered', impact: '30 meals' },
  { id: 3, food: 'Cooked Base Gravy', qty: '5 liters', date: 'Mar 18, 2026', status: 'Delivered', impact: '50 meals' },
];

export default function DonorDashboard() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Donor <span className="text-primary">Overview</span>
            </h1>
            <p className="mt-2 text-gray-400">Track your contributions, active pickups, and environmental impact.</p>
          </div>
          <Link to="/donor/upload">
            <Button variant="primary" className="shrink-0 gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Upload Food
            </Button>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <StatsCard
            index={0}
            title="Total Food Donated"
            value="342"
            suffix="kg"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>}
          />
          <StatsCard
            index={1}
            title="Meals Saved"
            value="684"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>}
          />
          <StatsCard
            index={2}
            title="CO₂ Emissions Prevented"
            value="855"
            suffix="kg"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>}
          />
        </div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Recent Donations</h2>
            <button className="text-sm text-primary hover:text-white transition-colors">View All</button>
          </div>

          <div className="space-y-4">
            {recentDonations.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-[#0B0F19] border border-[#1f2937] hover:border-primary/20 transition-colors gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.food}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.qty} • {item.date}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Estimated Impact</p>
                    <p className="text-sm font-bold text-success">{item.impact}</p>
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                    item.status === 'Delivered' 
                      ? 'bg-success/10 text-success border border-success/20' 
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}>
                    {item.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
