import React from 'react';
import Navbar from './landing/Navbar';
import Footer from './landing/Footer';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Careers at ZapTool</h1>
          
          <div className="bg-card p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Coming Soon!</h2>
            <p className="text-xl mb-8">
              We're preparing to list exciting career opportunities at ZapTool.
              Check back soon to join our growing team!
            </p>
            
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
              <ul className="text-lg space-y-4">
                <li>🚀 Work on cutting-edge technology</li>
                <li>💡 Innovation-driven environment</li>
                <li>🌱 Opportunities for growth</li>
                <li>🤝 Collaborative team culture</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;