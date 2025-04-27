import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Server,
  Code2,
  FileJson,
  PenTool,
  TreePine,
  Braces,
} from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const allSkills = [
  // Frontend
  { name: 'React.js', icon: <Code2 size={24} />, category: 'Frontend' },
  { name: 'Next JS', icon: <Code2 size={24} />, category: 'Frontend' },
  { name: 'JavaScript', icon: <Braces size={24} />, category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: <Server size={24} />, category: 'Backend' },
  { name: 'Spring Boot', icon: <TreePine size={24} />, category: 'Backend' },
  { name: 'MongoDB', icon: <Database size={24} />, category: 'Backend' },
  { name: 'MySQL', icon: <Database size={24} />, category: 'Backend' },
  { name: 'Java', icon: <FileJson size={24} />, category: 'Backend' },

  // DevOps
  { name: 'Docker', icon: <Server size={24} />, category: 'DevOps' },
  { name: 'Git', icon: <Code2 size={24} />, category: 'DevOps' },
  { name: 'GitHub', icon: <Code2 size={24} />, category: 'DevOps' },
  { name: 'Maven', icon: <Code2 size={24} />, category: 'DevOps' },

  // UI/UX
  { name: 'Tailwind CSS', icon: <PenTool size={24} />, category: 'UI/UX' },
  { name: 'Responsive Design', icon: <PenTool size={24} />, category: 'UI/UX' },
  { name: 'Figma', icon: <PenTool size={24} />, category: 'UI/UX' },
];

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'UI/UX'];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            <AnimatedText text="My Skills" className="justify-center" once />
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300">
            Explore my technical and design skills below. Use the buttons to filter by category.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md 
                ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scrollable Grid Container */}
        <div className="max-h-[500px] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 p-4 bg-white dark:bg-dark-700 rounded-lg shadow-md"
              >
                <div className="text-primary-600 dark:text-primary-400">{skill.icon}</div>
                <span className="font-medium text-dark-700 dark:text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
