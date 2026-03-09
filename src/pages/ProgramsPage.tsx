import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { programs } from '../data'

export function ProgramsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gray-50 dark:bg-gym-navy/50 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black italic uppercase text-gym-navy dark:text-white mb-4"
          >
            All <span className="text-gym-orange">Programs</span>
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-body">
            Each program is engineered to break plateaus and force adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(`/programs/${program.slug}`)}
              className="relative overflow-hidden cursor-pointer group bg-gym-navy"
              style={{ aspectRatio: '4/3' }}
            >
              <img src={program.image} alt={program.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-30 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-navy/95 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="inline-block px-3 py-1 bg-gym-orange text-white text-xs font-heading font-bold uppercase mb-3 transform -skew-x-12 w-fit">
                  <span className="block skew-x-12">{program.duration}</span>
                </div>
                <h3 className="text-4xl font-heading font-black italic text-white uppercase">{program.name}</h3>
                <p className="text-gray-400 text-sm mt-2 mb-4 font-body">{program.desc}</p>
                <div className="flex items-center gap-2 font-heading font-bold uppercase text-sm text-gym-orange group-hover:gap-4 transition-all">
                  Explore Program <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}