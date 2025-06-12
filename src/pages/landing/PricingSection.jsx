
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlansData = [
  {
    name: "Starter",
    price: "$29",
    priceAmount: 2900,
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Core features"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    priceAmount: 7900,
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "All features",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    priceAmount: 19900,
    period: "/month",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Custom analytics",
      "24/7 phone support",
      "All features",
      "Custom integrations",
      "Dedicated account manager"
    ],
    popular: false
  }
];

const PricingSection = ({ showToast, handlePurchase }) => (
  <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Simple Pricing
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlansData.map((plan, index) => (
          <motion.div
            key={index}
            className={`glass-effect p-8 rounded-2xl relative hover:scale-105 transition-transform duration-300 scroll-reveal flex flex-col ${
              plan.popular ? 'ring-2 ring-blue-400' : ''
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-4 h-12">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-300 ml-1">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            {handlePurchase ? (
              <Button 
                onClick={() => handlePurchase(plan)}
                className={`w-full mt-auto ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Choose Plan
              </Button>
            ) : (
              <Link to="/auth?mode=signup" className="w-full block mt-auto">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Button>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
