import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-8">Experience</h2>

          <div className="space-y-8">
            {/* Student Assistant */}
            <div className="border-l-2 border-indigo-500/40 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-medium text-white">Student Assistant</h3>
                <span className="text-sm text-[#64748b]">Hogeschool Rotterdam</span>
              </div>
              <ul className="mt-3 space-y-2 text-[#94a3b8] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8212;</span>
                  Assisting lecturers with teaching programming and game-development related courses
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8212;</span>
                  Supporting fellow students with technical problems and debugging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8212;</span>
                  Helping maintain lab environments and course materials
                </li>
              </ul>
            </div>

            {/* Cybersecurity Practice */}
            <div className="border-l-2 border-indigo-500/40 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-medium text-white">Cybersecurity Practice</h3>
                <span className="text-sm text-[#64748b]">Self-directed / TryHackMe</span>
              </div>
              <ul className="mt-3 space-y-2 text-[#94a3b8] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8212;</span>
                  Performed password cracks using Hashcat &amp; John the Ripper with wordlists and mask attacks against MD5, NTLM, SHA-512
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8212;</span>
                  Capturing and analyzing network traffic with Wireshark
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8212;</span>
                  Exploiting systems and injecting payloads with Metasploit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8212;</span>
                  Developing applications following OWASP security guidelines
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
