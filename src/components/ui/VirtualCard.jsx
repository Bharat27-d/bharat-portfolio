import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiShare, FiGithub, FiLinkedin, FiTwitter, FiMail, FiLink, FiMapPin, FiPhone } from 'react-icons/fi';
import { QRCodeSVG } from 'qrcode.react'; // Updated import statement
import avatarImage from '../../assets/b1.png'; 

const VirtualCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);
  
  // Social links - update with your actual links
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/Bharat27-d' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/bharat-digrase-2064a4315/' },
    { name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/bharat' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:bharatmain27@gmail.com' }
  ];
  
  // Contact info - update with your actual details
  const contactInfo = {
    name: 'Bharat',
    title: 'Full-Stack Developer',
    phone: '+91 8432004624',
    email: 'bharatmain27@gmail.com',
    location: 'Nagpur, India',
    website: 'https://bharat.dev',
    avatar: avatarImage
  };

  // Detect when the card is clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Share functionality using Web Share API
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: contactInfo.name,
          text: `${contactInfo.name} - ${contactInfo.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      // Fallback for browsers that don't support sharing
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Generate and download vCard
  const downloadVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TITLE:${contactInfo.title}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR:;;${contactInfo.location};;;
END:VCARD`;
    
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${contactInfo.name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Component animations
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        damping: 25,
        stiffness: 300
      } 
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <>
      {/* Open Card Button with enhanced animation */}
      <motion.button
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-primary text-white shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      </motion.button>
      
      {/* Notification toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-6 z-50 bg-dark-light px-4 py-2 rounded-lg shadow-lg text-white"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
          >
            <motion.div
              ref={cardRef}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-md w-full rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Card Header with enhanced UI */}
              <div 
                className="relative p-6 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(249, 115, 22, 0.9))"
                }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all z-10"
                >
                  <FiX size={18} />
                </button>
                
                <div className="relative z-10 flex items-center space-x-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  >
                    <img 
                      src={contactInfo.avatar} 
                      alt={contactInfo.name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{contactInfo.name}</h3>
                    <p className="text-white text-opacity-90">{contactInfo.title}</p>
                    <p className="text-white text-opacity-75 text-sm mt-1">Last updated: 2025-08-16</p>
                  </div>
                </div>
              </div>
              
              {/* Card Tabs with improved indicators */}
              <div className="bg-dark-light text-white">
                <div className="flex border-b border-gray-700 relative">
                  {['contact', 'qr', 'social'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 text-center relative ${
                        activeTab === tab ? 'text-primary' : 'text-gray-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <motion.div 
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Tab Content with improved animation */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-6"
                  >
                    {activeTab === 'contact' && (
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <FiPhone className="mt-1 mr-3 text-primary" />
                          <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <div className="flex items-center gap-2">
                              <p>{contactInfo.phone}</p>
                              <button 
                                onClick={() => copyToClipboard(contactInfo.phone)}
                                className="text-xs p-1 text-gray-400 hover:text-primary"
                              >
                                <FiLink size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FiMail className="mt-1 mr-3 text-primary" />
                          <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <div className="flex items-center gap-2">
                              <p>{contactInfo.email}</p>
                              <button 
                                onClick={() => copyToClipboard(contactInfo.email)}
                                className="text-xs p-1 text-gray-400 hover:text-primary"
                              >
                                <FiLink size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FiMapPin className="mt-1 mr-3 text-primary" />
                          <div>
                            <p className="text-sm text-gray-400">Location</p>
                            <p>{contactInfo.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FiLink className="mt-1 mr-3 text-primary" />
                          <div>
                            <p className="text-sm text-gray-400">Website</p>
                            <a 
                              href={contactInfo.website}
                              target="_blank"
                              rel="noopener noreferrer" 
                              className="text-primary hover:underline"
                            >
                              {contactInfo.website.replace('https://', '')}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'qr' && (
                      <div className="flex flex-col items-center">
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white p-4 rounded-xl mb-4 shadow-lg"
                        >
                          <QRCodeSVG 
                            value={contactInfo.website} 
                            size={180}
                            level="H"
                            includeMargin={true}
                          />
                        </motion.div>
                        <p className="text-sm text-gray-400 text-center">
                          Scan with your camera to save my contact or visit my website
                        </p>
                        <button
                          onClick={() => copyToClipboard(contactInfo.website)}
                          className="mt-4 text-primary text-sm flex items-center"
                        >
                          <FiLink size={14} className="mr-1" /> Copy website URL
                        </button>
                      </div>
                    )}
                    
                    {activeTab === 'social' && (
                      <div className="grid grid-cols-2 gap-4">
                        {socialLinks.map((link, index) => (
                          <motion.a 
                            key={index}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(20, 20, 25, 0.9)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-dark rounded-lg hover:bg-opacity-80 transition-all"
                          >
                            <span className="text-xl mr-3 text-primary">{link.icon}</span>
                            <span>{link.name}</span>
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
                
                {/* Card Actions with improved buttons */}
                <div className="border-t border-gray-700 p-4 flex space-x-3">
                  <motion.button 
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(14, 165, 233, 0.8)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={downloadVCard}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary rounded-lg font-medium transition-all"
                  >
                    <FiDownload /> Save Contact
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(30, 30, 35, 0.8)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-dark rounded-lg font-medium transition-all"
                  >
                    <FiShare /> Share Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualCard;