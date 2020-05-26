//dev.to/3sanket3/usewindowsize-react-hook-to-handle-responsiveness-in-javascript-3dcl
import { useState, useEffect } from "react";

import { BREAKPOINTS } from "../constants/theme";

//a Util function that will conver the absolute width into breakpoints
function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth < BREAKPOINTS.xxs) {
      return "xxs";
    } else if (windowWidth < BREAKPOINTS.xs) {
      return "xs";
    } else if (windowWidth < BREAKPOINTS.s) {
      return "s";
    } else if (windowWidth < BREAKPOINTS.m) {
      return "m";
    } else if (windowWidth < BREAKPOINTS.l) {
      return "l";
    } else {
      return "xl";
    }
  } else {
    return undefined;
  }
}
//☝️

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [state, setState] = useState({
    size: isWindowClient ? window.innerWidth : undefined,
    breakpoint: isWindowClient ? getBreakPoint(window.innerWidth) : undefined,
  });

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setState({
        size: window.innerWidth,
        breakpoint: getBreakPoint(window.innerWidth),
      });
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //unregister the listerner on destroy of the hook
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setState]);

  return state;
}

export default useWindowSize;
