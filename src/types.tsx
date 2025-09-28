export interface Step {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface Strategy {
    id: string;
    name: string;
    description: string;
    riskLevel: 'Low' | 'Medium' | 'High';
    expectedReturn: string;
    icon: React.ReactNode;
    features: string[];
}

export interface PortfolioTile {
    title: string;
    value: number;
    change: number;
    changePercent: number;
    period: string;
    chartData: number[];
}