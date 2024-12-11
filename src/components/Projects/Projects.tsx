import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

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
    title: 'Tic Tac Toe',
    description: 'An interactive Tic Tac Toe game with multiplayer support and game history.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/shivamsinghAIMLops32/tic-tac-toe',
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
    <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}