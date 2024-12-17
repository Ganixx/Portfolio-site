import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import ParticleBackground from '../components/home/ParticleBackground'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex items-center"
    >
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 max-w-3xl">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{profile.name.split(' ')[0]}</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl text-gray-300"
          >
            {profile.role}
          </motion.h2>
          
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            {profile.summary}
          </motion.p>
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <a 
              href="#projects"
              className="btn bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-black"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="btn border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home 