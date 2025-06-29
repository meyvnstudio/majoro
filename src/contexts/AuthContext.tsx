import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Demo users
  const demoUsers = {
    'admin@homeo.com': {
      id: '1',
      name: 'Admin User',
      email: 'admin@homeo.com',
      role: 'admin' as const,
      isVerified: true,
      createdAt: new Date().toISOString()
    },
    'agency@homeo.com': {
      id: '2',
      name: 'Agency Manager',
      email: 'agency@homeo.com',
      role: 'agent' as const,
      agency: 'Luxury Real Estate',
      isVerified: true,
      createdAt: new Date().toISOString()
    },
    'agent@homeo.com': {
      id: '3',
      name: 'Real Estate Agent',
      email: 'agent@homeo.com',
      role: 'agent' as const,
      isVerified: true,
      createdAt: new Date().toISOString()
    },
    'client@homeo.com': {
      id: '4',
      name: 'Client User',
      email: 'client@homeo.com',
      role: 'client' as const,
      isVerified: true,
      createdAt: new Date().toISOString()
    }
  };

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Check demo users
      if (password === 'Demo123' && demoUsers[email as keyof typeof demoUsers]) {
        const demoUser = demoUsers[email as keyof typeof demoUsers];
        setUser(demoUser);
        localStorage.setItem('user', JSON.stringify(demoUser));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Partial<User>) => {
    setIsLoading(true);
    try {
      // Mock registration - replace with actual API call
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone,
        role: userData.role || 'client',
        isVerified: false,
        createdAt: new Date().toISOString()
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}