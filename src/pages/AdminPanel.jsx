import React from 'react';
import { useAuthStore } from '@context/AuthContext.jsx';

export default function AdminPanel() {
    const { user } = useAuthStore();
    const isAdmin = user?.role === 'admin';
    if (!isAdmin) {
        return <div className="text-error">Access denied. Admins only.</div>;
    }
    return (
        <div className="space-y-4">
            <h1 className="heading-font text-2xl font-semibold">Admin Panel</h1>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-border rounded p-4">Users (stub)</div>
                <div className="bg-white border border-border rounded p-4">Settings (stub)</div>
                <div className="bg-white border border-border rounded p-4">Audit Logs (stub)</div>
                <div className="bg-white border border-border rounded p-4">System Health (stub)</div>
            </div>
        </div>
    );
}


