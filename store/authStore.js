import { create } from "zustand";

export const useAuthStore = create((set) => ({
    isOpen: false,
    isAuthenticated: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));