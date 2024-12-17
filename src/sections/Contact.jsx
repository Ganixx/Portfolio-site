import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    setSubmitStatus('success')
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[var(--surface)] p-6 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-[var(--primary)]">Contact Information</h3>
              <div className="space-y-4">
                <ContactItem
                  icon="📧"
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactItem
                  icon="📱"
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone}`}
                />
                <ContactItem
                  icon="📍"
                  label="Location"
                  value={profile.location}
                />
                <ContactItem
                  icon="💼"
                  label="LinkedIn"
                  value="Connect on LinkedIn"
                  href={profile.linkedin}
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[var(--surface)] p-6 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-[var(--primary)]">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <QuickLink href="#projects" text="View Projects" />
                <QuickLink href={profile.linkedin} text="LinkedIn" />
                <QuickLink href="https://github.com/yourusername" text="GitHub" />
                <QuickLink href="#about" text="About Me" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-[var(--surface)] p-6 rounded-2xl space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[var(--text-secondary)] text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-white"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-black font-medium py-3 rounded-lg transition-colors relative overflow-hidden group"
            >
              <span className={`${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                Send Message
              </span>
              {isSubmitting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  )
}

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-start space-x-4">
    <span className="text-2xl">{icon}</span>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-white hover:text-[var(--primary)] transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
)

const QuickLink = ({ href, text }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="px-4 py-2 bg-black/30 rounded-lg text-center text-sm text-gray-300 hover:text-[var(--primary)] transition-colors"
  >
    {text}
  </a>
)

export default Contact 