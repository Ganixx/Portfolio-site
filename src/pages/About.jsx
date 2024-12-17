import { motion } from 'framer-motion'
import ProfileSection from '../components/about/ProfileSection'
import SkillsSection from '../components/about/SkillsSection'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        <ProfileSection />
        <SkillsSection />
      </div>
    </motion.div>
  )
}

export default About 