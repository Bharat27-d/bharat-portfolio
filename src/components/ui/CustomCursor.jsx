import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div 
        className="hidden md:block fixed w-5 h-5 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 100,
          damping: 10,
        }}
      />
      <motion.div 
        className="hidden md:block fixed w-36 h-36 rounded-full border-2 border-primary border-opacity-20 pointer-events-none z-40"
        animate={{
          x: position.x - 72,
          y: position.y - 72,
          opacity: isHovering ? 0.5 : 0.1,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.5,
          stiffness: 50,
          damping: 20,
        }}
      />
    </>
  );
};

export default CustomCursor;