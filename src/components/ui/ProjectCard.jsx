import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tags, github, demo }) => {
  return (
    <motion.div 
      className="glass-panel overflow-hidden h-full flex flex-col"
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
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-dark-light rounded-md text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0 flex gap-4">
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </motion.a>
        )}
        {demo && (
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;