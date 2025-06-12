
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { Zap, Eye, EyeOff } from 'lucide-react';

const AuthPage = ({ showToast }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, signup, user } = useAuth();
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('mode') === 'signup') {
      setIsLoginMode(false);
    } else {
      setIsLoginMode(true);
    }
  }, [location.search]);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isLoginMode && password !== confirmPassword) {
      showToast("Passwords do not match!", "Error");
      setIsLoading(false);
      return;
    }
    
    try {
      if (isLoginMode) {
        await login(email, password);
        showToast("Login successful! Redirecting...", "Success");
        navigate('/dashboard');
      } else {
        await signup(email, password);
        showToast("Signup successful! Please check your email to verify your account.", "Success");
        setIsLoginMode(true); 
      }
    } catch (error) {
      showToast(error.message || "An unexpected error occurred.", "Error");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    const newMode = !isLoginMode ? 'login' : 'signup';
    navigate(`/auth?mode=${newMode}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <motion.div 
        className="w-full max-w-md p-8 space-y-6 glass-effect rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <Zap className="w-12 h-12 text-blue-400" />
          <h1 className="text-3xl font-bold gradient-text">{isLoginMode ? 'Welcome Back!' : 'Create Account'}</h1>
          <p className="text-gray-300 text-center">
            {isLoginMode ? 'Sign in to continue to ZapTool.' : 'Join ZapTool today!'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="mt-1 bg-slate-800 border-slate-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <div className="relative">
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="mt-1 bg-slate-800 border-slate-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {!isLoginMode && (
            <div>
              <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
              <div className="relative">
                <Input 
                  id="confirmPassword" 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                  className="mt-1 bg-slate-800 border-slate-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
            disabled={isLoading}
          >
            {isLoading ? (isLoginMode ? 'Signing In...' : 'Creating Account...') : (isLoginMode ? 'Sign In' : 'Create Account')}
          </Button>
        </form>
        
        <p className="text-center text-gray-400">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}
          <Button variant="link" onClick={toggleMode} className="text-blue-400 hover:text-blue-300">
            {isLoginMode ? 'Sign Up' : 'Sign In'}
          </Button>
        </p>
        <p className="text-center text-xs text-gray-500">
          By continuing, you agree to ZapTool's <a href="#" onClick={(e) => {e.preventDefault(); showToast("Terms of Service page coming soon!")}} className="underline hover:text-gray-300">Terms of Service</a> and <a href="#" onClick={(e) => {e.preventDefault(); showToast("Privacy Policy page coming soon!")}} className="underline hover:text-gray-300">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
