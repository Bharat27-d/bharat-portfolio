import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard.jsx';

// Import your project images
// import projectImage1 from '../../assets/project1.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Convoy Control Team",
      description: "A fully responsive web application for managing convoy operations.",
      image: "https://i.postimg.cc/Ls2TPFBh/convoy-project.png",
      tags: ["HTML", "CSS", "JS"],
      // github: "https://github.com/",
      demo: "https://example.com",
      category: "web"
    },
    {
      id: 2,
      title: "Multi-purpose Discord Bot",
      description: "A feature-rich Discord bot with moderation, music, games, and utility commands.",
      image: "https://i.postimg.cc/VvCGRBSN/realopsgroup.png",
      tags: ["Discord.js", "Node.js", "MongoDB"],
      // github: "https://github.com/",
      demo: null,
      category: "discord"
    },
    // {
    //   id: 3,
    //   title: "Brand Identity Design",
    //   description: "Complete brand identity package including logo, color palette, and style guide.",
    //   image: "https://placehold.co/600x400/333/FFF?text=Brand+Identity",
    //   tags: ["Photoshop", "Illustrator", "Branding"],
    //   github: null,
    //   demo: "https://example.com",
    //   category: "design"
    // },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Clean and modern portfolio website for a professional photographer.",
      image: "https://i.postimg.cc/LsKW0WkM/Portfolio-project.png",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      demo: "https://bharat-portfolioo.netlify.app/",
      category: "web"
    },
    // {
    //   id: 5,
    //   title: "Music Events Discord Bot",
    //   description: "A specialized Discord bot that helps manage music events and listening parties.",
    //   image: "https://placehold.co/600x400/333/FFF?text=Music+Bot",
    //   tags: ["Discord.js", "Node.js", "Spotify API"],
    //   github: "https://github.com/",
    //   demo: null,
    //   category: "discord"
    // },
    // {
    //   id: 6,
    //   title: "Social Media Graphics Pack",
    //   description: "Custom design templates for social media posts and stories.",
    //   image: "https://placehold.co/600x400/333/FFF?text=Social+Media+Graphics",
    //   tags: ["Photoshop", "Illustrator", "Social Media"],
    //   github: null,
    //   demo: "https://example.com",
    //   category: "design"
    // }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work across web development, Discord bots, and graphic design.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'web', 'discord', 'design'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category 
                    ? 'bg-primary text-white' 
                    : 'bg-dark-light text-gray-300 hover:bg-opacity-70'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;