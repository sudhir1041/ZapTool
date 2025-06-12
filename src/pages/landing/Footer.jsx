
import React from 'react';
import { Zap } from 'lucide-react';

const Footer = ({ showToast }) => (
  <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold gradient-text">ZapTool</span>
          </div>
          <p className="text-gray-400">
            Revolutionizing business operations with cutting-edge SaaS solutions.
          </p>
        </div>
        
        <div>
          <span className="text-white font-semibold mb-4 block">Product</span>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">API</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Documentation</a></li>
          </ul>
        </div>
        
        <div>
          <span className="text-white font-semibold mb-4 block">Company</span>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <span className="text-white font-semibold mb-4 block">Support</span>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Status</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="hover:text-white transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ZapTool. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
