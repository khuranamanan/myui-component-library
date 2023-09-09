import { useEffect, useState } from "react";

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

const breakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

function getScreenSize(width: number): keyof Breakpoints {
  if (width < breakpoints.sm) {
    return "sm";
  } else if (width < breakpoints.md) {
    return "md";
  } else if (width < breakpoints.lg) {
    return "lg";
  } else {
    return "xl";
  }
}

function useViewportWidth(): keyof Breakpoints {
  const [screenSize, setScreenSize] = useState<keyof Breakpoints>(
    getScreenSize(window.innerWidth)
  );

  useEffect(() => {
    function handleResize() {
      const newSize = getScreenSize(window.innerWidth);
      if (newSize !== screenSize) {
        setScreenSize(newSize);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return screenSize;
}

export default useViewportWidth;
