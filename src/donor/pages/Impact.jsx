import { motion } from 'framer-motion';

export default function Impact() {
  const history = [
    { id: '#RM-84920', date: 'Today, 2:15 PM', items: '20 Loaves Bakery Bread', ngo: 'Community Hope Center', status: 'In Transit' },
    { id: '#RM-84919', date: 'Yesterday, 6:30 PM', items: '15 Meals (Rice & Curry)', ngo: 'Urban Shelter NGO', status: 'Completed' },
    { id: '#RM-84882', date: 'Mon, 10:00 AM', items: '30 kg Fresh Produce', ngo: 'Green Earth Pantry', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl font-black text-white tracking-tight">Your Impact & History</h1>
          <p className="mt-3 text-lg text-gray-500 font-medium">Review your lifetime rescue stats and past donations.</p>
        </div>

        {/* Minimal Macro Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111827] border border-[#1f2937] px-8 py-6 rounded-3xl"
          >
            <span className="text-gray-400 font-bold uppercase tracking-wide text-sm">Meals Saved</span>
            <h2 className="text-5xl font-black text-white mt-2">684</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#111827] border border-[#1f2937] px-8 py-6 rounded-3xl"
          >
            <span className="text-gray-400 font-bold uppercase tracking-wide text-sm">CO₂ Prevented (kg)</span>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">855</h2>
          </motion.div>
        </div>

        <hr className="border-t border-white/10 my-10" />

        {/* Minimal History List */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Past Donations</h3>
          <div className="space-y-4">
            {history.map((record, i) => (
              <motion.div 
                key={record.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-primary/20 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-white font-bold">{record.items}</h4>
                    <span className="text-xs text-gray-500 font-bold bg-[#0B0F19] px-2 py-0.5 rounded-md border border-[#1f2937]">{record.id}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{record.date} • {record.ngo}</p>
                </div>
                
                <div className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  record.status === 'Completed' 
                    ? 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                    : 'bg-primary/10 text-primary border border-primary/20 animate-pulse'
                }`}>
                  {record.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
