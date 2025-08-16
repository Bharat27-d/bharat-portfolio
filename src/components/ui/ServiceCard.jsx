import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="glass-panel p-8 h-full"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px rgba(14, 165, 233, 0.15)",
        borderColor: "rgba(14, 165, 233, 0.5)"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-primary text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;