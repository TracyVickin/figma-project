import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardGrid from "./components/DashboardGrid";

function App() {
  return (
    <div className="flex bg-[#232629] min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <DashboardGrid />
        </main>
        {/* Edit widget button below the main screen, centered */}
        <div className="w-full flex justify-center py-6">
          <button
            className="px-6 py-2 rounded-full border border-[#888] bg-[#444] text-white text-base font-medium shadow-sm hover:bg-[#555] transition"
            style={{ outline: 'none' }}
          >
            Edit widget
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
