import { motion } from 'framer-motion'
import ImageWithFallback from '../common/ImageWithFallback'

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout="position"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="relative h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
        <div className="relative h-full bg-[var(--surface)] rounded-lg p-5 flex flex-col">
          <div className="aspect-video mb-5 overflow-hidden rounded-lg">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold gradient-text mb-3">{project.title}</h3>
          <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[var(--text-secondary)] px-2 py-1 text-xs rounded-full bg-[var(--primary)]/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 