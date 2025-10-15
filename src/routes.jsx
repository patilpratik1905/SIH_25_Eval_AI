import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '@pages/Dashboard.jsx';
import UploadProposal from '@pages/UploadProposal.jsx';
import ProposalsList from '@pages/ProposalsList.jsx';
import ProposalDetails from '@pages/ProposalDetails.jsx';
import EvaluationReport from '@pages/EvaluationReport.jsx';
import DatabaseSearch from '@pages/DatabaseSearch.jsx';
import ReviewerConsole from '@pages/ReviewerConsole.jsx';
import Rules from '@pages/Rules.jsx';
import NotFound from '@pages/NotFound.jsx';
import DashboardLayout from '@components/layout/DashboardLayout.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="upload" element={<UploadProposal />} />
                <Route path="proposals" element={<ProposalsList />} />
                <Route path="proposals/:id" element={<ProposalDetails />} />
                <Route path="proposals/:id/evaluation" element={<EvaluationReport />} />
                <Route path="database" element={<DatabaseSearch />} />
                <Route path="reviewer" element={<ReviewerConsole />} />
                <Route path="rules" element={<Rules />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}


