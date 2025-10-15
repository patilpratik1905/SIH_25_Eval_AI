import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUpload, FiFileText, FiDatabase, FiCompass, FiSliders } from 'react-icons/fi';

const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 ${isActive ? 'text-primary bg-primary/10' : 'text-text-secondary'
    }`;

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`border-r border-border ${collapsed ? 'w-16' : 'w-60'} transition-all duration-200 bg-white`}>
            <div className="p-3 border-b border-border">
                <button onClick={() => setCollapsed((v) => !v)} className="text-sm text-text-secondary">
                    {collapsed ? '→' : '←'}
                </button>
            </div>
            <nav className="p-3 space-y-1">
                <NavLink to="/" end className={linkClasses}>
                    <FiHome />
                    {!collapsed && <span>Dashboard</span>}
                </NavLink>
                <NavLink to="/upload" className={linkClasses}>
                    <FiUpload />
                    {!collapsed && <span>Upload Proposal</span>}
                </NavLink>
                <NavLink to="/proposals" className={linkClasses}>
                    <FiFileText />
                    {!collapsed && <span>All Proposals</span>}
                </NavLink>
                <NavLink to="/database" className={linkClasses}>
                    <FiDatabase />
                    {!collapsed && <span>Database Search</span>}
                </NavLink>
                <NavLink to="/reviewer" className={linkClasses}>
                    <FiCompass />
                    {!collapsed && <span>Reviewer Console</span>}
                </NavLink>
                <NavLink to="/rules" className={linkClasses}>
                    <FiSliders />
                    {!collapsed && <span>Manage Rules</span>}
                </NavLink>
            </nav>
        </aside>
    );
}


