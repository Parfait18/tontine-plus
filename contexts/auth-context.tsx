"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '@/types/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  initialize: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simulation d'une API d'authentification
const mockAuth = {
  login: async (email: string, password: string): Promise<User> => {
    // Simuler une requête API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === "admin@tontineplus.com" && password === "admin123") {
      return {
        id: "1",
        name: "Admin",
        email: "admin@tontineplus.com",
        role: "admin",
        isVerified: true
      };
    } else if (email === "user@tontineplus.com" && password === "user123") {
      return {
        id: "2",
        name: "Utilisateur",
        email: "user@tontineplus.com",
        role: "user",
        isVerified: true
      };
    }
    
    throw new Error("Identifiants invalides");
  },
  
  checkAuth: async (): Promise<User | null> => {
    // Vérifier le localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      return JSON.parse(savedUser);
    }
    return null;
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true
  });
  const router = useRouter();

  const initialize = async () => {
    try {
      const user = await mockAuth.checkAuth();
      setState({ user, isLoading: false });
    } catch (error) {
      setState({ user: null, isLoading: false });
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const user = await mockAuth.login(email, password);
      localStorage.setItem('user', JSON.stringify(user));
      setState({ user, isLoading: false });
      
      // Redirection basée sur le rôle
      if (user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setState({ user: null, isLoading: false });
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, initialize }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};