import React from 'react';
import { motion } from 'framer-motion';

interface HobbyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
  index: number;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ title, description, icon, bgImage, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group h-80 overflow-hidden rounded-xl shadow-lg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-dark-900/60 group-hover:bg-dark-900/70 transition-all duration-300"></div>
      
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        <div className="mb-4 text-white p-3 bg-primary-600/80 rounded-full w-14 h-14 flex items-center justify-center">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="text-gray-200 text-sm line-clamp-3"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default HobbyCard;