import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ children, className, scale = 1.05, perspective = 1000 }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate rotation values
    const rotateYValue = ((mouseX - centerX) / (width / 2)) * 5;
    const rotateXValue = ((centerY - mouseY) / (height / 2)) * 5;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setRotateX(0);
        setRotateY(0);
      }}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: isHovering ? scale : 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      }}
    >
      {children}
      {isHovering && (
        <motion.div
          className="absolute inset-0 bg-primary rounded-xl opacity-0 pointer-events-none"
          animate={{
            opacity: [0, 0.05, 0],
            transition: { repeat: Infinity, duration: 1.5 }
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;