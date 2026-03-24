import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updatePointerState = (e) => {
      const target = e.target;
      const clickable = target.closest(
        'a, button, input, textarea, [role="button"]',
      );
      setIsPointer(Boolean(clickable));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", updatePointerState);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", updatePointerState);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 rounded-full bg-cyan-400 mix-blend-difference md:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-cyan-400/50 md:block"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 24, mass: 0.8 }}
      />
    </>
  );
}

export default CustomCursor;