import React, { useState } from "react";

export default function SetAlertModal({ onClose, onCreateAlert }) {
  const [condition, setCondition] = useState("PMS");
  const [direction, setDirection] = useState("Crossing up");
  const [price, setPrice] = useState("714.25");
  const [trigger, setTrigger] = useState("once");
  const [expiration, setExpiration] = useState("2024-02-16T09:00");
  const [alertName, setAlertName] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-sm mx-auto rounded-2xl bg-[#232323] p-5 shadow-xl flex flex-col gap-2 max-h-[430px]">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-white text-base font-medium mb-1">Set an alert</h2>
        {/* Condition */}
        <div className="flex flex-col gap-0.5">
          <label className="text-gray-300 text-xs">Condition</label>
          <div className="flex gap-1">
            <select value={condition} onChange={e => setCondition(e.target.value)} className="bg-[#353535] text-white rounded-lg px-3 py-1.5 w-full text-left text-sm focus:outline-none">
              <option value="PMS">PMS <span className="text-xs text-gray-400">Premium Motor Spirit</span></option>
              <option value="AGO">AGO <span className="text-xs text-gray-400">Automotive Gas Oil</span></option>
            </select>
          </div>
        </div>
        {/* Direction */}
        <div className="flex flex-col gap-0.5">
          <select value={direction} onChange={e => setDirection(e.target.value)} className="bg-[#353535] text-white rounded-lg px-3 py-1.5 w-full text-sm focus:outline-none">
            <option>Crossing up</option>
            <option>Crossing down</option>
          </select>
        </div>
        {/* Price */}
        <div className="flex flex-col gap-0.5">
          <label className="text-gray-300 text-xs">Price:</label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="bg-[#353535] text-white rounded-lg px-3 py-1.5 w-full text-sm focus:outline-none" />
        </div>
        <hr className="my-1 border-[#353535]" />
        {/* Trigger */}
        <div className="flex flex-col gap-0.5">
          <label className="text-gray-300 text-xs mb-0.5">Trigger</label>
          <div className="flex gap-1">
            <button
              className={`flex-1 px-2.5 py-1.5 rounded-lg text-sm ${trigger === "once" ? "bg-white text-black" : "bg-[#353535] text-white"}`}
              onClick={() => setTrigger("once")}
            >
              Only once
            </button>
            <button
              className={`flex-1 px-2.5 py-1.5 rounded-lg text-sm ${trigger === "every" ? "bg-white text-black" : "bg-[#353535] text-white"}`}
              onClick={() => setTrigger("every")}
            >
              Every time
            </button>
          </div>
          <span className="text-xs text-gray-400 mt-0.5">The alert will only trigger once and will not be repeated</span>
        </div>
        {/* Expiration */}
        <div className="flex flex-col gap-0.5">
          <label className="text-gray-300 text-xs">Expiration</label>
          <input type="datetime-local" value={expiration} onChange={e => setExpiration(e.target.value)} className="bg-[#353535] text-white rounded-lg px-3 py-1.5 w-full text-sm focus:outline-none" />
        </div>
        <hr className="my-1 border-[#353535]" />
        {/* Alert name */}
        <div className="flex flex-col gap-0.5">
          <label className="text-gray-300 text-xs">Alert name</label>
          <input type="text" placeholder="Name your alert" value={alertName} onChange={e => setAlertName(e.target.value)} className="bg-[#353535] text-white rounded-lg px-3 py-1.5 w-full text-sm focus:outline-none mb-1" />
          <input type="text" value={`PMS crossing ${price}`} readOnly className="bg-[#353535] text-white rounded-lg px-3 py-1.5 w-full text-sm focus:outline-none" />
        </div>
        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <button onClick={onClose} className="flex-1 bg-[#353535] text-white rounded-full py-2 text-sm font-medium">Cancel</button>
          <button className="flex-1 bg-[#1CC8B0] text-white rounded-full py-2 text-sm font-medium" onClick={() => {
            if (onCreateAlert) onCreateAlert({
              condition,
              direction,
              price,
              trigger,
              expiration,
              name: alertName || `${condition} crossing ${price}`
            });
            if (onClose) onClose();
          }}>Create alert</button>
        </div>
      </div>
    </div>
  );
} 