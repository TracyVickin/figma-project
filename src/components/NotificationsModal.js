import React, { useState } from "react";

const mockNotifications = [
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
  {
    id: 4,
    type: "mention",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Gideon Osama",
    time: "5 mins ago",
    message: <>Mentioned you in <span className="text-cyan-400">PMS Price Analysis</span></>,
    content: "@john Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.",
    dot: true,
  },
  {
    id: 5,
    type: "report",
    icon: "report",
    name: "Weekly Report",
    time: "30 mins ago",
    message: <span className="text-cyan-400">PMS Market Analysis Now Available</span>,
    content: "PMS Market Analysis",
    dot: true,
  },
];

function NotificationIcon({ type }) {
  if (type === "alert") {
    return (
      <div className="w-10 h-10 rounded-full bg-[#353535] flex items-center justify-center">
        <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
      </div>
    );
  }
  if (type === "report") {
    return (
      <div className="w-10 h-10 rounded-full bg-[#353535] flex items-center justify-center">
        <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 8h6" /></svg>
      </div>
    );
  }
  return null;
}

export default function NotificationsModal({ onClose }) {
  const [tab, setTab] = useState("all");

  // Filter notifications by tab
  const filtered = mockNotifications.filter(n => {
    if (tab === "all") return true;
    if (tab === "comments") return n.type === "comment";
    if (tab === "mentioned") return n.type === "mention";
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-lg mx-auto rounded-2xl bg-[#232323] p-0 shadow-xl flex flex-col min-h-[600px] max-h-[700px]">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Header */}
        <div className="px-8 pt-7 pb-2">
          <h2 className="text-white text-lg font-medium">Your notifications</h2>
        </div>
        {/* Tabs */}
        <div className="flex px-8 pt-1 pb-2 gap-2">
          <button
            className={`flex-1 py-2 rounded-lg text-base font-medium ${tab === "all" ? "bg-[#353535] text-white" : "text-gray-400"}`}
            onClick={() => setTab("all")}
          >
            All
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-base font-medium ${tab === "comments" ? "bg-[#353535] text-white" : "text-gray-400"}`}
            onClick={() => setTab("comments")}
          >
            Comments
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-base font-medium ${tab === "mentioned" ? "bg-[#353535] text-white" : "text-gray-400"}`}
            onClick={() => setTab("mentioned")}
          >
            Mentioned
          </button>
        </div>
        <hr className="border-[#353535] mx-0" />
        {/* Notification List */}
        <div className="flex-1 overflow-y-auto px-8 pb-6 pt-2">
          <div className="flex flex-col relative">
            {filtered.map((n, i) => (
              <div key={n.id} className="flex gap-4 relative pb-6">
                {/* Timeline line */}
                {i !== filtered.length - 1 && (
                  <div className="absolute left-5 top-12 h-full w-px bg-[#353535] z-0" />
                )}
                {/* Avatar or icon */}
                <div className="relative z-10">
                  {n.avatar ? (
                    <img src={n.avatar} alt={n.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#232323]" />
                  ) : (
                    <NotificationIcon type={n.icon} />
                  )}
                  {/* Green dot */}
                  {n.dot && <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#00937A] rounded-full border-2 border-[#232323]" />}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm truncate">{n.name}</span>
                    <span className="text-gray-400 text-xs whitespace-nowrap">{n.time}</span>
                  </div>
                  <div className="text-gray-300 text-sm mt-0.5 leading-tight">{n.message}</div>
                  {n.content && <div className="text-gray-400 text-xs mt-1 leading-snug">{n.content}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer buttons */}
        <div className="flex gap-4 px-8 py-4 border-t border-[#353535] bg-[#232323] rounded-b-2xl">
          <button onClick={onClose} className="flex-1 bg-[#353535] text-white rounded-full py-3 text-base font-medium">Close</button>
          <button className="flex-1 bg-[#1CC8B0] text-white rounded-full py-3 text-base font-medium">✓ Mark all as read</button>
        </div>
      </div>
    </div>
  );
} 