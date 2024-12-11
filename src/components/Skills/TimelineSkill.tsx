import { motion } from 'framer-motion';
import { useState } from 'react';

interface TimelineSkillProps {
  skill: {
    category: string;
    items: string[];
    year: string;
    description: string;
  };
  index: number;
}

export default function TimelineSkill({ skill, index }: TimelineSkillProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}
    >
      <div className="w-1/2" />
      <div className="w-6 h-6 absolute left-1/2 -ml-3 rounded-full bg-indigo-500 dark:bg-indigo-400" />
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`w-1/2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl ${
          index % 2 === 0 ? 'mr-8' : 'ml-8'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {skill.category}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.year}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {skill.description}
        </p>
        <motion.div
          animate={{ height: isExpanded ? 'auto' : '0' }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Show Skills'}
        </button>
      </motion.div>
    </motion.div>
  );
}