import { motion } from 'framer-motion'
import { Flame, Users, Timer, Trophy } from 'lucide-react'
const offers = [
  {
    title: 'High-Intensity Interval Training',
    description:
      'Burn maximum calories in minimum time with our signature 45-minute HIIT sessions.',
    icon: Flame,
    color: 'bg-gym-orange',
  },
  {
    title: 'Strength & Conditioning',
    description:
      'Build functional muscle and raw power with expert-led lifting programs.',
    icon: Trophy,
    color: 'bg-gym-navy',
  },
  {
    title: 'Team Training',
    description:
      "Suffer together, succeed together. The community will push you further than you'd go alone.",
    icon: Users,
    color: 'bg-gym-navy',
  },
  {
    title: '24/7 Access',
    description:
      "Your goals don't sleep, and neither do we. Train on your schedule, day or night.",
    icon: Timer,
    color: 'bg-gym-orange',
  },
]
export function WhatWeOffer() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl md:text-6xl font-heading font-black italic text-gym-navy mb-4"
          >
            THE <span className="text-gym-orange">ARSENAL</span>
          </motion.h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Everything you need to build the ultimate machine. No gimmicks, just
            proven methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{
                duration: 0.6,
                type: 'spring',
                bounce: 0.4,
              }}
              className="group relative bg-gray-50 p-8 overflow-hidden border-l-4 border-gym-orange hover:shadow-2xl transition-shadow"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gray-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />

              <div
                className={`inline-flex p-4 ${offer.color} text-white mb-6 transform -skew-x-12`}
              >
                <offer.icon size={32} className="transform skew-x-12" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-gym-navy mb-3 uppercase italic">
                {offer.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
