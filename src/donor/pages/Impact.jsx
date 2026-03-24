import { motion } from 'framer-motion';
import StatsCard from '../../components/StatsCard';

const milestones = [
  { id: 1, title: 'First Drop', desc: 'Donated your first batch of food.', icon: '🌱', achieved: true },
  { id: 2, title: 'Century Club', desc: 'Saved over 100 meals.', icon: '🌟', achieved: true },
  { id: 3, title: 'Carbon Hero', desc: 'Prevented 1,000kg of CO₂.', icon: '🌍', achieved: false },
];

export default function Impact() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Impact Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative bg-[#111827] border border-[#1f2937] rounded-3xl p-8 sm:p-12 mb-10 overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 space-y-4 max-w-xl">
            <h2 className="text-sm font-black text-primary uppercase tracking-widest">Lifetime Impact</h2>
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter leading-[1.1]">
              You have fed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#22D3EE]">684 people</span>
            </h1>
            <p className="text-lg text-gray-500 font-medium pt-2">
              Your consistent contributions are making a tangible difference in reducing local food insecurity and carbon emissions.
            </p>
          </div>

          <div className="relative z-10 w-full sm:w-auto">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-[#1f2937] flex items-center justify-center relative bg-[#0B0F19]">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="92" cy="92" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-[#1f2937]" />
                <circle cx="92" cy="92" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="550" strokeDashoffset="150" className="text-primary transition-all duration-1000 ease-out" />
              </svg>
              <div className="text-center">
                <span className="text-3xl font-black text-white">Top 5%</span>
                <span className="block text-xs font-semibold text-primary uppercase tracking-wider mt-1">Of Donors</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Breakdown Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard index={0} title="Meals Rescued" value="684" icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>} />
          <StatsCard index={1} title="CO₂ Prevented" value="855" suffix="kg" icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>} />
          <StatsCard index={2} title="Water Saved" value="1.2" suffix="kL" icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 10.5b0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>} />
          <StatsCard index={3} title="NGOs Supported" value="4" icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" /></svg>} />
        </div>

        {/* Milestones */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-6">Milestones Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <motion.div 
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border transition-all ${
                  m.achieved 
                    ? 'bg-primary/5 border-primary/20 hover:border-primary/40' 
                    : 'bg-[#0B0F19] border-[#1f2937] opacity-60 grayscale'
                }`}
              >
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className={`text-lg font-bold mb-1 ${m.achieved ? 'text-white' : 'text-gray-500'}`}>{m.title}</h3>
                <p className="text-sm text-gray-400">{m.desc}</p>
                
                {m.achieved && (
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Unlocked
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
