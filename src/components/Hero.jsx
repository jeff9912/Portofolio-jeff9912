import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src="/jeff.jpg"
              alt="Jeffrey Li"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-indigo-500/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Jeffrey Li
            </h1>
            <p className="text-lg text-indigo-400 font-medium mb-4">
              Aspiring Security Analyst &amp; Full Stack Developer
            </p>
            <p className="text-gray-400 max-w-lg mb-6 leading-relaxed">
              CMGT student at Hogeschool Rotterdam with a focus on offensive &amp; defensive
              security, currently working as a Student Assistant while building secure applications
              and breaking things in labs.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://github.com/jeff9912" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-400 transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/jeffrey-li-63ba10273/" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-400 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:Jeffrey.crdsts@gmail.com"
                className="text-gray-500 hover:text-indigo-400 transition-colors">
                <FaEnvelope size={22} />
              </a>
              <span className="h-4 w-px bg-gray-700 mx-1" />
              <a href="#projects" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                See my work &darr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
