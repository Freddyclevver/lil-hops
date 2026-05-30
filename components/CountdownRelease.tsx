"use client";

import { useEffect, useState } from "react";

export default function CountdownRelease() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const releaseDate = new Date("2026-06-05T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = releaseDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  return (
    <div className="mt-12 pt-8 border-t border-mint-400 border-opacity-30">
      <p className="text-mint-400 text-sm uppercase tracking-widest mb-4">
        Album Release in
      </p>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-pink-400">
            {timeLeft.days}
          </div>
          <p className="text-xs text-gray-400 mt-2">Tage</p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-pink-400">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <p className="text-xs text-gray-400 mt-2">Stunden</p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-pink-400">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <p className="text-xs text-gray-400 mt-2">Minuten</p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-pink-400">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <p className="text-xs text-gray-400 mt-2">Sekunden</p>
        </div>
      </div>
    </div>
  );
}
