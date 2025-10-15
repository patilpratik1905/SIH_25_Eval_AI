import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';

export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-background-primary text-text-primary">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3 lg:col-span-3">
                    <Sidebar />
                </div>
                <div className="col-span-12 md:col-span-9 lg:col-span-9">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}


