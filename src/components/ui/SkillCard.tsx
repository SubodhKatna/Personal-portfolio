import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="text-primary-600 dark:text-primary-400 mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-dark-800 dark:text-white">{name}</h3>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5 mb-1">
        <motion.div 
          className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <p className="text-right text-sm text-dark-600 dark:text-gray-400">{level}%</p>
    </motion.div>
  );
};

export default SkillCard;