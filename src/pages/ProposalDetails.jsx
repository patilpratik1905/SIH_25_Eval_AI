import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProposals, mockEvaluationDetails } from '@data/mockData.js';

export default function ProposalDetails() {
    const { id } = useParams();
    const proposal = mockProposals.find((p) => p.id === id);

    if (!proposal) {
        return (
            <div className="space-y-3">
                <h1 className="heading-font text-2xl font-semibold">Proposal not found</h1>
                <Link className="text-primary" to="/proposals">Back to list</Link>
            </div>
        );
    }

    const evalData = mockEvaluationDetails[id];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="heading-font text-2xl font-semibold">{proposal.title}</h1>
                <div className="text-sm text-text-secondary">ID: {proposal.id}</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-4">
                    <div className="bg-white border border-border rounded p-4">
                        <div className="text-sm text-text-secondary">Institution</div>
                        <div className="font-medium">{proposal.institution}</div>
                        <div className="mt-2 text-sm text-text-secondary">PI: {proposal.principalInvestigator}</div>
                        <div className="mt-2 text-sm text-text-secondary">Submitted: {proposal.submittedDate}</div>
                    </div>
                    <div className="bg-white border border-border rounded p-4">
                        <h2 className="heading-font font-semibold mb-2">Overview</h2>
                        <pre className="text-xs overflow-auto bg-background-primary p-3 rounded">{JSON.stringify(proposal, null, 2)}</pre>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-white border border-border rounded p-4">
                        <h3 className="heading-font font-semibold mb-2">Actions</h3>
                        {evalData && (
                            <Link className="inline-block bg-primary text-white rounded px-3 py-2" to={`/proposals/${id}/evaluation`}>
                                View Evaluation Report
                            </Link>
                        )}
                    </div>
                    {evalData && (
                        <div className="bg-white border border-border rounded p-4">
                            <h3 className="heading-font font-semibold mb-2">Score Summary</h3>
                            <div className="text-sm">Overall: {proposal.evaluation?.overallScore}</div>
                            <div className="text-sm">Novelty: {proposal.evaluation?.noveltyScore}</div>
                            <div className="text-sm">Financial: {proposal.evaluation?.financialScore}</div>
                            <div className="text-sm">Feasibility: {proposal.evaluation?.feasibilityScore}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


