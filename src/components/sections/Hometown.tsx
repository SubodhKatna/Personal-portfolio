import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "../ui/AnimatedText";

const hometownImages = [
  {
    url: "/camp.webp", // fixed typo from '.wbep' to '.webp' (assuming)
    alt: "Mountains in Himachal Pradesh",
  },
  {
    url: "/hidimba.jpg",
    alt: "Temple in Himachal Pradesh",
  },
  {
    url: "/shringa.jpg",
    alt: "Temple in Himachal Pradesh",
  },
];

const Hometown: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="hometown"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-dark-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            <AnimatedText text="My Hometown" className="justify-center" once />
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300">
            Discover the beauty of Himachal Pradesh, India - the place I call
            home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            style={{ y, opacity }}
            className="relative grid grid-cols-2 gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-2"
            >
              <img
                src={hometownImages[0].url}
                alt={hometownImages[0].alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={hometownImages[1].url}
                alt={hometownImages[1].alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={hometownImages[2].url}
                alt={hometownImages[2].alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
              Himachal Pradesh: The Land of Snow
            </h3>
            <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed">
              Nestled in the western Himalayas, Himachal Pradesh is known for
              its stunning landscapes, snow-capped mountains, and lush forests.
              Growing up in this beautiful region has deeply influenced my
              creativity and approach to design and development.
            </p>
            <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed">
              The state is home to picturesque hill stations like Shimla,
              Manali, and Dharamshala, which attract tourists from around the
              world. The pristine rivers, dense forests, and magnificent
              mountains create a perfect backdrop for inspiration and
              innovation.
            </p>
            <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed">
              The rich cultural heritage of Himachal Pradesh, with its
              traditional arts, music, and festivals, has taught me the
              importance of blending functionality with aesthetics in my work as
              a developer.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-xl font-semibold text-dark-800 dark:text-white mb-4">
                Quick Facts About Himachal Pradesh
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Capital: Shimla",
                  "Area: 55,673 km²",
                  'Known as: "Dev Bhoomi" (Land of Gods)',
                  "Famous for: Adventure sports, temples, wildlife",
                  "Main Languages: Hindi, Pahari",
                  "Major Attractions: Shimla, Manali, Dharamshala",
                ].map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-dark-600 dark:text-gray-300"
                  >
                    <span className="h-2 w-2 bg-primary-600 rounded-full"></span>
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hometown;
