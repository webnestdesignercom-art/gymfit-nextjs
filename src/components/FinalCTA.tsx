import { motion } from 'framer-motion'

interface FinalCTAProps {
  onTrial: () => void
}

export function FinalCTA({ onTrial }: FinalCTAProps) {
  return (
    <section className="relative py-32 bg-white dark:bg-gym-navy flex items-center justify-center overflow-hidden z-10 transition-colors">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <span className="text-[20vw] font-heading font-black italic leading-none whitespace-nowrap text-gym-navy dark:text-white">
          GYMFIT
        </span>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="text-5xl md:text-7xl font-heading font-black italic text-gym-navy dark:text-white uppercase mb-6 leading-tight"
        >
          Stop Waiting.<br /><span className="text-gym-orange">Start Sweating.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-400 font-body mb-10 max-w-2xl mx-auto"
        >
          Your first class is on us. Experience the intensity, meet the community.
        </motion.p>
        <motion.button
          onClick={onTrial}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="px-10 py-5 font-heading font-black text-2xl text-white uppercase tracking-widest transform -skew-x-12 bg-gradient-to-r from-gym-orange via-red-500 to-gym-orange shadow-[0_0_40px_rgba(255,69,0,0.4)] hover:shadow-[0_0_60px_rgba(255,69,0,0.6)] transition-shadow"
        >
          <span className="block transform skew-x-12">Claim Free Trial</span>
        </motion.button>
      </div>
    </section>
  )
}