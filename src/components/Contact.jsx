import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Open to junior security analyst, SOC, or development roles. 
            Feel free to reach out — I'm always happy to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:Jeffrey.crdsts@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FaEnvelope size={16} />
              Jeffrey.crdsts@gmail.com
            </a>
            <a
              href="https://github.com/jeff9912"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={16} />
              github.com/jeff9912
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey-li-63ba10273/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
