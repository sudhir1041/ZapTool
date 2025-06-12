
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = ({ showToast }) => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center scroll-reveal">
      <motion.div
        className="glass-effect p-12 rounded-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of companies already using ZapTool to streamline their operations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/auth?mode=signup">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 pulse-glow"
            >
              Start Your Free Trial
            </Button>
          </Link>
          <Button 
            onClick={() => showToast("Contact form coming soon!")}
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4"
          >
            Contact Sales
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
