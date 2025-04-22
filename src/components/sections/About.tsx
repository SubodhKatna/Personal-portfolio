import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-dark-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
              <AnimatedText text="About Me" className="justify-center" once />
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Subodh Katna"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                Computer Science Student & MERN Stack Developer
              </h3>
              <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Subodh Katna, a passionate Computer Science student at Lovely Professional University with a CGPA of 7.98. I specialize in full-stack development using the MERN stack and have experience with various modern technologies.
              </p>
              <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in Data Structures and Algorithms, Problem-Solving, and Responsive Web Design, I enjoy creating efficient and scalable web applications. I'm proficient in multiple programming languages including Python, Java, and JavaScript.
              </p>
              <p className="text-dark-600 dark:text-gray-300 mb-8 leading-relaxed">
                Originally from Barsar, Hamirpur in the beautiful Himachal Pradesh, I bring a unique perspective to my development work. I'm constantly learning and expanding my skillset through certifications and hands-on projects.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Email</h4>
                  <p className="text-dark-600 dark:text-gray-300">subodhkatna@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Location</h4>
                  <p className="text-dark-600 dark:text-gray-300">Barsar, Hamirpur, HP</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;