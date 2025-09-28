import React from 'react';
import { Check } from 'lucide-react';
import { Strategy } from '../types';


interface Props {
    strategy: Strategy;
    isSelected: boolean;
    onSelect: () => void;
}

const StrategyCard: React.FC<Props> = ({ strategy, isSelected, onSelect }) => {
    const getRiskColor = (level: string) => {
        switch (level) {
            case 'Low': return 'text-green-600 bg-green-100';
            case 'Medium': return 'text-yellow-600 bg-yellow-100';
            case 'High': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    }

    return (
        <div className={`relative bg-white rounded-xl border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${isSelected ? 'border-blue-500 shadow-lg ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'}`} onClick={onSelect}>

            {/* This indicates or shows the user's Strategy Selection */}
            {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                </div>
            )}

            {/* This shows the Strategy Details */}
            <div className={`inline-flex p-3 rounded-lg mb-4 ${isSelected ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                {strategy.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2"> {strategy.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>

            <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(strategy.riskLevel)}`}>
                    {strategy.riskLevel} Risk
                </span>
                <span className="text-sm font-medium">
                    Expected Return: {strategy.expectedReturn}
                </span>
            </div>
            <div className="space-y-2">
                {strategy.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />

                        {feature}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StrategyCard;