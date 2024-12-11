import { motion } from 'framer-motion';
import TimelineSkill from './TimelineSkill';

const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    year: '2023',
    description: 'Mastered modern frontend technologies and frameworks'
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express', 'Prisma', 'Redis'],
    year: '2023',
    description: 'Built scalable backend services and APIs'
  },
  {
    category: 'Database Management',
    items: ['PostgreSQL', 'MongoDB'],
    year: '2023',
    description: 'Worked with both SQL and NoSQL databases'
  },
  {
    category: 'Programming Fundamentals',
    items: ['Java', 'Data Structures', 'Algorithms'],
    year: '2022',
    description: 'Strong foundation in programming concepts and problem-solving'
  },
  {
    category: 'Development Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
    year: '2022',
    description: 'Proficient with modern development tools and workflows'
  }
];

export default function Skills() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Journey
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            My technical evolution and expertise
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-indigo-200 dark:bg-indigo-900" />
          <div className="space-y-12">
            {skills.map((skill, index) => (
              <TimelineSkill key={skill.category} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}