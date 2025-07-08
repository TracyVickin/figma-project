import React from "react";
import PriceCardGroup from "./PriceCardGroup";
import DepotCard from "./DepotCard";
import ReportsCard from "./ReportsCard";
import NewsCard from "./NewsCard";
import FlightsChartCard from "./FlightsChartCard";

export default function DashboardGrid() {
  return (
    <div className="grid grid-rows-2 gap-6 lg:grid-rows-none lg:grid-cols-4">
      {/* Top row: PriceCardGroup and DepotCard */}
      <div className="row-span-1 lg:col-span-2 flex flex-col"><PriceCardGroup /></div>
      <div className="row-span-1 lg:col-span-2 flex flex-col"><DepotCard /></div>
      {/* Bottom row: Reports, News, Flights Chart, Flights List */}
      <div className="row-span-1 lg:col-span-1 flex flex-col"><ReportsCard /></div>
      <div className="row-span-1 lg:col-span-1 flex flex-col"><NewsCard /></div>
      <div className="row-span-1 lg:col-span-2 flex flex-col"><FlightsChartCard /></div>
      {/* Special Request Button */}
      <div className="flex justify-end items-end h-16 col-span-full">
        <button className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">Make special request</button>
      </div>
    </div>
  );
} 