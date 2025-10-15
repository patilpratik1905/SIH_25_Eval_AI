import React from 'react';

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen grid md:grid-cols-2 bg-gradient-to-br from-primary/5 to-info/5">
            <div className="hidden md:flex flex-col items-center justify-center p-10">
                <div className="w-16 h-16 rounded-lg bg-primary mb-4" />
                <h1 className="heading-font text-2xl font-semibold mb-2 text-primary">NaCCER</h1>
                <p className="text-text-secondary max-w-sm text-center">
                    AI-based R&D Proposal Auto-Evaluation for the coal and energy sector.
                </p>
            </div>
            <div className="flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}


