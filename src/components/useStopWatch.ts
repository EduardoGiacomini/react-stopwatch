import { useEffect, useState } from "react";

export function useStopWatch(start: number) {
  const [seconds, setSeconds] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  function display() {
    var hour = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    var minute = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    var second = Math.floor((seconds % 3600) % 60)
      .toString()
      .padStart(2, "0");

    return hour + ":" + minute + ":" + second;
  }

  return display();
}
