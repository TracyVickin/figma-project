import React, { useState } from "react";

const mockAlerts = [
  {
    name: "PMS crossing 714.45",
    status: "Active",
    statusColor: "text-green-400",
    date: "Feb 14, 17:58",
    logs: [],
  },
  {
    name: "PMS crossing 714.45",
    status: "Stopped - Triggered",
    statusColor: "text-orange-400",
    date: "Feb 14, 18:32",
    logs: [],
  },
];

export default function AlertsModal({ alerts = [], onClose }) {
  const [tab, setTab] = useState("alerts");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-md mx-auto rounded-2xl bg-[#232323] p-0 shadow-xl flex flex-col min-h-[420px] max-h-[520px]">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-2">
          <h2 className="text-white text-base font-medium">Alerts</h2>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#353535] text-white text-xl hover:bg-[#444]">
            <span className="pb-0.5">+</span>
          </button>
        </div>
        {/* Tabs */}
        <div className="flex px-6 pt-1 pb-2 gap-1">
          <button
            className={`flex-1 py-1.5 rounded-lg text-sm font-medium ${tab === "alerts" ? "bg-[#353535] text-white" : "text-gray-400"}`}
            onClick={() => setTab("alerts")}
          >
            Alerts
          </button>
          <button
            className={`flex-1 py-1.5 rounded-lg text-sm font-medium ${tab === "logs" ? "bg-[#353535] text-white" : "text-gray-400"}`}
            onClick={() => setTab("logs")}
          >
            Logs
          </button>
        </div>
        <hr className="border-[#353535] mx-0" />
        {/* Alerts List */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2">
          {tab === "alerts" ? (
            <div className="flex flex-col divide-y divide-[#353535]">
              {alerts.map((alert, i) => (
                <div key={i} className="py-2">
                  <div className="text-white text-sm font-medium leading-tight">{alert.name}</div>
                  <div className="flex items-center gap-2 text-xs mt-0.5">
                    {alert.status === "Active" ? (
                      <span className="text-green-400">Active</span>
                    ) : (
                      <>
                        <span className="text-orange-400">Stopped</span>
                        <span className="text-orange-400">-</span>
                        <span className="text-orange-400">Triggered</span>
                      </>
                    )}
                    <span className="text-gray-400">• {alert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-32 text-gray-500 text-sm">No logs yet.</div>
          )}
        </div>
      </div>
    </div>
  );
} 