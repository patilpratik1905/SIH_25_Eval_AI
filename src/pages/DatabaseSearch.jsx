import React, { useMemo, useState } from 'react';
import { mockProposals } from '@data/mockData.js';

export default function DatabaseSearch() {
    const [q, setQ] = useState('');
    const [institution, setInstitution] = useState('All');
    const [year, setYear] = useState('All');
    const [domain, setDomain] = useState('All');
    const [status, setStatus] = useState('All');

    const institutions = useMemo(() => ['All', ...Array.from(new Set(mockProposals.map(p => p.institution)))], []);
    const years = useMemo(() => ['All', ...Array.from(new Set(mockProposals.map(p => (p.submittedDate || '2024-01-01').slice(0, 4))))], []);
    const domains = ['All', 'Mining Technology', 'Safety', 'Environment'];
    const statuses = ['All', 'pending', 'processing', 'evaluated', 'approved', 'rejected'];

    const filtered = mockProposals.filter(p => {
        const matchQ = !q || (p.title + p.id + p.institution).toLowerCase().includes(q.toLowerCase());
        const matchI = institution === 'All' || p.institution === institution;
        const matchY = year === 'All' || (p.submittedDate || '').startsWith(year);
        const matchD = domain === 'All' || p.category === domain;
        const matchS = status === 'All' || p.status === status;
        return matchQ && matchI && matchY && matchD && matchS;
    });

    return (
        <div className="space-y-4">
            <h1 className="heading-font text-2xl font-semibold">R&D Projects Database</h1>

            <div className="bg-white border border-border rounded p-4 grid md:grid-cols-5 gap-3">
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title/ID/institution" className="border border-border rounded px-3 py-2 md:col-span-2" />
                <select value={institution} onChange={(e) => setInstitution(e.target.value)} className="border border-border rounded px-3 py-2">
                    {institutions.map(i => <option key={i}>{i}</option>)}
                </select>
                <select value={year} onChange={(e) => setYear(e.target.value)} className="border border-border rounded px-3 py-2">
                    {years.map(y => <option key={y}>{y}</option>)}
                </select>
                <select value={domain} onChange={(e) => setDomain(e.target.value)} className="border border-border rounded px-3 py-2">
                    {domains.map(d => <option key={d}>{d}</option>)}
                </select>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-border rounded px-3 py-2">
                    {statuses.map(s => <option key={s}>{s}</option>)}
                </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((p) => (
                    <div key={p.id} className="bg-white border border-border rounded p-4">
                        <div className="text-sm text-text-secondary">{p.id} • {(p.submittedDate || '').slice(0, 4) || '2024'}</div>
                        <div className="font-semibold">{p.title}</div>
                        <div className="text-sm mt-1">{p.institution}</div>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                            <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">{p.category}</span>
                            <span className={`px-2 py-0.5 rounded ${p.status === 'approved' ? 'bg-success/10 text-success' : p.status === 'rejected' ? 'bg-error/10 text-error' : 'bg-warning/10 text-warning'}`}>{p.status}</span>
                            <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded">Similar to CIL‑2024‑033 0.68</span>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                            <button className="border border-border rounded px-2 py-1">Open</button>
                            <button className="border border-border rounded px-2 py-1">Compare</button>
                            <button className="border border-border rounded px-2 py-1">Mark Near‑Duplicate</button>
                            <button className="border border-border rounded px-2 py-1">Add to Evidence</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


