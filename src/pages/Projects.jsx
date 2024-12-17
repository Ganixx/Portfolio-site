import { motion } from 'framer-motion'
import ProjectGallery from '../components/projects/ProjectGallery'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ProjectGallery />
      </div>
    </motion.div>
  )
}

export default Projects 