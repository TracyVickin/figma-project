import React from "react";
import { depots, depotTabs } from "../data/dashboardData";
import { LineChart, Line, ResponsiveContainer, Area, ReferenceLine} from "recharts";

function DepotIcon() {
  return (
    <span className="bg-yellow-400 rounded-full p-1 mr-2 inline-flex items-center justify-center">
      <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 3" />
      </svg>
    </span>
  );
}

function TrendIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24" className="inline-block align-middle mr-1"><path d="M6 12l6-6 6 6" /></svg>
  );
}

function MiniChart({ data }) {
  const chartData = data.map((v, i) => ({ x: i, y: v }));
  return (
    <ResponsiveContainer width={200} height={50}>
      <LineChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="miniGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00FF99" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#00FF99" stopOpacity={0} />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <Area
          type="linear"
          dataKey="y"
          stroke={false}
          fill="url(#miniGreen)"
          fillOpacity={1}
        />
        <Line
          type="linear"
          dataKey="y"
          stroke="#00FF99"
          strokeWidth={2}
          dot={false}
          filter="url(#glow)"
        />
        <ReferenceLine
          y={Math.min(...data)}
          stroke="#00FF99"
          strokeDasharray="8 5"
          strokeOpacity={0.7}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function DepotCard() {
  return (
    <div className="bg-[#191B1D] rounded-3xl p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <DepotIcon />
        <span className="text-white font-semibold text-lg">Depot</span>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        {depots.map((depot, i) => (
          <div key={depot.name} className="flex items-center justify-between">
            <div className="flex flex-col min-w-0">
              <span className="text-green-400 font-bold text-sm flex items-center"><TrendIcon />{depot.name}</span>
              <span className="text-xs text-gray-400 truncate">{depot.location}</span>
            </div>
            <div className="flex-1 flex justify-center items-center h-[40px] overflow-hidden"><MiniChart data={depot.chart} /></div>
            <div className="flex flex-col items-end min-w-[70px]">
              <span className="text-white font-semibold text-sm">{depot.value}</span>
              <span className="text-green-400 text-xs font-bold">{depot.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4 border-t border-[#232629] pt-3">
        {depotTabs.map((tab) => (
          <span
            key={tab}
            className={`text-xs font-medium cursor-pointer pb-1 ${tab === 'PMS' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'}`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
} 