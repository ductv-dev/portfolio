"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speedMs = 45, startDelayMs = 0) {
  const [length, setLength] = useState(0);
  const [started, setStarted] = useState(startDelayMs === 0);

  useEffect(() => {
    setLength(0);
    setStarted(startDelayMs === 0);
    if (!text) return;

    let interval: ReturnType<typeof setInterval>;

    const startTimer = setTimeout(() => {
      setStarted(true);
      interval = setInterval(() => {
        setLength((current) => {
          if (current >= text.length) {
            clearInterval(interval);
            return current;
          }
          return current + 1;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speedMs, startDelayMs]);

  return {
    typed: text.slice(0, length),
    done: length >= text.length,
    started,
  };
}
