/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect } from "react";

const useScroll = () => {
  const [isDocumentReady, setIsDocumentReady] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(0);
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = e => {
    if (!isDocumentReady) {
      return;
    }
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  useEffect(() => {
    setIsDocumentReady(true);
    setBodyOffset(document.body.getBoundingClientRect());
  }, []);

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
};

export default useScroll;
