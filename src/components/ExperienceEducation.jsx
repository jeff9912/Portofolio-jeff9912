import { motion } from 'framer-motion'

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10">Experience & Education</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6">
                Experience
              </h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-indigo-500/30">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-500" />
                  <h4 className="text-lg font-semibold text-white">Student Assistant</h4>
                  <p className="text-sm text-indigo-400 mb-2">Hogeschool Rotterdam</p>
                  <ul className="space-y-1.5 text-gray-400 text-sm">
                    <li>Assisting lecturers with programming and game-development courses</li>
                    <li>Supporting fellow students with technical problems and debugging</li>
                    <li>Helping maintain lab environments and course materials</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6">
                Education
              </h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-indigo-500/30">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-500" />
                  <h4 className="text-lg font-semibold text-white">Creative Media & Game Technologies</h4>
                  <p className="text-sm text-indigo-400 mb-2">Hogeschool Rotterdam</p>
                  <p className="text-sm text-gray-400">
                    Currently enrolled — focus on creative tech, game development, and security.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-indigo-500/30">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-500/60" />
                  <h4 className="text-lg font-semibold text-white">Cybersecurity Courses</h4>
                  <p className="text-sm text-indigo-400 mb-2">TryHackMe</p>
                  <p className="text-sm text-gray-400">
                    Completed courses on web vulnerabilities, network security, and penetration testing through hands-on labs.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-indigo-500/30">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-500/40" />
                  <h4 className="text-lg font-semibold text-white">CS50: Introduction to Computer Science</h4>
                  <p className="text-sm text-indigo-400 mb-2">HarvardX (online)</p>
                  <p className="text-sm text-gray-400">
                    Programming fundamentals, algorithms, data structures, and computer science concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceEducation
