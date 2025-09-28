import React from 'react';
import { TrendingUp, TrendingDown, Eye, Star, AlertCircle } from 'lucide-react';
import type { PortfolioTile } from '../types';
import MiniChart from './miniChart';

interface Props {
    data: PortfolioTile;
}

const PortfolioTile: React.FC<Props> = ({ data }) => {
    const isPositive = data.change >= 0;
    const isHighRisk = data.changePercent > 10 || data.changePercent < -10;

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] group">
            {/* This is the Header with title and actions */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-800 text-sm">{data.title}</h3>
                        {isHighRisk && (
                            <AlertCircle className="w-3 h-3 text-amber-500" />
                        )}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                        ${data.value.toLocaleString()}
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-3 h-3 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <Star className="w-3 h-3 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* This is the Performance metrics */}
            <div className="mb-4">
                <div className={`flex items-center justify-between p-3 rounded-lg ${isPositive ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-center">
                        {isPositive ?
                            <TrendingUp className="w-4 h-4 text-green-600 mr-2" /> :
                            <TrendingDown className="w-4 h-4 text-red-600 mr-2" />
                        }
                        <div>
                            <div className={`font-semibold text-sm ${isPositive ? 'text-green-700' : 'text-red-700'}`}>
                                {isPositive ? '+' : ''} ${Math.abs(data.change).toLocaleString()}
                            </div>
                            <div className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                {isPositive ? '+' : ''}{data.changePercent}% change
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* This is the Chart section */}
            <div className="mb-4">
                <div className="h-16 bg-gray-50 rounded-lg p-2">
                    <MiniChart data={data.chartData} isPositive={isPositive} />
                </div>
            </div>

            {/* This is the Additional metrics */}
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500">Allocation</div>
                    <div className="text-sm font-semibold text-gray-800">15.2%</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500">Risk</div>
                    <div className={`text-sm font-semibold ${isHighRisk ? 'text-amber-600' : 'text-green-600'}`}>
                        {isHighRisk ? 'High' : 'Med'}
                    </div>
                </div>
            </div>

            {/* This is the Action buttons */}
            <div className="flex gap-2 justify-center">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    View Details
                </button>
                <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Trade
                </button>
            </div>
        </div>
    )
}

export default PortfolioTile;