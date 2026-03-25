import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import DonorDashboard from './donor/pages/DonorDashboard';
import UploadFood from './donor/pages/UploadFood';
import Impact from './donor/pages/Impact';
import NgoDashboard from './ngo/pages/NgoDashboard';
import AvailableFood from './ngo/pages/AvailableFood';
import PickupTracking from './ngo/pages/PickupTracking';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRole && user.role !== allowedRole) return <Navigate to="/" replace />;
  
  return children;
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Donor Routes */}
          <Route path="/donor/dashboard" element={<ProtectedRoute allowedRole="donor"><DonorDashboard /></ProtectedRoute>} />
          <Route path="/donor/upload" element={<ProtectedRoute allowedRole="donor"><UploadFood /></ProtectedRoute>} />
          <Route path="/donor/impact" element={<ProtectedRoute allowedRole="donor"><Impact /></ProtectedRoute>} />
          
          {/* NGO Routes */}
          <Route path="/ngo/dashboard" element={<ProtectedRoute allowedRole="ngo"><NgoDashboard /></ProtectedRoute>} />
          <Route path="/ngo/available" element={<ProtectedRoute allowedRole="ngo"><AvailableFood /></ProtectedRoute>} />
          <Route path="/ngo/tracking" element={<ProtectedRoute allowedRole="ngo"><PickupTracking /></ProtectedRoute>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
