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
      </div>
    </div>
  );
}

export default App;
