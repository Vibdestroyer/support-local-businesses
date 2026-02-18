"use client";

import { useState } from "react";

type BusinessCardProps = {
  name: string;
  category: string;
  rating: number;
  address: string;
  description: string;
  website: string;
};

export default function BusinessCard({
  name,
  category,
  rating,
  address,
  description,
  website,
}: BusinessCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 ${
        expanded ? "shadow-xl shadow-purple-500/10" : ""
      }`}
    >
      {/* HEADER SECTION */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold text-white leading-tight text-[clamp(1.2rem,2vw,1.8rem)]">
            {name}
          </h2>

          <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-purple-600/20 text-purple-300">
            {category}
          </span>

          <p className="mt-3 text-zinc-300 text-[clamp(0.9rem,1.2vw,1rem)]">
            ⭐ {rating != null ? rating.toFixed(1) : "No ratings yet"}
          </p>
        </div>

       <button
  onClick={() => setExpanded(!expanded)}
  className="ml-auto rounded-lg bg-purple-600/20 px-4 py-2 text-sm font-medium text-purple-300 transition hover:bg-purple-600/30 hover:text-white"
>
  {expanded ? "Show Less" : "More Details"}
</button>

      </div>

      {/* EXPANDABLE CONTENT */}
      <div
        className={`grid transition-all duration-500 overflow-hidden ${
          expanded ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-zinc-400 mb-4 text-[clamp(0.9rem,1.2vw,1rem)] leading-relaxed">
            {description}
          </p>

          <p className="text-zinc-500 text-sm mb-2">
            📍 {address}
          </p>

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 text-sm underline"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
