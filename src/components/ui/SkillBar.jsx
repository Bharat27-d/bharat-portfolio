import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ name, percentage, color = '#0ea5e9', icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="font-medium text-gray-200">{name}</span>
        </div>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      
      <div className="w-full h-3 bg-dark-light rounded-full overflow-hidden border border-gray-800">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.165, 0.84, 0.44, 1],
            delay: 0.2
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;