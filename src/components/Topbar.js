import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import SetAlertModal from "./SetAlertModal";
import AlertsModal from "./AlertsModal";
import SuccessModal from "./SuccessModal";
import NotificationsModal from "./NotificationsModal";
import SearchModal from "./SearchModal";

export default function Topbar() {
  const [showSetAlert, setShowSetAlert] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [alerts, setAlerts] = useState([
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
  ]);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "invite",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "David Osapolo",
      time: "2 mins ago",
      message: <>Invited <span className="text-cyan-400">Aliyu Tosin</span> to the La’organisation</>,
      dot: true,
    },
    {
      id: 2,
      type: "comment",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Gideon Osama",
      time: "5 mins ago",
      message: <>Commented in <span className="text-cyan-400">PMS Price Analysis</span></>,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.",
      dot: true,
    },
    {
      id: 3,
      type: "alert",
      icon: "alert",
      name: "Price Drop Alert",
      time: "30 mins ago",
      message: <span className="text-cyan-400">PMS Falls Below ₦500/Liter</span>,
      content: "The price of Premium Motor Spirit (PMS) has dropped to ₦495 per litre. This is a 3% decrease from last week.",
      dot: true,
    },
  ]);
  const [searchCategories] = useState([
    { key: "all", label: "All", icon: <span className="text-cyan-400">&#128269;</span> },
    { key: "analysis", label: "Analysis", icon: <span className="">&#128202;</span> },
    { key: "news", label: "News", icon: <span className="">&#128240;</span> },
    { key: "report", label: "Report", icon: <span className="">&#128196;</span> },
    { key: "exclusive", label: "Exclusive report", icon: <span className="">&#10010;</span> },
  ]);
  const [searchSuggestions, setSearchSuggestions] = useState([
    { code: "PMS", name: "Petroleum Motor Spirit" },
    { code: "AGO", name: "Automotive Gas Oil" },
    { code: "DPK", name: "Dual Purpose Kerosene" },
    { code: "LPG", name: "Liquified Petroleum Gas" },
    { code: "ICE", name: "ICE Brent Crude" },
  ]);

  const handleCreateAlert = (alertData) => {
    setShowSetAlert(false);
    setShowAlerts(true);
    setShowSuccessModal(true);
    setAlerts(prev => [
      {
        name: alertData.name || `${alertData.condition} crossing ${alertData.price}`,
        status: "Active",
        statusColor: "text-green-400",
        date: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        logs: [],
      },
      ...prev,
    ]);
    setNotifications(prev => [
      {
        id: Date.now(),
        type: "alert",
        icon: "alert",
        name: alertData.name || `${alertData.condition} crossing ${alertData.price}`,
        time: "Just now",
        message: <span className="text-cyan-400">New alert created</span>,
        content: `Alert for ${alertData.condition} at price ${alertData.price}`,
        dot: true,
      },
      ...prev,
    ]);
    setTimeout(() => setShowSuccessModal(false), 2500);
  };
  return (
    <header className="flex items-center justify-between py-7 px-4 md:px-8 bg-transparent flex-shrink-0">
      <div>
        <h1 className="text-2xl font-semibold text-white">Hello, John</h1>
        <p className="text-gray-400 text-sm">Thursday, February 15</p>
      </div>
      <div className="flex items-center gap-4">
        {/* Search */}
        <button className="bg-[#525252] p-2 rounded-full text-gray-400 hover:text-cyan-400" onClick={() => setShowSearch(true)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
        </button>
        {showSearch && (
          <SearchModal 
            onClose={() => setShowSearch(false)}
            categories={searchCategories}
            suggestions={searchSuggestions}
          />
        )}
        {/* Set alert with outlined style and plus-alarm icon */}
        <button
          className="border border-white text-white bg-[#525252] px-6 py-2 rounded-full text-base font-normal flex items-center gap-2 shadow-none"
          onClick={() => setShowSetAlert(true)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="13" r="6" />
            <path d="M12 10v3m0 0v3m0-3h3m-3 0H9" />
            <path d="M5 4L3 6m16-2l2 2" />
          </svg>
          Set alert
        </button>
        {/* Render SetAlertModal if showSetAlert is true */}
        {showSetAlert && (
          <SetAlertModal 
            onClose={() => setShowSetAlert(false)}
            onCreateAlert={handleCreateAlert}
          />
        )}
        {showAlerts && (
          <AlertsModal alerts={alerts} onClose={() => setShowAlerts(false)} />
        )}
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
        {/* Notification */}
        <button className="bg-[#525252] p-2 rounded-full text-gray-400 hover:text-cyan-400" onClick={() => setShowNotifications(true)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
        </button>
        {showNotifications && (
          <NotificationsModal notifications={notifications} onClose={() => setShowNotifications(false)} />
        )}
        {/* Dark mode toggle */}
        <DarkModeToggle />
      </div>
      <hr className="w-full border-t border-[#353535] absolute left-0 bottom-0" />
    </header>
  );
} 