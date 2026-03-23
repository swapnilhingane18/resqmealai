import { motion } from 'framer-motion';
import StatsCard from '../components/StatsCard';
import Map from '../components/Map';
import Alert from '../components/Alert';
import Button from '../components/Button';

const donationHistory = [
  { id: 1, food: 'Cooked Rice & Dal', qty: '15 servings', date: '2026-03-20', status: 'Delivered', ngo: 'FoodAid Foundation' },
  { id: 2, food: 'Fresh Vegetables', qty: '8 kg', date: '2026-03-18', status: 'Picked Up', ngo: 'Green Hope' },
  { id: 3, food: 'Bread Loaves', qty: '20 packs', date: '2026-03-15', status: 'Delivered', ngo: 'Meals for All' },
  { id: 4, food: 'Fruit Basket', qty: '5 kg', date: '2026-03-12', status: 'Expired', ngo: '—' },
];

const requests = [
  { id: 1, ngo: 'FoodAid Foundation', type: 'Cooked Meals', qty: '50 servings', urgency: 'High', location: 'Mumbai' },
  { id: 2, ngo: 'Green Hope', type: 'Raw Vegetables', qty: '20 kg', urgency: 'Medium', location: 'Delhi' },
  { id: 3, ngo: 'Meals for All', type: 'Packaged Food', qty: '100 units', urgency: 'Low', location: 'Bangalore' },
];

const statusColors = {
  Delivered: 'text-success bg-success/10 border border-success/20',
  'Picked Up': 'text-primary bg-primary/10 border border-primary/20',
  Expired: 'text-danger bg-danger/10 border border-danger/20',
};

const urgencyColors = {
  High: 'text-danger bg-danger/10 border border-danger/20',
  Medium: 'text-warning bg-warning/10 border border-warning/20',
  Low: 'text-success bg-success/10 border border-success/20',
};

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              System <span className="text-primary">Overview</span>
            </h1>
            <p className="mt-2 text-gray-400">Track real-time rescue operations, active metrics, and pending dispatches.</p>
          </div>
          <Button variant="primary" className="shrink-0 gap-2 px-5 py-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Run Emergency Rescue Scan
          </Button>
        </motion.div>

        {/* Global Alerts */}
        <div className="mb-8">
          <Alert 
            title="Critical Food Expiry Detected" 
            message="2 batches of Fresh Vegetables in Delhi are nearing expiry (ETA < 2h). Re-routing recommended." 
            type="danger" 
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard
            index={0}
            title="Total Donations"
            value="47"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>}
          />
          <StatsCard
            index={1}
            title="Meals Delivered"
            value="1280"
            suffix="+"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatsCard
            index={2}
            title="NGOs Connected"
            value="12"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>}
          />
          <StatsCard
            index={3}
            title="Success Rate"
            value="94"
            suffix="%"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>}
          />
        </div>

        {/* Map Section */}
        <div className="mb-10">
          <Map />
        </div>

        {/* Donation History Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6 mb-10 border border-border"
        >
          <h2 className="text-xl font-bold text-text-primary mb-6">Donation History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-text-muted font-medium">Food Item</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">Quantity</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium hidden sm:table-cell">Date</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-text-muted font-medium hidden md:table-cell">NGO</th>
                </tr>
              </thead>
              <tbody>
                {donationHistory.map((item, idx) => (
                  <motion.tr 
                    key={item.id} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="border-b border-border/50 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3.5 px-4 text-text-primary font-medium">{item.food}</td>
                    <td className="py-3.5 px-4 text-text-secondary">{item.qty}</td>
                    <td className="py-3.5 px-4 text-text-secondary hidden sm:table-cell">{item.date}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-text-secondary hidden md:table-cell">{item.ngo}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Active Requests */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6 border border-border"
        >
          <h2 className="text-xl font-bold text-text-primary mb-6">Active Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {requests.map((req, idx) => (
              <motion.div 
                key={req.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                whileHover={{ y: -5, borderColor: 'rgba(0, 198, 255, 0.3)', boxShadow: '0 5px 20px -5px rgba(0, 198, 255, 0.15)' }}
                className="p-5 rounded-xl bg-dark-bg/50 border border-border transition-colors space-y-3 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-text-primary">{req.ngo}</h3>
                  <motion.span 
                    animate={req.urgency === 'High' ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className={`px-2 py-0.5 rounded-lg text-xs font-semibold ${urgencyColors[req.urgency]}`}
                  >
                    {req.urgency}
                  </motion.span>
                </div>
                <div className="space-y-1.5 text-sm text-text-secondary">
                  <p>Type: {req.type}</p>
                  <p>Qty: {req.qty}</p>
                  <p>📍 {req.location}</p>
                </div>
                <motion.button 
                  whileHover={{ backgroundColor: 'rgba(0, 198, 255, 0.2)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-2 rounded-xl text-sm font-semibold bg-primary/10 text-primary transition-colors"
                >
                  Accept Request
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
