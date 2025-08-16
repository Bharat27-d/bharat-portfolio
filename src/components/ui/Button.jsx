import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  primary = true, 
  outline = false,
  onClick, 
  className = '',
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300
        ${primary && !outline ? 'bg-primary text-white hover:bg-opacity-90' : ''}
        ${primary && outline ? 'border-2 border-primary text-primary hover:bg-primary hover:bg-opacity-10' : ''}
        ${!primary && !outline ? 'bg-secondary text-white hover:bg-opacity-90' : ''}
        ${!primary && outline ? 'border-2 border-secondary text-secondary hover:bg-secondary hover:bg-opacity-10' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;