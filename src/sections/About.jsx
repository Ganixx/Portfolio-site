import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { experience } from '../data/experience'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold gradient-text">About Me</h2>
            <p className="text-gray-300 text-lg">{profile.summary}</p>
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[var(--primary)]">Location:</span> {profile.location}
              </div>
              <div>
                <span className="text-[var(--primary)]">Education:</span> {profile.education.degree}
              </div>
              <div>
                <span className="text-[var(--primary)]">GPA:</span> {profile.education.gpa}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Notable Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.education.courses.map((course) => (
                <div 
                  key={course}
                  className="bg-[var(--surface)] p-3 rounded-lg text-gray-300"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold gradient-text">Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--primary)]">{job.title}</h3>
                    <p className="text-xl text-gray-300">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{job.period}</p>
                    <p className="text-gray-400">{job.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold gradient-text">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Languages" skills={profile.skills.languages} />
            <SkillCategory title="Frontend" skills={profile.skills.frontend} />
            <SkillCategory title="Backend" skills={profile.skills.backend} />
            <SkillCategory title="Databases" skills={profile.skills.databases} />
            <SkillCategory title="Cloud & DevOps" skills={profile.skills.cloud} />
            <SkillCategory title="AI/ML" skills={profile.skills.aiml} />
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold gradient-text">Certifications</h2>
          <div className="grid gap-6">
            {profile.certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-[var(--surface)] p-6 rounded-lg space-y-4"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-[var(--primary)]">{cert.name}</h3>
                  <span className="text-gray-400">{cert.year}</span>
                </div>
                <p className="text-gray-300">{cert.issuer}</p>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ title, skills }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-[var(--primary)]">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-[var(--surface)] rounded-full text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default About 