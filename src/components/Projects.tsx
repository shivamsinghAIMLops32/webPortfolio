import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Spotify Clone',
    description: 'A full-stack Spotify clone built with MERN stack featuring music playback, playlists, and user authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    github: 'https://github.com/shivamsinghAIMLops32/spotify-clone',
  },
  {
    title: 'Task Manager',
    description: 'A MERN stack todo application with real-time updates, task categories, and priority levels.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/shivamsinghAIMLops32/task-manager',
  },
  {
    title: 'GIF mania',
    description: 'An interactive gif webapp built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/shivamsinghAIMLops32/gifMania',
    website: 'https://gifymania.netlify.app/',
  },
  {
    title: 'Twitter Clone',
    description: 'A Twitter clone built with MERN stack featuring real-time tweets, likes, and comments.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis'],
    github: 'https://github.com/shivamsinghAIMLops32/twitter-clone',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Framer Motion.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/shivamsinghAIMLops32/portfolio',
  },
];

export default function Projects() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Here are some of my recent projects
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}