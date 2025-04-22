import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: 'Horizon Finance Website',
    description: 'A secure finance application with Plaid integration for bank accounts, real-time transaction tracking, and optimized performance using Next.js.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Zod', 'Plaid API'],
    githubUrl: 'https://github.com/SubodhKatna',
  },
  {
    title: 'Smart Contact Manager',
    description: 'A full-stack contact management system with role-based authentication, OAuth login, and AWS integration for secure cloud-based storage.',
    image: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS'],
    githubUrl: 'https://github.com/SubodhKatna',
  },
  {
    title: 'Music Blaze',
    description: 'A full-stack Spotify clone with user authentication, cloud storage, and advanced music playback features.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/SubodhKatna',
  },
  {
    title: 'Fkart App',
    description: 'A secure inventory system with real-time stock tracking and order management, improving efficiency by 25%.',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['PHP', 'MySQL', 'phpMyAdmin'],
    githubUrl: 'https://github.com/SubodhKatna',
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive task management application with real-time updates, team collaboration features, and performance analytics.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/SubodhKatna',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            <AnimatedText text="Featured Projects" className="justify-center" once />
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills in building modern web applications using various technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work? Check out my GitHub repository for additional projects.
          </p>
          <motion.a
            href="https://github.com/SubodhKatna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800 dark:bg-white text-white dark:text-dark-800 rounded-full hover:bg-dark-700 dark:hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;