import { motion } from 'framer-motion';
import { Trophy, FileText } from 'lucide-react';

const achievements = [
  {
    title: "Smart India Hackathon Winner",
    description: "Awarded first place for innovative solution in the Smart India Hackathon college competition",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Research Paper Publication",
    description: "Co-authored and published research paper titled 'AI Resume Analyzer' in IJERT Volume 13",
    icon: FileText,
    color: "from-blue-400 to-indigo-500"
  }
];

export default function Achievements() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-400 text-xl">Milestones in my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${achievement.color} p-6 rounded-xl shadow-xl`}>
                <achievement.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-100">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}