import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../ui/Button.jsx';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm Bharat
            <span className="block mt-2">
              <TypeAnimation
                sequence={[
                  'Website Developer',
                  2000,
                  'Discord Bot Developer',
                  2000,
                  'Graphics Designer',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-primary"
              />
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            I build modern digital experiences that bring your ideas to life.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button primary>View My Work</Button>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button primary outline>Contact Me</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;