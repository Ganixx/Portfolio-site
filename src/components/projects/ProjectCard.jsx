import { motion } from 'framer-motion'

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
      <div className="relative p-4 bg-[var(--surface)] rounded-lg overflow-hidden">
        <div className="aspect-video mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold gradient-text mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 