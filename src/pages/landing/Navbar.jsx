
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ showToast }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold gradient-text">ZapTool</span>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <Link to="/auth">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Sign In
              </Button>
            </Link>
            <Link to="/auth?mode=signup">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-effect"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <Link to="/auth" className="w-full block">
              <Button variant="outline" className="w-full text-white border-white">
                Sign In
              </Button>
            </Link>
            <Link to="/auth?mode=signup" className="w-full block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
