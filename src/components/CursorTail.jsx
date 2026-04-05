import { useEffect, useRef } from "react";
import "./CursorTail.css";

export const CursorTail = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
};

export default CursorTail;