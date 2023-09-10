import { useEffect, useRef } from "react";

type Callback = () => void;

export const useTimeout = (callback: Callback, delay: number | null) => {
  const savedCallback = useRef<Callback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);
};
