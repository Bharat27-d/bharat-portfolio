import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-dark-light rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark text-white hover:bg-primary transition-colors"
              onClick={onClose}
            >
              <FiX size={20} />
            </button>
            
            {/* Project image */}
            <div className="w-full h-[300px]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-top rounded-t-xl"
              />
            </div>
            
            {/* Project details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              {project.longDescription && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">About this project</h4>
                  <p className="text-gray-300">{project.longDescription}</p>
                </div>
              )}
              
              {project.features && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex gap-4 mt-8">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark rounded-lg hover:bg-opacity-80 transition-colors"
                  >
                    <FiGithub size={18} />
                    <span>View Code</span>
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg hover:bg-opacity-80 transition-colors"
                  >
                    <FiExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;