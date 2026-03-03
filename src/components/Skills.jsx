import { motion } from 'framer-motion'
import {
  SiJavascript, SiPython, SiPhp,
  SiFlutter, SiTailwindcss, SiReact, SiNodedotjs, SiLaravel,
  SiWireshark
} from 'react-icons/si'
import { FaDatabase, FaTerminal, FaShieldAlt, FaNetworkWired, FaCode } from 'react-icons/fa'

const Skills = () => {
  const groups = [
    {
      label: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'C', icon: FaTerminal, color: '#A8B9CC' },
        { name: 'C#', icon: FaCode, color: '#239120' },
        { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
        { name: 'HTML', icon: FaCode, color: '#E34F26' },
        { name: 'CSS', icon: FaCode, color: '#1572B6' },
      ]
    },
    {
      label: 'Frameworks & Tools',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    {
      label: 'Security',
      skills: [
        { name: 'Wireshark', icon: SiWireshark, color: '#1679A7' },
        { name: 'Burp Suite', icon: FaShieldAlt, color: '#FF6633' },
        { name: 'Metasploit', icon: FaShieldAlt, color: '#2596CD' },
        { name: 'Nmap', icon: FaNetworkWired, color: '#9B59B6' },
        { name: 'Hydra', icon: FaTerminal, color: '#27AE60' },
        { name: 'Gobuster', icon: FaTerminal, color: '#E74C3C' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>

          <div className="space-y-10">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-5">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center gap-2 w-20"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                        <skill.icon size={28} style={{ color: skill.color }} />
                      </div>
                      <span className="text-xs text-gray-400 text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
