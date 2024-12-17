import { motion } from 'framer-motion'

const SkillCard = ({ category, items, icon, index }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
      <div className="relative p-6 bg-[var(--surface)] rounded-lg space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold gradient-text">{category}</h3>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div 
              key={item}
              className="flex items-center space-x-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCard 