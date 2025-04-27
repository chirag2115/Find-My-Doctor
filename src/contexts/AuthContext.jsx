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

  const login = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password); // ✅ fixed
      setIsLoggedIn(true);
      return session;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setIsLoggedIn(false);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  useEffect(() => {
    checkLogin(); // Check login on mount
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
