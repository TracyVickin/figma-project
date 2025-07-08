import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MOCK_API_URL = "https://mocki.io/v1/9e0d156c-d23a-49bb-bdfb-35909e25516e"; 

function PlaneIcon() {
  return (
    <span className="bg-cyan-400 rounded-full p-2 mr-4 inline-flex items-center justify-center">
      <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2.5 19.5l19-7-7 19-2-8-8-2z" />
      </svg>
    </span>
  );
}

function formatYAxis(tick) {
  if (tick >= 1000) return `${tick / 1000}k`;
  return tick;
}

export default function FlightsChartCard() {
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch(MOCK_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setFlightData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  let chartData = flightData?.chart || [];
  if (tab === "international") {
    chartData = chartData.map(d => ({ ...d, domestic: 0 }));
  } else if (tab === "domestic") {
    chartData = chartData.map(d => ({ ...d, international: 0 }));
  }

  return (
    <div className="bg-[#191B1D] rounded-3xl p-8 flex flex-row w-full max-w-4xl mx-auto h-[400px] overflow-hidden">
      {loading ? (
        <div className="text-white text-center w-full">Loading...</div>
      ) : error ? (
        <div className="text-red-400 text-center w-full">Error: {error}</div>
      ) : flightData ? (
        <>
          {/* Left: Chart and stats */}
          <div className="flex flex-col flex-1 min-w-[350px] pr-8">
            <div className="flex items-center mb-2 relative z-10">
              <PlaneIcon />
              <span className="text-white font-bold text-3xl mr-2">{flightData.total}</span>
              <span className="text-gray-300 text-lg mr-2">Flights</span>
              <span className="text-green-400 text-base font-bold mr-1">▲ {flightData.change}</span>
              <span className="text-xs text-gray-400">{flightData.period}</span>
            </div>
            <div className="flex-1 z-10 relative">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={chartData} barGap={4} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#aaa" tick={{ fontSize: 14 }} />
                  <YAxis stroke="#aaa" tickFormatter={formatYAxis} tick={{ fontSize: 14 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} labelStyle={{ color: '#fff' }} />
                  <Bar dataKey="international" stackId="a" fill="#06b6d4" name="International" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="domestic" stackId="a" fill="#fbbf24" name="Domestic" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex border-b border-gray-700 mt-2">
              <button
                className={`px-4 py-2 text-sm font-semibold ${tab === "international" ? "text-cyan-400 border-b-2 border-cyan-400" : "text-gray-400"}`}
                onClick={() => setTab("international")}
              >
                International
              </button>
              <button
                className={`px-4 py-2 text-sm font-semibold ${tab === "domestic" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"}`}
                onClick={() => setTab("domestic")}
              >
                Domestic
              </button>
              <button
                className={`px-4 py-2 text-sm font-semibold ${tab === "all" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
                onClick={() => setTab("all")}
              >
                All
              </button>
            </div>
          </div>
          {/* Right: Airport list */}
          <div className="flex flex-col flex-shrink-0 w-[320px] bg-[#232527] rounded-2xl p-6 ml-4 h-full ">
            {flightData.airports && flightData.airports.map((airport, idx) => (
              <div key={airport.name} className="flex justify-between items-center mb-4 last:mb-0">
                <span className="text-gray-200 truncate max-w-[180px] text-base font-medium">{airport.name}</span>
                <span className="text-gray-400 text-base font-semibold">{airport.flights} flights</span>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
} 