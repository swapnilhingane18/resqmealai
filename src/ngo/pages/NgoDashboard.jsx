import { motion } from 'framer-motion';
import StatsCard from '../../components/StatsCard';

const availableFood = [
  { id: 1, name: 'Fresh Organic Produce', qty: '12 kg', location: 'Downtown Market', urgency: 'High', time: '10 mins ago' },
  { id: 2, name: 'Artisan Bread Loaves', qty: '30 units', location: 'Westside Bakery', urgency: 'Medium', time: '1 hour ago' },
  { id: 3, name: 'Cooked Base Gravy', qty: '5 liters', location: 'Central Kitchen', urgency: 'Low', time: '3 hours ago' },
];

const urgencyColors = {
  High: 'bg-red-500/10 text-red-500 border-red-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  Low: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
};

export default function NgoDashboard() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            NGO <span className="text-primary">Command Center</span>
          </h1>
          <p className="mt-2 text-gray-400 max-w-2xl">
            Monitor incoming surplus food donations and coordinate real-time rescue operations.
          </p>
        </motion.div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <StatsCard index={0} title="Meals Distributed" value="1,204" icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>} />
          <StatsCard index={1} title="Active Pickups" value="3" icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>} />
          <StatsCard index={2} title="Available Batches" value="14" icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>} />
        </div>

        {/* Live Availability Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse shadow-[0_0_10px_#10B981]" />
              Live Available Food
            </h2>
            <button className="text-sm text-primary font-medium hover:text-white transition-colors">View Map</button>
          </div>

          <div className="space-y-4 relative z-10">
            {availableFood.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-[#0B0F19] border border-[#1f2937] hover:border-primary/30 transition-all cursor-pointer hover:shadow-[0_4px_20px_-10px_rgba(0,198,255,0.2)] gap-4"
              >
                <div className="flex items-center gap-5">
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${urgencyColors[item.urgency].split(' ')[0]} ${urgencyColors[item.urgency].split(' ')[2]}`}>
                    <svg className={`w-6 h-6 ${urgencyColors[item.urgency].split(' ')[1]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-primary transition-colors">{item.name}</h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-400">
                      <span className="font-mono text-gray-300">{item.qty}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                        {item.location}
                      </span>
                      <span>•</span>
                      <span>Posted {item.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center sm:justify-end gap-4 sm:w-1/4">
                  <div className={`px-2.5 py-1 rounded-md text-[10px] font-bold border uppercase tracking-wider backdrop-blur ${urgencyColors[item.urgency]}`}>
                    {item.urgency} Urgency
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
