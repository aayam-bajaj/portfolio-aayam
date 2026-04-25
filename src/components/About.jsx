import { motion } from 'framer-motion'
import { Terminal, Database, Cpu } from 'lucide-react'

export default function About() {
  const cards = [
    {
      icon: <Terminal size={24} className="text-accent" />,
      title: 'Web Automation',
      description: 'Building tools and scripts to automate repetitive tasks and extract data efficiently.'
    },
    {
      icon: <Cpu size={24} className="text-accent" />,
      title: 'Edge Computing',
      description: 'Deploying machine learning models on constrained devices like Raspberry Pi for real-time analysis.'
    },
    {
      icon: <Database size={24} className="text-accent" />,
      title: 'AI/ML Integration',
      description: 'Integrating predictive models and AI microservices into modern web applications.'
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm a final-year Information Technology engineering student at Bharati Vidyapeeth College of Engineering, Navi Mumbai, with a CGPA of 8.33 and hands-on experience across four internships spanning Java development, web development, and cybersecurity.
            </p>
            <p>
              I specialize in building systems where software meets intelligence — from real-time crowd detection on Raspberry Pi achieving sub-500ms latency, to accessibility-focused route optimization using modified A* algorithms, to FastAPI-based urban simulation engines integrated with AI planning pipelines.
            </p>
            <p>
              My technical foundation spans Python, Java, Flask, FastAPI, and machine learning, with practical exposure to edge computing, REST APIs, and database design. I've also presented my research paper at IEEE-RCSM 2025, reflecting my commitment to contributing to the broader engineering community.
            </p>
            <p>
              Beyond engineering, I served as Joint General Secretary of the Student Council, Chief Editor of the college magazine, and Leader of the College Literature Club — roles that have sharpened my leadership, communication, and organizational skills in equal measure.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-2xl flex items-start gap-4"
              >
                <div className="p-3 bg-accent/10 rounded-xl">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
