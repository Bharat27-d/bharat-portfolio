import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mascotte",
      role: "Founder of RealOps Group",
      text: "Bharat built us a dedicated bot for our server in just 7 days and even suggested improvements beyond our requirements. He is quick to fix issues, provides excellent support, and has made our workload much easier. We highly recommend him for bots and websites.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    // {
    //   id: 2,
    //   name: "Sophia Williams",
    //   role: "Discord Server Owner",
    //   text: "The custom Discord bot that Bharat developed for our server has completely transformed our community engagement. Highly recommended!",
    //   avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    // },
    // {
    //   id: 3,
    //   name: "Marcus Johnson",
    //   role: "Startup Founder",
    //   text: "Bharat's design work helped us establish a strong brand identity from day one. His combination of technical and design skills is rare to find.",
    //   avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    // }
  ];
  
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feedback from people I've worked with on various projects
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-2 border-primary">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-xl italic mb-8 text-gray-300">"{testimonials[current].text}"</p>
              
              <div>
                <h4 className="text-lg font-bold text-primary">{testimonials[current].name}</h4>
                <p className="text-gray-400">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-2 rounded-full bg-dark-light bg-opacity-70 text-white"
            >
              <FiChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-2 rounded-full bg-dark-light bg-opacity-70 text-white"
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;