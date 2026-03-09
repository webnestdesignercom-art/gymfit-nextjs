import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowLeft } from 'lucide-react'
import { programs } from '../data'

interface ProgramDetailPageProps {
  onMembership: () => void
}

export function ProgramDetailPage({ onMembership }: ProgramDetailPageProps) {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const program = programs.find(p => p.slug === slug)

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black italic text-gym-navy dark:text-white mb-4">Program Not Found</h1>
          <button onClick={() => navigate('/programs')} className="text-gym-orange font-bold uppercase tracking-wider">← Back to Programs</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gym-navy/30 transition-colors">
      {/* Hero */}
      <div className="relative h-72 md:h-[420px] overflow-hidden bg-gym-navy pt-16">
        <img src={program.image} alt={program.name} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-navy to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/programs')}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-wider font-heading font-bold transition-colors mb-4 w-fit"
          >
            <ArrowLeft size={16} /> Back to Programs
          </button>
          <div className="inline-block px-4 py-1 bg-gym-orange text-white text-xs font-heading font-bold uppercase tracking-wider mb-3 transform -skew-x-12 w-fit">
            <span className="block skew-x-12">{program.duration}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black italic text-white uppercase">{program.name}</h1>
          <p className="text-gray-300 mt-2 font-body">{program.desc}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {([['Duration', `${program.weeks} Weeks`], ['Sessions', program.sessions], ['Level', program.level]] as [string, string][]).map(([label, val]) => (
            <div key={label} className="text-center p-4 bg-gym-navy dark:bg-white/5">
              <div className="text-xl md:text-2xl font-heading font-black italic text-gym-orange">{val}</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Phases */}
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-black italic uppercase text-gym-navy dark:text-white mb-6">
            Program <span className="text-gym-orange">Phases</span>
          </h2>
          <div className="space-y-3">
            {program.phases.map((phase, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-white/5 border-l-4 border-gym-orange">
                <span className="font-heading font-black italic text-2xl text-gym-orange w-8 shrink-0">{i + 1}</span>
                <p className="text-gray-700 dark:text-gray-300 pt-1 font-body">{phase}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Included */}
        <div className="mb-12 p-8 bg-gym-navy">
          <h2 className="text-3xl font-heading font-black italic uppercase text-white mb-6">
            What's <span className="text-gym-orange">Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {program.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300 font-body">
                <Check size={18} className="text-gym-orange shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>

        <motion.button onClick={onMembership} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          className="w-full py-5 text-white font-heading font-black uppercase tracking-widest transform -skew-x-12 text-xl bg-gradient-to-r from-gym-orange to-red-500">
          <span className="block skew-x-12">Start This Program — Join Now →</span>
        </motion.button>
      </div>
    </div>
  )
}