
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Settings, LogOut, Zap, Gem } from 'lucide-react';

const DashboardPage = ({ showToast }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      showToast("Logged out successfully!", "Success");
      navigate('/');
    } catch (error) {
      showToast(error.message || "Failed to log out.", "Error");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <motion.aside 
        className="w-64 p-6 space-y-6 glass-effect flex flex-col"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2 mb-10">
          <Zap className="w-10 h-10 text-blue-400" />
          <span className="text-3xl font-bold gradient-text">ZapTool</span>
        </div>
        <nav className="space-y-2 flex-grow">
          <Button variant="ghost" className="w-full justify-start text-lg text-gray-300 hover:text-white hover:bg-slate-700">
            <LayoutDashboard className="mr-3 h-6 w-6" /> Dashboard
          </Button>
          <Button variant="ghost" onClick={() => showToast()} className="w-full justify-start text-lg text-gray-300 hover:text-white hover:bg-slate-700">
            <Settings className="mr-3 h-6 w-6" /> Settings
          </Button>
        </nav>
        <div className="space-y-4">
          <Link to="/pricing">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg">
              <Gem className="mr-3 h-6 w-6" /> Upgrade Plan
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={handleLogout} 
            className="w-full text-white border-red-500 hover:bg-red-600 hover:text-white text-lg"
          >
            <LogOut className="mr-3 h-6 w-6" /> Logout
          </Button>
        </div>
      </motion.aside>

      <main className="flex-1 p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-2 gradient-text">Welcome to Your Dashboard</h1>
          {user && <p className="text-xl text-gray-300 mb-8">Hello, {user.email}!</p>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-3">Feature Card {i+1}</h2>
                <p className="text-gray-300 mb-4">
                  This is a placeholder for an awesome feature. Click the button below to see it in action (soon!).
                </p>
                <Button onClick={() => showToast()} className="bg-blue-600 hover:bg-blue-700">
                  Explore Feature
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-10 glass-effect p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">Your Activity Overview</h2>
            <p className="text-gray-300">
              This section will display your recent activity, key metrics, or important notifications. 
              Stay tuned for updates!
            </p>
            <img 
              class="mt-4 rounded-lg w-full h-64 object-cover" 
              alt="Abstract data visualization graph" src="https://images.unsplash.com/photo-1548230445-ca4ebd9755a8" />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;
