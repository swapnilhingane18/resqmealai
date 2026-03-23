import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DonorDashboard from './donor/pages/DonorDashboard';
import UploadFood from './donor/pages/UploadFood';
import Impact from './donor/pages/Impact';
import NgoDashboard from './ngo/pages/NgoDashboard';
import AvailableFood from './ngo/pages/AvailableFood';
import PickupTracking from './ngo/pages/PickupTracking';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* Donor Routes */}
          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/donor/upload" element={<UploadFood />} />
          <Route path="/donor/impact" element={<Impact />} />
          
          {/* NGO Routes */}
          <Route path="/ngo/dashboard" element={<NgoDashboard />} />
          <Route path="/ngo/available" element={<AvailableFood />} />
          <Route path="/ngo/tracking" element={<PickupTracking />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
