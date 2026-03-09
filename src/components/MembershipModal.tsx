import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ChevronRight } from 'lucide-react'

interface MembershipModalProps {
  onClose: () => void
}

const plans = [
  { name: 'Starter', price: '₱999', period: '/mo', features: ['3x classes per week', 'Locker room access', 'Basic nutrition guide', 'Community app access'] },
  { name: 'Elite', price: '₱1,999', period: '/mo', features: ['Unlimited classes', 'Personal trainer (2x/mo)', 'Full nutrition coaching', 'Priority booking', 'Guest pass (1x/mo)'], featured: true },
  { name: 'Beast', price: '₱3,499', period: '/mo', features: ['Unlimited everything', 'Daily PT sessions', 'Custom meal plans', 'Body composition scans', 'VIP locker'] },
]

type Step = 'plan' | 'details' | 'success'

export function MembershipModal({ onClose }: MembershipModalProps) {
  const [step, setStep] = useState<Step>('plan')
  const [selectedPlan, setSelectedPlan] = useState('Elite')
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', goal: 'strength' })

  const handleSubmit = () => {
    if (!form.firstName || !form.email) return
    setStep('success')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        className="relative w-full max-w-2xl overflow-hidden bg-gym-navy border-4 border-gym-orange max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10">
          <X size={22} />
        </button>

        {/* Step indicator */}
        <div className="flex border-b border-white/10">
          {['plan', 'details'].map((s, i) => (
            <div key={s} className={`flex-1 py-3 text-center text-xs font-heading font-bold uppercase tracking-wider transition-colors ${step === s || (step === 'success' && i === 1) ? 'text-gym-orange border-b-2 border-gym-orange' : 'text-white/30'}`}>
              {i + 1}. {s === 'plan' ? 'Choose Plan' : 'Your Details'}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">

          {/* STEP 1 — Plan Selection */}
          {step === 'plan' && (
            <motion.div key="plan" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="p-6 md:p-8">
              <h2 className="text-3xl font-heading font-black italic uppercase text-white mb-1">
                Choose Your <span className="text-gym-orange">Plan</span>
              </h2>
              <p className="text-gray-400 text-sm mb-6 font-body">No contracts. Cancel anytime.</p>

              <div className="space-y-3 mb-8">
                {plans.map((plan) => (
                  <button
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full p-4 text-left transition-all border-2 ${selectedPlan === plan.name ? 'border-gym-orange bg-gym-orange/10' : 'border-white/10 hover:border-white/30'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPlan === plan.name ? 'border-gym-orange bg-gym-orange' : 'border-white/30'}`}>
                          {selectedPlan === plan.name && <Check size={12} className="text-white" />}
                        </div>
                        <span className="font-heading font-black italic uppercase text-white text-lg">{plan.name}</span>
                        {plan.featured && (
                          <span className="px-2 py-0.5 bg-gym-orange text-white text-xs font-bold uppercase transform -skew-x-6">Popular</span>
                        )}
                      </div>
                      <span className="font-heading font-black text-gym-orange text-xl">{plan.price}<span className="text-gray-500 text-xs font-body">{plan.period}</span></span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 pl-8">
                      {plan.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-gray-400 text-xs font-body">• {f}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <motion.button
                onClick={() => setStep('details')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 text-white font-heading font-black uppercase tracking-widest transform -skew-x-12 bg-gym-orange text-lg flex items-center justify-center gap-2"
              >
                <span className="block skew-x-12 flex items-center gap-2">
                  Continue <ChevronRight size={20} />
                </span>
              </motion.button>
            </motion.div>
          )}

          {/* STEP 2 — Personal Details */}
          {step === 'details' && (
            <motion.div key="details" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-heading font-black italic uppercase text-white">
                    Your <span className="text-gym-orange">Details</span>
                  </h2>
                  <p className="text-gray-400 text-sm font-body mt-1">
                    Plan: <span className="text-gym-orange font-bold">{selectedPlan}</span> — {plans.find(p => p.name === selectedPlan)?.price}/mo
                  </p>
                </div>
                <button onClick={() => setStep('plan')} className="text-gray-500 hover:text-white text-xs uppercase tracking-wider font-heading font-bold transition-colors">
                  ← Change
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">First Name *</label>
                  <input type="text" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                    placeholder="Juan"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-gym-orange transition-colors font-body" />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Last Name</label>
                  <input type="text" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                    placeholder="dela Cruz"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-gym-orange transition-colors font-body" />
                </div>
              </div>

              <div className="space-y-4 mb-4">
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Email Address *</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="juan@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-gym-orange transition-colors font-body" />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+63 912 345 6789"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-gym-orange transition-colors font-body" />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Primary Goal</label>
                  <select value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })}
                    className="w-full px-4 py-3 bg-gym-navy border border-white/10 text-white outline-none focus:border-gym-orange transition-colors font-body">
                    <option value="strength">Build Strength</option>
                    <option value="fat-loss">Fat Loss / Shred</option>
                    <option value="endurance">Endurance</option>
                    <option value="muscle">Build Muscle</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 text-white font-heading font-black uppercase tracking-widest transform -skew-x-12 bg-gradient-to-r from-gym-orange to-red-500 text-lg mt-2"
              >
                <span className="block skew-x-12">Complete Sign Up →</span>
              </motion.button>
            </motion.div>
          )}

          {/* STEP 3 — Success */}
          {step === 'success' && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gym-orange flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-white" />
              </div>
              <h2 className="text-4xl font-heading font-black italic uppercase text-white mb-3">
                Welcome to <span className="text-gym-orange">GymFit!</span>
              </h2>
              <p className="text-gray-400 mb-2 font-body">
                You're now a <strong className="text-white">{selectedPlan}</strong> member, <strong className="text-white">{form.firstName}</strong>.
              </p>
              <p className="text-gray-500 text-sm mb-8 font-body">Check your email for your membership details and first class schedule.</p>
              <button onClick={onClose}
                className="px-8 py-3 border-2 border-gym-orange text-white font-heading font-bold uppercase tracking-wider hover:bg-gym-orange transition-colors">
                Let's Go! 💪
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>
    </div>
  )
}