import React, { useMemo } from 'react';
import { mockDashboardStats } from '@data/mockData.js';
import demoData from '@data/../demo/proposals.json';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Area,
    AreaChart,
    BarChart,
    Bar,
    Legend,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

export default function Dashboard() {
    const s = mockDashboardStats;
    const kpis = [
        { title: 'Proposals in Queue', value: s.pendingReview + s.underEvaluation },
        { title: 'Evaluated Today', value: 7 },
        { title: 'Avg Triage Time (hrs)', value: 6.2 },
        { title: 'Reviewer Agreement (%)', value: 84.3 },
        { title: 'Compliance Pass Rate (%)', value: 76.1 },
        { title: 'Novelty Alerts (#)', value: 12 },
        { title: 'Resubmission Rate (%)', value: 9.4 },
        { title: 'SLA <24h (%)', value: 68.0 },
    ];

    return (
        <div className="space-y-6">
            <h1 className="heading-font text-2xl font-semibold">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map((k) => (
                    <KpiCard key={k.title} title={k.title} value={k.value} />
                ))}
            </div>

            <ChartsGrid />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Panel title="Activity feed" className="lg:col-span-2">
                    <ActivityFeed />
                </Panel>
                <Panel title="Quick actions">
                    <div className="grid grid-cols-2 gap-3">
                        <QuickLink to="/upload" label="Upload Proposal" />
                        <QuickLink to="/proposals" label="Open Dossier List" />
                        <QuickLink to="/reviewer" label="Open Reviewer Console" />
                        <QuickLink to="/rules" label="Manage Rules" />
                    </div>
                </Panel>
            </div>
        </div>
    );
}

function KpiCard({ title, value }) {
    return (
        <div className="bg-white border border-border rounded p-4">
            <div className="text-xs text-text-secondary">{title}</div>
            <div className="mt-1 text-2xl font-semibold">{value}</div>
        </div>
    );
}

function Panel({ title, children, className = '' }) {
    return (
        <div className={`bg-white border border-border rounded p-4 ${className}`}>
            <div className="heading-font font-semibold mb-2">{title}</div>
            {children}
        </div>
    );
}

function ChartsGrid() {
    const weeks = useMemo(() => {
        // Build last 12 weeks synthetic from demoData dates
        const now = new Date();
        const data = Array.from({ length: 12 }).map((_, i) => {
            const d = new Date(now);
            d.setDate(now.getDate() - (11 - i) * 7);
            const week = `${d.getMonth() + 1}/${d.getDate()}`;
            return { week, total: Math.floor(8 + Math.random() * 12) };
        });
        return data;
    }, []);

    const mix = useMemo(() => {
        return weeks.map((w) => ({
            week: w.week,
            advance: Math.floor(Math.random() * 8),
            revise: Math.floor(Math.random() * 6),
            decline: Math.floor(Math.random() * 4),
        }));
    }, [weeks]);

    const scoreDist = useMemo(() => {
        const monthItems = demoData;
        const avg = (key) => Math.round(monthItems.reduce((a, b) => a + (b.scores?.[key] || 0), 0) / monthItems.length);
        return [
            { name: 'Novelty', value: avg('novelty'), color: '#7C3AED' },
            { name: 'Finance', value: avg('finance'), color: '#0EA5E9' },
            { name: 'Feasibility', value: avg('feasibility'), color: '#1E40AF' },
            { name: 'Alignment', value: avg('alignment'), color: '#14B8A6' },
        ];
    }, []);

    const budgetHeads = useMemo(() => {
        // Aggregate latest evaluated budgets (normalize to share)
        const heads = ['Manpower', 'Equipment', 'Travel', 'Consumables', 'Overheads'];
        const acc = Object.fromEntries(heads.map((h) => [h, 0]));
        demoData.forEach((p) => {
            (p.budgetCOA || []).forEach((row) => {
                acc[row.head] += row.amount;
            });
        });
        return heads.map((h) => ({ head: h, amount: acc[h] }));
    }, []);

    const heatmap = useMemo(() => {
        const bands = ['0.4–0.6', '0.6–0.8', '0.8–1.0'];
        // Random demo based on similar.sim
        const counts = { '0.4–0.6': 0, '0.6–0.8': 0, '0.8–1.0': 0 };
        demoData.forEach((p) => {
            (p.similar || []).forEach((s) => {
                if (s.sim < 0.6) counts['0.4–0.6']++;
                else if (s.sim < 0.8) counts['0.6–0.8']++;
                else counts['0.8–1.0']++;
            });
        });
        return bands.map((b) => ({ band: b, count: counts[b] }));
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Panel title="Proposals per week (12w)">
                <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={weeks} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1E40AF" stopOpacity={0.25} />
                                    <stop offset="100%" stopColor="#93C5FD" stopOpacity={0.2} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid stroke="#E5E7EB" vertical={false} />
                            <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                            <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                            <Tooltip />
                            <Area type="monotone" dataKey="total" stroke="#1E40AF" strokeWidth={2} fill="url(#lineFill)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Panel>

            <Panel title="Recommendation mix by week">
                <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={mix} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                            <CartesianGrid stroke="#E5E7EB" vertical={false} />
                            <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                            <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="advance" stackId="a" fill="#16A34A" name="Advance" />
                            <Bar dataKey="revise" stackId="a" fill="#F59E0B" name="Revise" />
                            <Bar dataKey="decline" stackId="a" fill="#DC2626" name="Decline" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Panel>

            <Panel title="Score distribution (avg this month)">
                <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Tooltip />
                            <Pie data={scoreDist} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                                {scoreDist.map((s, i) => (
                                    <Cell key={i} fill={s.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </Panel>

            <Panel title="Budget heads distribution (COA)">
                <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={budgetHeads} layout="vertical" margin={{ top: 8, right: 12, left: 20, bottom: 0 }}>
                            <CartesianGrid stroke="#E5E7EB" />
                            <XAxis type="number" stroke="#9CA3AF" />
                            <YAxis type="category" dataKey="head" stroke="#9CA3AF" />
                            <Tooltip />
                            <Bar dataKey="amount" fill="#0EA5E9" radius={[4, 4, 4, 4]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Panel>

            <Panel title="Similarity density (novelty bands)">
                <div className="h-56 flex items-end gap-3 px-2">
                    {heatmap.map((h) => (
                        <div key={h.band} className="flex-1">
                            <div className="text-center text-xs text-text-secondary mb-1">{h.band}</div>
                            <div className="w-full bg-blue-200 rounded h-2" />
                            <div className="mt-1 rounded bg-violet-600/60" style={{ height: `${10 + h.count * 16}px` }} />
                            <div className="text-center text-xs mt-1">{h.count}</div>
                        </div>
                    ))}
                </div>
            </Panel>
        </div>
    );
}

function ActivityFeed() {
    const events = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        text: [
            'Proposal uploaded',
            'Document parsed',
            'Scores generated',
            'Manual override',
            'Report exported',
        ][i % 5],
        time: `${Math.floor(Math.random() * 59) + 1}m ago`,
    }));
    return (
        <ul className="space-y-2">
            {events.map((e) => (
                <li key={e.id} className="flex items-center justify-between text-sm">
                    <span>{e.text}</span>
                    <span className="text-text-secondary">{e.time}</span>
                </li>
            ))}
        </ul>
    );
}

import { Link } from 'react-router-dom';
function QuickLink({ to, label }) {
    return (
        <Link to={to} className="text-primary hover:underline text-sm">
            {label}
        </Link>
    );
}


