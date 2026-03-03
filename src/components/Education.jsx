import { motion } from 'framer-motion'

const Education = () => {
  const items = [
    {
      title: 'Creative Media & Game Technologies',
      place: 'Hogeschool Rotterdam',
      note: 'Currently enrolled — focus on creative tech, game development, and security.'
    },
    {
      title: 'Cybersecurity Courses',
      place: 'TryHackMe',
      note: 'Completed courses on web vulnerabilities, network security, and penetration testing through hands-on labs.'
    },
    {
      title: 'CS50: Introduction to Computer Science',
      place: 'HarvardX (online)',
      note: 'Programming fundamentals, algorithms, data structures, and computer science concepts.'
    }
  ]

  return (
    <section id="education" className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-8">Education</h2>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.title} className="border-l-2 border-indigo-500/40 pl-6">
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="text-sm text-indigo-400 mb-1">{item.place}</p>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
