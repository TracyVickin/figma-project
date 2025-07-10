import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MOCK_API_URL = "https://mocki.io/v1/30e981c5-535d-4595-a096-24158e002711"; 

function PlaneIcon() {
  return (
    <span className="bg-[#e0f2f1] rounded-full p-2 mr-4 inline-flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1e88e5" d="M20.633 2.276c-.726-.117-1.501.127-2.174.371c-.972.354-2.07.93-2.646 1.506l-1.61 1.703l-5.334-2.02a1.8 1.8 0 0 0-1.93.354L5.46 5.587c-.34.321-.3.89.083 1.16l4.696 3.303l-.862.912c-.52.52-.996 1.028-1.355 1.522a4.7 4.7 0 0 0-.432.707l-2.139-.844c-.66-.26-1.393-.07-1.886.397l-1.08 1.02a.757.757 0 0 0 .048 1.131l3.651 2.922l2.922 3.651c.28.35.822.373 1.13.047l1.022-1.08c.465-.492.657-1.226.396-1.885l-.844-2.138c.247-.12.483-.27.707-.433c.494-.359 1.002-.835 1.522-1.354l.912-.863l3.304 4.696a.758.758 0 0 0 1.159.083l1.397-1.48a1.8 1.8 0 0 0 .353-1.93l-2.019-5.334l1.703-1.61c.577-.577 1.152-1.674 1.506-2.646c.244-.672.488-1.448.371-2.174a1.27 1.27 0 0 0-1.09-1.091"/></svg>
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
    <div className="bg-[#191B1D] rounded-3xl  flex justify-between flex-row w-full max-w-4xl mx-auto h-[290px] overflow-hidden ">
      {loading ? (
        <div className="text-white text-center w-full">Loading...</div>
      ) : error ? (
        <div className="text-red-400 text-center w-full">Error: {error}</div>
      ) : flightData ? (
        <>
          {/* Left: Chart and stats */}
          <div className="flex flex-col max-w-[314px] pr-2 h-[290px]">
            <div className="flex items-center relative z-10 ">
              <PlaneIcon />
              <span className="text-white font-bold text-xl mr-2">{flightData.total}</span>
              <span className="text-gray-300 text-sm mr-2">Flights</span>
              <span className="text-green-400 text-xs font-bold mr-1">▲ {flightData.change}</span>
              <span className="text-xs text-gray-400">{flightData.period}</span>
            </div>
            <div className="flex-1 z-10 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height={180} >
                <BarChart data={chartData} barGap={4} margin={{ top: 10, right: -17, left: 15, bottom: 0 }} className="">
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis
                    dataKey="date"
                    stroke="#aaa"
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#aaa"
                    tickFormatter={formatYAxis}
                    tick={{ fontSize: 10 }}
                    orientation="right"
                    domain={[100000, 600000]}
                    tickCount={6}
                    allowDataOverflow={true}
                    axisLine={false}
                    tickLine={false}
                    width={50}
                  />
                  <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none', fontSize: '12px' }} labelStyle={{ color: '#fff', fontSize: '12px' }} />
                  {/* International bar (stacked) */}
                  <Bar dataKey="international_economy" stackId="international" fill="#1E88E5" name="Int. Economy" barSize={10} />
                  <Bar dataKey="international_business" stackId="international" fill="#26A69A" name="Int. Business" barSize={10} />
                  <Bar dataKey="international_first" stackId="international" fill="#F79009" name="Int. First" barSize={10} />

                  {/* Domestic bar (stacked) */}
                  <Bar dataKey="domestic_economy" stackId="domestic" fill="#1E88E5" name="Dom. Economy" barSize={10} />
                  <Bar dataKey="domestic_business" stackId="domestic" fill="#26A69A" name="Dom. Business" barSize={10} />
                  <Bar dataKey="domestic_first" stackId="domestic" fill="#F79009" name="Dom. First" barSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex mt-2">
              <button
                className={`px-4 py-2 text-sm font-semibold border-t-2 transition-colors duration-150
                  ${tab === "international" ? "text-[#009688] border-t-[#009688]" : "text-gray-400 border-t-transparent hover:text-[#009688] hover:border-t-[#009688]"}`}
                onClick={() => setTab("international")}
              >
                International
              </button>
              <button
                className={`px-4 py-2 text-sm font-semibold border-t-2 transition-colors duration-150
                  ${tab === "domestic" ? "text-[#009688] border-t-[#009688]" : "text-gray-400 border-t-transparent hover:text-yellow-400 hover:border-t-[#009688]"}`}
                onClick={() => setTab("domestic")}
              >
                Domestic
              </button>
             
            </div>
          </div>
          {/* Right: Airport list */}
          <div className="flex justify-between flex-col flex-shrink-0 w-[320px] bg-[#404040] rounded p-6 h-[290px]">           {flightData.airports && flightData.airports.slice(0, 6).map((airport, idx) => (
              <div key={airport.name} className="flex justify-between items-center mb-3 last:mb-0 ">
                <span className="text-gray-200 truncate max-w-[140px] text-sm font-medium whitespace-nowrap">{airport.name}</span>
                <span className="text-gray-400 text-sm font-semibold whitespace-nowrap">{airport.flights} flights</span>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
} 