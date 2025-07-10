import React from "react";

export default function SuccessToast({ message = "Alert created successfully", onClose }) {
  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center bg-[#00937A] text-white rounded-full px-6 py-3 shadow-lg min-w-[280px] justify-between">
        <span className="text-base">{message}</span>
        <button
          className="ml-4 text-white text-lg focus:outline-none hover:text-gray-200"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
} 