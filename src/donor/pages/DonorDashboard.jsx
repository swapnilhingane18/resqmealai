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
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Donor <span className="text-primary">Overview</span>
            </h1>
            <p className="mt-3 text-lg text-gray-500 font-medium">Track your contributions, active pickups, and environmental impact.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
            title="CO₂ Prevented"
            value="855"
            suffix="kg"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>}
          />
          {/* Progress Indicator Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="bg-[#111827] border border-[#1f2937] hover:border-primary/30 rounded-2xl p-6 group transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next Milestone</p>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  ⭐
                </div>
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-2 tracking-tight">1k Meals Club</p>
                <div className="w-full bg-[#0B0F19] rounded-full h-2.5 mb-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" style={{ width: '68%' }} />
                </div>
                <p className="text-xs text-gray-500 font-medium">316 meals to go</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Recent Activity */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 sm:p-8 h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-sm font-black text-white/90 uppercase tracking-widest">Recent Donations</h2>
                <button className="text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-wider">View All</button>
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
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Impact</p>
                        <p className="text-sm font-bold text-success">{item.impact}</p>
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider shrink-0 ${
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

          {/* Right Column: Impact Summary & Density Additions */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Top Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 rounded-2xl p-5 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 blur-xl rounded-full" />
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🏆</span>
                <h3 className="text-sm font-bold text-white tracking-widest uppercase">Top Donation</h3>
              </div>
              <p className="text-gray-300 text-sm">30 units of Artisan Bread Loaves saved on <span className="text-white font-semibold">March 15</span>.</p>
            </motion.div>

            {/* Impact Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6"
            >
              <h2 className="text-sm font-black text-white/90 uppercase tracking-widest mb-6">Impact Summary</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#1f2937] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">684 Meals</h3>
                    <p className="text-xs text-gray-400">Total communities fed</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#1f2937] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">855 kg CO₂</h3>
                    <p className="text-xs text-gray-400">Emissions prevented</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Weekly Activity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6"
            >
              <h2 className="text-sm font-black text-white/90 uppercase tracking-widest mb-6">Weekly Activity</h2>
              <div className="flex items-end justify-between h-20 gap-2 px-1">
                {[4, 7, 3, 8, 5, 10, 6].map((h, i) => (
                  <div key={i} className="w-full bg-[#0B0F19] rounded-t-md relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h * 10}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className={`absolute bottom-0 w-full rounded-t-md ${i === 6 ? 'bg-primary' : 'bg-[#1f2937] group-hover:bg-primary/50'} transition-colors`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[10px] font-mono text-gray-500 uppercase">
                <span>Mon</span>
                <span className="text-primary font-bold">Sun</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
