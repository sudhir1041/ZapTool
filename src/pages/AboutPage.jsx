import React from 'react';
import Navbar from './landing/Navbar';
import Footer from './landing/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About ZapTool</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg mb-6">
              ZapTool is a cutting-edge technology company dedicated to providing innovative solutions
              that empower businesses and individuals to achieve their goals efficiently and effectively.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              Our mission is to simplify complex processes through intelligent automation and
              user-friendly tools, making technology accessible to everyone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <div className="grid gap-6">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Automation Solutions</h3>
                <p>We develop powerful automation tools that streamline your workflow and boost productivity.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Integration Services</h3>
                <p>Our platform seamlessly integrates with your existing tools and systems.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
                <p>We create tailored solutions to meet your specific business needs.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;