import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            <AnimatedText text="Get In Touch" className="justify-center" once />
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm always open to new ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-dark-800 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white mb-1">Email</h4>
                  <p className="text-dark-600 dark:text-gray-300">subodhkatna@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <Phone className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white mb-1">Phone</h4>
                  <p className="text-dark-600 dark:text-gray-300">+91 7888991033</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white mb-1">Location</h4>
                  <p className="text-dark-600 dark:text-gray-300">Barsar, Hamirpur, Himachal Pradesh 174305</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-dark-800 dark:text-white mb-4">
                Find Me On
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/SubodhKatna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-800 dark:bg-white text-white dark:text-dark-800 p-3 rounded-full"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* GitHub Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                    c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                    5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
                    13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07
                    5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5
                    3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37
                    0 0 0 9 18.13V22"></path>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/subodh-katna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-full"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* LinkedIn Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2
                    2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6
                    0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-dark-800 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-dark-600 dark:text-gray-300 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-dark-800 dark:text-white mb-6">
                  Send Me a Message
                </h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white resize-none"
                      placeholder="I'd like to discuss a project opportunity..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${
                      isSubmitting ? 'bg-primary-400' : 'bg-primary-600 hover:bg-primary-700'
                    } text-white rounded-full font-medium transition-colors`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.536-3.536A9.98 9.98 0 002 12h2z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
