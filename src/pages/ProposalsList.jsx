import React from 'react';
import { mockProposals } from '@data/mockData.js';
import { Link } from 'react-router-dom';

export default function ProposalsList() {
    return (
        <div className="space-y-4">
            <h1 className="heading-font text-2xl font-semibold">All Proposals</h1>
            <div className="bg-white border border-border rounded">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-text-secondary border-b border-border">
                            <th className="p-3">ID</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Institution</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockProposals.map((p) => (
                            <tr key={p.id} className="border-b border-border text-sm hover:bg-background-primary">
                                <td className="p-3"><Link className="text-primary" to={`/proposals/${p.id}`}>{p.id}</Link></td>
                                <td className="p-3">{p.title}</td>
                                <td className="p-3">{p.institution}</td>
                                <td className="p-3 capitalize">{p.status}</td>
                                <td className="p-3">{p.submittedDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


