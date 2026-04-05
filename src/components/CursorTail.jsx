import { useEffect } from "react";
import "./CursorTail.css";

export const CursorTail = () => {
  useEffect(() => {
    const handleMove = (e) => {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.classList.add("fade-out");
      }, 100);

      setTimeout(() => {
        dot.remove();
      }, 700);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
};