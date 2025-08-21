import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' }
  ];

  // Navbar animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  // Logo animation variants
  const logoVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05,
      textShadow: "0px 0px 8px rgb(14 165 233 / 0.7)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Navigation link variants
  const linkVariants = {
    normal: { y: 0, opacity: 1 },
    hover: { 
      y: -3, 
      opacity: 1,
      color: "#0ea5e9",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  // Mobile menu item variants
  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-dark bg-opacity-80 backdrop-blur-lg shadow-lg border-b border-primary border-opacity-20' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          variants={logoVariants}
          initial="normal"
          whileHover="hover"
          className="text-2xl font-bold"
        >
          <span className="text-primary">Bharat</span>
          <span className="text-white"></span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <motion.li 
              key={link.name}
              variants={linkVariants}
              initial="normal"
              whileHover="hover"
              className="relative px-3 py-2"
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`font-medium transition-colors ${
                  activeLink === link.to 
                    ? 'text-primary' 
                    : 'text-gray-300 hover:text-primary'
                }`}
                onClick={() => setActiveLink(link.to)}
              >
                {link.name}
              </Link>
              {activeLink === link.to && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
          
          {/* CTA Button */}
          <motion.li 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="ml-4"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#0369a1" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-lg shadow-primary/20 transition-all"
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-2xl text-primary bg-dark-light bg-opacity-50 rounded-full backdrop-blur-sm border border-primary border-opacity-20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden"
          >
            <div className="container-custom py-4 bg-dark-light bg-opacity-95 backdrop-blur-lg rounded-b-2xl shadow-lg border-t border-primary border-opacity-10">
              <ul className="flex flex-col space-y-3 px-2">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={mobileItemVariants}
                    className="overflow-hidden"
                  >
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={`block py-3 px-4 rounded-lg transition-all ${
                        activeLink === link.to 
                          ? 'bg-primary bg-opacity-10 text-primary font-medium' 
                          : 'hover:bg-dark-light hover:bg-opacity-70 text-gray-300'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveLink(link.to);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.li 
                  variants={mobileItemVariants}
                  className="pt-2"
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-primary text-white rounded-lg font-medium text-center shadow-lg shadow-primary/20"
                    >
                      Let's Talk
                    </motion.button>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;