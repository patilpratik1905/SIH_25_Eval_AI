import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
    user: null,
    isAuthenticated: false,
    loading: true,
    login: async (email, password) => {
        await new Promise((r) => setTimeout(r, 400));
        if (email === 'admin@naccer.gov.in' && password === 'admin123') {
            const user = { id: 'USR-001', name: 'Admin User', email, role: 'admin' };
            localStorage.setItem('naccer_user', JSON.stringify(user));
            set({ user, isAuthenticated: true });
            return { ok: true, user };
        }
        return { ok: false, error: 'Invalid credentials' };
    },
    logout: () => {
        localStorage.removeItem('naccer_user');
        set({ user: null, isAuthenticated: false });
    },
    checkAuth: () => {
        const raw = localStorage.getItem('naccer_user');
        if (raw) {
            const user = JSON.parse(raw);
            set({ user, isAuthenticated: true, loading: false });
        } else {
            set({ user: null, isAuthenticated: false, loading: false });
        }
    },
}));


