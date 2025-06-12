
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "ZapTool transformed our workflow completely. We've seen a 300% increase in productivity!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1575383596664-30f4489f9786"
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "The best SaaS platform we've ever used. Incredible features and outstanding support.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, GrowthLab",
    content: "ZapTool's analytics helped us make data-driven decisions that boosted our revenue by 150%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join thousands of satisfied customers who've transformed their business with ZapTool
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300 scroll-reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <img 
                class="w-12 h-12 rounded-full mr-4 object-cover"
                alt={`${testimonial.name} profile photo`} src="https://images.unsplash.com/photo-1578390432942-d323db577792" />
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
