import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaFigma, FaDiscord } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiTailwindcss } from 'react-icons/si';
import SkillBar from '../ui/SkillBar.jsx';
import resume from '../../assets/Bharat-Resume.pdf';


const About = () => {
  const skills = [
    { name: 'React', percentage: 90, icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', percentage: 85, icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Node.js', percentage: 82, icon: <FaNodeJs />, color: '#339933' },
    { name: 'Discord.js', percentage: 95, icon: <FaDiscord />, color: '#5865F2' },
    { name: 'TailwindCSS', percentage: 88, icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Photoshop', percentage:50,icon: <SiAdobephotoshop />, color: '#31A8FF' },
    { name: 'Illustrator', percentage: 78, icon: <SiAdobeillustrator />, color: '#FF9A00' },
    { name: 'Figma', percentage: 85, icon: <FaFigma />, color: '#F24E1E' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="bg-dark-light py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate developer and designer with a love for creating beautiful, 
              functional digital experiences. My journey in tech started with a fascination 
              for problem-solving and visual design.
            </p>
            <p className="text-gray-300 mb-4">
              I specialize in building modern websites, creating useful Discord bots, and 
              designing eye-catching graphics. My approach combines technical knowledge with 
              creative thinking to deliver solutions that not only work flawlessly but also 
              look amazing.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding or designing, you can find me exploring new technologies, 
              playing video games, or seeking inspiration from art and nature.
            </p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                target="_blank"
                className="px-6 py-3 bg-primary rounded-lg text-white font-medium shadow-lg shadow-primary/20"
              >
                Download Resume
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 text-primary"
            >
              My Skills
            </motion.h3>
            
            {/* Skill Bars */}
            <motion.div
              className="glass-panel p-6 rounded-xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillBar 
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    icon={skill.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Skills Grid (Optional - can be shown on smaller screens) */}
            <motion.div
              className="grid grid-cols-4 gap-4 mt-8 md:hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={`grid-${index}`}
                  className="glass-panel p-3 flex flex-col items-center justify-center text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: `0 10px 30px ${skill.color}20` }}
                >
                  <div className="text-2xl" style={{ color: skill.color }}>{skill.icon}</div>
                  <p className="text-xs mt-1">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;