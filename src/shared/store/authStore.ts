import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserType = {
  id: string;
  profile: {
    full_name?: string | null;
    avatar?: string | null;
  };
};

type AuthState = {
  accessToken: string | null;
  refreshToken?: string | null;
  user: UserType | null;
  setAuth: (
    data: { 
        token: string; 
        refreshToken?: string; 
        user: UserType }
) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      setAuth: ({ token, refreshToken, user }) => set({ 
        accessToken: token,
        refreshToken: refreshToken, 
        user: user 
    }),
      clearAuth: () => set({ 
        accessToken: null, 
        refreshToken: null, 
        user: null }),
    }),
    {
      name: 'authorization-storage',
    }
  )
);