import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Secure Route Planner',
      description:
        'A route planner built on top of the NS API that provides real-time Dutch public transport information. Includes live location tracking and was developed with security as a first-class concern.',
      stack: ['React Native', 'Node.js', 'NS API', 'OWASP'],
      github: 'https://github.com/jeff9912/CLE3_TEAM11',
      featured: true
    },
    {
      title: 'Video Hosting Platform',
      description:
        'Full-stack video platform with a custom detection system that identifies and blocks automated uploads. Handles user auth, content management, and secure file storage.',
      stack: ['Laravel', 'PHP', 'Security', 'Full Stack'],
      github: 'https://github.com/Quinten-1074726/TLE1-Experimenteren-Anti-AI-Captcha',
      featured: true
    },
    {
      title: 'International Poverty Research Project',
      description:
        'Collaborated with four international students during a trip to Finland to research and prototype an application focused on combating poverty. Involved data analysis, brainstorming sessions, and cross-cultural teamwork.',
      stack: ['Research', 'Data Analysis', 'International Collaboration']
    },
    {
      title: 'Cybersecurity Labs',
      description:
        'Ongoing self-directed practice across penetration testing, network analysis, and vulnerability assessment. Working through TryHackMe rooms and building custom lab environments.',
      stack: ['Metasploit', 'Wireshark', 'Nmap', 'Burp Suite', 'Hashcat']
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl p-6 transition-all group ${
                  project.featured
                    ? 'bg-gray-900 border border-indigo-500/20 hover:border-indigo-500/50'
                    : 'bg-gray-900 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-white flex-1">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-400 transition-colors ml-2 flex-shrink-0"
                      title="View on GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
