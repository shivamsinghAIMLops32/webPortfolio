import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Hi, I'm Shivam Singh</span>
            <span className="block text-indigo-600">Full Stack Developer</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Passionate about building scalable web applications and solving complex problems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/shivamsinghAIMLops32"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:shivamsinghcse19@gmail.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+918920066134"
                className="text-gray-400 hover:text-gray-500"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}