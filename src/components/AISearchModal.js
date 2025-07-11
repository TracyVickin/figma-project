import React from "react";

const popularQueries = [
  "Show me the current price of ICE Brent Crude.",
  "What is the historical price trend for PMS in the last 6 months?",
  "Compare AGO prices in Lagos and Port Harcourt.",
  "Set an alert for when LPG prices drop below ₦300 per liter.",
  "Generate a report on the price volatility of AGO over the past year."
];

export default function AISearchModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-[#181818] p-0 shadow-xl flex flex-col min-h-[420px] max-h-[520px]">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Header */}
        <div className="flex items-center gap-2 px-8 pt-7 pb-2">
          <span className="text-2xl" role="img" aria-label="flame">🔥</span>
          <button className="bg-[#232323] text-white rounded-full px-4 py-1.5 text-sm font-medium">Ask Petrodata AI</button>
        </div>
        {/* AI search heading */}
        <div className="flex items-center gap-2 px-8 pt-2 pb-2">
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41M17.66 17.66l-1.41-1.41M6.34 6.34L4.93 4.93" /><circle cx="12" cy="12" r="5" /></svg>
          <span className="text-white text-lg font-medium">Search using petodata AI</span>
        </div>
        <hr className="border-[#232323] mx-0" />
        {/* Popular queries */}
        <div className="px-8 pt-4">
          <div className="text-gray-400 text-sm mb-2">Popular</div>
          <div className="flex flex-col gap-2">
            {popularQueries.map((q, i) => (
              <div key={i} className="text-white text-lg py-1">{q}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 