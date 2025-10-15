import React from 'react';
import { useAuthStore } from '@context/AuthContext.jsx';

export default function Profile() {
    const { user } = useAuthStore();
    return (
        <div className="space-y-4">
            <h1 className="heading-font text-2xl font-semibold">Profile</h1>
            <div className="bg-white border border-border rounded p-4">
                <pre className="text-xs">{JSON.stringify(user, null, 2)}</pre>
            </div>
        </div>
    );
}


