
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({ showToast }) => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Revolutionary</span>
          <br />
          SaaS Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge tools that streamline workflows, 
          boost productivity, and scale effortlessly with your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/auth?mode=signup">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 pulse-glow"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button 
            onClick={() => showToast("Demo video coming soon!")}
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4"
          >
            <Play className="mr-2 w-5 h-5" /> Watch Demo
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 floating-animation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img 
          class="mx-auto rounded-2xl shadow-2xl glass-effect max-w-4xl w-full"
          alt="ZapTool dashboard interface showing analytics and workflow management" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
