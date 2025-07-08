import React from "react";
import { flights } from "../data/dashboardData";

export default function FlightsListCard() {
  return (
    <div className="bg-[#191B1D] rounded-3xl p-6 flex flex-col h-full">
      <div className="flex flex-col gap-2 flex-1 justify-center">
        {flights.airports.map((airport) => (
          <div key={airport.name} className="flex justify-between items-center py-1">
            <span className="text-gray-200 text-sm truncate max-w-[70%]">{airport.name}</span>
            <span className="text-gray-400 text-xs whitespace-nowrap">{airport.flights} flights</span>
          </div>
        ))}
      </div>
    </div>
  );
} 