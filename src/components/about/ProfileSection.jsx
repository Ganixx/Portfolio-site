import { motion } from 'framer-motion'

const ProfileSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <img 
          src="https://via.placeholder.com/500" 
          alt="Profile" 
          className="relative rounded-lg w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold gradient-text">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient code and intuitive interfaces.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-[var(--primary)]">→</span>
            <span>5+ years of development experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[var(--primary)]">→</span>
            <span>50+ projects completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[var(--primary)]">→</span>
            <span>Multiple industry awards</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileSection 