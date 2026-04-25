import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Crowd Analysis using Edge Computing',
      description: 'Real-time object detection and crowd analysis system tailored for constrained devices with sub-500ms latency.',
      tech: ['Python', 'YOLOv8', 'Raspberry Pi', 'Tkinter'],
      github: 'https://github.com/aayam-bajaj/Crowd-Github',
      demo: null
    },
    {
      title: 'Smart Planner',
      description: 'An accessible navigation and route-planning system for Navi Mumbai leveraging machine learning and custom routing.',
      tech: ['Flask', 'OpenStreetMap', 'A* Algorithm', 'Leaflet.js', 'ML'],
      github: 'https://github.com/aayam-bajaj/smart_planner',
      demo: null
    },
    {
      title: 'Agentic City Planner',
      description: 'Urban planning microservices tool designed during an IBM Hackathon to analyze and simulate city infrastructure.',
      tech: ['Python', 'Node.js', 'AI/ML', 'Docker', 'IBM Watson'],
      github: 'https://github.com/EratosVoid/IBM-Hackathon',
      demo: null
    },
    {
      title: 'Reverse Snake',
      description: 'A unique web arcade game where you play as the food trying to avoid the snake. Features a custom cosmetic store and soundtrack.',
      tech: ['HTML5 Canvas', 'JS', 'Firebase', 'Tailwind', 'Web Audio API'],
      github: 'https://github.com/aayam-bajaj/Reverse-Snake',
      demo: 'https://reverse-snake-one.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover p-8 rounded-2xl flex flex-col h-full group"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    <FaGithub size={18} /> Source Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors ml-4"
                  >
                    <FaExternalLinkAlt size={18} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
