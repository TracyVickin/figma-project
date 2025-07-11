import React, { useState } from "react";
import AISearchModal from "./AISearchModal";

export default function SearchModal({ onClose, categories: propCategories, suggestions: propSuggestions }) {
  const categories = propCategories || [
    { key: "all", label: "All", icon: <span className="text-cyan-400">&#128269;</span> },
    { key: "analysis", label: "Analysis", icon: <span className="">&#128202;</span> },
    { key: "news", label: "News", icon: <span className="">&#128240;</span> },
    { key: "report", label: "Report", icon: <span className="">&#128196;</span> },
    { key: "exclusive", label: "Exclusive report", icon: <span className="">&#10010;</span> },
  ];
  const suggestions = propSuggestions || [
    { code: "PMS", name: "Petroleum Motor Spirit" },
    { code: "AGO", name: "Automotive Gas Oil" },
    { code: "DPK", name: "Dual Purpose Kerosene" },
    { code: "LPG", name: "Liquified Petroleum Gas" },
    { code: "ICE", name: "ICE Brent Crude" },
  ];
  const [selectedCategory, setSelectedCategory] = useState("report");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);
  const [showAI, setShowAI] = useState(false);

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
          <button className="bg-[#232323] text-white rounded-full px-4 py-1.5 text-sm font-medium mr-2">Search</button>
          <button className="bg-[#232323] text-gray-400 rounded-full px-4 py-1.5 text-sm font-medium" onClick={() => setShowAI(true)}>Ask Petrodata AI</button>
        </div>
        {showAI && <AISearchModal onClose={() => setShowAI(false)} />}
        {/* Search bar */}
        <div className="flex items-center gap-2 px-8 pt-2 pb-2">
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
          <input
            className="bg-transparent border-none outline-none text-white text-lg flex-1 placeholder-gray-400"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <hr className="border-[#232323] mx-0" />
        {/* Category tabs */}
        <div className="flex gap-2 px-8 pt-2 pb-2">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`flex items-center gap-1 px-2 py-1 text-sm font-medium border-b-2 ${selectedCategory === cat.key ? "border-cyan-400 text-cyan-400" : "border-transparent text-gray-400"}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
        <hr className="border-[#232323] mx-0" />
        {/* Suggestions */}
        <div className="px-8 pt-4">
          <div className="text-gray-400 text-sm mb-2">Suggestions</div>
          <div className="flex flex-col">
            {suggestions.map((s, i) => (
              <button
                key={s.code}
                className={`flex items-center gap-3 px-4 py-2 text-lg rounded ${selected === i ? "bg-[#232323] text-white" : "text-white/80"}`}
                onClick={() => setSelected(i)}
              >
                <span className="font-semibold w-16 text-left">{s.code}</span>
                <span className="text-gray-400 text-base">{s.name}</span>
                {selected === i && <svg className="ml-auto" width="22" height="22" fill="none" stroke="#00937A" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 