import React from "react";

export default function SuccessModal({ message = "Alert created successfully", onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center bg-[#00937A] text-white rounded-full px-8 py-4 shadow-lg min-w-[320px] justify-between relative">
          <span className="text-base">{message}</span>
          <button
            className="ml-6 text-white text-lg focus:outline-none hover:text-gray-200 absolute right-4 top-1/2 -translate-y-1/2"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
} 