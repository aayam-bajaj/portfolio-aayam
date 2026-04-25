import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animation (Subtle Grid / Particles) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Aayam Bajaj</span>
          </h1>
          
          <div className="text-2xl md:text-4xl text-gray-300 font-heading mb-8 h-12">
            <TypeAnimation
              sequence={[
                "I'm an IT Engineer",
                2000,
                "I'm a Problem Solver",
                2000,
                "I'm a Tech Enthusiast",
                2000
              ]}
              wrapper="span"
              speed={50}
              className="text-white font-semibold"
              repeat={Infinity}
            />
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Final Year IT Engineer | Interned at 4 Companies | Building Real-Time Systems & Purposeful Solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-base font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 text-black">
                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href={`${import.meta.env.BASE_URL}assets/AAYAMBAJAJ_RESUME.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
            >
              Resume PDF <Download size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
