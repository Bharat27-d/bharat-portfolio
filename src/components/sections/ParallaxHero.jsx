import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 750]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="h-screen overflow-hidden relative flex items-center justify-center">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 bg-dark"
        style={{ opacity }}
      />
      
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary bg-opacity-10 blur-3xl"
        style={{ y: y1 }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full bg-secondary bg-opacity-10 blur-3xl"
        style={{ y: y2 }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center"
        style={{ y: y3, opacity }}
      >
        <h1 className="text-6xl font-bold mb-4">
          Crafting Digital <span className="text-primary">Experiences</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto">
          Web Developer • Discord Bot Developer • Graphics Designer
        </p>
      </motion.div>
    </div>
  );
};

export default ParallaxHero;