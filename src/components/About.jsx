import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          
          <div className="max-w-3xl space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm Jeffrey — a second-year Creative Media & Game Technologies student at 
              Hogeschool Rotterdam. Outside of lectures, most of my time goes into offensive 
              and defensive security: spinning up labs, breaking into boxes on TryHackMe, 
              and figuring out how things work under the hood.
            </p>
            <p>
              I use tools like Wireshark, Burp Suite, Nmap, and Metasploit on a regular 
              basis. The end goal is to land a junior security analyst or SOC analyst position 
              — somewhere I can keep learning and actually make systems safer.
            </p>
            <p>
              On the development side, I build full-stack applications with React, Node.js, 
              and Laravel, always keeping OWASP guidelines in mind. I like the overlap between 
              building things and knowing how to break them — it makes the code better.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
