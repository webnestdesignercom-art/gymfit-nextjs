import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Program {
  name: string
  duration: string
  image: string
  desc: string
}

interface ProgramsProps {
  programs: Program[]
  onExplore: (program: Program) => void
  onViewAll: () => void
}

export function Programs({ programs, onExplore, onViewAll }: ProgramsProps) {
  return (
    <section className="py-24 bg-gray-50 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-black italic text-gym-navy uppercase"
            >
              Elite <span className="text-gym-orange">Programs</span>
            </motion.h2>
            <p className="text-gray-600 font-body mt-4 max-w-xl">
              Choose your path. Each program is meticulously designed to break plateaus and force adaptation.
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="hidden md:flex items-center gap-2 font-heading font-bold text-gym-navy hover:text-gym-orange transition-colors uppercase tracking-wider"
          >
            View All Programs <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="w-full pl-4 sm:pl-6 lg:pl-8">
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory pr-8" style={{ scrollbarWidth: 'none' }}>
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onExplore(program)}
              className="relative flex-none w-[85vw] sm:w-[400px] aspect-[4/5] snap-center group overflow-hidden bg-gym-navy cursor-pointer"
            >
              <img
                src={program.image}
                alt={program.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-navy via-gym-navy/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-gym-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-wider w-fit mb-4 transform -skew-x-12">
                  <span className="block transform skew-x-12">{program.duration}</span>
                </div>
                <h3 className="text-3xl font-heading font-black italic text-white uppercase mb-2">{program.name}</h3>
                <p className="text-gray-300 font-body mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {program.desc}
                </p>
                <button className="w-full py-3 border-2 border-white text-white font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-gym-navy transition-colors">
                  Explore Program
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}