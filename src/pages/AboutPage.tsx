import { motion } from 'framer-motion'

interface AboutPageProps {
  onMembership: () => void
}

const team = [
  { name: 'Coach Rico', role: 'Head Strength Coach', exp: '12 yrs', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop' },
  { name: 'Coach Ana', role: 'HIIT & Endurance', exp: '8 yrs', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop' },
  { name: 'Coach Migs', role: 'Powerlifting Coach', exp: '10 yrs', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
]

export function AboutPage({ onMembership }: AboutPageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen">
      {/* Hero */}
      <div className="relative py-32 flex items-center justify-center overflow-hidden bg-gym-navy">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="relative text-center px-4">
          <h1 className="text-6xl md:text-8xl font-heading font-black italic uppercase text-white mb-4">
            Our <span className="text-gym-orange">Story</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            Built by athletes, for athletes. No fluff. No gimmicks. Just results.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-black italic uppercase text-gym-navy mb-4">
                Why <span className="text-gym-orange">GymFit?</span>
              </h2>
              <p className="text-gray-600 font-body leading-relaxed mb-4">
                GymFit was founded in 2018 by a group of competitive athletes who were tired of cookie-cutter gyms with zero accountability. We built a place where excuses go to die.
              </p>
              <p className="text-gray-600 font-body leading-relaxed">
                Every program, every coach, every piece of equipment was chosen with one goal: to help you become the strongest version of yourself. Period.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {([['2018', 'Founded'], ['1,500+', 'Members'], ['4.9★', 'Rating'], ['50+', 'Coaches']] as [string, string][]).map(([val, label]) => (
                <div key={label} className="p-6 text-center bg-gray-50 border-l-4 border-gym-orange">
                  <div className="text-3xl font-heading font-black italic text-gym-orange">{val}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-black italic uppercase text-gym-navy text-center mb-12">
            Meet The <span className="text-gym-orange">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="overflow-hidden bg-white border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 border-t-4 border-gym-orange">
                  <h3 className="text-xl font-heading font-black italic uppercase text-gym-navy">{member.name}</h3>
                  <p className="text-gym-orange text-sm font-heading font-bold uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-1 font-body">{member.exp} experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 text-center px-4 bg-gym-navy">
        <motion.button
          onClick={onMembership}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 text-white font-heading font-black uppercase tracking-widest transform -skew-x-12 text-xl bg-gradient-to-r from-gym-orange to-red-500"
        >
          <span className="block skew-x-12">Join Our Community →</span>
        </motion.button>
      </div>
    </motion.div>
  )
}