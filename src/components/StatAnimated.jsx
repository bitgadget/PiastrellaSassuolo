import React from "react";
import { useEffect, useState } from "react";

export default function StatAnimated({ value, label, suffix = "", decimals = 0, duration = 1200, valueStyle }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (value - start) * progress;
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center min-w-[90px]">
      <span
        className="text-2xl sm:text-3xl font-extrabold text-green-700"
        style={{
          ...(valueStyle || {}),
          textShadow: "0 1px 1px #fff, 0 0 1px #fff", // glow molto più leggero
        }}
      >
        {display.toFixed(decimals)}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-neutral-700 font-semibold mt-1 text-center">{label}</span>
    </div>
  );
}