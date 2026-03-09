import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

interface TrialModalProps {
  onClose: () => void
}

export function TrialModal({ onClose }: TrialModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', goal: 'strength' })

  const handleSubmit = () => {
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="relative w-full max-w-md overflow-hidden bg-gym-navy border-4 border-gym-orange"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10">
          <X size={24} />
        </button>

        {!submitted ? (
          <div className="p-8">
            <div className="inline-block px-4 py-1 bg-gym-orange text-white text-xs font-heading font-bold uppercase tracking-wider mb-4 transform -skew-x-12">
              <span className="block skew-x-12">Limited Spots Available</span>
            </div>
            <h2 className="text-4xl font-heading font-black italic uppercase text-white mb-2 leading-tight">
              Claim Your<br /><span className="text-gym-orange">Free Trial</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">First class is on us. No credit card required.</p>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Juan dela Cruz"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-gym-orange transition-colors font-body"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="juan@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-gym-orange transition-colors font-body"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Goal</label>
                <select
                  value={form.goal}
                  onChange={e => setForm({ ...form, goal: e.target.value })}
                  className="w-full px-4 py-3 bg-gym-navy/80 border border-white/10 text-white outline-none focus:border-gym-orange transition-colors font-body"
                >
                  <option value="strength">Build Strength</option>
                  <option value="fat-loss">Fat Loss / Shred</option>
                  <option value="endurance">Endurance</option>
                  <option value="muscle">Build Muscle</option>
                </select>
              </div>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 text-white font-heading font-black uppercase tracking-widest transform -skew-x-12 bg-gradient-to-r from-gym-orange to-red-500 text-xl"
              >
                <span className="block skew-x-12">Let's Get to Work →</span>
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gym-orange flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-heading font-black italic uppercase text-white mb-3">
              You're <span className="text-gym-orange">In!</span>
            </h2>
            <p className="text-gray-400 mb-2">
              Welcome to GymFit, <strong className="text-white">{form.name}</strong>.
            </p>
            <p className="text-gray-500 text-sm mb-8">Check your email for next steps. No Excuses.</p>
            <button
              onClick={onClose}
              className="px-8 py-3 border-2 border-gym-orange text-white font-heading font-bold uppercase tracking-wider hover:bg-gym-orange transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}