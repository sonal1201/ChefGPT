import React from "react";

export default function ChefGPTLogo({ size = 50, showText = true }) {
  return (
    <div className="flex items-center  cursor-pointer group">
      
      {/* Logo Icon */}
      <div style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-black "
        >
          {/* Chef Hat */}
          <path
            d="M25 40 C20 18, 80 18, 75 40 L75 58 L25 58 Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Robot Eyes (bigger) */}
          <circle cx="40" cy="66" r="4" strokeWidth="3" />
          <circle cx="60" cy="66" r="4" strokeWidth="3" />

          {/* Smile (thicker + smoother) */}
          <path
            d="M38 76 Q50 86 62 76"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Circuit Line */}
          <line
            x1="50"
            y1="58"
            x2="50"
            y2="38"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="50" cy="33" r="3" strokeWidth="3" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <span className="text-xl font-extrabold tracking-wide text-stone-900 ">
          Chef
          <span className="group-hover:text-orange-600 transition">
            GPT
          </span>
        </span>
      )}
    </div>
  );
}