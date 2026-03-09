import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, Youtube } from 'lucide-react'

const trainers = [
  {
    name: 'Coach Rico',
    role: 'Head Strength Coach',
    exp: '12 Years',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    specialties: ['Powerlifting', 'Strength & Conditioning', 'Olympic Lifting'],
    certifications: ['NSCA-CSCS', 'USAW Level 2', 'CPR/AED'],
    bio: 'Rico is a 3x national powerlifting champion who has trained over 500 athletes. His no-nonsense approach to strength building has helped clients add hundreds of pounds to their total.',
    classes: ['Strength Foundations', 'SHRED Circuit', 'Open Gym'],
    instagram: '@coachrico',
    youtube: 'CoachRico',
  },
  {
    name: 'Coach Ana',
    role: 'HIIT & Endurance Specialist',
    exp: '8 Years',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    specialties: ['HIIT Training', 'Endurance', 'Fat Loss'],
    certifications: ['ACE-CPT', 'Precision Nutrition L1', 'TRX Certified'],
    bio: 'Ana competed at the national level in track & field before transitioning to coaching. Her high-energy classes are legendary for producing dramatic body transformations in record time.',
    classes: ['HIIT Blast', 'Morning Cardio', 'Team HIIT', 'Endurance Run'],
    instagram: '@coachanafitness',
    youtube: 'CoachAna',
  },
  {
    name: 'Coach Migs',
    role: 'Powerlifting Coach',
    exp: '10 Years',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
    specialties: ['Powerlifting', 'Hypertrophy', 'Meet Prep'],
    certifications: ['IPF Technical Official', 'NSCA-CPT', 'FMS Level 2'],
    bio: 'Migs holds the regional record in the 93kg class deadlift. He specializes in taking intermediate lifters to their first competition and beyond. His programming has helped 30+ athletes hit all-time PRs.',
    classes: ['PowerLift', 'Hypertrophy', 'Powerlifting Meet Prep'],
    instagram: '@coachmigslifts',
    youtube: 'MigsLifts',
  },
  {
    name: 'Coach Sam',
    role: 'Mobility & Recovery Coach',
    exp: '6 Years',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    specialties: ['Mobility', 'Injury Prevention', 'Recovery Protocols'],
    certifications: ['FRC Mobility Specialist', 'NASM-CES', 'Yoga Alliance RYT-200'],
    bio: 'Sam bridges the gap between training hard and recovering smart. After recovering from a career-ending injury himself, he devoted his career to helping athletes move better and stay injury-free.',
    classes: ['Mobility & Recovery', 'Active Recovery', 'Mobility Flow'],
    instagram: '@coachsamfit',
    youtube: 'CoachSamFit',
  },
]

export function TrainerProfiles() {
  const [selected, setSelected] = useState<typeof trainers[0] | null>(null)

  return (
    <section className="py-24 bg-gym-navy relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black italic uppercase text-white mb-3"
          >
            Meet Your <span className="text-gym-orange">Coaches</span>
          </motion.h2>
          <p className="text-gray-400 font-body max-w-xl mx-auto">
            Elite athletes turned coaches. They've been where you are — and they'll get you where you want to be.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(trainer)}
              className="group cursor-pointer overflow-hidden bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-gym-orange"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-navy/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-gym-orange text-xs font-heading font-bold uppercase tracking-wider">{trainer.role}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-heading font-black italic uppercase text-white mb-1">{trainer.name}</h3>
                <p className="text-gray-500 text-xs font-body mb-3">{trainer.exp} Experience</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {trainer.specialties.slice(0, 2).map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 bg-white/10 text-gray-300 font-body">{s}</span>
                  ))}
                </div>
                <button className="w-full py-2 border border-white/20 text-white/70 text-xs font-heading font-bold uppercase tracking-wider hover:border-gym-orange hover:text-gym-orange transition-colors">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trainer Detail Modal */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(6px)' }}
            onClick={(e) => e.target === e.currentTarget && setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 22, stiffness: 280 }}
              className="relative w-full max-w-lg bg-gym-navy border-4 border-gym-orange overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white/50 hover:text-white z-10 transition-colors">
                <X size={22} />
              </button>
              <div className="relative h-56 overflow-hidden">
                <img src={selected.img} alt={selected.name} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-navy to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-gym-orange text-xs font-heading font-bold uppercase tracking-wider mb-1">{selected.role}</p>
                  <h3 className="text-4xl font-heading font-black italic uppercase text-white">{selected.name}</h3>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-gray-300 font-body leading-relaxed text-sm">{selected.bio}</p>

                <div>
                  <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-gym-orange mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.specialties.map((s) => (
                      <span key={s} className="px-3 py-1 bg-white/10 text-white text-xs font-body">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-gym-orange mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.certifications.map((c) => (
                      <span key={c} className="px-3 py-1 border border-white/20 text-gray-400 text-xs font-body">{c}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-gym-orange mb-2">Classes</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.classes.map((c) => (
                      <span key={c} className="text-gray-400 text-xs font-body">• {c}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-gym-orange transition-colors">
                    <Instagram size={14} /> {selected.instagram}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-red-600 transition-colors">
                    <Youtube size={14} /> YouTube
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}