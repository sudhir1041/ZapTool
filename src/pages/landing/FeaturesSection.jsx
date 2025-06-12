
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Rocket, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
} from 'lucide-react';

const featuresData = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Deep insights and real-time analytics to drive your business forward"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Seamless collaboration tools for teams of any size"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock support from our expert team"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Rapid Deployment",
    description: "Get up and running in minutes, not hours"
  }
];

const FeaturesSection = () => (
  <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Everything you need to supercharge your business operations and drive growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300 scroll-reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
