import { motion } from 'framer-motion'
import { ChevronRight} from 'lucide-react'

interface HeroProps {
  onTrial: () => void
  onMembership: () => void
}

export function Hero({ onTrial, onMembership }: HeroProps) {
  const headline = ['FORGE', 'YOUR', 'LEGACY']

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
      >
        {/* 
          Replace these src URLs with your actual video files in /public/videos/
          e.g. src="/videos/gym-hero.mp4"
          Using a free gym stock video from a CDN as fallback:
        */}
        <source src="https://www.pexels.com/download/video/4098750/" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gym-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-gym-navy via-transparent to-gym-navy/30" />

      {/* Animated grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block bg-gym-orange text-white px-5 py-1.5 font-heading font-bold italic tracking-wider text-sm uppercase transform -skew-x-12"
        >
          <span className="block transform skew-x-12">No Excuses. Just Results.</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading font-black italic uppercase leading-none mb-8"
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 + i * 0.2 }}
              className={`block ${i === 1 ? 'text-gym-orange' : 'text-white'}`}
              style={{ transformOrigin: 'bottom center', display: 'block' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-body font-medium"
        >
          Join the most intense, results-driven fitness community.
          Push your limits and redefine what's possible.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            onClick={onTrial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-heading font-bold text-xl text-white bg-gym-orange uppercase tracking-wider overflow-hidden"
            style={{ boxShadow: '0 0 30px rgba(249,115,22,0.5)' }}
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_forwards]" />
            <span className="relative flex items-center gap-2">
              Start Free Trial <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            onClick={onMembership}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 font-heading font-bold text-xl text-white uppercase tracking-wider border-2 border-white/40 hover:border-white transition-colors"
          >
            Join Now
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs font-heading uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom diagonal clip */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-current text-white dark:text-gym-navy">
          <path d="M0 80L1200 0V80H0Z" />
        </svg>
      </div>
    </section>
  )
}