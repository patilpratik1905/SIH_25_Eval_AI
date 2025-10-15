import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-border">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary" />
                    <span className="heading-font font-semibold">NaCCER</span>
                </Link>
                <div className="flex items-center gap-4">
                    <button className="relative text-text-secondary hover:text-primary">
                        <FiBell size={20} />
                        <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full px-1">3</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-secondary/20" />
                        <div className="text-sm">
                            <div className="font-medium">Guest</div>
                            <div className="text-text-secondary">viewer</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


