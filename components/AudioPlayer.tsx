"use client";

import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/audio/1 Du_hast_heute_Geburtstag.wav" loop />
      <button
        onClick={toggle}
        className="flex items-center gap-1.5 text-gray-400 hover:text-mint-400 transition-colors"
        aria-label={playing ? "Pause" : "Play"}
      >
        <span className="text-sm">{playing ? "⏸" : "▶"}</span>
        <span className="hidden sm:inline text-xs font-medium">
          {playing ? "Pause" : "Play"}
        </span>
      </button>
    </>
  );
}
