import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

export default function SkillCard({ category, items, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl p-6 transform transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        className="flex flex-wrap gap-2"
      >
        {items.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}