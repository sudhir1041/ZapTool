
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Clock, 
  Bot,
  Database,
} from 'lucide-react';

const featuresData = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "WhatsApp Integration",
    description: "Seamlessly connect with customers through WhatsApp Business API integration"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Advanced CRM",
    description: "Comprehensive customer management with detailed interaction history"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Campaign Analytics",
    description: "Track campaign performance with detailed metrics and insights"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Smart Automation",
    description: "Automate responses and campaigns with intelligent workflows"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Lead Management",
    description: "Efficiently track and nurture leads through your sales pipeline"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Scheduled Messaging",
    description: "Plan and schedule your campaigns for optimal engagement"
  }
];

const FeaturesSection = () => (
  <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Powerful CRM & WhatsApp Tools
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Everything you need to manage customers and drive engagement through WhatsApp
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
