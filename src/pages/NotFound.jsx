import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="heading-font text-5xl font-bold text-primary">404</div>
            <p className="mt-2 text-text-secondary">Page not found</p>
            <Link to="/" className="mt-4 bg-primary text-white rounded px-4 py-2">Go Home</Link>
        </div>
    );
}


