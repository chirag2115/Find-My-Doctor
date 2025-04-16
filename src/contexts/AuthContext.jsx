import { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../appwrite';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkLogin = async () => {
    try {
      await account.get();
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setIsLoggedIn(false); // Update immediately
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  useEffect(() => {
    checkLogin(); // Only once on mount
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
