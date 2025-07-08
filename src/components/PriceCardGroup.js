import React from "react";
import { priceCards } from "../data/dashboardData";

function TrendIcon({ trend }) {
  return trend === "up" ? (
    <svg width="16" height="16" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24" className="inline-block align-middle mr-1"><path d="M6 12l6-6 6 6" /></svg>
  ) : (
    <svg width="16" height="16" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24" className="inline-block align-middle mr-1"><path d="M6 12l6 6 6-6" /></svg>
  );
}

function MiniChart({ chart }) {
  return (
    <svg width="80" height="32" viewBox="0 0 80 32">
      <polyline
        fill="none"
        stroke={chart === 'green' ? '#22c55e' : '#ef4444'}
        strokeWidth="2"
        points={chart === 'green' ? '0,24 10,16 20,18 30,10 40,14 50,8 60,12 70,8 80,12' : '0,8 10,16 20,12 30,20 40,16 50,24 60,20 70,24 80,20'}
      />
      <line x1="0" y1="28" x2="80" y2="28" stroke="#444" strokeDasharray="4 2" />
    </svg>
  );
}

export default function PriceCardGroup() {
  return (
    <div className="bg-[#191B1D] rounded-3xl overflow-hidden">
      {priceCards.map((card, i) => (
        <div key={card.label} className="flex items-center px-6 py-4 justify-between border-b border-[#232629] last:border-b-0">
          <div className="flex flex-col gap-1 min-w-0">
            <span className={`font-bold text-base ${card.trend === 'up' ? 'text-green-400' : 'text-red-400'} flex items-center`}>
              <TrendIcon trend={card.trend} />{card.label}
            </span>
            <span className="text-xs text-gray-400 truncate">{card.name}</span>
          </div>
          <div className="flex-1 flex justify-center">
            <MiniChart chart={card.chart} />
          </div>
          <div className="flex flex-col items-end min-w-[80px]">
            <span className="text-white font-semibold text-base">{card.value}</span>
            <span className={`text-xs font-bold ${card.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>{card.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 