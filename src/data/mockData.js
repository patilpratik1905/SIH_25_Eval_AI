export const mockProposals = [
    {
        id: 'PROP-2024-001',
        title: 'AI-based Coal Quality Prediction using Hyperspectral Imaging',
        institution: 'IIT Dhanbad',
        principalInvestigator: 'Dr. Rajesh Kumar',
        submittedDate: '2024-09-15',
        status: 'evaluated',
        fundingType: 'CIL',
        requestedBudget: 4500000,
        duration: 24,
        category: 'Mining Technology',
        evaluation: {
            overallScore: 78,
            noveltyScore: 82,
            financialScore: 75,
            feasibilityScore: 77,
            recommendation: 'approved',
            evaluatedDate: '2024-09-20',
        },
        uploadedFile: 'proposal_001.pdf',
        extractedFields: {
            confidence: 0.94,
            objectives: ['Develop AI model for coal quality', 'Real-time quality assessment'],
            methodology: 'Machine Learning with Hyperspectral Analysis',
            expectedOutcome: 'Automated coal quality prediction system',
        },
    },
    {
        id: 'PROP-2024-002',
        title: 'Safety Monitoring with IoT Sensors in Underground Mines',
        institution: 'ISM Dhanbad',
        principalInvestigator: 'Prof. Neha Gupta',
        submittedDate: '2024-10-01',
        status: 'pending',
        fundingType: 'MoC',
        requestedBudget: 2800000,
        duration: 18,
        category: 'Safety',
        uploadedFile: 'proposal_002.pdf',
        extractedFields: {
            confidence: 0.86,
            objectives: ['Deploy IoT mesh network', 'Alerting & analytics'],
            methodology: 'LoRaWAN + Edge AI',
            expectedOutcome: 'Reduced safety incidents via continuous monitoring',
        },
    },
    {
        id: 'PROP-2024-003',
        title: 'Carbon Emission Reduction through Process Optimization',
        institution: 'IIT Kharagpur',
        principalInvestigator: 'Dr. A. Banerjee',
        submittedDate: '2024-08-21',
        status: 'processing',
        fundingType: 'CIL',
        requestedBudget: 3600000,
        duration: 12,
        category: 'Environment',
        uploadedFile: 'proposal_003.pdf',
    },
    // ... add more mock items as needed
];

export const mockEvaluationDetails = {
    'PROP-2024-001': {
        novelty: {
            score: 82,
            similarProjects: [
                {
                    id: 'PAST-2022-045',
                    title: 'Coal Quality Assessment using Spectroscopy',
                    similarity: 0.68,
                    year: 2022,
                    institution: 'IIT Kharagpur',
                    status: 'completed',
                },
                {
                    id: 'PAST-2021-032',
                    title: 'Machine Learning for Mineral Classification',
                    similarity: 0.54,
                    year: 2021,
                    institution: 'NIT Rourkela',
                    status: 'completed',
                },
            ],
            plagiarismCheck: {
                status: 'clean',
                matches: [],
            },
            ipConflicts: [],
            noveltyAnalysis:
                'The proposal introduces hyperspectral imaging which is a novel approach compared to existing spectroscopy-based methods.',
        },
        financial: {
            score: 75,
            totalBudget: 4500000,
            budgetBreakdown: [
                { category: 'Equipment', amount: 2000000, percentage: 44.4, compliant: true },
                { category: 'Manpower', amount: 1500000, percentage: 33.3, compliant: true },
                { category: 'Consumables', amount: 500000, percentage: 11.1, compliant: true },
                { category: 'Travel', amount: 300000, percentage: 6.7, compliant: true },
                { category: 'Contingency', amount: 200000, percentage: 4.4, compliant: true },
            ],
            complianceChecks: [
                { rule: 'Equipment cost ≤ 50% of total', status: 'pass', value: '44.4%' },
                { rule: 'Manpower cost reasonable', status: 'pass', value: '33.3%' },
                { rule: 'Contingency ≤ 10%', status: 'pass', value: '4.4%' },
                { rule: 'Travel cost justified', status: 'warning', value: '6.7%', note: 'Slightly high' },
            ],
            anomalies: [
                {
                    severity: 'low',
                    item: 'Travel Budget',
                    description: 'Travel cost is 15% higher than similar projects',
                    suggestion: 'Reduce international travel component',
                },
            ],
            benchmarkComparison: {
                avgBudget: 3800000,
                percentile: 72,
            },
        },
        feasibility: {
            score: 77,
            technicalFeasibility: 80,
            institutionalCapability: 85,
            timelineRealistic: 70,
            resourceAvailability: 75,
            riskAssessment: 'medium',
            impactPotential: {
                industryImpact: 'high',
                scalability: 'medium',
                sustainability: 'high',
            },
            criteriaScores: [
                { criteria: 'Technical Soundness', score: 80, maxScore: 100 },
                { criteria: 'Innovation Level', score: 85, maxScore: 100 },
                { criteria: 'Resource Adequacy', score: 75, maxScore: 100 },
                { criteria: 'Timeline Feasibility', score: 70, maxScore: 100 },
                { criteria: 'Team Expertise', score: 90, maxScore: 100 },
            ],
        },
    },
};

export const mockDashboardStats = {
    totalProposals: 147,
    pendingReview: 23,
    underEvaluation: 12,
    approved: 89,
    rejected: 23,
    avgEvaluationTime: '4.5 days',
    approvalRate: 60.5,
    totalFunding: 245000000,
    trends: {
        proposalsChange: +12.5,
        approvalRateChange: -2.3,
    },
};

export const mockRecentProposals = [];

export const mockChartData = {
    proposalsOverTime: [
        { month: 'Jan', count: 12 },
        { month: 'Feb', count: 15 },
        { month: 'Mar', count: 18 },
        { month: 'Apr', count: 14 },
        { month: 'May', count: 20 },
        { month: 'Jun', count: 17 },
    ],
    evaluationScoreDistribution: [
        { range: '0-20', count: 2 },
        { range: '21-40', count: 8 },
        { range: '41-60', count: 25 },
        { range: '61-80', count: 45 },
        { range: '81-100', count: 18 },
    ],
    statusBreakdown: [
        { name: 'Approved', value: 89, color: '#059669' },
        { name: 'Rejected', value: 23, color: '#DC2626' },
        { name: 'Pending', value: 23, color: '#D97706' },
        { name: 'Processing', value: 12, color: '#3B82F6' },
    ],
};

export const mockUsers = [
    {
        id: 'USR-001',
        name: 'Admin User',
        email: 'admin@naccer.gov.in',
        role: 'admin',
        department: 'Administration',
        joinedDate: '2023-01-15',
        status: 'active',
    },
];


