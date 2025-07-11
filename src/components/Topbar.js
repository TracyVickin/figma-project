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

  const handleCreateAlert = () => {
    setShowSetAlert(false);
    setShowAlerts(true);
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 2500);
  };
  return (
    <header className="flex items-center justify-between py-4 px-4 md:px-8 bg-transparent">
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
          <SearchModal onClose={() => setShowSearch(false)} />
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
          <AlertsModal onClose={() => setShowAlerts(false)} />
        )}
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
        {/* Notification */}
        <button className="bg-[#525252] p-2 rounded-full text-gray-400 hover:text-cyan-400" onClick={() => setShowNotifications(true)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
        </button>
        {showNotifications && (
          <NotificationsModal onClose={() => setShowNotifications(false)} />
        )}
        {/* Dark mode toggle */}
        <DarkModeToggle />
      </div>
      
    </header>
  );
} 