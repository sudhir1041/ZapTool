import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiSignup, apiLogin, apiMe } from '@/lib/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }
    apiMe(token)
      .then(setUser)
      .catch(() => localStorage.removeItem('token'))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    const data = await apiLogin(email, password).catch((err) => {
      setLoading(false);
      throw err;
    });
    localStorage.setItem('token', data.token);
    const userData = await apiMe(data.token);
    setUser(userData);
    setLoading(false);
  };

  const signup = async (email, password) => {
    setLoading(true);
    const data = await apiSignup(email, email, password).catch((err) => {
      setLoading(false);
      throw err;
    });
    localStorage.setItem('token', data.token);
    const userData = await apiMe(data.token);
    setUser(userData);
    setLoading(false);
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};