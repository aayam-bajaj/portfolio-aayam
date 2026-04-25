import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-base mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
            <span className="text-accent font-heading font-bold text-xl">AB</span>
          </div>
          <span className="text-2xl font-heading font-bold text-white tracking-wide">Aayam Bajaj</span>
        </div>
        
        <div className="flex gap-6 mb-8">
          <a 
            href="https://github.com/aayam-bajaj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/aayam-bajaj-4a94b82a9"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="mailto:aayambajaj4@gmail.com" 
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a 
            href={`${import.meta.env.BASE_URL}assets/AAYAMBAJAJ_RESUME.pdf`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all hover:scale-110"
            aria-label="Resume PDF"
          >
            <FaFileAlt size={20} />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {currentYear} Aayam Bajaj. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
