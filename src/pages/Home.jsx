import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import ParticleBackground from '../components/home/ParticleBackground'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      <ParticleBackground />
      <Hero />
    </motion.div>
  )
}

export default Home 