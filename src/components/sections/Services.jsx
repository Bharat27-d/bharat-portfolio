import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaPalette } from 'react-icons/fa';
import ServiceCard from '../ui/ServiceCard.jsx';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      description: "Modern, responsive websites built with React and other cutting-edge technologies. I focus on performance, usability, and beautiful design."
    },
    {
      icon: <FaRobot />,
      title: "Discord Bot Development",
      description: "Custom Discord bots for moderation, music, games, and more. Designed to enhance your server with advanced functionality and ease of use."
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      description: "Eye-catching graphics for logos, branding, social media, and more. My designs combine creativity with strategic thinking to help you stand out."
    }
  ];

  return (
    <section id="services" className="bg-dark-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I offer professional services tailored to meet your digital needs. From websites to Discord bots to graphic design, I've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;