import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Welcome to My World</span>
        </motion.h1>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'UI/UX Designer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="neon-text"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4"
        >
          <a 
            href="#projects" 
            className="btn bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-black font-medium"
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
  )
}

export default Hero 