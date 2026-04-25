import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function Certifications() {
  const certs = [
    {
      title: 'DSA using Java',
      issuer: 'NPTEL',
      date: 'Completed',
      link: 'https://drive.google.com/file/d/1FD_j0hcJJ8rjK_js_WWsxew-ax1CMNtv/view?usp=sharing'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL',
      date: 'Completed',
      link: 'https://drive.google.com/file/d/1VNyEGfudAg7YfIgcBhQRl-EnS2D5ZD88/view?usp=sharing'
    },
    {
      title: 'Various Certifications',
      issuer: 'HackerRank',
      date: 'Completed',
      link: 'https://drive.google.com/drive/folders/1FRwaXMklWRQyAQXlLSYVAS8eGA79v_ox?usp=drive_link'
    }
  ]

  return (
    <section id="certifications" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover p-8 rounded-2xl flex flex-col items-center text-center group block"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{cert.title}</h3>
              <p className="text-accent font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
