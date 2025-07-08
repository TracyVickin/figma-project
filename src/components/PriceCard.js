import React from "react";

export default function PriceCard({ label, name, value, change, trend, chart }) {
  return (
    <div className="flex items-center justify-between bg-[#191B1D] rounded-2xl p-4 h-24 w-full">
      <div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>{trend === 'up' ? '▲' : '▼'} {label}</span>
          <span className="text-xs text-gray-400">{name}</span>
        </div>
        <div className="text-lg font-semibold text-white mt-2">{value}</div>
        <div className={`text-xs font-bold ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>{change}</div>
      </div>
      {/* Mini Chart Placeholder */}
      <svg width="80" height="40" viewBox="0 0 80 40">
        <polyline
          fill="none"
          stroke={chart === 'green' ? '#22d3ee' : '#f87171'}
          strokeWidth="3"
          points={chart === 'green' ? '0,30 10,20 20,25 30,15 40,20 50,10 60,15 70,10 80,15' : '0,10 10,20 20,15 30,25 40,20 50,30 60,25 70,30 80,25'}
        />
      </svg>
    </div>
  );
} 