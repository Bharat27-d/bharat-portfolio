import React from 'react';
import { motion } from 'framer-motion';

// Either use ShapeVariants or add a disable comment if you want to keep it for later
// eslint-disable-next-line no-unused-vars
const ShapeVariants = {
  animate: {
    y: ["0%", "100%", "0%"],
    transition: {
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full bg-primary bg-opacity-5"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      
      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={`line-${i}`} className="h-px bg-primary bg-opacity-30" />
        ))}
      </div>
      
      {/* Vertical lines */}
      <div className="absolute inset-0 flex flex-row justify-between opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={`vline-${i}`} className="w-px h-full bg-primary bg-opacity-30" />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;