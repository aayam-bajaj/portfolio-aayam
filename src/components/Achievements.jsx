import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      title: 'IEEE-RCSM 2025 Research Paper',
      description: 'Co-authored and presented a research paper on edge computing applications at the IEEE-RCSM 2025 conference.'
    },
    {
      title: 'Editor-in-Chief of College Magazine',
      description: 'Led a team of writers and designers to publish the annual college magazine, overseeing content curation and editorial direction.'
    },
    {
      title: 'Joint General Secretary of Student Council',
      description: 'Organized major collegiate events, managed student affairs, and acted as a liaison between students and administration.'
    },
    {
      title: 'Leader of Literature Club',
      description: 'Fostered a community of readers and writers, hosting regular events, debates, and literature reviews.'
    },
    {
      title: 'Winner of College-level Technical Quiz',
      description: 'Secured first place in a highly competitive technical quiz covering computer science fundamentals and modern technologies.'
    }
  ]

  return (
    <section id="achievements" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & Leadership</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10"></div>

          <div className="space-y-12">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 bg-base border-2 border-accent rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                    {item.title}
                  </h3>
                  <p className="text-gray-400 pl-7 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
