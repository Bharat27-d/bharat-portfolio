import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-light py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">Bharat.dev</h3>
            <p className="text-sm mt-2 text-gray-400">
              Web Developer | Discord Bot Developer | Graphics Designer
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Bharat27-d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;