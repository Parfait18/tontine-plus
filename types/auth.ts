export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  isVerified: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
}