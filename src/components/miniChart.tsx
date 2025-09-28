
import React from 'react';

const MiniChart: React.FC<{ data: number[]; isPositive: boolean }> = ({
    data, isPositive
}) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    return (
        <div className="flex items-end h-12 space-x-1">
            {data.map((value, index) => {

                const height = ((value - min) / range) * 100;
                return (
                    <div
                        key={index}
                        className={`w-2 rounded-sm transition-all duration-300 ${isPositive ? 'bg-green-400' : 'bg-red-400'
                            }`}
                        style={{ height: `${Math.max(height, 10)}%` }}
                    />
                );
            })}
        </div>
    );
};

export default MiniChart;