import React from "react";

export default function Nav() {
  return (
    <>
      <div className="bg-[#232323] text-white font-[600] text-center py-2.5">
        <h1>
          <span className="text-orange-300">Free shipping </span>order from all
          item
        </h1>
      </div>
      <nav className="flex items-center">
        <img src="logo-1.svg" alt="" className="w-[120px] h-[60px]" />
        <div className="w-[23%] flex justify-between py-1 rounded-3xl border-1 border-gray-200">
          <input type="text" placeholder="Search our store" />
          <button className="bg-[#333333] px-2 py-2 rounded-full cursor-pointer hover:bg-orange-300 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
 