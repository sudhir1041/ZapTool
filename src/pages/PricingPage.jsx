
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import PricingSection from '@/pages/landing/PricingSection';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabaseClient';

const PricingPage = ({ showToast }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlePurchase = (plan) => {
    showToast(
      "To finish the Razorpay setup, please provide your Razorpay Key ID in the next prompt! 🚀",
      "Almost there!"
    );
    // In a real scenario, you would use the Razorpay Key ID here to initiate payment.
    // Example of what the code would look like:
    /*
    const razorpayKeyId = "YOUR_RAZORPAY_KEY_ID"; // This would come from you
    
    if (!razorpayKeyId || razorpayKeyId === "YOUR_RAZORPAY_KEY_ID") {
       showToast("Razorpay Key ID is not configured.", "Configuration Error");
       return;
    }

    const options = {
      key: razorpayKeyId,
      amount: plan.priceAmount,
      currency: "USD",
      name: "ZapTool",
      description: `Purchase ${plan.name} Plan`,
      image: "/vite.svg",
      handler: async function (response) {
        try {
          const { data, error } = await supabase
            .from('subscriptions')
            .insert([
              { 
                user_id: user.id, 
                plan_name: plan.name,
                status: 'active',
                razorpay_payment_id: response.razorpay_payment_id,
              }
            ]);

          if (error) throw error;

          showToast("Payment successful! Your plan is now active.", "Success");
          navigate('/dashboard');
        } catch (error) {
          showToast(`Payment processing failed: ${error.message}`, "Error");
        }
      },
      prefill: {
        email: user.email,
      },
      theme: {
        color: "#3b82f6",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
    */
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="mb-8 text-gray-300 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <PricingSection showToast={showToast} handlePurchase={handlePurchase} />
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
