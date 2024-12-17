import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageWithFallback from '../common/ImageWithFallback'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black/75" />

            <div className="inline-block w-full max-w-4xl my-8 p-6 text-left align-middle bg-[var(--surface)] rounded-2xl shadow-xl transform transition-all">
              <div className="aspect-video mb-6">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <Dialog.Title as="h3" className="text-3xl font-bold gradient-text mb-4">
                {project.title}
              </Dialog.Title>

              <p className="text-gray-300 mb-6">{project.description}</p>

              {project.features && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[var(--primary)] mb-3">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[var(--primary)] mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black/30 rounded-full text-[var(--primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-black"
                >
                  View Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10"
                >
                  View Code
                </a>
                <button
                  onClick={onClose}
                  className="btn bg-gray-600 hover:bg-gray-700 text-white ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal 