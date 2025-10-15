import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockEvaluationDetails } from '@data/mockData.js';

export default function EvaluationReport() {
    const { id } = useParams();
    const data = mockEvaluationDetails[id];

    if (!data) {
        return (
            <div>
                <h1 className="heading-font text-2xl font-semibold">No evaluation found</h1>
                <Link className="text-primary" to={`/proposals/${id}`}>Back to proposal</Link>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h1 className="heading-font text-2xl font-semibold">Evaluation Report: {id}</h1>
            <section className="bg-white border border-border rounded p-4">
                <h2 className="heading-font font-semibold mb-2">Novelty</h2>
                <pre className="text-xs overflow-auto bg-background-primary p-3 rounded">{JSON.stringify(data.novelty, null, 2)}</pre>
            </section>
            <section className="bg-white border border-border rounded p-4">
                <h2 className="heading-font font-semibold mb-2">Financial</h2>
                <pre className="text-xs overflow-auto bg-background-primary p-3 rounded">{JSON.stringify(data.financial, null, 2)}</pre>
            </section>
            <section className="bg-white border border-border rounded p-4">
                <h2 className="heading-font font-semibold mb-2">Feasibility</h2>
                <pre className="text-xs overflow-auto bg-background-primary p-3 rounded">{JSON.stringify(data.feasibility, null, 2)}</pre>
            </section>
        </div>
    );
}


