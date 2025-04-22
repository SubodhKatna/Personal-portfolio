import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Headphones, Landmark } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import HobbyCard from '../ui/HobbyCard';

const hobbies = [
  {
    title: 'Reading Manga',
    description: 'Diving into captivating manga stories and exploring a variety of genres and artistic styles.',
    icon: <BookOpen size={24} />,
    bgImage: 'https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Listening to OST & Rap Music',
    description: 'Enjoying original soundtracks from anime and games, and exploring lyrical depth in rap music.',
    icon: <Headphones size={24} />,
    bgImage: 'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Greek Mythology',
    description: 'Reading about Greek mythology, learning about gods, heroes, and epic tales that shaped ancient beliefs.',
    icon: <Landmark size={24} />,
    bgImage: 'https://images.pexels.com/photos/2248127/pexels-photo-2248127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            <AnimatedText text="My Hobbies & Interests" className="justify-center" once />
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300">
            Beyond coding, here are some activities I'm passionate about and that help me stay creative and inspired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={hobby.title}
              title={hobby.title}
              description={hobby.description}
              icon={hobby.icon}
              bgImage={hobby.bgImage}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-dark-700 p-8 rounded-xl shadow-md text-center"
        >
          <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-4">
            Why Hobbies Matter
          </h3>
          <p className="text-dark-600 dark:text-gray-300 mb-0 max-w-3xl mx-auto">
            I believe that well-rounded interests outside of work contribute significantly to creativity and problem-solving in development. My hobbies provide fresh perspectives, relaxation, and inspiration that I bring back to my coding projects, resulting in more innovative and thoughtful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;