import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FormState = {
  userFirstName: string | null;
  userLastName: string | null;
  userDepartment: string | null;
  userPosition: string | null;
  setFormStore: (
    data: { 
        firstName: string; 
        lastName: string;
        department: string;
        position: string }
) => void;
  clearFormStore: () => void;
};

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      userFirstName: null,
      userLastName: null,
      userDepartment: null,
      userPosition: null,
      setFormStore: ({ firstName, lastName, department, position }) => set({ 
        userFirstName: firstName,
        userLastName: lastName, 
        userDepartment: department,
        userPosition: position
    }),
      clearFormStore: () => set({ 
        userFirstName: null,
        userLastName: null, 
        userDepartment: null,
        userPosition: null }),
    }),
    {
      name: 'form-values-storage',
    }
  )
);