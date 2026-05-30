"use client";

import { useState } from "react";
import { singles, moresingles } from "@/lib/content";
import SingleCard from "@/components/SingleCard";

export default function SinglesSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-12">Singles</h2>

      {/* Hauptsingles (immer sichtbar) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {singles.map((single) => (
          <SingleCard
            key={single.id}
            title={single.title}
            cover={single.cover}
            spotifyUrl={single.spotifyUrl}
            youtubeUrl={single.youtubeUrl}
          />
        ))}
      </div>

      {/* Mehr entdecken Button */}
      <div className="flex justify-center mb-12">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-6 py-2 text-gray-400 hover:text-mint-400 transition-colors text-sm font-medium"
        >
          {expanded ? "↑ Weniger anzeigen" : "↓ Mehr entdecken"}
        </button>
      </div>

      {/* Zusätzliche Singles (ausgeklappt) */}
      {expanded && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-right">
          {moresingles.map((single) => (
            <SingleCard
              key={single.id}
              title={single.title}
              cover={single.cover}
              spotifyUrl={single.spotifyUrl}
              youtubeUrl={single.youtubeUrl}
            />
          ))}
        </div>
      )}
    </section>
  );
}
