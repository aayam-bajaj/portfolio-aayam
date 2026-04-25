import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    'Python', 'Java', 'JavaScript ES6+', 'HTML5 Canvas',
    'React', 'Node.js', 'Flask', 'FastAPI',
    'MySQL', 'SQLite', 'Git', 'Linux',
    'AI/ML', 'OpenStreetMap', 'OSMnx', 'Tailwind CSS'
  ]

  return (
    <section id="skills" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'rgba(0, 212, 255, 0.15)',
                borderColor: 'rgba(0, 212, 255, 0.5)'
              }}
              className="px-6 py-3 glass rounded-full text-gray-300 font-medium cursor-default transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
