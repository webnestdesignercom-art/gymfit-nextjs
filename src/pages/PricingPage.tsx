import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingPageProps {
  onMembership: () => void
}

const plans = [
  {
    name: 'Starter', price: '₱999', period: '/mo',
    features: ['3x classes per week', 'Locker room access', 'Basic nutrition guide', 'Community app access'],
    featured: false,
  },
  {
    name: 'Elite', price: '₱1,999', period: '/mo',
    features: ['Unlimited classes', 'Personal trainer session (2x/mo)', 'Full nutrition coaching', 'Priority booking', 'Guest pass (1x/mo)'],
    featured: true,
  },
  {
    name: 'Beast', price: '₱3,499', period: '/mo',
    features: ['Unlimited everything', 'Daily PT sessions', 'Custom meal plans', 'Body composition scans', 'VIP locker', '2x Guest passes'],
    featured: false,
  },
]

export function PricingPage({ onMembership }: PricingPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black italic uppercase text-gym-navy mb-4">
            Choose Your <span className="text-gym-orange">Weapon</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto font-body">
            No contracts. No fluff. Just the plan that matches your intensity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 overflow-hidden ${plan.featured ? 'scale-105' : ''}`}
              style={{
                background: plan.name === 'Beast' ? '#F97316' : plan.name === 'Elite' ? '#0F172A' : 'white',
                border: plan.featured ? '3px solid #F97316' : '1px solid #e5e7eb',
                boxShadow: plan.featured ? '0 20px 60px rgba(249,115,22,0.3)' : 'none',
              }}
            >
              {plan.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gym-orange text-white text-xs font-heading font-bold uppercase transform -skew-x-12">
                  <span className="block skew-x-12">Most Popular</span>
                </div>
              )}

              <h3 className={`text-2xl font-heading font-black italic uppercase mb-1 ${plan.name === 'Beast' || plan.name === 'Elite' ? 'text-white' : 'text-gym-navy'}`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className="text-5xl font-heading font-black"
                  style={{ color: plan.name === 'Beast' ? 'white' : plan.name === 'Elite' ? '#F97316' : '#0F172A' }}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.name === 'Starter' ? 'text-gray-400' : 'text-white/60'}`}>{plan.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <div key={j} className={`flex items-center gap-3 text-sm font-body ${plan.name === 'Starter' ? 'text-gray-700' : 'text-white/80'}`}>
                    <Check size={16} className={plan.name === 'Starter' ? 'text-gym-orange' : 'text-white'} />
                    {f}
                  </div>
                ))}
              </div>

              <motion.button
                onClick={onMembership}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 font-heading font-black uppercase tracking-wider transform -skew-x-12 ${
                  plan.featured
                    ? 'bg-gym-orange text-white'
                    : plan.name === 'Beast'
                    ? 'border-2 border-white text-white hover:bg-white hover:text-gym-orange transition-colors'
                    : 'border-2 border-gym-navy text-gym-navy hover:bg-gym-navy hover:text-white transition-colors'
                }`}
              >
                <span className="block skew-x-12">Start Free Trial</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}