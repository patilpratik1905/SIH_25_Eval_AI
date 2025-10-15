import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const fakeExtractionByName = {
    'proposal_001.pdf': {
        topic: 'AI-based Coal Quality Prediction',
        abstract: 'This study proposes hyperspectral imaging and ML for real-time coal quality prediction...'
    },
};

export default function UploadProposal() {
    const [file, setFile] = useState({ name: 'proposal_001.pdf', size: 512 * 1024, type: 'application/pdf' });
    const [busy, setBusy] = useState(false);
    const [preview, setPreview] = useState(() => {
        const meta = fakeExtractionByName['proposal_001.pdf'];
        return {
            topic: meta.topic,
            abstract: meta.abstract,
            fields: {
                PI: { value: 'Dr. Rajesh Kumar', confidence: 'High' },
                Institution: { value: 'IIT Dhanbad', confidence: 'High' },
                Duration: { value: '24 months', confidence: 'Medium' },
                Budget: { value: '₹45,00,000', confidence: 'High' },
                TRL: { value: '5', confidence: 'Low' },
            },
            novelty: [
                { id: 'PAST-2022-045', title: 'Coal Quality Assessment using Spectroscopy', similarity: 0.68 },
                { id: 'PAST-2021-032', title: 'ML for Mineral Classification', similarity: 0.54 },
                { id: 'PAST-2019-010', title: 'Spectral Imaging for Minerals', similarity: 0.49 },
            ],
            financial: {
                coa: [
                    { head: 'Manpower', amount: 1500000, status: '✓' },
                    { head: 'Equipment', amount: 2000000, status: '✓' },
                    { head: 'Travel', amount: 300000, status: '⚠' },
                    { head: 'Consumables', amount: 500000, status: '✓' },
                    { head: 'Overheads', amount: 200000, status: '✓' },
                ],
                rules: [
                    { rule: 'Overhead cap ≤ 10%', result: 'pass' },
                    { rule: 'Travel cap ≤ 8%', result: 'warning' },
                    { rule: 'Milestones present', result: 'pass' },
                ],
            },
        };
    });

    const onDrop = useCallback((accepted) => {
        const f = accepted[0];
        if (!f) return;
        setFile({ name: f.name, size: f.size, type: f.type });
        const meta = fakeExtractionByName[f.name] || fakeExtractionByName['proposal_001.pdf'];
        setPreview({
            topic: meta.topic,
            abstract: meta.abstract,
            fields: {
                PI: { value: 'Dr. Rajesh Kumar', confidence: 'High' },
                Institution: { value: 'IIT Dhanbad', confidence: 'High' },
                Duration: { value: '24 months', confidence: 'Medium' },
                Budget: { value: '₹45,00,000', confidence: 'High' },
                TRL: { value: '5', confidence: 'Low' },
            },
            novelty: [
                { id: 'PAST-2022-045', title: 'Coal Quality Assessment using Spectroscopy', similarity: 0.68 },
                { id: 'PAST-2021-032', title: 'ML for Mineral Classification', similarity: 0.54 },
                { id: 'PAST-2019-010', title: 'Spectral Imaging for Minerals', similarity: 0.49 },
            ],
            financial: {
                coa: [
                    { head: 'Manpower', amount: 1500000, status: '✓' },
                    { head: 'Equipment', amount: 2000000, status: '✓' },
                    { head: 'Travel', amount: 300000, status: '⚠' },
                    { head: 'Consumables', amount: 500000, status: '✓' },
                    { head: 'Overheads', amount: 200000, status: '✓' },
                ],
                rules: [
                    { rule: 'Overhead cap ≤ 10%', result: 'pass' },
                    { rule: 'Travel cap ≤ 8%', result: 'warning' },
                    { rule: 'Milestones present', result: 'pass' },
                ],
            },
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] }, maxSize: 10 * 1024 * 1024 });

    const runOcr = async () => {
        setBusy(true);
        await new Promise((r) => setTimeout(r, 800 + Math.random() * 400));
        setBusy(false);
    };

    const validate = () => alert('Schema validated (mock)');
    const sendToEval = () => alert('Sent to evaluation (mock)');

    return (
        <div className="space-y-4">
            <h1 className="heading-font text-2xl font-semibold">Upload Proposal</h1>
            <div className="bg-white border border-border rounded p-6">
                <div {...getRootProps()} className={`border-2 border-dashed rounded p-8 text-center ${isDragActive ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <input {...getInputProps()} />
                    <div className="heading-font font-semibold">Drag & drop PDF/DOCX here</div>
                    <div className="text-sm text-text-secondary">or click to select a file (max 10MB)</div>
                </div>
                {file && (
                    <div className="mt-4 bg-background-primary rounded p-4 text-sm">
                        <div className="font-medium">{file.name}</div>
                        <div className="text-text-secondary">{(file.size / 1024).toFixed(1)} KB • {file.type || 'application/pdf'}</div>
                        <div className="mt-3 flex gap-2">
                            <button onClick={runOcr} className="bg-primary text-white rounded px-3 py-1.5" disabled={busy}>{busy ? 'Running...' : 'Run OCR + Parse'}</button>
                            <button onClick={validate} className="border border-border rounded px-3 py-1.5">Validate Schema</button>
                            <button onClick={sendToEval} className="border border-border rounded px-3 py-1.5">Send to Evaluation</button>
                        </div>
                    </div>
                )}
            </div>

            {preview && (
                <div className="bg-white border border-border rounded">
                    <Accordion title="Topic & Abstract">
                        <div>
                            <div className="font-semibold">{preview.topic}</div>
                            <p className="text-sm text-text-secondary mt-1">{preview.abstract}</p>
                        </div>
                    </Accordion>
                    <Accordion title="Extracted Fields">
                        <div className="grid sm:grid-cols-2 gap-3">
                            {Object.entries(preview.fields).map(([k, v]) => (
                                <div key={k} className="border border-border rounded p-3 text-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-text-secondary">{k}</div>
                                        <div className="font-medium">{v.value}</div>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded ${v.confidence === 'High' ? 'bg-success/10 text-success' : v.confidence === 'Medium' ? 'bg-warning/10 text-warning' : 'bg-error/10 text-error'}`}>{v.confidence}</span>
                                </div>
                            ))}
                        </div>
                    </Accordion>
                    <Accordion title="Novelty Checks">
                        <ul className="text-sm space-y-2">
                            {preview.novelty.map((n) => (
                                <li key={n.id} className="flex items-center justify-between">
                                    <span>{n.id} — {n.title}</span>
                                    <span className="text-text-secondary">{(n.similarity * 100).toFixed(0)}%</span>
                                </li>
                            ))}
                        </ul>
                    </Accordion>
                    <Accordion title="Financial Checks">
                        <div className="text-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-text-secondary">
                                        <th className="py-1">Head</th>
                                        <th className="py-1">Amount</th>
                                        <th className="py-1">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {preview.financial.coa.map((r, i) => (
                                        <tr key={i} className="border-t border-border">
                                            <td className="py-1">{r.head}</td>
                                            <td className="py-1">₹{r.amount.toLocaleString()}</td>
                                            <td className="py-1">{r.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-3">
                                <div className="heading-font font-semibold mb-1">Rule results</div>
                                <ul className="list-disc ml-5">
                                    {preview.financial.rules.map((r, i) => (
                                        <li key={i}>{r.rule}: <span className={r.result === 'pass' ? 'text-success' : r.result === 'warning' ? 'text-warning' : 'text-error'}>{r.result}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Accordion>
                </div>
            )}
        </div>
    );
}

function Accordion({ title, children }) {
    const [open, setOpen] = useState(true);
    return (
        <div className="border-b border-border">
            <button onClick={() => setOpen((v) => !v)} className="w-full text-left px-4 py-3 heading-font font-semibold">
                {title}
            </button>
            {open && <div className="px-4 pb-4">{children}</div>}
        </div>
    );
}


