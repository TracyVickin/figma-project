import React from "react";
import { reports } from "../data/dashboardData";

function ReportsIcon() {
  return (
    <span className="bg-cyan-400 rounded-full p-1 mr-2 inline-flex items-center justify-center">
      <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    </span>
  );
}

function ReportThumb() {
  return (
    <span className="w-12 h-16 bg-white/10 rounded-lg flex items-center justify-center">
      <svg width="20" height="24" fill="none" stroke="#fff" strokeWidth="1.5" viewBox="0 0 20 24">
        <rect x="2" y="2" width="16" height="20" rx="2" />
        <line x1="6" y1="8" x2="14" y2="8" />
        <line x1="6" y1="12" x2="14" y2="12" />
        <line x1="6" y1="16" x2="10" y2="16" />
      </svg>
    </span>
  );
}

export default function ReportsCard() {
  return (
    <div className="bg-[#191B1D] rounded-3xl p-6 flex flex-col h-full min-h-[220px] lg:min-h-[270px]">
      <div className="flex items-center mb-4">
        <ReportsIcon />
        <span className="text-white font-semibold text-lg">Reports - week 31</span>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {reports.map((report) => (
          <div key={report.label} className="flex flex-col items-center">
            <ReportThumb />
            <span className="text-xs text-gray-200 mt-2 text-center whitespace-nowrap">{report.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 