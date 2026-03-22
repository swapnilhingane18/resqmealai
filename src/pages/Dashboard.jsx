import StatsCard from '../components/StatsCard';

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
  Delivered: 'text-success bg-success/10',
  'Picked Up': 'text-primary bg-primary/10',
  Expired: 'text-danger bg-danger/10',
};

const urgencyColors = {
  High: 'text-danger bg-danger/10',
  Medium: 'text-warning bg-warning/10',
  Low: 'text-success bg-success/10',
};

export default function Dashboard() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Your <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="mt-3 text-text-secondary">Track your donations, impact, and incoming requests.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <StatsCard
            title="Total Donations"
            value="47"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>}
          />
          <StatsCard
            title="Meals Delivered"
            value="1280"
            suffix="+"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatsCard
            title="NGOs Connected"
            value="12"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>}
          />
          <StatsCard
            title="Success Rate"
            value="94"
            suffix="%"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>}
          />
        </div>

        {/* Donation History */}
        <div className="glass-card rounded-2xl p-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
                {donationHistory.map((item) => (
                  <tr key={item.id} className="border-b border-border/50 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 text-text-primary font-medium">{item.food}</td>
                    <td className="py-3.5 px-4 text-text-secondary">{item.qty}</td>
                    <td className="py-3.5 px-4 text-text-secondary hidden sm:table-cell">{item.date}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-text-secondary hidden md:table-cell">{item.ngo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Requests */}
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-xl font-bold text-text-primary mb-6">Active Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {requests.map((req) => (
              <div key={req.id} className="p-5 rounded-xl bg-dark-bg/50 border border-border hover:border-primary/20 transition-all space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-text-primary">{req.ngo}</h3>
                  <span className={`px-2 py-0.5 rounded-lg text-xs font-semibold ${urgencyColors[req.urgency]}`}>
                    {req.urgency}
                  </span>
                </div>
                <div className="space-y-1.5 text-sm text-text-secondary">
                  <p>Type: {req.type}</p>
                  <p>Qty: {req.qty}</p>
                  <p>📍 {req.location}</p>
                </div>
                <button className="w-full py-2 rounded-xl text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  Accept Request
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
