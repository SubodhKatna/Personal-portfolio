import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import ThreeScene from '../ui/ThreeScene';
import AnimatedText from '../ui/AnimatedText';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16"
    >
      <ThreeScene />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4">
            Hi there, I'm
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-dark-800 dark:text-white mb-4">
            <AnimatedText text="Subodh Katna" className="justify-center" />
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark-600 dark:text-gray-300">
            <AnimatedText 
              text="MERN Stack Developer" 
              className="justify-center" 
              delay={0.2}
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mx-auto text-lg text-dark-600 dark:text-gray-300 mb-8"
        >
          Building beautiful, functional, and scalable web applications with modern technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="\public\Specialized-CV.pdf"
            download
            className="px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600/10 rounded-full font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          <motion.a
            href="#projects"
            className="px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600/10 rounded-full font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center space-x-5"
        >
          <motion.a
            href="https://github.com/SubodhKatna"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#3b82f6' }}
            className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/subodh-katna"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#3b82f6' }}
            className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={30} className="text-primary-600 dark:text-primary-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
