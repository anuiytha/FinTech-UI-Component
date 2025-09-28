import { useState } from 'react';
import { Shield, Target, Zap } from 'lucide-react';
import OnboardingStepper from './components/onboardingStepper';
import StrategyCard from './components/strategyCard';
import PortfolioTile from './components/portfolioTile';



function App() {
  const [selectedStrategy, setSelectedStrategy] = useState('balanced');

  const strategies = [
    {
      id: 'conservative',
      name: 'Conservative Growth',
      description: 'A conservative strategy focused on preserving capital and steady growth',
      riskLevel: 'Low' as const,
      expectedReturn: '4-6%',
      icon: <Shield className="w-6 h-6" />,
      features: ['Balanced portfolio', 'Low volatility', 'Conservative allocation'],
    },
    {
      id: 'balanced',
      name: 'Balanced Growth',
      description: 'A balanced strategy for moderate risk-takers',
      riskLevel: 'Medium' as const,
      expectedReturn: '6-8%',
      icon: <Target className="w-6 h-6" />,
      features: ['Moderate risk', 'Diversified portfolio', 'Capital appreciation'],
    },
    {
      id: 'aggressive',
      name: 'Aggressive Growth',
      description: 'A growth-focused strategy for high-risk tolerance',
      riskLevel: 'High' as const,
      expectedReturn: '8-12%',
      icon: <Zap className="w-6 h-6" />,
      features: ['High risk', 'Growth-oriented', 'Aggressive allocation'],
    }
  ];

  const portfolioData = [
    {
      title: 'Total Portfolio Value',
      value: 100000,
      change: 1000,
      changePercent: 1,
      period: 'Daily',
      chartData: [1000, 1050, 1100, 1150, 1200],
    },
    {
      title: 'Stocks',
      value: 50000,
      change: 500,
      changePercent: 1,
      period: 'Daily',
      chartData: [5000, 5200, 5400, 5600, 5800],
    },
    {
      title: 'Bonds',
      value: 30000,
      change: 300,
      changePercent: 1,
      period: 'Daily',
      chartData: [3000, 3150, 3300, 3450, 3600],
    },
    {
      title: 'Cash',
      value: 20000,
      change: 200,
      changePercent: 1,
      period: 'Daily',
      chartData: [2000, 2100, 2200, 2300, 2400],
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">InvestPro Dashboard</h1>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">FinTech Components</h1>
            <p className="text-gray-600">
              Professional UI components for financial apps</p>
          </div> */}

          <section>
            <div className="flex justify-center">
              <OnboardingStepper />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Strategy Selection</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {strategies.map((strategy) => (
                <StrategyCard
                  key={strategy.id}
                  strategy={strategy}
                  isSelected={selectedStrategy === strategy.id}
                  onSelect={() => setSelectedStrategy(strategy.id)}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Portfolio Performance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.map((data, index) => (
                <PortfolioTile key={index} data={data} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
