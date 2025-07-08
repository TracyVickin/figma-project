import React from "react";

export default function NewsCard() {
  return (
    <div className="bg-[#191B1D] rounded-3xl p-0 flex flex-col h-full overflow-hidden">
      <div
        className="relative h-full w-full bg-cover bg-center rounded-t-3xl"
        style={{ backgroundImage: `url('${process.env.PUBLIC_URL + "/property 1=Default.png"}')` }}
      >
      </div>
    </div>
  );
} 