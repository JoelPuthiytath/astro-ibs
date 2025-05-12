
import React, { useRef, useLayoutEffect } from "react";

export default function AnimatedWave() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const wave = {
      y: height / 1.5,
      length: 0.012,
      amplitude: 150,
      frequency: 0.2,
      speed: 0.01,
    };
    const strokeColor = { h: 0, s: 0, l: 100 };
    const bgColor = { r: 0, g: 0, b: 0, a: 0.01 };
    let increment = wave.frequency;

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      wave.y = height / 1.5;
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      // fade previous frame
      ctx.fillStyle = `rgba(${bgColor.r},${bgColor.g},${bgColor.b},${bgColor.a})`;
      ctx.fillRect(0, 0, width, height);

      // draw wave
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      for (let x = 0; x <= width; x++) {
        const y =
          wave.y +
          Math.sin(x * wave.length * Math.sin(increment) + increment) *
            wave.amplitude *
            Math.sin(increment);
        ctx.lineTo(x, y);
      }
      ctx.lineWidth = 1;
      ctx.strokeStyle = `hsl(${strokeColor.h *
        Math.sin(increment)},${strokeColor.s}%,${strokeColor.l}%)`;
      ctx.stroke();

      increment += wave.speed;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full mix-blend-overlay opacity-20 z-2"
    />
  );
}
