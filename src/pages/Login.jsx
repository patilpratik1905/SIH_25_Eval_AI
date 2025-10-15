import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@context/AuthContext.jsx';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const { login } = useAuthStore();

    const onSubmit = async (values) => {
        const res = await login(values.email, values.password);
        if (res.ok) {
            toast.success('Welcome back!');
            const redirectTo = location.state?.from?.pathname || '/';
            navigate(redirectTo, { replace: true });
        } else {
            toast.error(res.error || 'Login failed');
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <h2 className="heading-font text-xl font-semibold mb-4">Sign in</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input {...register('email', { required: true })} type="email" className="w-full border border-border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="admin@naccer.gov.in" />
                </div>
                <div>
                    <label className="block text-sm mb-1">Password</label>
                    <input {...register('password', { required: true })} type="password" className="w-full border border-border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="admin123" />
                </div>
                <button type="submit" className="w-full bg-primary text-white rounded px-3 py-2 hover:bg-primary/90">Sign in</button>
                <p className="text-xs text-text-secondary">Demo: admin@naccer.gov.in / admin123</p>
            </form>
        </>
    );
}


