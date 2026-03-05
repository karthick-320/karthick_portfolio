import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Keep track of the actual mouse position and the trailing outline position
  const mouse = useRef({ x: 0, y: 0 });
  const outline = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Update the solid dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(calc(${mouse.current.x}px - 50%), calc(${mouse.current.y}px - 50%), 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smooth interpolation (lerp) for the outline trailing effect
      // The 0.15 value controls the speed/delay. Lower = slower trail, Higher = faster.
      outline.current.x += (mouse.current.x - outline.current.x) * 0.15;
      outline.current.y += (mouse.current.y - outline.current.y) * 0.15;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(calc(${outline.current.x}px - 50%), calc(${outline.current.y}px - 50%), 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-outline" ref={outlineRef}></div>
    </>
  );
};

export default CustomCursor;
