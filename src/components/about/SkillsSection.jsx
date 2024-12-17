import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'TypeScript'],
    icon: '🎨'
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
    icon: '⚙️'
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
    icon: '🛠️'
  },
  {
    category: 'Soft Skills',
    items: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork', 'Agile'],
    icon: '🤝'
  }
]

const SkillsSection = () => {
  return (
    <div className="space-y-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center gradient-text"
      >
        Skills & Expertise
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.category}
            {...skill}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection 