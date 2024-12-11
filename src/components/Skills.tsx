import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'Redis'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { category: 'Other', items: ['DSA', 'REST APIs', 'WebSockets'] },
];

export default function Skills() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Here are the technologies I work with
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}