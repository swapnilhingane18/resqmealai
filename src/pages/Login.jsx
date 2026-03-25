import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (role) => {
    login(role);
    if (role === 'donor') {
      navigate('/donor/dashboard');
    } else {
      navigate('/ngo/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0B0F19]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Donor Login Card */}
        <div 
          onClick={() => handleLogin('donor')}
          className="bg-[#111827] border border-[#1f2937] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,198,255,0.15)] rounded-3xl p-10 cursor-pointer transition-all duration-300 group flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
            🥘
          </div>
          <h2 className="text-3xl font-black text-white mb-4">I am a Donor</h2>
          <p className="text-gray-400 font-medium">Have surplus food? Donate and let our AI route it to those in need instantly.</p>
          <div className="mt-8 px-6 py-2 rounded-full border border-primary/30 text-primary font-bold uppercase tracking-wider text-sm group-hover:bg-primary/10 transition-colors">
            Enter Donor Portal →
          </div>
        </div>

        {/* NGO Login Card */}
        <div 
          onClick={() => handleLogin('ngo')}
          className="bg-[#111827] border border-[#1f2937] hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] rounded-3xl p-10 cursor-pointer transition-all duration-300 group flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
            🤝
          </div>
          <h2 className="text-3xl font-black text-white mb-4">I am an NGO</h2>
          <p className="text-gray-400 font-medium">Receive real-time food rescue alerts matching your community's dietary needs.</p>
          <div className="mt-8 px-6 py-2 rounded-full border border-secondary/30 text-secondary font-bold uppercase tracking-wider text-sm group-hover:bg-secondary/10 transition-colors">
            Enter NGO Portal →
          </div>
        </div>
      </motion.div>
    </div>
  );
}
